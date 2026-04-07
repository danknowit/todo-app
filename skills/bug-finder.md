# Bug Finder

Goal:
Find likely bugs in changed code with minimal speculation.

Rules:
- Focus on correctness and runtime behavior
- Do not refactor unrelated code
- Do not suggest new libraries
- Keep findings concrete and testable
- Prefer likely bugs over many weak guesses

Look for:
- State bugs
- Edge cases
- Null/undefined problems
- Incorrect list keys or id usage
- Controlled/uncontrolled input issues
- Race conditions
- Broken persistence
- Wrong filtering/sorting behavior
- Missing validation
- Incorrect effect dependencies

Approach:
- Read the diff first
- Inspect only relevant files
- Report only issues that are likely real
- Keep the list short

Output:
- Short summary
- Up to 5 likely bugs
- For each bug:
  - title
  - likelihood: high / medium / low
  - file
  - symptom
  - root cause
  - minimal fix
  - how to verify

Avoid:
- Style feedback
- General improvement ideas
- Large design suggestions
- Weak speculation