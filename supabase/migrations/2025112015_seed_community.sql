begin;

-- Unique indexes to allow upserts by name
create unique index if not exists community_categories_name_unique on public.community_categories(name);
create unique index if not exists community_channels_name_unique on public.community_channels(name);

-- Seed categories
insert into public.community_categories(name, "order") values
  ('GERAL', 1),
  ('AULAS', 2),
  ('PROJETOS', 3)
on conflict (name) do nothing;

-- Seed channels (match UI names)
with cats as (
  select id, name from public.community_categories
)
insert into public.community_channels(name, category_id, type, is_private)
select 'boas-vindas', (select id from cats where name = 'GERAL'), 'text', false
union all
select 'avisos', (select id from cats where name = 'GERAL'), 'text', true
union all
select 'chat-geral', (select id from cats where name = 'GERAL'), 'text', false
union all
select 'aula-01-fundamentos', (select id from cats where name = 'AULAS'), 'text', false
union all
select 'aula-02-agentes', (select id from cats where name = 'AULAS'), 'text', false
union all
select 'aula-03-llms', (select id from cats where name = 'AULAS'), 'text', false
union all
select 'dúvidas-técnicas', (select id from cats where name = 'AULAS'), 'text', false
union all
select 'showcase', (select id from cats where name = 'PROJETOS'), 'text', false
union all
select 'colaboração', (select id from cats where name = 'PROJETOS'), 'text', false
union all
select 'ideias', (select id from cats where name = 'PROJETOS'), 'text', false
on conflict (name) do nothing;

-- Seed membership: add all profiles to public channels including 'avisos' for test of private access
do $$
declare
  r record;
  ch public.community_channels%rowtype;
begin
  for ch in select * from public.community_channels loop
    for r in select user_id from public.profiles loop
      begin
        insert into public.channel_members(channel_id, user_id, role)
        values (ch.id, r.user_id, 'member')
        on conflict (channel_id, user_id) do nothing;
      exception when others then null;
      end;
    end loop;
  end loop;
end $$;

commit;