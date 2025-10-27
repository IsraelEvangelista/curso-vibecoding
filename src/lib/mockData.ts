import {
  User,
  Lesson,
  LessonScore,
  QuizQuestion,
  QuizAttempt,
  RankingEntry,
  ForumTopic,
  GalleryPost
} from '@/types';

// Mock de Usuários
export const mockUsers: User[] = [
  {
    id: '1',
    name: 'Ana Silva',
    email: 'ana.silva@email.com',
    role: 'aluno',
    joinedAt: '2024-01-15',
    totalPoints: 1250
  },
  {
    id: '2',
    name: 'Carlos Mendes',
    email: 'carlos.mendes@email.com',
    role: 'moderador',
    joinedAt: '2023-11-20',
    totalPoints: 980
  },
  {
    id: '3',
    name: 'Maria Oliveira',
    email: 'maria.oliveira@email.com',
    role: 'aluno',
    joinedAt: '2024-02-01',
    totalPoints: 1450
  },
  {
    id: '4',
    name: 'João Santos',
    email: 'joao.santos@email.com',
    role: 'aluno',
    joinedAt: '2024-01-20',
    totalPoints: 890
  },
  {
    id: '5',
    name: 'Pedro Costa',
    email: 'pedro.costa@email.com',
    role: 'aluno',
    joinedAt: '2024-02-10',
    totalPoints: 760
  }
];

// Mock de Quiz Questions
const mockQuizQuestions: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'O que é Vibe Coding?',
    options: [
      'Uma metodologia de desenvolvimento tradicional',
      'Uma abordagem de desenvolvimento assistido por IA',
      'Uma linguagem de programação',
      'Um framework JavaScript'
    ],
    correctAnswer: 1,
    explanation: 'Vibe Coding é uma abordagem de desenvolvimento de software assistida por inteligência artificial.'
  },
  {
    id: 'q2',
    question: 'Qual dos seguintes é um risco comum no Vibe Coding?',
    options: [
      'Falta de criatividade',
      'Lock-in com ferramentas de IA',
      'Desempenho muito lento',
      'Falta de documentação'
    ],
    correctAnswer: 1,
    explanation: 'Lock-in com ferramentas de IA é um risco importante a ser considerado no Vibe Coding.'
  },
  {
    id: 'q3',
    question: 'O que significa MCP no contexto de agentes?',
    options: [
      'Model Control Protocol',
      'Machine Communication Platform',
      'Model Context Protocol',
      'Multi-agent Control Platform'
    ],
    correctAnswer: 2,
    explanation: 'MCP significa Model Context Protocol, um padrão para comunicação entre modelos e ferramentas.'
  }
];

// Mock de Quiz Attempts
const mockQuizAttempts: QuizAttempt[] = [
  {
    id: 'attempt1',
    score: 80,
    completedAt: '2024-03-15T10:30:00Z',
    answers: [1, 1, 2]
  }
];

