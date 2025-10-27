import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SlideViewer from "@/components/features/SlideViewer";
import { Layout } from "@/components/layout/Layout";
import type { SlideDeck } from "@/types";

// Dados mockados para demonstração - em produção viriam do Supabase
const mockSlideDecks: Record<string, SlideDeck> = {
  "aula1": {
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
  },
  "aula2": {
    id: "slide-deck-2",
    lessonId: "aula2",
    title: "Aula 02 – Arquitetura de Agente & Engenharia de Contexto",
    currentSlideIndex: 0,
    slides: [
      {
        id: "slide-1",
        title: "Agente vs. LLM",
        content: `
# Agente vs. LLM: Entendendo a Diferença

## O que é um LLM?

Large Language Models são modelos de linguagem treinados em vastos conjuntos de dados textuais.

- **Capacidades:** Geração de texto, compreensão, tradução
- **Limitações:** Sem memória persistente, sem ferramentas
- **Exemplos:** GPT-4, Claude, Llama, GLM

## O que é um Agente?

Agentes são sistemas que combinam LLMs com capacidades adicionais.

\`\`\`typescript
interface Agent {
  llm: LanguageModel;
  memory: MemorySystem;
  tools: Tool[];
  context: ContextManager;
  planning: PlanningSystem;
}
\`\`\`

## Principais Diferenças

| Característica | LLM | Agente |
|---------------|------|--------|
| Memória | Não | Sim |
| Ferramentas | Não | Sim |
| Planejamento | Limitado | Avançado |
| Autonomia | Baixa | Alta |

## Quando usar cada um?

**Use LLM para:**
- Geração de conteúdo simples
- Tradução e resumo
- Perguntas e respostas diretas

**Use Agentes para:**
- Tarefas complexas e multietapas
- Automação de processos
- Integração com sistemas externos
        `,
        type: "text",
        order: 1
      },
      {
        id: "slide-2",
        title: "Arquitetura de Agente",
        content: `
# Arquitetura de Agente: Componentes Essenciais

## 1. LLM (Cérebro)
- Processamento de linguagem natural
- Tomada de decisões
- Geração de respostas

## 2. Memória/Cache (Memória)
- Conversas anteriores
- Contexto persistente
- Aprendizado acumulado

\`\`\`typescript
interface MemorySystem {
  shortTerm: ConversationHistory[];
  longTerm: KnowledgeBase;
  vectorStore: EmbeddingDatabase;
}
\`\`\`

## 3. Tools (Ferramentas)
- APIs externas
- Funções personalizadas
- Integrações com sistemas

\`\`\`typescript
interface Tool {
  name: string;
  description: string;
  parameters: Record<string, any>;
  execute: (params: any) => Promise<any>;
}
\`\`\`

## 4. Contexto (Estado)
- Objetivos atuais
- Restrições e regras
- Informações do ambiente

## Fluxo de Execução

1. **Input** → Receber comando do usuário
2. **Planning** → Planejar ações necessárias
3. **Tool Selection** → Escolher ferramentas adequadas
4. **Execution** → Executar ferramentas sequencialmente
5. **Synthesis** → Combinar resultados
6. **Response** → Gerar resposta final

## Exemplo Prático

\`\`\`typescript
class CodeAgent {
  async generateCode(requirements: string) {
    // 1. Analisar requisitos
    const analysis = await this.llm.analyze(requirements);
    
    // 2. Planejar estrutura
    const plan = await this.planner.createPlan(analysis);
    
    // 3. Gerar código
    const code = await this.tools.codeGenerator.generate(plan);
    
    // 4. Testar
    const tests = await this.tools.testRunner.run(code);
    
    // 5. Refinar se necessário
    if (!tests.passed) {
      return this.generateCode(requirements + tests.feedback);
    }
    
    return code;
  }
}
\`\`\`
        `,
        type: "code",
        order: 2
      }
    ]
  }
};

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
        
        const deck = mockSlideDecks[id];
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