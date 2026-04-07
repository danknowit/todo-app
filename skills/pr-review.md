# PR Review

Goal:
Review a pull request diff for the most important correctness issues only.

Rules:
- Focus on real bugs, regressions, and edge cases
- Ignore minor style issues and formatting
- Do not suggest new libraries
- Do not suggest architecture changes unless clearly necessary
- Keep feedback high-signal and minimal
- Prefer reviewing the diff before reading full files

Review for:
- Broken logic
- State update issues
- React hook misuse
- Type safety problems
- Missing edge-case handling
- Incorrect conditions
- Risky async/state interactions
- Small UX issues only if they cause incorrect behavior

Approach:
- First identify what changed
- Then find the top 3–5 most important risks only
- Prefer issues that are concrete and likely real
- Avoid speculative feedback

Output:
- Short summary
- Top issues only
- For each issue:
  - severity
  - file
  - problem
  - why it matters
  - minimal fix

Priority:
bug > regression risk > UX correctness > code quality

Avoid:
- Nitpicks
- Large refactors
- Rewriting code instead of reviewing
- Suggestions without clear evidence
- Formatting-only issues (e.g. trailing whitespace, missing newline at end of file)