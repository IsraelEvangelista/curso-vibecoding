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

## Estado Atual (Atualizado em 2025-11-03)

### Resumo dos Títulos das Aulas

- **Aula 01:** Fundamentos do Vibe Coding & Riscos
- **Aula 02:** Arquitetura de Agente & Engenharia de Contexto
- **Aula 03:** LLMs para Vibe Coding (foco em GLM 4.6)
- **Aula 04:** Ambientes: TRAE Solo (principal), Warp (demo) + CLIs (Claude Code & Kilo Code, GLM 4.6)
- **Aula 05:** Boas Práticas, Git/GitHub & BMAD (PRD)
- **Aula 06:** Projeto Dirigido (Parte I): do PRD a épicos/tarefas
- **Aula 07:** Projeto Dirigido (Parte II): implementação assistida por IA
- **Aula 08:** Integração ao Supabase & Deploy

### Modelos LLMs e Planos (2025)

#### Modelos Principais
- **GLM 4.6 (Zhipu AI):** MoE (355B), 200K contexto, ~$0.10/M input, ~$0.15/M output
- **GPT-5 (OpenAI):** Transformer, 200K contexto, $1.25-2.50/M input, $10-15/M output
- **Codex GPT-5 (OpenAI):** Transformer, 200K contexto, $1.25-2.50/M input, $10-15/M output
- **Claude Sonnet 4.5 (Anthropic):** Transformer, 200K contexto, $3.00/M input, $15.00/M output
- **Claude Opus 4.1 (Anthropic):** Transformer, 200K contexto, $15.00/M input, $75.00/M output
- **Gemini 2.5 Pro (Google):** Transformer, 1M contexto, $1.25-2.50/M input, $10.00/M output
- **Gemini 2.5 Flash/Nano (Google):** Transformer, 1M contexto, $0.075/M input, $0.30/M output
- **MiniMax M2:**** Transformer, 10B, 128K contexto, preço não divulgado
- **Kimi K2 (Moonshot):** MoE (32B), 128K contexto, $0.15/M input, $2.50/M output
- **Qwen Code:**** Transformer, 32B, 33K contexto, preço competitivo

#### Planos e Preços (2025)
- **OpenAI (GPT-5/Codex):** ChatGPT-5 Pro ($20/mês), API ($1.25-2.50/M input, $10-15/M output)
- **Anthropic (Claude):** Sonnet 4.5 ($3.00/M input, $15.00/M output), Opus 4.1 ($15.00/M input, $75.00/M output)
- **Google (Gemini):** Pro ($1.25-2.50/M input, $10.00/M output), Flash ($0.075/M input, $0.30/M output)
- **Zhipu AI (GLM 4.6):** ~$0.10/M input, ~$0.15/M output, open source disponível
- **Moonshot (Kimi K2):** Developer ($15/mês), API ($0.15/M input, $2.50/M output)
- **Modos de Raciocínio:** GPT-5 (Low/Medium/High), Claude (Auto/Fast/Thinking)

#### Ferramentas e CLIs
- **Kilo Code:** Modos (Orchestrator, Architect, Code, Ask, Debug), suporte a múltiplos modelos
- **Claude Code 2.0:** Extensão VS Code + CLI + Web, conversas persistentes, diffs inline
- **Gemini CLI:** Integração Google Workspace, multimodalidade avançada
- **Codex Code:** CLI e extensão OpenAI, foco em programação
- **Zed IDE:** Suporte a múltiplos agentes via Agent Client Protocol
- **Warp Code:** Agent profiles, prompt-to-production, context awareness
- **Kimi CLI:** CLI especializada para modelo Kimi K2

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

#### 3.2. Implementação da Aula 02 (23 Slides Completos)
- **Fonte de Dados:** `mockSlidesAula2` em `src/lib/mockData.ts` (linhas 675-836) contendo 23 slides detalhados.
- **Estrutura de Conteúdo:** Cobre "Arquitetura de Agente & Engenharia de Contexto" com:
  - LLM vs. Agente: Conceitos fundamentais
  - Os quatro pilares da arquitetura (Cérebro, Memória, Tools, Contexto)
  - Engenharia de Prompt vs. Context Engineering
  - Model Context Protocol (MCP)
  - n8n como orquestrador de agentes
  - Exercícios práticos com templates de diagrama
