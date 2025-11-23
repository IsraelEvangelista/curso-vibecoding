import { Slide } from "@/types";

export const mockSlidesAula6: Slide[] = [
  {
    id: "aula6-slide1",
    order: 1,
    title: "Abertura",
    type: "text",
    content: `## Projeto Prático: FiscalFlow

**Objetivo:** Sair do zero para um banco de dados estruturado e seguro, utilizando IA para definição de requisitos e geração de SQL.

**Projeto:** FiscalFlow (Gestão Financeira Pessoal)

> Nesta aula, vamos construir a fundação do nosso projeto prático.`,
  },
  {
    id: "aula6-slide2",
    order: 2,
    title: "O Briefing Técnico",
    type: "text",
    content: `A "fonte da verdade" para o Agente de IA.

## Recurso Fornecido
Você receberá o arquivo \`briefing.md\` pronto. Ele contém:

1. **Visão do Produto:** App mobile-first para rastrear despesas via fotos.
2. **Fluxos Críticos:** Captura, Processamento (OCR) e Visualização.
3. **Stack Tecnológica:** React.js, Vite, TypeScript, Tailwind, Supabase, n8n.
4. **Regras de Negócio:** Status de transação, RLS obrigatório.

> **Sua Missão:** Usar este arquivo para gerar o **PRD.md** e a documentação técnica.`,
  },
  {
    id: "aula6-slide3",
    order: 3,
    title: "Geração de Documentação",
    type: "text",
    content: `Use o \`briefing.md\` para gerar a documentação de suporte com seu Agente de IA (Cursor/Windsurf).

**Prompt Sugerido:**
> "Atue como um Product Manager Sênior. Com base no arquivo briefing.md aberto, gere dois arquivos:
> 1. **PRD.md:** Documento de requisitos detalhado com histórias de usuário e critérios de aceite.
> 2. **EPICS.md:** Divida o projeto em 3 marcos (Milestones) lógicos para desenvolvimento incremental.
> Seja técnico e específico quanto ao uso do Supabase."`,
  },
  {
    id: "aula6-slide4",
    order: 4,
    title: "Configuração do Banco de Dados",
    type: "text",
    content: `Acesse o [Supabase Dashboard](https://supabase.com/dashboard) e use o SQL Editor.

**Prompt para Gerar Schema:**
> "Crie um script SQL para o FiscalFlow.
> 1. A tabela de usuários deve ser a nativa \`auth.users\`.
> 2. Tabela transactions com: uuid, user_id (FK para auth.users), image_url, amount, merchant, category, date, status (enum).
> 3. Habilite RLS em todas as tabelas."`,
  },
  {
    id: "aula6-slide5",
    order: 5,
    title: "Script de Referência",
    type: "text",
    content: `\`\`\`sql
-- Criar Enum para status
CREATE TYPE transaction_status AS ENUM ('pending', 'completed', 'failed');

-- Tabela de Transações
CREATE TABLE transactions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  image_url TEXT NOT NULL,
  amount NUMERIC(10, 2),
  merchant TEXT,
  category TEXT,
  transaction_date TIMESTAMP WITH TIME ZONE,
  status transaction_status DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Habilitar RLS
ALTER TABLE transactions ENABLE ROW LEVEL SECURITY;
\`\`\``,
  },
  {
    id: "aula6-slide6",
    order: 6,
    title: "Segurança Obrigatória (RLS)",
    type: "text",
    content: `Sem RLS, o aplicativo é inseguro. Execute no SQL Editor:

\`\`\`sql
-- Política: Usuário só vê suas próprias transações
CREATE POLICY "Users can view own transactions"
ON transactions FOR SELECT
USING (auth.uid() = user_id);

-- Política: Usuário pode inserir (upload inicial)
CREATE POLICY "Users can insert own transactions"
ON transactions FOR INSERT
WITH CHECK (auth.uid() = user_id);

-- Política: Usuário pode atualizar
CREATE POLICY "Users can update own transactions"
ON transactions FOR UPDATE
USING (auth.uid() = user_id);
\`\`\``,
  },
  {
    id: "aula6-slide7",
    order: 7,
    title: "Tarefa de Casa",
    type: "text",
    content: `1. **Criar projeto** no Supabase.
2. **Rodar as migrações SQL** (Schema + RLS).
3. **Testar a criação de uma linha manual** na tabela \`transactions\` via Table Editor e verificar se o \`user_id\` é exigido.

> Na próxima aula, conectaremos a inteligência (n8n) a este banco de dados.`,
  },
];
