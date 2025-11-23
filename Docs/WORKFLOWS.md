# WORKFLOWS.md - Metodologia e Fluxos de Trabalho (Template)

## Visão Geral da Metodologia BMAD

**BMAD (Business Model Architecture & Development)** é uma metodologia ágil que utiliza arquitetura de sub-agentes especializados para desenvolvimento dirigido por especificações (spec-driven development).

### Arquitetura de Agentes Especializados

#### @bmad-orchestrator (Agente Principal)
**Função:** Coordenador central e gestor de contexto  
**Responsabilidades:**
- Orquestrar fluxo de trabalho entre agentes
- Gerenciar alocação de recursos
- Tomar decisões estratégicas
- Manter visão global do projeto

#### @analyst (Business Analyst)
**Função:** Análise de requisitos e especificações  
**Responsabilidades:**
- Levantar requisitos funcionais e não funcionais
- Criar especificações técnicas detalhadas
- Identificar dependências e riscos
- Validar escopo com stakeholders

#### @architect (Architect Agent)
**Função:** Design arquitetural e técnico  
**Responsabilidades:**
- Definir estrutura de software
- Estabelecer padrões e convenções
- Design de APIs e integrações
- Planejar escalabilidade e performance

#### @dev (Full Stack Developer)
**Função:** Implementação e codificação  
**Responsabilidades:**
- Implementar features conforme specs
- Escrever código limpo e testável
- Realizar refatoração quando necessário
- Otimizar performance

#### @qa (Quality Assurance)
**Função:** Garantia de qualidade e testes  
**Responsabilidades:**
- Executar testes funcionais e automatizados
- Validar requisitos de UX/UI
- Identificar e documentar bugs
- Garantir padrões de qualidade

---

## Ciclo de Trabalho PREVC

O ciclo **PREVC (Planejar, Revisar, Executar, Validar, Confirmar)** é obrigatório para cada iteração de desenvolvimento.

### P - Planejar (Plan)

**Objetivo:** Definir requisitos claros e plano de implementação  
**Atividades:**
1. **Análise de Requisitos**
   - Levantar necessidades do negócio
   - Definir critérios de aceitação
   - Identificar restrições e dependências

2. **Especificação Técnica (Specify)**
   - Criar especificações detalhadas
   - Definir interfaces e contratos
   - Documentar regras de negócio

3. **Planejamento de Implementação (Plan)**
   - Quebrar em tarefas acionáveis
   - Estimar esforço e tempo
   - Identificar recursos necessários

4. **Definição de Tarefas (Tasks)**
   - Criar backlog detalhado
   - Priorizar itens
   - Definir milestones

**Responsável:** @analyst com apoio do @architect

### R - Revisar (Review)

**Objetivo:** Validação sistemática de planos e arquitetura  
**Atividades:**
1. **Revisão de Especificações**
   - Validar completude dos requisitos
   - Verificar consistência técnica
   - Identificar gaps ou ambiguidades

2. **Revisão Arquitetural**
   - Avaliar design proposto
   - Verificar conformidade com padrões
   - Identificar riscos técnicos

3. **Checklists de Qualidade**
   - Executar `[COMANDO_REVISAO_INFRA]`
   - Validar contra `[COMANDO_CHECKLIST]`
   - Verificar compliance

**Responsável:** @architect com validação do @bmad-orchestrator

### E - Executar (Execute)

**Objetivo:** Implementação baseada no planejamento  
**Atividades:**
1. **Desenvolvimento**
   - Implementar features conforme specs
   - Seguir padrões de código
   - Documentar implementação

2. **Integração**
   - Integrar com sistemas existentes
   - Configurar APIs e serviços
   - Testar conectividade

3. **Versionamento**
   - Commits atômicos e descritivos
   - Branching apropriado
   - Merge com revisão

**Responsável:** @dev com supervisão do @architect

### V - Validar (Validate)

**Objetivo:** Testes e validação da qualidade  
**Atividades:**
1. **Testes Funcionais**
   - Testes unitários
   - Testes de integração
   - Testes end-to-end

2. **Validação de Requisitos**
   - Verificar critérios de aceitação
   - Testar casos de uso
   - Validar UX/UI

3. **Performance e Segurança**
   - Testes de carga
   - Análise de segurança
   - Otimização

**Responsável:** @qa com apoio do @dev

### C - Confirmar (Confirm)

**Objetivo:** Finalização do ciclo e documentação  
**Atividades:**
1. **Atualização de Status**
   - Mover tarefa no PROGRESS.md
   - Atualizar métricas e KPIs
   - Registrar conclusão

2. **Documentação**
   - Atualizar AGENTS.md com lições aprendidas
   - Documentar decisões arquiteturais
   - Criar knowledge base

3. **Retrospectiva**
   - Avaliar eficiência do ciclo
   - Identificar melhorias
   - Planejar próximos passos