- **Integração:** Adicionado ao `mockSlideDecks` com `lessonId: 'aula2'`
- **Funcionalidades:** Mesmo sistema de navegação e renderização da Aula 01

#### 3.3. Estrutura de Documentos das Aulas
- **Organização:** Cada aula possui estrutura específica em `Contexto/Aula XX/`
- **Componentes da Aula 02:**
  - `briefing_02.md`: Documento completo de briefing com objetivos, metodologia e critérios de avaliação
  - `aula_02.md`: Estrutura detalhada com 23 slides formatados, incluindo layout sugeridos, conteúdo completo e elementos visuais
  - `imagens/`: Pasta para armazenar todas as imagens utilizadas na aula (diagramas, screenshots, ilustrações, etc.)
- **Padrão de Estrutura:** Briefing (conceitos teóricos + critérios) + Aula (conteúdo didático estruturado) + Imagens (recursos visuais da aula)

#### 3.4. Padrão de Conteúdo dos Slides
- **Estrutura:** Cada slide possui `id`, `order`, `title`, `type` ('text' | 'code'), `content` (markdown).
- **Tipos:**
  - `text`: Conteúdo explicativo com formatação rica
  - `code`: Exemplos de código com syntax highlighting via `<pre><code>`
- **Futuras Melhorias:** Suporte para imagens (`type: 'image'`) e vídeos (`type: 'video'`) será adicionado conforme necessário.

#### 3.5. Padrão para Novas Aulas
- Seguir estrutura de `mockSlidesAula1` e `mockSlidesAula2` em `mockData.ts`.
- Manter consistência de markdown: headers, listas, tabelas, code blocks.
- Criar estrutura de documentos em `Contexto/Aula XX/` com:
  - `briefing_XX.md`: Documento de briefing com objetivos e critérios
  - `aula_XX.md`: Estrutura detalhada dos slides
  - `imagens/`: Pasta para recursos visuais da aula
- Adicionar ao array `mockSlideDecks` com `lessonId` correspondente.
- Testar renderização de tabelas e listas antes de commit.
- Organizar as imagens na pasta `imagens/` com nomes descritivos e referenciá-las nos slides usando caminhos relativos.

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

## MCP Servers Disponíveis e Testados

### 1. **Context7 MCP** (`npx -y @upstash/context7-mcp`)
- **Função:** Documentação e exemplos de bibliotecas
- **Ferramentas:** `resolve-library-id`, `get-library-docs`
- **Uso:** Buscar documentação atualizada de qualquer biblioteca/framework
- **Exemplo:** `resolve-library-id` para encontrar ID → `get-library-docs` para obter docs detalhadas
- **Status:** ✅ Funcionando

### 2. **Playwright MCP** (`npx -y @executeautomation/playwright-mcp-server`)
- **Função:** Automação de navegador e testes E2E
- **Ferramentas:** Navegação, clicks, screenshots, console logs, network requests
- **Uso:** Automação web completa, testes end-to-end, scraping avançado
- **Status:** ⚠️ Requer configuração (executável não encontrado)

### 3. **Perplexity MCP** (`npx perplexity-mcp`)
- **Função:** Pesquisa e raciocínio complexo com IA
- **Ferramentas:** `search`, `reason`, `deep_research`
- **Uso:** Pesquisas em tempo real, análise profunda, comparações
- **Status:** ✅ Funcionando

### 4. **Firecrawl MCP** (`npx -y firecrawl-mcp`)
- **Função:** Web scraping e crawling avançado
- **Ferramentas:** `firecrawl_scrape`, `firecrawl_map`, `firecrawl_search`, `firecrawl_crawl`
- **Uso:** Extração de conteúdo de sites, descoberta de URLs, crawling completo
- **Status:** ✅ Funcionando

