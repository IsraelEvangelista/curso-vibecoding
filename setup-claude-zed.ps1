# Script para configurar Claude Code com dual threads no Zed ACP
Write-Host "Configurando Claude Code para Zed ACP com dual threads..." -ForegroundColor Green

# Thread 1: Configuração Anthropic PRO (OAuth)
Write-Host "`n=== Thread 1: Anthropic PRO ===" -ForegroundColor Yellow
Write-Host "Execute: claude setup-token" -ForegroundColor Cyan
Write-Host "Isso abrirá o navegador para login na sua conta Anthropic PRO" -ForegroundColor White

# Thread 2: Configuração Z.ai (API Key)
Write-Host "`n=== Thread 2: Z.ai ===" -ForegroundColor Yellow
$env:CLAUDE_Z_AI_BASE_URL = "https://api.z.ai/api/anthropic"
$env:CLAUDE_Z_AI_AUTH_TOKEN = "76d30ff35e46407d8d319f56fa6c0369.gGfFbKsOTneEzIVZ"
$env:CLAUDE_Z_AI_MODEL = "glm-4.6"
Write-Host "Variáveis Z.ai configuradas" -ForegroundColor Green

# Instruções para o Zed
Write-Host "`n=== Configuração no Zed ACP ===" -ForegroundColor Yellow
Write-Host "1. Abra o Zed" -ForegroundColor White
Write-Host "2. Instale a extensão Claude Code ACP" -ForegroundColor White
Write-Host "3. Configure duas instâncias:" -ForegroundColor White
Write-Host "   - Instance 1: Autenticação OAuth (use 'claude setup-token')" -ForegroundColor Cyan
Write-Host "   - Instance 2: Use as variáveis de ambiente da Z.ai" -ForegroundColor Cyan

Write-Host "`nConfiguração concluída!" -ForegroundColor Green