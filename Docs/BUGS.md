# BUGS.md - Base de Conhecimento de Bugs e Soluções (Template)

## Visão Geral

Este arquivo documenta bugs, dificuldades e soluções encontradas durante o desenvolvimento do projeto [NOME_DO_PROJETO]. O objetivo é criar uma base de conhecimento para evitar regressões e acelerar debugging futuro.

---

## Bug Tracker Status

### Bugs Abertos: [NUMERO_BUGS_ABERTOS]
### Bugs Resolvidos: [NUMERO_BUGS_RESOLVIDOS]
### Última Atualização: [DATA_ULTIMA_ATUALIZACAO]

---

## Estrutura de Documentação

### Formato Padrão
```markdown
## [ID-YYYY-MM-DD] - Título do Bug

### Descrição
Breve descrição do problema e sintomas observados.

### Contexto de Ocorrência
- **Arquivo:** path/to/file.tsx
- **Componente:** ComponentName
- **Ambiente:** development/production
- **Browser/Node:** Versão específica
- **Passos para Reproduzir:**
  1. Passo 1
  2. Passo 2
  3. Passo 3

### Causa Raiz
Análise detalhada da causa fundamental do problema.

### Solução Aplicada
Descrição completa da solução implementada com código se aplicável.

### Ferramentas e MCPs Utilizados
- **MCP ByteRover:** Como foi usado para encontrar contexto
- **Chrome DevTools:** Ferramentas específicas utilizadas
- **VS Code Debugger:** Breakpoints e inspeção
- **Outras ferramentas:** Playwright, console, etc.

### Lições Aprendidas
Insights e prevenção para o futuro.

### Status
[RESOLVIDO/EM ANDAMENTO/BLOQUEADO]

### Referências
- Links para commits, PRs, ou documentação relacionada
```

---

## Bugs Registrados

*Esta seção será populated conforme bugs forem identificados e resolvidos.*

---

## Padrões Comuns de Bugs

### Categoria 1: [CATEGORIA_BUGS_1]

#### Padrão: [PADRAO_BUG_1_1]
- **Sintoma:** [SINTOMA_PADRAO_1_1]
- **Causa Comum:** [CAUSA_COMUM_1_1]
- **Prevenção:** [PREVENCAO_1_1]

#### Padrão: [PADRAO_BUG_1_2]
- **Sintoma:** [SINTOMA_PADRAO_1_2]
- **Causa Comum:** [CAUSA_COMUM_1_2]
- **Prevenção:** [PREVENCAO_1_2]

### Categoria 2: [CATEGORIA_BUGS_2]

#### Padrão: [PADRAO_BUG_2_1]
- **Sintoma:** [SINTOMA_PADRAO_2_1]
- **Causa Comum:** [CAUSA_COMUM_2_1]
- **Prevenção:** [PREVENCAO_2_1]

### Categoria 3: [CATEGORIA_BUGS_3]

#### Padrão: [PADRAO_BUG_3_1]
- **Sintoma:** [SINTOMA_PADRAO_3_1]
- **Causa Comum:** [CAUSA_COMUM_3_1]
- **Prevenção:** [PREVENCAO_3_1]

---

## Estratégias de Debugging

### 1. Método Systemático
1. **Reproduzir o Bug:** Isolar condições exatas
2. **Analisar Logs:** Console errors e network requests
3. **Inspeção:** Usar breakpoints no código
4. **Hipótese:** Formular causa provável
5. **Teste:** Validar hipótese com changes mínimos
6. **Fix:** Implementar solução definitiva

### 2. Uso de MCP [NOME_FERRAMENTA_MCP]
```javascript
// Para encontrar contexto relacionado ao bug
await [NOME_FERRAMENTA_MCP]RetrieveKnowledge({
  query: "[QUERY_EXEMPLO_BUSCA_CONTEXT]",
  limit: 5
});

// Para registrar solução encontrada
await [NOME_FERRAMENTA_MCP]StoreKnowledge({
  messages: "[MENSAGEM_EXEMPLO_SOLUCAO]"
});
```

