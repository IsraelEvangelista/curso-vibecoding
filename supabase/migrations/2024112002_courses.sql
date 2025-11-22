-- Tabela courses: Cursos disponíveis
CREATE TABLE public.courses (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT,
    slug TEXT NOT NULL UNIQUE,
    is_active BOOLEAN NOT NULL DEFAULT true,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL
);

-- Índices para performance
CREATE INDEX idx_courses_slug ON public.courses(slug);
CREATE INDEX idx_courses_is_active ON public.courses(is_active);

-- Trigger para atualizar updated_at
CREATE TRIGGER courses_updated_at
    BEFORE UPDATE ON public.courses
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- RLS (Row Level Security)
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
-- Qualquer pessoa pode ver cursos ativos
CREATE POLICY "Anyone can view active courses" ON public.courses
    FOR SELECT USING (is_active = true);

-- Admins podem ver todos os cursos (inclusive inativos)
CREATE POLICY "Admins can view all courses" ON public.courses
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem criar cursos
CREATE POLICY "Admins can create courses" ON public.courses
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem atualizar cursos
CREATE POLICY "Admins can update courses" ON public.courses
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem deletar cursos
CREATE POLICY "Admins can delete courses" ON public.courses
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Permissões
GRANT SELECT ON public.courses TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.courses TO authenticated;

-- Inserir curso padrão (Vibe Coding)
INSERT INTO public.courses (title, description, slug, is_active) VALUES 
('Vibe Coding', 'Curso completo de desenvolvimento com IA e automação', 'vibe-coding', true);