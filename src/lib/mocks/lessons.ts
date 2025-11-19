import { Lesson } from "@/types";
import { mockQuizQuestions, mockQuizAttempts } from "./quiz";

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
  {
    id: "aula4",
    title: "Aula 04: Ambientes: TRAE Solo, Warp + CLIs (Claude Code & Kilo Code)",
    description:
      "Setup guiado de IDE/CLIs; Integração com editor/Zed; Micro-benchmark: Prompts e Tarefas de código.",
    order: 4,
    isLocked: false,
    duration: "55 min",
    content: {
      explanation: [
        "Configuração de ambiente de desenvolvimento",
        "Ferramentas CLI e integração com IDE",
      ],
      examples: ["Setup completo", "Benchmark"],
    },
    quiz: { id: "quiz4", questions: mockQuizQuestions, maxAttempts: 3, attempts: [] },
    challenge: {
      id: "challenge4",
      title: "Desafio Ambiente",
      description: "Configurar ambiente completo com CLIs e integração a editor",
      requirements: ["Instalar CLIs", "Integrar editor", "Executar micro-benchmarks"],
      examples: ["Relatório de benchmark"],
    },
  },
  {
    id: "aula5",
    title: "Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)",
    description:
      "Fluxo Git/SSH/PR; Segurança e LGPD (.env, gitignore, dados sintéticos); PRD com BMAD; Critérios de aceite.",
    order: 5,
    isLocked: false,
    duration: "45 min",
    content: {
      explanation: ["Git e GitHub", "Segurança", "BMAD"],
      examples: ["Fluxo completo", "PRD exemplo"],
    },
    quiz: { id: "quiz5", questions: mockQuizQuestions, maxAttempts: 3, attempts: [] },
    challenge: {
      id: "challenge5",
      title: "Desafio Git",
      description: "Implementar fluxo Git completo com PRs e políticas",
      requirements: ["Configurar SSH", "Fluxo de branches", "Commits semânticos"],
      examples: ["PR de exemplo"],
    },
  },
  {
    id: "aula6",
    title: "Aula 06: Projeto Dirigido I — do PRD a épicos/tarefas",
    description:
      "Refino do PRD; Decomposição em épicos/tarefas; Priorização; Organização do board.",
    order: 6,
    isLocked: false,
    duration: "60 min",
    content: {
      explanation: ["Decomposição de projetos", "Priorização"],
      examples: ["Board exemplo", "Épicos"],
    },
    quiz: { id: "quiz6", questions: mockQuizQuestions, maxAttempts: 3, attempts: [] },
    challenge: {
      id: "challenge6",
      title: "Desafio Planejamento",
      description: "Criar plano completo com épicos e tarefas",
      requirements: ["Definir épicos", "Quebrar tarefas", "Priorizar backlog"],
      examples: ["Quadro Kanban"],
    },
  },
  {
    id: "aula7",
    title: "Aula 07: Projeto Dirigido II — implementação assistida por IA",
    description:
      "Implementação com CLIs + GLM 4.6; Geração de testes; Observabilidade mínima; Modelagem de dados.",
    order: 7,
    isLocked: false,
    duration: "65 min",
    content: {
      explanation: ["Implementação assistida", "Testes", "Observabilidade"],
      examples: ["Código exemplo", "Testes exemplo"],
    },
    quiz: { id: "quiz7", questions: mockQuizQuestions, maxAttempts: 3, attempts: [] },
    challenge: {
      id: "challenge7",
      title: "Desafio Implementação",
      description: "Implementar projeto com cobertura mínima de testes",
      requirements: ["Implementar módulos", "Criar testes", "Coletar métricas"],
      examples: ["Relatório de execução"],
    },
  },
  {
    id: "aula8",
    title: "Aula 08: Integração ao Supabase & Deploy",
    description:
      "Modelagem/tabelas/policies/RLS no Supabase; Boas práticas (.env, logs); Deploy (Vercel/Render).",
    order: 8,
    isLocked: false,
    duration: "50 min",
    content: {
      explanation: ["Supabase", "Deploy", "Boas práticas"],
      examples: ["Setup Supabase", "Deploy exemplo"],
    },
    quiz: { id: "quiz8", questions: mockQuizQuestions, maxAttempts: 3, attempts: [] },
    challenge: {
      id: "challenge8",
      title: "Desafio Deploy",
      description: "Realizar deploy completo com políticas RLS equilibradas",
      requirements: ["Modelar tabelas", "Aplicar RLS", "Configurar deploy"],
      examples: ["Checklist de produção"],
    },
  },
];
