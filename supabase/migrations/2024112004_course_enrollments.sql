-- Tabela course_enrollments: Matrículas dos alunos nos cursos
CREATE TABLE public.course_enrollments (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    enrolled_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    enrolled_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    status TEXT NOT NULL CHECK (status IN ('pending', 'active', 'inactive')) DEFAULT 'pending',
    UNIQUE(user_id, course_id)
);

-- Índices para performance
CREATE INDEX idx_course_enrollments_user_id ON public.course_enrollments(user_id);
CREATE INDEX idx_course_enrollments_course_id ON public.course_enrollments(course_id);
CREATE INDEX idx_course_enrollments_status ON public.course_enrollments(status);
CREATE INDEX idx_course_enrollments_enrolled_by ON public.course_enrollments(enrolled_by);

-- RLS (Row Level Security)
ALTER TABLE public.course_enrollments ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
-- Usuários podem ver suas próprias matrículas
CREATE POLICY "Users can view own enrollments" ON public.course_enrollments
    FOR SELECT USING (auth.uid() = user_id);

-- Admins podem ver todas as matrículas
CREATE POLICY "Admins can view all enrollments" ON public.course_enrollments
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Usuários podem criar matrícula (solicitar acesso)
CREATE POLICY "Users can create own enrollment" ON public.course_enrollments
    FOR INSERT WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- Admins podem atualizar status das matrículas
CREATE POLICY "Admins can update enrollment status" ON public.course_enrollments
    FOR UPDATE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    )
    WITH CHECK (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Admins podem deletar matrículas
CREATE POLICY "Admins can delete enrollments" ON public.course_enrollments
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Permissões
GRANT SELECT ON public.course_enrollments TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.course_enrollments TO authenticated;