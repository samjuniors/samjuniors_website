# apply-claude-config-fixes.ps1
# Applies the three .claude/ edits the desktop agent is sandboxed out of (writes into
# any .claude/ directory are refused there). Safe to re-run: it backs up first and
# each patch is idempotent.
#
#   cd E:\Projects\SamjuniorsProducts\SamjuniorsWebsite
#   powershell -ExecutionPolicy Bypass -File project-setup\apply-claude-config-fixes.ps1
#
# NOTE: this file is deliberately pure ASCII. PowerShell 5.1 reads BOM-less scripts as
# ANSI, so em dash / section sign are built from char codes instead of typed literally.

$ErrorActionPreference = 'Stop'
if (-not (Test-Path '.claude\agents\design-critic.md')) {
    throw "Run this from the SamjuniorsWebsite repo root (no .claude\agents\design-critic.md here)."
}

$backup = 'archive\context-optimization-2026-09-05\claude-dir-round2'
New-Item -ItemType Directory -Force -Path $backup | Out-Null
$utf8 = New-Object System.Text.UTF8Encoding($false)
$dash = [char]0x2014   # em dash
$sect = [char]0x00A7   # section sign

function Save-Text([string]$Path, [string]$Text) {
    [System.IO.File]::WriteAllText((Resolve-Path -LiteralPath $Path), $Text, $utf8)
}

# --- 1 + 2: repoint /bootstrap and /no-idea at the extracted protocol -------------
foreach ($c in @(
    @{ file = '.claude\commands\bootstrap.md'; tail = 'I have an idea.' },
    @{ file = '.claude\commands\no-idea.md';   tail = "I don't have an idea yet." }
)) {
    Copy-Item $c.file (Join-Path $backup (Split-Path $c.file -Leaf)) -Force
    Save-Text $c.file ("Read CLAUDE.md, PRODUCT.md, and project-setup/BOOTSTRAP.md, then run the bootstrap protocol {0} {1}`n" -f $dash, $c.tail)
    Write-Host "patched  $($c.file)"
}

# --- 3: fix design-critic's stale "Section 14" pointer ---------------------------
$dc = '.claude\agents\design-critic.md'
Copy-Item $dc (Join-Path $backup 'design-critic.md') -Force
$t = Get-Content $dc -Raw -Encoding UTF8
$t = $t.Replace(
    'hierarchy, consistency with the existing design system, accessibility basics, and generic "AI slop" visual patterns per CLAUDE.md Sections 9 and 14.',
    'hierarchy, design-system consistency, accessibility basics, and generic "AI slop" patterns per CLAUDE.md Section 9 plus the HUMAN-001 frozen decision in Section 0.')
$t = $t.Replace(
    'Read CLAUDE.md Sections 9 and 14, and any project-specific design skill, before judging anything.',
    ('Read CLAUDE.md Section 9, the HUMAN-001 frozen decision in Section 0, and docs/website/design-system.md {0}2.5 {1} plus any project-specific design skill {1} before judging anything.' -f $sect, $dash))
Save-Text $dc $t
Write-Host "patched  $dc"

# --- verify ----------------------------------------------------------------------
Write-Host "`nVerification:"
$bad = @(Select-String -Path '.claude\agents\*.md' -Pattern 'Sections 9 and 14' -SimpleMatch)
Write-Host ("  stale 'Sections 9 and 14' remaining: {0}  (expect 0)" -f $bad.Count)
Get-ChildItem '.claude\commands\bootstrap.md', '.claude\commands\no-idea.md' |
    ForEach-Object { Write-Host ("  {0}: {1}" -f $_.Name, (Get-Content $_.FullName -Raw -Encoding UTF8).Trim()) }
Write-Host "`nBackups: $backup"
