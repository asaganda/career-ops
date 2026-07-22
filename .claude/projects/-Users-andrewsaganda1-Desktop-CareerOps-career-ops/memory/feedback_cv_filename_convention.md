---
name: feedback_cv_filename_convention
description: CV output files must include Andrew's name in the filename, following the cv-andrew-{company}-{date} pattern
metadata:
  type: feedback
---

Always name CV output files as `cv-andrew-{company}-{date}.html` and `cv-andrew-{company}-{date}.pdf`.

**Why:** Previous CVs followed this convention (e.g. `cv-andrew-vercel-backend-2026-05-01.pdf`). Andrew noticed when the name was missing.

**How to apply:** Every time a CV HTML and PDF is generated, use `cv-andrew-{company-slug}-{YYYY-MM-DD}` as the base filename. Never use a number-only prefix or omit the name.
