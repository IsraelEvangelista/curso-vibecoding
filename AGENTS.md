# AGENTS.md - Orquestrador de Contexto Principal

## Visão Geral do Projeto

**Projeto:** Curso Vibe Coding - Plataforma de Aprendizado
**Tecnologia:** React, Vite, TypeScript, Tailwind CSS, Supabase
**Objetivo:** Criar uma plataforma web interativa e gamificada para o ensino de Vibe Coding, com controle de acesso, quizzes e um hub comunitário.

### Arquitetura Técnica
- **Frontend:** React.js com TypeScript
- **Backend:** Supabase
- **Database:** Supabase (PostgreSQL)
- **State Management:** React Context API + useState/useEffect
- **Build Tool:** Vite.js
- **Package Manager:** npm
- **Styling:** Tailwind CSS com tema customizado (dual theme: dark/light)
- **Routing:** React Router v6 (createBrowserRouter + RouterProvider)

## Agentes Especializados e Personas

### @orchestrator (Principal)
**Função:** Orquestrador principal do contexto e coordenador de tarefas

### @analyst
**Função:** Análise de requisitos e especificações

### @dev
**Função:** Desenvolvimento e implementação

### @architect
**Função:** Design arquitetural e técnico

### @qa
**Função:** Controle de qualidade e testes

## Instruções Críticas e Regras

### Convenções de Código
- **Nomenclatura:** PascalCase para componentes, camelCase para funções/variáveis
- **TypeScript:** Strict mode habilitado, tipagem explícita obrigatória
- **Componentes:** Funcionais com hooks (useState, useEffect, custom hooks)
- **CSS:** Tailwind CSS com classes utilitárias + globals.css para temas
- **Imports:** Organizados por tipo (libs externas → componentes → utils → tipos)
- **ESLint:** eslint:recommended + react/recommended + react-hooks/recommended + jsx-a11y/recommended
- **Lint rules críticas:**
  - Hooks apenas em componentes funcionais/custom hooks
  - Listas com key estável (nunca índice)
  - Acessibilidade obrigatória (alt, labels, roles)
  - Links externos com rel="noopener noreferrer"
  - Proibido variáveis/imports não usados
  - Auto-fix obrigatório após edições

### Estrutura de Arquivos Padrão
```
src/
├── components/
│   ├── ui/           # Componentes base (Button, Card, Avatar, etc.)
│   ├── features/     # Features principais (Dashboard, Aulas, Ranking, Comunidade)
│   └── layout/       # Layout components (Header, Sidebar)
├── lib/
│   ├── theme.ts      # Sistema de temas (applyTheme, getStoredTheme)
│   ├── mockData.ts   # Dados mockados para desenvolvimento
│   └── utils.ts      # Utilitários gerais
├── styles/
│   └── globals.css   # Estilos globais + temas customizados
├── types/            # Definições de tipos TypeScript
└── App.tsx           # Entry point com routing
```

## Contexto dos Arquivos de Documentação

- **.trae/documents/PRD.md:** Documento de Requisitos do Produto, detalhando o escopo e as funcionalidades.
- **Docs/PROGRESS.md:** Rastreamento do progresso e roadmap do projeto.
- **Docs/WORKFLOWS.md:** Metodologia de desenvolvimento (PREVC) e fluxos de trabalho.
- **Docs/BUGS.md:** Registro de bugs, soluções e impactos.
- **Docs/ementa.md:** Ementa completa do curso com todas as 8 aulas estruturadas.

## Estado Atual do Projeto (Última Atualização: 2025-01-26)

### ✅ Implementações Concluídas

