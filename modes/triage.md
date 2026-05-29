# Mode: triage — Quick Fit Check (Low Token)

Fast gut-check on pending URLs. No full evaluation, no PDF, no tracker update, no claude -p workers. Goal: decide which offers are worth spending full pipeline tokens on.

## When to use

- Token quota is low and you have multiple pending URLs
- You want a fast priority ranking before committing to full evals
- A JD is unknown and you need a 30-second read on fit

## Input

1. **No args:** Read `data/pipeline.md` — triage all URLs not yet in the Processed section
2. **URLs as args:** Triage only the provided URLs (space or newline separated)
3. **After batch failures:** Triage the failed IDs from `batch/batch-state.tsv`

## Steps

### Step 1 — Collect URLs

If no args: read `data/pipeline.md`, extract all pending URLs (lines before `## Processed` that start with `http`).
If args: use the provided URLs directly.

### Step 2 — Fetch JDs in parallel

For each URL: WebFetch to extract role title, key requirements (top 5), tech stack, seniority, location, comp.

If WebFetch returns no useful content (page requires auth, JS-heavy, or blank):
- Mark as `CHECK JD` — note the failure reason
- Don't skip silently

### Step 3 — Triage each offer

Read `cv.md` + `modes/_profile.md`. For each offer, assess:

| Signal | What to check |
|--------|--------------|
| Archetype match | Does the role map to one of the user's target archetypes? |
| Tech overlap | How many of the JD's required techs appear in cv.md? |
| Year requirements | Any hard year gaps (e.g. "7+ yrs React")? Flag them. |
| Location fit | Remote / NYC hybrid / onsite — score per _profile.md location policy |
| Comp fit | If disclosed, does it land in the user's target range? |
| Domain | Is this a domain the user has history or genuine interest in? |
| Red flags | Requires relocation, sponsorship, Java-only, etc. |

**Do NOT produce a full A-G report.** This is a 5-line read per offer, not a deep dive.

### Step 4 — Output triage table

Print one block per offer:

```
## {Company} — {Role}
**Verdict:** FULL EVAL | SKIP | CHECK JD
**Est. score:** {X.X–X.X}/5
**Why:** {2-3 sentences: what matches, what's the main gap, why this verdict}
**Token cost:** ~{low|medium|high} (PDF: yes/no)
```

Then print a priority ranking at the end:

```
## Priority Order
1. {Company} — {Role} (est. {score}, {one-line reason})
2. ...
SKIP: {Company} — {Role} ({one-line reason})
CHECK JD: {Company} — {Role} (JD not accessible)
```

## Rules

- NEVER update applications.md or write any reports
- NEVER generate a PDF
- NEVER spin up a claude -p worker
- If a JD fails to load, say so — don't guess the role content
- Est. score range should be honest: if you can't tell, say "3.0–4.5 (wide range — JD too vague)"
- Token cost hint: low = eval only, medium = eval + PDF, high = eval + PDF + deep research
- Keep each offer block under 6 lines — this is triage, not analysis
