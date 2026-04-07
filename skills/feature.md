# Add Feature

Goal:
Add the requested feature in the simplest possible way.

Rules:
- Keep existing architecture
- Do not add new libraries
- Avoid creating new files unless absolutely necessary
- Prefer deriving state over introducing new state
- Keep changes minimal and localized

Approach:
- First identify where the feature logically belongs
- Reuse existing components and hooks
- Implement incrementally, not all at once

Output:
- Clean, readable code
- No unnecessary abstractions

Avoid:
- Overengineering
- Adding unnecessary abstractions
- Creating new hooks without clear need