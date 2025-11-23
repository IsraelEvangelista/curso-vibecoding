# Projeto FiscalFlow - Briefing Técnico

Este documento serve como a "fonte da verdade" para o desenvolvimento do projeto FiscalFlow durante as aulas 06, 07 e 08. Use-o como contexto para seu Agente de IA.

---

## 1. Visão do Produto

Uma aplicação web mobile-first para freelancers rastrearem despesas automaticamente através de fotos de recibos. O foco é velocidade de captura e feedback visual imediato.

### Fluxos Críticos (Core Loops)
1.  **Captura:** Usuário faz login, tira foto de um recibo.
2.  **Processamento:** O sistema extrai data, valor, local e categoria automaticamente (OCR via IA).
3.  **Visualização:** Usuário vê um dashboard com gastos do mês atualizados em tempo real.

---

## 2. Stack Tecnológica (Restrições Estritas)

*   **Frontend:** React.js, Tailwind CSS, Shadcn UI, Vite, TypeScript.
*   **IDE:** TRAE Solo.
*   **Backend/Dados:** Supabase (Auth, Postgres Database, Storage, Realtime).
*   **Automação/Lógica:** n8n (Fluxo com Agente de IA).
*   **IA:** OpenAI (Node OCR), Google ou Anthropic.

---

## 3. Arquitetura de Dados (Supabase)

### Tabelas
1.  **users:** A autenticação deve utilizar a tabela nativa `auth.users` do Supabase.
2.  **transactions:**
    *   `id` (UUID, PK)
    *   `user_id` (UUID, FK para `auth.users`)
    *   `image_url` (text)
    *   `amount` (numeric)
    *   `merchant` (text)
    *   `category` (text)
    *   `transaction_date` (timestamp)
    *   `status` (enum: 'pending', 'completed', 'failed')

### Segurança (RLS)
*   **Obrigatório:** Row Level Security (RLS) habilitado em todas as tabelas.
*   **Políticas:** Usuários só podem visualizar, inserir e atualizar seus próprios dados (`auth.uid() = user_id`).

### Storage
*   Bucket: `receipts` (Privado).
*   Policy: Permitir upload apenas para pastas do próprio usuário.

---

## 4. Automação (n8n Workflow)

O "cérebro" do sistema processa a imagem e devolve dados estruturados.

1.  **Trigger:** Webhook POST `/process-receipt` (recebe `user_id`, `image_path`).
2.  **Download:** Baixa imagem do Supabase Storage.
3.  **OCR (OpenAI Node):** Usa o node específico da OpenAI (ou Google/Anthropic) para realizar o OCR da imagem.
4.  **Agente de IA:** Um node Agent organiza as informações extraídas.
5.  **Tool (Supabase):** O Agente utiliza uma Tool para inserir/atualizar os dados estruturados diretamente no banco de dados Supabase.

---

## 5. Interface e Realtime

### Dashboard (v0.dev / Lovable)
*   Sidebar de navegação.
*   Cards de resumo (Gasto Total, etc.).
*   Botão "Novo Recibo" (Dialog).
*   Tabela de transações recentes.

### Upload Inteligente
1.  Upload direto para Supabase Storage.
2.  Criação de registro 'placeholder' na tabela `transactions` com status 'pending'.
3.  Disparo do Webhook do n8n (Fire and Forget).

### Realtime Feedback
*   Uso de `supabase.channel` para escutar `UPDATE` na tabela `transactions`.
*   Atualização automática da UI quando o n8n concluir o processamento (status muda de 'pending' para 'completed').

---

### Boas Práticas de Ambiente
*   **`.env`**: Arquivo para variáveis de ambiente e segredos (NUNCA commitar).
*   **`.env.example`**: Template padrão das variáveis (sem valores reais) para facilitar o setup de outros devs.
*   **`.gitignore`**: Deve incluir `.env`, `node_modules`, etc.

---

## 6. Deploy

*   **Frontend:** Vercel.
*   **Variáveis de Ambiente:**
    *   `VITE_SUPABASE_URL`
    *   `VITE_SUPABASE_ANON_KEY`
    *   URL do Webhook n8n