// Mock de Aulas
export const mockLessons: Lesson[] = [
  {
    id: 'aula1',
    title: 'Aula 01: Fundamentos do Vibe Coding & Riscos',
    description: 'Introdução ao Vibe Coding, ecossistema de ferramentas e boas práticas de segurança.',
    order: 1,
    isLocked: false,
    progress: 75,
    duration: '2h 30min',
    content: {
      explanation: [
        'Vibe Coding representa uma nova era no desenvolvimento de software, onde a colaboração entre humanos e IA cria resultados extraordinários.',
        'O ecossistema Vibe Coding inclui ferramentas como Lovable, n8n, Supabase, Z.ai, entre outras.',
        'É fundamental entender os riscos: segurança de secrets, lock-in, shadow AI, qualidade de código e governança.'
      ],
      examples: [
        '```javascript\n// Exemplo de prompt engineering\nconst prompt = `Crie um componente React que...`;\n```',
        '```typescript\n// Estrutura de contexto para agentes\ninterface AgentContext {\n  tools: Tool[];\n  memory: Memory;\n  instructions: string;\n}\n```'
      ]
    },
    quiz: {
      id: 'quiz1',
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: mockQuizAttempts
    },
    challenge: {
      id: 'challenge1',
      title: 'Crie seu primeiro contexto de agente',
      description: 'Desenvolva um arquivo AGENTS.md para um projeto de sua escolha, definindo os papéis dos agentes e o fluxo de trabalho.',
      requirements: [
        'Definir pelo menos 3 tipos de agentes',
        'Especificar as responsabilidades de cada agente',
        'Documentar o fluxo de trabalho entre eles'
      ],
      examples: [
        'Use o template fornecido em aula',
        'Pense em um projeto real que você gostaria de desenvolver'
      ]
    }
  },
  {
    id: 'aula2',
    title: 'Aula 02: Arquitetura de Agente & Engenharia de Contexto',
    description: 'Estrutura de agentes, engenharia de contexto vs. prompts e introdução ao MCP.',
    order: 2,
    isLocked: false,
    progress: 30,
    duration: '2h 45min',
    content: {
      explanation: [
        'Agentes são mais do que LLMs - eles têm memória, ferramentas e contexto estruturado.',
        'Engenharia de Contexto é mais poderosa que engenharia de prompts.',
        'MCP permite comunicação eficiente entre modelos e ferramentas externas.'
      ],
      examples: [
        '```python\n# Arquitetura de agente básica\nclass Agent:\n    def __init__(self, llm, tools, memory):\n        self.llm = llm\n        self.tools = tools\n        self.memory = memory\n```'
      ]
    },
    quiz: {
      id: 'quiz2',
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: 'challenge2',
      title: 'Diagrama de Arquitetura de Agente',
      description: 'Crie um diagrama completo da arquitetura de um agente para um problema específico.',
      requirements: [
        'Definir o cérebro (LLM)',
        'Especificar o sistema de memória',
        'Listar as ferramentas necessárias',
        'Documentar o fluxo de contexto'
      ],
      examples: [
        'Use ferramentas como Mermaid ou Draw.io',
        'Considere um caso de uso real'
      ]
    }
  },
  {
    id: 'aula3',
    title: 'Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)',
    description: 'Comparação de modelos, critérios de seleção e demonstrações práticas.',
    order: 3,
    isLocked: true,
    duration: '2h 15min',
    content: {
      explanation: [
        'Escolher o LLM certo é crucial para o sucesso do Vibe Coding.',
        'GLM 4.6 oferece excelente custo-benefício e performance.',
        'Critérios: janela de contexto, preço, latência, qualidade.'
      ],
      examples: []
    },
    quiz: {
      id: 'quiz3',
      questions: mockQuizQuestions,
      maxAttempts: 3,
      attempts: []
    },
    challenge: {
      id: 'challenge3',
      title: 'Micro-benchmarks de LLMs',
      description: 'Teste diferentes modelos e compare performance.',
      requirements: [
        'Testar pelo menos 3 modelos',
        'Medir latência e qualidade',
        'Documentar os resultados'
      ],
      examples: []
    }
  }
];

export const mockLessonScores: LessonScore[] = [
  {
    id: 'score-aula1',
    lessonId: 'aula1',
    order: 1,
    title: 'Fundamentos do Vibe Coding & Riscos',
    presenceScore: 10,
    quizScore: 8.5,
    challengeScore: 9.2,
    completed: true,
    updatedAt: '2025-01-10T09:00:00Z',
  },
  {
    id: 'score-aula2',
    lessonId: 'aula2',
    order: 2,
    title: 'Arquitetura de Agente & Engenharia de Contexto',
    presenceScore: 10,
    quizScore: 8,
    challengeScore: 8.7,
    completed: true,
    updatedAt: '2025-01-12T09:00:00Z',
  },
  {
    id: 'score-aula3',
    lessonId: 'aula3',
    order: 3,
    title: 'LLMs para Vibe Coding',
    presenceScore: 9.5,
    quizScore: 7.8,
    challengeScore: 8,
    completed: true,
    updatedAt: '2025-01-15T09:00:00Z',
  },
  {
    id: 'score-aula4',
    lessonId: 'aula4',
    order: 4,
    title: 'Ambientes TRAE Solo & CLIs',
    presenceScore: 9.2,
    quizScore: 7.5,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-18T09:00:00Z',
  },
  {
    id: 'score-aula5',
    lessonId: 'aula5',
    order: 5,
    title: 'Boas Práticas & BMAD/PRD',
    presenceScore: 8.8,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-22T09:00:00Z',
  },
  {
    id: 'score-aula6',
    lessonId: 'aula6',
    order: 6,
    title: 'Projeto Dirigido I',
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-25T09:00:00Z',
  },
  {
    id: 'score-aula7',
    lessonId: 'aula7',
    order: 7,
    title: 'Projeto Dirigido II',
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-25T09:00:00Z',
  },
  {
    id: 'score-aula8',
    lessonId: 'aula8',
    order: 8,
    title: 'Integração Supabase & Deploy',
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-25T09:00:00Z',
  },
  {
    id: 'score-aula9',
    lessonId: 'aula9',
    order: 9,
    title: 'Observabilidade Inteligente',
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-25T09:00:00Z',
  },
  {
    id: 'score-aula10',
    lessonId: 'aula10',
    order: 10,
    title: 'Encerramento & Vibe Challenges',
    presenceScore: 0,
    quizScore: 0,
    challengeScore: 0,
    completed: false,
    updatedAt: '2025-01-25T09:00:00Z',
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
      challenges: 550
    },
    trend: 'up'
  },
  {
    user: mockUsers[0], // Ana Silva
    position: 2,
    points: {
      total: 1250,
      presence: 300,
      quizzes: 450,
      challenges: 500
    },
    trend: 'stable'
  },
  {
    user: mockUsers[1], // Carlos Mendes
    position: 3,
    points: {
      total: 980,
      presence: 240,
      quizzes: 340,
      challenges: 400
    },
    trend: 'down'
  }
];

