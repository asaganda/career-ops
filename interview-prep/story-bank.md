# Story Bank — Master STAR+R Stories

This file accumulates your best interview stories over time. Each evaluation (Block F) adds new stories here. Instead of memorizing 100 answers, maintain 5-10 deep stories that you can bend to answer almost any behavioral question.

## How it works

1. Every time `/career-ops oferta` generates Block F (Interview Plan), new STAR+R stories get appended here
2. Before your next interview, review this file — your stories are already organized by theme
3. The "Big Three" questions can be answered with stories from this bank:
   - "Tell me about yourself" → combine 2-3 stories into a narrative
   - "Tell me about your most impactful project" → pick your highest-impact story
   - "Tell me about a conflict you resolved" → find a story with a Reflection

## Stories

<!-- Format:
### [Theme] Story Title
**Source:** Report #NNN — Company — Role
**S:** ...
**T:** ...
**A:** ...
**R:** ...
**Reflection:** ...
**Best for questions about:** ...
-->

---

### [A/B Testing] SalonCentric Experimentation Program
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** L'Oreal subsidiary running live web + mobile product for professional beauty advisors. No structured A/B testing program existed.
**T:** Own and run an A/B testing infrastructure using Optimizely to drive conversion and engagement improvements.
**A:** Built test variants (JS + CSS), wired them into Optimizely, ran cross-browser + cross-device QA on every deploy, iterated based on results. Structured naming conventions and result review cadence.
**R:** 20% conversion rate increase (2023); 124% user engagement lift (2024).
**Reflection:** Running tests is only half the job. Structuring the program — naming conventions, test ownership, review cadence — is what makes it sustainable. Without that, you have individual wins but no compounding system.
**Best for questions about:** impact/metrics, owning a system end-to-end, growth/experimentation, A/B testing, conversion optimization, process improvement.

---

### [CMS / Component Architecture] FullBeauty Multi-Brand Component Library
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** FullBeauty Brands with 5+ brand sites running on Salesforce Commerce Cloud. Each brand had design variation but shared infrastructure.
**T:** Build and maintain a component library within a CMS-driven template system, pixel-perfect from design files, shared across brands.
**A:** Built reusable HTML/CSS/JS components within SFCC's template architecture. Worked with design on cross-brand consistency. Optimized for reuse — any shortcut shows up in 5 places.
**R:** $2.6M average monthly transactions and 939K unique page views throughout 2021.
**Reflection:** Building for reuse inside a CMS forces better component discipline than greenfield. Shortcuts compound across every page that uses the component.
**Best for questions about:** component architecture, CMS-driven development, design-engineering collaboration, scale.

---

### [Performance] FullBeauty High-Traffic Page Performance
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** FullBeauty e-commerce sites at 939K unique page views/month — performance directly affected revenue.
**T:** Maintain page performance on high-traffic storefronts while delivering visually rich brand experiences.
**A:** Optimized image handling, DOM size, and script loading. Negotiated with design on visual richness vs. load speed trade-offs — framed in terms of business cost.
**R:** Stable $2.6M/mo transaction volume throughout 2021 with no major performance regressions.
**Reflection:** Performance is a stakeholder conversation before it's a technical problem. Showing the business cost of the alternative is what moves design teams.
**Best for questions about:** web performance, Core Web Vitals, cross-functional negotiation, balancing design vs. technical constraints.

---

### [API Integration] SalonCentric Marketplace Onboarding
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** SalonCentric marketplace needed to onboard 9 third-party sellers, each with different API structures (Shopify, Magento, custom).
**T:** Own the frontend integration layer — build, document, and support each integration end-to-end.
**A:** Built frontend hooks into each API, wrote clear documentation for each seller, became the primary contact. Covered the senior integration engineer during paternity leave.
**R:** 4% sales volume increase (2023); 1.25% additional lift (2024). Held down senior-level responsibilities solo.
**Reflection:** Documentation written for the next engineer — not just yourself — is what gets you trusted with more ownership.
**Best for questions about:** ownership, API integrations, documentation, stepping up, reliability under pressure.

---

### [Accessibility] FullBeauty WCAG AA Program
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** FullBeauty had 5+ brand sites with no formal accessibility program — all at WCAG level A.
**T:** Get all brand sites to WCAG AA compliance.
**A:** Audited all sites. Took edX web accessibility certification. Systematically remediated shared components first for maximum coverage per fix.
**R:** WCAG A → AA across all brands.
**Reflection:** Accessibility built into the component library once pays dividends across every page. Retrofitting is 10x more expensive than building it in upfront.
**Best for questions about:** accessibility, WCAG, proactive problem-solving, cross-cutting improvements.

---

### [Full-Stack Ownership] TypescriptQuest End-to-End Launch
**Source:** Report #040 — Buffer — Senior Growth Engineer
**S:** Wanted to validate a gamified TypeScript learning product and own the full growth loop.
**T:** Design, build, ship, and maintain the entire product solo -- product, payments, marketing site, conversion flow.
**A:** Built React + Node + PostgreSQL + Stripe + OAuth from scratch using Claude Code as AI coding agent. Handled product, engineering, and growth infrastructure as one person.
**R:** Live production app with paying users. Full ownership of acquisition, conversion, and retention in one project.
**Reflection:** Would have shipped a lighter MVP first to validate before adding Stripe. Bias toward completeness can slow down early learning loops.
**Best for questions about:** end-to-end ownership, full-stack ability, startup mentality, AI-augmented development, product sense.

---

### [Growth Engineering] TypescriptQuest AI-Augmented Development
**Source:** Report #040 — Buffer — Senior Growth Engineer
**S:** Wanted to build AI-native apps using latest APIs as part of building production portfolio.
**T:** Ship real products using AI tools (Claude Code, GPT-4.1) not just as helpers but as core architecture decisions.
**A:** Used Claude Code as AI coding agent for TypescriptQuest; Codex + GPT-4.1 vision API for CanIParkHere parking sign analysis prototype.
**R:** Two live/shipped projects demonstrating daily AI tool usage in real production contexts.
**Reflection:** Build for model replaceability -- AI tooling moves fast and the model you ship with today may not be the best choice in 6 months. Abstract the integration layer.
**Best for questions about:** AI features, AI tooling, building with LLMs, keeping up with fast-moving technology.

---

### [Cross-functional] SalonCentric Stakeholder Bridge
**Source:** Report #032 — Descript — Senior Frontend Engineer, Marketing Web
**S:** Recurring friction between marketplace business ops and development partners at SalonCentric — issues escalating instead of being resolved at root cause.
**T:** Be the translation layer between business and engineering to reduce recurring escalations.
**A:** Identified recurring patterns, proposed scalable technical solutions, ran alignment sessions between teams.
**R:** Reduced recurring escalations; smoother eng-business collaboration.
**Reflection:** The highest-leverage thing a senior engineer does is eliminate the rework caused by misaligned expectations upstream. Every hour spent translating saves ten hours of back-and-forth.
**Best for questions about:** cross-functional collaboration, communication, senior impact, stakeholder management.
