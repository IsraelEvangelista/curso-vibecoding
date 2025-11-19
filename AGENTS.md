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

## Registro de Atividades Recentes

### Refatoração de mockData.ts em Módulos Menores (2025-11-12)

**Problema Identificado:**
O arquivo `src/lib/mockData.ts` continha 4200+ linhas de código com todos os dados mock centralizados, causando:
- Dificuldade de manutenção e navegação
- Alto risco de conflitos em merge
- Tempo de carregamento elevado para o editor
- Violação do princípio de Single Responsibility

**Solução Implementada:**
Refatoração completa do arquivo em módulos especializados, mantendo compatibilidade total com código existente.

**Estrutura Final:**
```
src/lib/
├── mockData.ts (23 linhas - apenas shim de compatibilidade)
└── mocks/
    ├── index.ts (barrel export)
    ├── users.ts (mockUsers, mockCurrentUser)
    ├── quiz.ts (mockQuizQuestions, mockQuizAttempts)
    ├── lessons.ts (mockLessons)
    ├── lessonScores.ts (mockLessonScores)
    ├── ranking.ts (mockRanking)
    ├── presence.ts (mockPresenceStatus)
    ├── forum.ts (mockForumTopics)
    ├── gallery.ts (mockGalleryPosts)
    ├── slideDecks.ts (mockSlideDecks)
    └── slides/
        ├── aula1.ts (mockSlidesAula1 - 68KB)
        ├── aula2.ts (mockSlidesAula2 - ~45KB)
        ├── aula3.ts (mockSlidesAula3 - ~25KB)
        ├── aula4.ts (mockSlidesAula4 - ~30KB)
        └── aula5.ts (mockSlidesAula5 - ~55KB)
```

**Processo de Refatoração:**
1. ✅ Criação da estrutura de diretórios `mocks/` e `mocks/slides/`
2. ✅ Extração de dados das aulas 1-5 usando script Node.js automatizado
3. ✅ Separação de entidades em arquivos especializados (users, quiz, lessons, etc.)
4. ✅ Criação do barrel export (`mocks/index.ts`) para centralizar exports
5. ✅ Limpeza do `mockData.ts` mantendo apenas re-exports para compatibilidade
6. ✅ Validação do build (`npm run build`) sem erros
7. ✅ Remoção de scripts temporários

**Vantagens da Refatoração:**
- 📦 **Modularidade:** Cada arquivo com responsabilidade clara e única
- 🔍 **Manutenibilidade:** Fácil localização e edição de dados específicos
- ⚡ **Performance:** Editor carrega apenas arquivos necessários
- 🔄 **Escalabilidade:** Adição de novas aulas sem impactar arquivo monolítico
- 🤝 **Colaboração:** Redução de conflitos em trabalho paralelo
- ✅ **Compatibilidade:** Nenhuma quebra de imports existentes (`export * from "./mocks"`)

**Arquivos Modificados:**
- `src/lib/mockData.ts` (4200+ linhas → 23 linhas)
- `src/lib/mocks/index.ts` (novo)
- `src/lib/mocks/*.ts` (11 novos arquivos)
- `src/lib/mocks/slides/*.ts` (5 novos arquivos)

**Testes de Validação:**
- ✅ Build TypeScript sem erros
- ✅ Build Vite completado com sucesso
- ✅ Nenhum import quebrado detectado
- ✅ Arquivos gerados com encoding UTF-8 correto

**Padrão Estabelecido:**
Para futuras aulas (06-10), seguir a estrutura:
1. Criar `src/lib/mocks/slides/aulaX.ts` com `mockSlidesAulaX`
2. Adicionar export no `src/lib/mocks/index.ts`
3. Adicionar ao array `mockSlideDecks` em `slideDecks.ts`
4. Validar build e navegação

### Validação dos Slides 11–18 da Aula 01

- ✅ Implementação dos slides 11–18 da Aula 01 confirmada como aplicada no deck `deck-aula1` configurado em [`src.lib.mockData.ts`](src/lib/mockData.ts:3161).
- ✅ Slides acessíveis via fluxo oficial da Aula 01 na interface (entrada pela página de Aulas e navegação para o sistema de slides).
- ✅ Renderização correta no `SlideViewer` e `SlideHeader` conforme padrões definidos em [`src.components.features.SlideViewer.tsx`](src/components/features/SlideViewer.tsx:1) e [`src.components.features.SlideHeader.tsx`](src/components/features/SlideHeader.tsx:1), incluindo:
  - Markdown avançado (títulos, listas, ênfases, blocos de código).
  - Conteúdos de segurança e boas práticas sem quebras de layout ou problemas de escape.
- ✅ Navegação entre slides (anterior/próximo e indicadores de progresso) funcionando corretamente para o range 11–18, mantendo consistência do rodapé "Slide X de Y".
- ✅ Ausência de erros de renderização relevantes no console relacionados aos slides 11–18 durante o fluxo de uso padrão.
- 🔒 Navegação direta para rotas inexistentes continua retornando 404 controlado pelo React Router, comportamento esperado fora do fluxo guiado pela UI.

