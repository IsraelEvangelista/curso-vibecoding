begin;

create or replace function public.get_unread_counts(uid uuid)
returns table(channel_id uuid, unread_count integer)
language sql security definer set search_path = public, pg_temp as $$
  with accessible_channels as (
    select c.id
    from public.community_channels c
    where c.is_private = false
    union
    select m.channel_id as id
    from public.channel_members m
    where m.user_id = uid
  )
  select msg.channel_id, count(msg.id)::int as unread_count
  from public.messages msg
  left join public.message_reads r
    on r.user_id = uid and r.channel_id = msg.channel_id
  where msg.channel_id in (select id from accessible_channels)
    and (r.last_read_at is null or msg.created_at > r.last_read_at)
  group by msg.channel_id;
$$;

commit;