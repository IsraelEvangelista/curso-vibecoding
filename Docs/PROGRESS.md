w# PROGRESS.md - Rastreamento de Progresso do Projeto

## Visão Geral do Roadmap

**Projeto:** Curso Vibe Coding - Aplicação Web de Apresentação
**Status Atual:** Fase 1 - Estruturação do Conteúdo
**Última Atualização:** 22/10/2025

---

## Fases de Implementação

### Fase 1: Estruturação do Conteúdo das Aulas 🔄 Doing

**Objetivo:** Detalhar o conteúdo de cada aula para servir como backlog para o desenvolvimento da aplicação de apresentação.

- [ ] **Aula 01: Fundamentos do Vibe Coding & Riscos**
  - [ ] **Tema:** Definição de Vibe Coding, histórico e posicionamento vs. “no‑code/low‑code/código assistido”.
  - [ ] **Tema:** Ecossistema (visão panorâmica): Lovable, n8n, Supabase, Z.ai, Manus, MGX etc.
  - [ ] **Tema:** Riscos/boas práticas: segurança de secrets, lock‑in, shadow AI, qualidade de código, governança.
  - [ ] **Entregável:** Mapa mental “contexto vs. prompt”.

- [ ] **Aula 02: Arquitetura de Agente & Engenharia de Contexto**
  - [ ] **Tema:** Agente vs. LLM; arquitetura: Cérebro (LLM), Memória/Cache, Tools, Contexto.
  - [ ] **Tema:** Engenharia de Prompt vs. Engenharia de Contexto (AGENTS.md, regras globais, formatação, few‑shot, grounding).
  - [ ] **Tema:** MCP (introdução sucinta) e demonstração de orquestração com n8n.
  - [ ] **Entregável:** Diagrama do agente (arquivo + breve rationale no README).

- [ ] **Aula 03: LLMs para Vibe Coding (foco em GLM 4.6)**
  - [ ] **Tema:** Principais modelos e critérios de seleção (janela de contexto, preço, latência, qualidade, etc.).
  - [ ] **Tema:** Por que GLM 4.6 (eficiência, custo/entrega, integrações – incl. Zed).
  - [ ] **Tema:** Demonstrações em UIs web (OpenAI, Gemini, Anthropic, Z.ai, Qwen, DeepSeek).
  - [ ] **Entregável:** Registro de micro‑benchmarks (latência, custo estimado, acerto) por modelo.

- [ ] **Aula 04: Ambientes: TRAE Solo, Warp + CLIs (Claude Code & Kilo Code)**
  - [ ] **Tema:** TRAE Solo como IDE principal: setup, extensões, workflow.
  - [ ] **Tema:** Warp (demonstração): quando usar para cargas mais pesadas/colaboração.
  - [ ] **Tema:** CLIs foco: Claude Code e Kilo Code com GLM 4.6; integração com editor (incl. Zed).
  - [ ] **Tema:** Micro‑benchmark de prompts para comparar desempenho com e sem ferramentas.
  - [ ] **Entregável:** Tabela de resultados e “takeaways” sobre GLM 4.6 + CLIs.

- [ ] **Aula 05: Boas Práticas, Git/GitHub & BMAD (PRD)**
  - [ ] **Tema:** Git/GitHub: comandos básicos, criar repo, chave SSH, branches, PR.
  - [ ] **Tema:** Segurança/LGPD: .env, gitignore, segregação de secrets, higiene de logs, dados sintéticos.
  - [ ] **Tema:** BMAD: método para estrutura de contexto, PRD e execução.
  - [ ] **Entregável:** Repo inicial com PRD e pipeline local passando.

- [ ] **Aula 06: Projeto Dirigido (Parte I): do PRD a épicos/tarefas**
  - [ ] **Tema:** Refino do PRD; decomposição em épicos/tarefas (CoT/ToT); priorização.
  - [ ] **Tema:** Quadro de tarefas; design de contexto persistente (AGENTS.md vivo).
  - [ ] **Entregável (Marco 1):** PRD revisado + board com tarefas priorizadas.