### Atualização da Aula 01 — Movimentação e Exclusões (Slides 19–25)

- ✅ O conteúdo do **Slide 23 (Recap e Próximos Passos)** foi movido para o **Slide 19**, mantendo o tipo `text` e a estrutura em markdown. O título do slide 19 foi atualizado para "Recap e Próximos Passos".
- ✅ Os **slides 20 em diante** da Aula 01 (**20, 21, 22, 23, 24 e 25**) foram removidos do array `mockSlidesAula1` em [`src/lib/mockData.ts`](src/lib/mockData.ts), conforme orientação do senhor.
- 🔁 O rodapé "Slide X de Y" é calculado dinamicamente por `SlideHeader`, então a redução de slides foi refletida automaticamente sem necessidade de ajustes adicionais.
- 👀 Validação visual em preview realizada com o servidor Vite: `http://localhost:5173/`.
- 🧩 Integridade verificada: navegação anterior/próximo continua estável até o **Slide 19**; não há referências quebradas aos slides removidos.

Observação: A seção "3.1. Implementação da Aula 01" foi atualizada para refletir a nova contagem total de slides (19).

## Convenções de Código
- PascalCase para componentes, camelCase para variáveis/funções.
- TypeScript em strict mode com tipos explícitos.
- Componentes funcionais + hooks (useState, useEffect, custom hooks).
- Imports agrupados: libs externas → componentes → utils → tipos.
- Tailwind para estilização; globals.css concentra tokens e utilidades.
- ESLint: recommended + react + react-hooks + jsx-a11y.
- Regras rígidas: sem hooks fora de componentes, keys estáveis, acessibilidade (alt/aria-*), links externos com `rel="noopener noreferrer"`, zero imports/variáveis não usados e `overflow-y-auto` nas páginas principais.

## Estrutura Padrão (Atualizada 2025-11-12)
```
src/
├── components/
│   ├── ui/            # Base (Button, Card, Avatar, HelpModal, Modal, etc.)
│   ├── features/      # Features (Dashboard, Aulas, Ranking, Comunidade, Quiz*, Slide*)
│   └── layout/        # Header, Sidebar, Layout shell
├── lib/
│   ├── mockData.ts    # Shim de compatibilidade (re-exports de ./mocks)
│   ├── mocks/         # [REFATORADO] Dados mock modularizados
│   │   ├── index.ts           # Barrel export
│   │   ├── users.ts           # Mock de usuários
│   │   ├── quiz.ts            # Mock de quiz
│   │   ├── lessons.ts         # Mock de aulas
│   │   ├── lessonScores.ts    # Mock de scores
│   │   ├── ranking.ts         # Mock de ranking
│   │   ├── presence.ts        # Mock de presença
│   │   ├── forum.ts           # Mock de fórum
│   │   ├── gallery.ts         # Mock de galeria
│   │   ├── slideDecks.ts      # Mock de decks de slides
│   │   └── slides/            # Slides por aula
│   │       ├── aula1.ts (68KB)
│   │       ├── aula2.ts (~45KB)
│   │       ├── aula3.ts (~25KB)
│   │       ├── aula4.ts (~30KB)
│   │       └── aula5.ts (~55KB)
│   ├── theme.ts       # Gerenciamento de temas
│   ├── utils.ts       # Utilitários
│   └── constants.ts   # Constantes
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

## Estado Atual (Atualizado em 2025-11-07)

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

#### 3.1. Implementação da Aula 01 (19 Slides Completos)
- **Fonte de Dados:** `mockSlidesAula1` em `src/lib/mockData.ts` contendo 19 slides detalhados.
- **Carregamento:** `AulaSlidePage.tsx` importa `mockSlideDecks` e busca pelo `lessonId` usando `.find()`.
- **Renderização de Conteúdo:**
  - **Markdown Avançado:** Suporte para headers (#, ##, ###), listas (-, *), blockquotes (>), code blocks (\`\`\`), inline code (\`), bold (\*\*), italic (\*).
  - **Tabelas:** Processamento customizado com `processMarkdownTable()` que:
    - Detecta tabelas markdown (linhas iniciando/terminando com |)
    - Ignora linhas separadoras (---|---)
    - Gera HTML com `<table>`, `<th>` (headers com bg cinza) e `<td>` (células normais)
    - Aplica bordas, padding e estilo dark mode
- **Listas sem Marcadores Duplicados:** Usa `list-none` e remove bullets adicionais do regex, respeitando emojis/ícones originais do conteúdo.

##### 3.1.1 Padrão para os novos slides 06–10 (expansão do Slide 05)

Para detalhar os blocos do Slide 05, inserimos 5 slides consecutivos (06–10), cada um focado em um bloco específico. O padrão visual e técnico a ser seguido em cada slide é:

- Estrutura geral:
  - Título (H1/H2 via markdown):
    - `# Plataformas de Desenvolvimento com IA`
    - `## <SUBTÍTULO DO BLOCO>` (ex.: `## 🎨 PLATAFORMAS ALL-IN-ONE`)
  - Conteúdo em grade de cards utilizando HTML dentro do markdown (suportado pelo renderer atual):
    - Container: `<div class="grid grid-cols-1 md:grid-cols-2 gap-6"> ... </div>` para 2 colunas (2 cards por linha em telas médias+).
    - Cada card:
      - `<div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">`.
      - Cabeçalho com ícone + nome da ferramenta:
        - `<div class="flex items-center gap-3"><span class="text-2xl">🔹</span><h3 class="text-xl font-semibold text-gray-900 dark:text-white">Nome</h3></div>`
      - Descrição curta (1–2 frases):
        - `<p class="mt-2 text-gray-700 dark:text-gray-300">...</p>`
      - Link de acesso:
        - `<a href="URL" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>`

