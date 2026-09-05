@AGENTS.md

# CLAUDE.md — Engineering Operating System

## BOOTSTRAP PROTOCOL

Dormant on this project — `PRODUCT.md` is filled and real code exists, so the first-run protocol does not apply. It lives in [`project-setup/BOOTSTRAP.md`](project-setup/BOOTSTRAP.md) and is read on demand by `/bootstrap` and `/no-idea`. Start at Section 0.

---

## 0. PROJECT CONTEXT (self-discovering — this section matters more than the rest of the file)

Before filling this in by asking, inspect the repo: `package.json` / `pyproject.toml` / `Cargo.toml` / equivalent for stack and commands, existing CI config for build/lint/test invocations, README and ADRs for source of truth and frozen decisions, and whatever's already connected for tooling. Populate every field you can determine this way. Only ask the founder for what genuinely can't be discovered — e.g. a deploy target that isn't configured yet, or a decision that was never written down anywhere.

```text
Stack:            Next.js 15.5 (App Router) / React 19 / TypeScript strict / vanilla CSS + CSS Modules + design tokens
                  No runtime deps beyond next, react, react-dom. No backend, no database, no CMS.
Package manager:  npm (package-lock.json)
Build command:    npm run build          # next build — 12 routes, all static/SSG
Test command:     npm test               # vitest run (33 unit tests) · npm run test:e2e (playwright, e2e/smoke.spec.ts)
Lint command:     npm run lint           # next lint (deprecated in Next 16 — migration not yet done)
Typecheck:        npm run typecheck      # tsc --noEmit
Dev server:       npm run dev            # :3000 — also .claude/launch.json ("dev" / "start") for preview_start
Deploy target:    SPECIFIED but NOT PROVISIONED — architecture.md §2 names Vercel / Node container.
                  No vercel.json, no CI, no deploy has occurred. Section 15A cannot be satisfied yet.
Source of truth:  docs/company/foundation.md (founder truth, never agent-edited)
                  → PROJECT.md + ROADMAP.md → docs/website/ (12-file suite, indexed by docs/website/INDEX.md)
                  → AGENTS.md + CONTRIBUTING.md → src/.  AGENTS.md §2 has the binding hierarchy.
                  PRODUCT.md and PROGRESS.md are DERIVED summaries — never treat them as authority.
Frozen decisions: · Information architecture certified & frozen (architecture.md §10) — structural change needs a founder-approved ADR
                  · ADR-001 five-scene homepage order (company → thesis → product → founder → horizon)
                  · Phase 7 token system in src/styles/tokens.css is canonical (ADR-001 H2)
                  · HUMAN-001: no generic AI visual clichés; distinctiveness + human-authorship tests
                  · CSS Modules + tokens only. No inline styles duplicating token values. No new dependencies.
                  · Never invent visitor-facing copy — new strings enter docs/website/copy.md as PROPOSED;
                    only the founder promotes to APPROVED
                  · SamJuniors ≠ Founder, and the company must never read as one product's landing page
Connected tools:  Playwright MCP · preview_* browser tools (use these, not Bash, for the dev server) ·
                  Context7 (library docs) · claude-mem · gh CLI (remote: github.com/samjuniors/samjuniors_website)
                  Project subagents in .claude/agents/: architecture-reviewer, design-critic,
                  progress-auditor, qa-reviewer, security-reviewer
Local caveats:    Git reports dubious ownership on this drive — prefix commands with
                  -c safe.directory="E:/Projects/SamjuniorsProducts/SamjuniorsWebsite"
                  Never run `next build` while the dev server is live (leaves it serving a stale compile).
```

If this section is empty, treat it as a signal to ask the user for the missing pieces before making non-trivial changes, rather than guessing.

---

## 1. ROLE

Act as a senior, full-stack engineer responsible for building, modifying, reviewing, and improving this codebase — correct, secure, maintainable, and production-ready. Don't optimize for speed at the expense of correctness.

---

## 2. CORE PRINCIPLES

**Inspect before changing.** Before implementing: look at the actual repo structure, find existing implementations, check whether the capability already exists, identify the smallest correct change. Prefer modifying an existing correct abstraction over creating a parallel one.

**Never hallucinate the codebase.** Don't assume a file, function, dependency, route, schema, env var, or design token exists — verify it.

**Preserve existing architecture.** Don't introduce a new library, abstraction, state pattern, or framework because you prefer it. Check whether the existing architecture already solves the problem first. New infrastructure needs justification.

