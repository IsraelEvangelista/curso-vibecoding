-- Inserir usuário admin inicial
-- NOTA: Este script deve ser executado manualmente após criar o primeiro usuário no sistema
-- O ID do usuário deve ser obtido após o registro inicial

-- Função para criar admin inicial (deve ser executada manualmente)
CREATE OR REPLACE FUNCTION public.create_initial_admin(user_uuid UUID, user_email TEXT)
RETURNS VOID AS $$
BEGIN
    -- Atualizar o profile do usuário para admin e ativo
    UPDATE public.profiles 
    SET role = 'admin', is_active = true 
    WHERE user_id = user_uuid;
    
    -- Criar matrícula no curso Vibe Coding
    INSERT INTO public.course_enrollments (user_id, course_id, status, enrolled_by)
    SELECT user_uuid, id, 'active', user_uuid
    FROM public.courses 
    WHERE slug = 'vibe-coding';
    
    RAISE NOTICE 'Admin inicial criado com sucesso para o usuário %', user_email;
END;
$$ LANGUAGE plpgsql;

-- Instruções para uso:
-- 1. Primeiro, registre um novo usuário pelo formulário de cadastro
-- 2. Obtenha o ID do usuário criado (pode ser encontrado no painel do Supabase)
-- 3. Execute: SELECT public.create_initial_admin('UUID_DO_USUARIO', 'email@usuario.com');

-- Criar função para aprovar usuários alunos
CREATE OR REPLACE FUNCTION public.approve_student(user_uuid UUID)
RETURNS VOID AS $$
BEGIN
    -- Atualizar o profile do usuário para ativo
    UPDATE public.profiles 
    SET is_active = true 
    WHERE user_id = user_uuid AND role = 'student';
    
    -- Criar matrícula no curso Vibe Coding
    INSERT INTO public.course_enrollments (user_id, course_id, status, enrolled_by)
    SELECT user_uuid, id, 'active', auth.uid()
    FROM public.courses 
    WHERE slug = 'vibe-coding';
    
    -- Atualizar solicitações de acesso pendentes para aprovadas
    UPDATE public.access_requests 
    SET status = 'approved', reviewed_by = auth.uid(), reviewed_at = TIMEZONE('utc'::text, NOW())
    WHERE user_id = user_uuid AND status = 'pending';
    
    RAISE NOTICE 'Aluno aprovado com sucesso: %', user_uuid;
END;
$$ LANGUAGE plpgsql;

-- Criar função para rejeitar usuários alunos
CREATE OR REPLACE FUNCTION public.reject_student(user_uuid UUID, rejection_reason TEXT DEFAULT NULL)
RETURNS VOID AS $$
BEGIN
    -- Atualizar solicitações de acesso pendentes para rejeitadas
    UPDATE public.access_requests 
    SET status = 'rejected', reviewed_by = auth.uid(), reviewed_at = TIMEZONE('utc'::text, NOW())
    WHERE user_id = user_uuid AND status = 'pending';
    
    RAISE NOTICE 'Aluno rejeitado: %', user_uuid;
END;
$$ LANGUAGE plpgsql;