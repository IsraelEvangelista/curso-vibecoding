# Workflow: Implementação de Chat Real-Time com Supabase

Este documento detalha a arquitetura e o fluxo de implementação da funcionalidade de chat em tempo real na plataforma Vibe Coding.

## 1. Arquitetura Geral

O sistema utiliza **Supabase Realtime** para sincronização de mensagens e **React Context API** para gerenciamento de estado local, evitando re-renderizações desnecessárias e múltiplas conexões de socket.

### Componentes Chave
- **Database**: PostgreSQL (tabela `messages`)
- **Realtime**: Postgres Changes (escuta eventos `INSERT`)
- **Frontend State**: `CommunityContext`
- **UI**: Componentes modularizados (`Sidebar`, `ChatArea`, `MembersSidebar`)

## 2. Estrutura de Dados (Backend)

### Tabela `messages`
| Coluna | Tipo | Descrição |
|--------|------|-----------|
| `id` | uuid | Identificador único |
| `content` | text | Conteúdo da mensagem |
| `channel_id` | uuid | Canal de destino |
| `author_id` | uuid | Autor da mensagem |
| `created_at` | timestamp | Data de criação |

### Políticas de Segurança (RLS)
- **Leitura (`SELECT`)**: Permitida se o canal for público (`is_private = false`) OU se o usuário for membro (`channel_members`).
- **Escrita (`INSERT`)**: Permitida se `author_id` for o usuário atual E ele tiver permissão de leitura no canal.

## 3. Gerenciamento de Estado (Frontend)

O arquivo `src/context/CommunityContext.tsx` centraliza toda a lógica.

### Lógica de Assinatura (Subscription)
Em vez de criar uma assinatura por canal, utilizamos uma **única assinatura** filtrando eventos `INSERT` na tabela `messages`.

```typescript
const channel = supabase.channel('community_realtime')
  .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'messages' }, (payload) => {
    // Lógica de reconciliação
  })
  .subscribe();
```

### Lógica de Reconciliação (Payload Handling)
Quando uma nova mensagem chega (`payload.new`):

1.  **Verificação de Canal Ativo**:
    *   **Se `msg.channel_id === activeChannelId`**: A mensagem é adicionada ao estado `messages` imediatamente. O scroll é ajustado.
    *   **Se `msg.channel_id !== activeChannelId`**: O contador `unreadCounts` para aquele canal é incrementado.

2.  **Notificações e Menções**:
    *   Verifica se o conteúdo contém `@NomeDoUsuario`.
    *   Verifica se é um canal de DM (convenção `dm-*`).
    *   Se positivo, incrementa `notificationCount`.

## 4. Tratamento de Erros e Robustez

### Proteção no Envio (`sendMessage`)
Para garantir que o usuário não fique "no escuro" caso o envio falhe (ex: RLS bloqueando):

```typescript
try {
  const { error } = await supabase.from('messages').insert({ ... });
  if (error) alert('Erro: ' + error.message);
} catch (err) {
  console.error(err);
}
```

### Correção de Triggers (Edge Case)
Um problema comum em ambientes de desenvolvimento/staging é triggers que dependem de webhooks (Edge Functions) falharem se a URL não estiver configurada.

**Solução Aplicada**: O trigger `fn_notify_message_new` foi alterado para verificar a existência da configuração antes de tentar o POST e capturar exceções para não bloquear o INSERT principal.

```sql
-- Exemplo da correção SQL aplicada
v_url := current_setting('app.notify_function_url', true);
if v_url is not null then
  -- perform request
end if;
-- exception when others -> raise warning, return NEW
```

## 5. Otimizações de Performance

1.  **Context Split**: A UI foi dividida em `Sidebar` (renderiza com mudanças de categoria/counts) e `ChatArea` (renderiza com novas mensagens), prevenindo que a digitação no chat force a renderização da lista de canais.
2.  **Optimistic Updates**: O feedback visual é imediato via Realtime (local reflection), mas o `sendMessage` espera a confirmação do banco para garantir consistência.
3.  **Lazy Loading**: A lista de membros e mensagens antigas (scroll infinito - a implementar) são carregadas sob demanda.

## 6. Próximos Passos (Roadmap)

- [ ] Implementar Scroll Infinito (carregar mensagens antigas ao rolar para cima).
- [ ] Implementar Upload de Arquivos (restaurar funcionalidade na nova estrutura).
- [ ] Melhorar tratamento de DMs (criar canais privados dinamicamente na UI).
