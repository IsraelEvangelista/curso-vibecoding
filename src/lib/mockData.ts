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
  SlideDeck
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
  }
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

// Mock de Slides
export const mockSlidesAula1: Slide[] = [
  {
    id: 'aula1-slide1',
    order: 1,
    title: 'Abertura do Curso',
    type: 'text',
    content: '# Vibe Coding\n## Programação Assistida por IA: Do Conceito ao Deploy\n\n- **8 encontros práticos**\n- **Outubro/Novembro 2025**\n- **20h00 às 22h30** (com laboratório aberto até 23h00)',
    image: 'https://mfgnuiozkznfqmtnlzgs.supabase.co/storage/v1/object/public/media-files/bf5ff449-a432-4b2c-b33e-ed85c4cbf4a5/1761681732357.jpg'
  },
  {
    id: 'aula1-slide2',
    order: 2,
    title: 'Objetivos do Curso',
    type: 'text',
    content: '# Para Quem é Este Curso?\n\n- **🎯 Desenvolvedores Iniciantes:** Completos novatos ou em transição de carreira.\n- **💻 Vibe Coders:** Querem estruturar e aprofundar o conhecimento.\n- **👨‍💻 Desenvolvedores Tradicionais:** Buscam se atualizar com ferramentas emergentes.\n\n# O Que Você Vai Aprender?\n\n- **🧠 CONCEITOS:** Fundamentos, mitos vs. realidade, arquitetura de agentes.\n- **🛠️ MÉTODOS:** Segurança, engenharia de prompt e contexto, iteração eficaz.\n- **🚀 PRÁTICA:** Ferramentas de ponta, projeto completo do zero ao deploy.'
  },
  {
    id: 'aula1-slide3',
    order: 3,
    title: 'A Revolução do Vibe Coding',
    type: 'text',
    content: '# Vibe Coding: A Nova Era da Programação\n\n**O que é Vibe Coding?**\nÉ uma técnica de programação assistida por IA onde o dev descreve o que deseja em linguagem natural para um LLM, que gera código automaticamente.\n\n**Características:** Conversacional, Iterativo, Criativo, Real.\n\n**Vibe Coding em Números (2025):**\n- **85%** dos devs usam ferramentas de IA.\n- **41%** de todo código escrito em 2024 foi gerado por IA.\n- **90%** dos engenheiros de software usarão assistentes de IA até 2028 (Gartner).'
  },
  {
    id: 'aula1-slide4',
    order: 4,
    title: 'Vibe Coding vs. No-Code vs. Low-Code',
    type: 'text',
    content: '# Entendendo as Diferencas\n\n| Critério | No-Code 🎨 | Low-Code ⚙️ | Vibe Coding 🤖 |\n|---|---|---|---|\n| **Código gerado?** | ❌ Não | ⚠️ Limitado | ✅ Sim, real e editável |\n| **Para quem?** | Não-técnicos | Citizen devs | Desenvolvedores |\n| **Flexibilidade** | Baixa | Média | Alta |\n| **Portabilidade** | Nenhuma | Baixa | Alta |\n\n**O Diferencial do Vibe Coding:** Gera código real que você pode versionar, editar, manter e migrar.'
  },
  {
    id: 'aula1-slide5',
    order: 5,
    title: 'Ecossistema de Ferramentas - Visão Panorâmica',
    type: 'text',
    content: '# O Ecossistema de Vibe Coding\n\n- **🎨 PLATAFORMAS ALL-IN-ONE:**\n  - **Lovable:** Transforma linguagem natural em apps web completos.\n- **🔗 AUTOMAÇÃO & ORQUESTRAÇÃO:**\n  - **n8n:** Workflows inteligentes baseados em nós.\n- **🗄️ BACKEND & BANCO DE DADOS:**\n  - **Supabase:** Alternativa open-source ao Firebase com PostgreSQL.\n- **💻 IDEs & EDITORES ASSISTIDOS:**\n  - TRAE Solo, Warp, Zed, Cursor.\n- **🤖 AGENTES & CLIs:**\n  - Claude Code, Kilo Code.'
  },
  {
    id: 'aula1-slide6',
    order: 6,
    title: 'Plataformas de Desenvolvimento com IA',
    type: 'text',
    content: '# Lovable\n- Plataforma all-in-one para vibe coding.\n- Converte linguagem natural em aplicações web completas.\n- Integração nativa com Supabase e GitHub.\n\n# n8n\n- Ferramenta de automação open source e "fair code".\n- Criação de workflows através de uma interface visual baseada em nós.\n- Ideal para orquestrar agentes de IA.'
  },
  {
    id: 'aula1-slide7',
    order: 7,
    title: 'Backend e Banco de Dados',
    type: 'text',
    content: '# Supabase\n- Backend as a Service open source.\n- Cada projeto é um banco PostgreSQL completo.\n- Inclui autenticação, RLS, APIs REST/GraphQL, Edge Functions, Realtime e Storage.\n- Alternativa ao Firebase com maior controle e portabilidade.'
  },
  {
    id: 'aula1-slide8',
    order: 8,
    title: 'Outras Ferramentas do Ecossistema',
    type: 'text',
    content: '# Z.ai (GLM 4.6)\n- Plataforma de modelos de linguagem com contexto de 200K tokens.\n\n# Manus\n- Agente de IA com interface de objetivos, focado na delegação da intenção.\n\n# MGX (MetaGPT X)\n- No-code AI builder para criar chatbots e sistemas de análise de dados.\n\n# Outros (Aula 04)\n- IDEs: TRAE Solo, Warp, Zed, Cursor.\n- CLIs: Claude Code, Kilo Code.'
  },
  {
    id: 'aula1-slide9',
    order: 9,
    title: 'Riscos Principais do Vibe Coding',
    type: 'text',
    content: '# O que pode dar errado?\n\n- **Código vulnerável:** LLMs podem gerar implementações inseguras.\n- **Shadow AI:** Uso não autorizado de IA, com risco de vazamento de dados.\n- **Segurança de secrets:** Exposição de chaves e tokens em prompts.\n- **Qualidade e manutenibilidade:** Código gerado pode ser difícil de entender e manter.\n- **Lock-in:** Dependência de um único fornecedor de IA.'
  },
  {
    id: 'aula1-slide10',
    order: 10,
    title: 'Shadow AI & Dados Sensíveis',
    type: 'text',
    content: '# Shadow AI: o risco invisível\n\n- **O que é:** Uso de ferramentas de IA sem aprovação de TI/compliance.\n- **Estatísticas:** 59% dos colaboradores usam IA não aprovada; 52% violariam a política para usar IA.\n\n# Mitigação\n- Política clara de IA (NIST AI RMF).\n- Treinamento e sinalização de dados sensíveis.\n- Bloqueios técnicos (DLP, gateway de IA).\n- Canal "oficial" de IA com logging.'
  },
  {
    id: 'aula1-slide11',
    order: 11,
    title: 'Segurança de Secrets & Código Seguro',
    type: 'text',
    content: '# Protegendo segredos e evitando "code smells" de IA\n\n- **NÃO** cole chaves/tokens em prompts.\n- Use **.env / variáveis de ambiente**.\n- Ative **Secret scanning** no GitHub.\n- Use **dados sintéticos** em prompts, nunca PII real.\n- Implemente **RLS (Row-Level Security)** no Supabase.\n- **Revisão humana obrigatória** para código crítico.'
  },
  {
    id: 'aula1-slide12',
    order: 12,
    title: 'Boas Práticas & Governança',
    type: 'text',
    content: '# Boas Práticas: segurança, portabilidade e compliance\n\n| Risco | Prática Recomendada |\n|---|---|\n| **Shadow AI** | Política de IA + treinamento + gateway aprovado |\n| **Secrets em repos** | 12-Factor (.env) + Secret Scanning |\n| **Código inseguro** | Revisão humana + SAST/DAST + testes |\n| **Lock-in** | Preferir padrões abertos; multi-fornecedor |\n| **LGPD/ANPD** | Mapear dados pessoais; base legal; DPIA |\n| **Governança de IA** | Adotar NIST AI RMF |'
  },
  {
    id: 'aula1-slide13',
    order: 13,
    title: 'Segurança de Secrets & LGPD',
    type: 'text',
    content: '# Boas Práticas\n\n- **Nunca versionar .env:** Separe configuração do código (12-Factor App).\n- **Usar .gitignore atualizado:** Mantenha um .env.example como template.\n- **Gerenciar secrets com serviços adequados:** HashiCorp Vault, Doppler, GitHub Secrets.\n- **Dados sintéticos no desenvolvimento:** Evite PII real em prompts para cumprir a LGPD.\n- **Sanitização e mascaramento de logs:** Remova ou mascare informações sensíveis.'
  },
  {
    id: 'aula1-slide14',
    order: 14,
    title: 'Governança de IA & Qualidade do Código',
    type: 'text',
    content: '# Governança de IA\n- Adote um framework como o **NIST AI Risk Management Framework** (Map, Measure, Manage, Govern).\n- Defina políticas claras de uso aceitável e uma lista de ferramentas aprovadas.\n\n# Qualidade do Código\n- **Revisão humana obrigatória:** Trate cada linha de código gerado como potencialmente perigosa.\n- **Análise estática (SAST) e testes:** Combine revisão manual com ferramentas automáticas.\n- **Documentação de decisões arquiteturais (ADRs).**'
  },
  {
    id: 'aula1-slide15',
    order: 15,
    title: 'Prompts Seguros & Visibilidade/Monitoramento',
    type: 'text',
    content: '# Prompts Seguros\n- Minimize dados sensíveis, use placeholders.\n- Peça explicitamente por requisitos de segurança (ex: "use bcrypt para hash de senha").\n- Trate a saída como não confiável até ser revisada.\n\n# Visibilidade e Monitoramento\n- **CASB (Cloud Access Security Brokers):** Descubra o Shadow AI e aplique políticas.\n- **DLP (Data Loss Prevention):** Monitore e bloqueie vazamentos de dados em prompts.'
  },
  {
    id: 'aula1-slide16',
    order: 16,
    title: 'Checklist de Riscos (Material para Download)',
    type: 'text',
    content: '# Checklist de Riscos\n\n- [ ] Políticas de uso de IA documentadas (NIST AI RMF).\n- [ ] Ferramentas aprovadas definidas.\n- [ ] Gestão de secrets implementada (.env, gitignore, etc.).\n- [ ] Dados sensíveis identificados e protegidos.\n- [ ] LGPD/GDPR considerados no tratamento de dados.\n- [ ] Revisão humana obrigatória para código gerado por IA.\n- [ ] Análise de segurança automatizada (SAST, SCA, DAST) no pipeline.\n- [ ] Monitoramento de Shadow AI ativo (CASB/DLP).'
  },
  {
    id: 'aula1-slide17',
    order: 17,
    title: 'Demonstração Prática',
    type: 'text',
    content: '# Demonstração ao vivo (15 minutos)\n\n1. **Lovable:** Criar aplicação simples com prompt em linguagem natural.\n2. **n8n:** Workflow básico conectando duas aplicações.\n3. **Supabase:** Estrutura de banco de dados e autenticação.\n\n**Objetivo:** Mostrar a "sensação" do vibe coding na prática.'
  },
  {
    id: 'aula1-slide18',
    order: 18,
    title: 'Exercício Guiado - Parte 1',
    type: 'text',
    content: '# Exercício: Ciclo Prompt → Saída → Refino\n\n**Contexto:** Criar um app de lista de tarefas com uma ferramenta de vibe coding.\n\n## Etapa 1: Prompt Inicial Simples (10 min)\n- **Escreva:** "Crie um aplicativo de lista de tarefas"\n- **Observe** o resultado gerado.\n- **Discuta:** O que funcionou? O que faltou?'
  },
  {
    id: 'aula1-slide19',
    order: 19,
    title: 'Exercício Guiado - Parte 2',
    type: 'text',
    content: '# Exercício: Ciclo Prompt → Saída → Refino\n\n## Etapa 2: Refinamento com Contexto (15 min)\n- **Refine o prompt:** "Crie um aplicativo de lista de tarefas onde o usuário pode adicionar, editar e marcar tarefas como concluídas. Use cores suaves, fonte legível e botões claros. Inclua contador de tarefas pendentes."\n- **Compare** com o resultado anterior.\n\n## Etapa 3: Iteração de Segurança (10 min)\n- **Adicione:** "Adicione validação de entrada para evitar XSS e limite o tamanho do texto a 200 caracteres."'
  },
  {
    id: 'aula1-slide20',
    order: 20,
    title: 'Entregável da Aula 01',
    type: 'text',
    content: '# Entregável: Mapa Mental\n\nCrie um mapa mental com o tema central **"Vibe Coding"** e as seguintes ramificações:\n\n- O que é **Contexto** (requisitos, constraints, etc.)\n- O que é **Prompt** (a instrução específica)\n- Como Contexto melhora Prompts\n- Riscos de Contexto Insuficiente\n- Boas Práticas aprendidas\n\n**Ferramentas:** Miro, Figma, MindMeister ou desenho manual.'
  },
  {
    id: 'aula1-slide21',
    order: 21,
    title: 'Recap e Próximos Passos',
    type: 'text',
    content: '# Resumo da Aula\n- O que é Vibe Coding e seu ecossistema.\n- Diferenças para No-Code/Low-Code.\n- Riscos de segurança e como mitigá-los.\n- A importância do ciclo: Prompt → Saída → Refino.\n\n# Próxima Aula\n**Aula 02:** Arquitetura de Agente & Engenharia de Contexto'
  },
  {
    id: 'aula1-slide22',
    order: 22,
    title: 'Q&A',
    type: 'text',
    content: '# Perguntas e Respostas\n\nEspaço aberto para dúvidas.'
  },
  {
    id: 'aula1-slide23',
    order: 23,
    title: 'Recursos Adicionais',
    type: 'text',
    content: '# Recursos Adicionais\n\n- Links para documentação das ferramentas.\n- Artigos recomendados sobre vibe coding.\n- Checklist de segurança para download.\n- Planilha "mapa de ferramentas".'
  }
];

