-- Função para listar DMs do usuário com nomes resolvidos
-- Evita problemas de RLS e recursão

create or replace function public.get_my_dms()
returns table (
  channel_id uuid,
  channel_name text,
  other_user_id uuid,
  other_user_name text,
  other_user_avatar text
)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  select 
    c.id as channel_id,
    c.name as channel_name,
    p.user_id as other_user_id,
    coalesce(p.full_name, 'Usuário') as other_user_name,
    p.avatar_url as other_user_avatar
  from public.community_channels c
  join public.channel_members cm_me on cm_me.channel_id = c.id
  join public.channel_members cm_other on cm_other.channel_id = c.id
  join public.profiles p on p.user_id = cm_other.user_id
  where 
    c.name like 'dm-%'
    and cm_me.user_id = auth.uid()
    and cm_other.user_id != auth.uid();
end;
$$;