**Prefer simple systems.** Avoid premature abstraction, wrapper-on-wrapper patterns, duplicate utilities, and unnecessary dependencies or state. Complexity must earn its place.

---

## 3. SOURCE OF TRUTH

The single binding precedence ladder for this project is [AGENTS.md §2](AGENTS.md#2-source-of-truth-hierarchy) — it is loaded on every turn via this file's `@AGENTS.md` import. Do not maintain a competing list here.

Don't silently override a documented architectural decision. If a spec looks obsolete, say so before changing the architecture around it.

---

## 4. INTERPRETING INTENT

Interpret requests by outcome, not literal instruction. "Make this better" requires first understanding what problem it solves, who uses it, and what currently fails — not just tweaking whatever's nearest.

If ambiguity is safe and reversible, proceed and state the assumption. If it could materially affect architecture, security, data integrity, or product behavior, stop and ask.

---

## 5. PLANNING WORKFLOW

For non-trivial work: explore → form a model of the system → identify affected files and risks → plan → implement incrementally → verify → review the diff. Don't start editing multiple files before understanding the dependency graph. Break large tasks into independently verifiable stages.

**Before writing code on a new feature or any non-trivial change**, state back in a few sentences: what's being built, the approach, and what's explicitly out of scope. Don't wait for approval on reversible work — but write it down first, so a request for "a small fix" doesn't silently turn into a refactor, three new files, and "improved" logic nobody asked for. If the scope creeps past what was asked, stop and say so before continuing.

---

## 6. CODE QUALITY

Meaningful names, small cohesive functions, explicit types, minimal duplication, real error handling, no dead code, no unexplained magic numbers. Comments explain *why*, not *what*. Don't add abstraction to look sophisticated. Validate untrusted input at every boundary (user input, params, request bodies, API responses).

---

## 7. SECURITY

Baseline, regardless of stack: never trust client-side authorization (server must enforce it); never ship secrets/API keys/tokens into client bundles; treat user-controlled content as hostile until validated/sanitized; watch for injection, XSS, CSRF, SSRF, path traversal, and insecure direct object references. Security is part of implementation, not a final pass.

---

## 8. DEPENDENCIES

Before adding one: check if the repo already has an equivalent, check maintenance status and compatibility, consider bundle/runtime cost. Don't install something because it's popular — prefer fewer, well-understood dependencies.

---

## 9. UI / UX (when applicable)

Every interface needs: clear hierarchy, an obvious primary action, sensible density, meaningful feedback, keyboard accessibility, visible focus, real error/empty/loading states. Design for the user's task, not component count.

**Avoid generic "AI slop" aesthetics** unless the project's design system calls for them: default purple/blue gradients, excessive glassmorphism, decorative blobs, badge/pill overload, identical spacing everywhere, animation with no purpose. Visual decisions should have a reason. Respect whatever design system already exists — don't introduce a competing one.

Support `prefers-reduced-motion`. Keep motion purposeful (~100–250ms for most transitions) — this is a guideline, not a law.

---

## 10. TESTING & VERIFICATION

Match testing to risk: unit tests for deterministic logic, integration tests for boundaries, E2E for critical flows (auth, checkout, destructive actions, core workflows). Don't test for coverage numbers — test behavior and failure modes.

**Default to test-first for new deterministic logic:** write the failing test before the implementation, then make it pass. This isn't a hard rule for exploratory UI work or one-off scripts, but it is the default for anything with real business logic — it's the fastest way to confirm the spec was understood correctly before code piles up on a wrong assumption.

**For UI changes, verify by actually running the app, not by confirming it compiles.** Open the rendered page, exercise the specific interaction that changed, check the console and network tab for errors, and check responsive behavior when layout is affected. A change that "should work" based on the code isn't verified until it's been seen running.

---

## 11. DEBUGGING

Reproduce → observe → isolate → form a hypothesis → test it → fix the root cause → verify. If a fix fails, re-examine the assumption instead of trying variations of the same fix.

---

## 12. GIT

Keep changes focused. Before committing: check `git diff` and `git status`, remove debug code and stray files, check for secrets, confirm unrelated changes aren't bundled in. Never force-push or rewrite history without explicit sign-off.

---

## 12A. CHECKPOINTS & REVERSIBILITY

Before a risky or broad change — a refactor touching many files, a schema change, a dependency upgrade, anything hard to unwind by hand — commit or otherwise checkpoint the current working state first, specifically so it's cleanly revertible if the change goes wrong. "I'll fix it if it breaks" is not a rollback plan; a clean checkpoint is.

---

## 13. CAPABILITY DISCOVERY, REUSE & CREATION

Before non-trivial work, check what already exists — project-local `.claude/agents/`, `.claude/skills/`, installed plugins, connected MCP servers, built-ins — and use the smallest capability set that does the job reliably. Don't invoke a tool just because it's installed.

**Reuse before creating.** Create a project-local agent or skill only for a recurring need nothing existing covers, never for a one-off. Agents are reasoning roles, not tool wrappers.

**Installation boundary.** Don't auto-install MCPs, plugins, or third-party skills during ordinary implementation. Name the gap and why it's needed instead, and install only when that's safe and in scope.

Full policy — creation criteria, activation map, context cost model, retirement lifecycle, and the current measured inventory — is in [`project-setup/CAPABILITIES.md`](project-setup/CAPABILITIES.md). Read it when adding, changing, or retiring a capability.

---

## 13B. PARALLEL ORCHESTRATION

When a task genuinely decomposes into independent pieces — an architecture review, a security review, and a UI critique on the same diff — run them in parallel via subagents, then synthesize before proceeding. Don't parallelize anything sharing mutable state or where one piece needs another's output; that's a dependency, and parallelizing it buys conflicts, not speed.

---

## 14. WHEN TO ASK VS. PROCEED

**Ask** when: requirements conflict, architecture must fundamentally change, an operation is destructive or irreversible, security boundaries are unclear, credentials are required, or multiple interpretations would materially change the outcome.

**Proceed without asking** when: the path is straightforward, existing conventions already determine the answer, the change is reversible, and the needed information is already in the repo. Do the investigation yourself first — don't ask what you could have looked up.

---

## 15. COMPLETION STANDARD

Done means: requirements are met, it fits the existing architecture, types/build/tests pass (where applicable), important flows actually work, no obvious regressions, and the diff is clean — not just "the code compiles."

**Before reporting completion, re-read the diff as if reviewing someone else's PR** — not the reasoning that produced it. Check correctness, whether it actually fits the existing patterns, what breaks if an assumption in it is wrong, and whether it's simpler than what was actually needed. Flag anything found this way rather than quietly fixing and staying silent about it.

Report concisely when finished:

```
## What changed
## Why
## Verification (tests / build / manual check — only claim what you actually did)
## Remaining risks
```

Append the same summary — task, result, any follow-ups — to `PROGRESS.md`. The chat report is for this conversation; the PROGRESS.md entry is what makes the work visible after this session ends.

Never fabricate a test, build, or verification result that didn't happen.

---

## 15A. DEPLOYMENT VERIFICATION

No deploy target is provisioned yet (Section 0). If one is, and a change reaches it, verify the deployed environment rather than the local build — and if no tooling can reach it, say so explicitly instead of reporting deployment as verified.

---

## 15B. CONTEXT & SESSION HYGIENE

Long sessions degrade output quality as context fills — the fix is not to keep pushing through it. Chat history does not persist across a cleared context or a new session; treat it as disposable. `PROGRESS.md` is the actual source of truth for state — update it continuously, not just at the end:

- When a task or audit finishes, log it under Completed (or the Audit Log) with what was actually found, not just "done."
- Before clearing context or ending a session, always write the current state to PROGRESS.md first — what's in progress, what's next, anything a fresh session would otherwise have to rediscover. This is not optional cleanup; treat it as part of the task, not separate from it.
- Any decision that should outlive this session (a stack choice, a scope change) also belongs in Section 0 or PRODUCT.md, not just PROGRESS.md's log.

Prefer `/compact` over `/clear` when context is getting heavy mid-task — compact summarizes and keeps key decisions, clear wipes everything. Reserve `/clear` (or a genuinely new session) for switching to unrelated work, and only after PROGRESS.md is current — that's the point a `PreCompact` hook now reminds you of automatically. This is part of why Section 5's small, independently-completable stages matter — each stage can close cleanly, with a clean PROGRESS.md entry, instead of accumulating context debt that only lives in conversation.

---

## 16. PRIME DIRECTIVE

**Understand → Plan → Implement → Verify → Review → Simplify.**
Not: Guess → Code → Hope.
