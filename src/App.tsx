import { createBrowserRouter, RouterProvider, useNavigate, useParams } from "react-router-dom";
 
import { LoginPage } from "@/pages/LoginPage";
import { AulasPage } from "@/pages/AulasPage";
import { CoursesPage } from "@/pages/CoursesPage";
 
import { ComunidadePage } from "@/pages/ComunidadePage";
import { AulaSlidePage } from "@/pages/AulaSlidePage";
import { QuizPage } from "@/pages/QuizPage";
import { QuizQuestionPage } from "@/pages/QuizQuestionPage";
 
import { mockLessons } from "@/lib/mockData";
import { AuthProvider } from "@/context/AuthContext";
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

const router = createBrowserRouter(
  [
    { path: "/", element: <LoginPage /> },
    
    { path: "/cursos", element: <CoursesPage /> },
    { path: "/curso/:id", element: <AulasPage /> },
    { path: "/aula/:id", element: <AulaSlidePage /> },
    { path: "/aula/:id/quiz", element: <QuizPageWrapper /> },
    { path: "/aula/:id/quiz/:roundId", element: <QuizQuestionPage /> },
    { path: "/aula/:id/desafio", element: <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center"><div className="text-center"><div className="text-6xl mb-4">🏆</div><h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Desafio em Desenvolvimento</h2><p className="text-gray-600 dark:text-gray-400">Esta funcionalidade estará disponível em breve.</p></div></div> },
    
    { path: "/comunidade", element: <ComunidadePage /> },
    
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
