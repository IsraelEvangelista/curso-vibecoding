import { Card, Button, Modal } from "@/components/ui";
import { BookOpen, Award, CheckCircle, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { Lesson } from "@/types";

const ementaLessons: Lesson[] = [
  {
    id: "aula1",
    order: 1,
    title: "Aula 01 – Fundamentos do Vibe Coding & Riscos",
    description:
      "Definição de Vibe Coding;Panorama de ferramentas:|Lovable|n8n|Supabase|Z.ai;Principais riscos/boas práticas:|Secrets|Lock-in|Shadow AI|Governança",
    isLocked: false,
    duration: "45 min",
    content: {
      explanation: ["Conceitos fundamentais do Vibe Coding", "Ferramentas essenciais", "Boas práticas de segurança"],
      examples: ["Exemplo prático de configuração", "Caso de uso real"]
    },
    quiz: {
      id: "quiz1",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge1",
      title: "Desafio Fundamentos",
      description: "Implementar um projeto básico",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de solução"]
    }
  },
  {
    id: "aula2",
    order: 2,
    title: "Aula 02 – Arquitetura de Agente & Engenharia de Contexto",
    description:
      "Agente vs. LLM;Arquitetura de agente:|LLM|Memória/cache|Tools|Contexto;Engenharia de Prompt vs. Engenharia de Contexto;MCP e demo n8n",
    isLocked: false,
    duration: "50 min",
    content: {
      explanation: ["Arquitetura de agentes", "Engenharia de contexto"],
      examples: ["Exemplo de agente", "Demo n8n"]
    },
    quiz: {
      id: "quiz2",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge2",
      title: "Desafio Arquitetura",
      description: "Criar um agente funcional",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de implementação"]
    }
  },
  {
    id: "aula3",
    order: 3,
    title: "Aula 03 – LLMs para Vibe Coding (foco em GLM 4.6)",
    description:
      "Comparação de modelos:|Janela de contexto|Preço|Latência|Qualidade;APIs e demonstrações em UIs web;Critérios de escolha",
    isLocked: false,
    duration: "40 min",
    content: {
      explanation: ["Comparação de LLMs", "APIs e integrações"],
      examples: ["Demo UI web", "Benchmark"]
    },
    quiz: {
      id: "quiz3",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge3",
      title: "Desafio LLM",
      description: "Integrar múltiplos modelos",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de API"]
    }
  },
  {
    id: "aula4",
    order: 4,
    title: "Aula 04 – Ambientes: TRAE Solo, Warp + CLIs (Claude Code & Kilo Code)",
    description:
      "Setup guiado:|IDE|CLIs;Integração com editor/Zed;Micro-benchmark:|Prompts|Tarefas de código",
    isLocked: false,
    duration: "55 min",
    content: {
      explanation: ["Configuração de ambiente", "Ferramentas CLI"],
      examples: ["Setup completo", "Benchmark"]
    },
    quiz: {
      id: "quiz4",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge4",
      title: "Desafio Ambiente",
      description: "Configurar ambiente completo",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de setup"]
    }
  },
  {
    id: "aula5",
    order: 5,
    title: "Aula 05 – Boas Práticas, Git/GitHub & BMAD (PRD)",
    description:
      "Fluxo Git/SSH/PR;Segurança e LGPD:|.env|gitignore|Dados sintéticos;PRD com BMAD;Critérios de aceite",
    isLocked: false,
    duration: "45 min",
    content: {
      explanation: ["Git e GitHub", "Segurança", "BMAD"],
      examples: ["Fluxo completo", "PRD exemplo"]
    },
    quiz: {
      id: "quiz5",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge5",
      title: "Desafio Git",
      description: "Implementar fluxo Git completo",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de PR"]
    }
  },
  {
    id: "aula6",
    order: 6,
    title: "Aula 06 – Projeto Dirigido (Parte I): do PRD a épicos/tarefas",
    description:
      "Refino do PRD;Decomposição em épicos/tarefas;Priorização;Organização do board de trabalho",
    isLocked: false,
    duration: "60 min",
    content: {
      explanation: ["Decomposição de projetos", "Priorização"],
      examples: ["Board exemplo", "Épicos"]
    },
    quiz: {
      id: "quiz6",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge6",
      title: "Desafio Planejamento",
      description: "Criar plano completo",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de board"]
    }
  },
  {
    id: "aula7",
    order: 7,
    title: "Aula 07 – Projeto Dirigido (Parte II): implementação assistida por IA",
    description:
      "Implementação com CLIs + GLM 4.6;Geração de testes;Observabilidade mínima;Modelagem de dados",
    isLocked: false,
    duration: "65 min",
    content: {
      explanation: ["Implementação assistida", "Testes", "Observabilidade"],
      examples: ["Código exemplo", "Testes exemplo"]
    },
    quiz: {
      id: "quiz7",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge7",
      title: "Desafio Implementação",
      description: "Implementar projeto completo",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de código"]
    }
  },
  {
    id: "aula8",
    order: 8,
    title: "Aula 08 – Integração ao Supabase & Deploy",
    description:
      "Modelagem/tabelas/policies/RLS no Supabase;Boas práticas:|.env|Logs;Deploy:|Vercel|Render",
    isLocked: false,
    duration: "50 min",
    content: {
      explanation: ["Supabase", "Deploy", "Boas práticas"],
      examples: ["Setup Supabase", "Deploy exemplo"]
    },
    quiz: {
      id: "quiz8",
      questions: [],
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: "challenge8",
      title: "Desafio Deploy",
      description: "Fazer deploy completo",
      requirements: ["Requisito 1", "Requisito 2"],
      examples: ["Exemplo de deploy"]
    }
  },
];

export function Aulas() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedLesson, setSelectedLesson] = useState<Lesson | null>(null);
  const navigate = useNavigate();

  // Função para abrir o modal com a aula selecionada
  const handleOpenModal = (lesson: Lesson) => {
    setSelectedLesson(lesson);
    setModalOpen(true);
  };

  // Função para fechar o modal
  const handleCloseModal = () => {
    setModalOpen(false);
    setSelectedLesson(null);
  };

  // Função para lidar com a navegação
  const handleNavigate = (section: "content" | "quiz" | "challenge") => {
    if (!selectedLesson) return;

    const { id, title } = selectedLesson;
    console.log(`Navegando para ${section} da aula:`, title);

    // Fecha o modal antes de navegar para garantir restauração do scroll
    handleCloseModal();
    
    // Navegação real para as páginas
    switch (section) {
      case "content":
        navigate(`/aula/${id}`);
        break;
      case "quiz":
        navigate(`/aula/${id}/quiz`);
        break;
      case "challenge":
        navigate(`/aula/${id}/desafio`);
        break;
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000] px-4 py-8 sm:px-6 lg:px-8 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-2">
            Aulas do Curso
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Acesso progressivo ao conteúdo do Curso Vibe Coding
          </p>
        </div>

        {/* Grid de Aulas */}
        <div className="grid grid-cols-1 gap-6">
          {ementaLessons.map((lesson) => (
            <Card
              key={lesson.id}
              className={`p-6 bg-white dark:bg-[#0a0a0a] rounded-xl`}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Lado Esquerdo: Info da Aula */}
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="p-2 rounded-lg bg-theme-light-100 dark:bg-theme-dark-900">
                      <BookOpen className="h-5 w-5 text-theme-light-600 dark:text-theme-dark-400" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {lesson.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Ordem {lesson.order.toString().padStart(2, "0")}
                      </p>
                    </div>
                  </div>

                  {/* Ações */}
                  <div className="flex flex-wrap items-center gap-3 mt-4">
                    <Button
                      className="btn-outline"
                      onClick={() =>
                        setExpandedId((prev) => (prev === lesson.id ? null : lesson.id))
                      }
                    >
                      {expandedId === lesson.id ? (
                        <span className="flex items-center gap-1">
                          <ChevronUp className="h-4 w-4" /> Ocultar descrição
                        </span>
                      ) : (
                        <span className="flex items-center gap-1">
                          <ChevronDown className="h-4 w-4" /> Ver descrição
                        </span>
                      )}
                    </Button>

                    <Button
                      className="btn-neon"
                      onClick={() => handleOpenModal(lesson)}
                    >
                      Entrar na Aula
                    </Button>
                  </div>
                </div>

                {/* Lado Direito: Seções da Aula */}
                <div className="flex flex-col gap-2 md:w-56">
                  <div className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                    Seções
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <BookOpen className="h-4 w-4" />
                    <span>Conteúdo</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <CheckCircle className="h-4 w-4" />
                    <span>Quiz (10 questões)</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400">
                    <Award className="h-4 w-4" />
                    <span>Desafio Prático</span>
                  </div>
                </div>
              </div>

              {/* Descrição expandível */}
              {expandedId === lesson.id && (
                <div className="mt-4 p-4 rounded-lg bg-gray-50 dark:bg-[#050505]">
                  <ul className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    {lesson.description.split(";").map((item, idx) => {
                      const trimmed = item.trim();
                      // Checa se é item com subitens (contém |)
                      if (trimmed.includes("|")) {
                        const [mainItem, ...subItems] = trimmed.split("|");
                        return (
                          <li key={idx}>
                            <div className="flex items-start gap-2">
                              <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                              <div>
                                <div>{mainItem.replace(":", "").trim()}</div>
                                <ul className="ml-4 mt-1 space-y-1">
                                  {subItems.map((sub, subIdx) => (
                                    <li key={subIdx} className="flex items-start gap-2">
                                      <span className="text-theme-light-500 dark:text-theme-dark-500">•</span>
                                      <span>{sub.trim()}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </li>
                        );
                      }
                      // Item simples sem subitens
                      return (
                        <li key={idx} className="flex items-start gap-2">
                          <span className="text-theme-light-600 dark:text-theme-dark-400 font-bold">▸</span>
                          <span>{trimmed}</span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* Modal */}
        {selectedLesson && (
          <Modal
            isOpen={modalOpen}
            onClose={handleCloseModal}
            lesson={selectedLesson}
            onNavigate={handleNavigate}
          />
        )}
      </div>
    </div>
  );
}

export default Aulas;
