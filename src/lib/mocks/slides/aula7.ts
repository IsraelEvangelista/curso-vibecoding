import { Slide } from "@/types";

export const mockSlidesAula7: Slide[] = [
  {
    id: "aula7-slide1",
    order: 1,
    title: "Automação Cognitiva com n8n",
    type: "text",
    content: `## O "Cérebro" do Sistema

**Objetivo:** Criar um fluxo automatizado que processa imagens de recibos e devolve dados estruturados JSON, sem escrever código backend complexo.

> Nesta aula, vamos conectar o Supabase Storage, a IA Generativa e o Banco de Dados usando o n8n.`,
  },
  {
    id: "aula7-slide2",
    order: 2,
    title: "1. Preparação do Storage",
    type: "text",
    content: `No Supabase Dashboard -> Storage:

1. **Criar Bucket:** Nomeie como \`receipts\`.
2. **Configuração:** Defina como **Privado** (Private).
3. **Policy (RLS):** Adicione permissão para uploads autenticados.

\`\`\`sql
-- Exemplo de lógica da policy
(storage.foldername(name))[1]::uuid = auth.uid()
\`\`\`

> Isso força que os arquivos sejam salvos em pastas com o ID do usuário, garantindo isolamento.`,
  },
  {
    id: "aula7-slide3",
    order: 3,
    title: "2. Workflow n8n: Trigger & Download",
    type: "text",
    content: `Crie um novo workflow no n8n.

### Nó 1: Webhook (Trigger)
- **Método:** POST
- **Caminho:** \`/process-receipt\`
- **Auth:** Header Auth (ex: \`x-auth-key: vibe-coding-secret\`)
- **Campos:** \`user_id\`, \`image_path\`

### Nó 2: Supabase (Download)
- **Operação:** Storage -> Download
- **Bucket:** \`receipts\`
- **File Path:** \`{{ $json.body.image_path }}\`
- **Credencial:** Use a **Service Role Key** para acesso administrativo.`,
  },
  {
    id: "aula7-slide4",
    order: 4,
    title: "3. Workflow n8n: OCR & Agente",
    type: "text",
    content: `### Nó 3: OpenAI (OCR)
Use o node específico da OpenAI (ou Google/Anthropic) para visão computacional.

### Nó 4: Agente de IA
Adicione um node **Agent** para organizar as informações extraídas pelo OCR.
- O Agente recebe o texto/JSON bruto.
- Ele estrutura os dados para o formato final desejado.`,
  },
  {
    id: "aula7-slide5",
    order: 5,
    title: "4. Workflow n8n: Tool (Database)",
    type: "text",
    content: `### Nó 5: Tool (Supabase)
O Agente deve ter acesso a uma **Tool** para interagir com o banco de dados.

- **Tool:** Configurada para realizar o \`INSERT\` ou \`UPDATE\` na tabela \`transactions\`.
- **Ação:** O Agente chama essa tool automaticamente quando os dados estiverem prontos.

> Isso substitui a necessidade de nós de "Code" complexos para sanitização manual.`,
  },
  {
    id: "aula7-slide6",
    order: 6,
    title: "Resumo do Fluxo",
    type: "text",
    content: `1. **Webhook:** Recebe imagem.
2. **Download:** Baixa do Storage.
3. **OCR (OpenAI):** Lê a imagem.
4. **Agent:** Interpreta e estrutura.
5. **Tool:** Salva no Supabase.

> Um fluxo mais moderno e resiliente, usando o poder dos Agentes de IA.`,
  },
  {
    id: "aula7-slide7",
    order: 7,
    title: "Testando o Fluxo",
    type: "code",
    content: `Teste o webhook via cURL ou Postman antes de integrar no frontend.

\`\`\`bash
curl -X POST <SEU_WEBHOOK_N8N> \\
-H "x-auth-key: vibe-coding-secret" \\
-H "Content-Type: application/json" \\
-d '{
  "user_id": "uuid-do-usuario",
  "image_path": "uuid-do-usuario/recibo-teste.jpg"
}'
\`\`\`

> Se funcionar, a tabela \`transactions\` será atualizada magicamente!`,
  },
  {
    id: "aula7-slide8",
    order: 8,
    title: "Tarefa de Casa",
    type: "text",
    content: `1. **Upload Manual:** Faça upload de uma imagem no Supabase Storage.
2. **Disparo Manual:** Execute o workflow (ou o cURL) com o caminho dessa imagem.
3. **Verificação:** Confirme se os dados apareceram na tabela \`transactions\`.

> Na próxima aula, criaremos a interface (UI) para fazer isso pelo app!`,
  },
];
