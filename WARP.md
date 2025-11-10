# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Project Overview

**Curso Vibe Coding** is a gamified interactive learning platform for teaching Vibe Coding (AI-assisted development). Built with React + TypeScript + Vite, using Tailwind CSS for styling, and designed for future Supabase integration.

## Essential Commands

### Development
```bash
npm install              # Install dependencies
npm run dev             # Start dev server (http://localhost:8080)
npm run build           # TypeScript compilation + production build
npm run preview         # Preview production build (port 8080)
npm run lint            # Run ESLint with max-warnings=0
npm run test            # Run Vitest unit tests
```

### Testing Strategy
- **Unit Tests:** Vitest (configured in package.json)
- **Critical Test Locations:** `src/lib/__tests__/` for quiz loaders and status utilities
- **Test Pattern:** `*.test.ts` files
- **E2E Tests:** Planned (Playwright/Cypress) - not yet implemented

### Lint Requirements (Critical)
- Must pass with `--max-warnings=0` before any commit
- Auto-fix available: `eslint --fix`
- Violations must include inline justification if `eslint-disable` is used
- ESLint config: `eslint:recommended`, `plugin:react/recommended`, `plugin:react-hooks/recommended`, `plugin:jsx-a11y/recommended`

## Architecture & Code Structure

### High-Level Architecture

This is a **Single Page Application (SPA)** with:
- **Client-side routing** via React Router v6 (`createBrowserRouter` + `RouterProvider`)
- **Dual-theme system** (dark/light/auto) with localStorage persistence
- **Modular feature architecture** with three main subsystems:
  1. **Slide System** - Educational content presentation with markdown rendering
  2. **Quiz System** - Interactive assessments with localStorage persistence
  3. **Gamification System** - Rankings, points, and progress tracking

### Core Architectural Patterns

#### 1. Theme Management (`src/lib/theme.ts`)
- Global theme state stored in `localStorage` as `theme` key
- Applied via HTML class (`html.dark`)
- Function `applyTheme()` handles system preferences and user overrides
- Dark theme: black bg + neon green accents
- Light theme: white bg + violet accents

#### 2. Data Flow Pattern
```
Markdown Files (Contexto/Aula XX/) 
  → Loaders (src/lib/quizLoader.ts, mockData.ts)
  → Pages (src/pages/)
  → Feature Components (src/components/features/)
  → UI Components (src/components/ui/)
```

#### 3. Slide System Architecture
- **Data Source:** `mockSlideDecks` array in `src/lib/mockData.ts` (lines 3161+)
- **Markdown Parser:** Custom renderer in `SlideViewer.tsx` supporting:
  - Headers, lists, blockquotes, code blocks, inline code, bold, italic
  - **Tables** via `processMarkdownTable()` (custom HTML generation)
  - **HTML cards/grids** embedded in markdown for complex layouts
- **Navigation:** Keyboard shortcuts (←/→/Esc), progress indicators, fixed footer
- **Modal System:** CSS-only zoom modals using `:target` pseudo-class (no JS required)

#### 4. Quiz System Architecture
- **Source:** Markdown files (`Contexto/Aula XX/quiz_XX.md`) → 30 questions per lesson
- **Round Generation:** 3 rounds × 10 questions, shuffled per round
- **Persistence:** localStorage with keys:
  - `quiz_<lessonId>_<roundId>_current_answers` (partial responses)
  - `quiz_<lessonId>_<roundId>_attempts` (completed attempts)
- **Unlock Logic:** Round N+1 unlocks when Round N is passed (≥70%) OR 3 attempts exhausted
- **Status Management:** Centralized in `src/lib/quizStatus.ts` (5 states: "Não tentado", "Em progresso", "Tentado", "Aprovado", "Falha")

### Directory Structure & Conventions

