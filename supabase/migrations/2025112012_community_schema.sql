begin;

create table if not exists public.community_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  "order" int default 0,
  created_at timestamptz not null default now()
);

create table if not exists public.community_channels (
  id uuid primary key default gen_random_uuid(),
  category_id uuid not null references public.community_categories(id) on delete cascade,
  name text not null,
  type text not null default 'text' check (type in ('text','voice')),
  created_by uuid references public.profiles(user_id) on delete set null,
  is_private boolean not null default false,
  is_archived boolean not null default false,
  created_at timestamptz not null default now()
);

create index if not exists community_channels_category_idx on public.community_channels(category_id);

create table if not exists public.channel_members (
  channel_id uuid not null references public.community_channels(id) on delete cascade,
  user_id uuid not null references public.profiles(user_id) on delete cascade,
  role text not null default 'member' check (role in ('member','moderator','owner')),
  joined_at timestamptz not null default now(),
  primary key(channel_id, user_id)
);

create table if not exists public.messages (
  id uuid primary key default gen_random_uuid(),
  channel_id uuid not null references public.community_channels(id) on delete cascade,
  author_id uuid not null references public.profiles(user_id) on delete cascade,
  content text not null,
  created_at timestamptz not null default now(),
  reply_to_id uuid references public.messages(id) on delete set null,
  is_deleted boolean not null default false,
  edited_at timestamptz null
);

create index if not exists messages_channel_created_desc_idx on public.messages(channel_id, created_at desc, id desc);
create index if not exists messages_reply_idx on public.messages(reply_to_id);

create table if not exists public.message_attachments (
  id uuid primary key default gen_random_uuid(),
  message_id uuid not null references public.messages(id) on delete cascade,
  type text not null check (type in ('image','audio','file')),
  url text not null,
  mime_type text,
  size int,
  width int,
  height int,
  created_at timestamptz not null default now()
);

create index if not exists message_attachments_message_idx on public.message_attachments(message_id);

create table if not exists public.message_reactions (
  message_id uuid not null references public.messages(id) on delete cascade,
  emoji text not null,
  user_id uuid not null references public.profiles(user_id) on delete cascade,
  created_at timestamptz not null default now(),
  unique(message_id, emoji, user_id)
);

create index if not exists message_reactions_count_idx on public.message_reactions(message_id, emoji);

create table if not exists public.message_reads (
  user_id uuid not null references public.profiles(user_id) on delete cascade,
  channel_id uuid not null references public.community_channels(id) on delete cascade,
  last_read_message_id uuid references public.messages(id) on delete set null,
  last_read_at timestamptz not null default now(),
  primary key(user_id, channel_id)
);

alter table public.profiles
  add column if not exists avatar_url text,
  add column if not exists last_seen_at timestamptz;

do $$ begin
  if not exists (
    select 1 from pg_extension where extname = 'pgcrypto'
  ) then
    create extension pgcrypto;
  end if;
end $$;

commit;