- Regras de conteúdo:
  - Usar emojis como ícones (evita dependências de imagens/logos).
  - Links sempre com `target="_blank"` e `rel="noopener noreferrer"` (convenção de segurança).
  - Descrições objetivas e verificadas (quando necessário, pesquisar com MCPs: Firecrawl, Perplexity ou DevTools).

- Observações técnicas do renderer:
  - O `SlideViewer` permite HTML no tipo `text` (não escapado fora de blocos de código), então as divs/grades/renderizam normalmente.
  - Tabelas markdown continuam suportadas, mas para "cards" preferir o grid HTML acima.
  - Inline code (entre crases) é escapado com segurança; evitar inserir HTML em inline code.

- Numeração e impacto:
  - A inserção de 5 slides entre 05 e 08 deslocará a numeração dos seguintes (ex.: antigo 06/07 serão substituídos; os demais avançam). Faremos o ajuste progressivo conforme cada novo slide for inserido, validando navegação e rodapé.

- Exemplo de referência (Slide 06 – All-in-One) já implementado com: Lovable, Google AI Studio, Manus, MGX, Genspark, Kimi AI, Z.ai e Lumi.

#### 3.2. Implementação da Aula 02 (18 Slides Completos)
- **Fonte de Dados:** `mockSlidesAula2` em `src/lib/mockData.ts` (linhas 1376-2179) contendo 18 slides detalhados.
- **Estrutura de Conteúdo:** Cobre "Arquitetura de Agente & Engenharia de Contexto" com:
  - LLM vs. Agente: Conceitos fundamentais
  - Os quatro pilares da arquitetura (Cérebro, Memória, Tools, Contexto)
  - Engenharia de Prompt vs. Context Engineering
  - Model Context Protocol (MCP)
  - n8n como orquestrador de agentes
  - Exercícios práticos com templates de diagrama
- **Integração:** Adicionado ao `mockSlideDecks` com `lessonId: 'aula2'`
- **Funcionalidades:** Mesmo sistema de navegação e renderização da Aula 01

##### 3.2.1 Padrão visual e técnico — Aula 02 (slides corrigidos até aqui)

Este padrão consolida as correções aplicadas na Aula 02 até o momento e deve ser replicado nos próximos slides para garantir consistência visual e funcional.

1) Card dividido 50/50 (texto à esquerda, imagem à direita)
- Container externo do card (bordas arredondadas e corte de overflow):
  - `rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60`
- Grid interno responsivo (1 coluna no mobile, 2 no desktop):
  - `grid grid-cols-1 md:grid-cols-2`
- Separador interno entre as colunas (apenas em md+):
  - `md:border-l md:border-gray-200 dark:md:border-gray-700`
- Lado do texto (alinhamento e espaçamento):
  - `p-5 md:p-6 space-y-3 text-gray-800 dark:text-gray-200`
- Lado da imagem (fundo preto apenas nesta metade, centrado):
  - `bg-black dark:bg-black p-4 flex items-center justify-center`
- Imagem dentro do card (preenchimento da coluna):
  - Usar `max-w-full w-full h-auto` e preferir `object-cover` com uma altura máxima controlada (ex.: `md:max-h-[320px]`).

Exemplo de markup do card:

```
<div class="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
  <div class="grid grid-cols-1 md:grid-cols-2">
    <!-- Texto à esquerda -->
    <div class="p-5 md:p-6 space-y-3 text-gray-800 dark:text-gray-200">
      <h3 class="text-xl font-semibold">AGENTE DE IA</h3>
      <p class="leading-relaxed">Definição, capacidades e relação com LLMs.</p>
    </div>
    <!-- Imagem à direita, com fundo preto e separador interno -->
    <div class="bg-black p-4 md:border-l md:border-gray-200 dark:md:border-gray-700 flex items-center justify-center">
      <a href="#modal-agente-full" aria-label="Abrir imagem em zoom">
        <img src="/Contexto/Aula 02/imagens/agente.png" alt="Ilustração de Agente de IA" class="max-w-full w-full h-auto md:max-h-[320px] object-cover ring-1 ring-white/10" />
      </a>
    </div>
  </div>
</div>
```

