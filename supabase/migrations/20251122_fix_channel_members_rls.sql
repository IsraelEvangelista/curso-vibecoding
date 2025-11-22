-- Corrigir política de leitura de membros de canal para permitir ver quem são os outros participantes
-- Atualmente restrito a apenas ver a si mesmo ou admins

drop policy if exists channel_members_read on public.channel_members;

create policy channel_members_read on public.channel_members
  for select to authenticated
  using (
    -- Permite ver membros de um canal se você também for membro desse canal
    exists (
      select 1 from public.channel_members cm 
      where cm.channel_id = channel_members.channel_id 
      and cm.user_id = auth.uid()
    )
    OR 
    public.is_admin()
  );
