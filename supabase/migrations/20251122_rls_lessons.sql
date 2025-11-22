alter table public.lessons enable row level security;

drop policy if exists select_lessons_enrolled on public.lessons;
drop policy if exists select_lessons_authenticated on public.lessons;
drop policy if exists admin_modify_lessons on public.lessons;

-- Leitura dos metadados das aulas para usuários autenticados (exibir cards)
create policy select_lessons_authenticated on public.lessons
  for select
  to authenticated
  using (true);

-- Modificações somente por administradores
create policy admin_modify_lessons on public.lessons
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