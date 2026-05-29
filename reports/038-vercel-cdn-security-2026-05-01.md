# Evaluación: Vercel — Software Engineer, CDN Security

**Date:** 2026-05-01
**Archetype:** Backend Infrastructure / Network Security Engineer (outside Andrew's target archetypes)
**Score:** 1.8/5
**Legitimacy:** High Confidence
**URL:** https://job-boards.greenhouse.io/vercel/jobs/5473266004
**PDF:** ❌ (not generated — SKIP recommendation)
**Batch ID:** 6

---

## A) Role Summary

| Field | Detail |
|-------|--------|
| **Archetype** | Backend Infrastructure / Network Security Engineer |
| **Domain** | CDN, DDoS Mitigation, Bot Detection, Network Security |
| **Function** | Platform Engineering / Security |
| **Seniority** | Senior (3+ years DoS experience required; $187k-$280k range signals senior) |
| **Remote** | Remote US — anchor days Mon/Tue/Fri if near SF, NY, London, or Berlin |
| **Reports to** | Head of CDN Product Area |
| **TL;DR** | Build and operate Vercel's edge firewall protecting millions of sites. Requires deep DoS/DDoS experience, Go or Lua, and distributed systems knowledge. Fundamentally a backend/infra/network security role with no frontend surface area. |

**Archetype note:** This role does not map to any of Andrew's 5 target archetypes (Frontend Engineer, Growth Engineer, UI Developer, Full Stack, Technical Support). It's a backend network security role in a completely different engineering discipline.

---

## B) Match with CV

| JD Requirement | Andrew's CV | Gap Level |
|----------------|-------------|-----------|
| 3+ years handling DoS/DDoS attacks | ❌ Zero security experience on record | **Hard blocker** |
| Proficiency in Go or Lua | ❌ Not in skills list (JS, TS, Python, SQL) | **Hard blocker** |
| Distributed systems experience | ❌ No distributed systems work documented | **Hard blocker** |
| Web server & network protocols (HTTP, TCP) | ⚠️ Knows HTTP from frontend API integration work; not at infra/network level | Hard blocker (surface-level knowledge ≠ requirement) |
| Advanced bot detection | ❌ No experience | **Hard blocker** |
| Observability / monitoring systems | ⚠️ Optimizely A/B testing is adjacent but wrong domain | Gap |
| Build scalable, low-latency firewall systems | ❌ No relevant experience | **Hard blocker** |
| Traffic pattern analysis | ❌ No security traffic analysis experience | **Hard blocker** |

**Gap count: 6 hard blockers, 2 weak adjacencies.**

### Gap Mitigation Analysis

All 6 hard blockers are domain-level mismatches, not just skill-level. There is no adjacent experience to draw from:

1. **DoS/DDoS experience** — Hard blocker. Cannot demonstrate adjacent experience. No mitigation path without 1-2 years in security engineering first.
2. **Go/Lua proficiency** — Hard blocker. Andrew could learn Go, but the JD implies production experience building at scale, not bootcamp-level fluency. No quick mitigation.
3. **Distributed systems** — Hard blocker. Andrew's work is client-side; even TypescriptQuest is a single-server app. No mitigation.
4. **Network protocols at infra level** — Hard blocker. Knowing how to call APIs is not the same as owning web server and TCP/IP behavior in a CDN context. No mitigation.
5. **Bot detection** — Hard blocker. Optimizely is traffic shaping, not bot classification. No legitimate framing available.
6. **Low-latency firewall engineering** — Hard blocker. No portfolio project touches this. No mitigation.

**Bottom line:** There is no version of Andrew's resume that credibly competes for this role. The overlap is cosmetic (both involve HTTP). The role requires a different engineering discipline.

---

## C) Level and Strategy

**Level detected in JD:** Senior Infrastructure/Security Engineer — 3+ years *specific* DoS experience (not general SWE years), implies total 5-7+ years overall.

**Andrew's natural level:** Mid-Senior Frontend Engineer with strong e-commerce and A/B testing depth.

**Applying here would be:** Submitting a frontend portfolio for a network security position. Recruiters would not advance this application past screening.

**"Vender senior sin mentir" plan:** Not applicable — the mismatch is disciplinary, not seniority-based. There is no framing that turns frontend A/B testing experience into DoS mitigation experience.

**"If downleveled" plan:** Not applicable — the role doesn't exist at a level Andrew could fill.

---

## D) Comp and Market

| Metric | Data | Source |
|--------|------|--------|
| Listed range | $187,000–$280,000 (remote US) | Job posting |
| Vercel SWE median (all roles) | $220,000 total comp | [Levels.fyi](https://www.levels.fyi/companies/vercel/salaries/software-engineer) |
| Vercel SWE range (Levels.fyi) | $165,000–$316,000+ | Levels.fyi |
| Vercel SWE median (Glassdoor) | ~$149,000 base | [Glassdoor](https://www.glassdoor.com/Salary/Vercel-Software-Engineer-Salaries-E6510369_D_KO7,24.htm) |
| Andrew's target range | $120k–$160k | profile.yml |

**Comp score: 5/5** — This range is dramatically above Andrew's targets. However, it's irrelevant given zero match.

**Context:** The comp reflects the specialized infrastructure/security premium, not general SWE rates. Andrew's frontend market is $120k–$160k in the NY metro area. This $187k–$280k range is for a different discipline entirely.

**Company financial health signals:**
- Vercel replaced its 10-person sales team with AI in January 2026 — signals aggressive cost optimization
- Blind discussions reference layoffs (March 2026 thread)
- April 2026 security incident (possibly driving urgency behind this CDN Security hire)
- Mixed Glassdoor: "management is a disaster," high attrition, but engineering culture praised

---

## E) Personalization Plan

**Not recommended.** No CV personalization will bridge a disciplinary mismatch of this magnitude.

If Andrew were hypothetically applying (against recommendation):

| # | Section | Current | Change needed | Why |
|---|---------|---------|---------------|-----|
| 1 | Skills | JS/TS/React | Would need to add Go/Lua | Missing language hard-requirement |
| 2 | Summary | Frontend focus | Would need security engineering narrative | Wrong discipline framing |
| 3 | Experience | A/B testing, API integrations | Would need DDoS/security incident work | No equivalent exists in CV |
| 4 | Projects | TypescriptQuest, CanIParkHere | Would need a network security or CDN project | No such project exists |
| 5 | Skills | Optimizely, Tailwind, SFCC | Would need: Go, Lua, iptables, BPF, WAF | Different skillset entirely |

**This table illustrates the problem, not a solution.**

---

## F) Interview Prep

**Not applicable.** Andrew would not reach a screening call for this role.

For reference: the STAR stories that would be required for this role (DDoS incident response, firewall rule architecture, traffic anomaly detection, Go/Lua production systems) do not exist in Andrew's story bank.

---

## G) Posting Legitimacy

**Assessment: High Confidence (active, real opening)**

| Signal | Assessment |
|--------|------------|
| JD specificity | ✅ Highly specific — exact requirements (Go/Lua, 3yr DoS), realistic scope |
| Salary transparency | ✅ Full range disclosed ($187k–$280k) |
| Boilerplate ratio | ✅ Low — technical requirements are concrete and role-specific |
| Reposting detection | ✅ No prior match in scan-history.tsv for this job ID (5473266004) |
| Company hiring signals | ⚠️ Layoff discussions on Blind (March 2026), but security team hiring likely accelerated post-April 2026 incident |
| Posting freshness | Unverified (batch mode — Playwright not available) |
| Vercel careers page match | ✅ URL confirmed active via WebFetch |

**Context notes:** The April 2026 Vercel security incident (Hacker News: ycombinator.com/item?id=47824463) directly motivates this hire. CDN Security is likely a priority investment area. This posting is almost certainly active and funded.

---

## Score Summary

| Dimension | Score | Notes |
|-----------|-------|-------|
| Match with CV | 1/5 | 6 hard blockers, 0 real adjacencies |
| Alignment with Target Archetypes | 1/5 | Outside all 5 of Andrew's archetypes |
| Comp | 5/5 | $187k–$280k (irrelevant — no match) |
| Cultural signals | 3/5 | Engineering-driven but management issues, layoff discussions |
| Red flags | -1 | High attrition, recent layoffs, April 2026 security incident |
| **Global** | **1.8/5** | **DO NOT APPLY** |

---

## Recommendation

**SKIP.** This is a disciplinary mismatch, not a seniority or skill-gap issue. Submitting this application would:
1. Waste recruiter time (Vercel's and Andrew's)
2. Add noise to Andrew's pipeline with a guaranteed rejection
3. Risk leaving a poor impression at Vercel if applying simultaneously to other Vercel roles that do fit (note: 4 other Vercel reports generated in this batch)

**Vercel as a company is worth watching for frontend/growth roles** — they are a developer tools company that cares deeply about UI/DX, and they hire growth engineers. CDN Security is not one of those.

---

## Keywords Extracted

cdn security, ddos mitigation, bot detection, distributed systems, go programming, lua, network protocols, http, tcp, firewall, traffic analysis, observability, edge network, web security, low latency systems, denial-of-service, scalable systems, vercel edge