- [ ] **Aula 07: Projeto Dirigido (Parte II): implementação assistida por IA**
  - [ ] **Tema:** Implementação com Claude Code/Kilo Code + GLM 4.6; geração de testes; refino do frontend.
  - [ ] **Tema:** Observabilidade mínima: logs, erros de lint/TS; debugging no editor.
  - [ ] **Entregável (Marco 2):** Funcionalidade rodando local com testes passando.

- [ ] **Aula 08: Integração ao Supabase & Deploy**
  - [ ] **Tema:** Supabase: modelagem, criação de tabelas, policies/RLS, funções.
  - [ ] **Tema:** Segurança: .env, gitignore, higiene de logs do DevTools, contas de serviço.
  - [ ] **Tema:** Deploy: commit/push, build e deploy (Vercel/Render); sincronização GitHub ↔ deploy.
  - [ ] **Entregável:** App integrado ao Supabase e deploy em produção (rota acessível).

---

### Fase 2: Implementação das Fundações e Autenticação ⏸️ Todo

**Objetivo:** Estabelecer a base técnica da aplicação com autenticação e estrutura inicial
**Período Estimado:** Semanas 1-2

#### Épico 1: Fundações e Autenticação (F01)
- [ ] **Configuração Inicial do Projeto**
  - [ ] Setup React + Vite + TypeScript
  - [ ] Configuração do Tailwind CSS
  - [ ] Estrutura de pastas e componentes
- [ ] **Configuração do Supabase**
  - [ ] Setup do projeto Supabase
  - [ ] Configuração de autenticação
  - [ ] Design inicial do database
- [ ] **Sistema de Autenticação**
  - [ ] Login/Logout de usuários
  - [ ] Registro de novos usuários
  - [ ] Recuperação de senha
- [ ] **Perfis de Usuário e Roles**
  - [ ] Sistema de roles (Aluno/Moderador)
  - [ ] Middleware de proteção de rotas
  - [ ] Validação de permissões

### Fase 3: Estrutura Principal e Dashboard ⏸️ Todo

**Objetivo:** Implementar a estrutura de navegação, seleção de temas e dashboard principal
**Período Estimado:** Semanas 3-4

#### Épico 2: Estrutura Principal e Navegação
- [ ] **Layout Principal e Navegação**
  - [ ] Header, sidebar e footer
  - [ ] Sistema de routing baseado em roles
  - [ ] Navegação responsiva
- [ ] **Sistema de Temas (F07)**
  - [ ] Implementação de múltiplos temas
  - [ ] Persistência de preferências
  - [ ] Toggle de tema visual
- [ ] **Design System**
  - [ ] Componentes UI reutilizáveis
  - [ ] Padrões de estilização
  - [ ] Sistema de tokens visuais

#### Épico 3: Dashboard e Progresso (F02)
- [ ] **Dashboard Personalizado**
  - [ ] Painel principal do aluno
  - [ ] Indicadores de progresso
  - [ ] Cards informativos
- [ ] **Sistema de Ranking**
  - [ ] Top 3 ranking em tempo real
  - [ ] Visualização de posições
  - [ ] Histórico de evolução

### Fase 4: Sistema de Gamificação ⏸️ Todo

**Objetivo:** Implementar o sistema completo de gamificação com pontos e ranking
**Período Estimado:** Semanas 5-6

#### Épico 4: Sistema de Gamificação (F03)
- [ ] **Registro de Presença (F03.1)**
  - [ ] Interface para marcação de presença
  - [ ] Controle por moderadores
  - [ ] Sistema de pontuação por presença
- [ ] **Sistema de Quizzes (F03.2)**
  - [ ] Interface de quiz com 10 perguntas
  - [ ] Registro das 3 primeiras tentativas
  - [ ] Cálculo de média e conversão em pontos
- [ ] **Avaliação de Desafios (F03.3)**
  - [ ] Sistema de submissão de desafios
  - [ ] Interface de avaliação para moderadores
  - [ ] Notas de 0 a 10 com pontuação ponderada
- [ ] **Motor de Pontuação (F03.4)**
  - [ ] Algoritmo de cálculo ponderado
  - [ ] Pesos: Presença (x1.2), Quiz (x1.0), Desafio (x1.5)
  - [ ] Atualização em tempo real do ranking

### Fase 5: Estrutura de Conteúdo e Acesso Progressivo ⏸️ Todo

