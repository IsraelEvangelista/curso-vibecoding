# AGENTS.md - Orquestrador de Contexto Principal

## Visão Geral do Projeto

**Projeto:** Curso Vibe Coding - Plataforma de Aprendizado  
**Tecnologias:** React, Vite, TypeScript, Tailwind CSS, Supabase  
**Objetivo:** Construir uma plataforma web interativa e gamificada para o ensino de Vibe Coding, com controle de acesso progressivo, quizzes avaliativos, desafios práticos e um hub comunitário.

### Arquitetura Técnica
- **Frontend:** React.js + TypeScript
- **Backend / DB:** Supabase (PostgreSQL + Auth + Storage)
- **Estado:** React Context API + hooks
- **Build:** Vite.js
- **Estilos:** Tailwind CSS com suporte dual-theme (dark/light)
- **Roteamento:** React Router v6 (createBrowserRouter + RouterProvider)
- **Pacotes:** npm

## Agentes e Personas
- **@orchestrator** – coordena o contexto e valida prioridades.
- **@analyst** – interpreta PRD, requisitos e visão de produto.
- **@dev** – implementação de features e correções.
- **@architect** – define padrões técnicos e de UX.
- **@qa** – garante qualidade, cenários de teste e validações.

## Convenções de Código
- PascalCase para componentes, camelCase para variáveis/funções.
- TypeScript em strict mode com tipos explícitos.
- Componentes funcionais + hooks (useState, useEffect, custom hooks).
- Imports agrupados: libs externas → componentes → utils → tipos.
- Tailwind para estilização; globals.css concentra tokens e utilidades.
- ESLint: recommended + react + react-hooks + jsx-a11y.
- Regras rígidas: sem hooks fora de componentes, keys estáveis, acessibilidade (alt/aria-*), links externos com `rel="noopener noreferrer"`, zero imports/variáveis não usados e `overflow-y-auto` nas páginas principais.

## Estrutura Padrão
```
src/
├── components/
│   ├── ui/            # Base (Button, Card, Avatar, HelpModal, Modal, etc.)
│   ├── features/      # Features (Dashboard, Aulas, Ranking, Comunidade, Quiz*, Slide*)
│   └── layout/        # Header, Sidebar, Layout shell
├── lib/               # theme.ts, mockData.ts, utils.ts, constants.ts
├── pages/             # Rotas (DashboardPage, AulasPage, AulaSlidePage, QuizPage, QuizQuestionPage, etc.)
├── styles/            # globals.css
├── types/             # Tipagens compartilhadas
└── App.tsx            # RouterProvider + temas globais
```

## Documentação de Referência
- `.trae/documents/PRD.md` – requisitos oficiais.
- `Docs/PROGRESS.md` – status e roadmap.
- `Docs/WORKFLOWS.md` – metodologia PREVC.
- `Docs/BUGS.md` – issues registradas.
- `Docs/ementa.md` – ementa completa das aulas.

## Estado Atual (Atualizado em 2025-01-28)

### 1. Sistema de Temas Dual
- Paletas customizadas: dark (preto + verde neon) e light (branco + violeta).
- Alternância por classe (`html.dark`) com `applyTheme()` armazenando no localStorage.

### 2. Componentes de Interface
- **Dashboard:** saudação personalizada, cartões de progresso, pontuação total, aulas concluídas e média por aula. O antigo ranking top 3 foi substituído por uma *grade de desempenho por aula* baseada em `mockLessonScores`, exibindo pontuação ponderada de presença, quiz e desafio conforme os pesos do PRD (1.2 / 1.0 / 1.5).
- **Aulas:** cards para as 10 aulas, descrição hierárquica (tópicos/subtópicos), expansão única, botões "Ver descrição" e "Entrar na Aula", modal (`Modal.tsx`) com atalhos para slides/quiz/desafio.
- **Ranking:** pódio com top 3, tabela completa, estatísticas (total de alunos, média, máximo) e tendência.
- **Comunidade:** fórum + galeria com tabs, cards, CTAs neon e indicadores.
- **Layout Geral:** Header com navegação principal, troca de tema e atalhos para o hub comunitário.

### 3. Sistema de Slides (ATUALIZADO)
- **Componentes:** `SlideHeader.tsx`, `SlideViewer.tsx` e `AulaSlidePage.tsx` compõem o fluxo de estudo.
- **Navegação:** Atalhos de teclado (`←`, `→`, `Esc`), barra de progresso com indicadores visuais e botões para Quiz/Desafio.
- **Rodapé Fixo:** Indicadores de progresso fixados no bottom da página (z-index 11000) com informação "Slide X de Y".
- **Layout Responsivo:** Container flex com `flex-1` para conteúdo e rodapé separado, garantindo scroll apenas no conteúdo.

