-- Tabela access_requests: Solicitações de acesso dos alunos
CREATE TABLE public.access_requests (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
    course_id UUID NOT NULL REFERENCES public.courses(id) ON DELETE CASCADE,
    message TEXT,
    status TEXT NOT NULL CHECK (status IN ('pending', 'approved', 'rejected')) DEFAULT 'pending',
    reviewed_by UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    reviewed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    UNIQUE(user_id, course_id)
);

-- Índices para performance
CREATE INDEX idx_access_requests_user_id ON public.access_requests(user_id);
CREATE INDEX idx_access_requests_course_id ON public.access_requests(course_id);
CREATE INDEX idx_access_requests_status ON public.access_requests(status);
CREATE INDEX idx_access_requests_created_at ON public.access_requests(created_at);

-- Trigger para atualizar updated_at
CREATE TRIGGER access_requests_updated_at
    BEFORE UPDATE ON public.access_requests
    FOR EACH ROW
    EXECUTE FUNCTION public.handle_updated_at();

-- RLS (Row Level Security)
ALTER TABLE public.access_requests ENABLE ROW LEVEL SECURITY;

-- Políticas RLS
-- Usuários podem ver suas próprias solicitações
CREATE POLICY "Users can view own access requests" ON public.access_requests
    FOR SELECT USING (auth.uid() = user_id);

-- Admins podem ver todas as solicitações
CREATE POLICY "Admins can view all access requests" ON public.access_requests
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Usuários podem criar solicitação (máximo 1 por curso)
CREATE POLICY "Users can create access request" ON public.access_requests
    FOR INSERT WITH CHECK (auth.uid() = user_id AND status = 'pending');

-- Admins podem atualizar status das solicitações
CREATE POLICY "Admins can update access request status" ON public.access_requests
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

-- Admins podem deletar solicitações
CREATE POLICY "Admins can delete access requests" ON public.access_requests
    FOR DELETE USING (
        EXISTS (
            SELECT 1 FROM public.profiles
            WHERE user_id = auth.uid() AND role = 'admin'
        )
    );

-- Permissões
GRANT SELECT ON public.access_requests TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.access_requests TO authenticated;