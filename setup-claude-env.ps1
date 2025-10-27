# Script para configurar variáveis de ambiente do Claude Code para Z.AI
Write-Host "Configurando variáveis de ambiente para Claude Code com Z.AI..." -ForegroundColor Green

# Configurar variáveis para a sessão atual
$env:ANTHROPIC_BASE_URL = "https://api.z.ai/api/anthropic"
$env:ANTHROPIC_AUTH_TOKEN = "76d30ff35e46407d8d319f56fa6c0369.gGfFbKsOTneEzIVZ"
$env:ANTHROPIC_MODEL = "glm-4.6"

Write-Host "Variáveis configuradas para esta sessão:" -ForegroundColor Yellow
Write-Host "ANTHROPIC_BASE_URL: $env:ANTHROPIC_BASE_URL"
Write-Host "ANTHROPIC_MODEL: $env:ANTHROPIC_MODEL"

# Tornar as variáveis persistentes (requer administrador)
try {
    [System.Environment]::SetEnvironmentVariable('ANTHROPIC_BASE_URL', 'https://api.z.ai/api/anthropic', 'User')
    [System.Environment]::SetEnvironmentVariable('ANTHROPIC_AUTH_TOKEN', '76d30ff35e46407d8d319f56fa6c0369.gGfFbKsOTneEzIVZ', 'User')
    [System.Environment]::SetEnvironmentVariable('ANTHROPIC_MODEL', 'glm-4.6', 'User')
    Write-Host "Variáveis configuradas permanentemente para o usuário atual." -ForegroundColor Green
} catch {
    Write-Host "Não foi possível configurar permanentemente (executar como administrador)." -ForegroundColor Yellow
}

Write-Host "`nReinicie o VS Code ou a extensão Claude Code para aplicar as mudanças." -ForegroundColor Cyan