### 3. Ferramentas de [AMBIENTE_DESENVOLVIMENTO]
- **Console:** Para erros JavaScript e network
- **Network Tab:** Para requests com falha
- **Elements:** Para styling e DOM issues
- **Application:** Para localStorage e cookies
- **Performance:** Para memory leaks e bottlenecks

### 4. [IDE] Debugging
```json
// .vscode/launch.json
{
  "type": "[TIPO_DEBUG]",
  "request": "launch",
  "name": "[NOME_CONFIG_DEBUG]",
  "runtimeExecutable": "[RUNTIME_EXECUTAVEL]",
  "runtimeArgs": ["[ARGUMENTO_RUNTIME]"],
  "port": [PORTA_DEBUG]
}
```

---

## Checklists de Debugging

### Checklist Inicial
- [ ] Reproduzir bug consistentemente
- [ ] Verificar console errors
- [ ] Checar network requests
- [ ] Validar environment variables
- [ ] Testar em modo incognito

### Checklist [FRAMEWORK_PRINCIPAL]
- [ ] Verificar state updates
- [ ] Checar useEffect dependencies
- [ ] Validar component re-renders
- [ ] Testar com [FRAMEWORK_DEVTOOLS]
- [ ] Verificar error boundaries

### Checklist [BANCO_DE_DADOS]
- [ ] Testar connection direta
- [ ] Verificar [POLITICAS_SEGURANCA]
- [ ] Checar auth tokens
- [ ] Validar schema types
- [ ] Testar em [DASHBOARD_BANCO]

### Checklist [LINGUAGEM_PROGRAMACAO]
- [ ] Verificar type errors
- [ ] Checar generated types
- [ ] Validar imports
- [ ] Testar strict mode
- [ ] Rebuild se necessário

---

## Comandos Úteis

### Debug Commands
```bash
# Limpar cache [FRAMEWORK]
[NOME_COMANDO_CACHE_CLEAN]

# Verificar tipos [BANCO_DE_DADOS]
[NOME_COMANDO_TYPE_CHECK]

# Debug mode
[NOME_COMANDO_DEBUG_MODE]

# Ver logs detalhados
[NOME_COMANDO_VERBOSE_LOGS]
```

### Testing Commands
```bash
# Testar específico
[NOME_COMANDO_TEST_SPECIFIC]

# Coverage
[NOME_COMANDO_TEST_COVERAGE]

# E2E tests
[NOME_COMANDO_TEST_E2E]
```

---

## Performance Debugging

### Ferramentas
- **[FERRAMENTA_PERFORMANCE_1]:** Para component performance
- **[FERRAMENTA_PERFORMANCE_2]:** Para runtime analysis
- **[FERRAMENTA_PERFORMANCE_3]:** Para performance scores
- **[FERRAMENTA_PERFORMANCE_4]:** Para bundle size optimization

### Padrões Comuns
- **Render desnecessário:** Usar [PADRAO_OTIMIZACAO_1]
- **State lifting:** Evitar [PROBLEMA_ESTADO_1]
- **Large components:** Quebrar em [SOLUCAO_COMPONENTS]
- **Memory leaks:** Cleanup [SOLUCAO_CLEANUP]

---

## Debugging de Produção

### Estratégia
1. **Logging:** Implementar structured logging
2. **Error Boundaries:** Capturar erros [FRAMEWORK]
3. **Monitoring:** Ferramentas como [FERRAMENTA_MONITORING]
4. **Feature Flags:** Isolar problemas
5. **Rollback:** Planos de reversão

### Ferramentas Sugeridas
```typescript
// Error Boundary Example
class ErrorBoundary extends [TIPO_COMPONENT] {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Send to [SERVICO_MONITORING]
  }
}
```

---

## Prevenção de Bugs

### Code Review Checklist
- [ ] [LINGUAGEM] strict mode
- [ ] Test coverage adequada
- [ ] Performance considerations
- [ ] Security implications
- [ ] Documentation updates
- [ ] Error handling