2) Modal de zoom sem JS (CSS-only), fixo ao viewport
- Abrir o modal pelo padrão `:target` via `<a href="#modal-id">`.
- Trancar o scroll do `body/html` quando o modal estiver aberto.
- Permitir scroll interno do overlay se a imagem exceder o viewport.
- A imagem em zoom deve caber completamente no viewport usando `object-contain` + `max-h-[80-85vh]`.
- Acessibilidade: `role="dialog"`, `aria-modal="true"`, botão de fechar acessível, e textos alternativos adequados.

Exemplo de CSS (em `src/styles/globals.css`):

```
/* Mostrar/ocultar modal via :target */
.modal { display: none; }
.modal:target { display: flex; }

/* Trava de scroll do documento quando o modal está direcionado */
html:has(.modal:target), body:has(.modal:target) {
  overflow: hidden;
}
```

Exemplo de markup do modal (no mesmo slide):

```
<div id="modal-agente-full" class="modal fixed inset-0 z-[12000] bg-black/80 p-4 flex items-center justify-center overflow-y-auto" role="dialog" aria-modal="true">
  <!-- Área clicável para fechar -->
  <a href="#" class="absolute inset-0" aria-label="Fechar"></a>
  <!-- Conteúdo central -->
  <div class="relative max-w-[90vw]">
    <a href="#" class="absolute -top-2 -right-2 bg-white/90 text-black px-3 py-1 rounded-full shadow" aria-label="Fechar">✕</a>
    <img src="/Contexto/Aula 02/imagens/agente.png" alt="Agente de IA em tamanho completo" class="max-h-[85vh] w-auto object-contain" />
  </div>
  <!-- Foco inicial pode ser definido com auto-focus JS futuramente, se necessário -->
  <!-- Nota: Evitamos JS aqui por simplicidade e segurança do padrão -->
  <!-- Overlay fora do conteúdo central permanece clicável para fechar -->
  <!-- Navegação pelo teclado: Esc (implementado globalmente no viewer) fecha modal -->
</div>
```

3) Regras complementares de estilo e acessibilidade
- Sempre incluir `alt` descritivo nas imagens.
- Evitar dependência de índices em repetição: quando houver listas dinâmicas, usar `key` semântica.
- Links externos: `target="_blank"` com `rel="noopener noreferrer"`.
- Em conteúdo HTML dentro do markdown, manter classes Tailwind coerentes com o tema (cores `text-gray-*`, `dark:*`).
- Para títulos e descrições, manter hierarquia visual (`text-xl`/`font-semibold` para títulos, `leading-relaxed` para parágrafos).
- Ajustar `md:max-h` das imagens conforme necessidade do slide para proporção ideal sem estourar o card.

4) Responsividade e alinhamento
- No mobile: o card divide em 1 coluna (texto acima da imagem), mantendo o fundo preto somente na metade da imagem.
- Em md+: manter 2 colunas 50/50 e o separador interno visível (`md:border-l`).
- Centralização vertical da imagem com `flex items-center justify-center` garante apresentação uniforme.

5) Padrão de interação para imagens
- Clique na imagem abre o modal; clique fora (overlay) fecha.
- Botão explícito de fechar no canto superior do conteúdo do modal para acessibilidade.
- Evitar que o modal cause scroll no documento — scroll apenas interno ao overlay.

6) Observações de segurança e conformidade
- Não expor segredos em conteúdo/links.
- Seguir princípio de menor privilégio nas rotas de visualização.
- Registrar NFRs (latência/throughput) apenas em logs sanitizados se necessário; não logar dados sensíveis.

Checklist de replicação (Definition of Done para novos slides da Aula 02)
- [ ] Card com `rounded-2xl` + `overflow-hidden` e separador interno (`md:border-l`).
- [ ] Texto à esquerda com `p-5 md:p-6` e tipografia consistente.
- [ ] Imagem à direita com fundo `bg-black`, centralizada, e dimensões controladas.
- [ ] Modal CSS-only funcionando (abre/fecha, imagem cabe no viewport, scroll trancado no body, scroll interno no overlay quando necessário).
- [ ] Acessibilidade: `alt`, `role="dialog"`, `aria-modal="true"`, botão de fechar acessível.
- [ ] Validação em Preview (`http://localhost:8080/`) sem erros/warnings no console.

