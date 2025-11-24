import { useCallback, useEffect, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { SlideDeck } from '../../types';
import { ComparisonCards } from './ComparisonCards';
import { SlideHeader } from './SlideHeader';
import type { SlideViewerProps } from "@/types";
import { useSlideNavigation } from '@/hooks/useSlideNavigation';
import { ProgressIndicator } from './SlideViewer/ProgressIndicator';

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
      order:3
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

  const { currentSlide, canGoPrevious, canGoNext, handlePrevious, handleNext, handleGoToSlide } = useSlideNavigation(
    slideDeck,
    (next) => setSlideDeck(next),
    onSlideChange
  );

  const handleExit = useCallback(() => {
    onExit();
  }, [onExit]);

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
      const activeElement = document.activeElement;
      const isInput = activeElement && (
        activeElement.tagName === 'INPUT' ||
        activeElement.tagName === 'TEXTAREA' ||
        (activeElement as HTMLElement).contentEditable === 'true'
      );

      switch (event.key) {
        case 'ArrowLeft':
          if (!isInput) {
            event.preventDefault();
            handlePrevious();
          }
          break;
        case 'ArrowRight':
          if (!isInput) {
            event.preventDefault();
            handleNext();
          }
          break;
        case 'Escape':
          if (!isInput) {
            event.preventDefault();
            handleExit();
          }
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handlePrevious, handleNext, handleExit]);

  // Garantir que o scroll funcione mesmo após interações com modais
  useEffect(() => {
    const checkAndRestoreScroll = () => {
      const modalsAbertos = document.querySelectorAll('[role="dialog"], .modal-overlay');
      if (document.body.style.overflow === 'hidden' && modalsAbertos.length === 0) {
        document.body.style.overflow = '';
      }
    };
    const interval = setInterval(checkAndRestoreScroll, 200);
    return () => clearInterval(interval);
  }, []);

  // Gestos de swipe usando useRef para evitar re-renders
  const touchStart = useRef<{ x: number, y: number } | null>(null);
  const touchEnd = useRef<{ x: number, y: number } | null>(null);
  const isDragging = useRef<boolean>(false);
  const minSwipeDistance = 50;

  // Touch Handlers
  const onTouchStart = (e: React.TouchEvent) => {
    touchEnd.current = null;
    touchStart.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchMove = (e: React.TouchEvent) => {
    touchEnd.current = {
      x: e.targetTouches[0].clientX,
      y: e.targetTouches[0].clientY
    };
  };

  const onTouchEnd = () => {
    if (!touchStart.current || !touchEnd.current) return;
    handleSwipeGesture();
  };

  // Mouse Handlers (for desktop testing)
  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    touchEnd.current = null;
    touchStart.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    touchEnd.current = {
      x: e.clientX,
      y: e.clientY
    };
  };

  const onMouseUp = () => {
    if (!isDragging.current) return;
    isDragging.current = false;
    handleSwipeGesture();
  };

  const onMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      // Optional: trigger swipe if they drag out of window, but usually better to cancel
    }
  };

  const handleSwipeGesture = () => {
    if (!touchStart.current || !touchEnd.current) return;
    
    const distanceX = touchStart.current.x - touchEnd.current.x;
    const distanceY = touchStart.current.y - touchEnd.current.y;
    
    // Se o movimento vertical for maior que o horizontal, é scroll, ignorar
    if (Math.abs(distanceY) > Math.abs(distanceX)) return;

    const isLeftSwipe = distanceX > minSwipeDistance;
    const isRightSwipe = distanceX < -minSwipeDistance;

    if (isLeftSwipe && canGoNext) {
      handleNext();
    }
    
    if (isRightSwipe && canGoPrevious) {
      handlePrevious();
    }
  };

  // Renderizar conteúdo do slide baseado no tipo
  const renderSlideContent = () => {
    if (!currentSlide) return null;

    if (currentSlide.id === 'aula3-slide2') {
      return <ComparisonCards />;
    }

    if (currentSlide.id === 'aula3-slide3' && typeof currentSlide.content === 'string') {
      const slideContentText = currentSlide.content;
      const processed = (() => {
        const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
        const stripLeadingTitle = (content: string, title?: string) => {
          if (!title) return content;
          const norm = (s: string) => removeAccents(s).replace(/[^\w\s]/g, '').trim().toLowerCase();
          const trimmed = content.replace(/^\s+/, '');
          const firstLine = trimmed.split('\n')[0] || '';
          const headingText = firstLine.replace(/^#{1,6}\s*/, '').trim();
          if (norm(headingText) === norm(title)) {
            const [, ...rest] = trimmed.split('\n');
            return rest.join('\n');
          }
          return content;
        };
        const escapeHtml = (str: string) =>
          str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

        let text = stripLeadingTitle(slideContentText, currentSlide.title);
        const codeBlocks: { lang: string; code: string }[] = [];
        text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m: string, lang = '', code: string) => {
          const idx = codeBlocks.push({ lang, code }) - 1;
          return `__CODEBLOCK_${idx}__`;
        });

        const processMarkdownTableLocal = (content: string): string => {
          const lines = content.split('\n');
          let html = '';
          let inTable = false;
          let tableRows: string[] = [];

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i].trim();
            if (line.startsWith('|') && line.endsWith('|')) {
              if (!inTable) {
                inTable = true;
                tableRows = [];
              }
              tableRows.push(line);
              const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
              if (!nextLine.startsWith('|') || i === lines.length - 1) {
                html += '<table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">';
                tableRows.forEach((row, idx) => {
                  const cells = row.split('|').filter(cell => cell.trim());
                  if (cells.every(cell => /^[\s:-]+$/.test(cell))) return;
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
        text = processMarkdownTableLocal(text);
        text = text.replace(/`([^`]+)`/g, (_m: string, c: string) =>
          `<code class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm">${escapeHtml(c)}</code>`
        );
        text = text
          .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
          .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">$1</h2>')
          .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200">$1</h3>')
          .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
          .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-4 italic text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">$1</blockquote>')
          .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')
          .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-200">$1</em>')
          .replace(/\n\n/g, '<br><br>');
        text = text.replace(/__CODEBLOCK_(\d+)__/g, (_m: string, i: string) => {
          const { lang, code } = codeBlocks[Number(i)];
          return `<pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="language-${lang} text-gray-900 dark:text-gray-100">${escapeHtml(code)}</code></pre>`;
        });
        return text;
      })();

      return (
        <div className="max-w-none">
          <div dangerouslySetInnerHTML={{ __html: processed }} />
        </div>
      );
    }

    const processMarkdownTable = (content: string): string => {
      const lines = content.split('\n');
      let html = '';
      let inTable = false;
      let tableRows: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i].trim();
        if (line.startsWith('|') && line.endsWith('|')) {
          if (!inTable) {
            inTable = true;
            tableRows = [];
          }
          tableRows.push(line);
          const nextLine = i < lines.length - 1 ? lines[i + 1].trim() : '';
          if (!nextLine.startsWith('|') || i === lines.length - 1) {
            html += '<table class="min-w-full border-collapse border border-gray-300 dark:border-gray-700 my-4">';
            tableRows.forEach((row, idx) => {
              const cells = row.split('|').filter(cell => cell.trim());
              if (cells.every(cell => /^[\s:-]+$/.test(cell))) return;
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
      case 'image-text': {
        const content = typeof currentSlide.content === 'object' ? currentSlide.content : null;
        if (!content) return null;
        const isAula1Slide3 = currentSlide.id === 'aula1-slide3';
        return (
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className={isAula1Slide3 ? 'md:w-1/2 w-full' : 'md:w-3/5 w-full'}>
              <div className="prose prose-lg dark:prose-invert max-w-none">
                <div
                  dangerouslySetInnerHTML={{
                    __html: (() => {
                      const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                      const stripLeadingTitle = (content: string, title?: string) => {
                        if (!title) return content;
                        const norm = (s: string) => removeAccents(s).replace(/[^\w\s]/g, '').trim().toLowerCase();
                        const trimmed = content.replace(/^\s+/, '');
                        const firstLine = trimmed.split('\n')[0] || '';
                        const headingText = firstLine.replace(/^#{1,6}\s*/, '').trim();
                        if (norm(headingText) === norm(title)) {
                          const [, ...rest] = trimmed.split('\n');
                          return rest.join('\n');
                        }
                        return content;
                      };
                      const escapeHtml = (str: string) =>
                        str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

                      let text = stripLeadingTitle(content.text, currentSlide.title);
                      const codeBlocks: { lang: string; code: string }[] = [];
                      text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m: string, lang = '', code: string) => {
                        const idx = codeBlocks.push({ lang, code }) - 1;
                        return `__CODEBLOCK_${idx}__`;
                      });
                      text = processMarkdownTable(text);
                      text = text.replace(/`([^`]+)`/g, (_m: string, c: string) =>
                        `<code class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm">${escapeHtml(c)}</code>`
                      );
                      text = text
                        .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
                        .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">$1</h2>')
                        .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200">$1</h3>')
                        .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
                        .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-4 italic text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">$1</blockquote>')
                        .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')
                        .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-200">$1</em>')
                        .replace(/\n\n/g, '<br><br>');
                      text = text.replace(/__CODEBLOCK_(\d+)__/g, (_m: string, i: string) => {
                        const { lang, code } = codeBlocks[Number(i)];
                        return `<pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="language-${lang} text-gray-900 dark:text-gray-100">${escapeHtml(code)}</code></pre>`;
                      });
                      return text;
                    })()
                  }}
                />
              </div>
            </div>
            <div className={isAula1Slide3 ? 'md:w-1/2 w-full flex flex-col items-center justify-center' : 'md:w-2/5 w-full flex flex-col items-center justify-center'}>
              <img
                src={content.imageUrl}
                alt={content.imageAlt}
                className={isAula1Slide3 ? 'max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 object-contain' : 'w-full h-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700'}
              />
            </div>
          </div>
        );
      }
      
      case 'code':
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <div 
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                  const stripLeadingTitle = (content: string, title?: string) => {
                    if (!title) return content;
                    const norm = (s: string) => removeAccents(s).replace(/[^\w\s]/g, '').trim().toLowerCase();
                    const trimmed = content.replace(/^\s+/, '');
                    const firstLine = trimmed.split('\n')[0] || '';
                    const headingText = firstLine.replace(/^#{1,6}\s*/, '').trim();
                    if (norm(headingText) === norm(title)) {
                      const [, ...rest] = trimmed.split('\n');
                      return rest.join('\n');
                    }
                    return content;
                  };
                  const escapeHtml = (str: string) =>
                    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

                  const contentText = typeof currentSlide.content === 'string' ? currentSlide.content : '';
                  let text = stripLeadingTitle(contentText, currentSlide.title);
                  const codeBlocks: { lang: string; code: string }[] = [];
                  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m: string, lang = '', code: string) => {
                    const idx = codeBlocks.push({ lang, code }) - 1;
                    return `__CODEBLOCK_${idx}__`;
                  });
                  text = processMarkdownTable(text);
                  text = text.replace(/`([^`]+)`/g, (_m: string, c: string) =>
                    `<code class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm">${escapeHtml(c)}</code>`
                  );
                  text = text
                    .replace(/^# (.*$)/gm, '<h1 class="text-3xl font-bold mb-4">$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2 class="text-2xl font-semibold mb-3">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-xl font-medium mb-2">$1</h3>')
                    .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
                    .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-blue-600 dark:text-blue-400">$1</blockquote>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold">$1</strong>')
                    .replace(/\n\n/g, '<br><br>');
                  text = text.replace(/__CODEBLOCK_(\d+)__/g, (_m: string, i: string) => {
                    const { lang, code } = codeBlocks[Number(i)];
                    return `<pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="language-${lang} text-gray-900 dark:text-gray-100">${escapeHtml(code)}</code></pre>`;
                  });
                  return text;
                })()
              }}
            />
          </div>
        );
      
      case 'text':
      default:
        return (
          <div className="prose prose-lg dark:prose-invert max-w-none [&>div[class*='grid']]:!grid [&>div[class*='flex']]:!flex">
            <div 
              dangerouslySetInnerHTML={{
                __html: (() => {
                  const removeAccents = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                  const stripLeadingTitle = (content: string, title?: string) => {
                    if (!title) return content;
                    const norm = (s: string) => removeAccents(s).replace(/[^\w\s]/g, '').trim().toLowerCase();
                    const trimmed = content.replace(/^\s+/, '');
                    const firstLine = trimmed.split('\n')[0] || '';
                    const headingText = firstLine.replace(/^#{1,6}\s*/, '').trim();
                    if (norm(headingText) === norm(title)) {
                      const [, ...rest] = trimmed.split('\n');
                      return rest.join('\n');
                    }
                    return content;
                  };
                  const escapeHtml = (str: string) =>
                    str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');

                  const slideContentText = typeof currentSlide.content === 'string' ? currentSlide.content : '';
                  let text = stripLeadingTitle(slideContentText, currentSlide.title);
                  const codeBlocks: { lang: string; code: string }[] = [];
                  text = text.replace(/```(\w+)?\n([\s\S]*?)```/g, (_m: string, lang = '', code: string) => {
                    const idx = codeBlocks.push({ lang, code }) - 1;
                    return `__CODEBLOCK_${idx}__`;
                  });
                  text = processMarkdownTable(text);
                  text = text.replace(/`([^`]+)`/g, (_m: string, c: string) =>
                    `<code class="bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-2 py-1 rounded text-sm">${escapeHtml(c)}</code>`
                  );
                  text = text
                    .replace(/^# (.*$)/gm, '<h1 class="text-4xl font-bold mb-6 text-gray-900 dark:text-white">$1</h1>')
                    .replace(/^## (.*$)/gm, '<h2 class="text-3xl font-semibold mb-4 text-gray-800 dark:text-gray-100">$1</h2>')
                    .replace(/^### (.*$)/gm, '<h3 class="text-2xl font-medium mb-3 text-gray-700 dark:text-gray-200">$1</h3>')
                    .replace(/^[*-]\s+(.*)$/gm, '<li class="list-none mb-2 text-gray-600 dark:text-gray-300">$1</li>')
                    .replace(/^> (.*)$/gm, '<blockquote class="border-l-4 border-blue-500 pl-6 py-2 mb-4 italic text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20 rounded-r-lg">$1</blockquote>')
                    .replace(/\*\*(.*?)\*\*/g, '<strong class="font-bold text-gray-900 dark:text-white">$1</strong>')
                    .replace(/\*(.*?)\*/g, '<em class="italic text-gray-700 dark:text-gray-200">$1</em>')
                    .replace(/\n\n/g, '<br><br>');
                  text = text.replace(/__CODEBLOCK_(\d+)__/g, (_m: string, i: string) => {
                    const { lang, code } = codeBlocks[Number(i)];
                    return `<pre class="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg overflow-x-auto"><code class="language-${lang} text-gray-900 dark:text-gray-100">${escapeHtml(code)}</code></pre>`;
                  });
                  return text;
                })()
              }}
            />
          </div>
        );
    }
  };

  return (
    <div 
      className="min-h-screen bg-white dark:bg-[#000000]"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
      style={{ touchAction: 'pan-y' }}
    >
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
            <div className="slide-content flex-1 overflow-y-auto pr-4" style={{ scrollBehavior: 'smooth', overscrollBehavior: 'contain', touchAction: 'pan-y' }}>
              {currentSlide?.image ? (
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  {/* Conteúdo à esquerda */}
                  <div className="md:w-2/5">
                    {renderSlideContent()}
                  </div>
                  {/* Imagem à direita, maior */}
                  <div className="md:w-3/5 flex flex-col items-center justify-center">
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4 text-center">
                      Professores deste curso:
                    </h3>
                    <img 
                      src={currentSlide.image} 
                      alt={currentSlide.title}
                      className="w-full h-auto rounded-lg shadow-xl border border-gray-200 dark:border-gray-700"
                    />
                  </div>
                </div>
              ) : (
                renderSlideContent()
              )}
            </div>
          </div>
        </div>
      </div>

      <ProgressIndicator total={slideDeck.slides.length} current={slideDeck.currentSlideIndex} onGoToSlide={handleGoToSlide} />
    </div>
  );
}

export default SlideViewer;
