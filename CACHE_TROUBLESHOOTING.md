# Guia de Solução de Problemas de Cache - Curso Vibe Coding

Este guia fornece passos detalhados para resolver problemas de cache e garantir que você veja as alterações mais recentes do slide `aula3-slide2`.

## 🚨 Problema Comum
O navegador e o Vite armazenam em cache arquivos estáticos e módulos, o que pode fazer com que você veja versões antigas dos slides mesmo após as alterações terem sido salvas.

---

## 🔧 Solução Passo a Passo

### Passo 1: Limpar Cache do Navegador

#### Opção A: Atalho Rápido (Recomendado)
1. **Windows/Linux**: `Ctrl + Shift + Delete`
2. **Mac**: `Cmd + Shift + Delete`
3. Selecione "Cache de imagens e arquivos"
4. Escolha "Última hora" ou "Todo o período"
5. Clique em "Limpar dados"

#### Opção B: Hard Reload (Mais Rápido)
1. **Windows/Linux**: `Ctrl + F5` ou `Ctrl + Shift + R`
2. **Mac**: `Cmd + Shift + R`
3. Isso força o navegador a ignorar o cache apenas para a página atual

#### Opção C: Limpar Cache Manualmente
1. Abra DevTools (`F12` ou `Ctrl + Shift + I`)
2. Vá para a aba "Application" (Aplicação)
3. No menu lateral, expanda "Cache Storage"
4. Clique com o botão direito em cada item e selecione "Delete"
5. Vá para "Local Storage" e "Session Storage" e limpe também

---

### Passo 2: Reiniciar o Servidor Vite

#### Parar o Servidor Atual
```bash
# No terminal onde o servidor está rodando
# Pressione: Ctrl + C
```

#### Limpar Cache do Vite (Importante!)
```bash
# No diretório do projeto (d:/Israel/Projetos Clientes/Projetos TRAE/Curso Vibe-Coding)
# Remover a pasta de cache do Vite
rm -rf node_modules/.vite

# Alternativa para Windows (PowerShell)
Remove-Item -Recurse -Force node_modules/.vite
```

#### Reiniciar o Servidor
```bash
# Limpar o terminal
clear

# Iniciar o servidor novamente
npm run dev
```

---

### Passo 3: Verificar em Modo Anônimo/InPrivate

#### Chrome/Edge
1. Pressione `Ctrl + Shift + N` (Windows/Linux) ou `Cmd + Shift + N` (Mac)
2. Acesse `http://localhost:5173`
3. Navegue até o slide `aula3-slide2`

#### Firefox
1. Pressione `Ctrl + Shift + P` (Windows/Linux) ou `Cmd + Shift + P` (Mac)
2. Acesse `http://localhost:5173`

**Vantagem**: O modo anônimo não usa cache do navegador normal

---

### Passo 4: Verificar se as Alterações Foram Salvas

#### Verificar o arquivo mockData.ts
```bash
# No terminal, verifique se as alterações estão no arquivo
grep -A 20 "aula3-slide2" src/lib/mockData.ts
```

#### Verificar o Git Status
```bash
# Verifique se há alterações não commitadas
git status

# Veja as alterações específicas
git diff src/lib/mockData.ts
```

---

### Passo 5: Forçar Atualização do Módulo

Se o problema persistir, force o Vite a recarregar o módulo:

#### No arquivo src/lib/mockData.ts
Adicione um comentário com timestamp para forçar invalidação:
```typescript
// Forçar atualização: 2025-11-11T00:53:18.672Z
```

#### No arquivo src/pages/AulaSlidePage.tsx
Adicione um `console.log` para verificar se o componente está carregando dados novos:
```typescript
useEffect(() => {
  console.log('AulaSlidePage carregado com lessonId:', lessonId);
  console.log('Slides carregados:', deck?.slides.length);
}, [lessonId, deck]);
```

---

### Passo 6: Verificar LocalStorage

As vezes o LocalStorage pode causar problemas:

```javascript
// No console do navegador (DevTools > Console)
// Limpar todos os dados do curso
localStorage.clear();

// Ou limpar especificamente os dados do slide
localStorage.removeItem('currentSlide_aula3');
localStorage.removeItem('slideProgress_aula3');
```

---

## 🎯 Fluxo Recomendado

Execute estes comandos **nesta ordem**:

```bash
# 1. Parar o servidor
Ctrl + C

# 2. Limpar cache do Vite
rm -rf node_modules/.vite

# 3. Limpar cache do navegador (use um dos métodos acima)

# 4. Reiniciar o servidor
npm run dev

# 5. Abrir em modo anônimo
# Chrome: Ctrl + Shift + N
# Acessar: http://localhost:5173
```

---

## 🔍 Verificação Final

Após seguir os passos, verifique:

1. **Console do Navegador**: Deve mostrar "AulaSlidePage carregado com lessonId: aula3"
2. **Network Tab**: O arquivo `mockData.ts` deve ter status 200 (não 304 - cached)
3. **LocalStorage**: Não deve haver dados antigos do slide
4. **Visual**: O slide `aula3-slide2` deve mostrar o conteúdo atualizado

---

## 📞 Se o Problema Persistir

Se ainda não conseguir ver as alterações:

1. **Verifique o arquivo fonte**:
   ```bash
   cat src/lib/mockData.ts | grep -A 30 "id: 'aula3-slide2'"
   ```

2. **Verifique se o build está correto**:
   ```bash
   npm run build
   ```

3. **Verifique erros no console**:
   - DevTools > Console
   - DevTools > Network (filtre por "mockData")

4. **Verifique o timestamp do arquivo**:
   ```bash
   ls -la src/lib/mockData.ts
   ```

---

## ⚡ Atalhos Rápidos

Crie um script para facilitar futuramente:

### package.json
```json
{
  "scripts": {
    "dev": "vite",
    "dev:clean": "rm -rf node_modules/.vite && vite",
    "clear:cache": "rm -rf node_modules/.vite",
    "clear:storage": "echo 'Execute no console: localStorage.clear()'"
  }
}
```

### Uso:
```bash
# Limpar cache e iniciar
npm run dev:clean
```

---

**Última atualização**: 2025-11-11
**Versão**: 1.0
**Autor**: Kilo Code Assistant