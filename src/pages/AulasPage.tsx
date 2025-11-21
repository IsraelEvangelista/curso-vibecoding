import { Layout } from '@/components/layout/Layout';
import { Aulas } from '@/components/features/Aulas';
import { useParams } from 'react-router-dom';

export function AulasPage() {
  const { id } = useParams<{ id: string }>();
  return (
    <Layout>
      <Aulas courseId={id} />
    </Layout>
  );
}
