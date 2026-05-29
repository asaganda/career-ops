# User Profile Context -- career-ops

<!-- ============================================================
     THIS FILE IS YOURS. It will NEVER be auto-updated.
     
     Customize everything here: your archetypes, narrative,
     proof points, negotiation scripts, location policy.
     
     The system reads _shared.md (updatable) first, then this
     file (your overrides). Your customizations always win.
     ============================================================ -->

## CV Template

**Always use `cv-template-custom.html` in the project root** — NOT `templates/cv-template.html`.
`cv-template-custom.html` is the user-customized template (correct section order, Skills layout, font paths). It lives in the user layer and survives auto-updates.

---

## CV / Cover Letter Generation Rules — MANDATORY

These rules apply every time a CV, cover letter, or application answer is generated. No exceptions.

### Before writing anything
- Read every feedback memory file in full before writing any CV, cover letter, or application copy. The MEMORY.md index alone is not enough.

### Pre-write checklist — run before writing EVERY bullet, not just at the start
Before writing any CV bullet or section, verify it against `cv.md`:
- **Verbatim from cv.md** → allowed
- **Reworded** → allowed only if the meaning is unchanged and nothing new is added
- **Adds anything not in cv.md** → not allowed. Cut it.
- **Sourced from Block F (interview stories), Block C (strategy), or Block E (proposed changes)** → never allowed as CV source material. Those are framing suggestions, not documented facts.

The JD is not a source of truth about Andrew's experience. It is only a lens for deciding which real, documented experience to emphasize. If a JD requirement has no match in cv.md, the answer is to note the gap — not to invent a bullet that fills it.

### TypescriptQuest — hard limits
- **ZERO paying users.** Stripe is integrated but no conversions have happened. Never write "paying users," "customers," or "retention" — anywhere: summary, bullets, cover letter, application answers.
- Built via prompt engineering with Claude Code. Valid proof of: product ownership, shipping to production, AI-augmented development. NOT valid proof of: technical architecture patterns, SSR, API design, framework depth, or any claim that requires hands-on coding.
- Do not claim TypescriptQuest was iterated based on user feedback — no formal feedback loop exists.
- Always say "concept to production" — never "concept to paying users" or "concept to live users."
- **Product building timeline:** Andrew has ~1 year of 0-1 product building across TypescriptQuest, CanIParkHere, and Conntext. Never say "two years" or inflate this.

### CanIParkHere
- Build timeline is unconfirmed. Say "rapidly prototyped" — never claim a specific timeframe like "in days."
- **Always include "Prompted Codex to build"** — this is a confirmed, important authorship detail. Never drop it.

### Conntext
- Chrome extension only — runs in Chrome, not other browsers. Never invent cross-browser QA claims (e.g. "QA'd across browsers and Chrome versions" is fabricated and wrong).
- Authorship: built with Claude Code. Always include this.

### No JD keyword injection without evidence
- Never insert a JD term into any section — summary, core competencies, skills tags, or bullets — unless Andrew has a specific CV bullet or documented proof point to back it up.
- This applies to ALL sections equally, not just the summary.
- Ask before every claim: "What proof do I have for this?" If the answer is nothing, cut it.

### Language accuracy
- **Never use "owned X end-to-end"** — vague and buzzwordy. Replace with specific actions: what was built, what was run, what was responsible for. Use precise verbs.

### Experience accuracy
- **React** is project-based only (~1–2yr equivalent via TypescriptQuest, Conntext, CanIParkHere, SaveTheRims). Never cite SalonCentric as a React proof point — SalonCentric used JavaScript, CSS, and Optimizely only.
- **A/B testing** is ~2 years (SalonCentric only, April 2023–April 2025). Total frontend experience is 8+ years. Never bundle these — always state them separately in summaries. Correct: "Frontend engineer with 8+ years building e-commerce UI, including 2 years running A/B tests..." Wrong: "8+ years shipping A/B tests and e-commerce UI."
- **API integrations at SalonCentric** — Andrew facilitated and coordinated onboarding for 9+ sellers. He did not write the integration code. Never change "facilitated" to "built."
- **WCAG at FullBeauty** — He implemented WCAG standards as part of the build process. He did not run or manage an accessibility program.
- **Gaps from Block B** must not appear in Skills or Core Competencies. The gap table and the skills section must be consistent.
- Score React/TS year requirements against Andrew's actual React/TS tenure — not his total 9.5 years of frontend experience.

### Section order
1. Header (Name | Title, contact row)
2. Professional Summary (optional — only when role needs framing bridge)
3. Core Competencies & Skills
4. Professional Experience (reverse chronological)
5. Education (certifications folded in)

### Work Experience — required entries
- **SD Labs (Frontend Software Engineer)** is the current top entry. The three projects (Conntext, TypescriptQuest, CanIParkHere) are bullet points under it with blue linked titles.
- **General Assembly (Software Engineering Fellow)** MUST always appear in the Work Experience section — do NOT move it to Education-only. It belongs in both Experience and Education. Never drop it from Experience.
- **One-page is NOT a hard requirement.** Do not cut content to force a one-page fit. A clean two-page CV is preferable to a one-page CV with missing roles.

---

## Your Target Roles