#### 3.3. Implementação da Aula 03 (LLMs para Vibe Coding)
- **Fonte de Dados:** `mockSlidesAula3` em `src/lib/mockData.ts` (linhas 839-924) contendo 12 slides detalhados.
- **Estrutura de Conteúdo:** Cobre "LLMs para Vibe Coding (foco em GLM 4.6)" com:
  - Fundamentos de Large Language Models
  - GLM 4.6 - O Modelo Principal para Vibe Coding
  - APIs e UIs Web dos Principais Modelos
  - Critérios de Escolha de Modelo
  - Planos e Preços dos Modelos
  - Demonstração de Interfaces Web
  - Configuração e Setup com GLM 4.6
  - Workflows de Desenvolvimento Eficientes
  - Técnicas de Prompt Engineering para GLM 4.6
  - Otimização de Contexto com GLM 4.6
  - Projeto Prático: Sistema de Benchmarking
  - Conclusão e Próximos Passos
- **Integração:** Adicionado ao `mockSlideDecks` com `lessonId: 'aula3'`
- **Funcionalidades:** Mesmo sistema de navegação e renderização das Aulas 01 e 02

##### 3.3.1 Solução Especial: Cards Lado a Lado no Slide 02 (GLM 4.6 vs MiniMax M2)

**Problema Identificado:**
O Slide 02 da Aula 03 apresentava dois cards de comparação (GLM 4.6 e MiniMax M2) que precisavam ser exibidos lado a lado em duas colunas iguais de 50% cada, mas o processamento padrão de markdown/HTML estava causando empilhamento vertical ou problemas de layout.

**Causa Raiz:**
O conteúdo markdown com HTML embutido estava sendo processado pelo prose class do Tailwind Typography, que sobrescreve os estilos de grid e flex, causando quebra do layout de duas colunas.

**Solução Implementada:**
Criação de um componente React dedicado que bypassa o processamento de markdown:

1. **Componente React Dedicado** (`src/components/features/ComparisonCards.tsx`):
   - Componente puro React sem dependência de markdown
   - Grid layout com `grid grid-cols-2 gap-6` para garantir duas colunas iguais
   - Altura fixa de 650px para cada card (`h-[650px]`)
   - Scroll individual em cada card quando conteúdo excede altura (`overflow-y-auto flex-1`)
   - Estrutura:
     ```tsx
     <div className="grid grid-cols-2 gap-6">
       <div className="flex flex-col h-[650px] rounded-2xl border ...">
         <h3>GLM 4.6</h3>
         <div className="overflow-y-auto flex-1 pr-2">
           {/* conteúdo com scroll */}
         </div>
       </div>
       <div className="flex flex-col h-[650px] rounded-2xl border ...">
         <h3>MiniMax M2</h3>
         <div className="overflow-y-auto flex-1 pr-2">
           {/* conteúdo com scroll */}
         </div>
       </div>
     </div>
     ```

2. **Renderização Condicional** (`src/components/features/SlideViewer.tsx`):
   - Detecta quando `currentSlide.id === 'aula3-slide2'`
   - Renderiza o `ComparisonCards` diretamente no lugar do processamento de markdown
   - Mantém o `SlideHeader` para título e navegação
   - Código (linhas 306-316):
     ```tsx
     if (currentSlide.id === 'aula3-slide2') {
       return (
         <div className="flex-1 overflow-y-auto pb-10">
           <SlideHeader title={currentSlide.title} />
           <div className="container mx-auto px-4 py-6">
             <ComparisonCards />
           </div>
         </div>
       );
     }
     ```

3. **CSS Override** (`src/styles/globals.css`, linhas 811-827):
   - Força grid e flex layouts dentro de prose para casos futuros
   - Garante que `grid-cols-2` seja respeitado:
     ```css
     .prose div[class*="grid"] { display: grid !important; }
     .prose div[class*="grid-cols-2"] { 
       grid-template-columns: repeat(2, minmax(0, 1fr)) !important; 
     }
     ```

**Resultado Final:**
- ✅ Cards GLM 4.6 e MiniMax M2 perfeitamente alinhados lado a lado
- ✅ Largura exata de 50% para cada card (660px cada em viewport de 1344px)
- ✅ Altura fixa de 650px com scroll individual
- ✅ Sem subtítulo duplicado (removido do mockData.ts linha 2232)
- ✅ Layout responsável e consistente com o tema dark/light

**Validação:**
- Testes realizados com Chrome DevTools MCP
- Verificado posicionamento com `getBoundingClientRect()`:
  - Card 1: left = 80px, width = 660.4px
  - Card 2: left = 764.4px, width = 660.4px
- Screenshot confirmando layout correto

**Padrão Replicável:**
Para futuros slides com layouts complexos que não funcionam bem com markdown:
1. Criar componente React dedicado em `src/components/features/`
2. Adicionar renderização condicional em `SlideViewer.tsx` baseado em `slide.id`
3. Garantir que o componente use Tailwind classes consistentes com o tema
4. Testar com Chrome DevTools para validar posicionamento pixel-perfect

