-- Correção de segurança: Adicionar search_path às funções para evitar injection de schema
-- Função para atualizar updated_at com search_path definido
CREATE OR REPLACE FUNCTION public.handle_updated_at()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public, pg_temp;

-- Função para criar profile automaticamente com search_path definido
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO public.profiles (id, user_id, email, role, is_active)
    VALUES (NEW.id, NEW.id, NEW.email, 'student', false);
    RETURN NEW;
END;
$$ LANGUAGE plpgsql
SET search_path = public, pg_temp;

-- Função para criar admin inicial com search_path definido
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
$$ LANGUAGE plpgsql
SET search_path = public, pg_temp;

-- Função para aprovar usuários alunos com search_path definido
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
$$ LANGUAGE plpgsql
SET search_path = public, pg_temp;

-- Função para rejeitar usuários alunos com search_path definido
CREATE OR REPLACE FUNCTION public.reject_student(user_uuid UUID, rejection_reason TEXT DEFAULT NULL)
RETURNS VOID AS $$
BEGIN
    -- Atualizar solicitações de acesso pendentes para rejeitadas
    UPDATE public.access_requests 
    SET status = 'rejected', reviewed_by = auth.uid(), reviewed_at = TIMEZONE('utc'::text, NOW())
    WHERE user_id = user_uuid AND status = 'pending';
    
    RAISE NOTICE 'Aluno rejeitado: %', user_uuid;
END;
$$ LANGUAGE plpgsql
SET search_path = public, pg_temp;