| Archetype | Thematic axes | What they buy |
|-----------|---------------|---------------|
| **Frontend Engineer** | React, TypeScript, responsive UI, A/B testing, conversion optimization | Someone who ships polished, performant interfaces tied to business metrics |
| **Growth Engineer** | Experimentation, A/B testing, user acquisition/retention, Optimizely | Someone who runs experiments that move the needle on revenue and engagement |
| **Full Stack Engineer** | React + Node + PostgreSQL, API integrations, end-to-end ownership | Someone who can own features across the stack without handoffs |
| **UI Engineer** | Accessibility (WCAG AA), design systems, Tailwind, component architecture | Someone who bridges design and engineering with precision |

## Your Adaptive Framing

| If the role is... | Emphasize about you... | Proof point sources |
|-------------------|------------------------|---------------------|
| **Growth team / Experimentation** | **BOOST SCORE** — A/B testing at scale (Optimizely, 20% CVR lift, 124% engagement lift) is DIRECT experience, not adjacent. This is a primary archetype. | cv.md — SalonCentric bullets |
| Frontend / Growth | A/B testing at scale (Optimizely, 20% CVR lift, 124% engagement lift), growth metrics mindset | cv.md — SalonCentric bullets |
| E-commerce / Marketplace | $2.6M avg monthly transactions (FullBeauty), 9+ API integrations (SalonCentric), 4% sales volume lift | cv.md — FullBeauty + SalonCentric |
| Full Stack / API | TypescriptQuest (React + Node + PostgreSQL + Stripe + OAuth, solo shipped), RESTful API integrations | cv.md — TypescriptQuest project |
| Accessibility | WCAG AA compliance across 5+ brand sites at FullBeauty, edX certification | cv.md — FullBeauty bullet |
| AI-augmented dev | TypescriptQuest built with Claude Code as AI coding agent; CanIParkHere using GPT-4.1 vision API | cv.md — projects section |

## Your Exit Narrative

<!-- Replace with YOUR story. This frames everything. -->

Use the candidate's exit story from `config/profile.yml` to frame ALL content:
- **In PDF Summaries:** Bridge from past to future
- **In STAR stories:** Reference proof points from article-digest.md
- **In Draft Answers:** The transition narrative appears in the first response

## Your Cross-cutting Advantage

<!-- What's your "signature move"? What do you do that others can't? -->

Frame profile as **"Technical builder with real-world proof"** that adapts framing to the role.

## Your Portfolio / Demo

<!-- If you have a live demo, dashboard, or public project:
     url: https://yoursite.dev/demo
     password: demo-2026
     when_to_share: "LLMOps, AI Platform roles" -->

If you have a live demo/dashboard (check profile.yml), offer access in applications for relevant roles.

## Your Comp Targets

- **Target range:** $120k–$160k base (FTE) or equivalent contract rate
- **Floor:** $115k — but show roles below this if they're otherwise strong. Andrew is not filtering hard on comp right now.
- **Open to:** Both FTE and contract. No preference — evaluate the full package.
- **Note:** Don't auto-penalize a role for seeming "low" for his experience — surface it and let him decide.

## Your Negotiation Scripts

<!-- Adapt to YOUR situation, currency, location -->

**Salary expectations:**
> "Based on market data for this role, I'm targeting [RANGE from profile.yml]. I'm flexible on structure -- what matters is the total package and the opportunity."

**Geographic discount pushback:**
> "The roles I'm competitive for are output-based, not location-based. My track record doesn't change based on postal code."

**When offered below target:**
> "I'm comparing with opportunities in the [higher range]. I'm drawn to [company] because of [reason]. Can we explore [target]?"

## Your Location Policy

**Base:** North Jersey. Commutes willingly into NYC.

**In evaluations (scoring):**
- **Remote / fully remote:** score **5.0**
- **NYC hybrid (2-3 days/week):** score **5.0** — this is ideal
- **NYC onsite (4-5 days/week):** score **3.5** — acceptable if role is strong
- **North Jersey onsite:** score **5.0**
- **Boston / other Northeast onsite:** score **3.0** — would interview if opportunity is compelling (e.g., Whoop)
- **Austin TX / SF / LA — hybrid or onsite:** score **3.0** — open to relocation for the right opportunity
- **Outside US or requiring sponsorship:** score **1.0**
- Do NOT auto-reject anything — Andrew is not being picky on location right now

**Search mindset:** Actively looking. No deal-breakers. Show anything that looks like a reasonable match — he will decide. Don't filter too aggressively on score.

## Evaluation Rules — Experience Year Requirements

**CRITICAL: Always distinguish total frontend years from tech-specific years.**

Andrew has ~9.5 years of total frontend experience, but NOT all of it was in React + TypeScript. When a JD requires X years of a specific technology (e.g., "7+ years React", "5+ years TypeScript"), score the match against his tenure with that specific tech — not his total career length.

- **Do NOT conflate total frontend experience with React/TypeScript-specific experience.** A JD requiring "7+ years React" is a hard gap if he doesn't have that many years in React specifically.
- Flag tech-specific year requirements as a gap in Block B if Andrew's specific-tech tenure falls short, even if his total experience looks sufficient on paper.
- In Block C ("Level & Strategy"), call out the gap honestly and suggest whether it's worth applying anyway given other strengths.

**React/TS gap offset rule for growth engineering roles:**
If a role is on a growth, experimentation, or CRO team AND the React/TS year requirement is 3 or fewer years, partially offset the gap in the overall score. Andrew's A/B testing depth (Optimizely, 20% CVR lift, 124% engagement lift) is rare among frontend candidates — most growth engineers don't have it. Call this out explicitly in Block C as a compensating factor and recommend applying unless the gap is severe (e.g., JD requires 5+ years React on a growth team).