// Mock de Tópicos do Fórum
export const mockForumTopics: ForumTopic[] = [
  {
    id: 'topic1',
    title: 'Dúvida sobre configuração do Supabase',
    content: 'Estou com dificuldades para configurar as policies no Supabase. Alguém pode ajudar?',
    author: mockUsers[0],
    lessonId: 'aula1',
    replies: [
      {
        id: 'reply1',
        content: 'Oi Ana! Você já verificou a documentação oficial? O problema geralmente está na sintaxe das policies.',
        author: mockUsers[1],
        createdAt: '2024-03-15T14:30:00Z',
        likes: 3,
        isFromModerator: true
      },
      {
        id: 'reply2',
        content: 'Eu tive o mesmo problema! A solução foi usar o template de RLS que eles fornecem.',
        author: mockUsers[2],
        createdAt: '2024-03-15T15:45:00Z',
        likes: 2,
        isFromModerator: false
      }
    ],
    createdAt: '2024-03-15T13:00:00Z',
    isPinned: false,
    tags: ['supabase', 'configuração', 'ajuda']
  },
  {
    id: 'topic2',
    title: 'Compartilhando meu AGENTS.md para feedback',
    content: 'Pessoal, desenvolvi um AGENTS.md para um projeto de e-commerce e gostaria de feedback.',
    author: mockUsers[2],
    lessonId: 'aula2',
    replies: [
      {
        id: 'reply3',
        content: 'Excelente estrutura! Sugeri apenas adicionar mais detalhes sobre o agente de QA.',
        author: mockUsers[1],
        createdAt: '2024-03-14T10:00:00Z',
        likes: 5,
        isFromModerator: true
      }
    ],
    createdAt: '2024-03-14T09:00:00Z',
    isPinned: true,
    tags: ['agents.md', 'feedback', 'compartilhamento']
  }
];

// Mock de Posts da Galeria
export const mockGalleryPosts: GalleryPost[] = [
  {
    id: 'post1',
    title: 'Bot de WhatsApp para atendimento',
    description: 'Desenvolvi um bot usando n8n e GLM 4.6 para automatizar o atendimento ao cliente.',
    author: mockUsers[2],
    challengeId: 'challenge1',
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
    language: 'json',
    screenshots: [],
    likes: 12,
    comments: [
      {
        id: 'comment1',
        content: 'Muito interessante! Como você lidou com a autenticação do WhatsApp?',
        author: mockUsers[0],
        createdAt: '2024-03-15T16:00:00Z',
        likes: 2
      }
    ],
    createdAt: '2024-03-14T11:30:00Z',
    isFeatured: true
  },
  {
    id: 'post2',
    title: 'Dashboard de analytics com Supabase',
    description: 'Criei um dashboard interativo usando React e Supabase para análise de dados.',
    author: mockUsers[0],
    challengeId: 'challenge2',
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
    language: 'typescript',
    screenshots: [],
    likes: 8,
    comments: [],
    createdAt: '2024-03-13T20:15:00Z',
    isFeatured: false
  }
];

// Mock de usuário atual (simulação de login)
export const mockCurrentUser: User = mockUsers[0]; // Ana Silva

// Mock de estados de presença
export const mockPresenceStatus = {
  isEnabled: true,
  lessonId: 'aula1',
  expiresAt: '2024-03-15T23:59:59Z'
};
