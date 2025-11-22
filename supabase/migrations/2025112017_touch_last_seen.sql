begin;

create or replace function public.touch_last_seen() returns void
language sql
security definer
set search_path = public, pg_temp
as $$
  update public.profiles
  set last_seen_at = now()
  where user_id = auth.uid();
$$;

commit;