#### 3.1. Implementação da Aula 01 (23 Slides Completos)
- **Fonte de Dados:** `mockSlidesAula1` em `src/lib/mockData.ts` (linhas 510-672) contendo 23 slides detalhados.
- **Carregamento:** `AulaSlidePage.tsx` importa `mockSlideDecks` e busca pelo `lessonId` usando `.find()`.
- **Renderização de Conteúdo:**
  - **Markdown Avançado:** Suporte para headers (#, ##, ###), listas (-, *), blockquotes (>), code blocks (\`\`\`), inline code (\`), bold (\*\*), italic (\*).
  - **Tabelas:** Processamento customizado com `processMarkdownTable()` que:
    - Detecta tabelas markdown (linhas iniciando/terminando com |)
    - Ignora linhas separadoras (---|---)
    - Gera HTML com `<table>`, `<th>` (headers com bg cinza) e `<td>` (células normais)
    - Aplica bordas, padding e estilo dark mode
  - **Listas sem Marcadores Duplicados:** Usa `list-none` e remove bullets adicionais do regex, respeitando emojis/ícones originais do conteúdo.

#### 3.2. Padrão de Conteúdo dos Slides
- **Estrutura:** Cada slide possui `id`, `order`, `title`, `type` ('text' | 'code'), `content` (markdown).
- **Tipos:**
  - `text`: Conteúdo explicativo com formatação rica
  - `code`: Exemplos de código com syntax highlighting via `<pre><code>`
- **Futuras Melhorias:** Suporte para imagens (`type: 'image'`) e vídeos (`type: 'video'`) será adicionado conforme necessário.

#### 3.3. Padrão para Novas Aulas
- Seguir estrutura de `mockSlidesAula1` em `mockData.ts`.
- Manter consistência de markdown: headers, listas, tabelas, code blocks.
- Adicionar ao array `mockSlideDecks` com `lessonId` correspondente.
- Testar renderização de tabelas e listas antes de commit.

### 4. Sistema de Quiz Interativo
- **Rotas:** `/aula/:id/quiz` (card das rodadas) e `/aula/:id/quiz/:roundId` (questões).
- **Componentes:** `QuizPage.tsx`, `QuizQuestionPage.tsx`, `QuizHeader.tsx`, `QuizQuestionViewer.tsx`, `QuizQuestionViewerSimple.tsx` e `QuizResultModal.tsx` cuidam de salvamento automático, timer, cálculo de nota mínima (70%), modal de resultado e persistência das tentativas (`QuizRoundAttempt`).
- **Persistência:** respostas parciais e tentativas registradas no `localStorage` (`quiz_<lessonId>_<roundId>_*`).
- **Progressão:** rodadas bloqueadas até aprovação da anterior.

### 5. Estilo Global
- `globals.css` mantém tokens de cores, animações, botões (`.btn-neon`, `.btn-outline`), cards flutuantes e helpers para dark/light.

## Pendências e Próximos Passos
- [ ] Integração completa com Supabase (auth, quizzes, fórum, galeria, presença).
- [ ] Sistema de desafios práticos com submissão/avaliação (placeholder atual).
- [ ] Criação de tópicos no fórum e upload na galeria (mock hoje).
- [ ] Testes E2E (Playwright/Cypress).
- [ ] Deploy (Vercel/Render) e CI/CD.
- [ ] Normalização definitiva de encoding em arquivos legados.

## Dependências Críticas
- Supabase SDK + políticas RLS (`users`, `lessons`, `quizzes`, `forum_topics`, `gallery_posts`).
- `src/lib/mockData.ts` atualizado com `mockLessonScores` para desenvolvimento offline.

## Uso do MCP ByteRover
1. Registrar decisões arquiteturais, padrões e soluções complexas usando `byterover-store-knowledge`.
2. Consultar `byterover-retrieve-knowledge` antes de alterações estruturais ou investigações.
3. Armazenar contexto das features finalizadas (Dashboard, Quiz, Slides, Comunidade, etc.).

## Regras de Engajamento
1. Ler **AGENTS.md** ao iniciar uma sessão.
2. Revisar PRD, PROGRESS e ementa antes de decidir mudanças grandes.
3. Avaliar impacto em temas/estilo antes de alterar componentes compartilhados.
4. Documentar o racional das decisões e atualizar este arquivo quando necessário.
5. Sempre validar com `npm run lint` e `npm run build` após mudanças significativas.

## Referências Rápidas
- `AGENTS.md` – este documento.
- `.trae/documents/PRD.md` – requisitos.
- `Docs/PROGRESS.md`, `Docs/WORKFLOWS.md`, `Docs/BUGS.md`, `Docs/ementa.md`.
- Componentes chave: `Dashboard.tsx`, `Aulas.tsx`, `Ranking.tsx`, `Comunidade.tsx`, `SlideHeader.tsx`, `SlideViewer.tsx`, `QuizHeader.tsx`, `QuizQuestionViewer.tsx`, `QuizResultModal.tsx`, `HelpModal.tsx`, `AulaSlidePage.tsx`, `QuizPage.tsx`, `QuizQuestionPage.tsx`.

---

# Vision & MCP Instructions

## Image Handling Protocol
1. Sempre usar o servidor **Z.ai Vision MCP** (`image_analysis`) para qualquer screenshot/imagem recebida.  
2. Ativar quando o usuário enviar/colar/arrastar uma imagem.  
3. Fluxo: `/mcp` → confirmar "Vision Server: connected" → chamar `image_analysis` → aguardar resposta.  
4. Nunca utilizar visão local ou ignorar o MCP disponível.

## MCP Servers Esperados
- **Web Search MCP** – consultas externas em tempo real.  
- **Vision MCP** – análise de imagens/vídeos.

### Ferramentas Byterover
1. **`byterover-store-knowledge`** – obrigatório ao registrar novos padrões, decisões arquiteturais, soluções complexas ou finalizar tasks relevantes.  
2. **`byterover-retrieve-knowledge`** – obrigatório antes de iniciar tarefas novas, decidir arquitetura ou depurar problemas usando histórico persistido.

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
