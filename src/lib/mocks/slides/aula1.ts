import { Slide } from "@/types";

// Mock de Slides
export const mockSlidesAula1: Slide[] = [
  {
    id: "aula1-slide1",
    order: 1,
    title: "Abertura do Curso",
    type: "text",
    content:
      "# Vibe Coding\n## Programação Assistida por IA: Do Conceito ao Deploy\n\n- **8 encontros práticos**\n- **Outubro/Novembro 2025**\n- **20h00 às 22h30** (com laboratório aberto até 23h00)",
    image:
      "https://mfgnuiozkznfqmtnlzgs.supabase.co/storage/v1/object/public/media-files/bf5ff449-a432-4b2c-b33e-ed85c4cbf4a5/1761681732357.jpg",
  },
  {
    id: "aula1-slide2",
    order: 2,
    title: "Objetivos do Curso",
    type: "text",
    content:
      "# Para Quem é Este Curso?\n\n- **🎯 Desenvolvedores Iniciantes:** Completos novatos ou em transição de carreira.\n- **💻 Vibe Coders:** Querem estruturar e aprofundar o conhecimento.\n- **👨‍💻 Desenvolvedores Tradicionais:** Buscam se atualizar com ferramentas emergentes.\n\n# O Que Você Vai Aprender?\n\n- **🧠 CONCEITOS:** Fundamentos, mitos vs. realidade, arquitetura de agentes.\n- **🛠️ MÉTODOS:** Segurança, engenharia de prompt e contexto, iteração eficaz.\n- **🚀 PRÁTICA:** Ferramentas de ponta, projeto completo do zero ao deploy.",
  },
  {
    id: "aula1-slide3",
    order: 3,
    title: "Perfis de Vibe Coder: Hype vs. Profissionalização",
    type: "image-text",
    content: {
      imageUrl:
        "https://mfgnuiozkznfqmtnlzgs.supabase.co/storage/v1/object/public/media-files/bf5ff449-a432-4b2c-b33e-ed85c4cbf4a5/1762606385469.jpg",
      imageAlt: "Comparação de perfis Vibe Coder",
      text: `### 🎭 Perfis de Vibe Coder: Hype vs. Profissionalização

| Característica | 🎮 Não Técnico<br/>("Vibecoder da Web") | 🚀 Técnico<br/>("Vibe Coder Pro") |
|----------------|----------------------------------------|-----------------------------------|
| **Base Técnica** | Interface pura, sem engenharia | HTTP, APIs, auth, testes, infra |
| **Escopo** | POCs, scripts pontuais | Sistemas completos, produção |
| **Padrões** | Sem segurança/performance/manutenção | Seguro, performático, sustentável |
| **Abordagem** | Copiar/colar cego | Orquestra fluxos e contexto |
| **Frameworks** | Nenhum | • **BMAD**: Business, Model, Architecture, Delivery<br/>• **Spec-driven**: Requisitos → contrato → código |
| **Resultado** | Apps simples, preconceito, riscos | • Sistemas profissionais<br/>• Auditáveis e escaláveis |
| **Mercado** | R$ 3-8k (limitado) | R$ 15-25k (alta demanda) |

> **💡 Nota**: Aprofundaremos arquitetura de agente e engenharia de contexto na Aula 02`,
    },
  },
  {
    id: "aula1-slide4",
    order: 4,
    title: "O Profissional em Alta: Dev Técnico + Orquestração de IA",
    type: "text",
    content:
      "### 👔 Quem é esse profissional?\n\n- **Base técnica sólida**: Segurança, performance, padrões, Git, CI/CD\n- **Domina orquestração de IA**: Projeta prompts, contextos, ferramentas, fluxos\n- **Responsável**: Valida, testa, monitora, versiona tudo\n- **Não delega cegamente**: IA é ferramenta, não substituto do pensamento crítico\n\n---\n\n### ⚙️ Como ele trabalha: Ciclo PREVC\n\n- **P**lanear: Define objetivo, contexto, restrições, riscos\n- **R**evisar: Avalia respostas da IA, ajusta instruções e gaps\n- **E**xecutar: Aplica soluções com critérios técnicos\n- **V**alidar: Testa segurança, performance, aderência ao PRD\n- **C**onfirmar: Documenta, versiona, consolida fluxo para reuso\n\n---\n\n### 📈 Por que o mercado quer esse perfil?\n\n- ✅ Reduz retrabalho e risco operacional\n- ✅ Acelera entrega sem sacrificar qualidade\n- ✅ Conecta linguagem de negócio + LLMs + engenharia sólida\n- ✅ **Diferencial competitivo**: R$ 15-25k vs R$ 3-8k (mercado brasileiro)",
  },
  {
    id: "aula1-slide5",
    order: 5,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# O Ecossistema Completo de Vibe Coding

## 🎨 PLATAFORMAS ALL-IN-ONE
- **Lovable:** Transforma linguagem natural em apps web completos
- **Google AI Studio:** Ambiente de desenvolvimento com Gemini integrado
- **Manus:** Agente de IA com interface de objetivos
- **MGX (MetaGPT X):** No-code AI builder para chatbots e análise
- **GenSpark:** Plataforma de geração de código e automação
- **Kimi AI:** Assistente de IA com foco em desenvolvimento
- **Z.ai:** Plataforma de modelos de linguagem com contexto amplo
- **Lumi:** Ambiente de desenvolvimento assistido por IA

## 🔗 AUTOMAÇÃO & ORQUESTRAÇÃO
- **n8n:** Workflows inteligentes baseados em nós
- **Make (Integromat):** Automação visual com múltiplas integrações
- **OpenAI Agent Builder:** Construtor de agentes especializados
- **Google Visual Blocks:** Framework visual para ML e automação
- **Langflow:** Orquestração de fluxos de trabalho com LLMs

## 💻 IDEs & EDITORES ASSISTIDOS
- **TRAE Solo:** IDE principal para Vibe Coding com GLM 4.6
- **VS Code:** Editor com extensões de IA (Claude, Kilo Code, etc.)
- **Warp:** Terminal avançado com agentes integrados
- **Zed:** Editor colaborativo com suporte a múltiplos agentes
- **Cursor:** IDE com foco em pair-programming com IA

## 🤖 AGENTES & CLIs
- **Claude Code:** CLI e extensão com conversas persistentes
- **Kilo Code:** Modos especializados para diferentes tarefas
- **Gemini CLI:** Interface de linha de comando do Google
- **Codex Code:** Ferramenta de programação da OpenAI
- **Auggie CLI:** Assistente de desenvolvimento
- **OpenCode:** CLI open-source para Vibe Coding
- **Qwen Code:** Ferramenta baseada no modelo Qwen
- **GLM 4.6 CLI:** Interface para o modelo GLM

## 🗄️ BACKEND & BANCO DE DADOS
- **Supabase:** Alternativa open-source ao Firebase com PostgreSQL
- **Firebase:** Backend as a Service do Google
- **Appwrite:** Backend open-source para web e mobile
- **PocketBase:** Backend leve e de código aberto

> **💡 Dica:** Escolha ferramentas que se integram bem e complementam seu workflow`,
  },
  {
    id: "aula1-slide6",
    order: 6,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA

## 🎨 PLATAFORMAS ALL-IN-ONE

<div class="flex flex-wrap -mx-3 items-stretch gap-y-3">
  <!-- Lovable -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/Lov.jpg" alt="Lovable" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Lovable</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Crie apps e sites completos conversando com a IA. Plataforma focada em MVPs e produtos full‑stack com deploy rápido.</p>
      <a href="https://lovable.dev/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Google AI Studio -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/gemini_logo.png" alt="Google AI Studio (Gemini)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Google AI Studio</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">O caminho mais rápido do prompt ao produto com <strong>Gemini</strong>. Prototipação, avaliação e publicação com a API do Gemini.</p>
      <a href="https://aistudio.google.com/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Manus (tema claro/escuro) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/manus_claro.png" alt="Manus" class="h-10 w-10 object-contain rounded dark:hidden" />
        <img src="/Contexto/Aula%2001/assets/manus_escuro.png" alt="Manus (tema escuro)" class="h-10 w-10 object-contain rounded hidden dark:block" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Manus</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de IA orientado à execução: automatiza tarefas e workflows além de respostas, com foco em ação.</p>
      <a href="https://manus.im/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- MGX (MetaGPT X) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/mgx_logo.jpg" alt="MGX (MetaGPT X)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">MGX (MetaGPT X)</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">No‑code AI builder multi‑agente para criar protótipos e aplicações rapidamente, a partir de linguagem natural.</p>
      <a href="https://mgx.dev/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Genspark (mantém ícone atual) -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <span class="text-2xl" aria-hidden="true">✨</span>
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Genspark</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Workspace all‑in‑one com apps de IA (Developer, Designer, Docs, Slides etc.). Suporte a geração de código e automações.</p>
      <a href="https://www.genspark.ai/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Kimi AI -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/kimi_logo.jpg" alt="Kimi AI" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kimi AI</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Assistente de IA com modelos K2 e janelas de contexto extensas, forte em tarefas de coding e pesquisa.</p>
      <a href="https://www.kimi.com/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Z.ai -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/Z.AI.png" alt="Z.ai (GLM)" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Z.ai</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Plataforma de modelos GLM (GLM‑4.6 e família), com APIs e agentes para desenvolvimento assistido por IA.</p>
      <a href="https://z.ai/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>

  <!-- Lumi -->
  <div class="w-1/2 px-3">
    <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full flex flex-col">
      <div class="flex items-center gap-3">
        <img src="/Contexto/Aula%2001/assets/lumi_logo.jpg" alt="Lumi" class="h-10 w-10 object-contain rounded" />
        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Lumi</h3>
      </div>
      <p class="mt-2 text-gray-700 dark:text-gray-300">Ambiente de desenvolvimento assistido por IA para criação de sites via chat, do conceito ao protótipo funcional.</p>
      <a href="https://lumi.new/" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Acessar ↗</a>
    </div>
  </div>
</div>

> Nota: Estes cards detalham o bloco <strong>PLATAFORMAS ALL‑IN‑ONE</strong> do slide 05. Nos próximos slides (07–10) detalharemos os demais blocos.`,
  },
  {
    id: "aula1-slide7",
    order: 7,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
## 🔗 AUTOMAÇÃO & ORQUESTRAÇÃO

| Plataforma | Descrição | Complexidade | Vantagens | Desvantagens |
|------------|-----------|------------|-----------|-------------|
| **n8n** | Plataforma open-source baseada em nós com suporte a lógica complexa, loops, sub-workflows e expressões. Pode rodar self-hosted ou cloud, com arquitetura extensível via nodes customizados. | Média | Open-source e self-hosted, alto poder expressivo, ecossistema sólido de integrações, bom fit para arquiteturas modernas com LLMs | Requer maturidade técnica, escalabilidade exige design, menos "no-code" que concorrentes |
| **Make (antigo Integromat)** | Plataforma SaaS de automação visual com editor de cenários baseado em módulos encadeados. Focada em experiência no-code/low-code com infraestrutura gerenciada. | Baixa-Média | UX extremamente amigável, ampla biblioteca de integrações, ideal para squads de negócio e prototipagem, infra gerenciada | Alto vendor lock-in, menos adequado para workloads críticos, custos podem crescer com escala |
| **OpenAI Agent Builder** | Camada gerenciada para criação de agentes LLM stateful com integração nativa às APIs OpenAI. Abstrai prompt orchestration, tool calling e memória. | Média | Integração nativa com stack OpenAI, menos boilerplate, modelo mental "agent-first", suporte a observabilidade | Vendor lock-in elevado, menos flexível para multi-cloud, ainda não substitui plataformas corporativas |
| **Google Visual Blocks** | Canvas para compor blocos de processamento, modelos e integrações com serviços Google. Orientado a componentes conectáveis para pipelines de IA/ML. | Média | Integração com ecossistema Google, abordagem visual baseada em blocos, padroniza fluxos de IA | Escopo mais restrito, dependência do ecossistema Google, maturidade inferior para governança |
| **Langflow** | Plataforma visual para construção de fluxos de LLMs e agentes baseada em nodes. Integra-se com LangChain, suporta múltiplos provedores e pode rodar localmente. | Média-Alta | Foco nativo em LLMs e agentes, multi-provedor e extensível, interface visual acelera experimentação, possibilidade de self-hosting | Curva de aprendizado elevada, menos adequado para automação generalista, exige complemento para produção robusta |

> **Data de atualização:** 08/11/2025`,
  },
  {
    id: "aula1-slide8",
    order: 8,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA

## 💻 IDEs & EDITORES ASSISTIDOS

<!-- Layout: um card por linha, seguindo o padrão visual do slide 06 -->
<div class="flex flex-col gap-4 items-stretch">
  <!-- TRAE Solo -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/trae-color.png" alt="TRAE Solo" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">TRAE Solo</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      IDE e ambiente agentico focado em <strong>engenharia de contexto</strong>, unificando editor, terminal, docs, browser e ferramentas em um único workspace.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> base <em>VS Code</em> (fork/customizado) e modo <em>SOLO</em> dedicado (referência: páginas oficiais TRAE).</li>
      <li><strong>Multiagentes:</strong> ecossistema aberto de agentes com orquestração e execução fim‑a‑fim.</li>
      <li><strong>Terminal único:</strong> fluxo integrado editor↔terminal↔browser para desenvolvimento guiado por agentes.</li>
      <li><strong>Integração com modelos (BYOK):</strong> suporte a múltiplos provedores via chaves próprias.</li>
      <li><strong>Autocomplete & índice:</strong> sugestões contextuais e entendimento da codebase.</li>
      <li><strong>Orquestração de fluxo:</strong> planejamento, execução, revisão e deploy assistidos.</li>
      <li><strong>Novas integrações de modelos:</strong> compatibilidade reportada com <em>Z.ai (GLM)</em>, <em>Grok</em> e <em>Kimi</em> em releases recentes; disponibilidade pode variar por build/região.</li>
      <li><strong>Disponibilidade Anthropic:</strong> em algumas instalações, modelos <em>Anthropic</em> foram descontinuados; no <em>SOLO Agent Builder</em>, uso focado em <strong>GPT‑5 (Medium/High)</strong>. <em>Confirme na sua build.</em></li>
      <li><strong>Precificação:</strong> planos variam por licenciamento; avaliar custo‑benefício por equipe e volume.</li>
    </ul>
    <a href="https://www.trae.ai/solo" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
  </div>

  <!-- VS Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/visual-studio-code.png" alt="VS Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">VS Code</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor open‑source da Microsoft, extensível e dominante no mercado. Forte ecossistema de extensões e integração com Git/GitHub.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> open‑source, mantido pela Microsoft.</li>
      <li><strong>Multiagentes:</strong> via extensões (Copilot Chat, Continue, CodeRabbit, entre outros).</li>
      <li><strong>Terminal único:</strong> integrado ao editor com tarefas e scripts.</li>
      <li><strong>Integração com modelos (BYOK):</strong> <em>Bring Your Own Key</em> disponível (VS Code 1.105, API de chat de modelos).</li>
      <li><strong>Autocomplete & índice:</strong> Copilot e ferramentas de índice de workspace/projeto.</li>
      <li><strong>Orquestração de fluxo:</strong> tarefas, debug, pipelines com extensões e Actions.</li>
      <li><strong>Integração com GitHub Copilot:</strong> completações de código, chat em linha e janela dedicada; planos <em>Pro/Pro+/Business/Enterprise</em> reforçam o poder de codificação assistida por IA.</li>
      <li><strong>Precificação:</strong> VS Code é gratuito; <em>Copilot</em> possui planos pagos (Pro/Pro+/Business/Enterprise).</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://code.visualstudio.com/" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
      <a href="https://code.visualstudio.com/blogs/2025/10/22/bring-your-own-key" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">BYOK ↗</a>
      <a href="https://github.com/features/copilot/plans" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Copilot – Planos ↗</a>
    </div>
  </div>

  <!-- Warp Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/warp_logo.jpg" alt="Warp Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Warp Code</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Ambiente de desenvolvimento <em>agentic</em> com foco em múltiplos agentes atuando do prompt ao deploy, combinando IDE e CLI.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> plataforma <em>agent‑first</em> da Warp (Rust/GPU), IDE + terminal.</li>
      <li><strong>Multiagentes:</strong> suporte nativo a diversos agentes e fluxo orientado a tarefas.</li>
      <li><strong>Terminal único:</strong> terminal moderno integrado com revisão e edição de código.</li>
      <li><strong>Integração com modelos:</strong> abordagem <em>multi‑model</em> (OpenAI/Anthropic/Google); controle de privacidade.</li>
      <li><strong>Autocomplete & índice:</strong> assistência contextual e revisão em tempo real.</li>
      <li><strong>Orquestração de fluxo:</strong> painel de revisão, execução e publicação.</li>
      <li><strong>Times & versionamento:</strong> recursos para squads (revisão de código, orquestração, analytics) e integração com VCS.</li>
      <li><strong>Precificação (2025):</strong> novo plano <em>Build</em> (~US$ 20/mês, 1.500 créditos) e <em>Business</em> (~US$ 50/usuário/mês). Mudança consolidou planos anteriores; percepção comum é de encarecimento.</li>
    </ul>
    <a href="https://www.warp.dev/code" target="_blank" rel="noopener noreferrer" class="mt-3 inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Site oficial ↗</a>
    <div class="mt-2 flex flex-wrap gap-3">
      <a href="https://www.warp.dev/pricing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Pricing ↗</a>
      <a href="https://www.warp.dev/blog/warp-new-pricing-flexibility-byok" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Mudanças de planos ↗</a>
    </div>
  </div>

  <!-- Zed -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/Zed.png" alt="Zed" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Zed</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor de próxima geração (Rust), veloz e colaborativo (multiplayer), com interface de engenharia agentica e suporte a IA.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> criado pelos autores de Atom/Tree‑sitter; foco em performance.</li>
      <li><strong>Multiagentes:</strong> threads de texto e edição preditiva; colaboração em tempo real.</li>
      <li><strong>Terminal único:</strong> integração com fluxos de build/test/debug.</li>
      <li><strong>Integração com modelos (BYOK):</strong> possibilidade de usar <em>modelos próprios</em> e/ou hospedar (inclui provedores como OpenRouter).</li>
      <li><strong>Autocomplete & índice:</strong> assistências e completions com entendimento contextual.</li>
      <li><strong>Orquestração de fluxo:</strong> agentes assistem refatoração, navegação e execução.</li>
      <li><strong>ACP (Agent Client Protocol):</strong> integração aberta <em>bring‑your‑own‑agent</em>. <em>Agentes aceitos hoje:</em> Gemini CLI e extensões ACP como <em>Auggie</em>, <em>OpenCode</em> e <em>Stakpak</em>; parceria com JetBrains amplia interoperabilidade.</li>
      <li><strong>Precificação:</strong> gratuito/open‑source; add‑ons/serviços opcionais.</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://zed.dev/ai" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Zed AI ↗</a>
      <a href="https://zed.dev/acp" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">ACP ↗</a>
      <a href="https://zed.dev/blog/agent-extensions" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Agent Extensions ↗</a>
      <a href="https://github.com/zed-industries/zed" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Repo ↗</a>
    </div>
  </div>

  <!-- Cursor -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/cursor_logo.jpg" alt="Cursor" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Cursor</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">
      Editor <em>AI‑native</em> com agentes, entendimento profundo da codebase e modelo de autocompletar próprio.
    </p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Origem:</strong> baseado no código do <em>VS Code</em> (fork/customizado).</li>
      <li><strong>Multiagentes:</strong> modo agente com execução de tarefas complexas (background agents/flows).</li>
      <li><strong>Terminal único:</strong> integração com CLI e ferramentas do projeto.</li>
      <li><strong>Modelo exclusivo:</strong> <strong>Composer</strong> (nativo, baixa latência) para tarefas de coding iterativas.</li>
      <li><strong>Integração com modelos (BYOK):</strong> trazer APIs de <em>OpenAI</em>, <em>Google</em> e <em>Anthropic</em>; há suporte/experimentos para alterar <em>base URL</em> em endpoints compatíveis (com limitações reportadas).</li>
      <li><strong>Autocomplete & índice:</strong> modelo de código próprio e entendimento do projeto.</li>
      <li><strong>Orquestração de fluxo:</strong> edição assistida, revisão de PRs (Bugbot), geração e aplicação de mudanças.</li>
      <li><strong>Precificação:</strong> planos individuais (Pro/Pro+/Ultra) e empresariais (Teams/Enterprise).</li>
    </ul>
    <div class="mt-3 flex flex-wrap gap-3">
      <a href="https://cursor.com/pricing" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Planos ↗</a>
      <a href="https://www.youtube.com/watch?v=Xaf_VkiVj9g" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-2 text-green-600 hover:text-green-500 font-medium">Cursor 2.0 (vídeo) ↗</a>
    </div>
  </div>
</div>

> Atualizado em 08/11/2025. Referências: VS Code BYOK (blog oficial), páginas oficiais do Warp Code, Zed AI/ACP e Cursor (pricing/docs); vídeo Cursor 2.0.`,
  },
  {
    id: "aula1-slide9",
    order: 9,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
  ## 🤖 AGENTES & CLIs

<div class="flex flex-col gap-4 items-stretch">
  <!-- Kilo Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/kilo_code_logo.png" alt="Kilo Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Kilo Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Kilo Code AI</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código open-source que atua como "dev júnior automatizado". Lê repositório, planeja mudanças, edita arquivos, roda comandos e reitera até entregar resultado funcional. CLI reutiliza núcleo da extensão VS Code com modos: Architect, Code, Debug, Ask, Orchestrator.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Suporte a múltiplos provedores (OpenAI, Anthropic, Gemini, OpenRouter, modelos locais)</li>
          <li>Open-source, modos com permissão explícita</li>
          <li>Integrações com VS Code/VSCodium/Gitpod</li>
          <li>Parallel mode, Autonomous mode, configuração interativa</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>CLI relativamente recente (menor maturidade)</li>
          <li>Depende de Node/npm</li>
          <li>Requer controle de versão e branch separado por segurança</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Suporta trazer suas próprias chaves + Kilo Provider opcional</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">CLI e extensão gratuitas, custo nos modelos (pay-as-you-go via Kilo Provider ou BYOK)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com modos e Parallel mode</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @kilocode/cli</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI, Extensão IDE (VS Code/Open VSX), Web (docs/painel apenas)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://kilocode.ai/docs/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://kilocode.ai/docs/</a></p>
    </div>
  </div>

  <!-- Claude Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/claude_code_logo.png" alt="Claude Code" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Claude Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Anthropic</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código da Anthropic para terminal e IDE com foco em segurança (sandbox, permissões granulares, políticas enterprise). Lê projeto, roda comandos, faz refactors, gera testes, integra com Git. Usa modelos Claude 3.x/4.x otimizados para código. Integrado a VS Code, JetBrains, Cursor e web app Claude.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Forte foco em segurança e governança</li>
          <li>Sandbox opcional para Bash</li>
          <li>Integrações sólidas com VS Code/JetBrains/Cursor</li>
          <li>Suporte a MCP, arquivo CLAUDE.md para contexto persistente</li>
          <li>hooks pré/pós ferramenta, governança de MCP para enterprise</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Custo tipicamente ligado a planos pagos (Pro/Max)</li>
          <li>Curva de aprendizado alta devido a riqueza de recursos</li>
          <li>Pode executar comandos com acesso amplo se configuração permissiva</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Anthropic API via ANTHROPIC_API_KEY + AWS Bedrock + Google Vertex AI</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Incluso em planos Claude Pro/Max, para empresas via Claude Console (billing por tokens) ou Bedrock/Vertex</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e plugins</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>curl -fsSL https://claude.ai/install.sh | bash</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>brew install --cask claude-code</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @anthropic-ai/claude-code</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensão IDE (VS Code, JetBrains, Cursor), Web (Claude Code on the Web), Desktop (builds como app/daemon)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://docs.claude.com/en/docs/claude-code/quickstart" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://docs.claude.com/en/docs/claude-code/quickstart</a></p>
    </div>
  </div>

  <!-- Gemini CLI -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/gemini_logo.png" alt="Gemini CLI" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Gemini CLI</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Google</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de linha de comando da Google para modelos Gemini 2.5 Pro/Flash. Roda localmente, lê diretório do projeto, chama ferramentas (shell, web search) e permite conversas em linguagem natural para gerar, analisar e modificar código. Open-source, integra com Gemini Code Assist, AI Studio e ecossistema Google (Search, Veo, Imagen). Suporte a contextos grandes (1M tokens).</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Contexto grande com Gemini 2.5 Pro</li>
          <li>Integração natural com ecossistema Google</li>
          <li>Open-source com documentação clara</li>
          <li>Suporte nativo a multimodal</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Focado exclusivamente em Gemini (não multimodelo)</li>
          <li>Controle de dados segue termos da Google (requer avaliação em ambientes regulados)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Gemini API via GEMINI_API_KEY + Google Cloud para empresas</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Tier gratuito para indivíduos (limites diários/minuto), Code Assist Business/Enterprise (~US$ 20-25/usuário/mês), uso via Google Cloud (cobrança por tokens/API)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, via MCP e stack Gemini</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @google/gemini-cli</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npx @google/gemini-cli@latest</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensões IDE (Gemini Code Assist para VS Code/JetBrains), Web (Gemini web app e AI Studio), Desktop (sem app GUI específico)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://developers.google.com/gemini-code-assist/docs/gemini-cli" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.google.com/gemini-code-assist/docs/gemini-cli</a></p>
    </div>
  </div>

  <!-- Codex (Codex CLI – OpenAI) -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/codex.png" alt="Codex" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Codex (Codex CLI – OpenAI)</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> OpenAI</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código da OpenAI integrado ao ecossistema ChatGPT e modelo GPT-5-Codex. Existe como Codex CLI, extensão de IDE (VS Code, Cursor, Windsurf) e Codex Web dentro do ChatGPT. Lê repositório, executa comandos, gera/refatora código, escreve testes, faz code review. Pode delegar tarefas longas para Codex Cloud (sandbox remoto). Usa GPT-5-Codex otimizado para engenharia de software.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Integração nativa com ChatGPT (mesmo login/conta, compartilhamento de contexto)</li>
          <li>Modelo GPT-5-Codex com bom desempenho em refactors extensos e análise de grandes bases</li>
          <li>Ferramentas maduras para CI/CD (integração em pipelines, correção automática de falhas, abertura de PRs)</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Requer plano pago (Plus/Pro/Business/Edu/Enterprise)</li>
          <li>Em configuração permissiva, pode executar comandos com alto nível de acesso e editar múltiplos arquivos em lote (requer modos de aprovação e verificação de diffs)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Via ChatGPT (saldo do plano) ou API OpenAI (modelos codex-*)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Incluso em planos ChatGPT (Plus/Pro/Business/Edu/Enterprise), via API (preços por milhão de tokens, competitivos, com descontos por caching)</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e integração com GitHub Agent HQ</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g @openai/codex</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>brew install --cask codex</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (Codex CLI), Extensão IDE (VS Code, Cursor, Windsurf), Web (Codex Web dentro do ChatGPT), Mobile (via app ChatGPT)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://developers.openai.com/codex/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.openai.com/codex/</a> e <a href="https://developers.openai.com/codex/cli/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://developers.openai.com/codex/cli/</a></p>
    </div>
  </div>

  <!-- Qwen Code -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 mb-6">
    <div class="flex items-center gap-3">
      <img src="/Contexto/Aula%2001/assets/Qwen.png" alt="Qwen" class="h-10 w-10 object-contain rounded" />
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Qwen Code</h3>
    </div>
    <p class="mt-2 text-sm text-gray-600 dark:text-gray-400"><strong>Origem:</strong> Alibaba / Qwen</p>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Agente de código de terminal da família Qwen3-Coder. CLI open-source focado em "agentic coding": explora base de código, gera projetos completos, refatora, roda testes e automatiza tarefas com um único comando. Oferece tier gratuito generoso (~2.000 requisições/dia). Inspirado no Gemini CLI, adaptado para modelos Qwen3-Coder com compatibilidade com API estilo OpenAI.</p>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-green-600 dark:text-green-400">Vantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Free tier muito generoso (~2.000 req/dia, 60 req/min)</li>
          <li>Suporte para modelos locais (via llama.cpp/GGUF)</li>
          <li>Compatibilidade com API estilo OpenAI (facilita integração com Cursor, Roo Code, Cline)</li>
          <li>Pode funcionar como backend barato/free-tier para outros orquestradores</li>
        </ul>
      </div>
      <div>
        <h4 class="font-semibold text-red-600 dark:text-red-400">Desvantagens</h4>
        <ul class="list-disc list-inside mt-1 text-gray-700 dark:text-gray-300">
          <li>Ferramenta relativamente nova (menor maturidade)</li>
          <li>Ecossistema e comunidade mais concentrados em chinês/inglês (menos recursos em português)</li>
        </ul>
      </div>
    </div>

    <div class="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">BYOK</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Login OAuth Qwen + DashScope API key + modelos locais</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Precificação</h4>
        <p class="text-gray-700 dark:text-gray-300">Tier gratuito generoso, uso intenso via DashScope/Qwen (por tokens/chamadas), planos enterprise Alibaba Cloud</p>
      </div>
      <div>
        <h4 class="font-semibold text-blue-600 dark:text-blue-400">Multiagente</h4>
        <p class="text-gray-700 dark:text-gray-300">✅ Sim, com sub-agentes e integração com outros agentes</p>
      </div>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Instalação</h4>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>pip install qwen-code</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>pip install qwen-code-cli</code></pre>
      <pre class="bg-gray-100 dark:bg-gray-800 p-2 rounded mt-1 overflow-x-auto"><code>npm install -g qwen-code-cli</code></pre>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Modos de Uso</h4>
      <p class="text-gray-700 dark:text-gray-300">Terminal CLI (principal), Extensão IDE (sem plugin oficial, mas funciona como provider em Cursor/Cline/Roo Code), Web (chat.qwen.ai ou similar), Desktop (sem app GUI oficial)</p>
    </div>

    <div class="mt-4 text-sm">
      <h4 class="font-semibold text-purple-600 dark:text-purple-400">Documentação</h4>
      <p class="text-gray-700 dark:text-gray-300"><a href="https://qwenlm.github.io/qwen-code-docs/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://qwenlm.github.io/qwen-code-docs/</a> e <a href="https://github.com/QwenLM/qwen-code" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500">https://github.com/QwenLM/qwen-code</a></p>
    </div>
  </div>
</div>`,
  },
  {
    id: "aula1-slide10",
    order: 10,
    title: "Plataformas de Desenvolvimento com IA",
    type: "text",
    content: `# Plataformas de Desenvolvimento com IA
## 🗄️ BACKEND & BANCO DE DADOS

<div class="flex flex-col gap-4 items-stretch">
  <!-- Supabase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/supabase_logo.png" alt="Supabase logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Supabase</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">BaaS open‑source baseado em <strong>PostgreSQL</strong>, com Auth, Storage, Realtime e Edge Functions. Foco em DX e padrões abertos.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://supabase.com/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://supabase.com/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Free, Pro (desde US$ 25/mês), Team (US$ 599/mês) ↗</a>. <em>Compute add‑ons</em> (instância Postgres dedicada): de <strong>Micro</strong> (US$ 10/mês) até opções com <strong>64 cores / 256GB RAM</strong>. <em>"Cores"</em> = núcleos de CPU (vCPU) alocados para a instância, impactando paralelismo e throughput.</li>
      <li><strong>Facilidade de integração:</strong> SDKs para Web/Mobile, REST, PostgREST, GraphQL (pg_graphql), CLI e Admin GUI.</li>
      <li><strong>Segurança:</strong> <em>Row‑Level Security (RLS)</em> por padrão, chaves <em>public (anon)</em> e <em>service_role</em>; MFA, logs e backups/PITR nos planos. <em>Nota:</em> balancear políticas RLS para não bloquear funcionalidades essenciais.</li>
      <li><strong>Performance:</strong> PostgreSQL dedicado por projeto; pooling, Realtime (millions msgs/mês), storage com CDN, Edge Functions com baixo custo.</li>
    </ul>
    <div class="mt-3 text-sm">
      <h4 class="font-semibold text-green-600 dark:text-green-400">Extensões (Supabase/Postgres)</h4>
      <ul class="list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
        <li><strong>pgvector</strong> (base vetorial para embeddings/similaridade) — <a href="https://supabase.com/docs/guides/ai/pgvector" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
        <li><strong>PostGIS</strong> (geoespacial: Point, Polygon, LineString, consultas GIS) — <a href="https://supabase.com/docs/guides/database/extensions/postgis" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
        <li><strong>pg_trgm</strong> (trigram similarity/fuzzy search), <strong>uuid‑ossp</strong> (UUID), <strong>pgcrypto</strong> (criptografia), <strong>citext</strong> (case‑insensitive text)</li>
        <li>Mais de 50 extensões pré‑configuradas e opção de instalar outras — <a href="https://supabase.com/docs/guides/database/extensions" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Visão geral ↗</a></li>
      </ul>
    </div>
  </div>

  <!-- Firebase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <div class="flex items-center gap-3">
      <span class="text-2xl" aria-hidden="true">🔥</span>
      <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Firebase</h3>
    </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Plataforma BaaS do Google com <strong>Firestore/Realtime DB</strong>, Auth, Functions, Hosting e integrações com Google Cloud.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://firebase.google.com/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://firebase.google.com/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Spark (free) & Blaze (pay‑as‑you‑go) ↗</a>. Mudança: App Hosting com 10GiB/mês grátis, depois US$ 0.20/GiB (uncached) e US$ 0.15/GiB (cached) a partir de 01/08/2025.</li>
      <li><strong>Facilidade de integração:</strong> SDKs oficiais para Web/Mobile, emuladores locais, CLI, integração estreita com Google Cloud & BigQuery.</li>
      <li><strong>Segurança:</strong> <em>Security Rules</em> para Firestore/Realtime/Storage; IAM via Identity Platform; requisitos de compliance via Google Cloud.</li>
      <li><strong>Performance:</strong> baixa latência global, caching e offline; atenção a custos de egress/leitura em escala; Functions com quotas generosas.</li>
    </ul>
  </div>

  <!-- Appwrite -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/App_Write.png" alt="Appwrite logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">Appwrite</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">BaaS <strong>open‑source</strong> com Auth, Database (coleções/documentos), Storage, Functions, Realtime e Sites. Self‑host ou Cloud.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://appwrite.io/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação (2025):</strong> <a href="https://appwrite.io/pricing" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Free & Pro (desde US$ 25/mês) ↗</a>; Enterprise sob consulta. Self‑host gratuito sem limites.</li>
      <li><strong>Facilidade de integração:</strong> SDKs para Web/Mobile, REST/GraphQL, CLI e deploy de Sites; ecossistema unificado reduz dependências externas.</li>
      <li><strong>Segurança:</strong> permissões por documento/coleção, teams/roles, TLS, DDoS mitigation e opções de compliance (SOC‑2/HIPAA/BAA no Enterprise).</li>
      <li><strong>Performance:</strong> recursos dedicados em Cloud; escalonamento por quotas; boa opção para evitar lock‑in mantendo controle via open‑source.</li>
    </ul>
  </div>

  <!-- PocketBase -->
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
            <div class="flex items-center gap-3">
              <img src="/Contexto/Aula%2001/assets/pocketbase_logo.png" alt="PocketBase logo" class="h-7 w-7 object-contain" />
              <h3 class="text-xl font-semibold text-gray-900 dark:text-white">PocketBase</h3>
            </div>
    <p class="mt-2 text-gray-700 dark:text-gray-300">Backend <strong>em 1 arquivo</strong> (Go) com <strong>SQLite</strong>, Auth, Storage, Realtime e painel Admin. Ideal para MVPs e apps pequenos/médios.</p>
    <ul class="mt-2 list-disc pl-5 text-gray-700 dark:text-gray-300 space-y-1">
      <li><strong>Documentação:</strong> <a href="https://pocketbase.io/docs" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">Docs ↗</a></li>
      <li><strong>Precificação:</strong> <em>self‑host somente</em> (sem plano Cloud oficial). Custos de infra variam pelo provedor (VPS/Cloud). <a href="https://pocketbase.io/faq/" target="_blank" rel="noopener noreferrer" class="text-green-600 hover:text-green-500 font-medium">FAQ ↗</a></li>
      <li><strong>Facilidade de integração:</strong> binário único, REST/SDKs, deploy simples (Docker, reverse proxy, TLS automático); Admin UI integrada. Sem <em>cloud functions</em>; use como framework (Go/JS) para lógica custom.</li>
      <li><strong>Segurança:</strong> recomendações oficiais para produção (MFA superuser, rate limit, encryption key, backups S3, headers de proxy).</li>
      <li><strong>Performance:</strong> vertical (single server) com alta eficiência; 10k+ conexões Realtime em VPS barato; adequado para muitas cargas sem complexidade distribuída.</li>
    </ul>
  </div>
</div>

> Atualizado em 08/11/2025. Referências: Supabase (pricing, compute add‑ons, extensões), Firebase (pricing/docs), Appwrite (pricing/docs) e PocketBase (docs/FAQ).`,
  },
  {
    id: "aula1-slide11",
    order: 11,
    title: "Contexto: por que LLMs trazem novos riscos",
    type: "text",
    content:
      "# Contexto: por que LLMs trazem novos riscos\n\n## Onde os LLMs já atuam\n- Geram código, testes e documentação\n- Revisam pull requests e pipelines\n- Operam como copilotos na IDE e em agentes de terminal\n\n## O que as pesquisas apontam\n- Parte relevante do código sugerido por IA chega com vulnerabilidades e más práticas\n- Há aumento de dívida técnica quando entregas não são revisadas\n\n## Principais riscos organizacionais\n- **Shadow AI:** uso de ferramentas não autorizadas\n- **Exposição de dados sensíveis:** secrets e PII em prompts e uploads\n- **Lock-in:** dependência excessiva de um único fornecedor de IA\n- **Compliance:** impactos diretos em LGPD e políticas internas\n\n> **Mensagem central:** LLMs aceleram o desenvolvimento, mas sem governança viram multiplicadores de risco técnico, de segurança e regulatório.",
  },
  {
    id: "aula1-slide12",
    order: 12,
    title: "Código vulnerável gerado por LLMs",
    type: "text",
    content:
      "# Código vulnerável gerado por LLMs\n\n## Problema de origem\n- Modelos aprendem com bases públicas que contêm bugs e padrões inseguros\n- Otimizam para plausibilidade em vez de segurança, testes ou legibilidade\n\n## Sinais de alerta comuns\n- Consultas SQL sem parametrização (SQL Injection)\n- Validação de entrada fraca ou ausente\n- Criptografia inadequada ou configurações inseguras\n- Tratamento de erros que vaza stack traces/detalhes internos\n- Provisionamento cloud com credenciais hardcoded ou buckets públicos\n\n## Controles essenciais\n- Trate IA como **assistente**: humanos decidem e aprovam\n- Mantenha **code review obrigatório** para cada trecho gerado\n- Automatize segurança com **SAST/DAST** e scanners de dependência\n- Aplique checklists (OWASP ASVS, OWASP Top 10) em pontos críticos\n- Exija testes, logs de auditoria e justificativas de design antes de subir código",
  },
  {
    id: "aula1-slide13",
    order: 13,
    title: "Shadow AI: uso não autorizado de IA",
    type: "text",
    content:
      "# Shadow AI: uso não autorizado de IA\n\n## O que caracteriza Shadow AI?\n- Ferramentas de IA adotadas fora da governança oficial\n- Exemplos: copiar código confidencial em chat público, instalar agentes gratuitos sem avaliação, ativar plugins não homologados\n\n## Riscos imediatos\n- **Vazamento de dados:** código, secrets e informações de clientes indo para provedores externos\n- **Não conformidade:** violações de LGPD e contratos de confidencialidade\n- **Falta de rastreabilidade:** ausência de logs sobre quem enviou o quê e quando\n\n## Como mitigar\n- Publicar um **catálogo de ferramentas aprovadas** e mantê-lo atualizado\n- Definir política simples: o que pode, o que nunca pode e como pedir aprovação\n- Monitorar endpoints corporativos com proxy, CASB e DLP\n- Disponibilizar alternativas oficiais (instâncias corporativas de ChatGPT, Claude, Gemini etc.)",
  },
  {
    id: "aula1-slide14",
    order: 14,
    title: "Segurança de secrets & LGPD",
    type: "text",
    content:
      "# Segurança de secrets & LGPD\n\n## Proteção de segredos\n- Problemas recorrentes: prompts com chaves, agentes imprimindo `.env`, arquivos de config enviados para análise\n- Ataques de prompt injection podem induzir agentes a revelar variáveis de ambiente\n\n### Boas práticas\n- Nunca inserir chaves, tokens, senhas ou certificados em prompts\n- Usar Secret Managers (AWS, GCP, Vault) e expor apenas identificadores\n- Preferir credenciais efêmeras com escopo limitado\n- Restringir leitura de arquivos sensíveis (`.env`, `.aws`, `id_rsa`) nas ferramentas\n\n## LGPD em fluxos de IA\n- ANPD considera prompts, uploads e fine-tuning como **tratamento de dados pessoais**\n- Riscos: exposição de PII, treinamento por terceiros, dificuldade de atender direitos do titular\n\n### Controles LGPD\n- Aplicar minimização de dados e anonimização sempre que possível\n- Manter DPIAs para usos relevantes de IA\n- Formalizar contratos com fornecedores cobrindo uso de dados, localização e garantias de segurança",
  },
  {
    id: "aula1-slide15",
    order: 15,
    title: "Qualidade e manutenibilidade do código gerado",
    type: "text",
    content:
      "# Qualidade e manutenibilidade do código gerado\n\n## Problemas recorrentes\n- **Code bloat:** excesso de código e baixa reutilização\n- **Duplicação:** blocos quase idênticos espalhados pelo projeto\n- **Complexidade alta:** estruturas aninhadas e responsabilidades confusas\n- Falta de visão sistêmica sobre arquitetura e domínio\n\n## Impactos diretos\n- Dificuldade de entendimento e depuração\n- Crescimento acelerado da dívida técnica\n- Bugs sutis escapando para produção\n\n## Estratégia de controle\n- Tratar a IA como **pair programmer** e manter decisões arquiteturais no time\n- Garantir **code review humano** e testes automatizados cobrindo o código gerado\n- Respeitar padrões de arquitetura, estilo e linting existentes\n- Dar feedback explícito ao modelo: simplificar, remover duplicações, segmentar funções",
  },
  {
    id: "aula1-slide16",
    order: 16,
    title: "Lock‑in: dependência de um único fornecedor de IA",
    type: "text",
    content:
      "# Lock-in: dependência de um único fornecedor de IA\n\n## Por que é um problema\n- Aumenta custos e reduz poder de negociação\n- Exposição a mudanças unilaterais de política ou preço\n- Indisponibilidade impacta operações críticas\n\n## Como o lock-in se manifesta\n- Uso intenso de SDKs e features proprietárias\n- Fine-tuning preso à infraestrutura do fornecedor\n- Workflows dependentes de APIs ou formatos fechados\n- Cultura interna construída em torno de um único copiloto\n\n## Como reduzir o risco\n- Criar camada de abstração com interfaces genéricas para tarefas de IA\n- Preferir formatos e padrões abertos para dados, embeddings e prompts\n- Planejar estratégia multi-modelo/multi-fornecedor para casos críticos\n- Revisar periodicamente custos, riscos jurídicos e plano de migração",
  },
  {
    id: "aula1-slide17",
    order: 17,
    title: "Prompts seguros e governança de IA",
    type: "text",
    content:
      "# Prompts seguros e governança de IA\n\n## Construindo prompts seguros\n- Nunca incluir secrets (chaves, tokens, senhas) no texto enviado\n- Evitar dados pessoais identificáveis; usar dados sintéticos quando precisar de exemplos\n- Remover logs de produção com informações sensíveis\n- Definir instruções de sistema: “não exiba variáveis de ambiente”, “recuse dados pessoais”, etc.\n\n## Estruturando governança\n- Criar framework com papéis claros (produto, segurança, jurídico, privacidade, dados)\n- Manter inventário de casos de uso: sistemas, dados tratados, modelos e fornecedores\n- Classificar riscos (baixo/médio/alto) considerando segurança, privacidade e negócio\n- Implantar logging e auditoria alinhados à privacidade para rastrear incidentes",
  },
  {
    id: "aula1-slide18",
    order: 18,
    title: "Checklist para reduzir riscos com LLMs",
    type: "text",
    content:
      "# Checklist para reduzir riscos com LLMs\n\n## Antes de usar IA para gerar código, valide:\n\n### 1. Dados e contexto\n- [ ] O prompt contém dados pessoais, sensíveis ou de produção?\n- [ ] Dá para anonimizar, pseudonimizar ou sintetizar exemplos?\n\n### 2. Segredos\n- [ ] Há chaves, tokens, senhas ou URLs internas no prompt ou arquivos?\n- [ ] O agente acessa `.env`, `config.yml` ou pastas privadas?\n\n### 3. Ferramenta e fornecedor\n- [ ] A ferramenta é oficialmente aprovada?\n- [ ] O fornecedor permite desativar uso de dados para treino e cumpre LGPD?\n\n### 4. Qualidade e segurança de código\n- [ ] Haverá code review humano antes do merge?\n- [ ] Existem testes automatizados cobrindo as alterações?\n- [ ] SAST, lint e coverage estão ativos na esteira?\n\n### 5. Governança e registro\n- [ ] O caso está mapeado no inventário de IA?\n- [ ] Há logging/auditoria suficientes?\n\n### 6. Lock-in\n- [ ] O uso depende de recurso altamente proprietário?\n- [ ] Existe plano de contingência para migração?\n\n> **Lembre-se:** LLMs só entregam valor sustentável quando combinados com segurança de secrets, atenção à LGPD, governança e disciplina de engenharia.",
  },
  {
    id: "aula1-slide19",
    order: 19,
    title: "Recap e Próximos Passos",
    type: "text",
    content: `# Recapitulativo da Aula 01

## 📚 O que você aprendeu sobre acelerar com IA sem ser inconsequente
- **Fundamentos do Vibe Coding:** diferença entre usar IA de forma superficial e uma abordagem profissional orientada a contexto.
- **Ecossistema com propósito:** como plataformas, agentes, CLIs e integrações podem acelerar entregas sem virar gambiarra ou risco descontrolado.
- **Riscos reais no mundo corporativo:** Shadow AI, exposição de dados e secrets, lock-in em um único fornecedor, código vulnerável e impacto direto em governança e LGPD.
- **Segurança como base do jogo:** uso responsável de prompts, proteção de segredos, cuidado com dados pessoais e atenção às configurações de ambiente.
- **Qualidade sustentável:** code review humano, testes automatizados, análise estática e checklist de riscos como filtros obrigatórios para tudo que a IA gera.

## 🛡️ Segurança, governança e disciplina técnica
- **Segurança não é opcional:** é requisito mínimo para usar IA em produtos, times e clientes reais.
- **Governança viabiliza velocidade com controle:** políticas claras, ferramentas aprovadas e rastreabilidade reduzem Shadow AI e incidentes.
- **Disciplina técnica mantém o nível:** IA é assistente; responsabilidade, decisão final e padrões continuam nas mãos do time.

---

# 🚀 Spoilers da Aula 02: Arquitetura de Agente & Engenharia de Contexto

## 🎯 Do "cuidado com riscos" para "projetar agentes seguros e eficientes"
Na próxima aula, você sai apenas do alerta de riscos e entra na prática: como desenhar agentes e fluxos de contexto que usam IA com controle, auditoria e alinhamento ao negócio.

## 🧠 O que vem por aí
- Diferença entre um **LLM solto** respondendo qualquer prompt e um **agente bem projetado**, com objetivos claros e limites definidos.
- Os **quatro pilares** da arquitetura de agentes:
  - **Cérebro (LLM):** o motor de raciocínio.
  - **Memória:** histórico, contexto e conhecimento persistente.
  - **Ferramentas (Tools/MCP):** integração com APIs, serviços e ações reais.
  - **Contexto:** regras, políticas, dados e objetivos que guiam o comportamento do agente.
- Como a **Engenharia de Contexto** transforma as boas práticas da Aula 01 em:
  - regras aplicadas nos prompts e sistemas;
  - redução de vazamento de dados e lock-in;
  - agentes mais previsíveis, rastreáveis e confiáveis.

---

# 🎯 Chamada final

Você agora entende os riscos, limites e responsabilidades de usar IA em código e produtos reais.

Na próxima aula, vamos projetar o ecossistema de agentes que aplica tudo isso na prática — com controle, rastreabilidade e alinhamento com o negócio — para que Vibe Coding seja não só velocidade, mas arquitetura profissional de ponta a ponta.`,
  },
];