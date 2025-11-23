# TRAE: Contexto de Agente

## Visão Geral
- Projeto: Curso Vibe Coding — Plataforma de Aprendizado (React 18 + TypeScript + Vite + Tailwind)
- Governança: Este arquivo concentra o contexto dos agentes e referências a decisões técnicas.

## Implementações Recentes
1. Comunidade (Discord-like):
   - Mensagens reais via Supabase (`public.messages`) com envio, leitura, anexos.
   - Edição (autor/admin), exclusão (admin) e resposta (`reply_to_id`).
   - Sidebar com segmentos e canais reais (`community_categories`, `community_channels`).
   - CRUD de segmentos/canais (admin) com cascata (schema `ON DELETE CASCADE`).
- Presença: `profiles.last_seen_at` atualizado via RPC `touch_last_seen`.
- Badge ADMIN substitui rótulo BOT.

### Comunidade — melhorias (2025-11)
- Realtime de mensagens com de-duplicação (evita `key` duplicada).
- Anexos por botão `+`: upload para bucket `community` e vínculo em `message_attachments`.
- Emojis: picker suspenso acima do ícone com ampla variedade.
- GIF: ícone removido.
- Menções: `@` isolado lista todos os usuários; com texto, filtra por nome.
- Ações por mensagem: Responder (sempre), Editar (autor), Apagar (autor/admin).
- Notificações: dropdown no ícone (DMs e menções; clique navega ao canal).
- DMs: agrupadas em segmento virtual “Mensagens Privadas” (último grupo) e exibição de nome do usuário (não o id).
- Texto em DM: “Diga olá para #{usuário}”.

### Infra de Dev
- Dev server na porta `8081` (estável quando tarefas usam `8080`).
- Favicon: `/src/assets/dashmaker_logo.png`.

## Pendência de Teste (renderização em tempo real)
- Validação obrigatória: confirmar se a renderização dinâmica (Supabase Realtime em `Comunidade`) atualiza mensagens e notificações sem refresh.
- Procedimento: abrir duas sessões (ou navegadores), enviar mensagem em um canal e verificar atualização imediata na outra sessão; conferir badges e sino.
- Lembrete automático: ao iniciar uma nova sessão e ler este arquivo, o agente deve lembrar o dev desta pendência e perguntar se o teste já foi feito.

2. Contagens e Notificações (otimização):
   - RPC `get_unread_counts(uid)` retorna não lidas por `channel_id`.
   - RPC `get_notifications(uid, display_name)` retorna `{dm_unread, mentions_unread}`.
   - Frontend usa apenas RPCs para badges (canais e sino), removendo múltiplas consultas REST.

3. Aulas/Slides:
   - `loadSlideDeck(id)` resolve `lesson_number` no Supabase quando UUID não está no mapa e carrega `aulaN` correspondente.

4. Correção SlideViewer e Navegação:
   - `escapeHtml` padronizado para evitar erros de string e proteger contra XSS básico.
   - Navegação de saída (`handleExit`) corrigida em `AulaSlidePage.tsx`:
     - Prioriza `slideDeck.courseId` (adicionado à interface `SlideDeck` e carregado via `loadSlideDeck`).
     - Substituído `window.location.href` por `navigate` para evitar reload e perda de sessão.
   - Slides da Aula 06 implementados e ajustados (remoção de títulos duplicados).

5. Slides Aula 07 (Concluído):
   - Slides implementados com foco em Automação Cognitiva com n8n.
   - Loader atualizado e verificado.

6. Slides Aula 08 (Em andamento):
   - Foco: Interface Generativa (v0.dev), Upload Inteligente, Realtime e Deploy.

## Decisões e Segurança
- RLS equilibradas em `2025112013_community_policies.sql`.
- Funções RPC `SECURITY DEFINER` com `search_path = public`.
- `.env` e variáveis sensíveis ignoradas pelo Git; `.env.example` pode ser mantido como template (sem segredos).

## Referências de Código
- Aulas → `src/lib/slideDeckLoader.ts:20-64`
- Comunidade → `src/components/features/Comunidade.tsx`
  - Envio: `handleSendMessage`
  - Leitura: efeito `updateRead`
  - CRUD: `createCategory`, `renameCategory`, `deleteCategory`, `createChannel`, `renameChannel`, `deleteChannel`
  - RPCs: efeito `computeUnreadRpc`
  - Realtime: assinatura `messages:${dbChannelId}` com handlers `INSERT/UPDATE/DELETE`
  - Notificações: `notificationItems` dropdown acionado pelo Bell
  - Menções: `mentionCandidates` e sobreposição de sugestões
  - DMs: `dmNames` e `getChannelLabel`
- AuthContext → `src/context/AuthContext.tsx`

## Docs e Arquivos Relacionados
- Supabase Migrations (locais, não versionadas):
  - `supabase/migrations/2025112012_community_schema.sql`
  - `supabase/migrations/2025112013_community_policies.sql`
  - `supabase/migrations/2025112014_profiles_read_all.sql`
  - `supabase/migrations/2025112015_seed_community.sql`
  - `supabase/migrations/2025112016_create_storage_bucket.sql`
  - `supabase/migrations/2025112017_touch_last_seen.sql`
  - `supabase/migrations/2025112018_get_unread_counts.sql`
  - `supabase/migrations/2025112019_get_notifications.sql`

## Próximos Passos (sugeridos)
- Threads visuais para replies.
- Menções por handle estável (ex.: `@israel`).
- Debounce e AbortController nos efeitos (se necessário).