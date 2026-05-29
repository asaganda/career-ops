# Evaluación: Vercel — Software Engineer, AI Gateway

**Fecha:** 2026-05-01
**Arquetipo:** AI Platform / LLMOps Engineer
**Score:** 2.0/5
**Legitimacy:** Proceed with Caution
**URL:** https://job-boards.greenhouse.io/vercel/jobs/5798406004
**PDF:** career-ops/output/cv-andrew-saganda-vercel-ai-gateway-2026-05-01.pdf
**Batch ID:** 3

---

## A) Resumen del Rol

| Campo | Detalle |
|-------|---------|
| **Arquetipo** | AI Platform / LLMOps Engineer |
| **Domain** | AI Infrastructure / Developer Tools |
| **Function** | Backend Systems Engineering |
| **Seniority** | Mid-Senior (5+ years req.) |
| **Remote** | Hybrid — San Francisco or New York City |
| **Salary** | $196,000–$294,000 (SF base; location-adjusted) |
| **Team size** | Not disclosed |
| **TL;DR** | Build the backend of Vercel's AI Gateway — a unified API routing requests to 100s of AI models (OpenAI, Anthropic, Google) with rate limiting, intelligent failovers, distributed caching, billing, and observability. This is a backend infrastructure role, not frontend. |

---

## B) Match con CV

| JD Requirement | CV Match | Status |
|---------------|---------|--------|
| 5+ years experience | 8+ years professional engineering | ✅ |
| TypeScript/JavaScript proficiency | SalonCentric, FullBeauty, TypescriptQuest — core stack for 8+ years | ✅ |
| API gateway design / implementation | No API gateway experience; 3rd-party integrations were consumer-side | ❌ Hard blocker |
| Backend/cloud infrastructure | Node.js/Express in personal projects; no production cloud infra depth | ⚠️ Partial |
| Distributed systems (rate limiting, caching) | No production experience at this layer | ❌ Hard blocker |
| Low-latency inference infrastructure | No experience | ❌ Hard blocker |
| Failover / circuit-breaking mechanisms | No experience | ❌ Hard blocker |
| AI/ML integrations | OpenAI API in CanIParkHere; Claude Code, Codex used as tools — user-level, not builder-level | ⚠️ Partial |
| Open-source project contributions | TypescriptQuest on GitHub (personal project built with AI assist, not community OSS) | ⚠️ Weak |
| Cross-functional collaboration | Strong — bridged ops and dev at SalonCentric | ✅ |

### Gap Analysis

1. **API gateway / rate limiting / distributed systems** — HARD BLOCKER. The core deliverable of this role is infrastructure that handles millions of AI inference requests with circuit breaking, failovers, and caching. Andrew has zero production experience at this layer.

2. **Backend cloud infrastructure** — HARD BLOCKER. Node.js in personal projects is not production cloud infrastructure. No AWS/GCP/Azure depth, no Kubernetes, no distributed caching (Redis/Memcached) at scale visible in the CV.

3. **Low-latency inference systems** — HARD BLOCKER. Streaming, batching, and optimizing AI inference pipelines is a specialized backend skill set absent from the CV.

4. **AI integrations at infrastructure level** — Significant gap. Using OpenAI's API in a mobile prototype (CanIParkHere) is fundamentally different from building the infrastructure layer that routes, rate-limits, and failovers thousands of concurrent AI API calls.

5. **Open-source contributions** — Moderate gap. TypescriptQuest is on GitHub but was built using Claude Code as an AI coding agent. Valid for product ownership and AI-dev framing, not for demonstrating OSS community participation or technical architecture depth.

**Mitigation:** None of the hard blockers can be bridged with reframing. This requires 3–5 years of backend infrastructure experience Andrew hasn't accumulated yet.

---

## C) Nivel y Estrategia

**Level detected in JD:** Mid-Senior (5+ years, IC contributor)
**Andrew's natural level for this role:** Not applicable — specialty mismatch, not a level mismatch.

