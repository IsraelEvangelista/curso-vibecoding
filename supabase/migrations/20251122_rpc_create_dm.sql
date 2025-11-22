-- Função segura para criar canais de DM e adicionar ambos os usuários
-- Resolve problema de RLS que impedia adicionar o outro usuário

create or replace function public.create_dm_channel(target_user_id uuid)
returns uuid
language plpgsql
security definer -- Roda com permissões de admin
set search_path = public
as $$
declare
  new_channel_id uuid;
  dm_name text;
  ids uuid[];
  current_user_id uuid;
begin
  current_user_id := auth.uid();
  
  -- Ordena IDs para nome determinístico
  if current_user_id < target_user_id then
    dm_name := 'dm-' || current_user_id || '-' || target_user_id;
  else
    dm_name := 'dm-' || target_user_id || '-' || current_user_id;
  end if;

  -- Verifica se canal já existe
  select id into new_channel_id from public.community_channels where name = dm_name;
  
  if new_channel_id is null then
    -- Cria novo canal privado
    -- Tenta pegar a primeira categoria existente (fallback)
    insert into public.community_channels (name, type, is_private, category_id)
    values (
      dm_name, 
      'text', 
      true, 
      (select id from public.community_categories order by "order" asc limit 1)
    )
    returning id into new_channel_id;
  end if;

  -- Garante que ambos os usuários sejam membros (conserta chats quebrados)
  insert into public.channel_members (channel_id, user_id) 
  values (new_channel_id, current_user_id)
  on conflict (channel_id, user_id) do nothing;

  insert into public.channel_members (channel_id, user_id) 
  values (new_channel_id, target_user_id)
  on conflict (channel_id, user_id) do nothing;

  return new_channel_id;
end;
$$;
