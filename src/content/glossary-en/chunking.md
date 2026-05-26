---
term: "Chunking"
tldr: "Breaking large documents into smaller, meaningful sections."
letter: "C"
category: "Workflows"
related: ['rag', 'embeddings', 'vektordatenbank', 'token-kontextfenster']
---

## What does this mean?

Chunking breaks long texts into smaller pieces (chunks) so they can be stored as embeddings and retrieved effectively. Chunk size directly affects search quality.

## How it works

A 100-page manual is split into paragraphs or thematic blocks of 200–500 tokens each. Each chunk is stored as its own embedding.

## Example

A customer service handbook is broken into individual FAQ entries so the system can find exactly the relevant section when a question is asked.

## Why it matters

Good chunking determines the quality of RAG systems. Chunks that are too large dilute the search; chunks that are too small lose context.