#### 3.4. Implementação da Aula 04 (Ambientes: TRAE Solo, Warp, CLIs)
- **Fonte de Dados:** `mockSlidesAula4` em `src/lib/mockData.ts` (linhas 926-1032) contendo 15 slides detalhados.
- **Estrutura de Conteúdo:** Cobre "Ambientes: TRAE Solo (principal), Warp (demo) + CLIs" com:
  - Ambientes de Desenvolvimento para Vibe Coding
  - TRAE Solo - Setup e Configuração
  - TRAE Solo - Recursos e Workflows
  - Warp - Terminal Avançado para Vibe Coding
  - Claude Code 2.0 - CLI e Extension
  - Kilo Code - Modos para Diferentes Tarefas
  - Integração com VS Code e Zed
  - Micro-benchmarks - Metodologia e Métricas
  - Benchmark 1 - Geração de Testes Unitários
  - Benchmark 2 - Análise de Stack Trace
  - Benchmark 3 - Componente React Acessível
  - Benchmark 4 - SQL Seguro com Paginação
  - Benchmark 5 - Refatoração para Reduzir Complexidade
  - Resultados dos Micro-benchmarks
  - Conclusão - Dominando Ambientes de Vibe Coding
- **Integração:** Adicionado ao `mockSlideDecks` com `lessonId: 'aula4'`
- **Funcionalidades:** Mesmo sistema de navegação e renderização das Aulas 01, 02 e 03

#### 3.5. Implementação da Aula 05 (Boas Práticas, Git/GitHub & BMAD)
- **Fonte de Dados:** `mockSlidesAula5` em `src/lib/mockData.ts` (linhas 1034-2453) contendo 23 slides detalhados.
- **Estrutura de Conteúdo:** Cobre "Boas Práticas, Git/GitHub & BMAD (PRD)" com:
  - Abertura da Aula 05 e Objetivos Específicos
  - Git: Conceitos Fundamentais
  - Configuração de Repositório - Passo a Passo
  - SSH: Configuração Segura e Confiável
  - Branches e Estratégias de Merge
  - Proteção de Secrets: Fundamento da Segurança
  - .gitignore: A Linha de Defesa do Repositório
  - LGPD: Conformidade e Proteção de Dados
  - Higiene de Logs: Rastreabilidade Segura
  - BMAD: Metodologia para Estruturação Profissional
  - Business Model Canvas: Mapeando o Negócio
  - Architecture Design: Do Conceito à Implementação
  - PRD: Product Requirements Document
  - User Stories: Narrativas que Orientam Desenvolvimento
  - Hands-on: Criando Repositório Profissional
  - Exercício: PRD com Metodologia BMAD
  - Pipeline CI/CD: Automação Profissional
  - Síntese: Profissionalização do Desenvolvimento
  - Materiais de Apoio Disponíveis
- **Integração:** Adicionado ao `mockSlideDecks` com `lessonId: 'aula5'`
- **Funcionalidades:** Mesmo sistema de navegação e renderização das Aulas 01, 02, 03 e 04

#### 3.6. Estrutura de Documentos das Aulas
- **Organização:** Cada aula possui estrutura específica em `Contexto/Aula XX/`
- **Componentes da Aula 02:**
  - `briefing_02.md`: Documento completo de briefing com objetivos, metodologia e critérios de avaliação
  - `aula_02.md`: Estrutura detalhada com 23 slides formatados, incluindo layout sugeridos, conteúdo completo e elementos visuais
  - `imagens/`: Pasta para armazenar todas as imagens utilizadas na aula (diagramas, screenshots, ilustrações, etc.)
- **Padrão de Estrutura:** Briefing (conceitos teóricos + critérios) + Aula (conteúdo didático estruturado) + Imagens (recursos visuais da aula)

#### 3.7. Padrão de Conteúdo dos Slides
- **Estrutura:** Cada slide possui `id`, `order`, `title`, `type` ('text' | 'code'), `content` (markdown).
- **Tipos:**
  - `text`: Conteúdo explicativo com formatação rica
  - `code`: Exemplos de código com syntax highlighting via `<pre><code>`
- **Futuras Melhorias:** Suporte para imagens (`type: 'image'`) e vídeos (`type: 'video'`) será adicionado conforme necessário.

#### 3.8. Padrão para Novas Aulas
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
## Guia de Implementação do Quiz por Aula (padrão Aula 01)

Este guia documenta como o quiz da Aula 01 foi implementado e estabelece um padrão replicável para as próximas aulas. Foca nas camadas de dados (markdown), parser, geração de rodadas, persistência no localStorage, exibição de status e testes.

### Objetivo
- Carregar perguntas de um arquivo markdown por aula.
- Gerar 3 rodadas de 10 questões (30 no total), com opções embaralhadas.
- Persistir respostas parciais e tentativas por rodada.
- Desbloquear rodadas com base em aprovação (≥70%) ou esgotamento de tentativas (3 falhas).
- Padronizar a exibição de status na UI.