```
src/
├── components/
│   ├── ui/              # Base components (Button, Card, Avatar, Modal, Badge, Input)
│   ├── features/        # Feature-specific (Dashboard, Aulas, Ranking, Comunidade)
│   │                    # Quiz* (Header, QuestionViewer, ResultModal)
│   │                    # Slide* (Header, Viewer)
│   └── layout/          # Header, Sidebar, Layout shell
├── lib/                 # Core logic and data
│   ├── mockData.ts      # All mock data (users, lessons, slides, rankings)
│   ├── quizLoader.ts    # Quiz markdown parser and round generator
│   ├── quizStatus.ts    # Status calculation utilities
│   ├── theme.ts         # Theme management
│   └── utils.ts         # Shared utilities (cn, shuffleArray, etc.)
├── pages/               # Route components (DashboardPage, AulasPage, QuizPage, etc.)
├── types/               # TypeScript definitions
├── styles/              # globals.css (tokens, animations, helpers)
└── App.tsx              # Router configuration + theme application
```

### Path Aliases (tsconfig.json)
```
@/*              → src/*
@/components/*   → src/components/*
@/pages/*        → src/pages/*
@/lib/*          → src/lib/*
@/types/*        → src/types/*
```

## Critical Development Rules

### Security & Compliance (CRITICAL)
1. **Never expose secrets** (API keys, webhooks, tokens) in code or logs
2. **Authentication required** on all routes/APIs (future Supabase integration)
3. **Logging with masking** - register NFRs (latency, throughput, SLO/SLI) only in sanitized logs
4. **NEVER delete data/tables/records** without:
   - Explicit authorization from user
   - Reconfirmation (2x)
   - Documented rollback plan
   - **NEVER execute destructive commands via terminal/CLI** - only provide queries to user

### Code Quality Standards

#### ESLint Requirements (MANDATORY)
- Hooks only in functional components or custom hooks
- `exhaustive-deps` consistent (stabilize with useCallback/useMemo/useRef)
- Stable `key` prop in lists (never use array index - use semantic IDs)
- All `<img>` must have `alt` attributes
- External links: `target="_blank"` with `rel="noopener noreferrer"`
- Zero unused variables/imports
- No `any` type in TypeScript
- Auto-fix after every generate/edit operation

#### React/TypeScript Conventions
- **Naming:** PascalCase for components, camelCase for variables/functions
- **TypeScript:** Strict mode, explicit types required
- **Components:** Functional + hooks only (useState, useEffect, custom hooks)
- **Imports Order:** External libs → Components → Utils → Types
- **Styling:** Tailwind classes only; `globals.css` for tokens/utilities
- **Pages:** Must have `overflow-y-auto` for scroll behavior

#### Mock Data vs. Integration
- **NEVER use mock data as fallback** unless project explicitly requires it
- Current state: Mock data only (`src/lib/mockData.ts`) - Supabase integration planned
- All integration logic must be verified correct before considering complete

### Component Patterns

#### Button Pattern (`.btn-neon`, `.btn-outline`)
```tsx
<button className="btn-neon">Primary Action</button>
<button className="btn-outline">Secondary Action</button>
```

#### Card Pattern (50/50 split with image)
```tsx
<div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
  <div className="grid grid-cols-1 md:grid-cols-2">
    <div className="p-5 md:p-6 space-y-3">Content</div>
    <div className="bg-black p-4 md:border-l flex items-center justify-center">
      <img src="..." alt="..." className="max-w-full w-full h-auto md:max-h-[320px] object-cover" />
    </div>
  </div>
</div>
```

#### Modal Pattern (CSS-only zoom)
```tsx
<a href="#modal-id">Open</a>
<div id="modal-id" class="modal fixed inset-0 z-[12000] bg-black/80 flex items-center justify-center" role="dialog">
  <a href="#" class="absolute inset-0"></a>
  <div class="relative"><img src="..." class="max-h-[85vh] object-contain" /></div>
</div>
```

