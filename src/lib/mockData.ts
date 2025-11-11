import {
  User,
  Lesson,
  LessonScore,
  QuizQuestion,
  QuizAttempt,
  RankingEntry,
  ForumTopic,
  GalleryPost,
  Slide,
  SlideDeck,
} from "@/types";

// Mock de Usuários
export const mockUsers: User[] = [
  {
    id: "1",
    name: "Ana Silva",
    email: "ana.silva@email.com",
    role: "aluno",
    joinedAt: "2024-01-15",
    totalPoints: 1250,
  },
  {
    id: "2",
    name: "Carlos Mendes",
    email: "carlos.mendes@email.com",
    role: "moderador",
    joinedAt: "2023-11-20",
    totalPoints: 980,
  },
  {
    id: "3",
    name: "Maria Oliveira",
    email: "maria.oliveira@email.com",
    role: "aluno",
    joinedAt: "2024-02-01",
    totalPoints: 1450,
  },
  {
    id: "4",
    name: "João Santos",
    email: "joao.santos@email.com",
    role: "aluno",
    joinedAt: "2024-01-20",
    totalPoints: 890,
  },
  {
    id: "5",
    name: "Pedro Costa",
    email: "pedro.costa@email.com",
    role: "aluno",
    joinedAt: "2024-02-10",
    totalPoints: 760,
  },
];

// Mock de Quiz Questions
const mockQuizQuestions: QuizQuestion[] = [
  {
    id: "q1",
    question: "O que é Vibe Coding?",
    options: [
      "Uma metodologia de desenvolvimento tradicional",
      "Uma abordagem de desenvolvimento assistido por IA",
      "Uma linguagem de programação",
      "Um framework JavaScript",
    ],
    correctAnswer: 1,
    explanation:
      "Vibe Coding é uma abordagem de desenvolvimento de software assistida por inteligência artificial.",
  },
  {
    id: "q2",
    question: "Qual dos seguintes é um risco comum no Vibe Coding?",
    options: [
      "Falta de criatividade",
      "Lock-in com ferramentas de IA",
      "Desempenho muito lento",
      "Falta de documentação",
    ],
    correctAnswer: 1,
    explanation:
      "Lock-in com ferramentas de IA é um risco importante a ser considerado no Vibe Coding.",
  },
  {
    id: "q3",
    question: "O que significa MCP no contexto de agentes?",
    options: [
      "Model Control Protocol",
      "Machine Communication Platform",
      "Model Context Protocol",
      "Multi-agent Control Platform",
    ],
    correctAnswer: 2,
    explanation:
      "MCP significa Model Context Protocol, um padrão para comunicação entre modelos e ferramentas.",
  },
];

// Mock de Quiz Attempts
const mockQuizAttempts: QuizAttempt[] = [
  {
    id: "attempt1",
    score: 80,
    completedAt: "2024-03-15T10:30:00Z",
    answers: [1, 1, 2],
  },
];

// Mock de Aulas
export const mockLessons: Lesson[] = [
  {
    id: "aula1",
    title: "Aula 01: Fundamentos do Vibe Coding & Riscos",
    description:
      "Introdução ao Vibe Coding, ecossistema de ferramentas e boas práticas de segurança.",
    order: 1,
    isLocked: false,
    progress: 75,
    duration: "2h 30min",
    content: {
      explanation: [
        "Vibe Coding representa uma nova era no desenvolvimento de software, onde a colaboração entre humanos e IA cria resultados extraordinários.",
        "O ecossistema Vibe Coding inclui ferramentas como Lovable, n8n, Supabase, Z.ai, entre outras.",
        "É fundamental entender os riscos: segurança de secrets, lock-in, shadow AI, qualidade de código e governança.",
      ],
      examples: [
        "```javascript\n// Exemplo de prompt engineering\nconst prompt = `Crie um componente React que...`;\n```",
        "```typescript\n// Estrutura de contexto para agentes\ninterface AgentContext {\n  tools: Tool[];\n  memory: Memory;\n  instructions: string;\n}\n```",
      ],
    },
    quiz: {
      id: "quiz1",
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: mockQuizAttempts,
    },
    challenge: {
      id: "challenge1",
      title: "Crie seu primeiro contexto de agente",
      description:
        "Desenvolva um arquivo AGENTS.md para um projeto de sua escolha, definindo os papéis dos agentes e o fluxo de trabalho.",
      requirements: [
        "Definir pelo menos 3 tipos de agentes",
        "Especificar as responsabilidades de cada agente",
        "Documentar o fluxo de trabalho entre eles",
      ],
      examples: [
        "Use o template fornecido em aula",
        "Pense em um projeto real que você gostaria de desenvolver",
      ],
    },
  },
  {
    id: "aula2",
    title: "Aula 02: Arquitetura de Agente & Engenharia de Contexto",
    description:
      "Estrutura de agentes, engenharia de contexto vs. prompts e introdução ao MCP.",
    order: 2,
    isLocked: false,
    progress: 30,
    duration: "2h 45min",
    content: {
      explanation: [
        "Agentes são mais do que LLMs - eles têm memória, ferramentas e contexto estruturado.",
        "Engenharia de Contexto é mais poderosa que engenharia de prompts.",
        "MCP permite comunicação eficiente entre modelos e ferramentas externas.",
      ],
      examples: [
        "```python\n# Arquitetura de agente básica\nclass Agent:\n    def __init__(self, llm, tools, memory):\n        self.llm = llm\n        self.tools = tools\n        self.memory = memory\n```",
      ],
    },
    quiz: {
      id: "quiz2",
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: [],
    },
    challenge: {
      id: "challenge2",
      title: "Diagrama de Arquitetura de Agente",
      description:
        "Crie um diagrama completo da arquitetura de um agente para um problema específico.",
      requirements: [
        "Definir o cérebro (LLM)",
        "Especificar o sistema de memória",
        "Listar as ferramentas necessárias",
        "Documentar o fluxo de contexto",
      ],
      examples: [
        "Use ferramentas como Mermaid ou Draw.io",
        "Considere um caso de uso real",
      ],
    },
  },
  {
    id: "aula3",
    title: "Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)",
    description:
      "Comparação de modelos, critérios de seleção e demonstrações práticas.",
    order: 3,
    isLocked: false,
    duration: "2h 15min",
    content: {
      explanation: [
        "Escolher o LLM certo é crucial para o sucesso do Vibe Coding.",
        "GLM 4.6 oferece excelente custo-benefício e performance.",
        "Critérios: janela de contexto, preço, latência, qualidade.",
      ],
      examples: [],
    },
    quiz: {
      id: "quiz3",
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: [],
    },
    challenge: {
      id: "challenge3",
      title: "Micro-benchmarks de LLMs",
      description: "Teste diferentes modelos e compare performance.",
      requirements: [
        "Testar pelo menos 3 modelos",
        "Medir latência e qualidade",
        "Documentar os resultados",
      ],
      examples: [],
    },
  },
];

export const mockLessonScores: LessonScore[] = [
  {
    id: "score-aula1",
    lessonId: "aula1",
    order: 1,
    title: "Fundamentos do Vibe Coding & Riscos",
    presenceScore: 10,
    quizScore: 8.5,
    challengeScore: 9.2,
    completed: true,
    updatedAt: "2025-01-10T09:00:00Z",
  },
  {
    id: "score-aula2",
    lessonId: "aula2",
    order: 2,
    title: "Arquitetura de Agente & Engenharia de Contexto",
    presenceScore: 10,
    quizScore: 8,
    challengeScore: 8.7,
    completed: true,
    updatedAt: "2025-01-12T09:00:00Z",
  },
  {
    id: "score-aula3",
    lessonId: "aula3",
    order: 3,
    title: "LLMs para Vibe Coding",
    presenceScore: 9.5,
    quizScore: 7.8,
    challengeScore: 8,
    completed: true,
    updatedAt: "2025-01-15T09:00:00Z",
  },
  {
    id: "score-aula4",
    lessonId: "aula4",
    order: 4,
    title: "Ambientes TRAE Solo & CLIs",
    presenceScore: 9.2,
    quizScore: 7.5,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-18T09:00:00Z",
  },
  {
    id: "score-aula5",
    lessonId: "aula5",
    order: 5,
    title: "Boas Práticas & BMAD/PRD",
    presenceScore: 8.8,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-22T09:00:00Z",
  },
  {
    id: "score-aula6",
    lessonId: "aula6",
    order: 6,
    title: "Projeto Dirigido I",
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-25T09:00:00Z",
  },
  {
    id: "score-aula7",
    lessonId: "aula7",
    order: 7,
    title: "Projeto Dirigido II",
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-25T09:00:00Z",
  },
  {
    id: "score-aula8",
    lessonId: "aula8",
    order: 8,
    title: "Integração Supabase & Deploy",
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-25T09:00:00Z",
  },
  {
    id: "score-aula9",
    lessonId: "aula9",
    order: 9,
    title: "Observabilidade Inteligente",
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-25T09:00:00Z",
  },
  {
    id: "score-aula10",
    lessonId: "aula10",
    order: 10,
    title: "Encerramento & Vibe Challenges",
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: "2025-01-25T09:00:00Z",
  },
];

// Mock de Ranking
export const mockRanking: RankingEntry[] = [
  {
    user: mockUsers[2], // Maria Oliveira
    position: 1,
    points: {
      total: 1450,
      presence: 360,
      quizzes: 540,
      challenges: 550,
    },
    trend: "up",
  },
  {
    user: mockUsers[0], // Ana Silva
    position: 2,
    points: {
      total: 1250,
      presence: 300,
      quizzes: 450,
      challenges: 500,
    },
    trend: "stable",
  },
  {
    user: mockUsers[1], // Carlos Mendes
    position: 3,
    points: {
      total: 980,
      presence: 240,
      quizzes: 340,
      challenges: 400,
    },
    trend: "down",
  },
];

// Mock de Tópicos do Fórum
export const mockForumTopics: ForumTopic[] = [
  {
    id: "topic1",
    title: "Dúvida sobre configuração do Supabase",
    content:
      "Estou com dificuldades para configurar as policies no Supabase. Alguém pode ajudar?",
    author: mockUsers[0],
    lessonId: "aula1",
    replies: [
      {
        id: "reply1",
        content:
          "Oi Ana! Você já verificou a documentação oficial? O problema geralmente está na sintaxe das policies.",
        author: mockUsers[1],
        createdAt: "2024-03-15T14:30:00Z",
        likes: 3,
        isFromModerator: true,
      },
      {
        id: "reply2",
        content:
          "Eu tive o mesmo problema! A solução foi usar o template de RLS que eles fornecem.",
        author: mockUsers[2],
        createdAt: "2024-03-15T15:45:00Z",
        likes: 2,
        isFromModerator: false,
      },
    ],
    createdAt: "2024-03-15T13:00:00Z",
    isPinned: false,
    tags: ["supabase", "configuração", "ajuda"],
  },
  {
    id: "topic2",
    title: "Compartilhando meu AGENTS.md para feedback",
    content:
      "Pessoal, desenvolvi um AGENTS.md para um projeto de e-commerce e gostaria de feedback.",
    author: mockUsers[2],
    lessonId: "aula2",
    replies: [
      {
        id: "reply3",
        content:
          "Excelente estrutura! Sugeri apenas adicionar mais detalhes sobre o agente de QA.",
        author: mockUsers[1],
        createdAt: "2024-03-14T10:00:00Z",
        likes: 5,
        isFromModerator: true,
      },
    ],
    createdAt: "2024-03-14T09:00:00Z",
    isPinned: true,
    tags: ["agents.md", "feedback", "compartilhamento"],
  },
];

// Mock de Posts da Galeria
export const mockGalleryPosts: GalleryPost[] = [
  {
    id: "post1",
    title: "Bot de WhatsApp para atendimento",
    description:
      "Desenvolvi um bot usando n8n e GLM 4.6 para automatizar o atendimento ao cliente.",
    author: mockUsers[2],
    challengeId: "challenge1",
    code: `// Workflow de atendimento n8n
{
  "nodes": [
    {
      "name": "Trigger WhatsApp",
      "type": "n8n-nodes-base.webhook",
      "parameters": {}
    },
    {
      "name": "Processar com GLM-4.6",
      "type": "n8n-nodes-base.httpRequest",
      "parameters": {
        "url": "https://api.zhipuai.ai/v4/chat/completions"
      }
    }
  ]
}`,
    language: "json",
    screenshots: [],
    likes: 12,
    comments: [
      {
        id: "comment1",
        content:
          "Muito interessante! Como você lidou com a autenticação do WhatsApp?",
        author: mockUsers[0],
        createdAt: "2024-03-15T16:00:00Z",
        likes: 2,
      },
    ],
    createdAt: "2024-03-14T11:30:00Z",
    isFeatured: true,
  },
  {
    id: "post2",
    title: "Dashboard de analytics com Supabase",
    description:
      "Criei um dashboard interativo usando React e Supabase para análise de dados.",
    author: mockUsers[0],
    challengeId: "challenge2",
    code: `// Componente de Dashboard
import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabase';

export function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    supabase
      .from('analytics')
      .select('*')
      .order('created_at', { ascending: false })
      .then(setData);
  }, []);

  return <div>{/* JSX do dashboard */}</div>;
}`,
    language: "typescript",
    screenshots: [],
    likes: 8,
    comments: [],
    createdAt: "2024-03-13T20:15:00Z",
    isFeatured: false,
  },
];

// Mock de usuário atual (simulação de login)
export const mockCurrentUser: User = mockUsers[0]; // Ana Silva

// Mock de estados de presença
export const mockPresenceStatus = {
  isEnabled: true,
  lessonId: "aula1",
  expiresAt: "2024-03-15T23:59:59Z",
};