### Arquivos e Responsabilidades
- `Contexto/Aula 01/quiz_01.md`: Fonte de dados (markdown estruturado).
- `src/lib/quizLoader.ts`:
  - `loadQuizQuestionsForLesson(lessonId)`: Carrega perguntas da aula (markdown preferencial) ou fallback para `mockLessons`.
  - `parseStructuredQuizMarkdown(content)`: Parser tolerante para markdown estruturado.
  - `parseQuizMarkdown(content)`: Parser alternativo para bloco JSON dentro do markdown.
  - `generateQuizRoundsAsync(lessonId)`: Gera as 3 rodadas com 10 questões cada, embaralhando perguntas e opções.
- `src/lib/quizStatus.ts`:
  - `getRoundStatus(round, bestAttempt)`: Padroniza o status exibido: "Não tentado", "Em progresso", "Tentado", "Aprovado", "Falha".
- `src/pages/QuizPage.tsx`: Lista as rodadas, aplica bloqueio/desbloqueio e mostra progresso.
- `src/pages/QuizQuestionPage.tsx`: Carrega a rodada selecionada, respostas atuais e navegação entre questões.
- `src/components/features/QuizQuestionViewer.tsx`: Interação com as questões, cálculo de nota, salvamento de tentativas e modal de resultados.

### Formato do Markdown (Aula 01)
Cada questão segue este padrão:

```
### Pergunta 1
Qual é a definição correta de Prompt-to-Code?
A) Uma técnica de testes unitários automatizados
B) Uma técnica de programação assistida por IA...
C) ...
D) ...
**Resposta:** B
```

Regras do formato:
- Cabeçalho da questão: `### Pergunta N` (N = 1..30).
- Texto da questão é o bloco entre o cabeçalho e a primeira opção.
- Opções iniciam com `A)`, `B)`, `C)`, `D)` e podem conter espaços de indentação.
- Linha de resposta obrigatória: `**Resposta:** X` onde `X ∈ {A,B,C,D}`.
- Separadores `---` são ignorados pelo parser; não são necessários.

### Parser estruturado (robusto e tolerante)
O parser identifica os blocos de perguntas pelos índices dos cabeçalhos `### Pergunta N` e, dentro de cada bloco, extrai texto, opções e resposta:

```ts
// src/lib/quizLoader.ts
export function parseStructuredQuizMarkdown(content: string): QuizQuestion[] {
  const normalized = content.replace(/\r/g, "");
  const results: QuizQuestion[] = [];
  let globalIndex = 0;

  const headerRegex = /###\s*Pergunta\s*\d+/gmi;
  const indices: number[] = [];
  let headerMatch: RegExpExecArray | null;
  while ((headerMatch = headerRegex.exec(normalized)) !== null) {
    indices.push(headerMatch.index);
  }

  for (let i = 0; i < indices.length; i++) {
    const start = indices[i];
    const end = i + 1 < indices.length ? indices[i + 1] : normalized.length;
    const qBlock = normalized.slice(start, end);
    const qContent = qBlock.replace(/^###\s*Pergunta\s*\d+\s*\n/i, "");

    const ansMatch = qContent.match(/\*\*Resposta:\*\*\s*([A-D])/i);
    if (!ansMatch) continue;
    const correctIndex = ["A","B","C","D"].indexOf(ansMatch[1].toUpperCase());
    if (correctIndex < 0) continue;

    const firstOptionIndex = qContent.search(/^[A-D]\)\s+/m);
    const questionText = (firstOptionIndex >= 0 ? qContent.slice(0, firstOptionIndex) : qContent).trim();

    const optionMatches = qContent.match(/^\s*[A-D]\)\s+.*$/gmi) || [];
    const options = optionMatches.map((line) => line.replace(/^\s*[A-D]\)\s+/, "").trim());
    if (options.length < 2) continue;

    results.push({
      id: `aula1-q${++globalIndex}`,
      question: questionText,
      options,
      correctAnswer: correctIndex,
      explanation: "",
    });
  }
  return results;
}
```

Fallback para bloco JSON dentro do markdown:

```ts
function parseQuizMarkdown(content: string): QuizQuestion[] {
  const match = content.match(/```json([\s\S]*?)```/i);
  if (match?.[1]) {
    const arr = JSON.parse(match[1].trim());
    return arr.map((q, idx) => ({
      id: q.id || `aula1-q${idx + 1}`,
      question: q.question,
      options: q.options,
      correctAnswer: q.correctAnswer,
      explanation: q.explanation || "",
      difficulty: q.difficulty,
    }));
  }
  return [];
}
```

### Geração de rodadas e embaralhamento