**Objetivo:** Implementar a estrutura modular de aulas com controle de acesso progressivo
**Período Estimado:** Semanas 7-8

#### Épico 5: Estrutura de Conteúdo e Acesso Progressivo (F04-F05)
- [ ] **Controle de Acesso Progressivo (F04)**
  - [ ] Sistema de liberação por aula
  - [ ] Validação de pré-requisitos
  - [ ] Controle baseado em perfil do usuário
- [ ] **Estrutura Modular de Aulas (F05)**
  - [ ] Template de aula com 3 seções
  - [ ] Conteúdo Explicativo (F05.1)
  - [ ] Quiz de Conhecimento (F05.2)
  - [ ] Desafio Prático (F05.3)
- [ ] **Syntax Highlighting (F08)**
  - [ ] Implementação de highlight para código
  - [ ] Suporte a múltiplas linguagens
  - [ ] Interface de visualização de exemplos

### Fase 6: Hub Comunitário ⏸️ Todo

**Objetivo:** Criar o espaço de interação entre alunos e moderadores
**Período Estimado:** Semanas 9-10

#### Épico 6: Hub Comunitário (F06)
- [ ] **Galeria de Desafios (F06.1)**
  - [ ] Sistema de postagem de soluções
  - [ ] Visualização de desafios resolvidos
  - [ ] Sistema de curtidas e comentários
- [ ] **Fórum de Dúvidas (F06.2)**
  - [ ] Sistema de tópicos e respostas
  - [ ] Threading de conversas
  - [ ] Busca e categorização
- [ ] **Moderação de Conteúdo**
  - [ ] Ferramentas para moderadores
  - [ ] Sistema de reports
  - [ ] Controle de qualidade

### Fase 7: Monitoramento e Segurança ⏸️ Todo

**Objetivo:** Implementar sistemas de monitoramento, segurança e performance
**Período Estimado:** Semana 11

#### Épico 7: Monitoramento e Segurança (F09)
- [ ] **Detecção de Padrões Suspeitos**
  - [ ] Algoritmos de detecção
  - [ ] Alertas automáticos
  - [ ] Sistema de bloqueio preventivo
- [ ] **Logging e Auditoria**
  - [ ] Registro de ações importantes
  - [ ] Logs de acesso e alterações
  - [ ] Sistema de auditoria
- [ ] **Performance e Monitoramento**
  - [ ] Métricas de performance
  - [ ] Monitoramento de erros
  - [ ] Optimização de queries

### Fase 8: Deploy e Produção ⏸️ Todo

**Objetivo:** Preparar e realizar o deploy em produção
**Período Estimado:** Semana 12

#### Deploy e Configuração Final
- [ ] **Preparação para Produção**
  - [ ] Configuração de environment variables
  - [ ] Optimização de build
  - [ ] Testes finais end-to-end
- [ ] **Deploy na Vercel**
  - [ ] Configuração do projeto Vercel
  - [ ] Integração com GitHub
  - [ ] Setup de domínio e SSL
- [ ] **Pós-Deploy**
  - [ ] Monitoramento inicial
  - [ ] Documentação final
  - [ ] Handover para stakeholders

---

## Fluxo de Status das Tarefas

### Ciclo de Vida Padrão
1. **Todo** → Tarefa planejada, não iniciada
2. **Doing** → Em desenvolvimento ativo
3. **Review** → Aguardando revisão/QA
4. **Complete** → Concluída e aprovada

---

## Métricas e KPIs

### Indicadores Atuais
- **Progresso Geral:** [PERCENTUAL_PROGRESSO]% ([FASE_ATUAL])
- **Tasks Concluídas:** [TASKS_CONCLUIDAS]/[TASKS_TOTAIS]
- **Bugs Abertos:** [BUGS_ABERTOS]

---

## Riscos e Bloqueios

### Riscos Identificados
- **[RISCO_1]:** [DESCRICAO_RISCO_1]

### Bloqueios Atuais
- **[BLOQUEIO_1]:** [DESCRICAO_BLOQUEIO_1]

---

## Próximos Passos Imediatos

### Esta Semana
1. **[PASSO_SEMANA_1]**
2. **[PASSO_SEMANA_2]**

---