**Responsável:** @bmad-orchestrator

---

## Fluxos de Trabalho Específicos

### Workflow 1: Nova Feature

```
Início → @analyst (P) → @architect (R) → @dev (E) → @qa (V) → @orchestrator (C) → Fim
```

**Etapas Detalhadas:**
1. **@analyst** cria especificação completa
2. **@architect** revisa e aprova arquitetura
3. **@dev** implementa feature
4. **@qa** testa e valida qualidade
5. **@orchestrator** confirma e documenta

### Workflow 2: Bug Fix

```
Bug Report → @qa (Análise) → @dev (E) → @qa (V) → @orchestrator (C) → Deploy
```

**Etapas Detalhadas:**
1. **@qa** analisa e reproduz bug
2. **@dev** implementa correção
3. **@qa** valida fix
4. **@orchestrator** aprova deploy

### Workflow 3: Refatoração

```
Identificação → @architect (P+R) → @dev (E) → @qa (V) → @orchestrator (C)
```

**Etapas Detalhadas:**
1. **@architect** planeja e revisa refatoração
2. **@dev** executa mudanças
3. **@qa** valida não regressão
4. **@orchestrator** confirma melhoria

---

## Comandos e Ferramentas Padrão

### Comandos de Ciclo PREVC
- `/plan` - Iniciar fase de planejamento
- `/review` - Executar fase de revisão
- `/implement` - Iniciar fase de execução
- `/validate` - Executar fase de validação
- `/confirm` - Finalizar ciclo

### Comandos de Qualidade
- `/review-infrastructure` - Revisar arquitetura
- `/execute-checklist` - Executar checklist de qualidade
- `/run-tests` - Executar suíte de testes
- `/performance-check` - Verificar performance

### Comandos de Documentação
- `/update-progress` - Atualizar PROGRESS.md
- `/document-decision` - Registrar decisão no AGENTS.md
- `/create-spec` - Criar especificação técnica
- `/update-kb` - Atualizar base de conhecimento

---

## Checklists de Qualidade

### Checklist de Planejamento
- [ ] Requisitos claros e mensuráveis
- [ ] Critérios de aceitação definidos
- [ ] Dependências identificadas
- [ ] Riscos avaliados
- [ ] Recursos alocados
- [ ] Timeline realista

### Checklist de Revisão
- [ ] Especificação completa
- [ ] Arquitetura consistente
- [ ] Padrões seguidos
- [ ] Segurança considerada
- [ ] Performance planejada
- [ ] Documentação adequada

### Checklist de Execução
- [ ] Código limpo e legível
- [ ] Tests implementados
- [ ] Comments relevantes
- [ ] Padrões seguidos
- [ ] Não regressão
- [ ] Performance aceitável

### Checklist de Validação
- [ ] Todos testes passando
- [ ] Requisitos atendidos
- [ ] UX/UI adequada
- [ ] Segurança validada
- [ ] Performance OK
- [ ] Documentação atualizada

---

## Regras de Escalation

### Quando Escalar para @architect
- Decisões arquiteturais críticas
- Mudanças em padrões estabelecidos
- Problemas de design complexo
- Trade-offs técnicos significativos

### Quando Escalar para @orchestrator
- Mudanças de escopo
- Conflitos entre agentes
- Decisões estratégicas
- Bloqueios críticos

### Quando Escalar para @analyst
- Requisitos ambíguos
- Mudanças no negócio
- Novas funcionalidades
- Feedback de stakeholders

---

## Métricas e KPIs

### Métricas de Ciclo PREVC
- **Tempo de Ciclo:** Duração total do ciclo
- **Lead Time:** Tempo até entrega
- **Qualidade:** Bugs pós-entrega
- **Eficiência:** Tempo planejado vs real

### Métricas de Qualidade
- **Coverage:** Percentual de testes
- **Performance:** Tempo de resposta
- **Segurança:** Vulnerabilidades
- **Manutenibilidade:** Complexidade ciclomática

---

## Integração com Ferramentas

### [FERRAMENTA_MCP]
- **Registrar decisões** importantes
- **Salvar padrões** de código
- **Documentar soluções** complexas
- **Manter contexto** entre sessões

### [FERRAMENTA_VERSIONAMENTO]
- **Branch strategy** definida
- **PR templates** padronizados
- **Automated checks** configurados
- **Release management** estruturado

### [FERRAMENTA_DEPLOY]
- **Schema versioning**
- **Migration scripts**
- **Backup strategies**
- **Performance monitoring**

---

## Melhoria Contínua

### Retrospectivas Semanais
- Avaliar eficiência dos ciclos
- Identificar gargalos
- Propor melhorias
- Atualizar processos

### Evolução da Metodologia
- Adaptação baseada em resultados
- Incorporação de novas práticas
- Otimização de fluxos
- Aprendizado organizacional

