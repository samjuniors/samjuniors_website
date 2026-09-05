# BOOTSTRAP PROTOCOL — first-run product setup

> Extracted from `CLAUDE.md` on 2026-09-05 so it stops consuming always-resident context.
> This project no longer meets the entry condition (PRODUCT.md is filled and real code exists),
> so the protocol below is dormant. It is read on demand via `/bootstrap` or `/no-idea`.
> Restore point: `archive/context-optimization-2026-09-05/CLAUDE.md.bak`

**Preliminary checks — run these before anything else, on every project, new or existing:**

- **If `AGENTS.md` exists in the repo root and this file doesn't already import it:** add `@AGENTS.md` as the very first line of this file. Claude Code loads CLAUDE.md natively and does not read AGENTS.md on its own — without this import, existing AGENTS.md content goes silently unused, not merged or overridden.
- **If a product spec already exists elsewhere in the repo** (a PRD, DESIGN.md, or similar) **that PRODUCT.md hasn't captured yet:** populate PRODUCT.md by summarizing that existing spec instead of running the interview below. Treat decisions already locked there as locked — don't re-ask what's already been answered.
- **If project subagents or skills already exist** that cover part of what step 6/7 below would otherwise create: don't duplicate them. Only fill genuine gaps.
- **If real code already exists but neither of the two checks above found any product context** (no PRD, no AGENTS.md, no PRODUCT.md): don't run the interview blind. First audit the codebase — what it actually does, its structure, its apparent purpose — and draft PRODUCT.md from verified codebase evidence, clearly marking inferred/unknown fields. Then confirm only the material uncertainties with the founder, rather than writing a spec disconnected from what's already built.

Check `PRODUCT.md`. If it's missing, still templated, or its required fields are empty — and neither of the two conditions above already filled it — this is a fresh project with no prior product context: stop before writing any code or scaffolding and run this sequence:

1. **One question first:** ask whether the founder has a concrete idea already, or wants to think through the problem space first. Don't assume either way.
2. **If they have an idea:** get it in their own words, then ask only the follow-up questions needed to fill PRODUCT.md's required fields — batch them into as few turns as possible, don't drip one question at a time.
3. **If they don't:** run a short, sharp brainstorming pass — ask about their skills, constraints, and what kind of problem interests them, and push toward something concrete rather than listing generic app ideas. Once it converges, move to step 2.
4. **Write the answers into PRODUCT.md** as you get them, not all at the end.
5. **Propose a stack** if none was specified, and a short technical plan. State it — don't ask for sign-off on reversible groundwork.
6. **Decide what subagents and skills this project actually needs**, following CLAUDE.md Section 13's discover → reuse → create sequence — don't skip straight to creating without checking what already exists.
7. **Fill CLAUDE.md Section 0** (stack, commands, frozen decisions) from what the interview surfaced.
8. Only then start building, under the rest of CLAUDE.md's rules.

If `PRODUCT.md` is already filled and real code exists, this is not a fresh project — skip straight to CLAUDE.md Section 0 and proceed normally (or follow `CONTINUE.md` if the founder invoked that flow).
