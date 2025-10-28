import { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { SlideHeader } from "./SlideHeader";
import type { SlideViewerProps, SlideDeck } from "@/types";

// Dados mockados para demonstração
const mockSlides: SlideDeck = {
  id: "slide-deck-1",
  lessonId: "aula1",
  title: "Aula 01 – Fundamentos do Vibe Coding & Riscos",
  currentSlideIndex: 0,
  slides: [
    {
      id: "slide-1",
      title: "Introdução ao Vibe Coding",
      content: `
# O que é Vibe Coding?

Vibe Coding é uma abordagem moderna de desenvolvimento de software que combina:

- **Inteligência Artificial** assistida por agentes
- **Automação** de processos repetitivos  
- **Colaboração** humana-otimizada
- **Entrega contínua** de valor

## Principais Características

\`\`\`typescript
// Exemplo de conceito
interface VibeCoding {
  aiAssistance: boolean;
  automation: boolean;
  continuousDelivery: boolean;
  humanCollaboration: boolean;
}
\`\`\`

Esta metodologia revoluciona como desenvolvemos software hoje.
      `,
      type: "text",
      order: 1
    },
    {
      id: "slide-2", 
      title: "Ferramentas Essenciais",
      content: `
# Panorama de Ferramentas

## 1. Lovable
- Interface visual para desenvolvimento
- Geração automática de código
- Prototipagem rápida

## 2. n8n
- Automação de workflows
- Integração entre sistemas
- Conectores pré-configurados

## 3. Supabase
- Backend como serviço
- Banco de dados PostgreSQL
- Autenticação e APIs

## 4. Z.ai
- Agentes de IA especializados
- Processamento de linguagem natural
- Integração com múltiplos LLMs

\`\`\`bash
# Exemplo de setup inicial
npm install -g @lovable/cli
npm install n8n
supabase init
\`\`\`
      `,
      type: "code",
      order: 2
    },
    {
      id: "slide-3",
      title: "Principais Riscos e Boas Práticas",
      content: `
# Riscos e Mitigação

## 🔒 Secrets
- **Risco:** Exposição de chaves de API
- **Mitigação:** Usar variáveis de ambiente e vaults

## 🔒 Lock-in
- **Risco:** Dependência excessiva de um fornecedor
- **Mitigação:** Arquitetura modular e padrões abertos

## 🤖 Shadow AI
- **Risco:** Uso não autorizado de ferramentas de IA
- **Mitigação:** Políticas claras e ferramentas aprovadas

## 📋 Governança
- **Risco:** Falta de controle e auditoria
- **Mitigação:** Processos documentados e revisões

## Boas Práticas

\`\`\`typescript
// Exemplo de configuração segura
const config = {
  database: {
    host: process.env.DB_HOST,
    ssl: process.env.NODE_ENV === 'production'
  },
  ai: {
    provider: 'openai',
    model: 'gpt-4',
    maxTokens: 2000
  }
};
\`\`\`

> **Importante:** Sempre valide as saídas da IA e mantenha humanos no loop!
      `,
      type: "text",
      order: 3
    },
    {
      id: "slide-4",
      title: "Exemplo Prático",
      content: `
# Implementação Prática

## Setup do Ambiente

\`\`\`bash
# 1. Clonar repositório
git clone https://github.com/exemplo/vibe-coding-project
cd vibe-coding-project

# 2. Instalar dependências
npm install

# 3. Configurar ambiente
cp .env.example .env
# Editar .env com suas chaves

# 4. Iniciar desenvolvimento
npm run dev
\`\`\`

## Estrutura do Projeto

\`\`\`
src/
├── components/     # Componentes React
├── lib/           # Utilitários e configurações
├── types/         # Definições TypeScript
├── hooks/         # Hooks personalizados
└── styles/        # Estilos globais
\`\`\`

## Workflow Típico

1. **Planejamento** → Definir requisitos
2. **Prototipagem** → Criar MVP rápido
3. **Desenvolvimento** → Implementar com IA assistida
4. **Testes** → Validação automatizada
5. **Deploy** → Entrega contínua

## Métricas de Sucesso

- 🚀 **Velocidade:** 2x mais rápido que tradicional
- 🎯 **Qualidade:** 40% menos bugs
- 💰 **Custo:** 30% mais econômico
- 😊 **Satisfação:** Melhor experiência do usuário

> **Resultado:** Produtos melhores entregues mais rapidamente!
      `,
      type: "code",
      order: 4
    }
  ]
};

export function SlideViewer({ 
  slideDeck: initialSlideDeck = mockSlides,
  onSlideChange,
  onExit,
  onNavigateToQuiz,
  onNavigateToChallenge 
}: SlideViewerProps) {
  const [slideDeck, setSlideDeck] = useState<SlideDeck>(initialSlideDeck);
  const navigate = useNavigate();

  // Atualizar slideDeck quando receber novas props
  useEffect(() => {
    setSlideDeck(initialSlideDeck);
  }, [initialSlideDeck]);

  const currentSlide = slideDeck.slides[slideDeck.currentSlideIndex];

  const handlePrevious = useCallback(() => {
    if (slideDeck.currentSlideIndex > 0) {
      const newIndex = slideDeck.currentSlideIndex - 1;
      const updatedSlideDeck = { ...slideDeck, currentSlideIndex: newIndex };
      setSlideDeck(updatedSlideDeck);
      onSlideChange(newIndex);
    }
  }, [slideDeck, onSlideChange]);

  const handleNext = useCallback(() => {
    if (slideDeck.currentSlideIndex < slideDeck.slides.length - 1) {
      const newIndex = slideDeck.currentSlideIndex + 1;
      const updatedSlideDeck = { ...slideDeck, currentSlideIndex: newIndex };
      setSlideDeck(updatedSlideDeck);
      onSlideChange(newIndex);
    }
  }, [slideDeck, onSlideChange]);

  const handleExit = useCallback(() => {
    onExit();
    navigate('/aulas');
  }, [onExit, navigate]);

  const handleNavigateToQuiz = useCallback(() => {
    onNavigateToQuiz();
    navigate(`/aula/${slideDeck.lessonId}/quiz`);
  }, [onNavigateToQuiz, navigate, slideDeck.lessonId]);

  const handleNavigateToChallenge = useCallback(() => {
    onNavigateToChallenge();
    navigate(`/aula/${slideDeck.lessonId}/desafio`);
  }, [onNavigateToChallenge, navigate, slideDeck.lessonId]);

  // Navegação com teclado
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          handlePrevious();
          break;
        case 'ArrowRight':
          handleNext();
          break;
        case 'Escape':
          handleExit();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext, handleExit]);

  const canGoPrevious = slideDeck.currentSlideIndex > 0;
  const canGoNext = slideDeck.currentSlideIndex < slideDeck.slides.length - 1;

  // Renderizar conteúdo do slide baseado no tipo
  const renderSlideContent = () => {
    if (!currentSlide) return null;

    // Função para processar tabelas markdown
    const processMarkdownTable = (content: string): string => {
      const lines = content.split('\n');
      let html = '';
      let inTable = false;
      let tableRows: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        
        // Detectar linha de tabela (contém |)
        if (line.startsWith('|') && line.endsWith('|')) {
          if (!inTable) {
            inTable = true;
            tableRows = [];
          }
          tableRows.push(line);
          
          // Verificar se próxima linha não é tabela ou é última linha
          const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
          if (!nextLine.startsWith('|') || i === lines.length - 1) {
            // Processar tabela completa
            html += '<table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">';
            
            tableRows.forEach((row, idx) => {
              const cells = row.split('|').filter(cell => cell.trim());
              
              // Ignorar linha separadora (contém apenas - e :)
              if (cells.every(cell => /^[\s:-]+$/.test(cell))) {
                return;
              }
              
              const isHeader = idx === 0;
              const tag = isHeader ? 'th' : 'td';
              const cellClass = isHeader 
                ? 'border border-gray-300 dark:border-gray-700 px-4 py-2 bg-gray-100 dark:bg-gray-800 font-semibold text-left'
                : 'border border-gray-300 dark:border-gray-700 px-4 py-2';
              
              html += '<tr>';
              cells.forEach(cell => {
                html += `<${tag} class="${cellClass}">${cell.trim()}</${tag}>`;
              });
              html += '</tr>';
            });
            
            html += '</table>';
            inTable = false;
          }
        } else {
          html += line + '\n';
        }
      }
      
      return html;
    };

    switch (currentSlide.type) {
      case 'code':
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: processMarkdownTable(currentSlide.content)
                  .replace(/```(\w+)?\n/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="language-$1">')
                  .replace(/```/g, '</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-2">$1</h3>')
                  .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
                  .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-blue-600 dark:text-blue-400">$1</blockquote>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
                  .replace(/\n\n/g, '<br><br>')
              }}
            />
          </div>
        );
      
      case 'text':
      default:
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{ 
                __html: processMarkdownTable(currentSlide.content)
                  .replace(/```(\w+)?\n/g, '<pre class="bg-gray-100 dark:bg-gray-800 p-4 rounded-lg overflow-x-auto"><code class="language-$1">')
                  .replace(/```/g, '</code></pre>')
                  .replace(/`([^`]+)`/g, '<code class="bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded text-sm">$1</code>')
                  .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
                  .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">$1</h2>')
                  .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200">$1</h3>')
                  .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
                  .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-4 italic text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">$1</blockquote>')
                  .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')
                  .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-200">$1</em>')
                  .replace(/\n\n/g, '<br><br>')
              }}
            />
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#000000]">
      {/* Header fixo */}
      <SlideHeader
        slideDeck={slideDeck}
        onPrevious={handlePrevious}
        onNext={handleNext}
        onExit={handleExit}
        onNavigateToQuiz={handleNavigateToQuiz}
        onNavigateToChallenge={handleNavigateToChallenge}
        canGoNext={canGoNext}
        canGoPrevious={canGoPrevious}
      />

      {/* Área de conteúdo do slide */}
      <div className="pt-20 pb-24 px-4 sm:px-6 lg:px-8 min-h-screen flex flex-col">
        <div className="w-full flex-1 flex flex-col">
          <div className="card-static p-8 sm:p-12 flex-1 flex flex-col">
            {/* Título do slide */}
            <div className="mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-2">
                {currentSlide?.title}
              </h2>
              <div className="h-1 w-20 bg-gradient-to-r from-green-500 to-green-400 dark:from-green-400 dark:to-green-300 rounded-full"></div>
            </div>

            {/* Conteúdo do slide */}
            <div className="slide-content flex-1 overflow-y-auto pr-4">
              {renderSlideContent()}
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé fixo com indicadores de progresso */}
      <footer className="fixed bottom-0 left-0 right-0 z-[11000] bg-white dark:bg-[#0a0a0a] border-t border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            <div className="text-sm text-gray-500 dark:text-gray-400">
              Slide {slideDeck.currentSlideIndex + 1} de {slideDeck.slides.length}
            </div>
            
            <div className="flex space-x-2">
              {slideDeck.slides.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-8 rounded-full transition-all ${
                    index === slideDeck.currentSlideIndex
                      ? 'bg-green-500 dark:bg-green-400'
                      : index < slideDeck.currentSlideIndex
                      ? 'bg-green-300 dark:bg-green-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default SlideViewer;