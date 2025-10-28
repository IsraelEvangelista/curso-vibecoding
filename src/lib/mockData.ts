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
    content: '# Vibe Coding\n## Programação Assistida por IA: Do Conceito ao Deploy\n\n- **8 encontros práticos**\n- **Outubro/Novembro 2025**\n- **20h00 às 22h30** (com laboratório aberto até 23h00)'
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

export const mockSlideDecks: SlideDeck[] = [
  {
    id: 'deck-aula1',
    lessonId: 'aula1',
    title: 'Aula 01: Fundamentos do Vibe Coding & Riscos',
    slides: mockSlidesAula1,
    currentSlideIndex: 0
  }
];
