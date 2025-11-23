# Correção de Deploy - Imagens da Aula 02

**Data:** 10/11/2025  
**Commit:** `eeba07f`  
**Branch:** main

## Problema Identificado

As imagens da Aula 02 não apareciam após o deploy na Vercel, embora funcionassem perfeitamente em desenvolvimento local (localhost).

### Causa Raiz

O Vite serve assets estáticos apenas da pasta `public/` em produção. O código estava referenciando imagens em `/Contexto/Aula 02/assets/`, que:

1. **Funcionava localmente** porque o dev server do Vite serve toda a estrutura de arquivos
2. **Falhava em produção** porque apenas `public/` é copiado para o build final

## Solução Implementada

### 1. Estrutura de Diretórios Criada
```
public/
└── Contexto/
    ├── Aula 01/
    │   └── assets/
    │       ├── App_Write.png
    │       ├── cursor_logo.jpg
    │       ├── kimi_logo.jpg
    │       └── [20+ arquivos]
    └── Aula 02/
        └── assets/
            ├── agente_exemplo.jpg
            ├── agents.jpg
            ├── context.jpg
            ├── contexto_mem.jpg
            ├── llm_brain.jpg
            ├── llms.jpg
            └── tools.jpg
```

### 2. Renomeações Realizadas

Arquivos com espaços foram renomeados para evitar problemas em URLs:
- `App Write.png` → `App_Write.png`
- `cursor logo.jpg` → `cursor_logo.jpg`
- `kimi logo.jpg` → `kimi_logo.jpg`
- `lumi logo.jpg` → `lumi_logo.jpg`
- `warp logo.jpg` → `warp_logo.jpg`

### 3. Arquivos Adicionados ao Commit

**Total:** 35 arquivos alterados
- **Novos:** 33 arquivos de imagem em `public/`
- **Renomeados:** 5 arquivos no diretório original
- **Modificados:** 1 arquivo (.gitignore)
- **Adicionados:** 1 arquivo de documentação (WARP.md)

### 4. URLs Mantidas

As URLs no código **não precisaram ser alteradas**:
```typescript
// Exemplo da Aula 02 - Slide 3
<img src="/Contexto/Aula%2002/assets/llms.jpg" alt="LLM" />
<img src="/Contexto/Aula%2002/assets/agents.jpg" alt="Agente" />
```

Essas URLs continuam funcionando porque:
- O Vite serve o conteúdo de `public/` a partir da raiz (`/`)
- Estrutura `public/Contexto/Aula 02/assets/` → URL `/Contexto/Aula 02/assets/`

## Validação

### Checklist Pré-Deploy ✅
- [x] Assets copiados para `public/`
- [x] Estrutura de diretórios replicada
- [x] Arquivos renomeados (sem espaços)
- [x] Commit criado com mensagem descritiva
- [x] Push realizado para GitHub (main)

### O Que Esperar no Deploy da Vercel

1. **Deploy Automático Acionado** pelo push no GitHub
2. **Build do Vite** irá:
   - Copiar todo o conteúdo de `public/` para `dist/`
   - Manter estrutura `Contexto/Aula XX/assets/`
   - Servir imagens nas URLs corretas
3. **Resultado Esperado:**
   - ✅ Aula 01: imagens continuarão funcionando
   - ✅ Aula 02: imagens agora aparecerão corretamente
   - ✅ Futuras aulas: seguir mesmo padrão

## Padrão para Novas Aulas

### Ao Adicionar Assets de Nova Aula:

1. **Criar diretório em `public/`:**
   ```bash
   mkdir -p "public/Contexto/Aula XX/assets"
   ```

2. **Copiar imagens:**
   ```bash
   cp Contexto/Aula\ XX/assets/* public/Contexto/Aula\ XX/assets/
   ```

3. **Validar nomes sem espaços:**
   ```bash
   # Renomear se necessário
   mv "public/Contexto/Aula XX/assets/nome com espaço.png" \
      "public/Contexto/Aula XX/assets/nome_sem_espaco.png"
   ```

4. **Usar URL no código:**
   ```typescript
   <img src="/Contexto/Aula%20XX/assets/imagem.png" alt="..." />
   // ou sem espaços codificados:
   <img src="/Contexto/AulaXX/assets/imagem.png" alt="..." />
   ```

## Arquivos Relacionados

- **Código:** `src/lib/mockData.ts` (linhas 1376-2179 - Aula 02)
- **Configuração:** `vite.config.ts` (configuração do Vite)
- **Assets Originais:** `Contexto/Aula 02/assets/` (mantidos para referência)
- **Assets Públicos:** `public/Contexto/Aula 02/assets/` (usados no build)

## Verificação Pós-Deploy

### Na Vercel (após deploy automático):

1. **Acessar:** https://curso-vibecoding.vercel.app/aula/aula2/slides
2. **Verificar Slide 3:** Deve mostrar cards com imagens de LLM e Agente
3. **Verificar Slide 4:** Deve mostrar imagem de arquitetura
4. **Console do navegador:** Não deve haver erros 404 para imagens

### Em caso de falha:

1. **Verificar logs da Vercel:**
   - Build bem-sucedido?
   - Warnings de assets?

2. **Verificar estrutura no deploy:**
   - Inspecionar elemento → Network → Ver URLs das imagens
   - Comparar com estrutura em `public/`

3. **Caso necessário:**
   - Fazer rebuild forçado na Vercel
   - Verificar cache do navegador (Ctrl+Shift+R)

## Notas Importantes

1. **Nunca referenciar assets fora de `public/`** em produção
2. **Evitar espaços em nomes de arquivo** para compatibilidade
3. **Manter estrutura consistente** entre `Contexto/` e `public/Contexto/`
4. **Testar localmente** com `npm run build && npm run preview` antes do push

## Commit Hash e Detalhes

```
commit eeba07f
Author: [Gerado via Warp]
Date: 2025-11-10

feat(assets): adicionar pasta public com assets das aulas 01 e 02 para deploy

- Criar diretório public/Contexto com estrutura de assets
- Copiar todas as imagens das Aulas 01 e 02 para public/
- Renomear arquivos com espaços para underscore
- Adicionar WARP.md com guia completo para desenvolvimento
- Corrigir problema de imagens não aparecendo em produção (Vercel)
```

---

**Status:** ✅ Deploy em andamento na Vercel  
**Próximo Passo:** Validar imagens da Aula 02 após deploy automático completar