### Testing Strategy
- **Unit Tests:** Lógica de negócio
- **Integration Tests:** APIs e databases
- **E2E Tests:** Fluxos críticos
- **Performance Tests:** Load e stress

---

## Conexão com Agentes Especializados

### @qa Agent
- Utilizar BUGS.md como guia para testes de regressão
- Focar em áreas com histórico de bugs
- Validar soluções implementadas

### @dev Agent
- Consultar BUGS.md antes de implementar features
- Aplicar padrões preventivos conhecidos
- Documentar novos bugs encontrados

### @architect Agent
- Analisar padrões de bugs para melhorias arquiteturais
- Implementar soluções sistêmicas
- Evoluir padrões de desenvolvimento

---

## Métricas e Monitoramento

### KPIs
- **Bug Resolution Time:** Tempo médio para fix
- **Bug Recurrence Rate:** Taxa de bugs recorrentes
- **Test Coverage:** Percentual de código testado
- **Production Issues:** Bugs em produção

### Monitoring Tools
- **[FERRAMENTA_MONITORING_1]:** Error tracking
- **[FERRAMENTA_MONITORING_2]:** Session replay
- **[FERRAMENTA_MONITORING_3]:** Performance monitoring
- **[FERRAMENTA_MONITORING_4]:** Bug tracking

---

## Template para Novo Bug

Copie este template para documentar novos bugs:

```markdown
## [BUG-YYYY-MM-DD-001] - [Título Conciso]

### Descrição
[Descrição clara e objetiva do problema]

### Contexto
- **Arquivo:** [path/to/file]
- **Componente:** [ComponentName]
- **Severity:** [Critical/High/Medium/Low]
- **Reporter:** [@agent-name]
- **Date:** [YYYY-MM-DD]

### Reprodução
1. [Passo 1]
2. [Passo 2]
3. [Passo 3]

### Expected Behavior
[O que deveria acontecer]

### Actual Behavior
[O que realmente acontece]

### Root Cause
[Análise da causa fundamental]

### Solution
[Solução implementada com código se aplicável]

### Testing
[Como a solução foi validada]

### Related Files
[Lista de arquivos modificados]

### MCP Usage
[Como MCPs foram utilizados no debugging]

### Lessons Learned
[Insights para prevenção futura]

### Status
[OPEN/IN PROGRESS/RESOLVED/CLOSED]

### References
[Links para PRs, commits, issues]
```

---

## Links e Recursos

### Documentação Relacionada
- `AGENTS.md` - Contexto dos agentes
- `PROGRESS.md` - Status do projeto
- `WORKFLOWS.md` - Processos de desenvolvimento
- `docs/debugging/` - Guias detalhados

### Ferramentas Externas
- [DOCUMENTACAO_FRAMEWORK]([LINK_DOCUMENTACAO_FRAMEWORK])
- [DOCUMENTACAO_BANCO_DE_DADOS]([LINK_DOCUMENTACAO_BANCO_DE_DADOS])
- [DOCUMENTACAO_LINGUAGEM]([LINK_DOCUMENTACAO_LINGUAGEM])
- [DOCUMENTACAO_FERRAMENTAS]([LINK_DOCUMENTACAO_FERRAMENTAS])

---

## INSTRUÇÕES DE USO DO TEMPLATE

### Para usar este template em um novo projeto:

