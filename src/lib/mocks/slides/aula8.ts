import { Slide } from "@/types";

export const mockSlidesAula8: Slide[] = [
  {
    id: "aula8-slide1",
    order: 1,
    title: "Interface Generativa, Realtime e Deploy",
    type: "text",
    content: `## O Gran Finale

**Objetivo:** Construir a interface visual usando IA generativa (v0.dev), conectar tudo e colocar em produção.

> Nesta aula, vamos sair do backend e ver a mágica acontecer na tela do usuário.`,
  },
  {
    id: "aula8-slide2",
    order: 2,
    title: "1. Generative UI com v0.dev",
    type: "text",
    content: `Não vamos escrever CSS na mão. Use o **v0.dev** (ou Lovable) para gerar a base.

**Prompt de UI Sugerido:**
> "Crie um Dashboard Financeiro moderno usando Shadcn UI e Tailwind.
> 1. Sidebar lateral escura.
> 2. Cards no topo: 'Gasto Total', 'Transações', 'Orçamento'.
> 3. Botão destaque 'Novo Recibo' (abre Modal).
> 4. Tabela de transações recentes (Data, Estabelecimento, Categoria, Valor).
> Estilo clean, modo dark padrão."

*Ação:* Copie o código gerado (\`npx v0 add...\`) para seu projeto.`,
  },
  {
    id: "aula8-slide3",
    order: 3,
    title: "2. Upload Inteligente (Client Side)",
    type: "code",
    content: `Crie o componente \`UploadReceipt.tsx\`. Ele faz 3 coisas:

\`\`\`typescript
const uploadFile = async (file) => {
  const fileName = \`\${user.id}/\${Date.now()}-\${file.name}\`;

  // 1. Upload pro Storage
  await supabase.storage.from('receipts').upload(fileName, file);

  // 2. Placeholder no Banco (status: pending)
  await supabase.from('transactions').insert({
    user_id: user.id,
    image_url: fileName,
    status: 'pending'
  });

  // 3. Avisar o n8n (Webhook)
  fetch('SEU_WEBHOOK_N8N', {
    method: 'POST',
    headers: { 'x-auth-key': 'SEU_SECRET' },
    body: JSON.stringify({ user_id: user.id, image_path: fileName })
  });
};
\`\`\``,
  },
  {
    id: "aula8-slide4",
    order: 4,
    title: "3. A Mágica do Realtime",
    type: "code",
    content: `Para ver o status mudar sem refresh, use **Supabase Realtime**.

\`\`\`typescript
useEffect(() => {
  const channel = supabase
   .channel('transactions-changes')
   .on(
      'postgres_changes',
      {
        event: 'UPDATE',
        schema: 'public',
        table: 'transactions',
        filter: \`user_id=eq.\${userId}\`
      },
      (payload) => {
        console.log('Mudança!', payload);
        router.refresh(); // Atualiza a UI
      }
    )
   .subscribe();

  return () => { supabase.removeChannel(channel) }
}, [supabase, userId]);
\`\`\``,
  },
  {
    id: "aula8-slide5",
    order: 5,
    title: "4. Boas Práticas e Deploy",
    type: "text",
    content: `### Variáveis de Ambiente
- **.env:** Segredos locais (NUNCA commitar).
- **.env.example:** Template para o time.
- **.gitignore:** Deve ignorar o \`.env\`.

### Deploy na Vercel
1. **GitHub:** Push do código.
2. **Vercel:** Importe o projeto (Vite).
3. **Vars:** Configure \`VITE_SUPABASE_URL\`, \`VITE_SUPABASE_ANON_KEY\`.

> **Deploy!** 🚀`,
  },
  {
    id: "aula8-slide6",
    order: 6,
    title: "Checklist Final (Demo Day)",
    type: "text",
    content: `Teste de ponta a ponta (E2E) manual:

1. **Login:** Acesse o app em produção (pelo celular).
2. **Captura:** Tire foto de um recibo real.
3. **Feedback:** Veja o card aparecer como "Processando...".
4. **Resultado:** Aguarde ~5s e veja os dados (Valor, Local) aparecerem magicamente.

**Parabéns! Você construiu um sistema de IA completo.** 🎉`,
  },
];
