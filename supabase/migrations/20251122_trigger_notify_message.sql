create extension if not exists pg_net;

create or replace function public.fn_notify_message_new()
returns trigger
language plpgsql
security definer
as $$
begin
  perform net.http_post(
    url := current_setting('app.notify_function_url', true),
    headers := jsonb_build_object('Content-Type','application/json'),
    body := jsonb_build_object('type','message.new','message', row_to_json(NEW))
  );
  return NEW;
end;
$$;

drop trigger if exists trg_notify_message_new on public.messages;
create trigger trg_notify_message_new
after insert on public.messages
for each row
execute function public.fn_notify_message_new();