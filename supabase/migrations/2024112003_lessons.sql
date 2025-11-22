-- Tabela lessons: Aulas dos cursos
CREATE TABLE public.lessons (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    title TEXT NOT NULL,
    description TEXT,
    lesson_number INTEGER NOT NULL,
    content TEXT,
    video_url TEXT,
    duration_minutes INTEGER,
    is_active BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(course_id, lesson_number)
);

-- Índices para performance
CREATE INDEX idx_lessons_course_id ON public.lessons(course_id);
CREATE INDEX idx_lessons_lesson_number ON public.lessons(lesson_number);
CREATE INDEX idx_lessons_is_active ON public.lessons(is_active);

-- Trigger para atualizar updated_at
CREATE TRIGGER lessons_updated_at
    BEFORE UPDATE ON public.lessons
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- RLS (Row Level Security)
ALTER TABLE public.lessons ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
-- Usuários ativos podem ver aulas ativas de cursos onde estão matriculados
CREATE POLICY "Students can view active lessons in enrolled courses" ON public.lessons
    FOR SELECT USING (
        is_active = true AND
        EXISTS (
            SELECT 1 FROM public.course_enrollments ce
            JOIN public.profiles p ON ce.user_id = p.user_id
            WHERE ce.course_id = lessons.course_id 
            AND ce.user_id = auth.uid() 
            AND p.is_active = true
        )
    );

-- Admins podem ver todas as aulas
CREATE POLICY "Admins can view all lessons" ON public.lessons
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem criar aulas
CREATE POLICY "Admins can create lessons" ON public.lessons
    FOR INSERT WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem atualizar aulas (inclusive ativar/desativar)
CREATE POLICY "Admins can update lessons" ON public.lessons
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem deletar aulas
CREATE POLICY "Admins can delete lessons" ON public.lessons
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Permissões
GRANT SELECT ON public.lessons TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.lessons TO authenticated;

-- Inserir aulas do curso Vibe Coding (01 a 08)
INSERT INTO public.lessons (course_id, title, description, lesson_number, is_active) VALUES 
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 01 - Introdução ao Vibe Coding', 'Conceitos fundamentais e introdução ao desenvolvimento com IA', 1, true),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 02 - Configuração do Ambiente', 'Preparação do ambiente de desenvolvimento e ferramentas', 2, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 03 - Primeiros Passos', 'Criando seu primeiro projeto com assistência de IA', 3, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 04 - Estruturas e Padrões', 'Organização de código e melhores práticas', 4, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 05 - Integrações e APIs', 'Conectando com serviços externos e APIs', 5, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 06 - Deploy e Publicação', 'Colocando seu projeto em produção', 6, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 07 - Debugging e Otimização', 'Resolvendo problemas e otimizando performance', 7, false),
((SELECT id FROM public.courses WHERE slug = 'vibe-coding'), 'Aula 08 - Projeto Final', 'Construindo uma aplicação completa do zero', 8, false);