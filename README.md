# Curso Vibe Coding - Plataforma de Aprendizado

Uma plataforma web interativa e gamificada para o ensino de Vibe Coding.

## 🚀 Setup Rápido

### 1. Instalar Dependências

```bash
npm install
```

### 2. Iniciar o Servidor de Desenvolvimento

```bash
npm run dev
```

### 3. Abrir no Navegador

Acesse [http://localhost:5173](http://localhost:5173)

## 🛠️ Stack Tecnológica

- **Frontend:** React.js 18 + TypeScript
- **Build Tool:** Vite.js
- **Styling:** Tailwind CSS
- **Estado:** React Context + Hooks
- **Ícones:** Lucide React
- **Deploy:** Vercel (planejado)

## 📁 Estrutura do Projeto

```
src/
├── components/          # Componentes React
│   ├── ui/             # Componentes UI base
│   ├── layout/         # Componentes de layout
│   └── features/       # Componentes de features
├── pages/              # Páginas da aplicação
├── lib/                # Utilitários e dados mock
├── types/              # Definições TypeScript
├── assets/             # Assets estáticos
└── styles/             # Estilos globais
```

## 🎨 Features Implementadas

### ✅ Estrutura Base
- [x] Configuração React + Vite + TypeScript
- [x] Tailwind CSS com temas (claro/escuro/auto)
- [x] Sistema de componentes reutilizáveis
- [x] Layout responsivo com header e navegação

### ✅ Dashboard com Dados Mockados
- [x] Visão geral do progresso do aluno
- [x] Cards de estatísticas (pontos, aulas, presença, média)
- [x] Top 3 ranking em tempo real
- [x] Progresso da aula atual
- [x] Atividades recentes
- [x] Sistema de registro de presença

### ✅ Dados Mockados Completos
- [x] Usuários com diferentes roles
- [x] Estrutura de aulas com conteúdo, quiz e desafios
- [x] Sistema de gamificação completo
- [x] Fórum e galeria de projetos
- [x] Histórico de atividades

## 🎯 Roadmap de Implementação

### Fase 1: Fundações e Autenticação (Semanas 1-2)
- [ ] Setup do Supabase
- [ ] Sistema de autenticação completo
- [ ] Roles e permissões
- [ ] Middleware de proteção de rotas

### Fase 2: Estrutura Principal e Dashboard (Semanas 3-4)
- [x] Layout principal e navegação
- [x] Sistema de temas
- [x] Dashboard personalizado
- [ ] Design system completo

### Fase 3: Sistema de Gamificação (Semanas 5-6)
- [ ] Registro de presença
- [ ] Sistema de quizzes
- [ ] Avaliação de desafios
- [ ] Motor de pontuação

### Fase 4: Conteúdo e Acesso Progressivo (Semanas 7-8)
- [ ] Controle de acesso por aula
- [ ] Visualização de conteúdo
- [ ] Sistema de quizzes integrado
- [ ] Syntax highlighting

### Fase 5: Hub Comunitário (Semanas 9-10)
- [ ] Galeria de desafios
- [ ] Fórum de dúvidas
- [ ] Sistema de moderação

### Fase 6: Monitoramento e Deploy (Semanas 11-12)
- [ ] Sistema de segurança
- [ ] Performance e otimização
- [ ] Deploy em produção

## 🎨 Temas e Personalização

A aplicação suporta 3 temas:
- **Claro:** Fundo branco com texto escuro
- **Escuro:** Fundo escuro com texto claro
- **Auto:** Segue preferência do sistema operacional

## 📊 Sistema de Gamificação

### Pontuação por Atividade:
- **Presença:** x1.2 (peso maior)
- **Quiz:** x1.0 (peso padrão)
- **Desafio:** x1.5 (peso maior)

### Ranking em Tempo Real:
- Top 3 alunos destacados no dashboard
- Tendências de subida/descida
- Pontuação detalhada por categoria

## 🔧 Scripts Disponíveis

```bash
npm run dev      # Servidor de desenvolvimento
npm run build    # Build para produção
npm run preview  # Preview do build
npm run lint     # Lint com ESLint
```

## 📱 Responsividade

- **Mobile:** Layout otimizado para celulares
- **Tablet:** Adaptação para tablets
- **Desktop:** Experiência completa

## 🔐 Segurança

- Planejado: Supabase Auth
- Roles baseados em permissões
- Proteção de rotas
- Validação de dados

## 🚀 Deploy

O deploy será configurado para:
- **Frontend:** Vercel
- **Backend:** Supabase
- **Domínio:** A definir

## 📝 Contribuição

Este projeto segue a metodologia PREVC:
- **P**lan: Planejamento detalhado
- **R**eview: Revisão de arquitetura
- **E**xecute: Implementação
- **V**alidate: Testes e validação
- **C**onfirm: Confirmação e documentação

## 📄 Licença

MIT License - Veja o arquivo LICENSE para detalhes.