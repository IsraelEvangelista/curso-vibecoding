import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SlideViewer from "@/components/features/SlideViewer";
import { Layout } from "@/components/layout/Layout";
import type { SlideDeck } from "@/types";
import { mockSlideDecks } from "@/lib/mockData";

export function AulaSlidePage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [slideDeck, setSlideDeck] = useState<SlideDeck | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("ID da aula não encontrado");
      setLoading(false);
      return;
    }

    // Simular carregamento dos dados
    const loadSlideDeck = async () => {
      try {
        setLoading(true);
        
        // Simular delay de rede
        await new Promise(resolve => setTimeout(resolve, 500));
        
        const deck = mockSlideDecks.find(d => d.lessonId === id);
        if (!deck) {
          setError(`Aula "${id}" não encontrada`);
          return;
        }

        setSlideDeck(deck);
        setError(null);
      } catch (err) {
        setError("Erro ao carregar a aula");
        console.error("Erro ao carregar slide deck:", err);
      } finally {
        setLoading(false);
      }
    };

    loadSlideDeck();
  }, [id]);

  const handleSlideChange = (slideIndex: number) => {
    if (slideDeck) {
      const updatedDeck = { ...slideDeck, currentSlideIndex: slideIndex };
      setSlideDeck(updatedDeck);
      
      // Aqui poderíamos salvar o progresso no Supabase
      console.log(`Progresso salvo: slide ${slideIndex + 1} da aula ${id}`);
    }
  };

  const handleExit = () => {
    navigate('/aulas');
  };

  const handleNavigateToQuiz = () => {
    navigate(`/aula/${id}/quiz`);
  };

  const handleNavigateToChallenge = () => {
    navigate(`/aula/${id}/desafio`);
  };

  if (loading) {
    return (
      <Layout>
        <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 dark:border-green-400 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-400">Carregando aula...</p>
          </div>
        </div>
      </Layout>
    );
  }

  if (error || !slideDeck) {
    return (
      <Layout>
        <div className="min-h-screen bg-white dark:bg-[#000000] flex items-center justify-center">
          <div className="text-center max-w-md">
            <div className="text-red-500 dark:text-red-400 text-6xl mb-4">⚠️</div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Erro ao Carregar Aula
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              {error || "Não foi possível carregar o conteúdo desta aula."}
            </p>
            <button
              onClick={handleExit}
              className="btn-neon px-6 py-3"
            >
              Voltar para Aulas
            </button>
          </div>
        </div>
      </Layout>
    );
  }

  // Layout sem Header padrão para modo de slides
  return (
    <SlideViewer
      slideDeck={slideDeck}
      onSlideChange={handleSlideChange}
      onExit={handleExit}
      onNavigateToQuiz={handleNavigateToQuiz}
      onNavigateToChallenge={handleNavigateToChallenge}
    />
  );
}

export default AulaSlidePage;