// Mock de Slides
export const mockSlidesAula1: Slide[] = [
  {
    id: "aula1-slide1",
    order: 1,
    title: "Abertura do Curso",
    type: "text",
    content:
      "# Vibe Coding\n## Programação Assistida por IA: Do Conceito ao Deploy\n\n- **8 encontros práticos**\n- **Outubro/Novembro 2025**\n- **20h00 às 22h30** (com laboratório aberto até 23h00)",
    image:
      "https://mfgnuiozkznfqmtnlzgs.supabase.co/storage/v1/object/public/media-files/bf5ff449-a432-4b2c-b33e-ed85c4cbf4a5/1761681732357.jpg",
  },
  {
    id: "aula1-slide2",
    order: 2,
    title: "Objetivos do Curso",
    type: "text",
    content:
      "# Para Quem é Este Curso?\n\n- **🎯 Desenvolvedores Iniciantes:** Completos novatos ou em transição de carreira.\n- **💻 Vibe Coders:** Querem estruturar e aprofundar o conhecimento.\n- **👨‍💻 Desenvolvedores Tradicionais:** Buscam se atualizar com ferramentas emergentes.\n\n# O Que Você Vai Aprender?\n\n- **🧠 CONCEITOS:** Fundamentos, mitos vs. realidade, arquitetura de agentes.\n- **🛠️ MÉTODOS:** Segurança, engenharia de prompt e contexto, iteração eficaz.\n- **🚀 PRÁTICA:** Ferramentas de ponta, projeto completo do zero ao deploy.",
  },
  {
    id: "aula1-slide3",
    order: 3,
    title: "Perfis de Vibe Coder: Hype vs. Profissionalização",
    type: "image-text",
    content: {
      imageUrl:
        "https://mfgnuiozkznfqmtnlzgs.supabase.co/storage/v1/object/public/media-files/bf5ff449-a432-4b2c-b33e-ed85c4cbf4a5/1762606385469.jpg",
      imageAlt: "Comparação de perfis Vibe Coder",
      text: `### 🎭 Perfis de Vibe Coder: Hype vs. Profissionalização

| Característica | 🎮 Não Técnico<br/>("Vibecoder da Web") | 🚀 Técnico<br/>("Vibe Coder Pro") |
|----------------|----------------------------------------|-----------------------------------|
| **Base Técnica** | Interface pura, sem engenharia | HTTP, APIs, auth, testes, infra |
| **Escopo** | POCs, scripts pontuais | Sistemas completos, produção |
| **Padrões** | Sem segurança/performance/manutenção | Seguro, performático, sustentável |
| **Abordagem** | Copiar/colar cego | Orquestra fluxos e contexto |
| **Frameworks** | Nenhum | • **BMAD**: Business, Model, Architecture, Delivery<br/>• **Spec-driven**: Requisitos → contrato → código |
| **Resultado** | Apps simples, preconceito, riscos | • Sistemas profissionais<br/>• Auditáveis e escaláveis |
| **Mercado** | R$ 3-8k (limitado) | R$ 15-25k (alta demanda) |

> **💡 Nota**: Aprofundaremos arquitetura de agente e engenharia de contexto na Aula 02`,
    },
  },
  {
    id: "aula1-slide4",
    order: 4,
    title: "O Profissional em Alta: Dev Técnico + Orquestração de IA",
    type: "text",
    content:
      "### 👔 Quem é esse profissional?\n\n- **Base técnica sólida**: Segurança, performance, padrões, Git, CI/CD\n- **Domina orquestração de IA**: Projeta prompts, contextos, ferramentas, fluxos\n- **Responsável**: Valida, testa, monitora, versiona tudo\n- **Não delega cegamente**: IA é ferramenta, não substituto do pensamento crítico\n\n---\n\n### ⚙️ Como ele trabalha: Ciclo PREVC\n\n- **P**lanear: Define objetivo, contexto, restrições, riscos\n- **R**evisar: Avalia respostas da IA, ajusta instruções e gaps\n- **E**xecutar: Aplica soluções com critérios técnicos\n- **V**alidar: Testa segurança, performance, aderência ao PRD\n- **C**onfirmar: Documenta, versiona, consolida fluxo para reuso\n\n---\n\n### 📈 Por que o mercado quer esse perfil?\n\n- ✅ Reduz retrabalho e risco operacional\n- ✅ Acelera entrega sem sacrificar qualidade\n- ✅ Conecta linguagem de negócio + LLMs + engenharia sólida\n- ✅ **Diferencial competitivo**: R$ 15-25k vs R$ 3-8k (mercado brasileiro)",
  },
  {
    id: "aula1-slide5",
    order: 5,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# O Ecossistema Completo de Vibe Coding

## 🎨 PLATAFORMAS ALL-IN-ONE
- **Lovable:** Transforma linguagem natural em apps web completos
- **Google AI Studio:** Ambiente de desenvolvimento com Gemini integrado
- **Manus:** Agente de IA com interface de objetivos
- **MGX (MetaGPT X):** No-code AI builder para chatbots e análise
- **GenSpark:** Plataforma de geração de código e automação
- **Kimi AI:** Assistente de IA com foco em desenvolvimento
- **Z.ai:** Plataforma de modelos de linguagem com contexto amplo
- **Lumi:** Ambiente de desenvolvimento assistido por IA

## 🔗 AUTOMAÇÃO & ORQUESTRAÇÃO
- **n8n:** Workflows inteligentes baseados em nós
- **Make (Integromat):** Automação visual com múltiplas integrações
- **OpenAI Agent Builder:** Construtor de agentes especializados
- **Google Visual Blocks:** Framework visual para ML e automação
- **Langflow:** Orquestração de fluxos de trabalho com LLMs

## 💻 IDEs & EDITORES ASSISTIDOS
- **TRAE Solo:** IDE principal para Vibe Coding com GLM 4.6
- **VS Code:** Editor com extensões de IA (Claude, Kilo Code, etc.)
- **Warp:** Terminal avançado com agentes integrados
- **Zed:** Editor colaborativo com suporte a múltiplos agentes
- **Cursor:** IDE com foco em pair-programming com IA

## 🤖 AGENTES & CLIs
- **Claude Code:** CLI e extensão com conversas persistentes
- **Kilo Code:** Modos especializados para diferentes tarefas
- **Gemini CLI:** Interface de linha de comando do Google
- **Codex Code:** Ferramenta de programação da OpenAI
- **Auggie CLI:** Assistente de desenvolvimento
- **OpenCode:** CLI open-source para Vibe Coding
- **Qwen Code:** Ferramenta baseada no modelo Qwen
- **GLM 4.6 CLI:** Interface para o modelo GLM

## 🗄️ BACKEND & BANCO DE DADOS
- **Supabase:** Alternativa open-source ao Firebase com PostgreSQL
- **Firebase:** Backend as a Service do Google
- **Appwrite:** Backend open-source para web e mobile
- **PocketBase:** Backend leve e de código aberto

> **💡 Dica:** Escolha ferramentas que se integram bem e complementam seu workflow`,
  },
  {
    id: "aula1-slide6",
    order: 6,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA

## 🎨 PLATAFORMAS ALL-IN-ONE

<div class="flex flex-wrap -mx-3 items-stretch gap-y-3">
  <!-- Lovable -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/Lov.jpg" alt="Lovable" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Lovable</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Crie apps e sites completos conversando com a IA. Plataforma focada em MVPs e produtos full‑stack com deploy rápido.</p>
      <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Google AI Studio -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/gemini_logo.png" alt="Google AI Studio (Gemini)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Google AI Studio</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">O caminho mais rápido do prompt ao produto com <strong>Gemini</strong>. Prototipação, avaliação e publicação com a API do Gemini.</p>
      <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Manus (tema claro/escuro) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/manus_claro.png" alt="Manus" class="h-10 w-10 object-contain rounded dark:hidden" />
        <img src="/Contexto/Aula%2001/assets/manus_escuro.png" alt="Manus (tema escuro)" class="h-10 w-10 object-contain rounded hidden dark:block" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Manus</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de IA orientado à execução: automatiza tarefas e workflows além de respostas, com foco em ação.</p>
      <a href="https://manus.im/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- MGX (MetaGPT X) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/mgx_logo.jpg" alt="MGX (MetaGPT X)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">MGX (MetaGPT X)</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">No‑code AI builder multi‑agente para criar protótipos e aplicações rapidamente, a partir de linguagem natural.</p>
      <a href="https://mgx.dev/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Genspark (mantém ícone atual) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <span class="text-2xl" aria-hidden="true">✨</span>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Genspark</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Workspace all‑in‑one com apps de IA (Developer, Designer, Docs, Slides etc.). Suporte a geração de código e automações.</p>
      <a href="https://www.genspark.ai/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Kimi AI -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/kimi%20logo.jpg" alt="Kimi AI" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kimi AI</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Assistente de IA com modelos K2 e janelas de contexto extensas, forte em tarefas de coding e pesquisa.</p>
      <a href="https://www.kimi.com/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Z.ai -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/Z.AI.png" alt="Z.ai (GLM)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Z.ai</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Plataforma de modelos GLM (GLM‑4.6 e família), com APIs e agentes para desenvolvimento assistido por IA.</p>
      <a href="https://z.ai/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Lumi -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/lumi%20logo.jpg" alt="Lumi" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Lumi</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Ambiente de desenvolvimento assistido por IA para criação de sites via chat, do conceito ao protótipo funcional.</p>
      <a href="https://lumi.new/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>
</div>

> Nota: Estes cards detalham o bloco <strong>PLATAFORMAS ALL‑IN‑ONE</strong> do slide 05. Nos próximos slides (07–10) detalharemos os demais blocos.`,
  },
  {
    id: "aula1-slide7",
    order: 7,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
## 🔗 AUTOMAÇÃO & ORQUESTRAÇÃO

| Plataforma | Descrição | Complexidade | Vantagens | Desvantagens |
|------------|-----------|------------|-----------|-------------|
| **n8n** | Plataforma open-source baseada em nós com suporte a lógica complexa, loops, sub-workflows e expressões. Pode rodar self-hosted ou cloud, com arquitetura extensível via nodes customizados. | Média | Open-source e self-hosted, alto poder expressivo, ecossistema sólido de integrações, bom fit para arquiteturas modernas com LLMs | Requer maturidade técnica, escalabilidade exige design, menos "no-code" que concorrentes |
| **Make (antigo Integromat)** | Plataforma SaaS de automação visual com editor de cenários baseado em módulos encadeados. Focada em experiência no-code/low-code com infraestrutura gerenciada. | Baixa-Média | UX extremamente amigável, ampla biblioteca de integrações, ideal para squads de negócio e prototipagem, infra gerenciada | Alto vendor lock-in, menos adequado para workloads críticos, custos podem crescer com escala |
| **OpenAI Agent Builder** | Camada gerenciada para criação de agentes LLM stateful com integração nativa às APIs OpenAI. Abstrai prompt orchestration, tool calling e memória. | Média | Integração nativa com stack OpenAI, menos boilerplate, modelo mental "agent-first", suporte a observabilidade | Vendor lock-in elevado, menos flexível para multi-cloud, ainda não substitui plataformas corporativas |
| **Google Visual Blocks** | Canvas para compor blocos de processamento, modelos e integrações com serviços Google. Orientado a componentes conectáveis para pipelines de IA/ML. | Média | Integração com ecossistema Google, abordagem visual baseada em blocos, padroniza fluxos de IA | Escopo mais restrito, dependência do ecossistema Google, maturidade inferior para governança |
| **Langflow** | Plataforma visual para construção de fluxos de LLMs e agentes baseada em nodes. Integra-se com LangChain, suporta múltiplos provedores e pode rodar localmente. | Média-Alta | Foco nativo em LLMs e agentes, multi-provedor e extensível, interface visual acelera experimentação, possibilidade de self-hosting | Curva de aprendizado elevada, menos adequado para automação generalista, exige complemento para produção robusta |

> **Data de atualização:** 08/11/2025`,
  },
  {
    id: "aula1-slide8",
    order: 8,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA

## 💻 IDEs & EDITORES ASSISTIDOS

<!-- Layout: um card por linha, seguindo o padrão visual do slide 06 -->
<div class="flex flex-col gap-4 items-stretch">
  <!-- TRAE Solo -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/trae-color.png" alt="TRAE Solo" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">TRAE Solo</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      IDE e ambiente agentico focado em <strong>engenharia de contexto</strong>, unificando editor, terminal, docs, browser e ferramentas em um único workspace.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> base <em>VS Code</em> (fork/customizado) e modo <em>SOLO</em> dedicado (referência: páginas oficiais TRAE).</li>
      <li><strong>Multiagentes:</strong> ecossistema aberto de agentes com orquestração e execução fim‑a‑fim.</li>
      <li><strong>Terminal único:</strong> fluxo integrado editor↔terminal↔browser para desenvolvimento guiado por agentes.</li>
      <li><strong>Integração com modelos (BYOK):</strong> suporte a múltiplos provedores via chaves próprias.</li>
      <li><strong>Autocomplete & índice:</strong> sugestões contextuais e entendimento da codebase.</li>
      <li><strong>Orquestração de fluxo:</strong> planejamento, execução, revisão e deploy assistidos.</li>
      <li><strong>Novas integrações de modelos:</strong> compatibilidade reportada com <em>Z.ai (GLM)</em>, <em>Grok</em> e <em>Kimi</em> em releases recentes; disponibilidade pode variar por build/região.</li>
      <li><strong>Disponibilidade Anthropic:</strong> em algumas instalações, modelos <em>Anthropic</em> foram descontinuados; no <em>SOLO Agent Builder</em>, uso focado em <strong>GPT‑5 (Medium/High)</strong>. <em>Confirme na sua build.</em></li>
      <li><strong>Precificação:</strong> planos variam por licenciamento; avaliar custo‑benefício por equipe e volume.</li>
    </ul>
    <a href="https://www.trae.ai/solo" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
  </div>

  <!-- VS Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/visual-studio-code.png" alt="VS Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">VS Code</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor open‑source da Microsoft, extensível e dominante no mercado. Forte ecossistema de extensões e integração com Git/GitHub.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> open‑source, mantido pela Microsoft.</li>
      <li><strong>Multiagentes:</strong> via extensões (Copilot Chat, Continue, CodeRabbit, entre outros).</li>
      <li><strong>Terminal único:</strong> integrado ao editor com tarefas e scripts.</li>
      <li><strong>Integração com modelos (BYOK):</strong> <em>Bring Your Own Key</em> disponível (VS Code 1.105, API de chat de modelos).</li>
      <li><strong>Autocomplete & índice:</strong> Copilot e ferramentas de índice de workspace/projeto.</li>
      <li><strong>Orquestração de fluxo:</strong> tarefas, debug, pipelines com extensões e Actions.</li>
      <li><strong>Integração com GitHub Copilot:</strong> completações de código, chat em linha e janela dedicada; planos <em>Pro/Pro+/Business/Enterprise</em> reforçam o poder de codificação assistida por IA.</li>
      <li><strong>Precificação:</strong> VS Code é gratuito; <em>Copilot</em> possui planos pagos (Pro/Pro+/Business/Enterprise).</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
      <a href="https://code.visualstudio.com/blogs/2025/10/22/bring-your-own-key" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">BYOK ↗</a>
      <a href="https://github.com/features/copilot/plans" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Copilot – Planos ↗</a>
    </div>
  </div>

  <!-- Warp Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/warp%20logo.jpg" alt="Warp Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Warp Code</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Ambiente de desenvolvimento <em>agentic</em> com foco em múltiplos agentes atuando do prompt ao deploy, combinando IDE e CLI.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> plataforma <em>agent‑first</em> da Warp (Rust/GPU), IDE + terminal.</li>
      <li><strong>Multiagentes:</strong> suporte nativo a diversos agentes e fluxo orientado a tarefas.</li>
      <li><strong>Terminal único:</strong> terminal moderno integrado com revisão e edição de código.</li>
      <li><strong>Integração com modelos:</strong> abordagem <em>multi‑model</em> (OpenAI/Anthropic/Google); controle de privacidade.</li>
      <li><strong>Autocomplete & índice:</strong> assistência contextual e revisão em tempo real.</li>
      <li><strong>Orquestração de fluxo:</strong> painel de revisão, execução e publicação.</li>
      <li><strong>Times & versionamento:</strong> recursos para squads (revisão de código, orquestração, analytics) e integração com VCS.</li>
      <li><strong>Precificação (2025):</strong> novo plano <em>Build</em> (~US$ 20/mês, 1.500 créditos) e <em>Business</em> (~US$ 50/usuário/mês). Mudança consolidou planos anteriores; percepção comum é de encarecimento.</li>
    </ul>
    <a href="https://www.warp.dev/code" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
    <div class="mt-2 flex flex-wrap gap-3">
      <a href="https://www.warp.dev/pricing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Pricing ↗</a>
      <a href="https://www.warp.dev/blog/warp-new-pricing-flexibility-byok" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Mudanças de planos ↗</a>
    </div>
  </div>

  <!-- Zed -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/Zed.png" alt="Zed" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Zed</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor de próxima geração (Rust), veloz e colaborativo (multiplayer), com interface de engenharia agentica e suporte a IA.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> criado pelos autores de Atom/Tree‑sitter; foco em performance.</li>
      <li><strong>Multiagentes:</strong> threads de texto e edição preditiva; colaboração em tempo real.</li>
      <li><strong>Terminal único:</strong> integração com fluxos de build/test/debug.</li>
      <li><strong>Integração com modelos (BYOK):</strong> possibilidade de usar <em>modelos próprios</em> e/ou hospedar (inclui provedores como OpenRouter).</li>
      <li><strong>Autocomplete & índice:</strong> assistências e completions com entendimento contextual.</li>
      <li><strong>Orquestração de fluxo:</strong> agentes assistem refatoração, navegação e execução.</li>
      <li><strong>ACP (Agent Client Protocol):</strong> integração aberta <em>bring‑your‑own‑agent</em>. <em>Agentes aceitos hoje:</em> Gemini CLI e extensões ACP como <em>Auggie</em>, <em>OpenCode</em> e <em>Stakpak</em>; parceria com JetBrains amplia interoperabilidade.</li>
      <li><strong>Precificação:</strong> gratuito/open‑source; add‑ons/serviços opcionais.</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://zed.dev/ai" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Zed AI ↗</a>
      <a href="https://zed.dev/acp" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">ACP ↗</a>
      <a href="https://zed.dev/blog/agent-extensions" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Agent Extensions ↗</a>
      <a href="https://github.com/zed-industries/zed" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Repo ↗</a>
    </div>
  </div>

  <!-- Cursor -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/cursor%20logo.jpg" alt="Cursor" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Cursor</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor <em>AI‑native</em> com agentes, entendimento profundo da codebase e modelo de autocompletar próprio.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> baseado no código do <em>VS Code</em> (fork/customizado).</li>
      <li><strong>Multiagentes:</strong> modo agente com execução de tarefas complexas (background agents/flows).</li>
      <li><strong>Terminal único:</strong> integração com CLI e ferramentas do projeto.</li>
      <li><strong>Modelo exclusivo:</strong> <strong>Composer</strong> (nativo, baixa latência) para tarefas de coding iterativas.</li>
      <li><strong>Integração com modelos (BYOK):</strong> trazer APIs de <em>OpenAI</em>, <em>Google</em> e <em>Anthropic</em>; há suporte/experimentos para alterar <em>base URL</em> em endpoints compatíveis (com limitações reportadas).</li>
      <li><strong>Autocomplete & índice:</strong> modelo de código próprio e entendimento do projeto.</li>
      <li><strong>Orquestração de fluxo:</strong> edição assistida, revisão de PRs (Bugbot), geração e aplicação de mudanças.</li>
      <li><strong>Precificação:</strong> planos individuais (Pro/Pro+/Ultra) e empresariais (Teams/Enterprise).</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://cursor.com/pricing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Planos ↗</a>
      <a href="https://www.youtube.com/watch?v=Xaf_VkiVj9g" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Cursor 2.0 (vídeo) ↗</a>
    </div>
  </div>
</div>

> Atualizado em 08/11/2025. Referências: VS Code BYOK (blog oficial), páginas oficiais do Warp Code, Zed AI/ACP e Cursor (pricing/docs); vídeo Cursor 2.0.`,
  },
  {
    id: "aula1-slide9",
    order: 9,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
  ## 🤖 AGENTES & CLIs

<div class="flex flex-col gap-4 items-stretch">
  <!-- Kilo Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/kilo_code_logo.png" alt="Kilo Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kilo Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Kilo Code AI</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código open-source que atua como "dev júnior automatizado". Lê repositório, planeja mudanças, edita arquivos, roda comandos e reitera até entregar resultado funcional. CLI reutiliza núcleo da extensão VS Code com modos: Architect, Code, Debug, Ask, Orchestrator.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Suporte a múltiplos provedores (OpenAI, Anthropic, Gemini, OpenRouter, modelos locais)</li>
          <li>Open-source, modos com permissão explícita</li>
          <li>Integrações com VS Code/VSCodium/Gitpod</li>
          <li>Parallel mode, Autonomous mode, configuração interativa</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>CLI relativamente recente (menor maturidade)</li>
          <li>Depende de Node/npm</li>
          <li>Requer controle de versão e branch separado por segurança</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Suporta trazer suas próprias chaves + Kilo Provider opcional</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">CLI e extensão gratuitas, custo nos modelos (pay-as-you-go via Kilo Provider ou BYOK)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com modos e Parallel mode</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @kilocode/cli</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI, Extensão IDE (VS Code/Open VSX), Web (docs/painel apenas)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://kilocode.ai/docs/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://kilocode.ai/docs/</a></p>
    </div>
  </div>

  <!-- Claude Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/claude_code_logo.png" alt="Claude Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Claude Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Anthropic</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código da Anthropic para terminal e IDE com foco em segurança (sandbox, permissões granulares, políticas enterprise). Lê projeto, roda comandos, faz refactors, gera testes, integra com Git. Usa modelos Claude 3.x/4.x otimizados para código. Integrado a VS Code, JetBrains, Cursor e web app Claude.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Forte foco em segurança e governança</li>
          <li>Sandbox opcional para Bash</li>
          <li>Integrações sólidas com VS Code/JetBrains/Cursor</li>
          <li>Suporte a MCP, arquivo CLAUDE.md para contexto persistente</li>
          <li>hooks pré/pós ferramenta, governança de MCP para enterprise</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Custo tipicamente ligado a planos pagos (Pro/Max)</li>
          <li>Curva de aprendizado alta devido a riqueza de recursos</li>
          <li>Pode executar comandos com acesso amplo se configuração permissiva</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Anthropic API via ANTHROPIC_API_KEY + AWS Bedrock + Google Vertex AI</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Incluso em planos Claude Pro/Max, para empresas via Claude Console (billing por tokens) ou Bedrock/Vertex</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e plugins</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>brew install --cask claude-code</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @anthropic-ai/claude-code</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensão IDE (VS Code, JetBrains, Cursor), Web (Claude Code on the Web), Desktop (builds como app/daemon)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://docs.claude.com/en/docs/claude-code/quickstart" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://docs.claude.com/en/docs/claude-code/quickstart</a></p>
    </div>
  </div>

  <!-- Gemini CLI -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/gemini_logo.png" alt="Gemini CLI" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Gemini CLI</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Google</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de linha de comando da Google para modelos Gemini 2.5 Pro/Flash. Roda localmente, lê diretório do projeto, chama ferramentas (shell, web search) e permite conversas em linguagem natural para gerar, analisar e modificar código. Open-source, integra com Gemini Code Assist, AI Studio e ecossistema Google (Search, Veo, Imagen). Suporte a contextos grandes (1M tokens).</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Contexto grande com Gemini 2.5 Pro</li>
          <li>Integração natural com ecossistema Google</li>
          <li>Open-source com documentação clara</li>
          <li>Suporte nativo a multimodal</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Focado exclusivamente em Gemini (não multimodelo)</li>
          <li>Controle de dados segue termos da Google (requer avaliação em ambientes regulados)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Gemini API via GEMINI_API_KEY + Google Cloud para empresas</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Tier gratuito para indivíduos (limites diários/minuto), Code Assist Business/Enterprise (~US$ 20-25/usuário/mês), uso via Google Cloud (cobrança por tokens/API)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, via MCP e stack Gemini</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npx @google/gemini-cli@latest</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensões IDE (Gemini Code Assist para VS Code/JetBrains), Web (Gemini web app e AI Studio), Desktop (sem app GUI específico)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://developers.google.com/gemini-code-assist/docs/gemini-cli" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.google.com/gemini-code-assist/docs/gemini-cli</a></p>
    </div>
  </div>

  <!-- Codex (Codex CLI – OpenAI) -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/codex.png" alt="Codex" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Codex (Codex CLI – OpenAI)</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> OpenAI</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código da OpenAI integrado ao ecossistema ChatGPT e modelo GPT-5-Codex. Existe como Codex CLI, extensão de IDE (VS Code, Cursor, Windsurf) e Codex Web dentro do ChatGPT. Lê repositório, executa comandos, gera/refatora código, escreve testes, faz code review. Pode delegar tarefas longas para Codex Cloud (sandbox remoto). Usa GPT-5-Codex otimizado para engenharia de software.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Integração nativa com ChatGPT (mesmo login/conta, compartilhamento de contexto)</li>
          <li>Modelo GPT-5-Codex com bom desempenho em refactors extensos e análise de grandes bases</li>
          <li>Ferramentas maduras para CI/CD (integração em pipelines, correção automática de falhas, abertura de PRs)</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Requer plano pago (Plus/Pro/Business/Edu/Enterprise)</li>
          <li>Em configuração permissiva, pode executar comandos com alto nível de acesso e editar múltiplos arquivos em lote (requer modos de aprovação e verificação de diffs)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Via ChatGPT (saldo do plano) ou API OpenAI (modelos codex-*)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Incluso em planos ChatGPT (Plus/Pro/Business/Edu/Enterprise), via API (preços por milhão de tokens, competitivos, com descontos por caching)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e integração com GitHub Agent HQ</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @openai/codex</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>brew install --cask codex</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (Codex CLI), Extensão IDE (VS Code, Cursor, Windsurf), Web (Codex Web dentro do ChatGPT), Mobile (via app ChatGPT)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://developers.openai.com/codex/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.openai.com/codex/</a> e <a href="https://developers.openai.com/codex/cli/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.openai.com/codex/cli/</a></p>
    </div>
  </div>

  <!-- Qwen Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/Qwen.png" alt="Qwen" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Qwen Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Alibaba / Qwen</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código de terminal da família Qwen3-Coder. CLI open-source focado em "agentic coding": explora base de código, gera projetos completos, refatora, roda testes e automatiza tarefas com um único comando. Oferece tier gratuito generoso (~2.000 requisições/dia). Inspirado no Gemini CLI, adaptado para modelos Qwen3-Coder com compatibilidade com API estilo OpenAI.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Free tier muito generoso (~2.000 req/dia, 60 req/min)</li>
          <li>Suporte para modelos locais (via llama.cpp/GGUF)</li>
          <li>Compatibilidade com API estilo OpenAI (facilita integração com Cursor, Roo Code, Cline)</li>
          <li>Pode funcionar como backend barato/free-tier para outros orquestradores</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Ferramenta relativamente nova (menor maturidade)</li>
          <li>Ecossistema e comunidade mais concentrados em chinês/inglês (menos recursos em português)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Login OAuth Qwen + DashScope API key + modelos locais</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Tier gratuito generoso, uso intenso via DashScope/Qwen (por tokens/chamadas), planos enterprise Alibaba Cloud</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e integração com outros agentes</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>pip install qwen-code</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>pip install qwen-code-cli</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g qwen-code-cli</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensão IDE (sem plugin oficial, mas funciona como provider em Cursor/Cline/Roo Code), Web (chat.qwen.ai ou similar), Desktop (sem app GUI oficial)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://qwenlm.github.io/qwen-code-docs/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://qwenlm.github.io/qwen-code-docs/</a> e <a href="https://github.com/QwenLM/qwen-code" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://github.com/QwenLM/qwen-code</a></p>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula1-slide10",
    order: 10,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
## 🗄️ BACKEND & BANCO DE DADOS

<div class="flex flex-col gap-4 items-stretch">
  <!-- Supabase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/supabase_logo.png" alt="Supabase logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Supabase</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">BaaS open‑source baseado em <strong>PostgreSQL</strong>, com Auth, Storage, Realtime e Edge Functions. Foco em DX e padrões abertos.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://supabase.com/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Free, Pro (desde US$ 25/mês), Team (US$ 599/mês) ↗</a>. <em>Compute add‑ons</em> (instância Postgres dedicada): de <strong>Micro</strong> (US$ 10/mês) até opções com <strong>64 cores / 256GB RAM</strong>. <em>"Cores"</em> = núcleos de CPU (vCPU) alocados para a instância, impactando paralelismo e throughput.</li>
      <li><strong>Facilidade de integração:</strong> SDKs para Web/Mobile, REST, PostgREST, GraphQL (pg_graphql), CLI e Admin GUI.</li>
      <li><strong>Segurança:</strong> <em>Row‑Level Security (RLS)</em> por padrão, chaves <em>public (anon)</em> e <em>service_role</em>; MFA, logs e backups/PITR nos planos. <em>Nota:</em> balancear políticas RLS para não bloquear funcionalidades essenciais.</li>
      <li><strong>Performance:</strong> PostgreSQL dedicado por projeto; pooling, Realtime (millions msgs/mês), storage com CDN, Edge Functions com baixo custo.</li>
    </ul>
    <div class="mt-3 text-sm">
      <h4 class="font-semibold text-green-600 dark:text-green-400">Extensões (Supabase/Postgres)</h4>
      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
        <li><strong>pgvector</strong> (base vetorial para embeddings/similaridade) — <a href="https://supabase.com/docs/guides/ai/pgvector" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
        <li><strong>PostGIS</strong> (geoespacial: Point, Polygon, LineString, consultas GIS) — <a href="https://supabase.com/docs/guides/database/extensions/postgis" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
        <li><strong>pg_trgm</strong> (trigram similarity/fuzzy search), <strong>uuid‑ossp</strong> (UUID), <strong>pgcrypto</strong> (criptografia), <strong>citext</strong> (case‑insensitive text)</li>
        <li>Mais de 50 extensões pré‑configuradas e opção de instalar outras — <a href="https://supabase.com/docs/guides/database/extensions" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Visão geral ↗</a></li>
      </ul>
    </div>
  </div>

  <!-- Firebase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <span class="text-2xl" aria-hidden="true">🔥</span>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Firebase</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Plataforma BaaS do Google com <strong>Firestore/Realtime DB</strong>, Auth, Functions, Hosting e integrações com Google Cloud.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://firebase.google.com/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Spark (free) & Blaze (pay‑as‑you‑go) ↗</a>. Mudança: App Hosting com 10GiB/mês grátis, depois US$ 0.20/GiB (uncached) e US$ 0.15/GiB (cached) a partir de 01/08/2025.</li>
      <li><strong>Facilidade de integração:</strong> SDKs oficiais para Web/Mobile, emuladores locais, CLI, integração estreita com Google Cloud & BigQuery.</li>
      <li><strong>Segurança:</strong> <em>Security Rules</em> para Firestore/Realtime/Storage; IAM via Identity Platform; requisitos de compliance via Google Cloud.</li>
      <li><strong>Performance:</strong> baixa latência global, caching e offline; atenção a custos de egress/leitura em escala; Functions com quotas generosas.</li>
    </ul>
  </div>

  <!-- Appwrite -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/App%20Write.png" alt="Appwrite logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Appwrite</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">BaaS <strong>open‑source</strong> com Auth, Database (coleções/documentos), Storage, Functions, Realtime e Sites. Self‑host ou Cloud.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://appwrite.io/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://appwrite.io/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Free & Pro (desde US$ 25/mês) ↗</a>; Enterprise sob consulta. Self‑host gratuito sem limites.</li>
      <li><strong>Facilidade de integração:</strong> SDKs para Web/Mobile, REST/GraphQL, CLI e deploy de Sites; ecossistema unificado reduz dependências externas.</li>
      <li><strong>Segurança:</strong> permissões por documento/coleção, teams/roles, TLS, DDoS mitigation e opções de compliance (SOC‑2/HIPAA/BAA no Enterprise).</li>
      <li><strong>Performance:</strong> recursos dedicados em Cloud; escalonamento por quotas; boa opção para evitar lock‑in mantendo controle via open‑source.</li>
    </ul>
  </div>

  <!-- PocketBase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/pocketbase_logo.png" alt="PocketBase logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">PocketBase</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Backend <strong>em 1 arquivo</strong> (Go) com <strong>SQLite</strong>, Auth, Storage, Realtime e painel Admin. Ideal para MVPs e apps pequenos/médios.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://pocketbase.io/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação:</strong> <em>self‑host somente</em> (sem plano Cloud oficial). Custos de infra variam pelo provedor (VPS/Cloud). <a href="https://pocketbase.io/faq/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">FAQ ↗</a></li>
      <li><strong>Facilidade de integração:</strong> binário único, REST/SDKs, deploy simples (Docker, reverse proxy, TLS automático); Admin UI integrada. Sem <em>cloud functions</em>; use como framework (Go/JS) para lógica custom.</li>
      <li><strong>Segurança:</strong> recomendações oficiais para produção (MFA superuser, rate limit, encryption key, backups S3, headers de proxy).</li>
      <li><strong>Performance:</strong> vertical (single server) com alta eficiência; 10k+ conexões Realtime em VPS barato; adequado para muitas cargas sem complexidade distribuída.</li>
    </ul>
  </div>
</div>

> Atualizado em 08/11/2025. Referências: Supabase (pricing, compute add‑ons, extensões), Firebase (pricing/docs), Appwrite (pricing/docs) e PocketBase (docs/FAQ).`,
  },
  {
    id: "aula1-slide11",
    order: 11,
    title: "Contexto: por que LLMs trazem novos riscos",
    type: "text",
    content:
      "# Contexto: por que LLMs trazem novos riscos\n\n## Onde os LLMs já atuam\n- Geram código, testes e documentação\n- Revisam pull requests e pipelines\n- Operam como copilotos na IDE e em agentes de terminal\n\n## O que as pesquisas apontam\n- Parte relevante do código sugerido por IA chega com vulnerabilidades e más práticas\n- Há aumento de dívida técnica quando entregas não são revisadas\n\n## Principais riscos organizacionais\n- **Shadow AI:** uso de ferramentas não autorizadas\n- **Exposição de dados sensíveis:** secrets e PII em prompts e uploads\n- **Lock-in:** dependência excessiva de um único fornecedor de IA\n- **Compliance:** impactos diretos em LGPD e políticas internas\n\n> **Mensagem central:** LLMs aceleram o desenvolvimento, mas sem governança viram multiplicadores de risco técnico, de segurança e regulatório.",
  },
  {
    id: "aula1-slide12",
    order: 12,
    title: "Código vulnerável gerado por LLMs",
    type: "text",
    content:
      "# Código vulnerável gerado por LLMs\n\n## Problema de origem\n- Modelos aprendem com bases públicas que contêm bugs e padrões inseguros\n- Otimizam para plausibilidade em vez de segurança, testes ou legibilidade\n\n## Sinais de alerta comuns\n- Consultas SQL sem parametrização (SQL Injection)\n- Validação de entrada fraca ou ausente\n- Criptografia inadequada ou configurações inseguras\n- Tratamento de erros que vaza stack traces/detalhes internos\n- Provisionamento cloud com credenciais hardcoded ou buckets públicos\n\n## Controles essenciais\n- Trate IA como **assistente**: humanos decidem e aprovam\n- Mantenha **code review obrigatório** para cada trecho gerado\n- Automatize segurança com **SAST/DAST** e scanners de dependência\n- Aplique checklists (OWASP ASVS, OWASP Top 10) em pontos críticos\n- Exija testes, logs de auditoria e justificativas de design antes de subir código",
  },
  {
    id: "aula1-slide13",
    order: 13,
    title: "Shadow AI: uso não autorizado de IA",
    type: "text",
    content:
      "# Shadow AI: uso não autorizado de IA\n\n## O que caracteriza Shadow AI?\n- Ferramentas de IA adotadas fora da governança oficial\n- Exemplos: copiar código confidencial em chat público, instalar agentes gratuitos sem avaliação, ativar plugins não homologados\n\n## Riscos imediatos\n- **Vazamento de dados:** código, secrets e informações de clientes indo para provedores externos\n- **Não conformidade:** violações de LGPD e contratos de confidencialidade\n- **Falta de rastreabilidade:** ausência de logs sobre quem enviou o quê e quando\n\n## Como mitigar\n- Publicar um **catálogo de ferramentas aprovadas** e mantê-lo atualizado\n- Definir política simples: o que pode, o que nunca pode e como pedir aprovação\n- Monitorar endpoints corporativos com proxy, CASB e DLP\n- Disponibilizar alternativas oficiais (instâncias corporativas de ChatGPT, Claude, Gemini etc.)",
  },
  {
    id: "aula1-slide14",
    order: 14,
    title: "Segurança de secrets & LGPD",
    type: "text",
    content:
      "# Segurança de secrets & LGPD\n\n## Proteção de segredos\n- Problemas recorrentes: prompts com chaves, agentes imprimindo `.env`, arquivos de config enviados para análise\n- Ataques de prompt injection podem induzir agentes a revelar variáveis de ambiente\n\n### Boas práticas\n- Nunca inserir chaves, tokens, senhas ou certificados em prompts\n- Usar Secret Managers (AWS, GCP, Vault) e expor apenas identificadores\n- Preferir credenciais efêmeras com escopo limitado\n- Restringir leitura de arquivos sensíveis (`.env`, `.aws`, `id_rsa`) nas ferramentas\n\n## LGPD em fluxos de IA\n- ANPD considera prompts, uploads e fine-tuning como **tratamento de dados pessoais**\n- Riscos: exposição de PII, treinamento por terceiros, dificuldade de atender direitos do titular\n\n### Controles LGPD\n- Aplicar minimização de dados e anonimização sempre que possível\n- Manter DPIAs para usos relevantes de IA\n- Formalizar contratos com fornecedores cobrindo uso de dados, localização e garantias de segurança",
  },
  {
    id: "aula1-slide15",
    order: 15,
    title: "Qualidade e manutenibilidade do código gerado",
    type: "text",
    content:
      "# Qualidade e manutenibilidade do código gerado\n\n## Problemas recorrentes\n- **Code bloat:** excesso de código e baixa reutilização\n- **Duplicação:** blocos quase idênticos espalhados pelo projeto\n- **Complexidade alta:** estruturas aninhadas e responsabilidades confusas\n- Falta de visão sistêmica sobre arquitetura e domínio\n\n## Impactos diretos\n- Dificuldade de entendimento e depuração\n- Crescimento acelerado da dívida técnica\n- Bugs sutis escapando para produção\n\n## Estratégia de controle\n- Tratar a IA como **pair programmer** e manter decisões arquiteturais no time\n- Garantir **code review humano** e testes automatizados cobrindo o código gerado\n- Respeitar padrões de arquitetura, estilo e linting existentes\n- Dar feedback explícito ao modelo: simplificar, remover duplicações, segmentar funções",
  },
  {
    id: "aula1-slide16",
    order: 16,
    title: "Lock‑in: dependência de um único fornecedor de IA",
    type: "text",
    content:
      "# Lock-in: dependência de um único fornecedor de IA\n\n## Por que é um problema\n- Aumenta custos e reduz poder de negociação\n- Exposição a mudanças unilaterais de política ou preço\n- Indisponibilidade impacta operações críticas\n\n## Como o lock-in se manifesta\n- Uso intenso de SDKs e features proprietárias\n- Fine-tuning preso à infraestrutura do fornecedor\n- Workflows dependentes de APIs ou formatos fechados\n- Cultura interna construída em torno de um único copiloto\n\n## Como reduzir o risco\n- Criar camada de abstração com interfaces genéricas para tarefas de IA\n- Preferir formatos e padrões abertos para dados, embeddings e prompts\n- Planejar estratégia multi-modelo/multi-fornecedor para casos críticos\n- Revisar periodicamente custos, riscos jurídicos e plano de migração",
  },
  {
    id: "aula1-slide17",
    order: 17,
    title: "Prompts seguros e governança de IA",
    type: "text",
    content:
      "# Prompts seguros e governança de IA\n\n## Construindo prompts seguros\n- Nunca incluir secrets (chaves, tokens, senhas) no texto enviado\n- Evitar dados pessoais identificáveis; usar dados sintéticos quando precisar de exemplos\n- Remover logs de produção com informações sensíveis\n- Definir instruções de sistema: “não exiba variáveis de ambiente”, “recuse dados pessoais”, etc.\n\n## Estruturando governança\n- Criar framework com papéis claros (produto, segurança, jurídico, privacidade, dados)\n- Manter inventário de casos de uso: sistemas, dados tratados, modelos e fornecedores\n- Classificar riscos (baixo/médio/alto) considerando segurança, privacidade e negócio\n- Implantar logging e auditoria alinhados à privacidade para rastrear incidentes",
  },
  {
    id: "aula1-slide18",
    order: 18,
    title: "Checklist para reduzir riscos com LLMs",
    type: "text",
    content:
      "# Checklist para reduzir riscos com LLMs\n\n## Antes de usar IA para gerar código, valide:\n\n### 1. Dados e contexto\n- [ ] O prompt contém dados pessoais, sensíveis ou de produção?\n- [ ] Dá para anonimizar, pseudonimizar ou sintetizar exemplos?\n\n### 2. Segredos\n- [ ] Há chaves, tokens, senhas ou URLs internas no prompt ou arquivos?\n- [ ] O agente acessa `.env`, `config.yml` ou pastas privadas?\n\n### 3. Ferramenta e fornecedor\n- [ ] A ferramenta é oficialmente aprovada?\n- [ ] O fornecedor permite desativar uso de dados para treino e cumpre LGPD?\n\n### 4. Qualidade e segurança de código\n- [ ] Haverá code review humano antes do merge?\n- [ ] Existem testes automatizados cobrindo as alterações?\n- [ ] SAST, lint e coverage estão ativos na esteira?\n\n### 5. Governança e registro\n- [ ] O caso está mapeado no inventário de IA?\n- [ ] Há logging/auditoria suficientes?\n\n### 6. Lock-in\n- [ ] O uso depende de recurso altamente proprietário?\n- [ ] Existe plano de contingência para migração?\n\n> **Lembre-se:** LLMs só entregam valor sustentável quando combinados com segurança de secrets, atenção à LGPD, governança e disciplina de engenharia.",
  },
  {
    id: "aula1-slide19",
    order: 19,
    title: "Recap e Próximos Passos",
    type: "text",
    content: `# Recapitulativo da Aula 01

## 📚 O que você aprendeu sobre acelerar com IA sem ser inconsequente
- **Fundamentos do Vibe Coding:** diferença entre usar IA de forma superficial e uma abordagem profissional orientada a contexto.
- **Ecossistema com propósito:** como plataformas, agentes, CLIs e integrações podem acelerar entregas sem virar gambiarra ou risco descontrolado.
- **Riscos reais no mundo corporativo:** Shadow AI, exposição de dados e secrets, lock-in em um único fornecedor, código vulnerável e impacto direto em governança e LGPD.
- **Segurança como base do jogo:** uso responsável de prompts, proteção de segredos, cuidado com dados pessoais e atenção às configurações de ambiente.
- **Qualidade sustentável:** code review humano, testes automatizados, análise estática e checklist de riscos como filtros obrigatórios para tudo que a IA gera.

## 🛡️ Segurança, governança e disciplina técnica
- **Segurança não é opcional:** é requisito mínimo para usar IA em produtos, times e clientes reais.
- **Governança viabiliza velocidade com controle:** políticas claras, ferramentas aprovadas e rastreabilidade reduzem Shadow AI e incidentes.
- **Disciplina técnica mantém o nível:** IA é assistente; responsabilidade, decisão final e padrões continuam nas mãos do time.

---

# 🚀 Spoilers da Aula 02: Arquitetura de Agente & Engenharia de Contexto

## 🎯 Do "cuidado com riscos" para "projetar agentes seguros e eficientes"
Na próxima aula, você sai apenas do alerta de riscos e entra na prática: como desenhar agentes e fluxos de contexto que usam IA com controle, auditoria e alinhamento ao negócio.

## 🧠 O que vem por aí
- Diferença entre um **LLM solto** respondendo qualquer prompt e um **agente bem projetado**, com objetivos claros e limites definidos.
- Os **quatro pilares** da arquitetura de agentes:
  - **Cérebro (LLM):** o motor de raciocínio.
  - **Memória:** histórico, contexto e conhecimento persistente.
  - **Ferramentas (Tools/MCP):** integração com APIs, serviços e ações reais.
  - **Contexto:** regras, políticas, dados e objetivos que guiam o comportamento do agente.
- Como a **Engenharia de Contexto** transforma as boas práticas da Aula 01 em:
  - regras aplicadas nos prompts e sistemas;
  - redução de vazamento de dados e lock-in;
  - agentes mais previsíveis, rastreáveis e confiáveis.

---

# 🎯 Chamada final

Você agora entende os riscos, limites e responsabilidades de usar IA em código e produtos reais.

Na próxima aula, vamos projetar o ecossistema de agentes que aplica tudo isso na prática — com controle, rastreabilidade e alinhamento com o negócio — para que Vibe Coding seja não só velocidade, mas arquitetura profissional de ponta a ponta.`,
  },
];

export const mockSlidesAula2: Slide[] = [
  {
    id: "aula2-slide1",
    order: 1,
    title: "Abertura da Aula 02",
    type: "text",
    content:
      "# Arquitetura de Agente & Engenharia de Contexto\n## Evoluindo do Vibe Coding para Sistemas Inteligentes\n\n- **Conceitos avançados de IA autônoma**\n- **Arquitetura de agentes de código**\n- **Engenharia de contexto vs. prompts**\n- **Demonstração prática com n8n**",
  },
  {
    id: "aula2-slide2",
    order: 2,
    title: "Objetivos Específicos da Aula",
    type: "text",
    content:
      "# O Que Você Vai Dominar Hoje?\n\n## 🧠 COMPREENSÃO CONCEITUAL\n- **Diferenciar** LLMs básicos de Agentes de IA\n- **Entender** a arquitetura completa de agentes\n- **Compreender** o papel de cada componente\n\n## ⚙️ ENGENHARIA AVANÇADA\n- **Dominar** técnicas de Engenharia de Contexto\n- **Aplicar** contextualização rica em prompts\n- **Otimizar** resultados através de contexto estruturado\n\n## 🔗 INTEGRAÇÃO E ORQUESTRAÇÃO\n- **Conhecer** o protocolo MCP (Model Context Protocol)\n- **Compreender** orquestração com n8n\n- **Visualizar** fluxos de trabalho de agentes\n\n## 🛠️ APLICAÇÃO PRÁTICA\n- **Construir** diagramas de arquitetura\n- **Projetar** agentes para casos reais\n- **Avaliar** ferramentas e tecnologias",
  },
  {
    id: "aula2-slide3",
    order: 3,
    title: "LLM vs. Agente - Conceitos Fundamentais",
    type: "text",
    content: `# Entendendo a Evolução: De LLMs a Agentes Autônomos

<div class="space-y-6">
  <!-- Card 1: LLM (texto à esquerda, imagem à direita) -->
  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Texto -->
      <div class="p-5 md:p-6">
        <h2 class="text-2xl font-semibold mb-2">LLM (Large Language Model):</h2>
        <p class="font-medium">Características:</p>
        <ul class="list-none space-y-2">
          <li>🗣️ Gerador de texto baseado em probabilidade estatística</li>
          <li>⚡ Resposta reativa a prompts</li>
          <li>🧠 Processamento de linguagem natural</li>
          <li>❌ Sem capacidade de ação autônoma</li>
          <li>📝 Foco em geração de conteúdo</li>
        </ul>
        <p class="font-medium mt-4">Limitações:</p>
        <ul class="list-none space-y-2">
          <li>Não acessa ferramentas externas</li>
          <li>Não mantém estado entre interações</li>
          <li>Incapaz de executar ações</li>
          <li>Dependente apenas do prompt atual</li>
        </ul>
      </div>
      <!-- Imagem com fundo preto e divisão -->
      <div class="bg-black/80 dark:bg-black p-5 md:p-6 flex items-center justify-center md:border-l border-gray-200 dark:border-gray-700">
        <a href="#modal-llms" aria-label="Ampliar imagem de LLM" class="block">
          <img src="/Contexto/Aula%2002/assets/llms.jpg" alt="LLM (Large Language Model)"
               class="max-w-full h-auto max-h-[520px] rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ring-1 ring-gray-200/70 dark:ring-gray-700/60 object-cover" />
        </a>
      </div>
    </div>
  </div>

  <!-- Card 2: AGENTE DE IA (texto à esquerda, imagem à direita) -->
  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Texto -->
      <div class="p-5 md:p-6">
        <h2 class="text-2xl font-semibold mb-2">AGENTE DE IA:</h2>
        <p class="font-medium">Características:</p>
        <ul class="list-none space-y-2">
          <li>🤖 Sistema inteligente autônomo</li>
          <li>🧠 LLM como "cérebro" + camadas extras</li>
          <li>⚙️ Capaz de planejar e executar ações</li>
          <li>🔗 Integração com ferramentas externas</li>
          <li>💾 Mantém estado e memória</li>
          <li>🎯 Orientado por objetivos</li>
        </ul>
        <p class="font-medium mt-4">Capacidades:</p>
        <ul class="list-none space-y-2">
          <li>Acesso a APIs e sistemas externos</li>
          <li>Tomada de decisão independente</li>
          <li>Aprendizado baseado em experiência</li>
          <li>Execução de workflows complexos</li>
        </ul>
      </div>
      <!-- Imagem com fundo preto e divisão -->
      <div class="bg-black/80 dark:bg-black p-5 md:p-6 flex items-center justify-center md:border-l border-gray-200 dark:border-gray-700">
        <a href="#modal-agente" aria-label="Ampliar imagem de Agente de IA" class="block">
          <img src="/Contexto/Aula%2002/assets/agents.jpg" alt="Agente de IA"
               class="max-w-full h-auto max-h-[520px] rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ring-1 ring-gray-200/70 dark:ring-gray-700/60 object-cover" />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Modais (CSS target) -->
<div id="modal-llms" class="modal fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto" role="dialog" aria-modal="true">
  <div class="modal-content relative mx-auto max-w-5xl min-h-screen flex items-center justify-center">
    <a href="#" class="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-[#111]/90 text-gray-900 dark:text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Fechar modal">Fechar ✕</a>
    <img src="/Contexto/Aula%2002/assets/llms.jpg" alt="LLM ampliada" class="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl" />
  </div>
  <a href="#" class="absolute inset-0" aria-hidden="true"></a>
</div>

<div id="modal-agente" class="modal fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto" role="dialog" aria-modal="true">
  <div class="modal-content relative mx-auto max-w-5xl min-h-screen flex items-center justify-center">
    <a href="#" class="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-[#111]/90 text-gray-900 dark:text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Fechar modal">Fechar ✕</a>
    <img src="/Contexto/Aula%2002/assets/agents.jpg" alt="Agente de IA ampliada" class="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl" />
  </div>
  <a href="#" class="absolute inset-0" aria-hidden="true"></a>
</div>

💡 <strong>"Um LLM é o cérebro, mas o agente é o sistema nervoso completo"</strong>`,
  },
  {
    id: "aula2-slide4",
    order: 4,
    title: "Arquitetura de Agente - Visão Geral",
    type: "text",
    content: `# Os Quatro Pilares da Arquitetura de Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Cérebro e Memória em colunas 1 e 2 -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧠 CÉREBRO (LLM)</h3>
    <ul class="list-none space-y-2">
      <li>Motor de raciocínio</li>
      <li>Processamento de linguagem</li>
      <li>Geração de planos de ação</li>
      <li>Tomada de decisões</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💾 MEMÓRIA/CACHE</h3>
    <ul class="list-none space-y-2">
      <li>Contexto conversacional</li>
      <li>Histórico de ações</li>
      <li>Banco de conhecimento</li>
      <li>Estado persistente</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem ocupando as duas colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/agente_exemplo.jpg" alt="Arquitetura de Agente — exemplo visual"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Wrapper dedicado para garantir Tools e Contexto na mesma linha -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔧 TOOLS (FERRAMENTAS)</h3>
      <ul class="list-none space-y-2">
        <li>APIs externas</li>
        <li>Funções customizadas</li>
        <li>Acesso a dados</li>
        <li>Sistemas legados</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📋 CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Informações do projeto</li>
        <li>Objetivos e restrições</li>
        <li>Regras organizacionais</li>
        <li>Dados estruturados</li>
      </ul>
    </div>
  </div>
</div>

**Fluxos de Dados:**
- Cérebro ↔ Memória: Consulta e atualização de contexto
- Cérebro → Tools: Chamadas de ação
- Contexto → Cérebro: Orientação de decisões
- Tools → Cérebro: Resultados e feedback

**Exemplo Real:** "Agente de desenvolvimento de software"`,
  },
  {
    id: "aula2-slide5",
    order: 5,
    title: "Arquitetura Detalhada - Cérebro (LLM)",
    type: "text",
    content: `# Cérebro: O Motor de Raciocínio do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Processamento de Objetivos + Gestão de Recursos -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 PROCESSAMENTO DE OBJETIVOS</h3>
    <ul class="list-none space-y-2">
      <li>Interpretação de instruções complexas</li>
      <li>Decomposição em sub-tarefas</li>
      <li>Priorização de ações</li>
      <li>Adaptação a mudanças de contexto</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧩 GESTÃO DE RECURSOS</h3>
    <ul class="list-none space-y-2">
      <li>Seleção de ferramentas apropriadas</li>
      <li>Coordenação de múltiplas APIs</li>
      <li>Otimização de chamadas</li>
      <li>Tratamento de erros e exceções</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/llm_brain.jpg" alt="Cérebro (LLM) — exemplo visual"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Análise e Decisão + Comunicação -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔍 ANÁLISE E DECISÃO</h3>
      <ul class="list-none space-y-2">
        <li>Avaliação de resultados</li>
        <li>Validação de qualidade</li>
        <li>Detecção de inconsistências</li>
        <li>Ajuste de estratégias</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📝 COMUNICAÇÃO</h3>
      <ul class="list-none space-y-2">
        <li>Geração de relatórios de progresso</li>
        <li>Explicação de decisões</li>
        <li>Interface com usuários</li>
        <li>Documentação automática</li>
      </ul>
    </div>
  </div>
</div>

**Exemplo Prático - Agente de Desenvolvimento:**
- Objetivo: "Criar um sistema de e-commerce"
- Decomposição: Frontend → Backend → Database → Deploy
- Seleção de ferramentas: Lovable → Supabase → GitHub
- Validação: Testes, segurança, performance`,
  },
  {
    id: "aula2-slide6",
    order: 6,
    title: "Arquitetura Detalhada - Memória/Cache",
    type: "text",
    content: `# Memória: A Consciência do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Memória de Trabalho + Memória Persistente -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📚 MEMÓRIA DE TRABALHO (SHORT-TERM)</h3>
    <ul class="list-none space-y-2">
      <li>Contexto da conversa atual</li>
      <li>Instruções recentes</li>
      <li>Resultados de ações imediatas</li>
      <li>Duração: sessão atual</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💾 MEMÓRIA PERSISTENTE (LONG-TERM)</h3>
    <ul class="list-none space-y-2">
      <li>Histórico de projetos similares</li>
      <li>Preferências do usuário</li>
      <li>Políticas organizacionais</li>
      <li>Aprendizados anteriores</li>
    </ul>
  </div>



  <!-- Linha 3: Memória Especializada + Memória de Contexto -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔍 MEMÓRIA ESPECIALIZADA (DOMAIN)</h3>
      <ul class="list-none space-y-2">
        <li>Conhecimento técnico específico</li>
        <li>Padrões de código e arquitetura</li>
        <li>Requisitos regulatórios</li>
        <li>Boas práticas do setor</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 MEMÓRIA DE CONTEXTO (PROJECT)</h3>
      <ul class="list-none space-y-2">
        <li>Objetivos do projeto atual</li>
        <li>Restrições e limitações</li>
        <li>Especificações técnicas</li>
        <li>Stakeholders e processos</li>
      </ul>
    </div>
  </div>
</div>

**Implementação Prática:**
- Vector databases para busca semântica
- Sistemas de cache distribuído
- APIs de memória externa
- Sincronização em tempo real

**Benefícios:**
- Consciência contínua
- Aprendizado incremental
- Personalização
- Eficiência operacional`,
  },
  {
    id: "aula2-slide7",
    order: 7,
    title: "Arquitetura Detalhada - Tools (Ferramentas)",
    type: "text",
    content: `# Tools: Os Sentidos e Ações do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: APIs Externas + Ferramentas de Desenvolvimento -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🌐 APIS EXTERNAS</h3>
    <ul class="list-none space-y-2">
      <li>Serviços de terceiros (Stripe, AWS, Google)</li>
      <li>Plataformas de desenvolvimento (GitHub, GitLab)</li>
      <li>Ferramentas de comunicação (Slack, Teams)</li>
      <li>Bancos de dados e storage</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💻 FERRAMENTAS DE DESENVOLVIMENTO</h3>
    <ul class="list-none space-y-2">
      <li>IDEs e editores de código</li>
      <li>Sistemas de controle de versão</li>
      <li>Ferramentas de build e deploy</li>
      <li>Ambientes de teste e staging</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/tools.jpg" alt="Ferramentas do Agente — visão geral"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Funções Customizadas + Sistemas de Monitoramento -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔧 FUNÇÕES CUSTOMIZADAS</h3>
      <ul class="list-none space-y-2">
        <li>Validações específicas do negócio</li>
        <li>Processamento de dados</li>
        <li>Integrações proprietárias</li>
        <li>Algoritmos especializados</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📊 SISTEMAS DE MONITORAMENTO</h3>
      <ul class="list-none space-y-2">
        <li>Logs e métricas de performance</li>
        <li>Alertas e notificações</li>
        <li>Dashboards de status</li>
        <li>Auditoria e compliance</li>
      </ul>
    </div>
  </div>
</div>

**Interface de Comunicação:**
- Protocolos padronizados (REST, GraphQL, gRPC)
- Autenticação e autorização
- Rate limiting e quotas
- Versionamento de APIs

**Exemplo de Uso:**
**Agente de E-commerce:**
- Tools: Supabase (DB), Stripe (pagamento), SendGrid (email)
- Integração: API calls sequenciais com tratamento de erro
- Monitoramento: Status de pedidos, logs de pagamento`,
  },
  {
    id: "aula2-slide8",
    order: 8,
    title: "Arquitetura Detalhada - Contexto",
    type: "text",
    content: `# Contexto: O DNA do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Contexto Global + Contexto do Projeto -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🌍 CONTEXTO GLOBAL</h3>
    <ul class="list-none space-y-2">
      <li>Política organizacional</li>
      <li>Regulamentações do setor</li>
      <li>Padrões de qualidade</li>
      <li>Cultura e valores da empresa</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📋 CONTEXTO DO PROJETO</h3>
    <ul class="list-none space-y-2">
      <li>Especificações técnicas</li>
      <li>Requisitos funcionais</li>
      <li>Restrições de tempo/custo</li>
      <li>Arquitetura alvo</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/contexto_mem.jpg" alt="Contexto — visão geral (primeira imagem)"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Contexto de Usuário + Contexto Situacional -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">👥 CONTEXTO DE USUÁRIO</h3>
      <ul class="list-none space-y-2">
        <li>Perfil e preferências</li>
        <li>Histórico de interações</li>
        <li>Nível de permissão</li>
        <li>Padrões de uso</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">⚡ CONTEXTO SITUACIONAL</h3>
      <ul class="list-none space-y-2">
        <li>Estado atual do sistema</li>
        <li>Resultados de ações anteriores</li>
        <li>Condições de erro</li>
        <li>Feedback do ambiente</li>
      </ul>
    </div>
  </div>

  <!-- Linha 3.5: Imagem intermediária ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/context.jpg" alt="Contexto — imagem intermediária"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 4: Fontes de Contexto + Gestão de Contexto -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📚 FONTES DE CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Documentação técnica</li>
        <li>Bases de conhecimento</li>
        <li>APIs de configuração</li>
        <li>Entrada do usuário</li>
        <li>Sistemas externos</li>
        <li>Histórico de projetos</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧭 GESTÃO DE CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Hierarquização por relevância</li>
        <li>Atualização em tempo real</li>
        <li>Versionamento de políticas</li>
        <li>Audibilidade de mudanças</li>
      </ul>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula2-slide9",
    order: 9,
    title: "Prompt Engineering vs Context Engineering",
    type: "text",
    content:
      '# Evolução: Da Engenharia de Prompts à Engenharia de Contexto\n\n| Aspecto | Prompt Engineering | Context Engineering |\n|---|---|---|\n| **FOCO** | Instrução específica | Ambiente completo |\n| **SCOPE** | Solicitação pontual | Projeto global |\n| **DADOS** | Texto do prompt | Base de conhecimento estruturada |\n| **PRECISÃO** | Variável | Alta, com validação |\n| **COMPLEXIDADE** | Simples a média | Média a alta |\n| **MANUTENÇÃO** | Prompts individuais | Sistema de contexto |\n| **ESCALABILIDADE** | Limitada | Alta |\n| **CUSTO COMPUTACIONAL** | Baixo | Médio a alto |\n\n**PROMPT ENGINEERING:**\n- "Crie uma função para calcular média de notas"\n- "Escreva um componente React para login"\n- "Gere um SQL para consultar pedidos"\n\n**CONTEXT ENGINEERING:**\n- Sistema completo de gestão acadêmica\n- Componente com integração a autenticação\n- Dashboard com dados em tempo real e relatórios\n\n**Vantagens da Context Engineering:**\n- 🎯 Maior precisão e relevância\n- 🔄 Consistência entre interações\n- 🛡️ Menor risco de ambiguidade\n- 📈 Resultados mais robustos\n- 🔧 Maior controle sobre qualidade',
  },
  {
    id: "aula2-slide10",
    order: 10,
    title: "Técnicas de Engenharia de Contexto",
    type: "text",
    content: `# Técnicas Avançadas de Context Engineering

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Blocos de contextualização (com marcadores de bolinha) -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1️⃣ CONTEXTUALIZAÇÃO ESTRUTURADA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Documentação técnica</li>
      <li>Especificações de requisitos</li>
      <li>Políticas e procedimentos</li>
      <li>Exemplos de referência</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2️⃣ CONTEXTUALIZAÇÃO DINÂMICA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dados em tempo real</li>
      <li>Estado atual do sistema</li>
      <li>Feedback de usuários</li>
      <li>Métricas de performance</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3️⃣ CONTEXTUALIZAÇÃO INTELIGENTE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Aprendizagem por experiência</li>
      <li>Adaptação automática</li>
      <li>Personalização progressiva</li>
      <li>Predição de necessidades</li>
    </ul>
  </div>

  <!-- Linha seguinte com quebra (mt-6) e 4 colunas -->
  <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch mt-6">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🏗️ CONSTRUÇÃO DA BASE:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Coleta de documentação existente</li>
        <li>Normalização de formatos</li>
        <li>Indexação semântica</li>
        <li>Validação de qualidade</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎼 ORQUESTRAÇÃO:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>APIs de contexto</li>
        <li>Sistemas de atualização</li>
        <li>Versionamento</li>
        <li>Políticas de acesso</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔎 RECUPERAÇÃO CONTEXTUAL:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Busca semântica</li>
        <li>Filtragem por relevância</li>
        <li>Ranqueamento por importância</li>
        <li>Agregação inteligente</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧰 Ferramentas de Apoio:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Vector databases (Pinecone, Weaviate)</li>
        <li>Sistemas de knowledge graphs</li>
        <li>Frameworks de RAG (Retrieval-Augmented Generation)</li>
        <li>Pipelines de processamento de texto</li>
      </ul>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula2-slide11",
    order: 11,
    title: "Exemplos Práticos - Antes e Depois",
    type: "text",
    content:
      '# Context Engineering em Ação: Transformações Reais\n\n## EXEMPLO 1: DESENVOLVIMENTO WEB\n\n**ANTES (Prompt Engineering):**\n"Crie um formulário de cadastro"\n\n**DEPOIS (Context Engineering):**\n"Desenvolver um sistema de cadastro de clientes para uma farmácia online seguindo as normas da ANVISA, com validação de CPF/CNPJ, integração com o sistema de estoque via API REST, armazenamento seguro no Supabase com RLS, interface responsiva usando Tailwind CSS, tema escuro/claro, e relatórios automáticos por email para o gerente."\n\n**RESULTADO:**\n- Código mais completo e seguro\n- Conformidade regulatória\n- Integração real com sistemas\n- Interface profissional\n\n## EXEMPLO 2: ANÁLISE DE DADOS\n\n**ANTES:**\n"Gere um gráfico de vendas"\n\n**DEPOIS:**\n"Análise de performance de vendas para uma rede de 15 lojas no Nordeste durante o período de Black Friday 2024, comparando com o mesmo período de 2023, destacando produtos sazonais, impactados por feiras livre, considerando dados de clima (chuvas intensas em novembro), e identificando oportunidades de expansão para 2025."\n\n**RESULTADO:**\n- Análise contextualizada e acionável\n- Consideração de variáveis externas\n- Insights estratégicos\n- Projeções fundamentadas',
  },
  {
    id: "aula2-slide12",
    order: 12,
    title: "Boas Práticas - Context Engineering",
    type: "text",
    content: `# Boas Práticas para Context Engineering

<!-- Grupo 1: Estruturação de Contexto -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">📋 ESTRUTURAÇÃO DE CONTEXTO</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ HIERARQUIZAÇÃO</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Contexto global → Projeto → Situacional</li>
      <li>Priorizar informações críticas</li>
      <li>Evitar redundâncias</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ QUALIDADE DOS DADOS</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Validação de fontes</li>
      <li>Atualização regular</li>
      <li>Versionamento de mudanças</li>
      <li>Auditoria de origem</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ GRANULARIDADE ADEQUADA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Contexto suficiente sem excesso</li>
      <li>Foco no que é relevante</li>
      <li>Balanceamento precisão/tamanho</li>
    </ul>
  </div>
</div>

<!-- Grupo 2: Implementação Técnica -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">🔧 IMPLEMENTAÇÃO TÉCNICA</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ ARQUITETURA ESCALÁVEL</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>APIs bem documentadas</li>
      <li>Cache distribuído</li>
      <li>Rate limiting</li>
      <li>Monitoramento de performance</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ SEGURANÇA E PRIVACIDADE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Controle de acesso granular</li>
      <li>Criptografia de dados sensíveis</li>
      <li>Logs de auditoria</li>
      <li>Conformidade regulatória</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ INTEGRAÇÃO EFICIENTE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>APIs padronizadas</li>
      <li>Tratamento robusto de erros</li>
      <li>Timeouts e retry logic</li>
      <li>Fallbacks graciosos</li>
    </ul>
  </div>
</div>

<!-- Grupo 3: Gestão e Monitoramento -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">📊 GESTÃO E MONITORAMENTO</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ MÉTRICAS DE QUALIDADE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Precisão de resultados</li>
      <li>Tempo de resposta</li>
      <li>Taxa de acerto</li>
      <li>Satisfação do usuário</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ MELHORIA CONTÍNUA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Feedback loops</li>
      <li>A/B testing</li>
      <li>Análise de padrões</li>
      <li>Otimização iterativa</li>
    </ul>
  </div>
</div>`,
  },
  {
    id: "aula2-slide13",
    order: 13,
    title: "Model Context Protocol (MCP) - Conceitos",
    type: "text",
    content: `# Model Context Protocol: O Futuro da Integração

## O QUE É O MCP?
🔗 Protocolo padronizado para comunicação entre LLMs e ferramentas
🌐 Permite acesso seguro a dados e funcionalidades externas
🤝 Desenvolvido pela Anthropic em colaboração com comunidade
📈 Padrão emergente para agentes de IA

## ARQUITETURA MCP:

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">CLIENTE (LLM/Agente)</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Solicita recursos e ferramentas</li>
      <li>Processa resultados</li>
      <li>Mantém contexto conversacional</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">SERVIDOR MCP</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Expõe recursos de forma padronizada</li>
      <li>Gerencia autenticação e autorização</li>
      <li>Fornece logging e auditoria</li>
      <li>Implementa políticas de segurança</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">RECURSOS MCP</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dados estruturados e não-estruturados</li>
      <li>Ferramentas e funções</li>
      <li>APIs de terceiros</li>
      <li>Sistemas legados</li>
    </ul>
  </div>

</div>

## FLUXO DE COMUNICAÇÃO:
1. Cliente inicia conexão segura
2. Servidor expõe recursos disponíveis
3. Cliente solicita recurso específico
4. Servidor valida e executa
5. Resultado retornado com metadados
6. Contexto atualizado automaticamente

**BENEFÍCIOS:**
- 🔒 Segurança por padrão
- 📊 Padronização de interfaces
- 🚀 Agilidade no desenvolvimento
- 🔄 Reutilização de componentes`,
  },
  {
    id: "aula2-slide14",
    order: 14,
    title: "MCP na Prática - Casos de Uso",
    type: "text",
    content: `# MCP em Ação: Casos de Uso Reais

## 🌐 INTEGRAÇÃO COM SISTEMAS EXTERNOS

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Bancos de Dados</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>PostgreSQL, MySQL, MongoDB</li>
      <li>Queries complexas com contexto</li>
      <li>Sync automático de esquemas</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sistemas de Controle de Versão</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>GitHub, GitLab, Bitbucket</li>
      <li>Análise de código automático</li>
      <li>Gestão de pull requests</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ferramentas de Desenvolvimento</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>IDEs (VS Code, Cursor)</li>
      <li>CI/CD pipelines</li>
      <li>Sistemas de monitoramento</li>
    </ul>
  </div>
</div>

## 📊 ANÁLISE E INTELIGÊNCIA

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Business Intelligence</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dashboards automáticos</li>
      <li>Relatórios personalizados</li>
      <li>Análise preditiva</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Processamento de Documentos</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Extração de informações</li>
      <li>Análise de sentimentos</li>
      <li>Classificação automática</li>
    </ul>
  </div>
</div>

## 🔧 AUTOMAÇÃO DE WORKFLOWS

**DevOps e Infraestrutura**
- Deploy automático
- Monitoramento de sistemas
- Gestão de logs

**Marketing e Vendas**
- Segmentação de clientes
- Campanhas personalizadas
- Análise de performance

**VANTAGENS PRÁTICAS:**
- ⏱️ Redução de 60-80% no tempo de integração
- 🔒 Segurança padrão com validação
- 📈 Escalabilidade horizontal
- 🔄 Reutilização entre projetos`,
  },
  {
    id: "aula2-slide15",
    order: 15,
    title: "n8n como Orquestrador de Agentes",
    type: "text",
    content:
      "# n8n: Plataforma de Orquestração Visual\n\n## O QUE É O n8n?\n🔧 Plataforma de automação open-source\n🎨 Interface visual para criação de workflows\n🔗 400+ integrações pré-configuradas\n🤖 Suporte nativo a agentes de IA\n\n## VANTAGENS PARA AGENTES:\n✅ Interface visual intuitiva\n✅ Drag-and-drop para criação\n✅ Lógica condicional avançada\n✅ Tratamento de erros robusto\n✅ Logging detalhado\n✅ Escalabilidade horizontal\n\n## COMPONENTES PRINCIPAIS:\n\n**NODES (FERRAMENTAS)**\n- HTTP Request: APIs externas\n- Code: JavaScript customizado\n- Webhook: Gatilhos externos\n- OpenAI: Integração com LLMs\n- Database: Conexões diretas\n\n**WORKFLOWS (FLUXOS)**\n- Múltiplas entradas e saídas\n- Processamento paralelo\n- Loops e condições\n- Error handling\n\n## EXEMPLO DE WORKFLOW:\n**Agente de Processamento de Leads:**\n1. Webhook → Novo lead recebido\n2. Code Node → Validação de dados\n3. Database Node → Busca histórico\n4. OpenAI Node → Classificação\n5. Slack Node → Notificação\n6. CRM Node → Atualização",
  },
  {
    id: "aula2-slide21",
    order: 16,
    title: "Recap e Síntese",
    type: "text",
    content:
      "# Síntese: Do Conceito à Prática\n\n## CONCEITOS-CHAVE APRENDIDOS:\n\n### 🧠 LLM ≠ AGENTE\n- LLM: Gerador de texto reativo\n- Agente: Sistema autônomo completo\n- Arquitetura: Cérebro + Memória + Tools + Contexto\n\n### ⚙️ ENGENHARIA EVOLUTIVA\n- Prompt Engineering → Context Engineering\n- De instruções → Ambientes completos\n- De pontual → Sistemático\n\n### 🔗 ORQUESTRAÇÃO INTELIGENTE\n- MCP: Padrão emergente de integração\n- n8n: Visual workflow automation\n- Agentes: Coordenação de tarefas complexas\n\n## IMPACTOS PRÁTICOS:\n- 🚀 60-80% redução no tempo de desenvolvimento\n- 🎯 Resultados mais precisos e contextualizados\n- 🔄 Automação de processos complexos\n- 📈 Escalabilidade e reutilização\n\n## PRÓXIMOS PASSOS:\n- Aplicar conceitos em projetos reais\n- Explorar ferramentas MCP disponíveis\n- Construir agentes para casos específicos\n- Compartilhar aprendizados na comunidade",
  },
  {
    id: "aula2-slide22",
    order: 17,
    title: "Preview da Próxima Aula",
    type: "text",
    content:
      '# Próxima Aula: Comparação de LLMs para Vibe Coding\n\n## TEMA: "Qual LLM Escolher para Seu Projeto?"\n\n### CONTEÚDO DA AULA 03:\n- 🧠 Comparação técnica: GLM 4.6 vs Claude vs GPT-4\n- 💰 Análise de custos e performance\n- 📊 Benchmarks específicos para vibe coding\n- 🎯 Recomendações por tipo de projeto\n- 🛠️ Integração prática com ferramentas\n\n### DIFERENCIAIS:\n- Testes práticos com diferentes modelos\n- Métricas reais de performance\n- Estudos de caso de projetos reais\n- Calculator de custo-benefício\n\n### PREVIEW VISUAL:\n- Tabela comparativa interativa\n- Gráficos de performance\n- Exemplos de outputs de cada LLM\n- Matrix de decisão prática\n\n### DESAFIO PARA CASA:\nExperimentar diferentes LLMs no mesmo prompt básico e comparar resultados.',
  },
  {
    id: "aula2-slide23",
    order: 18,
    title: "Recursos Adicionais e Contatos",
    type: "text",
    content:
      '# Recursos para Aprofundamento\n\n## 📚 DOCUMENTAÇÃO OFICIAL:\n- MCP Protocol: modelcontextprotocol.io\n- n8n Documentation: docs.n8n.io\n- Anthropic Claude: docs.anthropic.com\n- OpenAI Platform: platform.openai.com\n\n## 🛠️ FERRAMENTAS PARA EXPLORAR:\n- Vector Databases: Pinecone, Weaviate\n- Frameworks RAG: LangChain, LlamaIndex\n- Agent Frameworks: CrewAI, AutoGen\n- Visual Tools: n8n, Node-RED\n\n## 📖 LEITURAS RECOMENDADAS:\n- "Building LLM Applications for Production" - Chip Huyen\n- "The Prompt Engineer\'s Guide to Context Engineering"\n- Case studies de agentes em produção\n\n## 🎓 COMUNIDADE:\n- Discord do curso: [link]\n- GitHub repository: [link]\n- LinkedIn: [professor]\n- Email: [contato]\n\n## AVALIAÇÃO:\nEnviar diagrama de arquitetura até [data] via Discord.\n\n**OBRIGADO!**\nTransformando conceitos em soluções inteligentes',
  },
];

export const mockSlidesAula3: Slide[] = [
  {
    id: "aula3-slide1",
    order: 1,
    title: "Fundamentos de Large Language Models",
    type: "text",
    content:
      "## O que são LLMs?\nLarge Language Models (LLMs) são sistemas de IA treinados com vastas quantidades de dados textuais, capazes de compreender, gerar e manipular linguagem humana com alta proficiência.\n\n## Evolução Histórica\n\n### GPT-1 (2018) → GPT-3 (2020) → GPT-4 (2023) → GPT-5 (2025)\n### BERT (2018) → RoBERTa (2019) → modelos multilíngue (2021-2023)\n### T5 (2019) → FLAN-T5 (2022) → modelos instruction-tuned (2023-2024)\n\n## Classificação por Arquitetura\n\n| Arquitetura | Exemplos | Características | Capacidade Agentica |\n|------------|----------|---------------|-------------------|\n| Transformer-based | GPT-4, Claude, Gemini | Attention mechanisms, paralelizável | Alta |\n| Mixture-of-Experts (MoE) | GLM 4.6, Kimi K2 | Roteamento inteligente, eficiência | Média-Alta |\n| Sparse | MiniMax M2 | Pensamento intercalado, menos parâmetros ativos | Alta |\n| Retrieval-Augmented | RAG systems | Base de conhecimento externa | Média |",
  },
  {
    id: "aula3-slide2",
    order: 2,
    title: "Melhor Custo Benefício para o Vibe Coding",
    type: "text",
    content: `<!-- Container principal com duas colunas lado a lado (sempre na mesma linha, sem quebra) -->
<div class="grid grid-cols-2 gap-6 mb-6">

  <!-- Coluna Esquerda: GLM 4.6 -->
  <div class="flex flex-col h-[650px] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-1">GLM 4.6</h3>
    <p class="text-sm uppercase tracking-wide text-green-500 font-semibold mb-3">
      Modelo principal recomendado para Vibe Coding
    </p>

    <div class="space-y-3 text-sm text-gray-800 dark:text-gray-200 break-words leading-relaxed overflow-y-auto flex-1 pr-2">
      <div>
        <strong class="text-green-600 dark:text-green-400">Arquitetura:</strong>
        <p class="mt-1">Mixture-of-Experts (MoE) com 355B parâmetros totais, 32B ativos por forward pass. Roteamento seletivo para ativação especializada e otimização de inferência.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Contexto:</strong>
        <p class="mt-1">200K tokens input / 128K output com compressão inteligente. Ideal para documentos inteiros e conversas longas.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Eficiência:</strong>
        <p class="mt-1">15–30% menos tokens que GLM 4.5. Usa apenas 86M tokens (reasoning) ou 12M tokens (non-reasoning) para completar Intelligence Index.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Preços:</strong>
        <ul class="mt-1 space-y-1">
          <li>• API: $0.60/M input, $2.20/M output</li>
          <li>
            • Coding Plan:
            <div class="mt-1 ml-4 space-y-2 text-gray-700 dark:text-gray-300">
              <div>
                <strong>Plano Lite:</strong> ~120 prompts por ciclo de 5h; indicado para cargas leves e testes.
                <div class="text-[11px] mt-1">Referência: a partir de ~$3/mês; cerca de 3× a cota de um plano padrão equivalente (ex.: Claude Pro).</div>
              </div>
              <div>
                <strong>Plano Pro:</strong> ~600 prompts por ciclo de 5h; 40–60% mais rápido que Lite; inclui visão (image/video) e Web Search MCP.
                <div class="text-[11px] mt-1">Indicado para projetos profissionais e alta frequência de uso.</div>
              </div>
              <div>
                <strong>Plano Max:</strong> ~2400 prompts por ciclo de 5h; 4× Pro; performance garantida em horários de pico e acesso antecipado a novos recursos.
                <div class="text-[11px] mt-1">Indicado para alto volume e workloads intensivos.</div>
              </div>
            </div>
          </li>
          <li>• Economia: ~20% do custo vs Claude (estimativa de curso/benchmarks)</li>
        </ul>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Compatibilidade:</strong>
        <p class="mt-1">Z.AI Console, Kilo Code (nativo), Claude Code, Cline, OpenCode, Crush, Goose. Limitações reportadas em Roo Code.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Perfil ideal:</strong>
        <p class="mt-1">Desenvolvedores solo, squads, produção contínua. Foco em custo baixo + velocidade + contexto longo.</p>
      </div>
    </div>

    <div class="mt-4 p-3 rounded-xl bg-green-50/80 dark:bg-green-900/10 border border-green-200/70 dark:border-green-700/50 text-xs text-gray-800 dark:text-gray-200">
      <p class="font-semibold text-green-700 dark:text-green-400 mb-2">Por que é o padrão do curso?</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>Excelente relação custo/performance para Vibe Coding diário</li>
        <li>Contexto amplo suficiente para projetos reais do curso</li>
        <li>Integra bem com ecossistema (TRAE Solo, Kilo Code, CLIs)</li>
        <li>Latência baixa para aplicações time-sensitive</li>
      </ul>
    </div>
  </div>

  <!-- Coluna Direita: MiniMax M2 -->
  <div class="flex flex-col h-[650px] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#050505]/80">
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-1">MiniMax M2</h3>
    <p class="text-sm uppercase tracking-wide text-amber-400 font-semibold mb-3">
      Especialista em agentes complexos e raciocínio intercalado
    </p>

    <div class="space-y-3 text-sm text-gray-800 dark:text-gray-200 break-words leading-relaxed overflow-y-auto flex-1 pr-2">
      <div>
        <strong class="text-amber-500 dark:text-amber-400">Arquitetura:</strong>
        <p class="mt-1">Interleaved Reasoning com alternância pensar→agir→pensar. Preserva trace de raciocínio entre 200-300 tool calls sequenciais.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Contexto:</strong>
        <p class="mt-1">200K tokens input (similar ao GLM 4.6). Suporte completo a contextos longos com preservação de estado.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Benchmarks:</strong>
        <ul class="mt-1 space-y-1">
          <li>• Intelligence Index: 61 (líder open-weights)</li>
          <li>• SWE-Bench Verified: 69.4% (+1.4pp vs GLM)</li>
          <li>• τ² Bench: 77.2% (+1.3pp vs GLM)</li>
          <li>• IFBench: 72.0% (acima de Claude)</li>
        </ul>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Preços:</strong>
        <ul class="mt-1 space-y-1">
          <li>• API: $0.30/M input, $1.20/M output</li>
          <li>• Planos: Starter $10/mês, Pro $20/mês, Max $50/mês</li>
          <li>• Economia: ~8% do custo vs Claude</li>
        </ul>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Compatibilidade:</strong>
        <p class="mt-1">Claude Code (com thinking preservation), Cline. Limitações em OpenRouter (traces não passam) e Roo Code.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Perfil ideal:</strong>
        <p class="mt-1">Workflows agênticos longos, pesquisa exploratória, debugging iterativo, automações complexas com auto-correção.</p>
      </div>
    </div>

    <div class="mt-4 p-3 rounded-xl bg-amber-50/90 dark:bg-amber-900/10 border border-amber-200/70 dark:border-amber-700/50 text-xs text-gray-900 dark:text-amber-100">
      <p class="font-semibold mb-2">Quando faz mais sentido usar M2?</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>Gargalo em qualidade de raciocínio exploratório</li>
        <li>Muitos tool calls sequenciais com auto-correção</li>
        <li>Time já opera com stack compatível (Claude Code/Cline)</li>
        <li>Tarefas onde interleaved reasoning traz +40% de ganho</li>
      </ul>
    </div>
  </div>

</div>

<!-- Cards de decisão em linha única com 3 colunas -->
<div class="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-green-600 mb-2 flex items-center gap-2">
      <span class="text-lg">🎯</span> Para o curso e dia a dia
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Use <strong>GLM 4.6</strong> como default no Vibe Coding: barato ($3/mês), rápido, estável e 100% integrado ao ambiente do curso. Perfeito para desenvolvimento contínuo.
    </p>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-amber-500 mb-2 flex items-center gap-2">
      <span class="text-lg">🤖</span> Para agentes avançados
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Considere <strong>MiniMax M2</strong> em projetos com agentes complexos, múltiplos passos e exploração intensa. Ideal para R&D e automações sofisticadas.
    </p>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="text-lg">⚖️</span> Estratégia híbrida
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Use GLM 4.6 para rotinas e M2 apenas onde raciocínio intercalado traz ganho real. Máximo impacto com custo controlado e flexibilidade operacional.
    </p>
  </div>
</div>`,
  },
  {
    id: "aula3-slide3",
    order: 3,
    title: "APIs e UIs Web dos Principais Modelos",
    type: "text",
    content:
      "## OpenAI (GPT-5 e Codex GPT-5)\n\n### Plataformas Web\n- **ChatGPT-5:** chat.openai.com com interface conversacional avançada\n- **Playground:** playground.openai.com para testes e experimentação\n- **API Platform:** platform.openai.com para desenvolvedores\n\n### Características das APIs\n- **Endpoints:** Completions, Chat, Embeddings, Fine-tuning\n- **Rate Limits:** Diferentes por tier (Free, Plus, Pro, Enterprise)\n- **Modos de Raciocínio:** Low (Auto), Medium (Fast), High (Thinking)\n- **Streaming:** Respostas em tempo real para longas gerações\n\n## Anthropic (Claude Sonnet 4.5 e Opus 4.1)\n\n### Plataformas Web\n- **Claude.ai:** claude.ai com interface conversacional\n- **API Console:** console.anthropic.com para desenvolvedores\n\n### Características das APIs\n- **Endpoints:** Messages, Completions, Embeddings\n- **Tool Use:** Nativo com chamada de funções\n- **Vision:** Processamento de imagens e documentos\n- **Rate Limits:** Controlados por uso e tipo de plano\n\n## Comparativo de Interfaces\n\n| Plataforma | Interface Principal | Foco | Vantagens |\n|-----------|------------------|------|-----------|\n| **OpenAI** | ChatGPT-5 | Generalista | Ecossistema maduro |\n| **Anthropic** | Claude.ai | Raciocínio | Tool use avançado |\n| **Google** | Gemini Advanced | Multimodal | Integração Google |\n| **Zhipu AI** | GLM Chat | Coding | Custo-benefício |\n| **Moonshot** | Kimi Chat | Coding | Alternativa econômica |",
  },
  {
    id: "aula3-slide4",
    order: 4,
    title: "Critérios de Escolha de Modelo",
    type: "text",
    content:
      "## Para Desenvolvimento Individual\n- **Custo-benefício:** GLM 4.6 (melhor relação), Kimi K2 (alternativa econômica)\n- **Qualidade:** Claude Sonnet 4.5 (tarefas complexas), GPT-5 (generalista)\n- **Multimodalidade:** Gemini 2.5 Pro (integração Google)\n- **Janela de Contexto:** GLM 4.6 (200K), Gemini 2.5 (1M)\n\n### Para Empresas e Startups\n- **Volume:** MiniMax M2 (alto volume com pensamento intercalado), GLM 4.6 (balance geral)\n- **Segurança:** Claude Opus 4.1 (máxima qualidade), GPT-5 (ecossistema maduro)\n- **Integração:** Gemini 2.5 Pro (Google Workspace), Vertex AI (Google Cloud)\n- **Controle Total:** GLM 4.6 (open source), APIs self-hosted\n\n## Framework de Decisão\n\n### Matriz de Decisão\n| Requisito | Modelo Recomendado | Justificativa | Preço Atualizado |\n|------------|------------------|-------------|----------------|\n| **Custo-benefício** | GLM 4.6 | Melhor relação custo-performance | Input: $0.60/M, Output: $2.20/M |\n| **Qualidade máxima** | Claude Opus 4.1 | Padrão ouro em tarefas críticas | Input: $15/M, Output: $75/M |\n| **Multimodalidade** | Gemini 2.5 Pro | Melhor integração com ecossistema Google | Input: $1.25-2.50/M, Output: $10/M |\n| **Alto volume** | MiniMax M2 | Pensamento intercalado para uso intensivo | Não divulgado |\n| **Coding geral** | GPT-5 | Ecossistema mais maduro e documentado | Input: $1.25-2.50/M, Output: $10-15/M |",
  },
  {
    id: "aula3-slide5",
    order: 5,
    title: "Planos e Preços dos Modelos",
    type: "text",
    content:
      "## OpenAI (GPT-5 e Codex GPT-5)\n\n### Planos Disponíveis\n- **ChatGPT-5 Pro:** $20/mês para acesso prioritário\n- **ChatGPT-5 Mini/Nano:** Planos econômicos para alto volume\n- **API Pay-as-you-go:** $1.25-2.50/M input, $10-15/M output\n- **Modos de Raciocínio:** Low (Auto), Medium (Fast), High (Thinking)\n\n### Vantagens\n- **Ecossistema maduro** com integrações completas\n- **Suporte multimodal** avançado\n- **Comunidade ativa** e documentação extensa\n\n## Anthropic (Claude Sonnet 4.5 e Opus 4.1)\n\n### Planos Disponíveis\n- **Claude Pro/Max/Team:** Planos empresariais disponíveis\n- **Claude Sonnet 4.5:** $3.00/M input, $15.00/M output\n- **Claude Opus 4.1:** $15.00/M input, $75.00/M output\n- **Contexto:** 200K tokens input, 32K output\n\n### Vantagens\n- **Melhor em raciocínio complexo**\n- **Tool orchestration** avançada\n- **Segurança e alinhamento** robustos\n\n## Zhipu AI (GLM 4.6)\n\n### Planos Disponíveis\n- **Input:** $0.60/M tokens\n- **Cached Input:** $0.11/M tokens (limitado)\n- **Output:** $2.20/M tokens\n- **Web Search:** $0.01/uso\n- **Slide/Poster Agent:** $0.70/M tokens\n- **Tradução:** $3/M tokens\n- **CogView-4:** $0.01/imagem\n- **Vídeo:** $0.20-0.40/unidade\n- **Assinatura coding:** A partir de $3/mês\n- **Open Source:** Disponível para deploy local (MIT license)\n- **Contexto:** 200K input, 128K output\n\n### Vantagens\n- **Melhor custo-benefício** do mercado\n- **Suporte multilíngue** nativo\n- **Open source** para controle total",
  },
  {
    id: "aula3-slide6",
    order: 6,
    title: "Demonstração de Interfaces Web",
    type: "text",
    content:
      "## Tour Guiado das Principais Plataformas\n\n### OpenAI ChatGPT-5\n- **Acesso:** chat.openai.com\n- **Demonstração:** Interface conversacional com modos de raciocínio\n- **Recursos:** Histórico de conversas, custom GPTs, file upload\n\n### Anthropic Claude.ai\n- **Acesso:** claude.ai\n- **Demonstração:** Interface com artifacts e tool use\n- **Recursos:** Projects, compartilhamento de conversas, análise de documentos\n\n### Google Gemini Advanced\n- **Acesso:** gemini.google.com/advanced\n- **Demonstração:** Interface multimodal com integração Google\n- **Recursos:** Extensões, integração com Workspace, side-by-side\n\n### Zhipu AI GLM Chat\n- **Acesso:** chatglm.cn/main\n- **Demonstração:** Interface otimizada para chinês/inglês\n- **Recursos:** Contexto amplo, tool calling, streaming\n\n### Moonshot Kimi Chat\n- **Acesso:** kimi.moonshot.cn/chat\n- **Demonstração:** Interface com agentic capabilities\n- **Recursos:** Long context, web search integrada, file analysis\n\n## Análise Comparativa\n\n### Experiência do Usuário\n- **OpenAI:** Interface polida mas mais corporativa\n- **Anthropic:** Foco em produtividade com artifacts\n- **Google:** Integração profunda com ecossistema Google\n- **Zhipu AI:** Interface simples mas funcional\n- **Moonshot:** Inovações em agentic capabilities",
  },
  {
    id: "aula3-slide7",
    order: 7,
    title: "Configuração e Setup com GLM 4.6",
    type: "code",
    content:
      '## Instalação de Ferramentas\n\n### Kilo Code\n```bash\nnpm install -g @kilocode/kilo-code\n```\n\n### Configuração de API\n```bash\nexport GLM_API_KEY="sua-chave-aqui"\nexport GLM_BASE_URL="https://api.zhipuai.ai/v1"\n```\n\n### VS Code Extensions\n- **GLM 4.6 Extension:** Busque na marketplace\n- **Claude Code Extension 2.0:** Instale para integração completa\n\n## Validação de Conectividade\n```javascript\n// Teste básico com Kilo Code\nconst response = await kiloCode.ask("Olá GLM 4.6!");\nconsole.log(response);\n```',
  },
  {
    id: "aula3-slide8",
    order: 8,
    title: "Workflows de Desenvolvimento Eficientes",
    type: "text",
    content:
      "## Ciclo de Desenvolvimento\n\n### Prompt → Resposta → Refinamento → Iteração\n1. **Prompt inicial** claro e específico\n2. **Análise da resposta** gerada pelo modelo\n3. **Refinamento** com base nos resultados\n4. **Iteração** até atingir o objetivo desejado\n\n## Templates Reutilizáveis\n\n### Template para Componentes React\n```\nVocê é um especialista em React e TypeScript. Crie um componente [NOME] com:\n- [REQUISITO 1]\n- [REQUISITO 2]\n- [REQUISITO 3]\n\nUse TypeScript estrito e Tailwind CSS para estilização.\n```\n\n### Template para Refatoração\n```\nAnalise o seguinte código e identifique oportunidades de melhoria:\n\n[CÓDIGO AQUI]\n\nFoco em:\n1. Performance\n2. Legibilidade\n3. Manutenibilidade\n4. Segurança\n\nSugira refatorações específicas com justificativas.\n```",
  },
  {
    id: "aula3-slide9",
    order: 9,
    title: "Técnicas de Prompt Engineering para GLM 4.6",
    type: "code",
    content:
      '## Few-shot Learning\n\n### Exemplo para GLM 4.6\n```\nCrie uma função de validação de email seguindo estes exemplos:\n\nExemplo 1:\nEntrada: "test@example.com"\nSaída: Válido\n\nExemplo 2:\nEntrada: "invalid-email"\nSaída: Inválido - formato incorreto\n\nExemplo 3:\nEntrada: "user@domain.co.uk"\nSaída: Válido\n\nAgora valide este email: "novo@exemplo.com"\n```\n\n## Chain-of-Thought\n\n### Decomposição de Problemas Complexos\n```\nPara resolver este problema de programação, siga estes passos:\n\n1. Analise os requisitos e identifique as entidades principais\n2. Projete a arquitetura da solução\n3. Implemente o código componente por componente\n4. Integre os componentes e teste a solução completa\n5. Otimize para performance e legibilidade\n\nProblema: [DESCRIÇÃO DO PROBLEMA]\n```\n\n## Role-playing\n\n### Personas Especializadas\n```\nVocê é um especialista em [ÁREA] com 10 anos de experiência.\n\nPara esta tarefa, adote a persona de [PERSONA ESPECÍFICA]:\n- Foco em [ASPECTO 1]\n- Considerações sobre [ASPECTO 2]\n- Abordagem [METODOLOGIA]\n\nAnalise este [PROBLEMA] e forneça uma solução especializada.\n```',
  },
  {
    id: "aula3-slide10",
    order: 10,
    title: "Otimização de Contexto com GLM 4.6",
    type: "code",
    content:
      '## Maximizando a Janela de Contexto\n\n### Estratégias de Compressão\n- **Resumo inteligente:** Extraia pontos-chave do contexto\n- **Hierarquização:** Organize informações por importância\n- **Eliminação de redundância:** Remova dados duplicados ou irrelevantes\n\n### Técnicas de Persistência\n- **Contexto contínuo:** Mantenha histórico relevante\n- **Seleção dinâmica:** Escolha informações baseadas na tarefa atual\n- **Atualização incremental:** Adicione novos dados sem perder contexto anterior\n\n## Exemplo Prático\n```\nContexto do projeto:\n- Framework: React + TypeScript\n- Estilo: Tailwind CSS\n- Estado: React Context\n- Autenticação: Supabase Auth\n\nTarefa atual: Implementar formulário de contato\n\nContexto otimizado para GLM 4.6:\n"Projeto React + TypeScript + Tailwind + Supabase. Implemente formulário de contato com validação, usando hooks do React Context para estado e Supabase para autenticação. Siga os padrões de código estabelecidos no projeto."\n```',
  },
  {
    id: "aula3-slide11",
    order: 11,
    title: "Projeto Prático: Sistema de Benchmarking",
    type: "text",
    content:
      "## Objetivo do Projeto\n\nDesenvolver um sistema completo de benchmarking comparativo entre os principais modelos LLM (GLM 4.6, Claude Sonnet 4.5, Gemini 2.5 Pro, Kimi K2) com:\n- Interface web para testes\n- Análise de performance em tempo real\n- Geração de relatórios comparativos\n- Visualização de resultados\n\n## Arquitetura do Projeto\n\n### Frontend\n- **Framework:** React + TypeScript\n- **Estilo:** Tailwind CSS\n- **Estado:** React Context\n- **Componentes:** Dashboard, TestRunner, Relatórios\n\n### Backend\n- **APIs:** Integração com múltiplos provedores\n- **Armazenamento:** Resultados e métricas\n- **Autenticação:** Sistema de usuários\n\n### Funcionalidades\n\n#### Test Runner\n- **Interface para prompts:** Área de texto para entrada\n- **Seleção de modelos:** Escolha entre GLM 4.6, Claude, Gemini\n- **Execução simultânea:** Compare múltiplos modelos ao mesmo tempo\n- **Coleta de métricas:** Latência, qualidade, custo, tokens\n\n#### Dashboard de Resultados\n- **Tabelas comparativas:** Performance por modelo\n- **Gráficos visuais:** Latência, custo, qualidade\n- **Filtros e busca:** Por tipo de tarefa, modelo, data\n\n## Entregáveis do Projeto\n\n### Código Fonte\n- Implementação completa e bem estruturada\n- **Documentação:** Guia de instalação e uso\n- **Testes:** Suite validando funcionalidades\n- **Deploy:** Aplicação funcional em ambiente de produção\n\n### Relatório de Benchmarking\n- **Análise comparativa:** Desempenho e custos\n- **Recomendações:** Guia de escolha de modelo por caso de uso\n- **Apresentação:** Slides explicando arquitetura e resultados",
  },
  {
    id: "aula3-slide12",
    order: 12,
    title: "Conclusão e Próximos Passos",
    type: "text",
    content:
      "## Resumo da Aula\n\n- **GLM 4.6:** Modelo principal para Vibe Coding\n- **Vantagens competitivas:** Custo-benefício, contexto amplo\n- **Ecossistema maduro:** Ferramentas e integrações completas\n- **Foco prático:** Configuração e uso efetivo\n\n## Próximos Passos\n\n### Aula 04: Ambientes e Ferramentas\n- **TRAE Solo:** IDE principal com suporte GLM 4.6\n- **CLIs:** Kilo Code, Claude Code, Gemini CLI\n- **Workflows:** Integração entre ferramentas\n\n### Projeto Dirigido (Aulas 06-07)\n- **Aplicação prática:** Usar GLM 4.6 em projeto real\n- **Integração com Supabase:** Backend e autenticação\n- **Deploy:** Publicação em produção\n\n## Recursos Adicionais\n\n- **Documentação oficial:** GLM 4.6 specs e guias\n- **Comunidade:** Fóruns e grupos de discussão\n- **Projetos exemplo:** Repositórios com implementações referencia\n- **Suporte:** Canais de ajuda e suporte técnico",
  },
];