```ts
export async function generateQuizRoundsAsync(lessonId: string): Promise<QuizRound[]> {
  const allQuestions = await loadQuizQuestionsForLesson(lessonId);
  const shuffledQuestions = shuffleArray(allQuestions);
  const roundsPerQuiz = 3; // 3 rodadas
  const questionsPerRound = 10; // 10 por rodada

  return Array.from({ length: roundsPerQuiz }, (_, roundIndex) => {
    const startIndex = roundIndex * questionsPerRound;
    const endIndex = startIndex + questionsPerRound;
    const roundQuestions = shuffledQuestions.slice(startIndex, endIndex).map(shuffleOptions);
    return {
      id: `round-${roundIndex + 1}`,
      title: `Rodada ${roundIndex + 1}`,
      questions: roundQuestions,
      maxAttempts: 3,
      attempts: [],
      isLocked: roundIndex > 0,
      requiredScore: 70,
    };
  });
}
```

### Persistência no navegador e chaves
- Respostas atuais da rodada: `quiz_<lessonId>_<roundId>_current_answers`.
- Tentativas realizadas: `quiz_<lessonId>_<roundId>_attempts`.

Uso (exemplos):
```ts
// Salvar respostas parciais
localStorage.setItem(`quiz_${lessonId}_${roundId}_current_answers`, JSON.stringify(answers));

// Salvar tentativa concluída
const key = `quiz_${lessonId}_${roundId}_attempts`;
const attempts = JSON.parse(localStorage.getItem(key) || '[]');
attempts.push(attemptData);
localStorage.setItem(key, JSON.stringify(attempts));
```

### Regra de desbloqueio das rodadas
- A Rodada 2 é desbloqueada quando a Rodada 1 estiver "Aprovado" (≥70%) ou quando o aluno esgotar as 3 tentativas sem aprovação.
- A Rodada 3 segue a mesma regra em relação à Rodada 2.

```ts
// QuizPage.tsx
const hasUnlockedRound = (lessonId: string, roundIndex: number): boolean => {
  if (roundIndex === 0) return true;
  const previousRoundId = `round-${roundIndex}`;
  const attempts = loadRoundAttempts(lessonId, previousRoundId);
  const passed = attempts.some((a) => a.score >= 70);
  const exhausted = attempts.length >= 3;
  return passed || exhausted;
};
```

### Padronização do Status na UI
O status por rodada é centralizado em `getRoundStatus`:

```ts
type RoundStatusUI = {
  status: string; // "Não tentado" | "Em progresso" | "Tentado" | "Aprovado" | "Falha"
  statusColor: string;
  badgeColor: string;
  answeredText: string; // "X/Y" ou "Acertos"
  answeredLabel: string; // "Respondidas" ou "Acertos"
  answeredColor: string;
};

export function getRoundStatus(round, bestAttempt): RoundStatusUI { /* ... */ }
```

### Testes Unitários
- Parser: `src/lib/__tests__/quizLoader.test.ts` valida que o arquivo markdown possui 30 questões e que cada questão tem pelo menos 2 opções e índice de resposta válido.
- Status: `src/lib/__tests__/quizStatus.test.ts` garante os rótulos/categorias nos estados limites.

Exemplo de teste do parser:
```ts
import { parseStructuredQuizMarkdown } from '@/lib/quizLoader';
import fs from 'fs';
import path from 'path';

it('carrega 30 questões do markdown da Aula 01', () => {
  const filePath = path.resolve(process.cwd(), 'Contexto', 'Aula 01', 'quiz_01.md');
  const content = fs.readFileSync(filePath, 'utf-8');
  const questions = parseStructuredQuizMarkdown(content);
  expect(questions.length).toBe(30);
});
```

### Passo a Passo para novas aulas (Aula N)
1. Criar `Contexto/Aula NN/quiz_NN.md` seguindo o formato acima.
2. Atualizar `loadQuizQuestionsForLesson(lessonId)` para reconhecer `lessonId === "aulaNN"` e buscar `/Contexto/Aula NN/quiz_NN.md` (com fallback `?raw`).
3. Executar os testes unitários e, se necessário, adicionar um novo teste específico que valide a contagem de questões da nova aula.
4. Subir o servidor (`npm run dev`) e validar no Preview que cada rodada exibe 10 questões, que o status muda corretamente e que as chaves do `localStorage` estão sendo criadas.
5. Se o senhor visualizar divergência (ex.: apenas 5 questões), limpar o cache do `localStorage` e revalidar.

### Checklist (Definition of Done)
- [ ] 30 questões no markdown e 3 rodadas com 10 questões.
- [ ] Opções embaralhadas por rodada.
- [ ] Persistência de respostas e tentativas por `lessonId`/`roundId`.
- [ ] Desbloqueio conforme regra ≥70% ou 3 falhas.
- [ ] Status coerente (Não tentado/Em progresso/Tentado/Aprovado/Falha).
- [ ] Testes unitários passando (`quizLoader.test.ts`, `quizStatus.test.ts`).
- [ ] Preview validado sem erros.

### Observações de Segurança e Conformidade
- Não registrar dados sensíveis em logs; usar mensagens sanitizadas.
- Não expor credenciais; o quiz atual não usa backend.
- Em futuras integrações (Supabase + RLS), equilibrar segurança com funcionalidade e evitar políticas que bloqueiem leitura das questões para alunos autorizados.
