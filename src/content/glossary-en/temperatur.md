---
term: "Temperature (Sampling)"
tldr: "Controls how creative or predictable AI responses are."
letter: "T"
category: "Models"
related: ['llm', 'prompt', 'halluzination']
---

## What does this mean?

Temperature controls how "random" text generation is. Low temperature (0) = deterministic and focused. High temperature (1+) = more creative and variable.

## How it works

For each generated token, the model selects from a probability distribution. Temperature 0 always takes the most probable word; higher values increase the chance of surprising alternatives.

## Example

For contract analysis: low temperature (precise). For creative marketing copy: higher temperature (more variation).

## Why it matters

Getting the temperature setting right is critical — too high leads to nonsense, too low leads to rigid repetition.