This isn't a case where Andrew is junior and could be downleveled — the gap is domain, not seniority. He's a senior frontend engineer applying to a backend infrastructure role. TypeScript fluency is necessary but nowhere near sufficient.

**Plan "vender senior sin mentir":** Not applicable here. Attempting to present 8 years of frontend/API-consumer experience as backend infrastructure expertise would misrepresent the candidate.

**Alternate path at Vercel:** The scan-history shows three roles with better fit:
- **Software Engineer, Growth** (`5808568004`) — A/B testing, conversion, frontend on growth team → direct match with SalonCentric work
- **Software Engineer, AI SDK** (`5474915004`) — TypeScript, AI integrations, developer tooling → adjacent to TypescriptQuest and CanIParkHere
- **Software Engineer, Dashboard** (`5808568004`) — Frontend/React → core frontend skills

Those are worth evaluating. This one is not.

---

## D) Comp y Demanda

| Source | Data |
|--------|------|
| JD stated range | $196,000–$294,000 (SF base; location-adjusted) |
| Levels.fyi (SE, Vercel) | $165K–$316K+ total comp; median ~$220K |
| Glassdoor (Vercel, 2026) | Various roles avg ~$235K for SWE |
| NYC adjustment estimate | ~15-20% below SF → est. $165K–$250K for NYC |
| Andrew's target range | $120K–$160K |

**Comp Score: 5/5** — Vercel pays top-quartile compensation, 25–40% above Andrew's stated target. The comp is exceptional, but irrelevant without the fundamental skill fit.

**Hiring health:** Mixed signals. Vercel replaced a 10-person sales team with an AI agent in 2025, and engineering reorg discussions surfaced on Blind through March 2026. However, 9+ engineering roles were scanned active today across multiple specializations (CDN, Compute, Deployment, Workflows, Domains, AI Gateway, Agent) — consistent with a real engineering build-out, not a ghost-posting pattern.

---

## E) Plan de Personalización

**Recommendation: Do not apply. Skip this role.**

If Andrew *insists* on applying despite the gap analysis, the minimum CV adjustments would be:

| # | Section | Current | Proposed change | Why |
|---|---------|---------|-----------------|-----|
| 1 | Professional Summary | Frontend-focused | Pivot to "full-stack TypeScript engineer with API integration depth and AI tooling experience" | Positions the nearest match |
| 2 | Skills section | Frontend-heavy | Elevate Node.js, Express, REST APIs, PostgreSQL above CSS/HTML tools | Signals backend capability |
| 3 | Projects order | TypescriptQuest first | Move CanIParkHere first — has the most relevant OpenAI API story | Most AI-adjacent proof point |
| 4 | SalonCentric API bullet | Marketplace onboarding | Reframe toward "API orchestration across 9+ third-party integrations" | Closest adjacent exp to API gateway work |
| 5 | LinkedIn headline | Frontend Engineer | "Full-Stack TypeScript Engineer — API integrations & AI-augmented development" | Aligns with role vocabulary |

**LinkedIn:** Add a featured section for CanIParkHere's OpenAI API integration and TypescriptQuest's architecture. These are the strongest adjacent proof points available.

---

## F) Plan de Entrevistas

These stories would apply more directly to the better-fit Vercel roles (Growth, AI SDK) than to AI Gateway, but documenting for completeness:

