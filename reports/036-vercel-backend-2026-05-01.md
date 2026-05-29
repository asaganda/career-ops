# Evaluation: Vercel — Software Engineer, Backend

**Date:** 2026-05-01
**Archetype:** Backend Infrastructure / Enterprise Identity (outside Andrew's 4 target archetypes)
**Score:** 2.8/5
**Legitimacy:** High Confidence
**URL:** https://job-boards.greenhouse.io/vercel/jobs/5431123004
**PDF:** career-ops/output/cv-andrew-vercel-backend-2026-05-01.pdf
**Batch ID:** 4

> This is the 5th Vercel role evaluated. Others: [002](002-vercel-dashboard-2026-04-29.md) Dashboard 3.8/5, [003](003-vercel-growth-2026-04-29.md) Growth 4.2/5, [033](033-vercel-trust-safety-2026-05-01.md) Trust & Safety 1.8/5, [034](034-vercel-2026-05-01.md) Agent 2.0/5. **Growth (003) remains the right Vercel target.**

---

## A) Role Summary

| Field | Details |
|-------|---------|
| Archetype | Backend Infrastructure / Enterprise Identity |
| Domain | Identity & Access Management (IAM), Enterprise Backend |
| Function | Backend Software Engineering |
| Seniority | Senior (inferred — $196k–$294k SF base) |
| Remote | US remote; NYC/SF/London/Berlin hybrid Mon/Tue/Fri if within commuting distance |
| Team | Enterprise platform (identity infrastructure) |
| TL;DR | Build SCIM provisioning, SSO/SAML federation, RBAC/ABAC access control, and secure APIs for Vercel enterprise customers |

**Location note:** Andrew is in NJ within commuting distance of NYC. This role requires in-office Mon/Tue/Fri from NYC — 3 days/week, which is his "NYC hybrid" preferred mode. Location scores 5.0 per location policy. Comp is well above target. But the skills gap makes this a SKIP regardless.

---

## B) Match with CV

| JD Requirement | Andrew's Experience | Match |
|---|---|---|
| TypeScript / JavaScript | Skills section; TypescriptQuest; SalonCentric contract | ✅ Strong |
| Node.js | TypescriptQuest (Express); cv.md Skills | ✅ Strong |
| React | Throughout cv.md, all major roles | ✅ Strong |
| SQL / PostgreSQL | TypescriptQuest: PostgreSQL + Drizzle ORM | ✅ Good |
| REST APIs | SalonCentric: 9+ third-party integrations; Skills | ✅ Good |
| OAuth2 | TypescriptQuest: OAuth (app-level implementation) | ⚠️ Basic — consumer app, not enterprise IdP |
| SCIM standards | No mention in cv.md or projects | ❌ Hard gap |
| LDAP / Active Directory | No experience | ❌ Hard gap |
| SAML / SSO / OpenID Connect | No enterprise SSO/federation experience | ❌ Hard gap |
| RBAC / ABAC / ReBAC | No access control model experience | ❌ Hard gap |
| IaC (Terraform, CloudFormation, K8s) | No IaC experience | ❌ Hard gap |
| Scalable high-perf systems | $2.6M/month at FullBeauty (frontend-side) | ⚠️ Adjacent |
| On-call rotations | Not mentioned in cv.md | ❌ Gap |
| Security architecture | No enterprise security background | ❌ Hard gap |

### Gap Analysis

| Gap | Type | Mitigation |
|-----|------|------------|
| SCIM | Hard blocker | No adjacent experience. Cannot bridge with framing alone. |
| LDAP/AD/SAML/SSO | Hard blocker | Enterprise identity stack is a specialization. Consumer OAuth ≠ enterprise SSO. |
| RBAC/ABAC/ReBAC | Hard blocker | Access control models are architectural. Not learnable from frontend experience. |
| IaC (Terraform/K8s) | Hard blocker | Listed under responsibilities as expected day-1 knowledge. |
| On-call | Soft gap | Most backend roles have this; could address in cover letter as willing to learn. |

**Bottom line:** Andrew has the TypeScript/Node.js/SQL/REST foundation, but 4 of the core technical requirements are hard blockers that hiring managers verify in technical screens. This is an enterprise backend security specialization.

---

## C) Level and Strategy

**JD level:** Senior (no explicit title, comp range implies Senior/Staff)
**Andrew's natural level:** Mid-Senior Frontend/Full Stack

This role is not about level mismatch — it's specialization mismatch. Even with maximum framing, Andrew would fail the SCIM/LDAP/SAML technical screen. No "sell senior without lying" plan applies here because the gap is in domain expertise, not in career narrative.

**If Vercel is a target company:** Apply to [003 Growth](003-vercel-growth-2026-04-29.md) (4.2/5) — still Evaluated, not yet Applied. That's the right move.

---

## D) Comp and Demand

| Source | Data |
|---|---|
| Vercel Backend (SF base) | $196,000–$294,000 |
| Levels.fyi — Software Engineer | Median $220k TC, range $165k–$316k+ |
| Levels.fyi — NYC area | $95k–$205k base range |
| Glassdoor — Senior SWE | $157k–$248k (25th–75th pct), avg $196k |
| Andrew's target | $120k–$160k |

**Comp score: 4/5** — Significantly above Andrew's target. Top-of-market pay at Vercel across all roles. NY-adjusted base likely lands $150k–$220k+ for a qualified backend engineer.

**Market context:** Enterprise identity backend roles ($180k+) are in high demand as more companies build SSO/SCIM for enterprise sales. Vercel is expanding its enterprise tier. This is a growing specialty, but requires deep IdP knowledge Andrew hasn't built yet.

---

## E) Personalization Plan

Low ROI to personalize for this specific role given 4 hard blockers. Documented for reference if Andrew decides to apply anyway.

| # | Section | Current State | Change Proposed | Why |
|---|---------|---------------|-----------------|-----|
| 1 | Professional Summary | Frontend-focused opener | Reframe toward "full-stack engineer with backend API + auth experience" | Signal backend capabilities |
| 2 | TypescriptQuest | "OAuth" mentioned once | Expand: "OAuth 2.0 session management, PostgreSQL access patterns, REST API design" | Maximize identity/auth signal |
| 3 | SalonCentric bullets | API integrations lead | Emphasize "authentication flows, API security, credential management for 9+ integrations" | Backend security signal |
| 4 | Skills section | Frontend-heavy list | Add: "OAuth2, OpenID Connect, JWT, REST API authentication patterns" | ATS keyword injection |
| 5 | Projects order | TypescriptQuest first | Keep TypescriptQuest first — auth story is the most relevant backend proof point | Lead with strongest backend signal |

**Realistic outcome even with max optimization:** Andrew likely fails the SCIM/SAML/RBAC technical screen. Not recommended to apply.

---

## F) Interview Stories (if applying anyway)

| # | JD Requirement | Story | S | T | A | R |
|---|---|---|---|---|---|---|
| 1 | REST API integrations + auth | SalonCentric marketplace onboarding | 9+ sellers, custom auth flows, senior eng on paternity leave | Design and maintain integrations, credential management | Built reusable API patterns, managed seller auth + credentials | 4% sales volume lift, zero integration outages under my watch |
| 2 | High-performance backend systems | FullBeauty e-commerce scale | $2.6M/month transactions, 939K monthly unique views | Maintain and extend SFCC frontend + API integrations under peak load | Optimized API calls, maintained uptime during campaigns | Sustained revenue throughput across peak periods |
| 3 | OAuth2 / auth implementation | TypescriptQuest (AI-assisted build) | Solo project, needed multi-user secure auth | Implement OAuth 2.0 from scratch in a production Node.js app | Integrated OAuth, session management, Stripe payment auth | Production app serving real users with working OAuth flow |
| 4 | Scalable backend + cross-team work | SalonCentric API governance | L'Oreal subsidiary, enterprise scale, multiple business units | Translate recurring business issues into scalable long-term solutions | Documented API standards, bridged dev and marketplace ops | Reduced support escalations, contributed to 1.25% sales lift |

**Case study to lead with:** TypescriptQuest OAuth implementation — demonstrates end-to-end understanding of OAuth2 even if enterprise SSO experience is missing. Frame as: "built consumer OAuth; eager to extend into enterprise identity patterns like SAML and SCIM."

**Red-flag questions:**
- *"Tell me about your SCIM experience"* → Be honest: "I haven't implemented SCIM in production. I've worked with OAuth2, REST APIs, and session management extensively. What's the scope of SCIM work in the first 90 days?"
- *"Walk me through your Terraform/K8s setup"* → "I've deployed on DigitalOcean and Netlify. IaC is something I'm actively learning. How much IaC ownership does this role require day-to-day?"

---

## G) Posting Legitimacy

**Assessment: High Confidence** *(posting freshness unverified — batch mode, Playwright not available)*

| Signal | Status | Notes |
|---|---|---|
| JD specificity | ✅ High | SCIM, LDAP, RBAC/ABAC/ReBAC named explicitly — not boilerplate |
| Salary transparency | ✅ Yes | $196k–$294k SF base explicitly stated |
| Requirements realism | ✅ Consistent | All requirements align with a real enterprise identity eng role |
| Reposting pattern | ✅ Clean | URL 5431123004 not found in scan-history.tsv |
| Company hiring signals | ✅ Active | Vercel has 4+ open roles in scan-history from 2026-04-29 |
| Recent layoff/freeze news | ✅ None found | No freeze signals from WebSearch |
| Description quality | ✅ Specific | Concrete tech stack (SCIM, RBAC, Terraform), clear mission |
| Apply button / posting age | ⚠️ Unverified | Batch mode — run `node check-liveness.mjs` to confirm |

**Context:** Vercel is actively hiring across engineering in May 2026 — multiple roles open simultaneously across Growth, AI SDK, Trust & Safety, Backend, and Agent teams. This posting pattern is consistent with a company in active expansion, not a ghost posting operation.

---

## Score Summary

| Dimension | Score |
|-----------|-------|
| Match with CV | 2.5/5 |
| North Star alignment | 1.5/5 |
| Comp | 4.0/5 |
| Cultural signals | 4.5/5 |
| Red flags | -1.0 (4 hard technical blockers: SCIM, LDAP/SAML, RBAC, IaC) |
| **Global** | **2.8/5** |

**RECOMMENDATION: SKIP.** Four core technical requirements are hard blockers that prevent clearing the technical screen regardless of how Andrew frames his narrative. Vercel is a dream company at top-of-market comp — but this specific role requires enterprise identity backend specialization Andrew hasn't built. **[003 Growth](003-vercel-growth-2026-04-29.md) (4.2/5) is still Evaluated and is the right Vercel role to prioritize.**

---

## Keywords Extracted

TypeScript, Node.js, REST APIs, PostgreSQL, OAuth2, OpenID Connect, SCIM, SAML, SSO, LDAP, Active Directory, RBAC, ABAC, identity synchronization, access control, enterprise software, cloud infrastructure, Terraform, Kubernetes, backend engineering, high-performance systems, security architecture, identity provider, JSON, scalability
