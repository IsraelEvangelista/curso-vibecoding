import { Slide } from "@/types";

export const mockSlidesAula5: Slide[] = [
  {
    id: "aula5-slide1",
    order: 1,
    title: "Abertura da Aula 05",
    type: "text",
    content: `# Boas Práticas, Git/GitHub & BMAD (PRD)
## Fundamentos de Desenvolvimento Profissional e Estruturação de Projetos

### Informações da Aula:
- **Controle de versão** com Git/GitHub
- **Segurança e conformidade** LGPD
- **Metodologia BMAD** para PRDs
- **Configuração de pipelines** profissionais

**Duração:** 90 minutos | **Professor:** Israel Evangelista | **Aula 05 de 08**

💡 *Git não é apenas controle de versão, é comunicação entre desenvolvedores*`,
  },
  {
    id: "aula5-slide2",
    order: 2,
    title: "Objetivos Específicos da Aula",
    type: "text",
    content: `# O Que Você Vai Dominar Hoje?

## 🔄 **CONTROLE DE VERSÃO PROFISSIONAL**
- Configurar Git/GitHub com SSH
- Dominar fluxos de branches e pull requests
- Implementar estratégias de merge
- Aplicar boas práticas de commit

## 🛡️ **SEGURANÇA E COMPLIANCE**
- Configurar .env e variáveis de ambiente
- Implementar .gitignore adequado
- Sanitizar logs e dados sensíveis
- Garantir conformidade LGPD

## 📋 **ESTRUTURAÇÃO COM BMAD**
- Aplicar metodologia BMAD
- Criar PRDs profissionais
- Definir acceptance criteria
- Estruturar contexto de projeto

## ⚙️ **PIPELINES E AUTOMATIZAÇÃO**
- Configurar pipeline básico
- Implementar validação local
- Estabelecer deployment workflow
- Documentar processos

📊 *Preview visual do resultado final: repositório + PRD*`,
  },
  {
    id: "aula5-slide3",
    order: 3,
    title: "Git: Conceitos Fundamentais",
    type: "text",
    content: `# Git: O Sistema Nervoso do Desenvolvimento Colaborativo

## **WORKFLOW BÁSICO:**
**Working Directory** → **Staging Area** → **Local Repository** → **Remote Repository**

### 📁 **WORKING DIRECTORY**
- Arquivos sendo editados
- Mudanças não versionadas
- Status: modified, untracked

### 📋 **STAGING AREA (INDEX)**
- Preparação para commit
- Seleção de mudanças
- Staging, unstaging de arquivos

### 💾 **LOCAL REPOSITORY**
- Commits locais salvos
- Histórico permanente
- Branches e tags

### 🌐 **REMOTE REPOSITORY (GitHub)**
- Sincronização com equipe
- Backup e colaboração
- Pull requests e reviews

## **COMANDOS ESSENCIAIS:**
- \`git clone\`, \`git add\`, \`git commit\`
- \`git push\`, \`git pull\`, \`git status\`
- \`git branch\`, \`git merge\`, \`git checkout\`
- \`git log\`, \`git diff\`, \`git remote\``,
  },
  {
    id: "aula5-slide4",
    order: 4,
    title: "Configuração de Repositório - Passo a Passo",
    type: "text",
    content: `# Criando Seu Primeiro Repositório Profissional

## **ETAPA 1: INICIALIZAÇÃO LOCAL**
\`\`\`bash
# Navegar para diretório do projeto
cd meu-projeto-vibe-coding

# Inicializar repositório Git
git init

# Configurar Git (primeira vez apenas)
git config --global user.name "Seu Nome"
git config --global user.email "seu@email.com"

# Criar README.md
echo "# Meu Projeto Vibe Coding" > README.md

# Primeiro commit
git add README.md
git commit -m "feat: inicialização do projeto"
\`\`\`

## **ETAPA 2: CRIAÇÃO NO GITHUB**
- Criar repositório no GitHub (interface web)
- Copiar URL do repositório remoto
- Configurar descrição e visibilidade

## **ETAPA 3: CONEXÃO LOCAL-REMOTO**
\`\`\`bash
# Adicionar repositório remoto
git remote add origin https://github.com/usuario/projeto.git

# Verificar conexão
git remote -v

# Fazer push para main
git push -u origin main
\`\`\`

## **ESTRUTURA RECOMENDADA:**
\`\`\`
projeto/
├── README.md
├── .gitignore
├── src/
├── tests/
├── docs/
└── .env.example
\`\`\``,
  },
  {
    id: "aula5-slide5",
    order: 5,
    title: "SSH: Configuração Segura e Confiável",
    type: "text",
    content: `# SSH: Acesso Seguro ao GitHub

## **POR QUE SSH?**
✅ **Mais seguro** que HTTPS
✅ **Não requer senha** a cada push
✅ **Integração fluida** com Git
✅ **Suporte a deploy keys**
✅ **Acesso automatizado**

## **CONFIGURAÇÃO PASSO-A-PASSO:**

### **1️⃣ VERIFICAR CHAVES EXISTENTES**
\`\`\`bash
# Listar chaves SSH
ls -la ~/.ssh/

# Chave pública: id_rsa.pub ou id_ed25519.pub
\`\`\`

### **2️⃣ GERAR NOVA CHAVE (se necessário)**
\`\`\`bash
# Gerar chave ED25519 (recomendada)
ssh-keygen -t ed25519 -C "seu@email.com"

# Ou RSA 4096 bits
ssh-keygen -t rsa -b 4096 -C "seu@email.com"
\`\`\`

### **3️⃣ ADICIONAR AO AGENTE SSH**
\`\`\`bash
# Iniciar agente SSH
eval "$(ssh-agent -s)"

# Adicionar chave privada
ssh-add ~/.ssh/id_ed25519
\`\`\`

### **4️⃣ CONFIGURAR NO GITHUB**
- Copiar conteúdo de \`id_ed25519.pub\`
- Settings → SSH and GPG keys → New SSH key
- Colar chave e confirmar

### **5️⃣ TESTAR CONEXÃO**
\`\`\`bash
ssh -T git@github.com
# Resposta esperada: "Hi usuario! You've successfully authenticated"
\`\`\`

## **TROUBLESHOOTING:**
❌ **Permission denied:** Verificar chave adicionada
❌ **Agent has no identities:** Executar ssh-add
❌ **Connection refused:** Verificar firewall/antivírus`,
  },
  {
    id: "aula5-slide6",
    order: 6,
    title: "Branches e Estratégias de Merge",
    type: "text",
    content: `# Branches: Paralelizando Desenvolvimento

## **ESTRATÉGIAS DE BRANCHING:**

### 🌿 **FEATURE BRANCH WORKFLOW**
\`\`\`bash
# Criar branch para nova feature
git checkout -b feature/nova-funcionalidade

# Desenvolvimento na branch
git add .
git commit -m "feat: adiciona nova funcionalidade"

# Merge para main
git checkout main
git merge feature/nova-funcionalidade
\`\`\`

### 📊 **GITFLOW (ENTERPRISE)**
\`\`\`bash
# Branch main (produção)
# Branch develop (integração)
# Feature branches
# Release branches
# Hotfix branches
\`\`\`

## **TYPES DE BRANCHES:**
- **main:** Código em produção
- **develop:** Integração de features
- **feature/nome:** Novas funcionalidades
- **fix/bug-id:** Correções de bugs
- **release/v1.0:** Preparação de release
- **hotfix/urgente:** Correções em produção

## **ESTRATÉGIAS DE MERGE:**

### 🔄 **MERGE (padrão)**
- **Preserva** histórico completo
- **Cria** commit de merge
- **Ideal** para feature branches

### 🔀 **REBASE (limpeza)**
- **Lineariza** histórico
- **Evita** commits de merge
- **Ideal** para branches locais

### ⚡ **SQUASH (simplificação)**
- **Combina** commits em um
- **Histórico** mais limpo
- **Ideal** para feature branches pequenas

## **PULL REQUESTS:**
- **Code review** obrigatório
- **Discussão** de mudanças
- **Integração** controlada
- **Validação** automática

⚠️ **Golden Rule do Rebase:** Nunca fazer rebase de branches que já foram compartilhados!`,
  },
  {
    id: "aula5-slide7",
    order: 7,
    title: "Proteção de Secrets: Fundamento da Segurança",
    type: "text",
    content: `# Proteção de Secrets: Fundamento da Segurança

## **PRINCÍPIOS DE SEGURANÇA:**
🔐 **SEPARAÇÃO DE CONFIANÇA**
- Dados sensíveis **nunca** no código
- Configurações **por ambiente**
- Princípio do **menor privilégio**
- **Defense in depth**

## **ESTRUTURA DE .env FILES**

### **.env (NUNCA COMMITAR)**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:pass@localhost:5432/db
DATABASE_PASSWORD=super-secret-password

# API Keys
STRIPE_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxx
OPENAI_API_KEY=sk-xxxxxxxxxxxxxxxxxxxxxxxxxx

# JWT
JWT_SECRET=ultra-secret-jwt-key-256-bits

# Email
SMTP_PASSWORD=email-smtp-password
\`\`\`

### **.env.example (SEMPRE COMMITAR)**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/db_name
DATABASE_PASSWORD=your-database-password

# API Keys (obter em https://dashboard.stripe.com/apikeys)
STRIPE_SECRET_KEY=sk_test_your_stripe_secret_key

# OpenAI (obter em https://platform.openai.com/api-keys)
OPENAI_API_KEY=sk-your-openai-api-key

# JWT (generate with: openssl rand -base64 32)
JWT_SECRET=your-jwt-secret-here

# Email SMTP
SMTP_PASSWORD=your-smtp-password
\`\`\`

## **BOAS PRÁTICAS:**
- **Nomes descritivos** mas não reveladores
- **Comentários** explicativos
- **Formato** consistente
- **Documentação** em README`,
  },
  {
    id: "aula5-slide8",
    order: 8,
    title: ".gitignore: A Linha de Defesa do Repositório",
    type: "text",
    content: `# .gitignore: A Linha de Defesa do Repositório

## **ARQUIVOS QUE NUNCA DEVEM SER COMMITADOS:**

### 🔐 **CREDENCIAIS E KEYS**
\`\`\`gitignore
# Chaves SSH
id_rsa
id_rsa.pub
*.pem
*.key

# Configurações de ambiente
.env
.env.local
.env.production
*.env

# API Keys
config/keys.json
secrets/
\`\`\`

### 📁 **ARQUIVOS DO SISTEMA**
\`\`\`gitignore
# macOS
.DS_Store
.AppleDouble
.LSOverride

# Windows
Thumbs.db
ehthumbs.db
Desktop.ini

# Linux
*~
.directory
.Trash-*
\`\`\`

### 🗂️ **DEPENDÊNCIAS E BUILD**
\`\`\`gitignore
# Node.js
node_modules/
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Build outputs
dist/
build/
.next/
out/

# Logs
logs/
*.log
\`\`\`

### 🛠️ **EDITORES E IDES**
\`\`\`gitignore
# VS Code
.vscode/
*.code-workspace

# JetBrains
.idea/
*.swp
*.swo
*.swn

# Vim
*.swp
*.swo
\`\`\`

## **TEMPLATES POR TECNOLOGIA:**
- **Node.js:** node.gitignore
- **Python:** Python.gitignore
- **React:** React.gitignore
- **Vue:** Vue.gitignore
- **Laravel:** Laravel.gitignore

## **COMANDO ÚTIL:**
\`\`\`bash
# Verificar se há arquivos sensíveis
git check-ignore *
git ls-files --others --exclude-standard
\`\`\``,
  },
  {
    id: "aula5-slide9",
    order: 9,
    title: "LGPD: Conformidade e Proteção de Dados",
    type: "text",
    content: `# LGPD: Conformidade e Proteção de Dados

## **PRINCÍPIOS LGPD:**

### 🔍 **TRANSPARÊNCIA**
- **Informar** coleta de dados
- **Explicar** finalidades
- **Disponibilizar** políticas

### 🎯 **FINALIDADE**
- Coletar **apenas** o necessário
- Usar para **fins específicos**
- **Não usar** para outras finalidades

### ⏱️ **NECESSIDADE**
- Princípio da **minimização**
- Dados **proporcionais** ao objetivo
- **Eliminar** dados desnecessários

### 🛡️ **SEGURANÇA**
- Medidas **técnicas e administrativas**
- Prevenir **acesso não autorizado**
- Garantir **integridade**

### 📊 **ACURÁCIA**
- Manter dados **atualizados**
- **Permitir** correção
- **Excluir** dados desatualizados

## **DADOS SINTÉTICOS - BENEFÍCIOS:**
✅ **Não violam** LGPD
✅ **Preservam** estrutura real
✅ **Permitem** testes realistas
✅ **Evitam exposição** de dados reais
✅ **Facilitam** desenvolvimento seguro

## **EXEMPLO DE DADOS SINTÉTICOS:**
\`\`\`javascript
// Usuário sintético
const user = {
  id: 'user_' + Math.random().toString(36).substr(2, 9),
  name: 'João Silva',
  email: 'joao.silva@exemplo.com',
  cpf: '123.456.789-00',
  phone: '(11) 99999-9999',
  birthDate: '1990-01-15',
  address: {
    street: 'Rua das Flores, 123',
    city: 'São Paulo',
    state: 'SP',
    zipCode: '01234-567'
  }
};
\`\`\`

## **HIGIENE DE LOGS:**
\`\`\`javascript
// ❌ Logs que vazam dados
console.log('User password:', user.password);

// ✅ Logs seguros
console.log('User login attempt', {
  userId: user.id,
  timestamp: new Date()
});
\`\`\``,
  },
  {
    id: "aula5-slide10",
    order: 10,
    title: "Higiene de Logs: Rastreabilidade Segura",
    type: "text",
    content: `# Higiene de Logs: Rastreabilidade Segura

## **PROBLEMA: DADOS SENSÍVEIS EM LOGS**
❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌ ❌
\`\`\`
[2024-01-15 10:30:15] POST /api/login
User: admin@company.com
Password: MySuperSecret123!
IP: 192.168.1.100
Token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
\`\`\`

## **SOLUÇÃO: LOGS SANITIZADOS**
✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅ ✅
\`\`\`
[2024-01-15 10:30:15] POST /api/login
User: admin@*****.com
IP: 192.168.1.100
Status: SUCCESS
RequestID: req_123456789
\`\`\`

## **PADRÕES DE SANITIZAÇÃO:**

### 🔐 **EMAILS**
\`\`\`javascript
function sanitizeEmail(email) {
  if (!email) return null;
  const [local, domain] = email.split('@');
  return \`\${local.substring(0, 2)}***@\${domain}\`;
}
\`\`\`

### 🔢 **DOCUMENTOS (CPF/CNPJ)**
\`\`\`javascript
function sanitizeDocument(doc) {
  if (!doc) return null;
  return doc.replace(/(\\d{3})(\\d{3})(\\d{3})(\\d{2})/, '$1.***.***-$4');
}
\`\`\`

### 🔑 **TOKENS E KEYS**
\`\`\`javascript
function sanitizeKey(key) {
  if (!key) return null;
  const start = key.substring(0, 8);
  const end = key.substring(key.length - 4);
  return \`\${start}***\${end}\`;
}
\`\`\`

## **IMPLEMENTAÇÃO EM NODE.JS:**
\`\`\`javascript
const winston = require('winston');

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.printf(({ timestamp, level, message, ...meta }) => {
      return JSON.stringify({
        timestamp,
        level,
        message,
        ...sanitizeMeta(meta)
      });
    })
  )
});

function sanitizeMeta(meta) {
  const sanitized = { ...meta };

  if (sanitized.email) {
    sanitized.email = sanitizeEmail(sanitized.email);
  }

  if (sanitized.token) {
    sanitized.token = sanitizeKey(sanitized.token);
  }

  return sanitized;
}
\`\`\`

## **AUDITORIA E MONITORAMENTO:**
- Ferramentas de **SIEM**
- **Alertas automáticos**
- **Revisão periódica**
- **Compliance reports**
- **Retenção adequada**`,
  },
  {
    id: "aula5-slide11",
    order: 11,
    title: "BMAD: Metodologia para Estruturação Profissional",
    type: "text",
    content: `# BMAD: Metodologia para Estruturação Profissional

## **O QUE É BMAD?**
🎯 **Business Model + Architecture + Design**
- **Metodologia integrada** para estruturação de projetos
- Conecta **estratégia de negócio** com implementação técnica
- Garante **alinhamento** entre objetivos e execução
- Facilita **comunicação** entre stakeholders

## **OS QUATRO PILARES:**

### 💼 **BUSINESS MODEL**
- **Proposta de valor**
- **Análise de mercado**
- **Stakeholders e personas**
- **Revenue streams**
- **Cost structure**

### 🏗️ **ARCHITECTURE**
- **Arquitetura técnica**
- **Stack tecnológico**
- **Integrações**
- **Escalabilidade**
- **Performance**

### 🎨 **DESIGN**
- **User Experience**
- **Interface design**
- **User journey**
- **Accessibility**
- **Design system**

### 📋 **CRITERIA**
- **Acceptance criteria**
- **Success metrics**
- **Definition of Done**
- **Quality gates**
- **Testing strategy**

## **BENEFÍCIOS DO BMAD:**
✅ **Alinhamento** estratégico-técnico
✅ **Redução** de retrabalho
✅ **Comunicação** clara
✅ **Medição** de sucesso
✅ **Escalabilidade**
✅ **Manutenibilidade**

## **QUANDO USAR BMAD:**
- **Projetos complexos**
- **Múltiplos stakeholders**
- **Escopo variável**
- **Longo prazo**
- **Equipe multidisciplinar**`,
  },
  {
    id: "aula5-slide12",
    order: 12,
    title: "Business Model Canvas: Mapeando o Negócio",
    type: "text",
    content: `# Business Model Canvas: Mapeando o Negócio

## **CAMPOS DO CANVAS:**

### **1️⃣ PROPOSTA DE VALOR**
- O **que** resolvemos?
- Quais **problemas** eliminamos?
- Qual **valor** entregamos?
- **Diferencial** competitivo

### **2️⃣ SEGMENTOS DE CLIENTES**
- **Persona** principal
- **Demografia e psicografia**
- **Jobs to be done**
- **Pain points** principais

### **3️⃣ CANAIS DE DISTRIBUIÇÃO**
- Como **reachamos** clientes?
- Onde eles nos **encontram**?
- **Canais digitais/físicos**
- **Parcerias estratégicas**

### **4️⃣ RELACIONAMENTO COM CLIENTES**
- Como **interagimos**?
- **Suporte e assistência**
- **Self-service** vs assistido
- **Comunidade** e feedback

### **5️⃣ FONTES DE RECEITA**
- **Modelos de precificação**
- **Freemium, subscription, one-time**
- **Upsell** e cross-sell
- **Métricas de receita**

### **6️⃣ RECURSOS PRINCIPAIS**
- **Tecnologias** necessárias
- **Pessoas e competências**
- **Infraestrutura**
- **Parcerias**

### **7️⃣ ATIVIDADES PRINCIPAIS**
- **Core business** activities
- **Automação** possível
- Activities que **criam valor**
- **Operations** críticas

### **8️⃣ PARCERIAS PRINCIPAIS**
- **Supply chain**
- **Technology partners**
- **Distribution partners**
- **Service providers**

### **9️⃣ ESTRUTURA DE CUSTOS**
- **Fixed vs Variable** costs
- **Technology** costs
- **Personnel** costs
- **Marketing** costs

## **EXEMPLO PRÁTICO - E-COMMERCE:**
- **Proposta:** Compra online 50% mais rápida
- **Clientes:** Millennials urbanos
- **Canal:** App mobile + web
- **Receita:** Commission + subscriptions
- **Recursos:** Tech stack + logística
- **Custos:** Dev + marketing + infra`,
  },
  {
    id: "aula5-slide13",
    order: 13,
    title: "Architecture Design: Do Conceito à Implementação",
    type: "text",
    content: `# Architecture Design: Do Conceito à Implementação

## **LAYERED ARCHITECTURE:**

### 🌐 **FRONTEND LAYER**
- **React/Next.js**
- **Tailwind CSS**
- **State management** (Zustand/Redux)
- **API integration** (Axios)
- **Authentication** (JWT)

### ⚙️ **API GATEWAY LAYER**
- **Authentication middleware**
- **Rate limiting**
- **Request/response logging**
- **Error handling**
- **API versioning**

### 🏢 **BUSINESS LOGIC LAYER**
- **Domain models**
- **Use cases**
- **Business rules**
- **Validation**
- **Orchestration**

### 💾 **DATA LAYER**
- **Database** (PostgreSQL)
- **Caching** (Redis)
- **File storage** (AWS S3)
- **Search** (Elasticsearch)
- **Data validation**

## **INTEGRAÇÕES EXTERNAS:**
- **Payment systems** (Stripe)
- **Email services** (SendGrid)
- **SMS** (Twilio)
- **Analytics** (Google Analytics)
- **Monitoring** (Sentry)

## **DESIGN PRINCIPLES:**
✅ **Single Responsibility**
✅ **Open/Closed**
✅ **Liskov Substitution**
✅ **Interface Segregation**
✅ **Dependency Inversion**

## **TECHNOLOGIES STACK:**
\`\`\`yaml
Frontend:
  - React 18
  - TypeScript
  - Tailwind CSS
  - Vite

Backend:
  - Node.js
  - Express.js
  - TypeScript
  - PostgreSQL

DevOps:
  - Docker
  - GitHub Actions
  - Vercel
  - Supabase
\`\`\`

## **SCALABILITY CONSIDERATIONS:**
- **Horizontal scaling**
- **Database sharding**
- **CDN implementation**
- **Caching strategies**
- **Load balancing**`,
  },
  {
    id: "aula5-slide14",
    order: 14,
    title: "PRD: Product Requirements Document",
    type: "text",
    content: `# PRD: Product Requirements Document

## **ESTRUTURA DO PRD:**

### 📋 **EXECUTIVE SUMMARY**
- **Visão geral** do produto
- **Objetivos** principais
- **Stakeholders**
- **Timeline** geral

### 🎯 **PRODUCT VISION**
- **Missão** do produto
- **Valores e princípios**
- **Público-alvo**
- **Diferencial competitivo**

### 📊 **USER PERSONAS**
- **Persona 1:** Demographics, goals, pain points
- **Persona 2:** Journey, motivations, barriers
- **User interviews** insights

### 📋 **USER STORIES**
**Formato:** "As a [role], I want [action] so that [benefit]"

**Exemplo:**
- As a **product owner**, I want to **create new features** so that I can **validate business hypotheses**
- As a **developer**, I want **clear requirements** so that I can **implement correctly**
- As a **user**, I want **fast load times** so that I can **be productive**

### ✅ **ACCEPTANCE CRITERIA**
**Formato:** Given/When/Then

**Exemplo:**
\`\`\`gherkin
Given I am logged in as admin
When I create a new feature
Then the feature should be visible to users with proper permissions
\`\`\`

### 🎨 **WIREFRAMES & MOCKUPS**
- **User interface** design
- **User flow** diagrams
- **Interaction** patterns
- **Responsive** design

### 📈 **SUCCESS METRICS**
- **KPIs** principais
- **Métricas de** usuário
- **Métricas** técnicas
- **Business** metrics

### 🛠️ **TECHNICAL REQUIREMENTS**
- **Performance** requirements
- **Security** requirements
- **Integration** requirements
- **Compliance** requirements

### 📅 **ROADMAP**
- **Milestone 1** (Mês 1-2)
- **Milestone 2** (Mês 3-4)
- **Milestone 3** (Mês 5-6)
- **Features** futuras

### ❓ **RISKS & ASSUMPTIONS**
- **Technical** risks
- **Business** risks
- **Dependencies**
- **Mitigation strategies**`,
  },
  {
    id: "aula5-slide15",
    order: 15,
    title: "User Stories: Narrativas que Orientam Desenvolvimento",
    type: "text",
    content: `# User Stories: Narrativas que Orientam Desenvolvimento

## **ESTRUTURA INVEST (INVEST):**

### **I - INDEPENDENT**
- Stories devem ser **independentes**
- **Possível execução** em qualquer ordem
- **Mínima dependência** entre stories

### **N - NEGOTIABLE**
- **Especificação** negociável
- História é um **placeholder** para conversa
- **Detalhes** definidos em refinamento

### **V - VALUABLE**
- **Entregar valor** ao usuário
- **Business value** claro
- **Impacto** mensurável

### **E - ESTIMABLE**
- **Tamanho estimável** pela equipe
- **Complexidade** clara
- **Sem ambiguidades** técnicas

### **S - SMALL**
- **Pequena** o suficiente
- **1-2 sprints** no máximo
- **Testável** em um ciclo

### **T - TESTABLE**
- **Critérios de aceite** claros
- **Possível verificação**
- **Testes automatizados**

## **EXEMPLOS POR COMPLEXIDADE:**

### **SIMPLES:**
"As a user, I want to login so that I can access my dashboard"

### **MÉDIA:**
"As a product manager, I want to create campaigns so that I can target specific user segments with personalized messages"

### **COMPLEXA:**
"As a system administrator, I want to configure role-based access so that I can ensure users only access features appropriate to their role and maintain security compliance"

## **ACCEPTANCE CRITERIA - EXEMPLOS:**

### **FUNCIONAL:**
\`\`\`
Given the user is on the login page
When they enter valid credentials
Then they should be redirected to the dashboard
And a session should be created
And a welcome message should be displayed
\`\`\`

### **NÃO-FUNCIONAL:**
\`\`\`
Given the system is processing login requests
When multiple users login simultaneously
Then response time should be under 200ms
And error rate should be less than 0.1%
And the system should handle 1000 concurrent users
\`\`\`

### **TÉCNICO:**
\`\`\`
Given the authentication system
When a user successfully logs in
Then a JWT token should be generated with:
- 256-bit HMAC signature
- 1-hour expiration
- User ID and role in payload
- Secure random UUID as JTI
\`\`\``,
  },
  {
    id: "aula5-slide16",
    order: 16,
    title: "Hands-on: Criando Repositório Profissional",
    type: "text",
    content: `# Hands-on: Criando Repositório Profissional

## **CENÁRIO:** "TaskFlow - Gerenciador de Tarefas com IA"

### **ETAPA 1: REPOSITÓRIO LOCAL (5 min)**
\`\`\`bash
# Criar diretório
mkdir taskflow-vibe-coding
cd taskflow-vibe-coding

# Inicializar Git
git init

# Configurar Git
git config user.name "Seu Nome"
git config user.email "seu@email.com"

# Estrutura básica
mkdir -p src/{components,pages,utils}
mkdir -p tests
mkdir -p docs
mkdir -p .github/workflows
\`\`\`

### **ETAPA 2: ARQUIVOS BASE (5 min)**

**README.md:**
\`\`\`markdown
# TaskFlow

Gerenciador de tarefas com IA integrado.

## Features
- ✅ Gestão de tarefas inteligente
- 🤖 Sugestões com IA
- 📊 Analytics de produtividade
- 🔒 Autenticação segura

## Tech Stack
- React + TypeScript
- Supabase
- GLM 4.6
- Tailwind CSS

## Setup
1. Clone o repo
2. Configure .env
3. Instale dependências: \`npm install\`
4. Rode: \`npm run dev\`
\`\`\`

**.gitignore:**
\`\`\`gitignore
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Environment
.env
.env.local
.env.production

# Dependencies
node_modules/
\`\`\`

**.env.example:**
\`\`\`env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/taskflow
DATABASE_PASSWORD=your-database-password

# Supabase
SUPABASE_URL=your-supabase-url
SUPABASE_ANON_KEY=your-supabase-anon-key

# AI
GLM_API_KEY=your-glm-api-key
OPENAI_API_KEY=your-openai-api-key

# Auth
JWT_SECRET=your-jwt-secret
NEXTAUTH_SECRET=your-nextauth-secret
\`\`\`

### **ETAPA 3: GITHUB E SSH (5 min)**
\`\`\`bash
# Primeiro commit
git add .
git commit -m "feat: inicialização do projeto TaskFlow"

# Criar no GitHub e conectar
git remote add origin git@github.com:usuario/taskflow-vibe-coding.git
git branch -M main
git push -u origin main
\`\`\`

### **ETAPA 4: VALIDAÇÃO (5 min)**
- ✅ **Git status** limpo
- ✅ **SSH** conectado
- ✅ **Repository** visível no GitHub
- ✅ **README.md** carregado`,
  },
  {
    id: "aula5-slide17",
    order: 17,
    title: "Exercício: PRD com Metodologia BMAD",
    type: "text",
    content: `# Exercício: PRD com Metodologia BMAD

## **CASO:** "TaskFlow - Gestor de Tarefas com IA"

### **BUSINESS MODEL CANVAS:**
\`\`\`
Proposta de Valor:
"IA que organiza e prioriza suas tarefas automaticamente"

Segmentos de Clientes:
- Profissionais estresados
- Estudantes universitários
- Freelancers com múltiplos projetos

Canais:
- App web responsivo
- Comunidade online
- Parcerias com empresas

Relacionamento:
- Onboarding guiado
- Suporte 24/7
- Community manager

Receita:
- Freemium model
- Pro subscription (R$ 29/mês)
- Enterprise (R$ 99/mês)
\`\`\`

### **ARCHITECTURE:**
\`\`\`
Frontend: React + TypeScript + Tailwind
Backend: Supabase (Database + Auth + Storage)
AI: GLM 4.6 para análise de tarefas
Deployment: Vercel
CI/CD: GitHub Actions
\`\`\`

### **USER STORIES:**
\`\`\`gherkin
Feature: Task Management

Scenario: Create new task
Given I am logged in
When I click "Add Task" and fill the form
Then the task should appear in my list
And I should receive a confirmation

Scenario: AI prioritization
Given I have 5+ tasks
When I open the AI suggestions
Then tasks should be ordered by priority
And I should see explanation for each priority
\`\`\`

### **SUCCESS METRICS:**
- **Daily Active Users:** >1000
- **Task completion rate:** >70%
- **User retention (30 days):** >40%
- **AI accuracy:** >85%
- **App performance:** <2s load time

### **DEFINITION OF DONE:**
- ✅ **Código** implementado e testado
- ✅ **Acceptance criteria** atendidos
- ✅ **Code review** aprovado
- ✅ **Deploy** em staging
- ✅ **Documentação** atualizada
- ✅ **Métricas** monitorando`,
  },
  {
    id: "aula5-slide18",
    order: 18,
    title: "Pipeline CI/CD: Automação Profissional",
    type: "text",
    content: `# Pipeline CI/CD: Automação Profissional

## **ESTRUTURA DO PIPELINE:**

### 🔄 **CONTINUOUS INTEGRATION**
- **Testes** automáticos
- **Linting** e type checking
- **Build** verification
- **Security** scanning

### 🚀 **CONTINUOUS DEPLOYMENT**
- **Deploy automático** para staging
- **Deploy manual** para produção
- **Rollback** automático
- **Health checks**

## **GITHUB ACTIONS WORKFLOW:**
\`\`\`yaml
# .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [ main, develop ]
  pull_request:
    branches: [ main ]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'

      - run: npm ci
      - run: npm run lint
      - run: npm run type-check
      - run: npm run test
      - run: npm run build

  deploy-staging:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/develop'

  deploy-production:
    needs: test
    runs-on: ubuntu-latest
    if: github.ref == 'refs/heads/main'
\`\`\`

## **DEPLOYMENT CHECKLIST:**
- ✅ **Build** successful
- ✅ **All tests** passing
- ✅ **Security scan** clean
- ✅ **Environment variables** configured
- ✅ **Database migrations** applied
- ✅ **Health checks** passing
- ✅ **Rollback plan** ready

## **MONITORAMENTO:**
- **Application** metrics
- **Error tracking** (Sentry)
- **Performance** monitoring
- **User** analytics
- **Uptime** monitoring`,
  },
  {
    id: "aula5-slide19",
    order: 19,
    title: "Síntese: Profissionalização do Desenvolvimento",
    type: "text",
    content: `# Síntese: Profissionalização do Desenvolvimento

## **CONCEITOS-CHAVE APRENDIDOS:**

### 🔄 **CONTROLE DE VERSÃO PROFISSIONAL**
- **Git/GitHub** com SSH configurado
- **Estratégias** de branches e merge
- **Pull requests** e code review
- **Commits** atômicos e descritivos

### 🛡️ **SEGURANÇA E COMPLIANCE**
- **Proteção de secrets** com .env
- **.gitignore** inteligente
- **LGPD** e dados sintéticos
- **Higiene de logs** e sanitização

### 📋 **ESTRUTURAÇÃO BMAD**
- **Business Model Canvas** aplicado
- **Architecture design** técnica
- **User stories** bem estruturadas
- **PRD profissional** criado

### ⚙️ **PIPELINES E QUALITY GATES**
- **CI/CD** automatizado
- **Testes** e validações
- **Deploy** seguro
- **Monitoramento** ativo

## **IMPACTOS PRÁTICOS:**
- 🚀 **90%** redução em problemas de merge
- 🔒 **100%** proteção de dados sensíveis
- 📈 **60%** melhoria na colaboração em equipe
- ⚡ **50%** faster onboarding para novos devs

## **DELIVERABLES CRIADOS:**
- ✅ **Repositório** GitHub configurado
- ✅ **Pipeline** básico funcionando
- ✅ **PRD** com BMAD completo
- ✅ **Estrutura de segurança** implementada`,
  },
  {
    id: "aula5-slide20",
    order: 20,
    title: "Próxima Aula: Projeto Dirigido (Parte I)",
    type: "text",
    content: `# Próxima Aula: Projeto Dirigido (Parte I) - Do PRD a Épicos

## **TEMA:** "Transformando o PRD em Plano de Execução"

### **CONTEÚDO DA AULA 06:**
- 🎯 **Decomposição** do PRD em épicos
- 📋 **Quebra** de épicos em tarefas
- 🏗️ **Priorização** inteligente
- 📊 **Quadro de tarefas** (Kanban/Scrum)
- ⚡ **Setup** do workspace de desenvolvimento
- 🤖 **Context** de projeto para IA

### **METODOLOGIA:**
- **Work breakdown structure**
- **Estimativa** de esforço
- **Identificação** de dependências
- **Definição** de milestones

### **DELIVERABLES:**
- **Épicos** bem estruturados
- **Board de tarefas** priorizado
- **Context de projeto** documentado
- **Setup de ambiente** completo

### **PREVIEW VISUAL:**
- **Kanban board** sendo criado
- **Dependencies** map
- **Timeline** visual
- **Resource** allocation

## **CONEXÃO:**
O repositório e PRD criados hoje serão a **base para o projeto** das próximas aulas!`,
  },
  {
    id: "aula5-slide21",
    order: 21,
    title: "Recursos para Aprofundamento",
    type: "text",
    content: `# Recursos para Aprofundamento

## 📚 **DOCUMENTAÇÃO OFICIAL:**
- **GitHub Docs:** docs.github.com
- **Git Documentation:** git-scm.com/doc
- **GitHub Security:** github.com/security
- **LGPD Guide:** gobiernodigital.gov.br

## 🛠️ **FERRAMENTAS RECOMENDADAS:**
- **Git Clients:** GitHub Desktop, GitKraken
- **SSH Management:** 1Password, LastPass
- **CI/CD:** GitHub Actions, Vercel, Netlify
- **Monitoring:** Sentry, LogRocket
- **Testing:** Jest, Cypress, Playwright

## 📖 **BOAS PRÁTICAS:**
- **Conventional Commits**
- **Git Flow Methodology**
- **OWASP Security Guidelines**
- **LGPD Compliance Checklist**

## 🎓 **COMUNIDADE:**
- **Discord do curso:** [link]
- **GitHub Discussions:** [link]
- **Stack Overflow:** tag "vibe-coding"
- **LinkedIn:** [professor]

## 📋 **CHECKLIST FINAL:**
□ Repositório criado e configurado
□ SSH funcionando perfeitamente
□ .gitignore implementado
□ .env.example documentado
□ Pipeline CI/CD ativo
□ PRD com BMAD completo
□ Context de projeto definido`,
  },
  {
    id: "aula5-slide22",
    order: 22,
    title: "Obrigado! Agora Você É um Desenvolvedor Profissional",
    type: "text",
    content: `# Obrigado! Agora Você É um Desenvolvedor Profissional

## 🎉 **CONQUISTAS DO DIA:**
- Configurou **Git/GitHub** profissionalmente
- Implementou **segurança** e LGPD
- Criou **PRD** com metodologia BMAD
- Estabeleceu **pipeline** automatizado

## 🚀 **PRÓXIMOS PASSOS:**
1. **Revisar** e completar o PRD
2. **Configurar** ambiente de desenvolvimento
3. **Preparar** para o projeto dirigido
4. **Compartilhar** no Discord

## 💡 **LEMBRETE:**
*"Repositório limpo e seguro + PRD sólido = projeto de sucesso"*

## 🎯 **CALL TO ACTION:**
- **Commit** suas conquistas hoje mesmo
- **Teste** o pipeline criado
- **Revise** a documentação
- **Prepare-se** para o próximo nível!

## **CONTATO DO INSTRUTOR:**
- **Email:** israel@trae.ai
- **LinkedIn:** /in/israel-evangelista
- **Discord:** @israel_trae

**curso-vibe-coding.dev**
*Transformando desenvolvedores em arquitetos de IA*`,
  },
  {
    id: "aula5-slide23",
    order: 23,
    title: "Materiais de Apoio Disponíveis",
    type: "text",
    content: `# Materiais de Apoio Disponíveis

## 📋 **TEMPLATES E CHECKLISTS**
- ✅ **Template .env.example** completo para diferentes stacks
- ✅ **Checklist de segurança LGPD** para validação
- ✅ **Template PRD BMAD** preenchível para projetos
- ✅ **Scripts de setup automatizado** para configuração rápida

## 🛠️ **FERRAMENTAS E RECURSOS**
- ✅ **Exemplos de .gitignore** por tecnologia (Node, Python, React, etc.)
- ✅ **Roteiro de troubleshooting** Git/GitHub
- ✅ **Guia de pipeline CI/CD** básico com GitHub Actions
- ✅ **Templates de commit** com Conventional Commits

## 📚 **DOCUMENTAÇÃO ADICIONAL**
- 🔗 **Links para documentação** oficial das ferramentas
- 📖 **Artigos recomendados** sobre desenvolvimento profissional
- 🎯 **Casos de estudo** reais de projetos bem estruturados
- 💡 **Dicas de boas práticas** para diferentes tecnologias

## 🔄 **PRÓXIMOS PASSOS**
1. **Baixar e organizar** os materiais
2. **Aplicar** em projetos reais
3. **Customizar** templates conforme necessidade
4. **Compartilhar** aprendizados na comunidade

## 📞 **SUPORTE**
- **Discord:** Canal #aula05-materiais
- **Email:** materiais@vibe-coding.dev
- **Issues:** Repositório GitHub do curso
- **Wiki:** Documentação colaborativa

## 🎓 **CERTIFICAÇÃO**
- [ ] Repositório profissional criado
- [ ] SSH configurado e testado
- [ ] PRD com BMAD completo
- [ ] Pipeline CI/CD funcionando
- [ ] Checklist LGPD validado

💡 *Materiais em constante evolução - feedback é sempre bem-vindo!*`,
  },
];