| # | Requirement | Story | S | T | A | R |
|---|-------------|-------|---|---|---|---|
| 1 | API integrations at scale | SalonCentric marketplace API onboarding | Solo contact during senior engineer's paternity leave; 3rd-party sellers couldn't integrate | Own all technical support for integrations | Standardized docs, debug pipeline, triaged sellers | 9+ sellers onboarded; contributed to 4% sales volume increase (2023), 1.25% (2024) |
| 2 | TypeScript/full-stack build | TypescriptQuest end-to-end | No budget, solo project, needed to demonstrate production shipping capability | Ship a real product to production as portfolio proof | Used Claude Code as AI coding agent to architect and build React + Node + PostgreSQL app | Live production app with OAuth, Stripe, PostgreSQL on DigitalOcean |
| 3 | AI API integration | CanIParkHere OpenAI GPT-4.1 | NYC parking enforcement is complex; users get tickets from ambiguous signs | Build a real-time mobile interpreter | Integrated OpenAI vision API into React Native, prompt-engineered classification | Working prototype that determines parking eligibility from sign photos |
| 4 | Cross-functional collaboration | SalonCentric business↔dev bridging | Recurring marketplace issues with no technical escalation path | Act as technical liaison to dev partners | Translated business issues into technical requirements, managed comms both directions | Reduced escalation lag; 1.25% total sales volume increase (2024) |
| 5 | Data-driven optimization (Growth role angle) | SalonCentric A/B testing | Low conversion rates on web + mobile; unclear what was driving drop-off | Improve conversion with measurable experiments | Ran A/B tests via Optimizely on UI/UX elements across web and mobile surfaces | 20% conversion rate increase (2023), 124% user engagement lift (2024) |

**Case study for better-fit Vercel roles:** TypescriptQuest — ship a full production SaaS from zero to paying customers using AI tooling. Lead with: scoping the problem → stack choices → using Claude Code as a coding agent → shipping OAuth + Stripe + PostgreSQL to production solo in a short timeline.

**Red-flag questions for this specific role:**
- *"Tell me about your distributed systems experience"* — Honest answer: "My production backend experience is at the application layer — Node/Express, PostgreSQL. I understand distributed systems concepts but haven't built production rate limiters or circuit breakers." Do not bluff this.
- *"What OSS contributions have you made?"* — TypescriptQuest is on GitHub. Frame it accurately: personal project using AI-assisted development. Don't inflate to community OSS.

---

## G) Posting Legitimacy

**Assessment: Proceed with Caution**

| Signal | Status | Notes |
|--------|--------|-------|
| Description quality | ✅ High | Specific responsibilities, realistic requirements, disclosed salary — not a ghost posting |
| Salary disclosed | ✅ Yes | $196K–$294K stated clearly — transparent comp |
| Prior appearances | ✅ First scan | Job ID `5798406004` added to scan-history today; no prior appearances |
| Posting freshness | ⚠️ Unverified | Playwright not available in batch mode; apply button state unconfirmed |
| Company hiring health | ⚠️ Mixed | 9+ active engineering roles scanned today (real build-out signal); but company replaced sales team with AI and had engineering reorgs through Q1 2026 |
| Reposting detection | ✅ Not a repost | First appearance in scan-history |

**Context:** Vercel's restructuring appears concentrated in sales/GTM, not engineering — the active scan of 9+ roles across distinct infrastructure specializations (CDN, Compute, Deployment, Domains, Lua, AI Gateway, Agent, Workflows) is consistent with a real hiring push, not trickle-posting. The Proceed with Caution is primarily due to unverified freshness (batch mode limitation) and general restructuring uncertainty.

---

## Score Global

| Dimensión | Score |
|-----------|-------|
| Match con CV | 1.5/5 |
| Alineación North Star | 2.5/5 |
| Comp | 5/5 |
| Señales culturales | 3.0/5 |
| Red flags (backend infra gap, restructuring) | -1.5 |
| **Global** | **2.0/5** |

**Recommendation: SKIP.** The role requires 3–5 years of backend infrastructure engineering expertise (API gateways, distributed systems, rate limiting, low-latency inference) that isn't in the CV. The comp is exceptional, but applying without the core competencies would result in a first-round technical rejection. Andrew should instead evaluate the Vercel Growth and AI SDK roles, which map directly to his strongest proof points.

---

## Keywords extraídas

AI Gateway, unified API, rate limiting, distributed systems, TypeScript, JavaScript, Node.js, API gateway, failover mechanisms, low-latency inference, AI/ML integrations, OpenAI, Anthropic, Google AI, REST APIs, cloud infrastructure, caching, billing systems, authentication, usage analytics, open-source contributions, AI SDK