1. **Copie o arquivo** para a raiz do novo projeto
2. **Substitua os placeholders** entre colchetes [ ]:
   - [NOME_DO_PROJETO] → Nome real do projeto
   - [NUMERO_BUGS_ABERTOS] → Número atual de bugs abertos
   - [NUMERO_BUGS_RESOLVIDOS] → Número de bugs resolvidos
   - [DATA_ULTIMA_ATUALIZACAO] → Data da última atualização
   - [CATEGORIA_BUGS_1] → Primeira categoria de bugs
   - [PADRAO_BUG_1_1] → Primeiro padrão de bug
   - [SINTOMA_PADRAO_1_1] → Sintoma característico
   - [CAUSA_COMUM_1_1] → Causa mais comum
   - [PREVENCAO_1_1] → Forma de prevenir
   - [NOME_FERRAMENTA_MCP] → Nome da ferramenta MCP
   - [QUERY_EXEMPLO_BUSCA_CONTEXT] → Exemplo de query
   - [MENSAGEM_EXEMPLO_SOLUCAO] → Exemplo de mensagem
   - [AMBIENTE_DESENVOLVIMENTO] → Ambiente (web, mobile, etc.)
   - [IDE] → IDE principal (VS Code, etc.)
   - [TIPO_DEBUG] → Tipo de configuração debug
   - [NOME_CONFIG_DEBUG] → Nome da configuração
   - [RUNTIME_EXECUTAVEL] → Runtime (node, npm, etc.)
   - [ARGUMENTO_RUNTIME] → Argumentos do runtime
   - [PORTA_DEBUG] → Porta de debug
   - [FRAMEWORK_PRINCIPAL] → Framework principal
   - [FRAMEWORK_DEVTOOLS] → DevTools do framework
   - [BANCO_DE_DADOS] → Banco de dados usado
   - [POLITICAS_SEGURANCA] → Políticas (RLS, etc.)
   - [DASHBOARD_BANCO] → Dashboard do banco
   - [LINGUAGEM_PROGRAMACAO] → Linguagem principal
   - [NOME_COMANDO_CACHE_CLEAN] → Comando limpar cache
   - [NOME_COMANDO_TYPE_CHECK] → Comando verificar tipos
   - [NOME_COMANDO_DEBUG_MODE] → Comando debug mode
   - [NOME_COMANDO_VERBOSE_LOGS] → Comando logs detalhados
   - [NOME_COMANDO_TEST_SPECIFIC] → Comando teste específico
   - [NOME_COMANDO_TEST_COVERAGE] → Comando coverage
   - [NOME_COMANDO_TEST_E2E] → Comando E2E
   - [FERRAMENTA_PERFORMANCE_1] → Primeira ferramenta performance
   - [PADRAO_OTIMIZACAO_1] → Padrão de otimização
   - [PROBLEMA_ESTADO_1] → Problema de estado
   - [SOLUCAO_COMPONENTS] → Solução com components
   - [SOLUCAO_CLEANUP] → Solução cleanup
   - [TIPO_COMPONENT] → Tipo de component
   - [SERVICO_MONITORING] → Serviço de monitoring
   - [FERRAMENTA_MONITORING_1] → Primeira ferramenta monitoring
   - [DOCUMENTACAO_FRAMEWORK] → Documentação do framework
   - [LINK_DOCUMENTACAO_FRAMEWORK] → Link da documentação
   - [DOCUMENTACAO_BANCO_DE_DADOS] → Documentação do BD
   - [LINK_DOCUMENTACAO_BANCO_DE_DADOS] → Link do BD
   - [DOCUMENTACAO_LINGUAGEM] → Documentação da linguagem
   - [LINK_DOCUMENTACAO_LINGUAGEM] → Link da linguagem
   - [DOCUMENTACAO_FERRAMENTAS] → Documentação das ferramentas
   - [LINK_DOCUMENTACAO_FERRAMENTAS] → Link das ferramentas

3. **Configure as categorias** de bugs conforme o domínio
4. **Estabeleça padrões** específicos do projeto
5. **Adapte as ferramentas** conforme o stack tecnológico
6. **Configure checklists** específicos para o projeto

### Dicas de adaptação:
- **Projetos web:** Foque em bugs de frontend/backend
- **Projetos mobile:** Foque em bugs específicos de mobile
- **Projetos de dados:** Foque em bugs de ETL e analytics
- **Projetos DevOps:** Foque em bugs de infraestrutura
- **Projetos de pesquisa:** Foque em bugs de experimentação

Este template é completamente adaptável para qualquer tipo de projeto e stack tecnológico.

---

**Importante:** Mantenha este arquivo atualizado consistentemente. Cada bug resolvido é uma oportunidade de aprendizado e melhoria do processo de desenvolvimento.