begin;

-- Adiciona política adicional para leitura de todos os profiles (além da existente profiles_read_active)
create policy profiles_read_all on public.profiles
  for select to authenticated using (true);

commit;