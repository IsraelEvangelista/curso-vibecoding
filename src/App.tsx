import { createBrowserRouter, RouterProvider, useNavigate, useParams, Navigate } from "react-router-dom";
 
import { LoginPage } from "@/pages/LoginPage";
import { AulasPage } from "@/pages/AulasPage";
import { CoursesPage } from "@/pages/CoursesPage";
 
import { ComunidadePage } from "@/pages/ComunidadePage";
import { AulaSlidePage } from "@/pages/AulaSlidePage";
import { QuizPage } from "@/pages/QuizPage";
import { QuizQuestionPage } from "@/pages/QuizQuestionPage";
 
import { mockLessons } from "@/lib/mockData";
import { AuthProvider, useAuth } from "@/context/AuthContext";
import "@/styles/globals.css";

// Wrapper component para QuizPage
function QuizPageWrapper() {
  const { id: lessonId } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lesson = lessonId ? mockLessons.find(l => l.id === lessonId) : null;
  
  if (!lessonId || !lesson) {
    return (
      <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
        <div className="text-center text-gray-700 dark:text-gray-200">
          Aula não encontrada
        </div>
      </div>
    );
  }

  return (
    <QuizPage
      lessonId={lessonId}
      quiz={lesson.quiz}
      onExit={() => navigate("/aulas")}
      onNavigateToSlides={() => navigate(`/aula/${lessonId}`)}
      onNavigateToChallenge={() => navigate(`/aula/${lessonId}/desafio`)}
    />
  );
}

function Protected({ children }: { children: React.ReactNode }) {
  const { user, isActive, profile } = useAuth();
  if (!user) return <Navigate to="/" replace />;
  if (!profile) return (
    <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
      <div className="text-center text-gray-700 dark:text-gray-200">Carregando…</div>
    </div>
  );
  if (!isActive) return <Navigate to="/" replace />;
  return <>{children}</>;
}

const router = createBrowserRouter(
  [
    { path: "/", element: <LoginPage /> },
    
    { path: "/cursos", element: <Protected><CoursesPage /></Protected> },
    { path: "/curso/:id", element: <Protected><AulasPage /></Protected> },
    { path: "/aula/:id", element: <Protected><AulaSlidePage /></Protected> },
    { path: "/aula/:id/quiz", element: <Protected><QuizPageWrapper /></Protected> },
    { path: "/aula/:id/quiz/:roundId", element: <Protected><QuizQuestionPage /></Protected> },
    { path: "/aula/:id/desafio", element: <Protected><div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center"><div className="text-center"><div className="text-6xl mb-4">🏆</div><h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Desafio em Desenvolvimento</h2><p className="text-gray-600 dark:text-gray-400">Esta funcionalidade estará disponível em breve.</p></div></div></Protected> },
    
    { path: "/comunidade", element: <Protected><ComunidadePage /></Protected> },
    
    // Outras rotas serão adicionadas posteriormente
  ],
  {
    future: {
      v7_relativeSplatPath: true,
    },
  },
);

function App() {
  return (
    <div className="min-h-screen">
      <AuthProvider>
        <RouterProvider
          router={router}
          future={{ v7_startTransition: true }}
        />
      </AuthProvider>
    </div>
  );
}

export default App;