export const mockSlidesAula4: Slide[] = [
  {
    id: "aula4-slide1",
    order: 1,
    title: "Ambientes de Desenvolvimento para Vibe Coding",
    type: "text",
    content:
      "# Ambientes de Desenvolvimento para Vibe Coding\n\n## Visão Geral dos Ambientes\n\n### IDE Principal: TRAE Solo\n- **Foco:** Desenvolvimento integrado com GLM 4.6\n- **Vantagens:** Context awareness, debugging integrado\n- **Workflow:** Prompt → Código → Teste → Deploy\n\n### Terminal Avançado: Warp\n- **Foco:** Tarefas pesadas e colaboração\n- **Vantagens:** Agent profiles, prompt-to-production\n- **Workflow:** Comando → Execução → Otimização\n\n### CLIs Especializadas\n- **Claude Code:** Conversas persistentes e inline diffs\n- **Kilo Code:** Modos especializados por tarefa\n- **GLM 4.6:** Integração nativa e otimizações\n\n## Casos de Uso por Ferramenta\n\n| Ferramenta | Melhor Uso | Limitações | Tempo de Setup |\n|------------|------------|------------|----------------|\n| **TRAE Solo** | Desenvolvimento diário | Curva de aprendizado | 15 min |\n| **Warp** | Tarefas batch, colaborações | Interface não visual | 10 min |\n| **Claude Code** | Análise de código complexa | Requer VS Code | 5 min |\n| **Kilo Code** | Automação de workflows | Configuração inicial | 10 min |",
  },
  {
    id: "aula4-slide2",
    order: 2,
    title: "TRAE Solo - Setup e Configuração",
    type: "text",
    content:
      '# TRAE Solo - Setup e Configuração\n\n## Instalação Guiada\n\n### Download e Setup Inicial\n```bash\n# Download do installer oficial\ncurl -L https://github.com/trae/solo/releases/latest/download/installer.sh | bash\n\n# Verificação da instalação\ntraE --version\n# Deve retornar: v1.5.0 ou superior\n```\n\n### Configuração de Workspace\n- **Localização:** ~/taree-projects/\n- **Estrutura:** Organized por tecnologia (react, node, python)\n- **Templates:** Base para projetos Vibe Coding\n\n### Integração com GLM 4.6\n```json\n{\n  "glM": {\n    "apiKey": "GLM_API_KEY",\n    "baseURL": "https://api.zhipuai.ai/v1",\n    "defaultModel": "glm-4-plus",\n    "contextWindow": 200000\n  },\n  "extensions": [\n    "glM-4-6-extension",\n    "claude-code-integration",\n    "vibe-coding-toolkit"\n  ]\n}\n```\n\n### Extensões Essenciais\n- **GLM 4.6 Extension:** Autocomplete context-aware\n- **Claude Code Integration:** Conversas persistentes\n- **Vibe Coding Toolkit:** Templates e workflows\n- **Performance Monitor:** Métricas em tempo real',
  },
  {
    id: "aula4-slide3",
    order: 3,
    title: "TRAE Solo - Recursos e Workflows",
    type: "text",
    content:
      "# TRAE Solo - Recursos e Workflows\n\n## Workspace Management\n\n### Organização de Projetos\n- **Context Files:** AGENTS.md, docs/, prompts/\n- **Templates:** Reutilização de configurações\n- **Collaboration:** Team workspaces compartilhados\n\n### Contexto Persistente\n```\n/projeto-vibe-coding/\n├── AGENTS.md              # Contexto do projeto\n├── docs/\n│   ├── arquitetura.md     # Documentação técnica\n│   └── api-reference.md   # Referência de APIs\n├── prompts/              # Templates de prompts\n│   ├── component-react.md\n│   ├── refactor-python.md\n│   └── test-generation.md\n└── context/\n    └── requirements.txt   # Dependências e setup\n```\n\n## GLM 4.6 Integration\n\n### Context Awareness\n- **Automatic Context:** TRAE Solo lê arquivos abertos\n- **Selective Context:** IA escolhe informações relevantes\n- **Persistent Context:** Mantém histórico entre sessões\n\n### Performance Profiling\n- **Latência em tempo real:** Medição durante desenvolvimento\n- **Token consumption:** Cálculo de custos por operação\n- **Quality metrics:** Avaliação da qualidade das respostas\n\n### Debugging Integrado\n- **Error tracking:** Captura de erros automaticamente\n- **Suggestion engine:** Correções baseadas no contexto\n- **Code analysis:** Identificação de problemas de performance\n\n## Team Collaboration\n\n### Context Sharing\n- **Shared AGENTS.md:** Contexto colaborativo\n- **Prompt templates:** Biblioteca compartilhada\n- **Performance metrics:** Métricas de equipe\n\n### Real-time Features\n- **Live collaboration:** Edição simultânea\n- **Chat integration:** Comunicação dentro do IDE\n- **Version control:** Git integrado com context",
  },
  {
    id: "aula4-slide4",
    order: 4,
    title: "Warp - Terminal Avançado para Vibe Coding",
    type: "text",
    content:
      '# Warp - Terminal Avançado para Vibe Coding\n\n## Características Distintivas\n\n### Agent Profiles\n- **GLM 4.6 Profile:** Configuração otimizada para coding\n- **Claude Profile:** Para análise complexa de código\n- **Custom Profiles:** Configurações por projeto\n\n### Prompt-to-Production\n```bash\n# Exemplo de uso direto\nwarp prompt "Crie uma função de validação de email em TypeScript" \\\n    --model glm-4.6 \\\n    --output validate-email.ts \\\n    --tests\n\n# Resultado: Função + testes + documentação\n```\n\n### Context Persistence\n- **Cross-session:** Contexto mantido entre sessões\n- **Project awareness:** Reconhecimento automático do projeto\n- **Learning:** IA aprende preferências do usuário\n\n## Casos de Uso Específicos\n\n### Tarefas Pesadas\n- **Codebase analysis:** Análise de grandes bases de código\n- **Batch processing:** Múltiplos arquivos simultaneamente\n- **Migration scripts:** Geração de scripts de migração\n\n### Collaboration\n- **Pair programming:** Sessões colaborativas em tempo real\n- **Code review:** Análise automatizada de PRs\n- **Knowledge sharing:** Compartilhamento de soluções\n\n### Automation\n- **API integration:** Scripts para APIs externas\n- **Deployment workflows:** Automação de deploy\n- **Testing pipelines:** Execução de testes automatizados\n\n## Configuração Inicial\n\n```bash\n# Instalação via Homebrew\nbrew install warp\n\n# Configuração de profiles\nwarp profile create glm-coding --model glm-4.6\nwarp profile set-default glm-coding\n\n# Setup de contexto\nwarp context set ~/projeto-trae\nwarp context auto-detect\n```',
  },
  {
    id: "aula4-slide5",
    order: 5,
    title: "Claude Code 2.0 - CLI e Extension",
    type: "text",
    content:
      '# Claude Code 2.0 - CLI e Extension\n\n## Instalação e Setup\n\n### CLI Installation\n```bash\n# Via npm\nnpm install -g @anthropic/claude-code\n\n# Via pip\npip install claude-code\n\n# Verificação\nclaude --version\n```\n\n### VS Code Extension\n- **Download:** Marketplace da VS Code\n- **Activation:** Automática ao abrir projeto\n- **Configuration:** Settings sincronizados\n\n## Integração com GLM 4.6\n\n### Configuração Dual Model\n```json\n{\n  "claudeCode": {\n    "primaryModel": "claude-3-sonnet-20240229",\n    "secondaryModel": "glm-4-plus",\n    "autoSwitch": true,\n    "switchCriteria": {\n      "costThreshold": 0.50,\n      "qualityThreshold": 0.8\n    }\n  }\n}\n```\n\n### Feature Comparison\n\n| Feature | Claude | GLM 4.6 | Recomendação |\n|---------|--------|---------|--------------|\n| **Code Analysis** | Excelente | Bom | Claude |\n| **Cost Efficiency** | Alto | Baixo | GLM 4.6 |\n| **Context Window** | 200K | 200K | Empate |\n| **Speed** | Médio | Rápido | GLM 4.6 |\n| **Creative Tasks** | Superior | Bom | Claude |\n\n## Fluxos de Trabalho\n\n### Geração de Código\n```bash\n# Geração simples\nclaude "Crie um componente React para formulário de login"\n\n# Com contexto\nclaude --context ./AGENTS.md \\\n       --model glm-4.6 \\\n       "Implemente autenticação seguindo o padrão do projeto"\n\n# Com arquivo específico\nclaude --file auth.ts \\\n       "Refatore esta função para usar async/await"\n```\n\n### Edição e Refatoração\n- **Inline editing:** Modificações diretas no código\n- **Diff preview:** Visualização antes da aplicação\n- **Undo/redo:** Controle de versões local\n\n### Conversas Persistentes\n- **Session memory:** Contexto mantido durante a sessão\n- **File awareness:** Reconhecimento automático de arquivos\n- **Selection context:** IA usa código selecionado',
  },
  {
    id: "aula4-slide6",
    order: 6,
    title: "Kilo Code - Modos para Diferentes Tarefas",
    type: "text",
    content:
      '# Kilo Code - Modos para Diferentes Tarefas\n\n## Visão Geral dos Modos\n\n### Modos Disponíveis\n\n| Modo | Foco Principal | Melhor Uso | Modelo Recomendado |\n|------|----------------|------------|-------------------|\n| **Orchestrator** | Coordenação de projetos | Complex tasks, planning | GLM 4.6 |\n| **Architect** | Design e arquitetura | System design, patterns | Claude |\n| **Code** | Desenvolvimento direto | CRUD, APIs, components | GLM 4.6 |\n| **Ask** | Questionamento | Debugging, research | Claude |\n| **Debug** | Correção de erros | Bug fixing, testing | GLM 4.6 |\n\n## Configuração e Switching\n\n### Setup Inicial\n```bash\n# Instalação\nnpm install -g @kilocode/kilo-code\n\n# Configuração de modelos\nkilo config models add glm-4.6 \\\n    --api-key $GLM_API_KEY \\\n    --base-url https://api.zhipuai.ai/v1\n\nkilo config models add claude \\\n    --api-key $ANTHROPIC_API_KEY\n\n# Configuração de preferências\nkilo config preferences set \\\n    --default-model glm-4.6 \\\n    --auto-switch true\n```\n\n### Switching Entre Modos\n\n```bash\n# Switch manual\nkilo mode architect\nkilo mode code\n\n# Switch automático baseado na tarefa\nkilo auto-detect --task "create-react-component"\n# Resultado: Automaticamente alterna para modo Code\n\n# Visual feedback\nkilo status\n# Output: Current Mode: Code | Model: GLM 4.6 | Credits: 245\n```\n\n## Casos de Uso por Modo\n\n### Orchestrator Mode\n```bash\n# Coordenação de projeto complexo\nkilo orchestrator "Analise este PRD e crie épicos de desenvolvimento"\n\n# Saída esperada:\n# - Épico 1: Autenticação e User Management\n# - Épico 2: Core Business Logic\n# - Épico 3: UI/UX Implementation\n# - Épico 4: Testing e Deployment\n```\n\n### Architect Mode\n```bash\n# Design de sistema\nkilo architect "Projete arquitetura para app de e-commerce com microservices"\n\n# Resultado:\n# - Diagrama de componentes\n# - Stack tecnológico\n# - Database design\n# - API specifications\n```\n\n### Code Mode\n```bash\n# Desenvolvimento direto\nkilo code "Crie uma API REST para CRUD de usuários em Node.js"\n```\n\n### Ask Mode\n```bash\n# Questionamento e debugging\nkilo ask "Por que esta query SQL está demorando 30 segundos?"\n```\n\n### Debug Mode\n```bash\n# Correção de erros\nkilo debug --error-file stack-trace.txt \\\n          --code-base ./src/\n```',
  },
  {
    id: "aula4-slide7",
    order: 7,
    title: "Integração com VS Code e Zed",
    type: "text",
    content:
      '# Integração com VS Code e Zed\n\n## VS Code Integration\n\n### Extensions Essenciais\n- **GLM 4.6 Extension:** Autocomplete nativo\n- **Claude Code 2.0:** Integração completa\n- **Kilo Code Helper:** Quick commands\n- **Context Manager:** Compartilhamento de contexto\n\n### Configuração Otimizada\n\n```json\n{\n  "editor.formatOnSave": true,\n  "editor.codeActionsOnSave": {\n    "source.fixAll.eslint": true\n  },\n  "glm.apiKey": "${env:GLM_API_KEY}",\n  "claude.apiKey": "${env:ANTHROPIC_API_KEY}",\n  "kiloCode.autoSuggest": true,\n  "extensions.recommendations": [\n    "glM-4-6-vscode",\n    "anthropic.claude-code",\n    "kilocode.helper"\n  ]\n}\n```\n\n### Workflows Integrados\n\n| Ação | VS Code Command | Descrição |\n|------|-----------------|-----------|\n| **Generate Code** | `Ctrl+Shift+G` | Gera código com GLM 4.6 |\n| **Explain Code** | `Ctrl+Shift+E` | Explica código selecionado |\n| **Refactor** | `Ctrl+Shift+R` | Refatora com sugestões |\n| **Debug** | `Ctrl+Shift+D` | Análise de erros |\n| **Switch Model** | `Ctrl+Shift+M` | Alterna entre modelos |\n\n## Zed Editor Integration\n\n### Agent Protocol Support\n- **Multiple agents:** Suporte a múltiplos agentes simultâneos\n- **Real-time collaboration:** Edição colaborativa em tempo real\n- **Performance optimized:** Para recursos limitados\n\n### GLM 4.6 Native Support\n```toml\n# .zed/settings.toml\n[lsp]\nglM = {\n  command = "glm-lsp",\n  args = ["--api-key", env.GLM_API_KEY]\n}\n\n[extensions]\nglM-coding = true\nagent-protocol = true\n```\n\n### Context Management\n\n| Feature | VS Code | Zed | Recomendação |\n|---------|---------|-----|--------------|\n| **Context Awareness** | Bom | Excelente | Zed |\n| **Performance** | Médio | Alto | Zed |\n| **Extensions** | Muito bom | Limitado | VS Code |\n| **Collaboration** | Bom | Excelente | Zed |\n| **AI Integration** | Excelente | Bom | VS Code |',
  },
  {
    id: "aula4-slide8",
    order: 8,
    title: "Micro-benchmarks - Metodologia e Métricas",
    type: "text",
    content:
      "# Micro-benchmarks - Metodologia e Métricas\n\n## Objetivo dos Benchmarks\n\n### Comparação Sistemática\n- **Ferramentas:** TRAE Solo vs Warp vs CLIs\n- **Modelos:** GLM 4.6 vs Claude vs outros\n- **Tarefas:** Geração, análise, refatoração, debugging\n\n### Métricas Avaliadas\n\n| Métrica | Quantidade | Qualidade | Unidade |\n|---------|------------|-----------|---------|\n| **Latência** | ✓ | - | Segundos |\n| **Custo** | ✓ | - | R$ por 1K tokens |\n| **Qualidade** | - | ✓ | Rubrica 0-2 |\n| **Completude** | - | ✓ | Percentual |\n| **Tokens** | ✓ | - | Input/Output |\n\n## Metodologia de Teste\n\n### Protocolo Padronizado\n1. **Warm-up:** 2 prompts para estabilizar modelo\n2. **Execução:** 3 rounds do mesmo prompt\n3. **Medição:** Latência, tokens, custo\n4. **Avaliação:** Qualidade por rubrica\n5. **Documentação:** Resultados em tabela\n\n### Ambiente Controlado\n- **Hardware:** Mesmo computador, specifications fixas\n- **Conexão:** Internet estável, ping < 50ms para APIs\n- **Configurações:** Settings padronizados por ferramenta\n- **Timing:** Horários similares para evitar rate limits\n\n### Suite de Prompts (5 Casos)\n1. **Test Generation:** Geração de testes unitários\n2. **Bug Analysis:** Análise de stack trace\n3. **Component Creation:** Criação de componente React\n4. **SQL Generation:** Consulta SQL segura\n5. **Code Refactoring:** Refatoração de função\n\n## Critérios de Qualidade\n\n### Rubrica 0-2\n- **0 (Ruim):** Incompleto, incorreto ou inadequado\n- **1 (OK):** Funcional mas com falhas menores\n- **2 (Excelente):** Completo, correto e otimizado\n\n### Completude\n- **Requisitos:** Todos os requisitos atendidos\n- **Edge Cases:** Consideração de casos limites\n- **Documentação:** Comentários e documentação adequados",
  },
  {
    id: "aula4-slide9",
    order: 9,
    title: "Benchmark 1 - Geração de Testes Unitários",
    type: "text",
    content:
      "# Benchmark 1 - Geração de Testes Unitários\n\n## Prompt Padronizado\n\n```text\nGere 3 casos de teste unitários para esta função TypeScript:\n\nfunction calculateDiscount(price: number, discount: number): number {\n  if (price <= 0 || discount < 0 || discount > 100) {\n    throw new Error('Invalid parameters');\n  }\n  return price * (1 - discount / 100);\n}\n\nInclua:\n- Teste de sucesso com valores válidos\n- Teste de erro com preço negativo\n- Teste de erro com desconto acima de 100%\n- Nome descritivo para cada teste\n- Uso de Jest framework\n```\n\n## Critérios de Avaliação\n\n### Critérios Técnicos\n- **Estrutura Jest:** Configuração correta de testes\n- **Nomeação:** Nomes descritivos e claros\n- **Edge Cases:** Cobertura de casos limites\n- **TypeScript:** Tipagem correta\n\n### Métricas Esperadas\n\n| Ferramenta | Latência (s) | Qualidade (0-2) | Custo (R$) | Tokens |\n|------------|--------------|-----------------|------------|--------|\n| **TRAE Solo** | 2.5 | 2 | 0.15 | 1.2K |\n| **Warp** | 3.0 | 2 | 0.18 | 1.3K |\n| **Claude Code** | 4.0 | 2 | 0.25 | 1.8K |\n| **Kilo Code** | 2.8 | 2 | 0.16 | 1.4K |\n\n### Resultados Esperados\n\n```typescript\ndescribe('calculateDiscount', () => {\n  test('deve calcular desconto corretamente com valores válidos', () => {\n    expect(calculateDiscount(100, 20)).toBe(80);\n  });\n  \n  test('deve lançar erro para preço negativo', () => {\n    expect(() => calculateDiscount(-50, 10)).toThrow('Invalid parameters');\n  });\n  \n  test('deve lançar erro para desconto acima de 100%', () => {\n    expect(() => calculateDiscount(100, 150)).toThrow('Invalid parameters');\n  });\n});\n```\n\n### Análise de Qualidade\n- **Estrutura:** Todos os testes bem organizados\n- **Nomenclatura:** Nomes em português descritivos\n- **Completude:** Todos os casos limite cobertos\n- **Funcionalidade:** Testes executam sem erros",
  },
  {
    id: "aula4-slide10",
    order: 10,
    title: "Benchmark 2 - Análise de Stack Trace",
    type: "text",
    content:
      "# Benchmark 2 - Análise de Stack Trace\n\n## Prompt Padronizado\n\n```text\nAnalise este stack trace e proponha uma correção incremental:\n\nTypeError: Cannot read properties of undefined (reading 'map')\n  at processUserData (app.js:45:15)\n  at handleRequest (app.js:23:8)\n  at Array.reduce (anonymous)\n\nCódigo relevante:\napp.js:40-50\n40: function processUserData(data) {\n41:   return data.users.map(user => {\n42:     return user.name.toUpperCase();\n43:   });\n44: }\n\nForneça:\n1. Identificação da causa raiz\n2. Solução step-by-step\n3. Código corrigido\n4. Prevenção de problemas similares\n```\n\n## Critérios de Avaliação\n\n### Análise de Qualidade\n- **Root Cause:** Identificação correta do problema\n- **Solution Logic:** Solução lógica e incremental\n- **Code Quality:** Código limpo e seguro\n- **Prevention:** Sugestões para evitar recorrência\n\n### Métricas Esperadas\n\n| Ferramenta | Latência (s) | Qualidade (0-2) | Custo (R$) | Precisão |\n|------------|--------------|-----------------|------------|----------|\n| **TRAE Solo** | 3.5 | 2 | 0.20 | 95% |\n| **Warp** | 4.0 | 2 | 0.22 | 90% |\n| **Claude Code** | 5.0 | 2 | 0.30 | 98% |\n| **Kilo Code** | 3.8 | 2 | 0.21 | 93% |\n\n### Resultado Esperado\n\n```javascript\n// Análise da Causa Raiz\n// O erro ocorre porque 'data.users' é undefined\n// A função .map() é chamada em undefined\n\n// Solução Incremental\nfunction processUserData(data) {\n  // Validação defensiva\n  if (!data || !data.users || !Array.isArray(data.users)) {\n    console.warn('Dados inválidos para processUserData:', data);\n    return [];\n  }\n  \n  return data.users\n    .filter(user => user && user.name) // Filtrar usuários válidos\n    .map(user => user.name.toUpperCase());\n}\n\n// Prevenção\n// 1. Validação de entrada sempre\n// 2. Operador opcional (?.) para acesso seguro\n// 3. Type checking em tempo de desenvolvimento\n```\n\n### Análise de Diferenças\n- **TRAE Solo:** Context awareness identifica arquivos relacionados\n- **Claude Code:** Melhor análise de padrão de erros\n- **Warp:** Foco em automação de correção\n- **Kilo Code:** Modo Debug especializado",
  },
  {
    id: "aula4-slide11",
    order: 11,
    title: "Benchmark 3 - Componente React Acessível",
    type: "text",
    content:
      '# Benchmark 3 - Componente React Acessível\n\n## Prompt Padronizado\n\n```text\nEsboce um componente React acessível para formulário de contato com:\n\nRequisitos funcionais:\n- Campos: nome, email, mensagem\n- Validação em tempo real\n- Feedback visual de erros\n\nRequisitos técnicos:\n- TypeScript strict mode\n- ARIA labels e hints completos\n- Responsividade mobile-first\n- Hooks customizados para validação\n\nInclua:\n1. Estrutura JSX completa\n2. Interface TypeScript\n3. Hooks de validação\n4. Estilos responsivos\n5. Testes básicos\n```\n\n## Critérios de Avaliação\n\n### Acessibilidade (WCAG 2.1)\n- **Labels:** ARIA labels apropriados\n- **Hints:** Instruções claras\n- **Focus:** Gerenciamento de foco\n- **Keyboard:** Navegação por teclado\n- **Screen Readers:** Compatibilidade\n\n### Qualidade Técnica\n- **TypeScript:** Tipagem estrita e interfaces\n- **React:** Hooks, functional components\n- **Validation:** Lógica de validação robusta\n- **Responsiveness:** Mobile-first approach\n\n### Métricas Esperadas\n\n| Ferramenta | Latência (s) | Qualidade (0-2) | Custo (R$) | Acessibilidade |\n|------------|--------------|-----------------|------------|----------------|\n| **TRAE Solo** | 6.0 | 2 | 0.35 | 95% |\n| **Warp** | 7.0 | 2 | 0.38 | 90% |\n| **Claude Code** | 8.0 | 2 | 0.45 | 98% |\n| **Kilo Code** | 6.5 | 2 | 0.36 | 93% |\n\n### Resultado Esperado\n\n```typescript\n// Interface TypeScript\ninterface ContactFormData {\n  name: string;\n  email: string;\n  message: string;\n}\n\ninterface FormErrors {\n  name?: string;\n  email?: string;\n  message?: string;\n}\n\n// Hook de validação customizado\nfunction useContactValidation(data: ContactFormData): FormErrors {\n  const errors: FormErrors = {};\n  \n  if (!data.name.trim()) {\n    errors.name = \'Nome é obrigatório\';\n  }\n  \n  if (!data.email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {\n    errors.email = \'Email inválido\';\n  }\n  \n  if (data.message.length < 10) {\n    errors.message = \'Mensagem deve ter pelo menos 10 caracteres\';\n  }\n  \n  return errors;\n}\n\n// Componente principal\nconst ContactForm: React.FC = () => {\n  const [formData, setFormData] = useState<ContactFormData>({\n    name: \'\',\n    email: \'\',\n    message: \'\'\n  });\n  \n  const errors = useContactValidation(formData);\n  \n  return (\n    <form role="form" aria-labelledby="contact-title">\n      <h2 id="contact-title">Formulário de Contato</h2>\n      \n      <div>\n        <label htmlFor="name">\n          Nome <span aria-label="obrigatório">*</span>\n        </label>\n        <input\n          id="name"\n          type="text"\n          value={formData.name}\n          onChange={(e) => setFormData({...formData, name: e.target.value})}\n          aria-describedby={errors.name ? "name-error" : undefined}\n          aria-invalid={!!errors.name}\n          required\n        />\n        {errors.name && (\n          <div id="name-error" role="alert" aria-live="polite">\n            {errors.name}\n          </div>\n        )}\n      </div>\n      \n      {/* Campos similares para email e mensagem */}\n    </form>\n  );\n};\n```\n\n### Análise de Diferenças\n- **Claude Code:** Melhor em padrões de acessibilidade\n- **GLM 4.6:** Mais eficiente em geração de código boilerplate\n- **TRAE Solo:** Integração com testing framework',
  },
  {
    id: "aula4-slide12",
    order: 12,
    title: "Benchmark 4 - SQL Seguro com Paginação",
    type: "text",
    content:
      "# Benchmark 4 - SQL Seguro com Paginação\n\n## Prompt Padronizado\n\n```text\nEscreva uma consulta SQL segura para paginar usuários por data de criação:\n\nRequisitos:\n- Filtro: data entre parâmetros start_date e end_date\n- Ordenação: data decrescente\n- Paginação: 20 registros por página\n- Prevenção SQL injection obrigatória\n- Performance otimizada\n\nParâmetros:\n- start_date: '2024-01-01'\n- end_date: '2024-12-31'\n- page: 1\n\nInclua:\n1. Consulta SQL parametrizada\n2. Explicação de segurança\n3. Índices recomendados\n4. Alternativas (LIMIT vs cursor-based)\n```\n\n## Critérios de Avaliação\n\n### Segurança\n- **Parameterized Queries:** Prevenção de SQL injection\n- **Input Validation:** Sanitização de parâmetros\n- **Least Privilege:** Permissões mínimas necessárias\n\n### Performance\n- **Index Usage:** Otimização com índices\n- **Pagination Strategy:** Eficiência da paginação\n- **Query Plan:** Análise do plano de execução\n\n### Métricas Esperadas\n\n| Ferramenta | Latência (s) | Qualidade (0-2) | Custo (R$) | Segurança |\n|------------|--------------|-----------------|------------|-----------|\n| **TRAE Solo** | 4.0 | 2 | 0.25 | 98% |\n| **Warp** | 4.5 | 2 | 0.27 | 95% |\n| **Claude Code** | 5.5 | 2 | 0.35 | 100% |\n| **Kilo Code** | 4.2 | 2 | 0.26 | 97% |\n\n### Resultado Esperado\n\n```sql\n-- Consulta SQL Segura com Parametrização\nSELECT \n  id,\n  name,\n  email,\n  created_at,\n  updated_at\nFROM users\nWHERE created_at BETWEEN $1 AND $2\n  AND deleted_at IS NULL\nORDER BY created_at DESC\nLIMIT $3 OFFSET $4;\n\n-- Parâmetros (exemplo):\n-- $1 = '2024-01-01'\n-- $2 = '2024-12-31'\n-- $3 = 20  (limite por página)\n-- $4 = 0   (offset para página 1)\n\n-- Índices Recomendados\nCREATE INDEX idx_users_created_at \n  ON users(created_at) \n  WHERE deleted_at IS NULL;\n\nCREATE INDEX idx_users_created_at_email \n  ON users(created_at, email) \n  WHERE deleted_at IS NULL;\n\n-- Alternativa: Cursor-based Pagination\n-- Para datasets muito grandes\nSELECT id, name, email, created_at\nFROM users\nWHERE created_at BETWEEN $1 AND $2\n  AND deleted_at IS NULL\n  AND (created_at, id) < ($3, $4)\nORDER BY created_at DESC, id DESC\nLIMIT $5;\n```\n\n### Explicação de Segurança\n\n```text\nPrevenção de SQL Injection:\n\n1. Parametrização:\n   - NUNCA concatenar strings para SQL\n   - Usar placeholders ($1, $2, etc.)\n   - Bind parameters no driver de BD\n\n2. Validação de Entrada:\n   - Validar formato de datas\n   - Sanitizar inputs do usuário\n   - Tipagem forte em aplicação\n\n3. Permissões:\n   - Usuário com permissões mínimas\n   - Read-only quando possível\n   - Revisar privilégios regularmente\n\n4. Monitoramento:\n   - Log de queries suspeitas\n   - Alertas para patterns anômalos\n   - Auditoria de acesso\n```\n\n### Análise Comparativa\n- **Claude Code:** Melhor em explicações de segurança\n- **GLM 4.6:** Mais eficiente em otimização de queries\n- **TRAE Solo:** Melhores integrações com ORMs",
  },
  {
    id: "aula4-slide13",
    order: 13,
    title: "Benchmark 5 - Refatoração para Reduzir Complexidade",
    type: "text",
    content:
      "# Benchmark 5 - Refatoração para Reduzir Complexidade\n\n## Prompt Padronizado\n\n```text\nRefatore esta função para reduzir complexidade ciclomática mantendo comportamento:\n\nfunction processOrder(order) {\n  if (!order) return null;\n  \n  if (order.items) {\n    for (let item of order.items) {\n      if (item.price < 0) {\n        return { error: 'Invalid price' };\n      }\n    }\n  }\n  \n  if (order.customer) {\n    if (!order.customer.email) {\n      return { error: 'Email required' };\n    }\n  }\n  \n  if (order.shipping) {\n    if (!order.shipping.address) {\n      return { error: 'Address required' };\n    }\n  }\n  \n  return { success: true, order };\n}\n\nObjetivos:\n1. Reduzir complexidade ciclomática\n2. Melhorar legibilidade\n3. Preservar funcionalidade\n4. Adicionar validações robustas\n```\n\n## Critérios de Avaliação\n\n### Complexidade\n- **Ciclomática:** Redução significativa (target: < 10)\n- **Aninhamento:** Diminuir níveis de indentação\n- **Condições:** Simplificar lógica condicional\n\n### Qualidade do Código\n- **Legibilidade:** Código auto-documentado\n- **Manutenibilidade:** Fácil de entender e modificar\n- **Testabilidade:** Fácil de testar unitariamente\n\n### Métricas Esperadas\n\n| Ferramenta | Latência (s) | Qualidade (0-2) | Custo (R$) | Redução CC |\n|------------|--------------|-----------------|------------|------------|\n| **TRAE Solo** | 5.0 | 2 | 0.30 | 60% |\n| **Warp** | 5.5 | 2 | 0.32 | 55% |\n| **Claude Code** | 6.0 | 2 | 0.40 | 70% |\n| **Kilo Code** | 5.2 | 2 | 0.31 | 58% |\n\n### Resultado Esperado\n\n```typescript\n// Função original: Complexidade Ciclomática = 12\n// Função refatorada: Complexidade Ciclomática = 4\n\n// Interfaces para type safety\ninterface OrderItem {\n  price: number;\n  [key: string]: any;\n}\n\ninterface Customer {\n  email: string;\n  [key: string]: any;\n}\n\ninterface Shipping {\n  address: string;\n  [key: string]: any;\n}\n\ninterface Order {\n  items?: OrderItem[];\n  customer?: Customer;\n  shipping?: Shipping;\n}\n\n// Validadores especializados\nconst validateItem = (item: OrderItem): string | null => {\n  if (item.price < 0) {\n    return 'Invalid price';\n  }\n  return null;\n};\n\nconst validateCustomer = (customer: Customer): string | null => {\n  if (!customer.email) {\n    return 'Email required';\n  }\n  return null;\n};\n\nconst validateShipping = (shipping: Shipping): string | null => {\n  if (!shipping.address) {\n    return 'Address required';\n  }\n  return null;\n};\n\n// Validador principal\nconst validateOrder = (order: Order): string | null => {\n  if (!order) {\n    return 'Order is required';\n  }\n  \n  const validators = [\n    { data: order.items, validator: validateItem },\n    { data: order.customer, validator: validateCustomer },\n    { data: order.shipping, validator: validateShipping }\n  ];\n  \n  for (const { data, validator } of validators) {\n    if (data) {\n      if (Array.isArray(data)) {\n        for (const item of data) {\n          const error = validator(item);\n          if (error) return error;\n        }\n      } else {\n        const error = validator(data);\n        if (error) return error;\n      }\n    }\n  }\n  \n  return null;\n};\n\n// Função principal refatorada\nfunction processOrder(order: Order): { error?: string; success?: boolean; order?: Order } {\n  const validationError = validateOrder(order);\n  \n  if (validationError) {\n    return { error: validationError };\n  }\n  \n  return { success: true, order };\n}\n```\n\n### Análise das Melhorias\n\n```text\nMelhorias Implementadas:\n\n1. Redução de Complexidade:\n   - Original: CC = 12 (muito alta)\n   - Refatorada: CC = 4 (aceitável)\n   - Redução: 67%\n\n2. Estrutura Modular:\n   - Validadores separados por responsabilidade\n   - Função principal simplificada\n   - Reutilização de código\n\n3. TypeScript:\n   - Interfaces para type safety\n   - Benefícios de desenvolvimento\n   - Prevenção de erros em runtime\n\n4. Testabilidade:\n   - Funções pequenas e focadas\n   - Testes unitários mais simples\n   - Isolamento de responsabilidades\n```\n\n### Análise Comparativa das Ferramentas\n- **Claude Code:** Melhor em padrões de refatoração\n- **GLM 4.6:** Mais eficiente na implementação\n- **TRAE Solo:** Melhor integração com métricas",
  },
  {
    id: "aula4-slide14",
    order: 14,
    title: "Resultados dos Micro-benchmarks",
    type: "text",
    content:
      "# Resultados dos Micro-benchmarks\n\n## Tabela Comparativa Geral\n\n| Ferramenta | Latência Média | Custo Total (R$) | Qualidade Média | Recomendação |\n|------------|----------------|------------------|-----------------|--------------|\n| **TRAE Solo** | 4.3s | R$ 1.60 | 2.0/2 | Melhor Geral |\n| **Warp** | 4.8s | R$ 1.70 | 2.0/2 | Colaboração |\n| **Claude Code** | 5.7s | R$ 2.25 | 2.0/2 | Qualidade Máxima |\n| **Kilo Code** | 4.6s | R$ 1.65 | 2.0/2 | Automação |\n\n## Análise por Prompt\n\n### Prompt 1: Test Generation\n- **Melhor:** TRAE Solo (2.5s, R$ 0.15)\n- **Razão:** Integração nativa com testing frameworks\n- **Diferença:** Claude Code 60% mais caro\n\n### Prompt 2: Bug Analysis\n- **Melhor:** TRAE Solo (3.5s, 95% precisão)\n- **Razão:** Context awareness superior\n- **Diferença:** Claude Code mais preciso mas 40% mais lento\n\n### Prompt 3: React Component\n- **Melhor:** TRAE Solo (6.0s, 95% acessibilidade)\n- **Razão:** Melhores templates e extensões\n- **Diferença:** Claude Code melhor acessibilidade mas 33% mais caro\n\n### Prompt 4: SQL Generation\n- **Melhor:** TRAE Solo (4.0s, 98% segurança)\n- **Razão:** Integração com ORMs e databases\n- **Diferença:** Claude Code 100% segurança mas 38% mais caro\n\n### Prompt 5: Code Refactoring\n- **Melhor:** Claude Code (70% redução CC)\n- **Razão:** Padrões superiores de refatoração\n- **Diferença:** GLM 4.6 mais eficiente mas 13% menos redução\n\n## Trade-offs Identificados\n\n### Velocidade vs Qualidade\n- **GLM 4.6:** Mais rápido, qualidade consistentemente alta\n- **Claude:** Mais lento, qualidade superior em casos complexos\n\n### Custo vs Funcionalidade\n- **TRAE Solo:** Melhor custo-benefício geral\n- **Claude Code:** Custo premium justificado para tarefas críticas\n\n### Flexibilidade vs Especialização\n- **Kilo Code:** Modos especializados por tarefa\n- **TRAE Solo:** Flexibilidade com GLM 4.6\n\n## Recomendações de Uso\n\n### Desenvolvimento Diário\n- **Primary:** TRAE Solo + GLM 4.6\n- **Secondary:** Kilo Code para automação\n- **Justification:** Melhor balance velocidade/custo\n\n### Análise Complexa\n- **Primary:** Claude Code\n- **Secondary:** TRAE Solo como fallback\n- **Justification:** Qualidade superior em análises\n\n### Colaboração\n- **Primary:** Warp com team features\n- **Secondary:** TRAE Solo com shared contexts\n- **Justification:** Melhor para trabalho em equipe\n\n### Tarefas Críticas\n- **Primary:** Claude Code (verificação dupla)\n- **Secondary:** TRAE Solo (execução)\n- **Justification:** Qualidade máxima para funcionalidades críticas",
  },
  {
    id: "aula4-slide15",
    order: 15,
    title: "Conclusão - Dominando Ambientes de Vibe Coding",
    type: "text",
    content:
      "# Conclusão - Dominando Ambientes de Vibe Coding\n\n## Resumo dos Aprendizados\n\n### Ferramentas Dominadas\n- **TRAE Solo:** IDE principal configurado e otimizado\n- **Warp:** Terminal avançado para colaboração\n- **Claude Code:** CLI especializado em análise\n- **Kilo Code:** Modos automatizados por tarefa\n- **GLM 4.6:** Modelo integrado em todas as ferramentas\n\n### Habilidades Desenvolvidas\n- **Setup de ambiente:** Configuração completa e funcional\n- **Benchmarking:** Metodologia de comparação sistemática\n- **Seleção de ferramentas:** Decisão baseada em dados\n- **Integração:** Workflows entre diferentes ambientes\n\n## Takeaways Principais\n\n### 1. Não existe ferramenta única perfeita\n- **TRAE Solo:** Melhor para desenvolvimento diário\n- **Claude Code:** Superior para análises complexas\n- **Warp:** Ideal para colaboração e automação\n- **Kilo Code:** Excelente para workflows especializados\n\n### 2. Contexto e configuração são cruciais\n- Setup adequado faz diferença de 40% na performance\n- Templates específicos melhoram qualidade\n- Integração entre ferramentas potencializa resultados\n\n### 3. Benchmarking sistemático é essencial\n- Medições objetivas vs percepções subjetivas\n- Dados quantitativos para tomada de decisão\n- Metodologia replicável para outras ferramentas\n\n## Próximos Passos\n\n### Aula 05: Boas Práticas e BMAD\n- **Git/GitHub:** Versionamento profissional\n- **Segurança:** .env, LGPD, secrets management\n- **BMAD:** Metodologia de contexto estruturado\n- **PRD:** Documentação de produto com BMAD\n\n### Projeto Dirigido (Aulas 06-08)\n- **Aplicação prática:** Usar essas ferramentas em projeto real\n- **Supabase:** Integração com backend\n- **Deploy:** Publicação em produção\n- **Portfolio:** Demonstração das competências adquiridas\n\n## Configuração Final do Ambiente\n\n### Checklist de Validação\n- [ ] TRAE Solo instalado e configurado\n- [ ] GLM 4.6 integrado e testado\n- [ ] Claude Code funcionando\n- [ ] Kilo Code com modos configurados\n- [ ] Warp configurado para colaboração\n- [ ] Suite de benchmarks executada\n- [ ] Resultados documentados\n\n### Recursos para Aprofundamento\n- **Documentação oficial:** Cada ferramenta possui guias específicos\n- **Comunidade:** Fóruns e Discord das ferramentas\n- **Templates:** Biblioteca de prompts otimizados\n- **Updates:** Acompanhar releases e novas features\n\n### Melhoria Contínua\n- **Experimentação:** Testar novas features regularmente\n- **Métricas:** Manter monitoramento de performance\n- **Otimização:** Ajustar configurações baseado em uso\n- **Feedback:** Contribuir para evolução das ferramentas\n\n---\n\n*Esta aula estabeleceu as bases sólidas para o trabalho prático em Vibe Coding, fornecendo conhecimento abrangente dos ambientes e ferramentas disponíveis para maximizar a produtividade e qualidade do desenvolvimento assistido por IA.*\n\n---\n\n*A estrutura de slides segue o padrão estabelecido, com foco prático em setup, configuração e benchmarking sistemático de ferramentas para Vibe Coding.*",
  },
];

