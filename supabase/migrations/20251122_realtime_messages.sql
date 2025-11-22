-- Habilitar entrega de eventos Realtime para mensagens
alter table public.messages replica identity full;
alter publication supabase_realtime add table public.messages;

-- Policies para leitura de mensagens apenas por membros do canal
drop policy if exists select_messages_members on public.messages;
drop policy if exists admin_all_messages on public.messages;

create policy select_messages_members on public.messages
  for select
  to authenticated
  using (
    exists (
      select 1 from public.channel_members cm
      where cm.channel_id = public.messages.channel_id and cm.user_id = auth.uid()
    )
  );

create policy admin_all_messages on public.messages
  for all
  to authenticated
  using (
    exists (
      select 1 from public.profiles p
      where p.user_id = auth.uid() and p.role = 'admin'
    )
  )
  with check (
    exists (
      select 1 from public.profiles p
      where p.user_id = auth.uid() and p.role = 'admin'
    )
  );