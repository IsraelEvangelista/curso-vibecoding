create or replace function public.fn_notify_message_new()
returns trigger
language plpgsql
security definer
as $$
declare
  v_url text;
begin
  -- Tenta obter a configuração, retorna null se não existir
  v_url := current_setting('app.notify_function_url', true);
  
  -- Se a URL estiver configurada e não vazia, envia a notificação
  if v_url is not null and length(v_url) > 0 then
    perform net.http_post(
      url := v_url,
      headers := jsonb_build_object('Content-Type','application/json'),
      body := jsonb_build_object('type','message.new','message', row_to_json(NEW))
    );
  end if;
  
  return NEW;
exception
  when others then
    -- Loga o erro mas não bloqueia a inserção
    raise warning 'Erro ao enviar notificação: %', SQLERRM;
    return NEW;
end;
$$;
