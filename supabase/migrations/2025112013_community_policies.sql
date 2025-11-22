begin;

-- Enable RLS
alter table public.community_categories enable row level security;
alter table public.community_channels enable row level security;
alter table public.channel_members enable row level security;
alter table public.messages enable row level security;
alter table public.message_attachments enable row level security;
alter table public.message_reactions enable row level security;
alter table public.message_reads enable row level security;

-- Helper: ensure is_admin() exists (expected per project)
create or replace function public.is_admin() returns boolean 
language sql 
security definer 
set search_path = public, pg_temp 
as $$
  select exists (
    select 1 from public.profiles p where p.user_id = auth.uid() and p.role = 'admin'
  );
$$;

-- profiles: lightweight read of active profiles (name/avatar) for members listing
alter table public.profiles enable row level security;
create policy profiles_read_active on public.profiles
  for select
  to authenticated
  using (is_active = true);

-- community_categories
create policy community_categories_read on public.community_categories
  for select to authenticated using (true);
create policy community_categories_admin_write on public.community_categories
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- community_channels
create policy community_channels_read on public.community_channels
  for select to authenticated using ((is_private = false) or exists (
    select 1 from public.channel_members m where m.channel_id = community_channels.id and m.user_id = auth.uid()
  ));
create policy community_channels_admin_write on public.community_channels
  for all to authenticated using (public.is_admin()) with check (public.is_admin());

-- channel_members
create policy channel_members_read on public.channel_members
  for select to authenticated using (user_id = auth.uid() or public.is_admin());
create policy channel_members_join on public.channel_members
  for insert to authenticated with check (user_id = auth.uid());
create policy channel_members_leave on public.channel_members
  for delete to authenticated using (user_id = auth.uid() or public.is_admin());

-- messages
create policy messages_read on public.messages
  for select to authenticated using (
    exists (
      select 1 from public.community_channels c
      where c.id = messages.channel_id
        and (
          c.is_private = false or exists (select 1 from public.channel_members m where m.channel_id = c.id and m.user_id = auth.uid())
        )
    )
  );
create policy messages_insert on public.messages
  for insert to authenticated with check (
    author_id = auth.uid() and exists(
      select 1 from public.community_channels c
      where c.id = messages.channel_id
        and (
          c.is_private = false or exists (select 1 from public.channel_members m where m.channel_id = c.id and m.user_id = auth.uid())
        )
    )
  );
create policy messages_update_own_or_admin on public.messages
  for update to authenticated using (author_id = auth.uid() or public.is_admin()) with check (author_id = auth.uid() or public.is_admin());
create policy messages_delete_admin on public.messages
  for delete to authenticated using (public.is_admin());

-- message_attachments
create policy message_attachments_read on public.message_attachments
  for select to authenticated using (
    exists (
      select 1 from public.messages m
      join public.community_channels c on c.id = m.channel_id
      where m.id = message_attachments.message_id and (
        c.is_private = false or exists (select 1 from public.channel_members x where x.channel_id = c.id and x.user_id = auth.uid())
      )
    )
  );
create policy message_attachments_insert_author on public.message_attachments
  for insert to authenticated with check (
    exists (
      select 1 from public.messages m where m.id = message_attachments.message_id and m.author_id = auth.uid()
    )
  );
create policy message_attachments_delete_author_or_admin on public.message_attachments
  for delete to authenticated using (
    exists (
      select 1 from public.messages m where m.id = message_attachments.message_id and (m.author_id = auth.uid() or public.is_admin())
    )
  );

-- message_reactions
create policy message_reactions_read on public.message_reactions
  for select to authenticated using (true);
create policy message_reactions_insert on public.message_reactions
  for insert to authenticated with check (user_id = auth.uid());
create policy message_reactions_delete_own on public.message_reactions
  for delete to authenticated using (user_id = auth.uid());

-- message_reads
create policy message_reads_read_own on public.message_reads
  for select to authenticated using (user_id = auth.uid());
create policy message_reads_upsert_own on public.message_reads
  for insert to authenticated with check (user_id = auth.uid());
create policy message_reads_update_own on public.message_reads
  for update to authenticated using (user_id = auth.uid()) with check (user_id = auth.uid());

commit;