export const mockSlidesAula5: Slide[] = [
  {
    id: "aula5-slide1",
    order: 1,
    title: "Abertura da Aula 05",
    type: "text",
    content: `# Boas Práticas, Git/GitHub & BMAD (PRD)
## Fundamentos de Desenvolvimento Profissional e Estruturação de Projetos

### Informações da Aula:
- **Controle de versão** com Git/GitHub
- **Segurança e conformidade** LGPD
- **Metodologia BMAD** para PRDs
- **Configuração de pipelines** profissionais

**Duração:** 90 minutos | **Professor:** Israel Evangelista | **Aula 05 de 08**

💡 *Git não é apenas controle de versão, é comunicação entre desenvolvedores*`,
  },
  {
    id: "aula5-slide2",
    order: 2,
    title: "Objetivos Específicos da Aula",
    type: "text",
    content: `# O Que Você Vai Dominar Hoje?

## 🔄 **CONTROLE DE VERSÃO PROFISSIONAL**
- Configurar Git/GitHub com SSH
- Dominar fluxos de branches e pull requests
- Implementar estratégias de merge
- Aplicar boas práticas de commit

## 🛡️ **SEGURANÇA E COMPLIANCE**
- Configurar .env e variáveis de ambiente
- Implementar .gitignore adequado
- Sanitizar logs e dados sensíveis
- Garantir conformidade LGPD

## 📋 **ESTRUTURAÇÃO COM BMAD**
- Aplicar metodologia BMAD
- Criar PRDs profissionais
- Definir acceptance criteria
- Estruturar contexto de projeto

## ⚙️ **PIPELINES E AUTOMATIZAÇÃO**
- Configurar pipeline básico
- Implementar validação local
- Estabelecer deployment workflow
- Documentar processos

📊 *Preview visual do resultado final: repositório + PRD*`,
  },
  {
    id: "aula5-slide3",
    order: 3,
    title: "Git: Conceitos Fundamentais",
    type: "text",
    content: `# Git: O Sistema Nervoso do Desenvolvimento Colaborativo

## **WORKFLOW BÁSICO:**
**Working Directory** → **Staging Area** → **Local Repository** → **Remote Repository**

### 📁 **WORKING DIRECTORY**
- Arquivos sendo editados
- Mudanças não versionadas
- Status: modified, untracked

### 📋 **STAGING AREA (INDEX)**
- Preparação para commit
- Seleção de mudanças
- Staging, unstaging de arquivos

### 💾 **LOCAL REPOSITORY**
- Commits locais salvos
- Histórico permanente
- Branches e tags

### 🌐 **REMOTE REPOSITORY (GitHub)**
- Sincronização com equipe
- Backup e colaboração
- Pull requests e reviews

## **COMANDOS ESSENCIAIS:**
- \`git clone\`, \`git add\`, \`git commit\`
- \`git push\`, \`git pull\`, \`git status\`
- \`git branch\`, \`git merge\`, \`git checkout\`
- \`git log\`, \`git diff\`, \`git remote\``,
  },
  {
    id: "aula5-slide4",
    order: 4,
    title: "Configuração de Repositório - Passo a Passo",
    type: "text",
    content: `# Criando Seu Primeiro Repositório Profissional

## **ETAPA 1: INICIALIZAÇÃO LOCAL**
\`\`\`bash
# Navegar para diretório do projeto
cd meu-projeto-vibe-coding

# Inicializar repositório Git
git init

# Configurar Git (primeira vez apenas)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Criar README.md
echo "# Meu Projeto Vibe Coding" > README.md

# Primeiro commit
git add README.md
git commit -m "feat: inicialização do projeto"
\`\`\`

## **ETAPA 2: CRIAÇÃO NO GITHUB**
- Criar repositório no GitHub (interface web)
- Copiar URL do repositório remoto
- Configurar descrição e visibilidade

## **ETAPA 3: CONEXÃO LOCAL-REMOTO**
\`\`\`bash
# Adicionar repositório remoto
git remote add origin https://github.com/usuario/projeto.git

# Verificar conexão
git remote -v

# Fazer push para main
git push -u origin main
\`\`\`

## **ESTRUTURA RECOMENDADA:**
\`\`\`
projeto/
├── README.md
├── .gitignore
├── src/
├── tests/
├── docs/
└── .env.example
\`\`\``,
  },
  {
    id: "aula5-slide5",
    order: 5,
    title: "SSH: Configuração Segura e Confiável",
    type: "text",
    content: `# SSH: Acesso Seguro ao GitHub

## **POR QUE SSH?**
✅ **Mais seguro** que HTTPS
✅ **Não requer senha** a cada push
✅ **Integração fluida** com Git
✅ **Suporte a deploy keys**
✅ **Acesso automatizado**

## **CONFIGURAÇÃO PASSO-A-PASSO:**

### **1️⃣ VERIFICAR CHAVES EXISTENTES**
\`\`\`bash
# Listar chaves SSH
ls -la ~/.ssh/

# Chave pública: id_rsa.pub ou id_ed25519.pub
\`\`\`

### **2️⃣ GERAR NOVA CHAVE (se necessário)**
\`\`\`bash
# Gerar chave ED25519 (recomendada)
ssh-keygen -t ed25519 -C "seu@email.com"

# Ou RSA 4096 bits
ssh-keygen -t rsa -b 4096 -C "seu@email.com"
\`\`\`

### **3️⃣ ADICIONAR AO AGENTE SSH**
\`\`\`bash
# Iniciar agente SSH
eval "$(ssh-agent -s)"

# Adicionar chave privada
ssh-add ~/.ssh/id_ed25519
\`\`\`

### **4️⃣ CONFIGURAR NO GITHUB**
- Copiar conteúdo de \`id_ed25519.pub\`
- Settings → SSH and GPG keys → New SSH key
- Colar chave e confirmar

### **5️⃣ TESTAR CONEXÃO**
\`\`\`bash
ssh -T git@github.com
# Resposta esperada: "Hi usuario! You've successfully authenticated"
\`\`\`

## **TROUBLESHOOTING:**
❌ **Permission denied:** Verificar chave adicionada
❌ **Agent has no identities:** Executar ssh-add
❌ **Connection refused:** Verificar firewall/antivírus`,
  },
  {
    id: "aula5-slide6",
    order: 6,
    title: "Branches e Estratégias de Merge",
    type: "text",
    content: `# Branches: Paralelizando Desenvolvimento

## **ESTRATÉGIAS DE BRANCHING:**

### 🌿 **FEATURE BRANCH WORKFLOW**
\`\`\`bash
# Criar branch para nova feature
git checkout -b feature/nova-funcionalidade

# Desenvolvimento na branch
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Merge para main
git checkout main
git merge feature/nova-funcionalidade
\`\`\`

### 📊 **GITFLOW (ENTERPRISE)**
\`\`\`bash
# Branch main (produção)
# Branch develop (integração)
# Feature branches
# Release branches
# Hotfix branches
\`\`\`

## **TYPES DE BRANCHES:**
- **main:** Código em produção
- **develop:** Integração de features
- **feature/nome:** Novas funcionalidades
- **fix/bug-id:** Correções de bugs
- **release/v1.0:** Preparação de release
- **hotfix/urgente:** Correções em produção

## **ESTRATÉGIAS DE MERGE:**

### 🔄 **MERGE (padrão)**
- **Preserva** histórico completo
- **Cria** commit de merge
- **Ideal** para feature branches

### 🔀 **REBASE (limpeza)**
- **Lineariza** histórico
- **Evita** commits de merge
- **Ideal** para branches locais

### ⚡ **SQUASH (simplificação)**
- **Combina** commits em um
- **Histórico** mais limpo
- **Ideal** para feature branches pequenas

## **PULL REQUESTS:**
- **Code review** obrigatório
- **Discussão** de mudanças
- **Integração** controlada
- **Validação** automática

⚠️ **Golden Rule do Rebase:** Nunca fazer rebase de branches que já foram compartilhados!`,
  },
  {
    id: "aula5-slide7",
    order: 7,
    title: "Proteção de Secrets: Fundamento da Segurança",
    type: "text",
    content: `# Proteção de Secrets: Fundamento da Segurança

## **PRINCÍPIOS DE SEGURANÇA:**
🔐 **SEPARAÇÃO DE CONFIANÇA**
- Dados sensíveis **nunca** no código
- Configurações **por ambiente**
- Princípio do **menor privilégio**
- **Defense in depth**

## **ESTRUTURA DE .env FILES**

### **.env (NUNCA COMMITAR)**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db
DATABASE_PASSWORD=super-secret-password

# API Keys
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx

# JWT
JWT_SECRET=ultra-secret-jwt-key-256-bits

# Email
SMTP_PASSWORD=email-smtp-password
\`\`\`

### **.env.example (SEMPRE COMMITAR)**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
DATABASE_PASSWORD=your-database-password

# API Keys (obter em https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# OpenAI (obter em https://platform.openai.com/api-keys)
OPENAI_API_KEY=sk-your-openai-api-key

# JWT (generate with: openssl rand -base64 32)
JWT_SECRET=your-jwt-secret-here

# Email SMTP
SMTP_PASSWORD=your-smtp-password
\`\`\`

## **BOAS PRÁTICAS:**
- **Nomes descritivos** mas não reveladores
- **Comentários** explicativos
- **Formato** consistente
- **Documentação** em README`,
  },
  {
    id: "aula5-slide8",
    order: 8,
    title: ".gitignore: A Linha de Defesa do Repositório",
    type: "text",
    content: `# .gitignore: A Linha de Defesa do Repositório

## **ARQUIVOS QUE NUNCA DEVEM SER COMMITADOS:**

### 🔐 **CREDENCIAIS E KEYS**
\`\`\`gitignore
# Chaves SSH
id_rsa
id_rsa.pub
*.pem
*.key

# Configurações de ambiente
.env
.env.local
.env.production
*.env

# API Keys
config/keys.json
secrets/
\`\`\`

### 📁 **ARQUIVOS DO SISTEMA**
\`\`\`gitignore
# macOS
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
*~
.directory
.Trash-*
\`\`\`

### 🗂️ **DEPENDÊNCIAS E BUILD**
\`\`\`gitignore
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
.next/
out/

# Logs
logs/
*.log
\`\`\`

### 🛠️ **EDITORES E IDES**
\`\`\`gitignore
# VS Code
.vscode/
*.code-workspace

# JetBrains
.idea/
*.swp
*.swo
*.swn

# Vim
*.swp
*.swo
\`\`\`

## **TEMPLATES POR TECNOLOGIA:**
- **Node.js:** node.gitignore
- **Python:** Python.gitignore
- **React:** React.gitignore
- **Vue:** Vue.gitignore
- **Laravel:** Laravel.gitignore

## **COMANDO ÚTIL:**
\`\`\`bash
# Verificar se há arquivos sensíveis
git check-ignore *
git ls-files --others --exclude-standard
\`\`\``,
  },
  {
    id: "aula5-slide9",
    order: 9,
    title: "LGPD: Conformidade e Proteção de Dados",
    type: "text",
    content: `# LGPD: Conformidade e Proteção de Dados

## **PRINCÍPIOS LGPD:**

### 🔍 **TRANSPARÊNCIA**
- **Informar** coleta de dados
- **Explicar** finalidades
- **Disponibilizar** políticas

### 🎯 **FINALIDADE**
- Coletar **apenas** o necessário
- Usar para **fins específicos**
- **Não usar** para outras finalidades

### ⏱️ **NECESSIDADE**
- Princípio da **minimização**
- Dados **proporcionais** ao objetivo
- **Eliminar** dados desnecessários

### 🛡️ **SEGURANÇA**
- Medidas **técnicas e administrativas**
- Prevenir **acesso não autorizado**
- Garantir **integridade**

### 📊 **ACURÁCIA**
- Manter dados **atualizados**
- **Permitir** correção
- **Excluir** dados desatualizados

## **DADOS SINTÉTICOS - BENEFÍCIOS:**
✅ **Não violam** LGPD
✅ **Preservam** estrutura real
✅ **Permitem** testes realistas
✅ **Evitam exposição** de dados reais
✅ **Facilitam** desenvolvimento seguro

## **EXEMPLO DE DADOS SINTÉTICOS:**
\`\`\`javascript
// Usuário sintético
const user = {
  id: 'user_' + Math.random().toString(36).substr(2, 9),
  name: 'João Silva',
  email: 'joao.silva@exemplo.com',
  cpf: '123.456.789-00',
  phone: '(11) 99999-9999',
  birthDate: '1990-01-15',
  address: {
    street: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  }
};
\`\`\`

## **HIGIENE DE LOGS:**
\`\`\`javascript
// ❌ Logs que vazam dados
console.log('User password:', user.password);

// ✅ Logs seguros
console.log('User login attempt', {
  userId: user.id,
  timestamp: new Date()
});
\`\`\``,
  },
  {
    id: "aula5-slide10",
    order: 10,
    title: "Higiene de Logs: Rastreabilidade Segura",
    type: "text",
    content: `# Higiene de Logs: Rastreabilidade Segura

## **PROBLEMA: DADOS SENSÍVEIS EM LOGS**
❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌
\`\`\`
[2024-01-15 10:30:15] POST /api/login
User: admin@company.com
Password: MySuperSecret123!
IP: 192.168.1.100
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## **SOLUÇÃO: LOGS SANITIZADOS**
✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅
\`\`\`
[2024-01-15 10:30:15] POST /api/login
User: admin@*****.com
IP: 192.168.1.100
Status: SUCCESS
RequestID: req_123456789
\`\`\`

## **PADRÕES DE SANITIZAÇÃO:**

### 🔐 **EMAILS**
\`\`\`javascript
function sanitizeEmail(email) {
  if (!email) return null;
  const [local, domain] = email.split('@');
  return \`\${local.substring(0, 2)}***@\${domain}\`;
}
\`\`\`

### 🔢 **DOCUMENTOS (CPF/CNPJ)**
\`\`\`javascript
function sanitizeDocument(doc) {
  if (!doc) return null;
  return doc.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, '$1.***.***-$4');
}
\`\`\`

### 🔑 **TOKENS E KEYS**
\`\`\`javascript
function sanitizeKey(key) {
  if (!key) return null;
  const start = key.substring(0, 8);
  const end = key.substring(key.length - 4);
  return \`\${start}***\${end}\`;
}
\`\`\`

## **IMPLEMENTAÇÃO EM NODE.JS:**
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      return JSON.stringify({
        timestamp,
        level,
        message,
        ...sanitizeMeta(meta)
      });
    })
  )
});

function sanitizeMeta(meta) {
  const sanitized = { ...meta };

  if (sanitized.email) {
    sanitized.email = sanitizeEmail(sanitized.email);
  }

  if (sanitized.token) {
    sanitized.token = sanitizeKey(sanitized.token);
  }

  return sanitized;
}
\`\`\`

## **AUDITORIA E MONITORAMENTO:**
- Ferramentas de **SIEM**
- **Alertas automáticos**
- **Revisão periódica**
- **Compliance reports**
- **Retenção adequada**`,
  },
  {
    id: "aula5-slide11",
    order: 11,
    title: "BMAD: Metodologia para Estruturação Profissional",
    type: "text",
    content: `# BMAD: Metodologia para Estruturação Profissional

## **O QUE É BMAD?**
🎯 **Business Model + Architecture + Design**
- **Metodologia integrada** para estruturação de projetos
- Conecta **estratégia de negócio** com implementação técnica
- Garante **alinhamento** entre objetivos e execução
- Facilita **comunicação** entre stakeholders

## **OS QUATRO PILARES:**

### 💼 **BUSINESS MODEL**
- **Proposta de valor**
- **Análise de mercado**
- **Stakeholders e personas**
- **Revenue streams**
- **Cost structure**

### 🏗️ **ARCHITECTURE**
- **Arquitetura técnica**
- **Stack tecnológico**
- **Integrações**
- **Escalabilidade**
- **Performance**

### 🎨 **DESIGN**
- **User Experience**
- **Interface design**
- **User journey**
- **Accessibility**
- **Design system**

### 📋 **CRITERIA**
- **Acceptance criteria**
- **Success metrics**
- **Definition of Done**
- **Quality gates**
- **Testing strategy**

## **BENEFÍCIOS DO BMAD:**
✅ **Alinhamento** estratégico-técnico
✅ **Redução** de retrabalho
✅ **Comunicação** clara
✅ **Medição** de sucesso
✅ **Escalabilidade**
✅ **Manutenibilidade**

## **QUANDO USAR BMAD:**
- **Projetos complexos**
- **Múltiplos stakeholders**
- **Escopo variável**
- **Longo prazo**
- **Equipe multidisciplinar**`,
  },
  {
    id: "aula5-slide12",
    order: 12,
    title: "Business Model Canvas: Mapeando o Negócio",
    type: "text",
    content: `# Business Model Canvas: Mapeando o Negócio

## **CAMPOS DO CANVAS:**

### **1️⃣ PROPOSTA DE VALOR**
- O **que** resolvemos?
- Quais **problemas** eliminamos?
- Qual **valor** entregamos?
- **Diferencial** competitivo

### **2️⃣ SEGMENTOS DE CLIENTES**
- **Persona** principal
- **Demografia e psicografia**
- **Jobs to be done**
- **Pain points** principais

### **3️⃣ CANAIS DE DISTRIBUIÇÃO**
- Como **reachamos** clientes?
- Onde eles nos **encontram**?
- **Canais digitais/físicos**
- **Parcerias estratégicas**

### **4️⃣ RELACIONAMENTO COM CLIENTES**
- Como **interagimos**?
- **Suporte e assistência**
- **Self-service** vs assistido
- **Comunidade** e feedback

### **5️⃣ FONTES DE RECEITA**
- **Modelos de precificação**
- **Freemium, subscription, one-time**
- **Upsell** e cross-sell
- **Métricas de receita**

### **6️⃣ RECURSOS PRINCIPAIS**
- **Tecnologias** necessárias
- **Pessoas e competências**
- **Infraestrutura**
- **Parcerias**

### **7️⃣ ATIVIDADES PRINCIPAIS**
- **Core business** activities
- **Automação** possível
- Activities que **criam valor**
- **Operations** críticas

### **8️⃣ PARCERIAS PRINCIPAIS**
- **Supply chain**
- **Technology partners**
- **Distribution partners**
- **Service providers**

### **9️⃣ ESTRUTURA DE CUSTOS**
- **Fixed vs Variable** costs
- **Technology** costs
- **Personnel** costs
- **Marketing** costs

## **EXEMPLO PRÁTICO - E-COMMERCE:**
- **Proposta:** Compra online 50% mais rápida
- **Clientes:** Millennials urbanos
- **Canal:** App mobile + web
- **Receita:** Commission + subscriptions
- **Recursos:** Tech stack + logística
- **Custos:** Dev + marketing + infra`,
  },
  {
    id: "aula5-slide13",
    order: 13,
    title: "Architecture Design: Do Conceito à Implementação",
    type: "text",
    content: `# Architecture Design: Do Conceito à Implementação

## **LAYERED ARCHITECTURE:**

### 🌐 **FRONTEND LAYER**
- **React/Next.js**
- **Tailwind CSS**
- **State management** (Zustand/Redux)
- **API integration** (Axios)
- **Authentication** (JWT)

### ⚙️ **API GATEWAY LAYER**
- **Authentication middleware**
- **Rate limiting**
- **Request/response logging**
- **Error handling**
- **API versioning**

### 🏢 **BUSINESS LOGIC LAYER**
- **Domain models**
- **Use cases**
- **Business rules**
- **Validation**
- **Orchestration**

### 💾 **DATA LAYER**
- **Database** (PostgreSQL)
- **Caching** (Redis)
- **File storage** (AWS S3)
- **Search** (Elasticsearch)
- **Data validation**

## **INTEGRAÇÕES EXTERNAS:**
- **Payment systems** (Stripe)
- **Email services** (SendGrid)
- **SMS** (Twilio)
- **Analytics** (Google Analytics)
- **Monitoring** (Sentry)

## **DESIGN PRINCIPLES:**
✅ **Single Responsibility**
✅ **Open/Closed**
✅ **Liskov Substitution**
✅ **Interface Segregation**
✅ **Dependency Inversion**

## **TECHNOLOGIES STACK:**
\`\`\`yaml
Frontend:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite

Backend:
  - Node.js
  - Express.js
  - TypeScript
  - PostgreSQL

DevOps:
  - Docker
  - GitHub Actions
  - Vercel
  - Supabase
\`\`\`

## **SCALABILITY CONSIDERATIONS:**
- **Horizontal scaling**
- **Database sharding**
- **CDN implementation**
- **Caching strategies**
- **Load balancing**`,
  },
  {
    id: "aula5-slide14",
    order: 14,
    title: "PRD: Product Requirements Document",
    type: "text",
    content: `# PRD: Product Requirements Document

## **ESTRUTURA DO PRD:**

### 📋 **EXECUTIVE SUMMARY**
- **Visão geral** do produto
- **Objetivos** principais
- **Stakeholders**
- **Timeline** geral

### 🎯 **PRODUCT VISION**
- **Missão** do produto
- **Valores e princípios**
- **Público-alvo**
- **Diferencial competitivo**

### 📊 **USER PERSONAS**
- **Persona 1:** Demographics, goals, pain points
- **Persona 2:** Journey, motivations, barriers
- **User interviews** insights

### 📋 **USER STORIES**
**Formato:** "As a [role], I want [action] so that [benefit]"

**Exemplo:**
- As a **product owner**, I want to **create new features** so that I can **validate business hypotheses**
- As a **developer**, I want **clear requirements** so that I can **implement correctly**
- As a **user**, I want **fast load times** so that I can **be productive**

### ✅ **ACCEPTANCE CRITERIA**
**Formato:** Given/When/Then

**Exemplo:**
\`\`\`gherkin
Given I am logged in as admin
When I create a new feature
Then the feature should be visible to users with proper permissions
\`\`\`

### 🎨 **WIREFRAMES & MOCKUPS**
- **User interface** design
- **User flow** diagrams
- **Interaction** patterns
- **Responsive** design

### 📈 **SUCCESS METRICS**
- **KPIs** principais
- **Métricas de** usuário
- **Métricas** técnicas
- **Business** metrics

### 🛠️ **TECHNICAL REQUIREMENTS**
- **Performance** requirements
- **Security** requirements
- **Integration** requirements
- **Compliance** requirements

### 📅 **ROADMAP**
- **Milestone 1** (Mês 1-2)
- **Milestone 2** (Mês 3-4)
- **Milestone 3** (Mês 5-6)
- **Features** futuras

### ❓ **RISKS & ASSUMPTIONS**
- **Technical** risks
- **Business** risks
- **Dependencies**
- **Mitigation strategies**`,
  },
  {
    id: "aula5-slide15",
    order: 15,
    title: "User Stories: Narrativas que Orientam Desenvolvimento",
    type: "text",
    content: `# User Stories: Narrativas que Orientam Desenvolvimento

## **ESTRUTURA INVEST (INVEST):**

### **I - INDEPENDENT**
- Stories devem ser **independentes**
- **Possível execução** em qualquer ordem
- **Mínima dependência** entre stories

### **N - NEGOTIABLE**
- **Especificação** negociável
- História é um **placeholder** para conversa
- **Detalhes** definidos em refinamento

### **V - VALUABLE**
- **Entregar valor** ao usuário
- **Business value** claro
- **Impacto** mensurável

### **E - ESTIMABLE**
- **Tamanho estimável** pela equipe
- **Complexidade** clara
- **Sem ambiguidades** técnicas

### **S - SMALL**
- **Pequena** o suficiente
- **1-2 sprints** no máximo
- **Testável** em um ciclo

### **T - TESTABLE**
- **Critérios de aceite** claros
- **Possível verificação**
- **Testes automatizados**

## **EXEMPLOS POR COMPLEXIDADE:**

### **SIMPLES:**
"As a user, I want to login so that I can access my dashboard"

### **MÉDIA:**
"As a product manager, I want to create campaigns so that I can target specific user segments with personalized messages"

### **COMPLEXA:**
"As a system administrator, I want to configure role-based access so that I can ensure users only access features appropriate to their role and maintain security compliance"

## **ACCEPTANCE CRITERIA - EXEMPLOS:**

### **FUNCIONAL:**
\`\`\`
Given the user is on the login page
When they enter valid credentials
Then they should be redirected to the dashboard
And a session should be created
And a welcome message should be displayed
\`\`\`

### **NÃO-FUNCIONAL:**
\`\`\`
Given the system is processing login requests
When multiple users login simultaneously
Then response time should be under 200ms
And error rate should be less than 0.1%
And the system should handle 1000 concurrent users
\`\`\`

### **TÉCNICO:**
\`\`\`
Given the authentication system
When a user successfully logs in
Then a JWT token should be generated with:
- 256-bit HMAC signature
- 1-hour expiration
- User ID and role in payload
- Secure random UUID as JTI
\`\`\``,
  },
  {
    id: "aula5-slide16",
    order: 16,
    title: "Hands-on: Criando Repositório Profissional",
    type: "text",
    content: `# Hands-on: Criando Repositório Profissional

## **CENÁRIO:** "TaskFlow - Gerenciador de Tarefas com IA"

### **ETAPA 1: REPOSITÓRIO LOCAL (5 min)**
\`\`\`bash
# Criar diretório
mkdir taskflow-vibe-coding
cd taskflow-vibe-coding

# Inicializar Git
git init

# Configurar Git
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# Estrutura básica
mkdir -p src/{components,pages,utils}
mkdir -p tests
mkdir -p docs
mkdir -p .github/workflows
\`\`\`

### **ETAPA 2: ARQUIVOS BASE (5 min)**

**README.md:**
\`\`\`markdown
# TaskFlow

Gerenciador de tarefas com IA integrado.

## Features
- ✅ Gestão de tarefas inteligente
- 🤖 Sugestões com IA
- 📊 Analytics de produtividade
- 🔒 Autenticação segura

## Tech Stack
- React + TypeScript
- Supabase
- GLM 4.6
- Tailwind CSS

## Setup
1. Clone o repo
2. Configure .env
3. Instale dependências: \`npm install\`
4. Rode: \`npm run dev\`
\`\`\`

**.gitignore:**
\`\`\`gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment
.env
.env.local
.env.production

# Dependencies
node_modules/
\`\`\`

**.env.example:**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/taskflow
DATABASE_PASSWORD=your-database-password

# Supabase
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# AI
GLM_API_KEY=your-glm-api-key
OPENAI_API_KEY=your-openai-api-key

# Auth
JWT_SECRET=your-jwt-secret
NEXTAUTH_SECRET=your-nextauth-secret
\`\`\`

### **ETAPA 3: GITHUB E SSH (5 min)**
\`\`\`bash
# Primeiro commit
git add .
git commit -m "feat: inicialização do projeto TaskFlow"

# Criar no GitHub e conectar
git remote add origin git@github.com:usuario/taskflow-vibe-coding.git
git branch -M main
git push -u origin main
\`\`\`

### **ETAPA 4: VALIDAÇÃO (5 min)**
- ✅ **Git status** limpo
- ✅ **SSH** conectado
- ✅ **Repository** visível no GitHub
- ✅ **README.md** carregado`,
  },
  {
    id: "aula5-slide17",
    order: 17,
    title: "Exercício: PRD com Metodologia BMAD",
    type: "text",
    content: `# Exercício: PRD com Metodologia BMAD

## **CASO:** "TaskFlow - Gestor de Tarefas com IA"

### **BUSINESS MODEL CANVAS:**
\`\`\`
Proposta de Valor:
"IA que organiza e prioriza suas tarefas automaticamente"

Segmentos de Clientes:
- Profissionais estresados
- Estudantes universitários
- Freelancers com múltiplos projetos

Canais:
- App web responsivo
- Comunidade online
- Parcerias com empresas

Relacionamento:
- Onboarding guiado
- Suporte 24/7
- Community manager

Receita:
- Freemium model
- Pro subscription (R$ 29/mês)
- Enterprise (R$ 99/mês)
\`\`\`

### **ARCHITECTURE:**
\`\`\`
Frontend: React + TypeScript + Tailwind
Backend: Supabase (Database + Auth + Storage)
AI: GLM 4.6 para análise de tarefas
Deployment: Vercel
CI/CD: GitHub Actions
\`\`\`

### **USER STORIES:**
\`\`\`gherkin
Feature: Task Management

Scenario: Create new task
Given I am logged in
When I click "Add Task" and fill the form
Then the task should appear in my list
And I should receive a confirmation

Scenario: AI prioritization
Given I have 5+ tasks
When I open the AI suggestions
Then tasks should be ordered by priority
And I should see explanation for each priority
\`\`\`

### **SUCCESS METRICS:**
- **Daily Active Users:** >1000
- **Task completion rate:** >70%
- **User retention (30 days):** >40%
- **AI accuracy:** >85%
- **App performance:** <2s load time

### **DEFINITION OF DONE:**
- ✅ **Código** implementado e testado
- ✅ **Acceptance criteria** atendidos
- ✅ **Code review** aprovado
- ✅ **Deploy** em staging
- ✅ **Documentação** atualizada
- ✅ **Métricas** monitorando`,
  },
  {
    id: "aula5-slide18",
    order: 18,
    title: "Pipeline CI/CD: Automação Profissional",
    type: "text",
    content: `# Pipeline CI/CD: Automação Profissional

## **ESTRUTURA DO PIPELINE:**

### 🔄 **CONTINUOUS INTEGRATION**
- **Testes** automáticos
- **Linting** e type checking
- **Build** verification
- **Security** scanning

### 🚀 **CONTINUOUS DEPLOYMENT**
- **Deploy automático** para staging
- **Deploy manual** para produção
- **Rollback** automático
- **Health checks**

## **GITHUB ACTIONS WORKFLOW:**
\`\`\`yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'

  deploy-production:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
\`\`\`

## **DEPLOYMENT CHECKLIST:**
- ✅ **Build** successful
- ✅ **All tests** passing
- ✅ **Security scan** clean
- ✅ **Environment variables** configured
- ✅ **Database migrations** applied
- ✅ **Health checks** passing
- ✅ **Rollback plan** ready

## **MONITORAMENTO:**
- **Application** metrics
- **Error tracking** (Sentry)
- **Performance** monitoring
- **User** analytics
- **Uptime** monitoring`,
  },
  {
    id: "aula5-slide19",
    order: 19,
    title: "Síntese: Profissionalização do Desenvolvimento",
    type: "text",
    content: `# Síntese: Profissionalização do Desenvolvimento

## **CONCEITOS-CHAVE APRENDIDOS:**

### 🔄 **CONTROLE DE VERSÃO PROFISSIONAL**
- **Git/GitHub** com SSH configurado
- **Estratégias** de branches e merge
- **Pull requests** e code review
- **Commits** atômicos e descritivos

### 🛡️ **SEGURANÇA E COMPLIANCE**
- **Proteção de secrets** com .env
- **.gitignore** inteligente
- **LGPD** e dados sintéticos
- **Higiene de logs** e sanitização

### 📋 **ESTRUTURAÇÃO BMAD**
- **Business Model Canvas** aplicado
- **Architecture design** técnica
- **User stories** bem estruturadas
- **PRD profissional** criado

### ⚙️ **PIPELINES E QUALITY GATES**
- **CI/CD** automatizado
- **Testes** e validações
- **Deploy** seguro
- **Monitoramento** ativo

## **IMPACTOS PRÁTICOS:**
- 🚀 **90%** redução em problemas de merge
- 🔒 **100%** proteção de dados sensíveis
- 📈 **60%** melhoria na colaboração em equipe
- ⚡ **50%** faster onboarding para novos devs

## **DELIVERABLES CRIADOS:**
- ✅ **Repositório** GitHub configurado
- ✅ **Pipeline** básico funcionando
- ✅ **PRD** com BMAD completo
- ✅ **Estrutura de segurança** implementada`,
  },
  {
    id: "aula5-slide20",
    order: 20,
    title: "Próxima Aula: Projeto Dirigido (Parte I)",
    type: "text",
    content: `# Próxima Aula: Projeto Dirigido (Parte I) - Do PRD a Épicos

## **TEMA:** "Transformando o PRD em Plano de Execução"

### **CONTEÚDO DA AULA 06:**
- 🎯 **Decomposição** do PRD em épicos
- 📋 **Quebra** de épicos em tarefas
- 🏗️ **Priorização** inteligente
- 📊 **Quadro de tarefas** (Kanban/Scrum)
- ⚡ **Setup** do workspace de desenvolvimento
- 🤖 **Context** de projeto para IA

### **METODOLOGIA:**
- **Work breakdown structure**
- **Estimativa** de esforço
- **Identificação** de dependências
- **Definição** de milestones

### **DELIVERABLES:**
- **Épicos** bem estruturados
- **Board de tarefas** priorizado
- **Context de projeto** documentado
- **Setup de ambiente** completo

### **PREVIEW VISUAL:**
- **Kanban board** sendo criado
- **Dependencies** map
- **Timeline** visual
- **Resource** allocation

## **CONEXÃO:**
O repositório e PRD criados hoje serão a **base para o projeto** das próximas aulas!`,
  },
  {
    id: "aula5-slide21",
    order: 21,
    title: "Recursos para Aprofundamento",
    type: "text",
    content: `# Recursos para Aprofundamento

## 📚 **DOCUMENTAÇÃO OFICIAL:**
- **GitHub Docs:** docs.github.com
- **Git Documentation:** git-scm.com/doc
- **GitHub Security:** github.com/security
- **LGPD Guide:** gobiernodigital.gov.br

## 🛠️ **FERRAMENTAS RECOMENDADAS:**
- **Git Clients:** GitHub Desktop, GitKraken
- **SSH Management:** 1Password, LastPass
- **CI/CD:** GitHub Actions, Vercel, Netlify
- **Monitoring:** Sentry, LogRocket
- **Testing:** Jest, Cypress, Playwright

## 📖 **BOAS PRÁTICAS:**
- **Conventional Commits**
- **Git Flow Methodology**
- **OWASP Security Guidelines**
- **LGPD Compliance Checklist**

## 🎓 **COMUNIDADE:**
- **Discord do curso:** [link]
- **GitHub Discussions:** [link]
- **Stack Overflow:** tag "vibe-coding"
- **LinkedIn:** [professor]

## 📋 **CHECKLIST FINAL:**
□ Repositório criado e configurado
□ SSH funcionando perfeitamente
□ .gitignore implementado
□ .env.example documentado
□ Pipeline CI/CD ativo
□ PRD com BMAD completo
□ Context de projeto definido`,
  },
  {
    id: "aula5-slide22",
    order: 22,
    title: "Obrigado! Agora Você É um Desenvolvedor Profissional",
    type: "text",
    content: `# Obrigado! Agora Você É um Desenvolvedor Profissional

## 🎉 **CONQUISTAS DO DIA:**
- Configurou **Git/GitHub** profissionalmente
- Implementou **segurança** e LGPD
- Criou **PRD** com metodologia BMAD
- Estabeleceu **pipeline** automatizado

## 🚀 **PRÓXIMOS PASSOS:**
1. **Revisar** e completar o PRD
2. **Configurar** ambiente de desenvolvimento
3. **Preparar** para o projeto dirigido
4. **Compartilhar** no Discord

## 💡 **LEMBRETE:**
*"Repositório limpo e seguro + PRD sólido = projeto de sucesso"*

## 🎯 **CALL TO ACTION:**
- **Commit** suas conquistas hoje mesmo
- **Teste** o pipeline criado
- **Revise** a documentação
- **Prepare-se** para o próximo nível!

## **CONTATO DO INSTRUTOR:**
- **Email:** israel@trae.ai
- **LinkedIn:** /in/israel-evangelista
- **Discord:** @israel_trae

**curso-vibe-coding.dev**
*Transformando desenvolvedores em arquitetos de IA*`,
  },
  {
    id: "aula5-slide23",
    order: 23,
    title: "Materiais de Apoio Disponíveis",
    type: "text",
    content: `# Materiais de Apoio Disponíveis

## 📋 **TEMPLATES E CHECKLISTS**
- ✅ **Template .env.example** completo para diferentes stacks
- ✅ **Checklist de segurança LGPD** para validação
- ✅ **Template PRD BMAD** preenchível para projetos
- ✅ **Scripts de setup automatizado** para configuração rápida

## 🛠️ **FERRAMENTAS E RECURSOS**
- ✅ **Exemplos de .gitignore** por tecnologia (Node, Python, React, etc.)
- ✅ **Roteiro de troubleshooting** Git/GitHub
- ✅ **Guia de pipeline CI/CD** básico com GitHub Actions
- ✅ **Templates de commit** com Conventional Commits

## 📚 **DOCUMENTAÇÃO ADICIONAL**
- 🔗 **Links para documentação** oficial das ferramentas
- 📖 **Artigos recomendados** sobre desenvolvimento profissional
- 🎯 **Casos de estudo** reais de projetos bem estruturados
- 💡 **Dicas de boas práticas** para diferentes tecnologias

## 🔄 **PRÓXIMOS PASSOS**
1. **Baixar e organizar** os materiais
2. **Aplicar** em projetos reais
3. **Customizar** templates conforme necessidade
4. **Compartilhar** aprendizados na comunidade

## 📞 **SUPORTE**
- **Discord:** Canal #aula05-materiais
- **Email:** materiais@vibe-coding.dev
- **Issues:** Repositório GitHub do curso
- **Wiki:** Documentação colaborativa

## 🎓 **CERTIFICAÇÃO**
- [ ] Repositório profissional criado
- [ ] SSH configurado e testado
- [ ] PRD com BMAD completo
- [ ] Pipeline CI/CD funcionando
- [ ] Checklist LGPD validado

💡 *Materiais em constante evolução - feedback é sempre bem-vindo!*`,
  },
];

export const mockSlideDecks: SlideDeck[] = [
  {
    id: "deck-aula1",
    lessonId: "aula1",
    title: "Aula 01: Fundamentos do Vibe Coding & Riscos",
    slides: mockSlidesAula1,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula2",
    lessonId: "aula2",
    title: "Aula 02: Arquitetura de Agente & Engenharia de Contexto",
    slides: mockSlidesAula2,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula3",
    lessonId: "aula3",
    title: "Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)",
    slides: mockSlidesAula3,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula4",
    lessonId: "aula4",
    title: "Aula 04: Ambientes: TRAE Solo, Warp + CLIs",
    slides: mockSlidesAula4,
    currentSlideIndex: 0,
  },
  {
    id: "deck-aula5",
    lessonId: "aula5",
    title: "Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)",
    slides: mockSlidesAula5,
    currentSlideIndex: 0,
  },
];
