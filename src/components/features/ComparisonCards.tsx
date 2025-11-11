export function ComparisonCards() {
  return (
    <div className="space-y-6">
      {/* Container com dois cards lado a lado */}
      <div className="grid grid-cols-2 gap-6">
        {/* Card GLM 4.6 */}
        <div className="flex flex-col h-[650px] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#0b0b0b]/60">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">GLM 4.6</h3>
          <p className="text-sm uppercase tracking-wide text-green-500 font-semibold mb-3">
            Modelo principal recomendado para Vibe Coding
          </p>

          <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200 break-words leading-relaxed overflow-y-auto flex-1 pr-2">
            <div>
              <strong className="text-green-600 dark:text-green-400">Arquitetura:</strong>
              <p className="mt-1">Mixture-of-Experts (MoE) com 355B parâmetros totais, 32B ativos por forward pass. Roteamento seletivo para ativação especializada e otimização de inferência.</p>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Contexto:</strong>
              <p className="mt-1">200K tokens input / 128K output com compressão inteligente. Ideal para documentos inteiros e conversas longas.</p>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Eficiência:</strong>
              <p className="mt-1">15–30% menos tokens que GLM 4.5. Usa apenas 86M tokens (reasoning) ou 12M tokens (non-reasoning) para completar Intelligence Index.</p>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Preços:</strong>
              <ul className="mt-1 space-y-1">
                <li>• API: $0.60/M input, $2.20/M output</li>
                <li>
                  • Coding Plan:
                  <div className="mt-1 ml-4 space-y-2 text-gray-700 dark:text-gray-300">
                    <div>
                      <strong>Plano Lite:</strong> ~120 prompts por ciclo de 5h; indicado para cargas leves e testes.
                      <div className="text-[11px] mt-1">Referência: a partir de ~$3/mês; cerca de 3× a cota de um plano padrão equivalente (ex.: Claude Pro).</div>
                    </div>
                    <div>
                      <strong>Plano Pro:</strong> ~600 prompts por ciclo de 5h; 40–60% mais rápido que Lite; inclui visão (image/video) e Web Search MCP.
                      <div className="text-[11px] mt-1">Indicado para projetos profissionais e alta frequência de uso.</div>
                    </div>
                    <div>
                      <strong>Plano Max:</strong> ~2400 prompts por ciclo de 5h; 4× Pro; performance garantida em horários de pico e acesso antecipado a novos recursos.
                      <div className="text-[11px] mt-1">Indicado para alto volume e workloads intensivos.</div>
                    </div>
                  </div>
                </li>
                <li>• Economia: ~20% do custo vs Claude (estimativa de curso/benchmarks)</li>
              </ul>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Compatibilidade:</strong>
              <p className="mt-1">Z.AI Console, Kilo Code (nativo), Claude Code, Cline, OpenCode, Crush, Goose. Limitações reportadas em Roo Code.</p>
            </div>

            <div>
              <strong className="text-green-600 dark:text-green-400">Perfil ideal:</strong>
              <p className="mt-1">Desenvolvedores solo, squads, produção contínua. Foco em custo baixo + velocidade + contexto longo.</p>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-green-50/80 dark:bg-green-900/10 border border-green-200/70 dark:border-green-700/50 text-xs text-gray-800 dark:text-gray-200">
            <p className="font-semibold text-green-700 dark:text-green-400 mb-2">Por que é o padrão do curso?</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Excelente relação custo/performance para Vibe Coding diário</li>
              <li>Contexto amplo suficiente para projetos reais do curso</li>
              <li>Integra bem com ecossistema (TRAE Solo, Kilo Code, CLIs)</li>
              <li>Latência baixa para aplicações time-sensitive</li>
            </ul>
          </div>
        </div>

        {/* Card MiniMax M2 */}
        <div className="flex flex-col h-[650px] rounded-2xl border border-gray-200 dark:border-gray-700 p-5 md:p-6 shadow-sm bg-white/80 dark:bg-[#050505]/80">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1">MiniMax M2</h3>
          <p className="text-sm uppercase tracking-wide text-amber-400 font-semibold mb-3">
            Especialista em agentes complexos e raciocínio intercalado
          </p>

          <div className="space-y-3 text-sm text-gray-800 dark:text-gray-200 break-words leading-relaxed overflow-y-auto flex-1 pr-2">
            <div>
              <strong className="text-amber-500 dark:text-amber-400">Arquitetura:</strong>
              <p className="mt-1">Interleaved Reasoning com alternância pensar→agir→pensar. Preserva trace de raciocínio entre 200-300 tool calls sequenciais.</p>
            </div>

            <div>
              <strong className="text-amber-500 dark:text-amber-400">Contexto:</strong>
              <p className="mt-1">200K tokens input (similar ao GLM 4.6). Suporte completo a contextos longos com preservação de estado.</p>
            </div>

            <div>
              <strong className="text-amber-500 dark:text-amber-400">Benchmarks:</strong>
              <ul className="mt-1 space-y-1">
                <li>• Intelligence Index: 61 (líder open-weights)</li>
                <li>• SWE-Bench Verified: 69.4% (+1.4pp vs GLM)</li>
                <li>• τ² Bench: 77.2% (+1.3pp vs GLM)</li>
                <li>• IFBench: 72.0% (acima de Claude)</li>
              </ul>
            </div>

            <div>
              <strong className="text-amber-500 dark:text-amber-400">Preços:</strong>
              <ul className="mt-1 space-y-1">
                <li>• API: $0.30/M input, $1.20/M output</li>
                <li>• Planos: Starter $10/mês, Pro $20/mês, Max $50/mês</li>
                <li>• Economia: ~8% do custo vs Claude</li>
              </ul>
            </div>

            <div>
              <strong className="text-amber-500 dark:text-amber-400">Compatibilidade:</strong>
              <p className="mt-1">Claude Code (com thinking preservation), Cline. Limitações em OpenRouter (traces não passam) e Roo Code.</p>
            </div>

            <div>
              <strong className="text-amber-500 dark:text-amber-400">Perfil ideal:</strong>
              <p className="mt-1">Workflows agênticos longos, pesquisa exploratória, debugging iterativo, automações complexas com auto-correção.</p>
            </div>
          </div>

          <div className="mt-4 p-3 rounded-xl bg-amber-50/90 dark:bg-amber-900/10 border border-amber-200/70 dark:border-amber-700/50 text-xs text-gray-900 dark:text-amber-100">
            <p className="font-semibold mb-2">Quando faz mais sentido usar M2?</p>
            <ul className="list-disc pl-4 space-y-1">
              <li>Gargalo em qualidade de raciocínio exploratório</li>
              <li>Muitos tool calls sequenciais com auto-correção</li>
              <li>Time já opera com stack compatível (Claude Code/Cline)</li>
              <li>Tarefas onde interleaved reasoning traz +40% de ganho</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Cards de decisão em 3 colunas */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
          <h4 className="font-semibold text-green-600 mb-2 flex items-center gap-2">
            <span className="text-lg">🎯</span> Para o curso e dia a dia
          </h4>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Use <strong>GLM 4.6</strong> como default no Vibe Coding: barato ($3/mês), rápido, estável e 100% integrado ao ambiente do curso. Perfeito para desenvolvimento contínuo.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
          <h4 className="font-semibold text-amber-500 mb-2 flex items-center gap-2">
            <span className="text-lg">🤖</span> Para agentes avançados
          </h4>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Considere <strong>MiniMax M2</strong> em projetos com agentes complexos, múltiplos passos e exploração intensa. Ideal para R&D e automações sofisticadas.
          </p>
        </div>
        <div className="rounded-xl border border-gray-200 dark:border-gray-700 p-4 bg-white/80 dark:bg-[#0b0b0b]/80">
          <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
            <span className="text-lg">⚖️</span> Estratégia híbrida
          </h4>
          <p className="text-gray-800 dark:text-gray-200 leading-relaxed">
            Use GLM 4.6 para rotinas e M2 apenas onde raciocínio intercalado traz ganho real. Máximo impacto com custo controlado e flexibilidade operacional.
          </p>
        </div>
      </div>
    </div>
  );
}