CSS in `globals.css`:
```css
.modal { display: none; }
.modal:target { display: flex; }
html:has(.modal:target), body:has(.modal:target) { overflow: hidden; }
```

## Development Workflow (PREVC Methodology)

The project follows **PREVC cycle** (Planejar, Revisar, Executar, Validar, Confirmar):

### Your Primary Scope: Execution (E)
- Implement features/hotfixes as approved
- Write tests (unit/integration/E2E)
- Handle migrations
- Create implementation diagrams when needed
- **NEVER do exploratory development without a linked Task**

### Planning (P) & Review (R) - When Requested
- Use BMAD methodology for PRD generation
- Base on project brief and requirements
- Coordinate with Gemini for backlog/risk tracking

### Validation (V) & Confirmation (C)
- Run `npm run lint` (must pass with --max-warnings=0)
- Run `npm run build` (must compile without errors)
- Run `npm run test` (all tests must pass)
- Update documentation when completing significant features

## Key Files & Documentation

### Primary Documentation
- **AGENTS.md** - Main orchestrator context (read FIRST in new sessions)
- **PROGRESS.md** - Current status and roadmap
- **WORKFLOWS.md** - BMAD methodology and agent coordination
- **BUGS.md** - Known issues and solutions
- **ementa.md** - Complete course syllabus

### Implementation References
- **PRD:** `.trae/documents/PRD.md`
- **Briefings:** `Contexto/Aula XX/briefing_XX.md`
- **Slide Content:** `Contexto/Aula XX/aula_XX.md`
- **Quiz Questions:** `Contexto/Aula XX/quiz_XX.md`

## MCP Server Integration

This project extensively uses Model Context Protocol (MCP) servers for enhanced development:

### Critical MCP Servers

#### 1. Byterover MCP (MANDATORY)
**Usage:** Persistent knowledge storage and retrieval
- **MUST use** when learning new patterns, APIs, or architectural decisions
- **MUST use** before starting tasks to gather relevant context
- Tools: `byterover-store-knowledge`, `byterover-retrieve-knowledge`

#### 2. Context7 MCP
**Usage:** Library documentation and API references
- Tools: `resolve-library-id`, `get-library-docs`
- Use when checking compatibility or library usage

#### 3. Z.ai Vision MCP (REQUIRED for images)
**Usage:** Image and screenshot analysis
- **ALWAYS use** for any image/screenshot provided by user
- Tool: `analyze_image`
- Never use local vision or ignore MCP when available

#### 4. Perplexity MCP
**Usage:** Research and complex reasoning
- Tools: `search`, `reason`, `deep_research`
- Use for real-time research, comparisons, and analysis

#### 5. Firecrawl MCP
**Usage:** Web scraping and content extraction
- Tools: `firecrawl_scrape`, `firecrawl_map`, `firecrawl_search`
- Use for extracting site content and discovering URLs

#### 6. Testsprite / Chrome DevTools MCP
**Usage:** Browser automation and debugging
- Use for E2E tests and browser analysis

### MCP Workflow Integration
1. **Research** → Context7/Perplexity
2. **Images** → Z.ai Vision (ALWAYS)
3. **Web Scraping** → Firecrawl
4. **Testing** → Testsprite/Playwright
5. **Memory** → Byterover (MANDATORY for significant work)

## Slide & Quiz Content Patterns

### Slide Format (Markdown in mockData.ts)
```typescript
{
  id: 'slide-XX',
  order: XX,
  title: 'Slide Title',
  type: 'text' | 'code',
  content: `
    # Header
    Paragraph text with **bold** and *italic*
    
    | Col 1 | Col 2 |
    |-------|-------|
    | Val 1 | Val 2 |
    
    <div class="grid grid-cols-2 gap-6">
      <!-- HTML cards for complex layouts -->
    </div>
  `
}
```