export const mockSlidesAula2: Slide[] = [
  {
    id: 'aula2-slide1',
    order: 1,
    title: 'Abertura da Aula 02',
    type: 'text',
    content: '# Arquitetura de Agente & Engenharia de Contexto\n## Evoluindo do Vibe Coding para Sistemas Inteligentes\n\n- **Conceitos avançados de IA autônoma**\n- **Arquitetura de agentes de código**\n- **Engenharia de contexto vs. prompts**\n- **Demonstração prática com n8n**'
  },
  {
    id: 'aula2-slide2',
    order: 2,
    title: 'Objetivos Específicos da Aula',
    type: 'text',
    content: '# O Que Você Vai Dominar Hoje?\n\n## 🧠 COMPREENSÃO CONCEITUAL\n- **Diferenciar** LLMs básicos de Agentes de IA\n- **Entender** a arquitetura completa de agentes\n- **Compreender** o papel de cada componente\n\n## ⚙️ ENGENHARIA AVANÇADA\n- **Dominar** técnicas de Engenharia de Contexto\n- **Aplicar** contextualização rica em prompts\n- **Otimizar** resultados através de contexto estruturado\n\n## 🔗 INTEGRAÇÃO E ORQUESTRAÇÃO\n- **Conhecer** o protocolo MCP (Model Context Protocol)\n- **Compreender** orquestração com n8n\n- **Visualizar** fluxos de trabalho de agentes\n\n## 🛠️ APLICAÇÃO PRÁTICA\n- **Construir** diagramas de arquitetura\n- **Projetar** agentes para casos reais\n- **Avaliar** ferramentas e tecnologias'
  },
  {
    id: 'aula2-slide3',
    order: 3,
    title: 'LLM vs. Agente - Conceitos Fundamentais',
    type: 'text',
    content: '# Entendendo a Evolução: De LLMs a Agentes Autônomos\n\n## LADO ESQUERDO - LLM (Large Language Model):\n\n**Características:**\n- 🗣️ Gerador de texto baseado em probabilidade estatística\n- ⚡ Resposta reativa a prompts\n- 🧠 Processamento de linguagem natural\n- ❌ Sem capacidade de ação autônoma\n- 📝 Foco em geração de conteúdo\n\n**Limitações:**\n- Não acessa ferramentas externas\n- Não mantém estado entre interações\n- Incapaz de executar ações\n- Dependente apenas do prompt atual\n\n## LADO DIREITO - AGENTE DE IA:\n\n**Características:**\n- 🤖 Sistema inteligente autônomo\n- 🧠 LLM como "cérebro" + camadas extras\n- ⚙️ Capaz de planejar e executar ações\n- 🔗 Integração com ferramentas externas\n- 💾 Mantém estado e memória\n- 🎯 Orientado por objetivos\n\n**Capacidades:**\n- Acesso a APIs e sistemas externos\n- Tomada de decisão independente\n- Aprendizado baseado em experiência\n- Ejecução de workflows complexos\n\n💡 **"Um LLM é o cérebro, mas o agente é o sistema nervoso completo"**'
  },
  {
    id: 'aula2-slide4',
    order: 4,
    title: 'Arquitetura de Agente - Visão Geral',
    type: 'text',
    content: '# Os Quatro Pilares da Arquitetura de Agente\n\n## 🧠 CÉREBRO (LLM)\n- Motor de raciocínio\n- Processamento de linguagem\n- Geração de planos de ação\n- Tomada de decisões\n\n## 💾 MEMÓRIA/CACHE\n- Contexto conversacional\n- Histórico de ações\n- Banco de conhecimento\n- Estado persistente\n\n## 🔧 TOOLS (FERRAMENTAS)\n- APIs externas\n- Funções customizadas\n- Acesso a dados\n- Sistemas legados\n\n## 📋 CONTEXTO\n- Informações do projeto\n- Objetivos e restrições\n- Regras organizacionais\n- Dados estruturados\n\n**Fluxos de Dados:**\n- Cérebro ↔ Memória: Consulta e atualização de contexto\n- Cérebro → Tools: Chamadas de ação\n- Contexto → Cérebro: Orientação de decisões\n- Tools → Cérebro: Resultados e feedback\n\n**Exemplo Real:** "Agente de desenvolvimento de software"'
  },
  {
    id: 'aula2-slide5',
    order: 5,
    title: 'Arquitetura Detalhada - Cérebro (LLM)',
    type: 'text',
    content: '# Cérebro: O Motor de Raciocínio do Agente\n\n## 🎯 PROCESSAMENTO DE OBJETIVOS\n- Interpretação de instruções complexas\n- Decomposição em sub-tarefas\n- Priorização de ações\n- Adaptação a mudanças de contexto\n\n## 🧩 GESTÃO DE RECURSOS\n- Seleção de ferramentas apropriadas\n- Coordenação de múltiplas APIs\n- Otimização de chamadas\n- Tratamento de erros e exceções\n\n## 🔍 ANÁLISE E DECISÃO\n- Avaliação de resultados\n- Validação de qualidade\n- Detecção de inconsistências\n- Ajuste de estratégias\n\n## 📝 COMUNICAÇÃO\n- Geração de relatórios de progresso\n- Explicação de decisões\n- Interface com usuários\n- Documentação automática\n\n**Exemplo Prático - Agente de Desenvolvimento:**\n- Objetivo: "Criar um sistema de e-commerce"\n- Decomposição: Frontend → Backend → Database → Deploy\n- Seleção de ferramentas: Lovable → Supabase → GitHub\n- Validação: Testes, segurança, performance'
  },
  {
    id: 'aula2-slide6',
    order: 6,
    title: 'Arquitetura Detalhada - Memória/Cache',
    type: 'text',
    content: '# Memória: A Consciência do Agente\n\n## 📚 MEMÓRIA DE TRABALHO (SHORT-TERM)\n- Contexto da conversa atual\n- Instruções recentes\n- Resultados de ações imediatas\n- Duração: sessão atual\n\n## 💾 MEMÓRIA PERSISTENTE (LONG-TERM)\n- Histórico de projetos similares\n- Preferências do usuário\n- Políticas organizacionais\n- Aprendizados anteriores\n\n## 🔍 MEMÓRIA ESPECIALIZADA (DOMAIN)\n- Conhecimento técnico específico\n- Padrões de código e arquitetura\n- Requisitos regulatórios\n- Boas práticas do setor\n\n## 🎯 MEMÓRIA DE CONTEXTO (PROJECT)\n- Objetivos do projeto atual\n- Restrições e limitações\n- Especificações técnicas\n- Stakeholders e processos\n\n**Implementação Prática:**\n- Vector databases para busca semântica\n- Sistemas de cache distribuído\n- APIs de memória externa\n- Sincronização em tempo real\n\n**Benefícios:**\n- Consciência contínua\n- Aprendizado incremental\n- Personalização\n- Eficiência operacional'
  },
  {
    id: 'aula2-slide7',
    order: 7,
    title: 'Arquitetura Detalhada - Tools (Ferramentas)',
    type: 'text',
    content: '# Tools: Os Sentidos e Ações do Agente\n\n## 🌐 APIS EXTERNAS\n- Serviços de terceiros (Stripe, AWS, Google)\n- Plataformas de desenvolvimento (GitHub, GitLab)\n- Ferramentas de comunicação (Slack, Teams)\n- Bancos de dados e storage\n\n## 💻 FERRAMENTAS DE DESENVOLVIMENTO\n- IDEs e editores de código\n- Sistemas de controle de versão\n- Ferramentas de build e deploy\n- Ambientes de teste e staging\n\n## 🔧 FUNÇÕES CUSTOMIZADAS\n- Validações específicas do negócio\n- Processamento de dados\n- Integrações proprietárias\n- Algoritmos especializados\n\n## 📊 SISTEMAS DE MONITORAMENTO\n- Logs e métricas de performance\n- Alertas e notificações\n- Dashboards de status\n- Auditoria e compliance\n\n**Interface de Comunicação:**\n- Protocolos padronizados (REST, GraphQL, gRPC)\n- Autenticação e autorização\n- Rate limiting e quotas\n- Versionamento de APIs\n\n**Exemplo de Uso:**\n**Agente de E-commerce:**\n- Tools: Supabase (DB), Stripe (pagamento), SendGrid (email)\n- Integração: API calls sequenciais com tratamento de erro\n- Monitoramento: Status de pedidos, logs de pagamento'
  },
  {
    id: 'aula2-slide8',
    order: 8,
    title: 'Arquitetura Detalhada - Contexto',
    type: 'text',
    content: '# Contexto: O DNA do Agente\n\n## 🌍 CONTEXTO GLOBAL\n- Política organizacional\n- Regulamentações do setor\n- Padrões de qualidade\n- Cultura e valores da empresa\n\n## 📋 CONTEXTO DO PROJETO\n- Especificações técnicas\n- Requisitos funcionais\n- Restrições de tempo/custo\n- Arquitetura alvo\n\n## 👥 CONTEXTO DE USUÁRIO\n- Perfil e preferências\n- Histórico de interações\n- Nível de permissão\n- Padrões de uso\n\n## ⚡ CONTEXTO SITUACIONAL\n- Estado atual do sistema\n- Resultados de ações anteriores\n- Condições de erro\n- Feedback do ambiente\n\n**Fontes de Contexto:**\n- Documentação técnica\n- Bases de conhecimento\n- APIs de configuração\n- Entrada do usuário\n- Sistemas externos\n- Histórico de projetos\n\n**Gestão de Contexto:**\n- Hierarquização por relevância\n- Atualização em tempo real\n- Versionamento de políticas\n- Audibilidade de mudanças'
  },
  {
    id: 'aula2-slide9',
    order: 9,
    title: 'Prompt Engineering vs Context Engineering',
    type: 'text',
    content: '# Evolução: Da Engenharia de Prompts à Engenharia de Contexto\n\n| Aspecto | Prompt Engineering | Context Engineering |\n|---|---|---|\n| **FOCO** | Instrução específica | Ambiente completo |\n| **SCOPE** | Solicitação pontual | Projeto global |\n| **DADOS** | Texto do prompt | Base de conhecimento estruturada |\n| **PRECISÃO** | Variável | Alta, com validação |\n| **COMPLEXIDADE** | Simples a média | Média a alta |\n| **MANUTENÇÃO** | Prompts individuais | Sistema de contexto |\n| **ESCALABILIDADE** | Limitada | Alta |\n| **CUSTO COMPUTACIONAL** | Baixo | Médio a alto |\n\n**PROMPT ENGINEERING:**\n- "Crie uma função para calcular média de notas"\n- "Escreva um componente React para login"\n- "Gere um SQL para consultar pedidos"\n\n**CONTEXT ENGINEERING:**\n- Sistema completo de gestão acadêmica\n- Componente com integração a autenticação\n- Dashboard com dados em tempo real e relatórios\n\n**Vantagens da Context Engineering:**\n- 🎯 Maior precisão e relevância\n- 🔄 Consistência entre interações\n- 🛡️ Menor risco de ambiguidade\n- 📈 Resultados mais robustos\n- 🔧 Maior controle sobre qualidade'
  },
  {
    id: 'aula2-slide10',
    order: 10,
    title: 'Técnicas de Engenharia de Contexto',
    type: 'text',
    content: '# Técnicas Avançadas de Context Engineering\n\n## 1️⃣ CONTEXTUALIZAÇÃO ESTRUTURADA\n- Documentação técnica\n- Especificações de requisitos\n- Políticas e procedimentos\n- Exemplos de referência\n\n## 2️⃣ CONTEXTUALIZAÇÃO DINÂMICA\n- Dados em tempo real\n- Estado atual do sistema\n- Feedback de usuários\n- Métricas de performance\n\n## 3️⃣ CONTEXTUALIZAÇÃO INTELIGENTE\n- Aprendizagem por experiência\n- Adaptação automática\n- Personalização progressiva\n- Predição de necessidades\n\n**CONSTRUÇÃO DA BASE:**\n- Coleta de documentação existente\n- Normalização de formatos\n- Indexação semântica\n- Validação de qualidade\n\n**ORQUESTRAÇÃO:**\n- APIs de contexto\n- Sistemas de atualização\n- Versionamento\n- Políticas de acesso\n\n**RECUPERAÇÃO CONTEXTUAL:**\n- Busca semântica\n- Filtragem por relevância\n- Ranqueamento por importância\n- Agregação inteligente\n\n**Ferramentas de Apoio:**\n- Vector databases (Pinecone, Weaviate)\n- Sistemas de knowledge graphs\n- Frameworks de RAG (Retrieval-Augmented Generation)\n- Pipelines de processamento de texto'
  },
  {
    id: 'aula2-slide11',
    order: 11,
    title: 'Exemplos Práticos - Antes e Depois',
    type: 'text',
    content: '# Context Engineering em Ação: Transformações Reais\n\n## EXEMPLO 1: DESENVOLVIMENTO WEB\n\n**ANTES (Prompt Engineering):**\n"Crie um formulário de cadastro"\n\n**DEPOIS (Context Engineering):**\n"Desenvolver um sistema de cadastro de clientes para uma farmácia online seguindo as normas da ANVISA, com validação de CPF/CNPJ, integração com o sistema de estoque via API REST, armazenamento seguro no Supabase com RLS, interface responsiva usando Tailwind CSS, tema escuro/claro, e relatórios automáticos por email para o gerente."\n\n**RESULTADO:**\n- Código mais completo e seguro\n- Conformidade regulatória\n- Integração real com sistemas\n- Interface profissional\n\n## EXEMPLO 2: ANÁLISE DE DADOS\n\n**ANTES:**\n"Gere um gráfico de vendas"\n\n**DEPOIS:**\n"Análise de performance de vendas para uma rede de 15 lojas no Nordeste durante o período de Black Friday 2024, comparando com o mesmo período de 2023, destacando produtos sazonais, impactados por feiras livre, considerando dados de clima (chuvas intensas em novembro), e identificando oportunidades de expansão para 2025."\n\n**RESULTADO:**\n- Análise contextualizada e acionável\n- Consideração de variáveis externas\n- Insights estratégicos\n- Projeções fundamentadas'
  },
  {
    id: 'aula2-slide12',
    order: 12,
    title: 'Boas Práticas - Context Engineering',
    type: 'text',
    content: '# Boas Práticas para Context Engineering\n\n## 📋 ESTRUTURAÇÃO DE CONTEXTO\n\n✅ **HIERARQUIZAÇÃO**\n- Contexto global → Projeto → Situacional\n- Priorizar informações críticas\n- Evitar redundâncias\n\n✅ **QUALIDADE DOS DADOS**\n- Validação de fontes\n- Atualização regular\n- Versionamento de mudanças\n- Auditoria de origem\n\n✅ **GRANULARIDADE ADEQUADA**\n- Contexto suficiente sem excesso\n- Foco no que é relevante\n- Balanceamento precisão/tamanho\n\n## 🔧 IMPLEMENTAÇÃO TÉCNICA\n\n✅ **ARQUITETURA ESCALÁVEL**\n- APIs bem documentadas\n- Cache distribuído\n- Rate limiting\n- Monitoramento de performance\n\n✅ **SEGURANÇA E PRIVACIDADE**\n- Controle de acesso granular\n- Criptografia de dados sensíveis\n- Logs de auditoria\n- Conformidade regulatória\n\n✅ **INTEGRAÇÃO EFICIENTE**\n- APIs padronizadas\n- Tratamento robusto de erros\n- Timeouts e retry logic\n- Fallbacks graciosos\n\n## 📊 GESTÃO E MONITORAMENTO\n\n✅ **MÉTRICAS DE QUALIDADE**\n- Precisão de resultados\n- Tempo de resposta\n- Taxa de acerto\n- Satisfação do usuário\n\n✅ **MELHORIA CONTÍNUA**\n- Feedback loops\n- A/B testing\n- Análise de padrões\n- Otimização iterativa'
  },
  {
    id: 'aula2-slide13',
    order: 13,
    title: 'Model Context Protocol (MCP) - Conceitos',
    type: 'text',
    content: '# Model Context Protocol: O Futuro da Integração\n\n## O QUE É O MCP?\n🔗 Protocolo padronizado para comunicação entre LLMs e ferramentas\n🌐 Permite acesso seguro a dados e funcionalidades externas\n🤝 Desenvolvido pela Anthropic em colaboração com comunidade\n📈 Padrão emergente para agentes de IA\n\n## ARQUITETURA MCP:\n\n**CLIENTE (LLM/Agente)**\n- Solicita recursos e ferramentas\n- Processa resultados\n- Mantém contexto conversacional\n\n**SERVIDOR MCP**\n- Expõe recursos de forma padronizada\n- Gerencia autenticação e autorização\n- Fornece logging e auditoria\n- Implementa políticas de segurança\n\n**RECURSOS MCP**\n- Dados estruturados e não-estruturados\n- Ferramentas e funções\n- APIs de terceiros\n- Sistemas legados\n\n## FLUXO DE COMUNICAÇÃO:\n1. Cliente inicia conexão segura\n2. Servidor expõe recursos disponíveis\n3. Cliente solicita recurso específico\n4. Servidor valida e executa\n5. Resultado retornado com metadados\n6. Contexto atualizado automaticamente\n\n**BENEFÍCIOS:**\n- 🔒 Segurança por padrão\n- 📊 Padronização de interfaces\n- 🚀 Agilidade no desenvolvimento\n- 🔄 Reutilização de componentes'
  },
  {
    id: 'aula2-slide14',
    order: 14,
    title: 'MCP na Prática - Casos de Uso',
    type: 'text',
    content: '# MCP em Ação: Casos de Uso Reais\n\n## 🌐 INTEGRAÇÃO COM SISTEMAS EXTERNOS\n\n**Bancos de Dados**\n- PostgreSQL, MySQL, MongoDB\n- Queries complexas com contexto\n- Sync automático de esquemas\n\n**Sistemas de Controle de Versão**\n- GitHub, GitLab, Bitbucket\n- Análise de código automático\n- Gestão de pull requests\n\n**Ferramentas de Desenvolvimento**\n- IDEs (VS Code, Cursor)\n- CI/CD pipelines\n- Sistemas de monitoramento\n\n## 📊 ANÁLISE E INTELIGÊNCIA\n\n**Business Intelligence**\n- Dashboards automáticos\n- Relatórios personalizados\n- Análise preditiva\n\n**Processamento de Documentos**\n- Extração de informações\n- Análise de sentimentos\n- Classificação automática\n\n## 🔧 AUTOMAÇÃO DE WORKFLOWS\n\n**DevOps e Infraestrutura**\n- Deploy automático\n- Monitoramento de sistemas\n- Gestão de logs\n\n**Marketing e Vendas**\n- Segmentação de clientes\n- Campanhas personalizadas\n- Análise de performance\n\n**VANTAGENS PRÁTICAS:**\n- ⏱️ Redução de 60-80% no tempo de integração\n- 🔒 Segurança padrão com validação\n- 📈 Escalabilidade horizontal\n- 🔄 Reutilização entre projetos'
  },
  {
    id: 'aula2-slide15',
    order: 15,
    title: 'n8n como Orquestrador de Agentes',
    type: 'text',
    content: '# n8n: Plataforma de Orquestração Visual\n\n## O QUE É O n8n?\n🔧 Plataforma de automação open-source\n🎨 Interface visual para criação de workflows\n🔗 400+ integrações pré-configuradas\n🤖 Suporte nativo a agentes de IA\n\n## VANTAGENS PARA AGENTES:\n✅ Interface visual intuitiva\n✅ Drag-and-drop para criação\n✅ Lógica condicional avançada\n✅ Tratamento de erros robusto\n✅ Logging detalhado\n✅ Escalabilidade horizontal\n\n## COMPONENTES PRINCIPAIS:\n\n**NODES (FERRAMENTAS)**\n- HTTP Request: APIs externas\n- Code: JavaScript customizado\n- Webhook: Gatilhos externos\n- OpenAI: Integração com LLMs\n- Database: Conexões diretas\n\n**WORKFLOWS (FLUXOS)**\n- Múltiplas entradas e saídas\n- Processamento paralelo\n- Loops e condições\n- Error handling\n\n## EXEMPLO DE WORKFLOW:\n**Agente de Processamento de Leads:**\n1. Webhook → Novo lead recebido\n2. Code Node → Validação de dados\n3. Database Node → Busca histórico\n4. OpenAI Node → Classificação\n5. Slack Node → Notificação\n6. CRM Node → Atualização'
  },
  {
    id: 'aula2-slide16',
    order: 16,
    title: 'Demonstração Prática - n8n',
    type: 'text',
    content: '# Demonstração: Construindo um Agente no n8n\n\n## AGENDA DA DEMONSTRAÇÃO:\n1️⃣ Configuração inicial (2 min)\n2️⃣ Criação do workflow (5 min)\n3️⃣ Integração com APIs (5 min)\n4️⃣ Teste e refinamento (3 min)\n\n## WORKFLOW DE EXEMPLO:\n**"Agente de Análise de Sentimentos"**\n\n## NODES UTILIZADOS:\n- Webhook Trigger: Recebe reviews de clientes\n- OpenAI Node: Análise de sentimento\n- Database Node: Armazena resultados\n- Email Node: Notifica equipe\n- Slack Node: Alerta em casos críticos\n\n**FLUXO VISUAL:**\n[Webhook] → [OpenAI] → [Database] → [Email + Slack]\n\n## CONFIGURAÇÕES:\n- Autenticação com APIs\n- Rate limiting\n- Error handling\n- Logging detalhado\n\n## RECURSOS DESTACADOS:\n🔗 Interface visual intuitiva\n🔄 Reutilização de nós\n📊 Dashboard de monitoramento\n⚙️ Configurações avançadas\n🛡️ Segurança integrada\n\n**RESULTADO ESPERADO:**\nAutomação completa de análise de sentimentos em reviews de clientes com alertas automáticos e dashboard de métricas.'
  },
  {
    id: 'aula2-slide17',
    order: 17,
    title: 'Exercício Prático - Construindo um Agente (Parte 1)',
    type: 'text',
    content: '# Exercício Guiado: Criando Seu Primeiro Agente\n\n## CASO DE USO: "Agente de Gestão de Tarefas"\n\n**CONTEXTO DO PROJETO:**\nUma startup de tecnologia precisa automatizar a gestão de tarefas de desenvolvimento, integrando com GitHub, Slack e um sistema de gestão de projetos interno.\n\n## COMPONENTES DO AGENTE:\n\n### 🧠 CÉREBRO (LLM)\n- **Objetivo:** Analisar e priorizar tarefas\n- **Entrada:** Issues do GitHub + contexto do projeto\n- **Saída:** Plano de ação estruturado\n\n### 💾 MEMÓRIA\n- Histórico de tarefas similares\n- Preferências da equipe\n- Padrões de projeto\n- Métricas de performance\n\n### 🔧 TOOLS\n- GitHub API: Issues e pull requests\n- Slack API: Notificações da equipe\n- Database: Armazenamento de dados\n- Email: Relatórios automáticos\n\n### 📋 CONTEXTO\n- Políticas da startup\n- Metodologia de desenvolvimento\n- SLA de entrega\n- Stack tecnológico'
  },
  {
    id: 'aula2-slide18',
    order: 18,
    title: 'Exercício Prático - Construindo um Agente (Parte 2)',
    type: 'text',
    content: '# Exercício Guiado: Criando Seu Primeiro Agente\n\n## ETAPAS DO EXERCÍCIO:\n\n### 1️⃣ DEFINIÇÃO DO AGENTE (5 min)\n- Descrever objetivos específicos\n- Identificar ferramentas necessárias\n- Definir critérios de sucesso\n\n### 2️⃣ ARQUITETURA (5 min)\n- Mapear os quatro componentes\n- Definir fluxos de dados\n- Estabelecer interfaces\n\n### 3️⃣ IMPLEMENTAÇÃO BÁSICA (7 min)\n- Criar estrutura mínima\n- Implementar componentes core\n- Testar funcionalidades básicas\n\n### 4️⃣ REFINAMENTO (3 min)\n- Adicionar melhorias\n- Otimizar performance\n- Validar resultados\n\n## ENTREGÁVEL:\n**Diagrama completo de arquitetura + código base do agente**\n\n## TEMPLATE DE DIAGRAMA DE ARQUITETURA:\n\n**COMPONENTES OBRIGATÓRIOS:**\n- 🧠 CÉREBRO (LLM)\n- 💾 MEMÓRIA/CACHE\n- 🔧 TOOLS (FERRAMENTAS)\n- 📋 CONTEXTO\n\n**FLUXO DE DADOS:**\nInput → [Processo] → Output\n\n**INTERFACES EXTERNAS:**\n- APIs utilizadas\n- Protocolos\n- Segurança\n\n**MÉTRICAS DE SUCESSO**'
  },
  {
    id: 'aula2-slide19',
    order: 19,
    title: 'Template de Diagrama de Arquitetura',
    type: 'text',
    content: '# Template: Diagrama de Arquitetura de Agente\n\n## 🧠 CÉREBRO (LLM)\n- **Modelo específico:** _______________\n- **Função principal:** _______________\n- **Capacidades:** ___________________\n\n## 💾 MEMÓRIA/CACHE\n- **Tipo:** __________________________\n- **Estrutura:** ______________________\n- **Política de retenção:** ____________\n\n## 🔧 TOOLS (FERRAMENTAS)\n1. _______________________________\n2. _______________________________\n3. _______________________________\n4. _______________________________\n\n## 📋 CONTEXTO\n- **Fontes de dados:** ________________\n- **Políticas aplicáveis:** ____________\n- **Restrições:** ____________________\n\n## FLUXO DE DADOS:\nInput → [Processo] → Output\n\n1. _______________________________\n2. _______________________________\n3. _______________________________\n\n## INTERFACES EXTERNAS:\n- **APIs utilizadas:** ________________\n- **Protocolos:** ____________________\n- **Segurança:** ____________________\n\n## MÉTRICAS DE SUCESSO:\n- _______________________________\n- _______________________________\n- _______________________________\n\n**EXEMPLO DE PREENCHIMENTO:**\n[Template preenchido para "Agente de QA Automatizado"]'
  },
  {
    id: 'aula2-slide20',
    order: 20,
    title: 'Critérios de Avaliação',
    type: 'text',
    content: '# Avaliação: Critérios e Expectativas\n\n## RUBRICA DE AVALIAÇÃO:\n\n### 🎯 PRECISÃO TÉCNICA (25%)\n**Excelente (23-25):**\n- Compreensão correta dos 4 componentes\n- Arquitetura tecnicamente sólida\n- Justificativas fundamentadas\n\n**Bom (18-22):**\n- Compreensão geral correta\n- Pequenos erros de implementação\n- Justificativas adequadas\n\n**Satisfatório (13-17):**\n- Compreensão básica\n- Alguns conceitos confusos\n- Justificativas superficiais\n\n### 📊 CLAREZA VISUAL (20%)\n**Excelente (18-20):**\n- Diagrama claro e profissional\n- Organização lógica\n- Visual atrativo\n\n**Bom (14-17):**\n- Diagrama compreensível\n- Organização adequada\n- Visual padrão\n\n**Satisfatório (10-13):**\n- Diagrama básico\n- Organização confusa\n- Visual simples\n\n### 🚀 APLICABILIDADE PRÁTICA (15%)\n**Excelente (14-15):**\n- Arquitetura implementável\n- Casos de uso claros\n- Solução inovadora\n\n**TOTAL:** ___/60 pontos\n\n**CONSELHOS PARA SUCESSO:**\n- Foque na clareza da comunicação\n- Use exemplos concretos\n- Justifique suas escolhas\n- Pense na implementação real'
  },
  {
    id: 'aula2-slide21',
    order: 21,
    title: 'Recap e Síntese',
    type: 'text',
    content: '# Síntese: Do Conceito à Prática\n\n## CONCEITOS-CHAVE APRENDIDOS:\n\n### 🧠 LLM ≠ AGENTE\n- LLM: Gerador de texto reativo\n- Agente: Sistema autônomo completo\n- Arquitetura: Cérebro + Memória + Tools + Contexto\n\n### ⚙️ ENGENHARIA EVOLUTIVA\n- Prompt Engineering → Context Engineering\n- De instruções → Ambientes completos\n- De pontual → Sistemático\n\n### 🔗 ORQUESTRAÇÃO INTELIGENTE\n- MCP: Padrão emergente de integração\n- n8n: Visual workflow automation\n- Agentes: Coordenação de tarefas complexas\n\n## IMPACTOS PRÁTICOS:\n- 🚀 60-80% redução no tempo de desenvolvimento\n- 🎯 Resultados mais precisos e contextualizados\n- 🔄 Automação de processos complexos\n- 📈 Escalabilidade e reutilização\n\n## PRÓXIMOS PASSOS:\n- Aplicar conceitos em projetos reais\n- Explorar ferramentas MCP disponíveis\n- Construir agentes para casos específicos\n- Compartilhar aprendizados na comunidade'
  },
  {
    id: 'aula2-slide22',
    order: 22,
    title: 'Preview da Próxima Aula',
    type: 'text',
    content: '# Próxima Aula: Comparação de LLMs para Vibe Coding\n\n## TEMA: "Qual LLM Escolher para Seu Projeto?"\n\n### CONTEÚDO DA AULA 03:\n- 🧠 Comparação técnica: GLM 4.6 vs Claude vs GPT-4\n- 💰 Análise de custos e performance\n- 📊 Benchmarks específicos para vibe coding\n- 🎯 Recomendações por tipo de projeto\n- 🛠️ Integração prática com ferramentas\n\n### DIFERENCIAIS:\n- Testes práticos com diferentes modelos\n- Métricas reais de performance\n- Estudos de caso de projetos reais\n- Calculator de custo-benefício\n\n### PREVIEW VISUAL:\n- Tabela comparativa interativa\n- Gráficos de performance\n- Exemplos de outputs de cada LLM\n- Matrix de decisão prática\n\n### DESAFIO PARA CASA:\nExperimentar diferentes LLMs no mesmo prompt básico e comparar resultados.'
  },
  {
    id: 'aula2-slide23',
    order: 23,
    title: 'Recursos Adicionais e Contatos',
    type: 'text',
    content: '# Recursos para Aprofundamento\n\n## 📚 DOCUMENTAÇÃO OFICIAL:\n- MCP Protocol: modelcontextprotocol.io\n- n8n Documentation: docs.n8n.io\n- Anthropic Claude: docs.anthropic.com\n- OpenAI Platform: platform.openai.com\n\n## 🛠️ FERRAMENTAS PARA EXPLORAR:\n- Vector Databases: Pinecone, Weaviate\n- Frameworks RAG: LangChain, LlamaIndex\n- Agent Frameworks: CrewAI, AutoGen\n- Visual Tools: n8n, Node-RED\n\n## 📖 LEITURAS RECOMENDADAS:\n- "Building LLM Applications for Production" - Chip Huyen\n- "The Prompt Engineer\'s Guide to Context Engineering"\n- Case studies de agentes em produção\n\n## 🎓 COMUNIDADE:\n- Discord do curso: [link]\n- GitHub repository: [link]\n- LinkedIn: [professor]\n- Email: [contato]\n\n## AVALIAÇÃO:\nEnviar diagrama de arquitetura até [data] via Discord.\n\n**OBRIGADO!**\nTransformando conceitos em soluções inteligentes'
  }
];

export const mockSlideDecks: SlideDeck[] = [
  {
    id: 'deck-aula1',
    lessonId: 'aula1',
    title: 'Aula 01: Fundamentos do Vibe Coding & Riscos',
    slides: mockSlidesAula1,
    currentSlideIndex: 0
  },
  {
    id: 'deck-aula2',
    lessonId: 'aula2',
    title: 'Aula 02: Arquitetura de Agente & Engenharia de Contexto',
    slides: mockSlidesAula2,
    currentSlideIndex: 0
  }
];
