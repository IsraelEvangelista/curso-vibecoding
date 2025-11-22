-- Migrar coluna role para enum 'admin'|'aluno' e ajustar funções

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_type WHERE typname = 'user_role') THEN
    CREATE TYPE public.user_role AS ENUM ('admin','aluno');
  END IF;
END
$$;

DROP POLICY IF EXISTS "Admins can view all courses" ON public.courses;
DROP POLICY IF EXISTS "Admins can create courses" ON public.courses;
DROP POLICY IF EXISTS "Admins can update courses" ON public.courses;
DROP POLICY IF EXISTS "Admins can delete courses" ON public.courses;

DROP POLICY IF EXISTS "Admins can view all lessons" ON public.lessons;
DROP POLICY IF EXISTS "Admins can create lessons" ON public.lessons;
DROP POLICY IF EXISTS "Admins can update lessons" ON public.lessons;
DROP POLICY IF EXISTS "Admins can delete lessons" ON public.lessons;

DROP POLICY IF EXISTS "Admins can view all enrollments" ON public.course_enrollments;
DROP POLICY IF EXISTS "Admins can update enrollment status" ON public.course_enrollments;
DROP POLICY IF EXISTS "Admins can delete enrollments" ON public.course_enrollments;

DROP POLICY IF EXISTS "Admins can view all access requests" ON public.access_requests;
DROP POLICY IF EXISTS "Admins can update access request status" ON public.access_requests;
DROP POLICY IF EXISTS "Admins can delete access requests" ON public.access_requests;

DROP POLICY IF EXISTS "Admins can view all profiles" ON public.profiles;
DROP POLICY IF EXISTS "Admins can update user roles and status" ON public.profiles;

ALTER TABLE public.profiles DROP CONSTRAINT IF EXISTS profiles_role_check;

UPDATE public.profiles SET role = 'aluno' WHERE role = 'student';

-- Remover default textual antes de alterar o tipo para enum
ALTER TABLE public.profiles
  ALTER COLUMN role DROP DEFAULT;

-- Alterar tipo para enum com conversão explícita
ALTER TABLE public.profiles
  ALTER COLUMN role TYPE public.user_role USING 
    CASE 
      WHEN role IN ('admin','aluno') THEN role::public.user_role
      WHEN role = 'student' THEN 'aluno'::public.user_role
      ELSE 'aluno'::public.user_role
    END;

-- Definir novo default já tipado
ALTER TABLE public.profiles
  ALTER COLUMN role SET DEFAULT 'aluno'::public.user_role;

CREATE POLICY "Admins can view all profiles" ON public.profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can update user roles and status" ON public.profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can view all courses" ON public.courses
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can create courses" ON public.courses
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can update courses" ON public.courses
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can delete courses" ON public.courses
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can view all lessons" ON public.lessons
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can create lessons" ON public.lessons
  FOR INSERT WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can update lessons" ON public.lessons
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can delete lessons" ON public.lessons
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can view all enrollments" ON public.course_enrollments
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can update enrollment status" ON public.course_enrollments
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can delete enrollments" ON public.course_enrollments
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can view all access requests" ON public.access_requests
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can update access request status" ON public.access_requests
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  )
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE POLICY "Admins can delete access requests" ON public.access_requests
  FOR DELETE USING (
    EXISTS (
      SELECT 1 FROM public.profiles
      WHERE user_id = auth.uid() AND role = 'admin'::public.user_role
    )
  );

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public, pg_temp
AS $$
BEGIN
  INSERT INTO public.profiles (id, user_id, email, role, is_active)
  VALUES (NEW.id, NEW.id, NEW.email, 'aluno', false);
  RETURN NEW;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.approve_student(user_uuid UUID)
RETURNS VOID
LANGUAGE plpgsql
SET search_path = public, pg_temp
AS $$
BEGIN
  UPDATE public.profiles 
  SET is_active = true 
  WHERE user_id = user_uuid AND role = 'aluno';

  INSERT INTO public.course_enrollments (user_id, course_id, status, enrolled_by)
  SELECT user_uuid, id, 'active', auth.uid()
  FROM public.courses 
  WHERE slug = 'vibe-coding';

  UPDATE public.access_requests 
  SET status = 'approved', reviewed_by = auth.uid(), reviewed_at = TIMEZONE('utc'::text, NOW())
  WHERE user_id = user_uuid AND status = 'pending';
END;
$$;