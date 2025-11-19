import { Slide } from "@/types";

export const mockSlidesAula2: Slide[] = [
  {
    id: "aula2-slide1",
    order: 1,
    title: "Abertura da Aula 02",
    type: "text",
    content:
      "# Arquitetura de Agente & Engenharia de Contexto\n## Evoluindo do Vibe Coding para Sistemas Inteligentes\n\n- **Conceitos avançados de IA autônoma**\n- **Arquitetura de agentes de código**\n- **Engenharia de contexto vs. prompts**\n- **Demonstração prática com n8n**",
  },
  {
    id: "aula2-slide2",
    order: 2,
    title: "Objetivos Específicos da Aula",
    type: "text",
    content:
      "# O Que Você Vai Dominar Hoje?\n\n## 🧠 COMPREENSÃO CONCEITUAL\n- **Diferenciar** LLMs básicos de Agentes de IA\n- **Entender** a arquitetura completa de agentes\n- **Compreender** o papel de cada componente\n\n## ⚙️ ENGENHARIA AVANÇADA\n- **Dominar** técnicas de Engenharia de Contexto\n- **Aplicar** contextualização rica em prompts\n- **Otimizar** resultados através de contexto estruturado\n\n## 🔗 INTEGRAÇÃO E ORQUESTRAÇÃO\n- **Conhecer** o protocolo MCP (Model Context Protocol)\n- **Compreender** orquestração com n8n\n- **Visualizar** fluxos de trabalho de agentes\n\n## 🛠️ APLICAÇÃO PRÁTICA\n- **Construir** diagramas de arquitetura\n- **Projetar** agentes para casos reais\n- **Avaliar** ferramentas e tecnologias",
  },
  {
    id: "aula2-slide3",
    order: 3,
    title: "LLM vs. Agente - Conceitos Fundamentais",
    type: "text",
    content: `# Entendendo a Evolução: De LLMs a Agentes Autônomos

<div class="space-y-6">
  <!-- Card 1: LLM (texto à esquerda, imagem à direita) -->
  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Texto -->
      <div class="p-5 md:p-6">
        <h2 class="text-2xl font-semibold mb-2">LLM (Large Language Model):</h2>
        <p class="font-medium">Características:</p>
        <ul class="list-none space-y-2">
          <li>🗣️ Gerador de texto baseado em probabilidade estatística</li>
          <li>⚡ Resposta reativa a prompts</li>
          <li>🧠 Processamento de linguagem natural</li>
          <li>❌ Sem capacidade de ação autônoma</li>
          <li>📝 Foco em geração de conteúdo</li>
        </ul>
        <p class="font-medium mt-4">Limitações:</p>
        <ul class="list-none space-y-2">
          <li>Não acessa ferramentas externas</li>
          <li>Não mantém estado entre interações</li>
          <li>Incapaz de executar ações</li>
          <li>Dependente apenas do prompt atual</li>
        </ul>
      </div>
      <!-- Imagem com fundo preto e divisão -->
      <div class="bg-black/80 dark:bg-black p-5 md:p-6 flex items-center justify-center md:border-l border-gray-200 dark:border-gray-700">
        <a href="#modal-llms" aria-label="Ampliar imagem de LLM" class="block">
          <img src="/Contexto/Aula%2002/assets/llms.jpg" alt="LLM (Large Language Model)"
               class="max-w-full h-auto max-h-[520px] rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ring-1 ring-gray-200/70 dark:ring-gray-700/60 object-cover" />
        </a>
      </div>
    </div>
  </div>

  <!-- Card 2: AGENTE DE IA (texto à esquerda, imagem à direita) -->
  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden shadow-sm">
    <div class="grid grid-cols-1 md:grid-cols-2">
      <!-- Texto -->
      <div class="p-5 md:p-6">
        <h2 class="text-2xl font-semibold mb-2">AGENTE DE IA:</h2>
        <p class="font-medium">Características:</p>
        <ul class="list-none space-y-2">
          <li>🤖 Sistema inteligente autônomo</li>
          <li>🧠 LLM como "cérebro" + camadas extras</li>
          <li>⚙️ Capaz de planejar e executar ações</li>
          <li>🔗 Integração com ferramentas externas</li>
          <li>💾 Mantém estado e memória</li>
          <li>🎯 Orientado por objetivos</li>
        </ul>
        <p class="font-medium mt-4">Capacidades:</p>
        <ul class="list-none space-y-2">
          <li>Acesso a APIs e sistemas externos</li>
          <li>Tomada de decisão independente</li>
          <li>Aprendizado baseado em experiência</li>
          <li>Execução de workflows complexos</li>
        </ul>
      </div>
      <!-- Imagem com fundo preto e divisão -->
      <div class="bg-black/80 dark:bg-black p-5 md:p-6 flex items-center justify-center md:border-l border-gray-200 dark:border-gray-700">
        <a href="#modal-agente" aria-label="Ampliar imagem de Agente de IA" class="block">
          <img src="/Contexto/Aula%2002/assets/agents.jpg" alt="Agente de IA"
               class="max-w-full h-auto max-h-[520px] rounded-xl shadow-md border border-gray-200 dark:border-gray-700 ring-1 ring-gray-200/70 dark:ring-gray-700/60 object-cover" />
        </a>
      </div>
    </div>
  </div>
</div>

<!-- Modais (CSS target) -->
<div id="modal-llms" class="modal fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto" role="dialog" aria-modal="true">
  <div class="modal-content relative mx-auto max-w-5xl min-h-screen flex items-center justify-center">
    <a href="#" class="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-[#111]/90 text-gray-900 dark:text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Fechar modal">Fechar ✕</a>
    <img src="/Contexto/Aula%2002/assets/llms.jpg" alt="LLM ampliada" class="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl" />
  </div>
  <a href="#" class="absolute inset-0" aria-hidden="true"></a>
</div>

<div id="modal-agente" class="modal fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm p-4 md:p-6 overflow-y-auto" role="dialog" aria-modal="true">
  <div class="modal-content relative mx-auto max-w-5xl min-h-screen flex items-center justify-center">
    <a href="#" class="absolute top-4 right-4 rounded-full bg-white/90 dark:bg-[#111]/90 text-gray-900 dark:text-white px-3 py-2 shadow focus:outline-none focus:ring-2 focus:ring-blue-500" aria-label="Fechar modal">Fechar ✕</a>
    <img src="/Contexto/Aula%2002/assets/agents.jpg" alt="Agente de IA ampliada" class="max-w-full max-h-[80vh] md:max-h-[85vh] object-contain rounded-xl border border-gray-200 dark:border-gray-700 shadow-xl" />
  </div>
  <a href="#" class="absolute inset-0" aria-hidden="true"></a>
</div>

💡 <strong>"Um LLM é o cérebro, mas o agente é o sistema nervoso completo"</strong>`,
  },
  {
    id: "aula2-slide4",
    order: 4,
    title: "Arquitetura de Agente - Visão Geral",
    type: "text",
    content: `# Os Quatro Pilares da Arquitetura de Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Cérebro e Memória em colunas 1 e 2 -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧠 CÉREBRO (LLM)</h3>
    <ul class="list-none space-y-2">
      <li>Motor de raciocínio</li>
      <li>Processamento de linguagem</li>
      <li>Geração de planos de ação</li>
      <li>Tomada de decisões</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💾 MEMÓRIA/CACHE</h3>
    <ul class="list-none space-y-2">
      <li>Contexto conversacional</li>
      <li>Histórico de ações</li>
      <li>Banco de conhecimento</li>
      <li>Estado persistente</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem ocupando as duas colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/agente_exemplo.jpg" alt="Arquitetura de Agente — exemplo visual"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Wrapper dedicado para garantir Tools e Contexto na mesma linha -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔧 TOOLS (FERRAMENTAS)</h3>
      <ul class="list-none space-y-2">
        <li>APIs externas</li>
        <li>Funções customizadas</li>
        <li>Acesso a dados</li>
        <li>Sistemas legados</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📋 CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Informações do projeto</li>
        <li>Objetivos e restrições</li>
        <li>Regras organizacionais</li>
        <li>Dados estruturados</li>
      </ul>
    </div>
  </div>
</div>

**Fluxos de Dados:**
- Cérebro ↔ Memória: Consulta e atualização de contexto
- Cérebro → Tools: Chamadas de ação
- Contexto → Cérebro: Orientação de decisões
- Tools → Cérebro: Resultados e feedback

**Exemplo Real:** "Agente de desenvolvimento de software"`,
  },
  {
    id: "aula2-slide5",
    order: 5,
    title: "Arquitetura Detalhada - Cérebro (LLM)",
    type: "text",
    content: `# Cérebro: O Motor de Raciocínio do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Processamento de Objetivos + Gestão de Recursos -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 PROCESSAMENTO DE OBJETIVOS</h3>
    <ul class="list-none space-y-2">
      <li>Interpretação de instruções complexas</li>
      <li>Decomposição em sub-tarefas</li>
      <li>Priorização de ações</li>
      <li>Adaptação a mudanças de contexto</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧩 GESTÃO DE RECURSOS</h3>
    <ul class="list-none space-y-2">
      <li>Seleção de ferramentas apropriadas</li>
      <li>Coordenação de múltiplas APIs</li>
      <li>Otimização de chamadas</li>
      <li>Tratamento de erros e exceções</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/llm_brain.jpg" alt="Cérebro (LLM) — exemplo visual"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Análise e Decisão + Comunicação -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔍 ANÁLISE E DECISÃO</h3>
      <ul class="list-none space-y-2">
        <li>Avaliação de resultados</li>
        <li>Validação de qualidade</li>
        <li>Detecção de inconsistências</li>
        <li>Ajuste de estratégias</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📝 COMUNICAÇÃO</h3>
      <ul class="list-none space-y-2">
        <li>Geração de relatórios de progresso</li>
        <li>Explicação de decisões</li>
        <li>Interface com usuários</li>
        <li>Documentação automática</li>
      </ul>
    </div>
  </div>
</div>

**Exemplo Prático - Agente de Desenvolvimento:**
- Objetivo: "Criar um sistema de e-commerce"
- Decomposição: Frontend → Backend → Database → Deploy
- Seleção de ferramentas: Lovable → Supabase → GitHub
- Validação: Testes, segurança, performance`,
  },
  {
    id: "aula2-slide6",
    order: 6,
    title: "Arquitetura Detalhada - Memória/Cache",
    type: "text",
    content: `# Memória: A Consciência do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Memória de Trabalho + Memória Persistente -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📚 MEMÓRIA DE TRABALHO (SHORT-TERM)</h3>
    <ul class="list-none space-y-2">
      <li>Contexto da conversa atual</li>
      <li>Instruções recentes</li>
      <li>Resultados de ações imediatas</li>
      <li>Duração: sessão atual</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💾 MEMÓRIA PERSISTENTE (LONG-TERM)</h3>
    <ul class="list-none space-y-2">
      <li>Histórico de projetos similares</li>
      <li>Preferências do usuário</li>
      <li>Políticas organizacionais</li>
      <li>Aprendizados anteriores</li>
    </ul>
  </div>



  <!-- Linha 3: Memória Especializada + Memória de Contexto -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔍 MEMÓRIA ESPECIALIZADA (DOMAIN)</h3>
      <ul class="list-none space-y-2">
        <li>Conhecimento técnico específico</li>
        <li>Padrões de código e arquitetura</li>
        <li>Requisitos regulatórios</li>
        <li>Boas práticas do setor</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎯 MEMÓRIA DE CONTEXTO (PROJECT)</h3>
      <ul class="list-none space-y-2">
        <li>Objetivos do projeto atual</li>
        <li>Restrições e limitações</li>
        <li>Especificações técnicas</li>
        <li>Stakeholders e processos</li>
      </ul>
    </div>
  </div>
</div>

**Implementação Prática:**
- Vector databases para busca semântica
- Sistemas de cache distribuído
- APIs de memória externa
- Sincronização em tempo real

**Benefícios:**
- Consciência contínua
- Aprendizado incremental
- Personalização
- Eficiência operacional`,
  },
  {
    id: "aula2-slide7",
    order: 7,
    title: "Arquitetura Detalhada - Tools (Ferramentas)",
    type: "text",
    content: `# Tools: Os Sentidos e Ações do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: APIs Externas + Ferramentas de Desenvolvimento -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🌐 APIS EXTERNAS</h3>
    <ul class="list-none space-y-2">
      <li>Serviços de terceiros (Stripe, AWS, Google)</li>
      <li>Plataformas de desenvolvimento (GitHub, GitLab)</li>
      <li>Ferramentas de comunicação (Slack, Teams)</li>
      <li>Bancos de dados e storage</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">💻 FERRAMENTAS DE DESENVOLVIMENTO</h3>
    <ul class="list-none space-y-2">
      <li>IDEs e editores de código</li>
      <li>Sistemas de controle de versão</li>
      <li>Ferramentas de build e deploy</li>
      <li>Ambientes de teste e staging</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/tools.jpg" alt="Ferramentas do Agente — visão geral"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Funções Customizadas + Sistemas de Monitoramento -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔧 FUNÇÕES CUSTOMIZADAS</h3>
      <ul class="list-none space-y-2">
        <li>Validações específicas do negócio</li>
        <li>Processamento de dados</li>
        <li>Integrações proprietárias</li>
        <li>Algoritmos especializados</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📊 SISTEMAS DE MONITORAMENTO</h3>
      <ul class="list-none space-y-2">
        <li>Logs e métricas de performance</li>
        <li>Alertas e notificações</li>
        <li>Dashboards de status</li>
        <li>Auditoria e compliance</li>
      </ul>
    </div>
  </div>
</div>

**Interface de Comunicação:**
- Protocolos padronizados (REST, GraphQL, gRPC)
- Autenticação e autorização
- Rate limiting e quotas
- Versionamento de APIs

**Exemplo de Uso:**
**Agente de E-commerce:**
- Tools: Supabase (DB), Stripe (pagamento), SendGrid (email)
- Integração: API calls sequenciais com tratamento de erro
- Monitoramento: Status de pedidos, logs de pagamento`,
  },
  {
    id: "aula2-slide8",
    order: 8,
    title: "Arquitetura Detalhada - Contexto",
    type: "text",
    content: `# Contexto: O DNA do Agente

<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
  <!-- Linha 1: Contexto Global + Contexto do Projeto -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🌍 CONTEXTO GLOBAL</h3>
    <ul class="list-none space-y-2">
      <li>Política organizacional</li>
      <li>Regulamentações do setor</li>
      <li>Padrões de qualidade</li>
      <li>Cultura e valores da empresa</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📋 CONTEXTO DO PROJETO</h3>
    <ul class="list-none space-y-2">
      <li>Especificações técnicas</li>
      <li>Requisitos funcionais</li>
      <li>Restrições de tempo/custo</li>
      <li>Arquitetura alvo</li>
    </ul>
  </div>

  <!-- Linha 2: Imagem central ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/contexto_mem.jpg" alt="Contexto — visão geral (primeira imagem)"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 3: Contexto de Usuário + Contexto Situacional -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">👥 CONTEXTO DE USUÁRIO</h3>
      <ul class="list-none space-y-2">
        <li>Perfil e preferências</li>
        <li>Histórico de interações</li>
        <li>Nível de permissão</li>
        <li>Padrões de uso</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">⚡ CONTEXTO SITUACIONAL</h3>
      <ul class="list-none space-y-2">
        <li>Estado atual do sistema</li>
        <li>Resultados de ações anteriores</li>
        <li>Condições de erro</li>
        <li>Feedback do ambiente</li>
      </ul>
    </div>
  </div>

  <!-- Linha 3.5: Imagem intermediária ocupando 2 colunas -->
  <div class="md:col-span-2">
    <img src="/Contexto/Aula%2002/assets/context.jpg" alt="Contexto — imagem intermediária"
         class="max-w-full w-auto h-auto max-h-[480px] md:max-h-[520px] mx-auto rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 object-contain" />
  </div>

  <!-- Linha 4: Fontes de Contexto + Gestão de Contexto -->
  <div class="md:col-span-2 grid grid-cols-2 gap-6 items-stretch">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">📚 FONTES DE CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Documentação técnica</li>
        <li>Bases de conhecimento</li>
        <li>APIs de configuração</li>
        <li>Entrada do usuário</li>
        <li>Sistemas externos</li>
        <li>Histórico de projetos</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧭 GESTÃO DE CONTEXTO</h3>
      <ul class="list-none space-y-2">
        <li>Hierarquização por relevância</li>
        <li>Atualização em tempo real</li>
        <li>Versionamento de políticas</li>
        <li>Audibilidade de mudanças</li>
      </ul>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula2-slide9",
    order: 9,
    title: "Prompt Engineering vs Context Engineering",
    type: "text",
    content:
      '# Evolução: Da Engenharia de Prompts à Engenharia de Contexto\n\n| Aspecto | Prompt Engineering | Context Engineering |\n|---|---|---|\n| **FOCO** | Instrução específica | Ambiente completo |\n| **SCOPE** | Solicitação pontual | Projeto global |\n| **DADOS** | Texto do prompt | Base de conhecimento estruturada |\n| **PRECISÃO** | Variável | Alta, com validação |\n| **COMPLEXIDADE** | Simples a média | Média a alta |\n| **MANUTENÇÃO** | Prompts individuais | Sistema de contexto |\n| **ESCALABILIDADE** | Limitada | Alta |\n| **CUSTO COMPUTACIONAL** | Baixo | Médio a alto |\n\n**PROMPT ENGINEERING:**\n- "Crie uma função para calcular média de notas"\n- "Escreva um componente React para login"\n- "Gere um SQL para consultar pedidos"\n\n**CONTEXT ENGINEERING:**\n- Sistema completo de gestão acadêmica\n- Componente com integração a autenticação\n- Dashboard com dados em tempo real e relatórios\n\n**Vantagens da Context Engineering:**\n- 🎯 Maior precisão e relevância\n- 🔄 Consistência entre interações\n- 🛡️ Menor risco de ambiguidade\n- 📈 Resultados mais robustos\n- 🔧 Maior controle sobre qualidade',
  },
  {
    id: "aula2-slide10",
    order: 10,
    title: "Técnicas de Engenharia de Contexto",
    type: "text",
    content: `# Técnicas Avançadas de Context Engineering

<div class="grid grid-cols-1 md:grid-cols-3 gap-6">
  <!-- Blocos de contextualização (com marcadores de bolinha) -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">1️⃣ CONTEXTUALIZAÇÃO ESTRUTURADA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Documentação técnica</li>
      <li>Especificações de requisitos</li>
      <li>Políticas e procedimentos</li>
      <li>Exemplos de referência</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">2️⃣ CONTEXTUALIZAÇÃO DINÂMICA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dados em tempo real</li>
      <li>Estado atual do sistema</li>
      <li>Feedback de usuários</li>
      <li>Métricas de performance</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">3️⃣ CONTEXTUALIZAÇÃO INTELIGENTE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Aprendizagem por experiência</li>
      <li>Adaptação automática</li>
      <li>Personalização progressiva</li>
      <li>Predição de necessidades</li>
    </ul>
  </div>

  <!-- Linha seguinte com quebra (mt-6) e 4 colunas -->
  <div class="md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 items-stretch mt-6">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🏗️ CONSTRUÇÃO DA BASE:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Coleta de documentação existente</li>
        <li>Normalização de formatos</li>
        <li>Indexação semântica</li>
        <li>Validação de qualidade</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🎼 ORQUESTRAÇÃO:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>APIs de contexto</li>
        <li>Sistemas de atualização</li>
        <li>Versionamento</li>
        <li>Políticas de acesso</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🔎 RECUPERAÇÃO CONTEXTUAL:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Busca semântica</li>
        <li>Filtragem por relevância</li>
        <li>Ranqueamento por importância</li>
        <li>Agregação inteligente</li>
      </ul>
    </div>
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">🧰 Ferramentas de Apoio:</h3>
      <ul class="list-disc pl-6 space-y-2">
        <li>Vector databases (Pinecone, Weaviate)</li>
        <li>Sistemas de knowledge graphs</li>
        <li>Frameworks de RAG (Retrieval-Augmented Generation)</li>
        <li>Pipelines de processamento de texto</li>
      </ul>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula2-slide11",
    order: 11,
    title: "Exemplos Práticos - Antes e Depois",
    type: "text",
    content:
      '# Context Engineering em Ação: Transformações Reais\n\n## EXEMPLO 1: DESENVOLVIMENTO WEB\n\n**ANTES (Prompt Engineering):**\n"Crie um formulário de cadastro"\n\n**DEPOIS (Context Engineering):**\n"Desenvolver um sistema de cadastro de clientes para uma farmácia online seguindo as normas da ANVISA, com validação de CPF/CNPJ, integração com o sistema de estoque via API REST, armazenamento seguro no Supabase com RLS, interface responsiva usando Tailwind CSS, tema escuro/claro, e relatórios automáticos por email para o gerente."\n\n**RESULTADO:**\n- Código mais completo e seguro\n- Conformidade regulatória\n- Integração real com sistemas\n- Interface profissional\n\n## EXEMPLO 2: ANÁLISE DE DADOS\n\n**ANTES:**\n"Gere um gráfico de vendas"\n\n**DEPOIS:**\n"Análise de performance de vendas para uma rede de 15 lojas no Nordeste durante o período de Black Friday 2024, comparando com o mesmo período de 2023, destacando produtos sazonais, impactados por feiras livre, considerando dados de clima (chuvas intensas em novembro), e identificando oportunidades de expansão para 2025."\n\n**RESULTADO:**\n- Análise contextualizada e acionável\n- Consideração de variáveis externas\n- Insights estratégicos\n- Projeções fundamentadas',
  },
  {
    id: "aula2-slide12",
    order: 12,
    title: "Boas Práticas - Context Engineering",
    type: "text",
    content: `# Boas Práticas para Context Engineering

<!-- Grupo 1: Estruturação de Contexto -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">📋 ESTRUTURAÇÃO DE CONTEXTO</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ HIERARQUIZAÇÃO</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Contexto global → Projeto → Situacional</li>
      <li>Priorizar informações críticas</li>
      <li>Evitar redundâncias</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ QUALIDADE DOS DADOS</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Validação de fontes</li>
      <li>Atualização regular</li>
      <li>Versionamento de mudanças</li>
      <li>Auditoria de origem</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ GRANULARIDADE ADEQUADA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Contexto suficiente sem excesso</li>
      <li>Foco no que é relevante</li>
      <li>Balanceamento precisão/tamanho</li>
    </ul>
  </div>
</div>

<!-- Grupo 2: Implementação Técnica -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">🔧 IMPLEMENTAÇÃO TÉCNICA</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ ARQUITETURA ESCALÁVEL</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>APIs bem documentadas</li>
      <li>Cache distribuído</li>
      <li>Rate limiting</li>
      <li>Monitoramento de performance</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ SEGURANÇA E PRIVACIDADE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Controle de acesso granular</li>
      <li>Criptografia de dados sensíveis</li>
      <li>Logs de auditoria</li>
      <li>Conformidade regulatória</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ INTEGRAÇÃO EFICIENTE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>APIs padronizadas</li>
      <li>Tratamento robusto de erros</li>
      <li>Timeouts e retry logic</li>
      <li>Fallbacks graciosos</li>
    </ul>
  </div>
</div>

<!-- Grupo 3: Gestão e Monitoramento -->
<h2 class="text-2xl font-bold text-gray-900 dark:text-white mt-6 mb-4">📊 GESTÃO E MONITORAMENTO</h2>
<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ MÉTRICAS DE QUALIDADE</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Precisão de resultados</li>
      <li>Tempo de resposta</li>
      <li>Taxa de acerto</li>
      <li>Satisfação do usuário</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">✅ MELHORIA CONTÍNUA</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Feedback loops</li>
      <li>A/B testing</li>
      <li>Análise de padrões</li>
      <li>Otimização iterativa</li>
    </ul>
  </div>
</div>`,
  },
  {
    id: "aula2-slide13",
    order: 13,
    title: "Model Context Protocol (MCP) - Conceitos",
    type: "text",
    content: `# Model Context Protocol: O Futuro da Integração

## O QUE É O MCP?
🔗 Protocolo padronizado para comunicação entre LLMs e ferramentas
🌐 Permite acesso seguro a dados e funcionalidades externas
🤝 Desenvolvido pela Anthropic em colaboração com comunidade
📈 Padrão emergente para agentes de IA

## ARQUITETURA MCP:

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">CLIENTE (LLM/Agente)</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Solicita recursos e ferramentas</li>
      <li>Processa resultados</li>
      <li>Mantém contexto conversacional</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">SERVIDOR MCP</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Expõe recursos de forma padronizada</li>
      <li>Gerencia autenticação e autorização</li>
      <li>Fornece logging e auditoria</li>
      <li>Implementa políticas de segurança</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">RECURSOS MCP</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dados estruturados e não-estruturados</li>
      <li>Ferramentas e funções</li>
      <li>APIs de terceiros</li>
      <li>Sistemas legados</li>
    </ul>
  </div>

</div>

## FLUXO DE COMUNICAÇÃO:
1. Cliente inicia conexão segura
2. Servidor expõe recursos disponíveis
3. Cliente solicita recurso específico
4. Servidor valida e executa
5. Resultado retornado com metadados
6. Contexto atualizado automaticamente

**BENEFÍCIOS:**
- 🔒 Segurança por padrão
- 📊 Padronização de interfaces
- 🚀 Agilidade no desenvolvimento
- 🔄 Reutilização de componentes`,
  },
  {
    id: "aula2-slide14",
    order: 14,
    title: "MCP na Prática - Casos de Uso",
    type: "text",
    content: `# MCP em Ação: Casos de Uso Reais

## 🌐 INTEGRAÇÃO COM SISTEMAS EXTERNOS

<div class="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Bancos de Dados</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>PostgreSQL, MySQL, MongoDB</li>
      <li>Queries complexas com contexto</li>
      <li>Sync automático de esquemas</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Sistemas de Controle de Versão</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>GitHub, GitLab, Bitbucket</li>
      <li>Análise de código automático</li>
      <li>Gestão de pull requests</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Ferramentas de Desenvolvimento</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>IDEs (VS Code, Cursor)</li>
      <li>CI/CD pipelines</li>
      <li>Sistemas de monitoramento</li>
    </ul>
  </div>
</div>

## 📊 ANÁLISE E INTELIGÊNCIA

<div class="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Business Intelligence</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Dashboards automáticos</li>
      <li>Relatórios personalizados</li>
      <li>Análise preditiva</li>
    </ul>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-3">Processamento de Documentos</h3>
    <ul class="list-disc pl-6 space-y-2">
      <li>Extração de informações</li>
      <li>Análise de sentimentos</li>
      <li>Classificação automática</li>
    </ul>
  </div>
</div>

## 🔧 AUTOMAÇÃO DE WORKFLOWS

**DevOps e Infraestrutura**
- Deploy automático
- Monitoramento de sistemas
- Gestão de logs

**Marketing e Vendas**
- Segmentação de clientes
- Campanhas personalizadas
- Análise de performance

**VANTAGENS PRÁTICAS:**
- ⏱️ Redução de 60-80% no tempo de integração
- 🔒 Segurança padrão com validação
- 📈 Escalabilidade horizontal
- 🔄 Reutilização entre projetos`,
  },
  {
    id: "aula2-slide15",
    order: 15,
    title: "n8n como Orquestrador de Agentes",
    type: "text",
    content:
      "# n8n: Plataforma de Orquestração Visual\n\n## O QUE É O n8n?\n🔧 Plataforma de automação open-source\n🎨 Interface visual para criação de workflows\n🔗 400+ integrações pré-configuradas\n🤖 Suporte nativo a agentes de IA\n\n## VANTAGENS PARA AGENTES:\n✅ Interface visual intuitiva\n✅ Drag-and-drop para criação\n✅ Lógica condicional avançada\n✅ Tratamento de erros robusto\n✅ Logging detalhado\n✅ Escalabilidade horizontal\n\n## COMPONENTES PRINCIPAIS:\n\n**NODES (FERRAMENTAS)**\n- HTTP Request: APIs externas\n- Code: JavaScript customizado\n- Webhook: Gatilhos externos\n- OpenAI: Integração com LLMs\n- Database: Conexões diretas\n\n**WORKFLOWS (FLUXOS)**\n- Múltiplas entradas e saídas\n- Processamento paralelo\n- Loops e condições\n- Error handling\n\n## EXEMPLO DE WORKFLOW:\n**Agente de Processamento de Leads:**\n1. Webhook → Novo lead recebido\n2. Code Node → Validação de dados\n3. Database Node → Busca histórico\n4. OpenAI Node → Classificação\n5. Slack Node → Notificação\n6. CRM Node → Atualização",
  },
  {
    id: "aula2-slide21",
    order: 16,
    title: "Recap e Síntese",
    type: "text",
    content:
      "# Síntese: Do Conceito à Prática\n\n## CONCEITOS-CHAVE APRENDIDOS:\n\n### 🧠 LLM ≠ AGENTE\n- LLM: Gerador de texto reativo\n- Agente: Sistema autônomo completo\n- Arquitetura: Cérebro + Memória + Tools + Contexto\n\n### ⚙️ ENGENHARIA EVOLUTIVA\n- Prompt Engineering → Context Engineering\n- De instruções → Ambientes completos\n- De pontual → Sistemático\n\n### 🔗 ORQUESTRAÇÃO INTELIGENTE\n- MCP: Padrão emergente de integração\n- n8n: Visual workflow automation\n- Agentes: Coordenação de tarefas complexas\n\n## IMPACTOS PRÁTICOS:\n- 🚀 60-80% redução no tempo de desenvolvimento\n- 🎯 Resultados mais precisos e contextualizados\n- 🔄 Automação de processos complexos\n- 📈 Escalabilidade e reutilização\n\n## PRÓXIMOS PASSOS:\n- Aplicar conceitos em projetos reais\n- Explorar ferramentas MCP disponíveis\n- Construir agentes para casos específicos\n- Compartilhar aprendizados na comunidade",
  },
  {
    id: "aula2-slide22",
    order: 17,
    title: "Preview da Próxima Aula",
    type: "text",
    content:
      '# Próxima Aula: Comparação de LLMs para Vibe Coding\n\n## TEMA: "Qual LLM Escolher para Seu Projeto?"\n\n### CONTEÚDO DA AULA 03:\n- 🧠 Comparação técnica: GLM 4.6 vs Claude vs GPT-4\n- 💰 Análise de custos e performance\n- 📊 Benchmarks específicos para vibe coding\n- 🎯 Recomendações por tipo de projeto\n- 🛠️ Integração prática com ferramentas\n\n### DIFERENCIAIS:\n- Testes práticos com diferentes modelos\n- Métricas reais de performance\n- Estudos de caso de projetos reais\n- Calculator de custo-benefício\n\n### PREVIEW VISUAL:\n- Tabela comparativa interativa\n- Gráficos de performance\n- Exemplos de outputs de cada LLM\n- Matrix de decisão prática\n\n### DESAFIO PARA CASA:\nExperimentar diferentes LLMs no mesmo prompt básico e comparar resultados.',
  },
  {
    id: "aula2-slide23",
    order: 18,
    title: "Recursos Adicionais e Contatos",
    type: "text",
    content:
      '# Recursos para Aprofundamento\n\n## 📚 DOCUMENTAÇÃO OFICIAL:\n- MCP Protocol: modelcontextprotocol.io\n- n8n Documentation: docs.n8n.io\n- Anthropic Claude: docs.anthropic.com\n- OpenAI Platform: platform.openai.com\n\n## 🛠️ FERRAMENTAS PARA EXPLORAR:\n- Vector Databases: Pinecone, Weaviate\n- Frameworks RAG: LangChain, LlamaIndex\n- Agent Frameworks: CrewAI, AutoGen\n- Visual Tools: n8n, Node-RED\n\n## 📖 LEITURAS RECOMENDADAS:\n- "Building LLM Applications for Production" - Chip Huyen\n- "The Prompt Engineer\'s Guide to Context Engineering"\n- Case studies de agentes em produção\n\n## 🎓 COMUNIDADE:\n- Discord do curso: [link]\n- GitHub repository: [link]\n- LinkedIn: [professor]\n- Email: [contato]\n\n## AVALIAÇÃO:\nEnviar diagrama de arquitetura até [data] via Discord.\n\n**OBRIGADO!**\nTransformando conceitos em soluções inteligentes',
  },
];