### 5. **Sequential Thinking MCP** (`npx -y @modelcontextprotocol/server-sequential-thinking`)
- **Função:** Resolução estruturada de problemas passo a passo
- **Ferramentas:** `sequentialthinking`
- **Uso:** Análise complexa, planejamento, design de sistemas
- **Status:** ✅ Funcionando

### 6. **n8n MCP** (`npx n8n-mcp`)
- **Função:** Automação de workflows e orquestração
- **Ferramentas:** `list_nodes`, `get_node_info`, `search_nodes`, `n8n_create_workflow`, etc.
- **Uso:** Criação de automações complexas, integração com APIs, orquestração de agentes
- **Status:** ✅ Funcionando

### 7. **ZAI WebSearch MCP** (`npx -y @z_ai/mcp-server --mode websearch`)
- **Função:** Busca web em tempo real via Model Context Protocol
- **Ferramentas:** `search` (limitado no ambiente atual)
- **Uso:** Pesquisas online atualizadas, integração com workflows de IA
- **Status:** ⚠️ Limitado (apenas análise de imagem/vídeo disponível)

### 8. **ZAI Vision MCP** (`npx -y @z_ai/mcp-server --mode vision`)
- **Função:** Análise avançada de imagens e vídeos
- **Ferramentas:** `analyze_image`, `analyze_video`
- **Uso:** Análise de screenshots, interpretação de imagens, extração de conteúdo visual
- **Status:** ✅ Funcionando

### 9. **Testsprite MCP** (`npx @testsprite/testsprite-mcp@latest`)
- **Função:** Testes automatizados de aplicações web
- **Ferramentas:** `testsprite_bootstrap_tests`, `testsprite_generate_code_summary`, etc.
- **Uso:** Testes E2E automatizados, geração de planos de teste, validação de funcionalidades
- **Status:** ✅ Funcionando

### 10. **Chrome DevTools MCP** (`npx chrome-devtools-mcp@latest`)
- **Função:** Depuração e análise de navegador
- **Ferramentas:** `navigate_page`, `take_snapshot`, `click`, `fill`, `evaluate_script`, etc.
- **Uso:** Debug de aplicações web, análise de performance, automação de navegador
- **Status:** ✅ Funcionando

### 11. **Byterover MCP** (`npx -y byterover-mcp`)
- **Função:** Armazenamento e recuperação de conhecimento persistente
- **Ferramentas:** `byterover-store-knowledge`, `byterover-retrieve-knowledge`
- **Uso:** Memória persistente do projeto, padrões arquiteturais, soluções reutilizáveis
- **Status:** ✅ Funcionando (requer autenticação)

## Diretrizes de Uso dos MCPs

### Quando usar cada MCP:
- **Context7:** Para documentação de bibliotecas e APIs
- **Playwright:** Para automação web e testes E2E
- **Perplexity:** Para pesquisas complexas e raciocínio com IA
- **Firecrawl:** Para scraping de sites e extração de dados
- **Sequential Thinking:** Para análise estruturada e planejamento
- **n8n:** Para automação de workflows complexos
- **ZAI WebSearch:** Para buscas online em tempo real
- **ZAI Vision:** Para análise de imagens e vídeos (SEMPRE usar este para imagens)
- **Testsprite:** Para testes automatizados da aplicação
- **Chrome DevTools:** Para debug e análise de navegador
- **Byterover:** Para armazenar/recuperar conhecimento do projeto (OBRIGATÓRIO)

### Fluxos de Trabalho Integrados:
1. **Pesquisa → Context7/Perplexity** para obter informações
2. **Imagens → ZAI Vision** para análise visual (SEMPRE)
3. **Web Scraping → Firecrawl** para extrair dados de sites
4. **Testes → Testsprite/Playwright** para validação
5. **Automação → n8n** para workflows complexos
6. **Debug → Chrome DevTools** para análise de navegador
7. **Memória → Byterover** para conhecimento persistente (OBRIGATÓRIO)

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
