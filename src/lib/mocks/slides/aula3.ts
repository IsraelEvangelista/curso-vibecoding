import { Slide } from "@/types";

export const mockSlidesAula3: Slide[] = [
  {
    id: "aula3-slide1",
    order: 1,
    title: "Fundamentos de Large Language Models",
    type: "text",
    content:
      "## O que são LLMs?\nLarge Language Models (LLMs) são sistemas de IA treinados com vastas quantidades de dados textuais, capazes de compreender, gerar e manipular linguagem humana com alta proficiência.\n\n## Evolução Histórica\n\n### GPT-1 (2018) → GPT-3 (2020) → GPT-4 (2023) → GPT-5 (2025)\n### BERT (2018) → RoBERTa (2019) → modelos multilíngue (2021-2023)\n### T5 (2019) → FLAN-T5 (2022) → modelos instruction-tuned (2023-2024)\n\n## Classificação por Arquitetura\n\n| Arquitetura | Exemplos | Características | Capacidade Agentica |\n|------------|----------|---------------|-------------------|\n| Transformer-based | GPT-4, Claude, Gemini | Attention mechanisms, paralelizável | Alta |\n| Mixture-of-Experts (MoE) | GLM 4.6, Kimi K2 | Roteamento inteligente, eficiência | Média-Alta |\n| Sparse | MiniMax M2 | Pensamento intercalado, menos parâmetros ativos | Alta |\n| Retrieval-Augmented | RAG systems | Base de conhecimento externa | Média |",
  },
  {
    id: "aula3-slide2",
    order: 2,
    title: "Melhor Custo Benefício para o Vibe Coding",
    type: "text",
    content: `## Melhor Custo Benefício para o Vibe Coding

<!-- Container principal com duas colunas lado a lado (sempre na mesma linha, sem quebra) -->
<div class="flex flex-row flex-nowrap items-stretch gap-6 mb-6 overflow-x-auto">

  <!-- Coluna Esquerda: GLM 4.6 -->
  <div class="w-1/2 shrink-0">
    <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60 h-full">
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-1">GLM 4.6</h3>
    <p class="text-sm uppercase tracking-wide text-green-500 font-semibold mb-3">
      Modelo principal recomendado para Vibe Coding
    </p>

    <div class="space-y-3 text-sm text-gray-800 dark:text-gray-200">
      <div>
        <strong class="text-green-600 dark:text-green-400">Arquitetura:</strong>
        <p class="mt-1">Mixture-of-Experts (MoE) com 355B parâmetros totais, 32B ativos por forward pass. Roteamento seletivo para ativação especializada e otimização de inferência.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Contexto:</strong>
        <p class="mt-1">200K tokens input / 128K output com compressão inteligente. Ideal para documentos inteiros e conversas longas.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Eficiência:</strong>
        <p class="mt-1">15–30% menos tokens que GLM 4.5. Usa apenas 86M tokens (reasoning) ou 12M tokens (non-reasoning) para completar Intelligence Index.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Preços:</strong>
        <ul class="mt-1 space-y-1">
          <li>• API: $0.60/M input, $2.20/M output</li>
          <li>
            • Coding Plan:
            <div class="mt-1 ml-4 space-y-2 text-gray-700 dark:text-gray-300">
              <div>
                <strong>Plano Lite:</strong> ~120 prompts por ciclo de 5h; indicado para cargas leves e testes.
                <div class="text-[11px] mt-1">Referência: a partir de ~$3/mês; cerca de 3× a cota de um plano padrão equivalente (ex.: Claude Pro).</div>
              </div>
              <div>
                <strong>Plano Pro:</strong> ~600 prompts por ciclo de 5h; 40–60% mais rápido que Lite; inclui visão (image/video) e Web Search MCP.
                <div class="text-[11px] mt-1">Indicado para projetos profissionais e alta frequência de uso.</div>
              </div>
              <div>
                <strong>Plano Max:</strong> ~2400 prompts por ciclo de 5h; 4× Pro; performance garantida em horários de pico e acesso antecipado a novos recursos.
                <div class="text-[11px] mt-1">Indicado para alto volume e workloads intensivos.</div>
              </div>
            </div>
          </li>
          <li>• Economia: ~20% do custo vs Claude (estimativa de curso/benchmarks)</li>
        </ul>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Compatibilidade:</strong>
        <p class="mt-1">Z.AI Console, Kilo Code (nativo), Claude Code, Cline, OpenCode, Crush, Goose. Limitações reportadas em Roo Code.</p>
      </div>

      <div>
        <strong class="text-green-600 dark:text-green-400">Perfil ideal:</strong>
        <p class="mt-1">Desenvolvedores solo, squads, produção contínua. Foco em custo baixo + velocidade + contexto longo.</p>
      </div>
    </div>

    <div class="mt-4 p-3 rounded-xl bg-green-50/80 dark:bg-green-900/10 border border-green-200/70 dark:border-green-700/50 text-xs text-gray-800 dark:text-gray-200">
      <p class="font-semibold text-green-700 dark:text-green-400 mb-2">Por que é o padrão do curso?</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>Excelente relação custo/performance para Vibe Coding diário</li>
        <li>Contexto amplo suficiente para projetos reais do curso</li>
        <li>Integra bem com ecossistema (TRAE Solo, Kilo Code, CLIs)</li>
        <li>Latência baixa para aplicações time-sensitive</li>
      </ul>
    </div>
  </div>

  <!-- Coluna Direita: MiniMax M2 -->
  <div class="w-1/2 shrink-0">
    <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#050505]/80 h-full">
    <h3 class="text-2xl font-semibold text-gray-900 dark:text-white mb-1">MiniMax M2</h3>
    <p class="text-sm uppercase tracking-wide text-amber-400 font-semibold mb-3">
      Especialista em agentes complexos e raciocínio intercalado
    </p>

    <div class="space-y-3 text-sm text-gray-800 dark:text-gray-200">
      <div>
        <strong class="text-amber-500 dark:text-amber-400">Arquitetura:</strong>
        <p class="mt-1">Interleaved Reasoning com alternância pensar→agir→pensar. Preserva trace de raciocínio entre 200-300 tool calls sequenciais.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Contexto:</strong>
        <p class="mt-1">200K tokens input (similar ao GLM 4.6). Suporte completo a contextos longos com preservação de estado.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Benchmarks:</strong>
        <ul class="mt-1 space-y-1">
          <li>• Intelligence Index: 61 (líder open-weights)</li>
          <li>• SWE-Bench Verified: 69.4% (+1.4pp vs GLM)</li>
          <li>• τ² Bench: 77.2% (+1.3pp vs GLM)</li>
          <li>• IFBench: 72.0% (acima de Claude)</li>
        </ul>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Preços:</strong>
        <ul class="mt-1 space-y-1">
          <li>• API: $0.30/M input, $1.20/M output</li>
          <li>• Planos: Starter $10/mês, Pro $20/mês, Max $50/mês</li>
          <li>• Economia: ~8% do custo vs Claude</li>
        </ul>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Compatibilidade:</strong>
        <p class="mt-1">Claude Code (com thinking preservation), Cline. Limitações em OpenRouter (traces não passam) e Roo Code.</p>
      </div>

      <div>
        <strong class="text-amber-500 dark:text-amber-400">Perfil ideal:</strong>
        <p class="mt-1">Workflows agênticos longos, pesquisa exploratória, debugging iterativo, automações complexas com auto-correção.</p>
      </div>
    </div>

    <div class="mt-4 p-3 rounded-xl bg-amber-50/90 dark:bg-amber-900/10 border border-amber-200/70 dark:border-amber-700/50 text-xs text-gray-900 dark:text-amber-100">
      <p class="font-semibold mb-2">Quando faz mais sentido usar M2?</p>
      <ul class="list-disc pl-4 space-y-1">
        <li>Gargalo em qualidade de raciocínio exploratório</li>
        <li>Muitos tool calls sequenciais com auto-correção</li>
        <li>Time já opera com stack compatível (Claude Code/Cline)</li>
        <li>Tarefas onde interleaved reasoning traz +40% de ganho</li>
      </ul>
    </div>
  </div>

</div>

<!-- Cards de decisão em linha única com 3 colunas -->
<div class="grid grid-cols-1 gap-4 text-xs md:grid-cols-2">
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-green-600 mb-2 flex items-center gap-2">
      <span class="text-lg">🎯</span> Para o curso e dia a dia
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Use <strong>GLM 4.6</strong> como default no Vibe Coding: barato ($3/mês), rápido, estável e 100% integrado ao ambiente do curso. Perfeito para desenvolvimento contínuo.
    </p>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-amber-500 mb-2 flex items-center gap-2">
      <span class="text-lg">🤖</span> Para agentes avançados
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Considere <strong>MiniMax M2</strong> em projetos com agentes complexos, múltiplos passos e exploração intensa. Ideal para R&D e automações sofisticadas.
    </p>
  </div>
  <div class="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
    <h4 class="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
      <span class="text-lg">⚖️</span> Estratégia híbrida
    </h4>
    <p class="text-gray-800 dark:text-gray-200 leading-relaxed">
      Use GLM 4.6 para rotinas e M2 apenas onde raciocínio intercalado traz ganho real. Máximo impacto com custo controlado e flexibilidade operacional.
    </p>
  </div>
</div>`,
  },
  {
    id: "aula3-slide3",
    order: 3,
    title: "Modelos Top Players para o Vibe Coding",
    type: "text",
    content: `## Modelos Top Players para o Vibe Coding

### Visão Geral do Mercado

O mercado de LLMs para desenvolvimento de software em 2025 está dominado por quatro principais players, cada um com características únicas que os tornam ideais para diferentes cenários de Vibe Coding:

<div class="grid grid-cols-2 gap-6 my-6" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1.5rem;">
  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="text-2xl">🚀</span> Kimi K2 Thinking
    </h4>
    <div class="space-y-2 text-sm text-gray-800 dark:text-gray-200">
      <p><strong class="text-blue-600 dark:text-blue-400">Posicionamento:</strong> Líder open-source com parity frontier</p>
      <p><strong class="text-blue-600 dark:text-blue-400">Destaque:</strong> 67 pontos no Intelligence Index (2º lugar geral, 1º open-source)</p>
      <p><strong class="text-blue-600 dark:text-blue-400">Diferencial:</strong> 200-300 tool calls sequenciais sem degradação</p>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="text-2xl">⚡</span> GPT-5
    </h4>
    <div class="space-y-2 text-sm text-gray-800 dark:text-gray-200">
      <p><strong class="text-green-600 dark:text-green-400">Posicionamento:</strong> Líder proprietário frontier</p>
      <p><strong class="text-green-600 dark:text-green-400">Destaque:</strong> 68 pontos no Intelligence Index (1º lugar geral)</p>
      <p><strong class="text-green-600 dark:text-green-400">Diferencial:</strong> 4 níveis de reasoning configuráveis (High/Medium/Low/Minimal)</p>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="text-2xl">🎯</span> Claude Sonnet 4.5
    </h4>
    <div class="space-y-2 text-sm text-gray-800 dark:text-gray-200">
      <p><strong class="text-purple-600 dark:text-purple-400">Posicionamento:</strong> Melhor para coding production-ready</p>
      <p><strong class="text-purple-600 dark:text-purple-400">Destaque:</strong> 77.2% SWE-Bench Verified (melhor do mercado)</p>
      <p><strong class="text-purple-600 dark:text-purple-400">Diferencial:</strong> 61.4% OSWorld (único com GUI automation)</p>
    </div>
  </div>

  <div class="rounded-2xl border border-gray-200 dark:border-gray-700 p-5 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
    <h4 class="text-xl font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
      <span class="text-2xl">🏆</span> Claude Opus 4.1
    </h4>
    <div class="space-y-2 text-sm text-gray-800 dark:text-gray-200">
      <p><strong class="text-amber-600 dark:text-amber-400">Posicionamento:</strong> Premium para autonomia estendida</p>
      <p><strong class="text-amber-600 dark:text-amber-400">Destaque:</strong> 30 horas de operação contínua</p>
      <p><strong class="text-amber-600 dark:text-amber-400">Diferencial:</strong> 74.5% SWE-Bench + reasoning profundo</p>
    </div>
  </div>
</div>

### Tabela Comparativa: Especificações Técnicas

| Dimensão | Kimi K2 | GPT-5 | Sonnet 4.5 | Opus 4.1 |
|----------|---------|-------|-----------|----------|
| **Intelligence Index** | 67 🥈 | 68 🥇 | 50 | N/A |
| **SWE-Bench Verified** | 71.3% | 74.9% | **77.2%** 🥇 | 74.5% |
| **Agentic (HLE)** | **44.9%** 🥇 | 41.7% | 32.0% | N/A |
| **Web Research** | **60.2%** 🥇 | 54.9% | 24.1% | N/A |
| **Context Window** | 256K | 128-400K | **1M** 🥇 | 200K |
| **Preço Input** | **$0.60/M** 🥇 | $1.25/M | $3.00/M | $15.00/M |
| **Preço Output** | **$2.50/M** 🥇 | $10.00/M | $15.00/M | $75.00/M |
| **Relativo Input vs Claude** | **20%** | ~41.7% | 100% | 500% |
| **Relativo Output vs Claude** | **16.7%** | ~66.7% | 100% | 500% |
| **Open-Source** | **Sim** 🥇 | Não | Não | Não |

### Matriz de Decisão para Vibe Coding

<div class="grid grid-cols-2 gap-4 my-6" style="display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:1rem;">
  <div class="rounded-xl border border-blue-200 dark:border-blue-700 p-4 bg-blue-50/50 dark:bg-blue-900/10">
    <h5 class="font-semibold text-blue-900 dark:text-blue-100 mb-2 flex items-center gap-2">
      <span>💰</span> Escolher Kimi K2 Quando:
    </h5>
    <ul class="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc pl-5">
      <li>Orçamento limitado (4-8x mais barato)</li>
      <li>Tarefas agênticas longas (200-300 tool calls)</li>
      <li>Transparência e auditoria (open-source)</li>
      <li>Free tier generoso (3M tokens/dia)</li>
      <li>Web scraping e research automation</li>
    </ul>
  </div>

  <div class="rounded-xl border border-green-200 dark:border-green-700 p-4 bg-green-50/50 dark:bg-green-900/10">
    <h5 class="font-semibold text-green-900 dark:text-green-100 mb-2 flex items-center gap-2">
      <span>⚖️</span> Escolher GPT-5 Quando:
    </h5>
    <ul class="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc pl-5">
      <li>Máxima flexibilidade de raciocínio</li>
      <li>4 níveis configuráveis (High/Medium/Low/Minimal)</li>
      <li>Math e raciocínio puro (99.6% AIME)</li>
      <li>Competitive programming (87% LiveCodeBench)</li>
      <li>Workloads mistos com routing automático</li>
    </ul>
  </div>

  <div class="rounded-xl border border-purple-200 dark:border-purple-700 p-4 bg-purple-50/50 dark:bg-purple-900/10">
    <h5 class="font-semibold text-purple-900 dark:text-purple-100 mb-2 flex items-center gap-2">
      <span>🎯</span> Escolher Claude Sonnet 4.5 Quando:
    </h5>
    <ul class="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc pl-5">
      <li>Coding production-ready (77.2% SWE-Bench)</li>
      <li>GUI automation (61.4% OSWorld)</li>
      <li>Qualidade máxima de output</li>
      <li>Tool execution paralelo</li>
      <li>1M token context window</li>
    </ul>
  </div>

  <div class="rounded-xl border border-amber-200 dark:border-amber-700 p-4 bg-amber-50/50 dark:bg-amber-900/10">
    <h5 class="font-semibold text-amber-900 dark:text-amber-100 mb-2 flex items-center gap-2">
      <span>🏆</span> Escolher Claude Opus 4.1 Quando:
    </h5>
    <ul class="text-sm text-gray-800 dark:text-gray-200 space-y-1 list-disc pl-5">
      <li>Autonomia estendida (30 horas contínuas)</li>
      <li>Reasoning profundo e complexo</li>
      <li>Pesquisa acadêmica multi-dia</li>
      <li>Large refactoring projects</li>
      <li>Budget não é limitante (5x Sonnet)</li>
    </ul>
  </div>
</div>

### Recomendação Suprema para o Curso

**Stack Ótimo para Vibe Coding em 2025:**

\`\`\`
Primary: Kimi K2 Thinking ($0.60/$2.50)
  └─ 80% dos casos de uso
  └─ Economia 4-8x vs alternativas
  └─ Free tier generoso para testes

Backup: Claude Sonnet 4.5 (coding crítico)
  └─ 15% dos casos onde qualidade é crucial
  └─ Production-ready code generation

Reserve: GPT-5 (problemas math/reasoning hard)
  └─ 5% dos casos mais complexos
  └─ Quando flexibility de reasoning é necessária
\`\`\`

**Resultado:** Cobertura de 99% dos casos de uso com apenas 30% do custo de uma solução Claude-exclusive.`,
  },
  {
    id: "aula3-slide4",
    order: 4,
    title: "APIs e UIs Web dos Principais Modelos",
    type: "text",
    content:
      "## OpenAI (GPT-5 e Codex GPT-5)\n\n### Plataformas Web\n- **ChatGPT-5:** chat.openai.com com interface conversacional avançada\n- **Playground:** playground.openai.com para testes e experimentação\n- **API Platform:** platform.openai.com para desenvolvedores\n\n### Características das APIs\n- **Endpoints:** Completions, Chat, Embeddings, Fine-tuning\n- **Rate Limits:** Diferentes por tier (Free, Plus, Pro, Enterprise)\n- **Modos de Raciocínio:** Low (Auto), Medium (Fast), High (Thinking)\n- **Streaming:** Respostas em tempo real para longas gerações\n\n## Anthropic (Claude Sonnet 4.5 e Opus 4.1)\n\n### Plataformas Web\n- **Claude.ai:** claude.ai com interface conversacional\n- **API Console:** console.anthropic.com para desenvolvedores\n\n### Características das APIs\n- **Endpoints:** Messages, Completions, Embeddings\n- **Tool Use:** Nativo com chamada de funções\n- **Vision:** Processamento de imagens e documentos\n- **Rate Limits:** Controlados por uso e tipo de plano\n\n## Comparativo de Interfaces\n\n| Plataforma | Interface Principal | Foco | Vantagens |\n|-----------|------------------|------|-----------|\n| **OpenAI** | ChatGPT-5 | Generalista | Ecossistema maduro |\n| **Anthropic** | Claude.ai | Raciocínio | Tool use avançado |\n| **Google** | Gemini Advanced | Multimodal | Integração Google |\n| **Zhipu AI** | GLM Chat | Coding | Custo-benefício |\n| **Moonshot** | Kimi Chat | Coding | Alternativa econômica |",
  },
  {
    id: "aula3-slide4",
    order: 4,
    title: "Critérios de Escolha de Modelo",
    type: "text",
    content:
      "## Para Desenvolvimento Individual\n- **Custo-benefício:** GLM 4.6 (melhor relação), Kimi K2 (alternativa econômica)\n- **Qualidade:** Claude Sonnet 4.5 (tarefas complexas), GPT-5 (generalista)\n- **Multimodalidade:** Gemini 2.5 Pro (integração Google)\n- **Janela de Contexto:** GLM 4.6 (200K), Gemini 2.5 (1M)\n\n### Para Empresas e Startups\n- **Volume:** MiniMax M2 (alto volume com pensamento intercalado), GLM 4.6 (balance geral)\n- **Segurança:** Claude Opus 4.1 (máxima qualidade), GPT-5 (ecossistema maduro)\n- **Integração:** Gemini 2.5 Pro (Google Workspace), Vertex AI (Google Cloud)\n- **Controle Total:** GLM 4.6 (open source), APIs self-hosted\n\n## Framework de Decisão\n\n### Matriz de Decisão\n| Requisito | Modelo Recomendado | Justificativa | Preço Atualizado |\n|------------|------------------|-------------|----------------|\n| **Custo-benefício** | GLM 4.6 | Melhor relação custo-performance | Input: $0.60/M, Output: $2.20/M |\n| **Qualidade máxima** | Claude Opus 4.1 | Padrão ouro em tarefas críticas | Input: $15/M, Output: $75/M |\n| **Multimodalidade** | Gemini 2.5 Pro | Melhor integração com ecossistema Google | Input: $1.25-2.50/M, Output: $10/M |\n| **Alto volume** | MiniMax M2 | Pensamento intercalado para uso intensivo | Não divulgado |\n| **Coding geral** | GPT-5 | Ecossistema mais maduro e documentado | Input: $1.25-2.50/M, Output: $10-15/M |",
  },
  {
    id: "aula3-slide5",
    order: 5,
    title: "Planos e Preços dos Modelos",
    type: "text",
    content:
      "## OpenAI (GPT-5 e Codex GPT-5)\n\n### Planos Disponíveis\n- **ChatGPT-5 Pro:** $20/mês para acesso prioritário\n- **ChatGPT-5 Mini/Nano:** Planos econômicos para alto volume\n- **API Pay-as-you-go:** $1.25-2.50/M input, $10-15/M output\n- **Modos de Raciocínio:** Low (Auto), Medium (Fast), High (Thinking)\n\n### Vantagens\n- **Ecossistema maduro** com integrações completas\n- **Suporte multimodal** avançado\n- **Comunidade ativa** e documentação extensa\n\n## Anthropic (Claude Sonnet 4.5 e Opus 4.1)\n\n### Planos Disponíveis\n- **Claude Pro/Max/Team:** Planos empresariais disponíveis\n- **Claude Sonnet 4.5:** $3.00/M input, $15.00/M output\n- **Claude Opus 4.1:** $15.00/M input, $75.00/M output\n- **Contexto:** 200K tokens input, 32K output\n\n### Vantagens\n- **Melhor em raciocínio complexo**\n- **Tool orchestration** avançada\n- **Segurança e alinhamento** robustos\n\n## Zhipu AI (GLM 4.6)\n\n### Planos Disponíveis\n- **Input:** $0.60/M tokens\n- **Cached Input:** $0.11/M tokens (limitado)\n- **Output:** $2.20/M tokens\n- **Web Search:** $0.01/uso\n- **Slide/Poster Agent:** $0.70/M tokens\n- **Tradução:** $3/M tokens\n- **CogView-4:** $0.01/imagem\n- **Vídeo:** $0.20-0.40/unidade\n- **Assinatura coding:** A partir de $3/mês\n- **Open Source:** Disponível para deploy local (MIT license)\n- **Contexto:** 200K input, 128K output\n\n### Vantagens\n- **Melhor custo-benefício** do mercado\n- **Suporte multilíngue** nativo\n- **Open source** para controle total",
  },
  {
    id: "aula3-slide6",
    order: 6,
    title: "Demonstração de Interfaces Web",
    type: "text",
    content:
      "## Tour Guiado das Principais Plataformas\n\n### OpenAI ChatGPT-5\n- **Acesso:** chat.openai.com\n- **Demonstração:** Interface conversacional com modos de raciocínio\n- **Recursos:** Histórico de conversas, custom GPTs, file upload\n\n### Anthropic Claude.ai\n- **Acesso:** claude.ai\n- **Demonstração:** Interface com artifacts e tool use\n- **Recursos:** Projects, compartilhamento de conversas, análise de documentos\n\n### Google Gemini Advanced\n- **Acesso:** gemini.google.com/advanced\n- **Demonstração:** Interface multimodal com integração Google\n- **Recursos:** Extensões, integração com Workspace, side-by-side\n\n### Zhipu AI GLM Chat\n- **Acesso:** chatglm.cn/main\n- **Demonstração:** Interface otimizada para chinês/inglês\n- **Recursos:** Contexto amplo, tool calling, streaming\n\n### Moonshot Kimi Chat\n- **Acesso:** kimi.moonshot.cn/chat\n- **Demonstração:** Interface com agentic capabilities\n- **Recursos:** Long context, web search integrada, file analysis\n\n## Análise Comparativa\n\n### Experiência do Usuário\n- **OpenAI:** Interface polida mas mais corporativa\n- **Anthropic:** Foco em produtividade com artifacts\n- **Google:** Integração profunda com ecossistema Google\n- **Zhipu AI:** Interface simples mas funcional\n- **Moonshot:** Inovações em agentic capabilities",
  },
  {
    id: "aula3-slide7",
    order: 7,
    title: "Configuração e Setup com GLM 4.6",
    type: "code",
    content:
      '## Instalação de Ferramentas\n\n### Kilo Code\n```bash\nnpm install -g @kilocode/kilo-code\n```\n\n### Configuração de API\n```bash\nexport GLM_API_KEY="sua-chave-aqui"\nexport GLM_BASE_URL="https://api.zhipuai.ai/v1"\n```\n\n### VS Code Extensions\n- **GLM 4.6 Extension:** Busque na marketplace\n- **Claude Code Extension 2.0:** Instale para integração completa\n\n## Validação de Conectividade\n```javascript\n// Teste básico com Kilo Code\nconst response = await kiloCode.ask("Olá GLM 4.6!");\nconsole.log(response);\n```',
  },
  {
    id: "aula3-slide8",
    order: 8,
    title: "Workflows de Desenvolvimento Eficientes",
    type: "text",
    content:
      "## Ciclo de Desenvolvimento\n\n### Prompt → Resposta → Refinamento → Iteração\n1. **Prompt inicial** claro e específico\n2. **Análise da resposta** gerada pelo modelo\n3. **Refinamento** com base nos resultados\n4. **Iteração** até atingir o objetivo desejado\n\n## Templates Reutilizáveis\n\n### Template para Componentes React\n```\nVocê é um especialista em React e TypeScript. Crie um componente [NOME] com:\n- [REQUISITO 1]\n- [REQUISITO 2]\n- [REQUISITO 3]\n\nUse TypeScript estrito e Tailwind CSS para estilização.\n```\n\n### Template para Refatoração\n```\nAnalise o seguinte código e identifique oportunidades de melhoria:\n\n[CÓDIGO AQUI]\n\nFoco em:\n1. Performance\n2. Legibilidade\n3. Manutenibilidade\n4. Segurança\n\nSugira refatorações específicas com justificativas.\n```",
  },
  {
    id: "aula3-slide9",
    order: 9,
    title: "Técnicas de Prompt Engineering para GLM 4.6",
    type: "code",
    content:
      '## Few-shot Learning\n\n### Exemplo para GLM 4.6\n```\nCrie uma função de validação de email seguindo estes exemplos:\n\nExemplo 1:\nEntrada: "test@example.com"\nSaída: Válido\n\nExemplo 2:\nEntrada: "invalid-email"\nSaída: Inválido - formato incorreto\n\nExemplo 3:\nEntrada: "user@domain.co.uk"\nSaída: Válido\n\nAgora valide este email: "novo@exemplo.com"\n```\n\n## Chain-of-Thought\n\n### Decomposição de Problemas Complexos\n```\nPara resolver este problema de programação, siga estes passos:\n\n1. Analise os requisitos e identifique as entidades principais\n2. Projete a arquitetura da solução\n3. Implemente o código componente por componente\n4. Integre os componentes e teste a solução completa\n5. Otimize para performance e legibilidade\n\nProblema: [DESCRIÇÃO DO PROBLEMA]\n```\n\n## Role-playing\n\n### Personas Especializadas\n```\nVocê é um especialista em [ÁREA] com 10 anos de experiência.\n\nPara esta tarefa, adote a persona de [PERSONA ESPECÍFICA]:\n- Foco em [ASPECTO 1]\n- Considerações sobre [ASPECTO 2]\n- Abordagem [METODOLOGIA]\n\nAnalise este [PROBLEMA] e forneça uma solução especializada.\n```',
  },
  {
    id: "aula3-slide10",
    order: 10,
    title: "Otimização de Contexto com GLM 4.6",
    type: "code",
    content:
      '## Maximizando a Janela de Contexto\n\n### Estratégias de Compressão\n- **Resumo inteligente:** Extraia pontos-chave do contexto\n- **Hierarquização:** Organize informações por importância\n- **Eliminação de redundância:** Remova dados duplicados ou irrelevantes\n\n### Técnicas de Persistência\n- **Contexto contínuo:** Mantenha histórico relevante\n- **Seleção dinâmica:** Escolha informações baseadas na tarefa atual\n- **Atualização incremental:** Adicione novos dados sem perder contexto anterior\n\n## Exemplo Prático\n```\nContexto do projeto:\n- Framework: React + TypeScript\n- Estilo: Tailwind CSS\n- Estado: React Context\n- Autenticação: Supabase Auth\n\nTarefa atual: Implementar formulário de contato\n\nContexto otimizado para GLM 4.6:\n"Projeto React + TypeScript + Tailwind + Supabase. Implemente formulário de contato com validação, usando hooks do React Context para estado e Supabase para autenticação. Siga os padrões de código estabelecidos no projeto."\n```',
  },
  {
    id: "aula3-slide11",
    order: 11,
    title: "Projeto Prático: Sistema de Benchmarking",
    type: "text",
    content:
      "## Objetivo do Projeto\n\nDesenvolver um sistema completo de benchmarking comparativo entre os principais modelos LLM (GLM 4.6, Claude Sonnet 4.5, Gemini 2.5 Pro, Kimi K2) com:\n- Interface web para testes\n- Análise de performance em tempo real\n- Geração de relatórios comparativos\n- Visualização de resultados\n\n## Arquitetura do Projeto\n\n### Frontend\n- **Framework:** React + TypeScript\n- **Estilo:** Tailwind CSS\n- **Estado:** React Context\n- **Componentes:** Dashboard, TestRunner, Relatórios\n\n### Backend\n- **APIs:** Integração com múltiplos provedores\n- **Armazenamento:** Resultados e métricas\n- **Autenticação:** Sistema de usuários\n\n### Funcionalidades\n\n#### Test Runner\n- **Interface para prompts:** Área de texto para entrada\n- **Seleção de modelos:** Escolha entre GLM 4.6, Claude, Gemini\n- **Execução simultânea:** Compare múltiplos modelos ao mesmo tempo\n- **Coleta de métricas:** Latência, qualidade, custo, tokens\n\n#### Dashboard de Resultados\n- **Tabelas comparativas:** Performance por modelo\n- **Gráficos visuais:** Latência, custo, qualidade\n- **Filtros e busca:** Por tipo de tarefa, modelo, data\n\n## Entregáveis do Projeto\n\n### Código Fonte\n- Implementação completa e bem estruturada\n- **Documentação:** Guia de instalação e uso\n- **Testes:** Suite validando funcionalidades\n- **Deploy:** Aplicação funcional em ambiente de produção\n\n### Relatório de Benchmarking\n- **Análise comparativa:** Desempenho e custos\n- **Recomendações:** Guia de escolha de modelo por caso de uso\n- **Apresentação:** Slides explicando arquitetura e resultados",
  },
  {
    id: "aula3-slide12",
    order: 12,
    title: "Conclusão e Próximos Passos",
    type: "text",
    content:
      "## Resumo da Aula\n\n- **GLM 4.6:** Modelo principal para Vibe Coding\n- **Vantagens competitivas:** Custo-benefício, contexto amplo\n- **Ecossistema maduro:** Ferramentas e integrações completas\n- **Foco prático:** Configuração e uso efetivo\n\n## Próximos Passos\n\n### Aula 04: Ambientes e Ferramentas\n- **TRAE Solo:** IDE principal com suporte GLM 4.6\n- **CLIs:** Kilo Code, Claude Code, Gemini CLI\n- **Workflows:** Integração entre ferramentas\n\n### Projeto Dirigido (Aulas 06-07)\n- **Aplicação prática:** Usar GLM 4.6 em projeto real\n- **Integração com Supabase:** Backend e autenticação\n- **Deploy:** Publicação em produção\n\n## Recursos Adicionais\n\n- **Documentação oficial:** GLM 4.6 specs e guias\n- **Comunidade:** Fóruns e grupos de discussão\n- **Projetos exemplo:** Repositórios com implementações referencia\n- **Suporte:** Canais de ajuda e suporte técnico",
  },
];
