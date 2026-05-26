---
term: "Token & Context Window"
tldr: "The unit of measurement for text in AI models and their processing limit."
letter: "T"
category: "Models"
related: ['llm', 'prompt', 'chunking']
---

## What does this mean?

Tokens are the smallest text units processed by an LLM — roughly ¾ of a word. The context window defines how many tokens the model can "see" at once.

## How it works

Every text is broken into tokens. A model with a 128K context window can process roughly 100,000 words simultaneously — about the length of a full novel.

## Example

If you ask a model to analyze a 50-page document, it must fit within the context window. If it's too large, it must be split up (→ Chunking).

## Why it matters

The context window determines how much information a model can consider simultaneously — and directly affects both cost and quality.
