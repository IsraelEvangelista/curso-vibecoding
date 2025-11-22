-- Ajuste de segurança: função de trigger para criação de profile deve executar com privilégios elevados
-- Motivo: RLS em public.profiles bloqueia INSERT durante criação de usuário em auth.users
-- Solução: definir SECURITY DEFINER e search_path seguro
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, email, role, is_active)
  VALUES (NEW.id, NEW.id, NEW.email, 'student', false);
  RETURN NEW;
END;
$$;

-- Garantir que o trigger exista e referencie a função atualizada
DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- Observação: a função deve ser criada pelo owner da tabela public.profiles (geralmente postgres) para bypass de RLS