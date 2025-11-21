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

2. Contagens e Notificações (otimização):
   - RPC `get_unread_counts(uid)` retorna não lidas por `channel_id`.
   - RPC `get_notifications(uid, display_name)` retorna `{dm_unread, mentions_unread}`.
   - Frontend usa apenas RPCs para badges (canais e sino), removendo múltiplas consultas REST.

3. Aulas/Slides:
   - `loadSlideDeck(id)` resolve `lesson_number` no Supabase quando UUID não está no mapa e carrega `aulaN` correspondente.

4. Correção SlideViewer:
   - `escapeHtml` padronizado para evitar erros de string e proteger contra XSS básico (uso de `&amp;`, `&lt;`, `&gt;`, `&quot;`, `&#39;`).

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