### Quiz Format (Markdown in Contexto/Aula XX/quiz_XX.md)
```markdown
### Pergunta 1
Question text here?
A) Option A text
B) Option B text
C) Option C text
D) Option D text
**Resposta:** B
```

**Critical:** 30 questions required per lesson (3 rounds × 10 questions)

## Build Configuration

### Vite Configuration
- **Dev/Preview Port:** 8080 (strict)
- **Path Alias:** `@` → `./src`
- **Code Splitting:** Manual chunks for react-vendor, ui-components, features, quiz-system, slide-system
- **Chunk Size Warning:** 600KB limit
- **Build Target:** esnext with esbuild minification

### TypeScript Configuration
- **Strict Mode:** Enabled
- **Target:** ES2020
- **Module:** ESNext with bundler resolution
- **Unused Checks:** noUnusedLocals, noUnusedParameters enabled

## Common Tasks & Gotchas

### Adding New Lesson Content
1. Create markdown files in `Contexto/Aula XX/`:
   - `briefing_XX.md` (objectives and criteria)
   - `aula_XX.md` (slide structure)
   - `quiz_XX.md` (30 questions)
2. Update `src/lib/mockData.ts`:
   - Add `mockSlidesAulaXX` array
   - Add to `mockSlideDecks` with correct `lessonId`
3. Update `quizLoader.ts` to recognize new `lessonId`
4. Create unit tests in `src/lib/__tests__/`
5. Validate in preview (`npm run dev`)

### Debugging Slide Rendering Issues
- **Tables not rendering:** Check `processMarkdownTable()` in SlideViewer.tsx
- **Images not showing:** Verify path in `/Contexto/Aula XX/imagens/`
- **Modal not opening:** Check CSS `.modal:target` in globals.css
- **Lists showing duplicate bullets:** Verify `list-none` class applied

### Quiz System Issues
- **Wrong question count:** Verify markdown has exactly 30 questions with valid format
- **Rounds not unlocking:** Check `hasUnlockedRound()` logic in QuizPage.tsx
- **Answers not persisting:** Clear localStorage (`quiz_*` keys) and retest
- **Status incorrect:** Check `getRoundStatus()` in quizStatus.ts

### Theme System Issues
- **Theme not persisting:** Check localStorage `theme` key
- **Colors not switching:** Verify `html.dark` class application in theme.ts
- **Neon buttons wrong color:** Check `globals.css` for `.btn-neon` definition

## Preview & Testing Protocol

### Pre-Commit Checklist
1. ✅ `npm run lint` passes with --max-warnings=0
2. ✅ `npm run build` completes without errors
3. ✅ `npm run test` all tests passing
4. ✅ Preview validated at `http://localhost:8080/`
5. ✅ No console errors in browser DevTools
6. ✅ Responsive behavior tested (mobile, tablet, desktop)
7. ✅ Theme switching functional (dark/light/auto)

### Always Start in Preview
- Run `npm run dev` first for sanity check
- Check browser console for errors
- Verify navigation and routing work
- Test theme toggle functionality

## Supabase Integration (Future)

Planned integration points:
- **Auth:** User authentication and roles (Aluno/Moderador)
- **Database:** PostgreSQL with RLS policies
- **Tables:** users, lessons, quizzes, quiz_attempts, forum_topics, gallery_posts
- **Storage:** User-uploaded content (avatars, challenge submissions)

**Current State:** All data from `src/lib/mockData.ts` - no backend integration yet

## Language & Communication

- **Primary Language:** Portuguese (pt-BR)
- **Formal Address:** Use "senhor" when addressing user
- **Tone:** Professional, technical, skeptical (healthy skepticism)
- **Output Style:** Concise, direct, technically accurate
- **Documentation:** Update AGENTS.md and relevant docs after significant changes

---

**Last Updated:** 2025-11-10
**Project Status:** Phase 1 - Content Structuring & Core Implementation
**Next Milestone:** Complete Aula 06-08 content + Supabase integration