---

## Exemplos Práticos

### Exemplo 1: Implementação de [FEATURE_EXEMPLO_1]
```
1. @analyst: /plan - Criar spec de [DESCRICAO_FEATURE_1]
2. @architect: /review - Validar design de [ASPECTO_VALIDACAO_1]
3. @dev: /implement - Implementar [TECNOLOGIA_IMPLEMENTACAO_1]
4. @qa: /validate - Testar fluxos de [FLUXO_TESTE_1]
5. @orchestrator: /confirm - Atualizar PROGRESS.md
```

### Exemplo 2: [FEATURE_EXEMPLO_2]
```
1. @analyst: /plan - Especificar [TIPO_ESPECIFICACAO_2]
2. @architect: /review - Validar [ASPECTO_VALIDACAO_2]
3. @dev: /implement - Criar [IMPLEMENTACAO_DETALHE_2]
4. @qa: /validate - Testar com [FERRAMENTA_TESTE_2]
5. @orchestrator: /confirm - Documentar no AGENTS.md
```

---

## Referências e Links

### Documentação Relacionada
- `AGENTS.md` - Definição de agentes e contexto
- `PROGRESS.md` - Status e roadmap do projeto
- `BUGS.md` - Issues e soluções conhecidas
- `docs/specifications/` - Especificações detalhadas

### Ferramentas e Recursos
- [DOCUMENTACAO_FERRAMENTA_PRINCIPAL]([LINK_DOCUMENTACAO_PRINCIPAL])
- [DOCUMENTACAO_FRAMEWORK]([LINK_DOCUMENTACAO_FRAMEWORK])
- [DOCUMENTACAO_BANCO_DE_DADOS]([LINK_DOCUMENTACAO_BANCO_DE_DADOS])
- [DOCUMENTACAO_TESTES]([LINK_DOCUMENTACAO_TESTES])

---

## INSTRUÇÕES DE USO DO TEMPLATE

### Para usar este template em um novo projeto:

1. **Copie o arquivo** para a raiz do novo projeto
2. **Substitua os placeholders** entre colchetes [ ]:
   - [COMANDO_REVISAO_INFRA] → Comando específico de revisão
   - [COMANDO_CHECKLIST] → Comando de checklist do projeto
   - [FEATURE_EXEMPLO_1] → Exemplo de feature real do projeto
   - [DESCRICAO_FEATURE_1] → Descrição detalhada
   - [ASPECTO_VALIDACAO_1] → Aspecto a ser validado
   - [TECNOLOGIA_IMPLEMENTACAO_1] → Tecnologia usada
   - [FLUXO_TESTE_1] → Fluxo de teste específico
   - [TIPO_ESPECIFICACAO_2] → Tipo de especificação
   - [ASPECTO_VALIDACAO_2] → Segundo aspecto de validação
   - [IMPLEMENTACAO_DETALHE_2] → Detalhe da implementação
   - [FERRAMENTA_TESTE_2] → Ferramenta de teste
   - [FERRAMENTA_MCP] → Nome da ferramenta MCP
   - [FERRAMENTA_VERSIONAMENTO] → Sistema de versionamento
   - [FERRAMENTA_DEPLOY] → Ferramenta de deploy
   - [DOCUMENTACAO_FERRAMENTA_PRINCIPAL] → Nome da doc principal
   - [LINK_DOCUMENTACAO_PRINCIPAL] → Link da doc principal
   - [DOCUMENTACAO_FRAMEWORK] → Nome do framework
   - [LINK_DOCUMENTACAO_FRAMEWORK] → Link do framework
   - [DOCUMENTACAO_BANCO_DE_DADOS] → Nome do BD
   - [LINK_DOCUMENTACAO_BANCO_DE_DADOS] → Link do BD
   - [DOCUMENTACAO_TESTES] → Nome da doc de testes
   - [LINK_DOCUMENTACAO_TESTES] → Link da doc de testes

3. **Adapte os workflows** conforme as necessidades do projeto
4. **Configure os comandos** específicos das ferramentas
5. **Estabeleça métricas** relevantes para o domínio
6. **Integre com ferramentas** específicas do projeto

### Dicas de adaptação:
- **Projetos web:** Foque em frontend/backend workflows
- **Projetos mobile:** Adapte para specific mobile workflows
- **Projetos de dados:** Foque em ETL e analytics workflows
- **Projetos DevOps:** Foque em CI/CD e infrastructure workflows
- **Projetos de pesquisa:** Foque em experimentação e validação

Este template é completamente flexível e pode ser adaptado para qualquer tipo de projeto ou metodologia de desenvolvimento.

---

**Nota:** Este documento serve como guia principal para todos os fluxos de trabalho. Siga rigorosamente o ciclo PREVC e utilize os comandos e checklists definidos para garantir qualidade e consistência em todas as entregas.