#### 1. Sistema de Temas Dual (Dark/Light)
- **Cores personalizadas:**
  - **Tema escuro:** Fundo preto puro (#000000) + acentos verde neon (#22c55e, #4ade80)
  - **Tema claro:** Fundo branco (#ffffff) + acentos violeta (#a855f7, #9333ea)
- **Seletores CSS:** `html.dark` e `html:not(.dark)` para alternância via classe no `<html>`
- **Persistência:** localStorage com função `applyTheme()` em `lib/theme.ts`

#### 2. Componentes de Interface Implementados

##### Dashboard
- Cards de estatísticas com efeito 3D elevado
- Ranking top 3 alunos com indicadores de progresso
- Saudação personalizada com nome do usuário (efeito glow text)
- Fundos consistentes por tema (preto/branco)

##### Aulas
- 8 cards de aulas baseados em `Docs/ementa.md`
- Sistema de expansão/colapso de descrições (apenas 1 aberto por vez)
- **Descrições hierárquicas:**
  - Tópicos principais: marcador `▸` (seta)
  - Subtópicos indentados: marcador `•` (bolinha)
  - Formato de dados: `;` separa tópicos, `|` separa subtópicos
- Botões temáticos:
  - "Ver descrição" (btn-outline): fundo preto + texto verde (dark) / fundo branco + texto violeta (light)
  - "Entrar na Aula" (btn-neon): gradiente verde neon (dark) / gradiente violeta neon (light)
- Seções por aula: Conteúdo, Quiz (10 questões), Desafio Prático

##### Ranking
- Pódio top 3 com cards especiais (medalhas: coroa/prata/bronze)
- Tabela completa de classificação com todos os alunos
- Colunas: Posição, Aluno, Pontos (Total/Presença/Quizzes/Desafios), Tendência
- Cards de estatísticas: Total de Alunos, Média de Pontos, Pontuação Máxima, Alunos em Destaque

##### Comunidade
- Tabs: Fórum de Dúvidas + Galeria de Projetos
- Fórum: cards de tópicos com respostas, tags, moderadores
- Galeria: grid de projetos com screenshots, likes, comentários
- Botões de ação (btn-neon): "+ Novo Tópico", "+ Compartilhar Projeto"
- Estatísticas: Tópicos no Fórum, Projetos na Galeria, Membros Ativos

#### 3. Sistema de Estilo Global (globals.css)

##### Botões Customizados
- **`.btn-neon`:** Gradiente neon com efeito 3D e sombras inset/externas
  - Light: violeta (#a855f7 → #9333ea)
  - Dark: verde (#22c55e → #16a34a)
  - Hover: translateY(-2px) + sombras ampliadas

- **`.btn-outline`:** Fundo sólido + borda temática + texto colorido
  - Light: fundo branco + borda/texto violeta
  - Dark: fundo preto + borda/texto verde
  - Hover: translateY(-2px) + fundo levemente alterado

##### Cards com Efeito Floating
- **`.card`:** Efeito 3D com sombras temáticas
  - Pseudo-elemento `::after` para sombra de hover otimizada
  - Hover: translateY(-8px) + scale(1.01)
  - Sombras coloridas por tema (violeta/verde)

#### 4. Routing e Navegação
- React Router v6 com `createBrowserRouter` + `RouterProvider`
- Future flags habilitadas para compatibilidade v7
- Rotas: `/`, `/aulas`, `/ranking`, `/comunidade`

#### 5. Validações e Qualidade
- ✅ ESLint configurado e validado (0 warnings, 0 errors)
- ✅ TypeScript strict mode (0 erros de tipagem)
- ✅ Acessibilidade: alt em imagens, labels, roles adequados
- ✅ Performance: CSS otimizado com pseudo-elementos para animações

### 🎨 Design System

#### Paleta de Cores
```css
/* Tema Escuro */
--bg-primary: #000000 (preto puro)
--accent-primary: #22c55e (verde)
--accent-secondary: #4ade80 (verde claro)
--text-primary: #ffffff

/* Tema Claro */
--bg-primary: #ffffff (branco)
--accent-primary: #a855f7 (violeta)
--accent-secondary: #9333ea (violeta escuro)
--text-primary: #111827
```

#### Tipografia
- Títulos: font-bold, text-3xl/4xl
- Corpo: text-sm/base
- Glow effect em títulos principais (text-shadow temático)

#### Espaçamentos
- Cards: p-6, rounded-xl
- Gaps: gap-4/6 para grids
- Margens: mb-8 para seções principais

## Pendências e Próximos Passos

### Session TODOs
- [ ] Implementar integração com Supabase (autenticação + banco de dados)
- [ ] Criar páginas de Quiz com sistema de pontuação
- [ ] Implementar sistema de Desafios Práticos
- [ ] Adicionar funcionalidade de "Entrar na Aula" (navegação para conteúdo)
- [ ] Implementar criação de tópicos no Fórum
- [ ] Implementar upload de projetos na Galeria
- [ ] Testes E2E com Playwright/Cypress
- [ ] Deploy em Vercel/Render

### Dependencies Críticas
- Supabase SDK configurado e autenticação funcional
- Modelagem de dados no Supabase (tabelas: users, lessons, quizzes, forum_topics, gallery_posts)
- Policies de RLS (Row Level Security) no Supabase

## Uso do MCP ByteRover

### Estratégia de Memória Persistente
1. **Registrar decisões arquiteturais** importantes (como sistema de temas dual e estrutura de componentes).
2. **Salvar soluções complexas** para reuso (ex: sistema de descrições hierárquicas em Aulas).
3. **Documentar padrões** de código encontrados (ex: seletores CSS `html.dark` para temas).
4. **Armazenar contexto** de features desenvolvidas (Dashboard, Aulas, Ranking, Comunidade).

## Regras de Engajamento

### Para Novas Sessões
1. **Ler AGENTS.md** primeiro para contexto global.
2. **Consultar .trae/documents/PRD.md** para o escopo do projeto.
3. **Consultar Docs/PROGRESS.md** para status atual.
4. **Verificar Docs/ementa.md** para estrutura de conteúdo das aulas.

### Para Tomada de Decisão
1. **Analisar impacto** na arquitetura existente (não quebrar sistema de temas).
2. **Consultar documentação** relevante (PRD, ementa, PROGRESS).
3. **Registrar decisão** no ByteRover para persistência.
4. **Atualizar AGENTS.md** com mudanças significativas.

### Para Comunicação
- **Ser direto e técnico** nas implementações.
- **Documentar razões** para decisões importantes.
- **Referenciar arquivos** específicos quando aplicável.
- **Validar com lint + typecheck** antes de finalizar.

## Referências e Links Rápidos

### Links Locais
- `AGENTS.md` - Este arquivo (contexto global)
- `.trae/documents/PRD.md` - Requisitos do produto
- `Docs/PROGRESS.md` - Status e roadmap
- `Docs/WORKFLOWS.md` - Metodologia PREVC
- `Docs/BUGS.md` - Issues conhecidos
- `Docs/ementa.md` - Estrutura do curso

### Componentes Principais
- `src/components/features/Dashboard.tsx` - Painel principal
- `src/components/features/Aulas.tsx` - Interface de aulas
- `src/components/features/Ranking.tsx` - Sistema de ranking
- `src/components/features/Comunidade.tsx` - Fórum + Galeria
- `src/styles/globals.css` - Temas e estilos globais
- `src/lib/theme.ts` - Sistema de alternância de temas

---

**Importante:** Este arquivo serve como orquestrador principal e deve ser mantido em sincronia com o MCP ByteRover para garantir consistência do contexto através das sessões.

[byterover-mcp]

[byterover-mcp]

You are given two tools from Byterover MCP server, including
## 1. `byterover-store-knowledge`
You `MUST` always use this tool when:

+ Learning new patterns, APIs, or architectural decisions from the codebase
+ Encountering error solutions or debugging techniques
+ Finding reusable code patterns or utility functions
+ Completing any significant task or plan implementation

## 2. `byterover-retrieve-knowledge`
You `MUST` always use this tool when:

+ Starting any new task or implementation to gather relevant context
+ Before making architectural decisions to understand existing patterns
+ When debugging issues to check for previous solutions
+ Working with unfamiliar parts of the codebase
