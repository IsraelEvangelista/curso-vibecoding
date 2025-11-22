begin;

create or replace function public.get_notifications(uid uuid, display_name text)
returns table(dm_unread integer, mentions_unread integer)
language sql security definer set search_path = public, pg_temp as $$
  with my_reads as (
    select channel_id, last_read_at
    from public.message_reads
    where user_id = uid
  ),
  dm_channels as (
    select c.id
    from public.community_channels c
    join public.channel_members m on m.channel_id = c.id
    where c.is_private = true and m.user_id = uid
  ),
  dm_unread_ct as (
    select count(msg.id)::int as ct
    from public.messages msg
    left join my_reads r on r.channel_id = msg.channel_id
    where msg.channel_id in (select id from dm_channels)
      and (r.last_read_at is null or msg.created_at > r.last_read_at)
  ),
  mentions_unread_ct as (
    select count(msg.id)::int as ct
    from public.messages msg
    left join my_reads r on r.channel_id = msg.channel_id
    where (r.last_read_at is null or msg.created_at > r.last_read_at)
      and msg.content ilike '%' || '@' || coalesce(display_name, '') || '%'
      and (
        exists (select 1 from public.channel_members m where m.channel_id = msg.channel_id and m.user_id = uid)
        or exists (select 1 from public.community_channels c where c.id = msg.channel_id and c.is_private = false)
      )
  )
  select (select ct from dm_unread_ct), (select ct from mentions_unread_ct);
$$;

commit;