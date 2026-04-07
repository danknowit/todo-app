# Code Review

Goal:
Review the code for clarity, simplicity, and correctness.

Rules:
- Do not rewrite working code without a clear reason
- Do not suggest new libraries unless absolutely necessary
- Prefer simpler solutions over clever ones
- Focus on practical improvements
- Keep the existing architecture unless there is a real problem

Review for:
- Bugs or edge cases
- Unnecessary complexity
- Readability and naming
- Repeated logic
- Small UX issues
- Type safety

Approach:
- First identify what is already good
- Then point out the most important issues only
- Prefer high-signal feedback over lots of minor comments

Output:
- Short summary
- Top 3–5 most important issues only
- Prioritized by impact (bug > UX > code quality)
- Minimal, actionable suggestions

Avoid:
- Nitpicking minor style issues
- Suggesting large refactors unless necessary
- Rewriting code instead of reviewing