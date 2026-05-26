---
term: "RAG (Retrieval-Augmented Generation)"
tldr: "AI searches relevant documents first, then generates its response."
letter: "R"
category: "Workflows"
related: ['embeddings', 'vektordatenbank', 'chunking', 'grounding']
---

## What does this mean?

RAG combines information retrieval with text generation. Instead of relying only on training data, the system first searches a knowledge base and uses the retrieved documents as the basis for its response.

## How it works

1) User asks a question → 2) System searches relevant documents in a vector database → 3) Retrieved texts are passed as context to the LLM → 4) LLM generates a response based on the documents.

## Example

An internal AI assistant that answers questions about company policies by finding and citing the relevant policy documents.

## Why it matters

RAG is the standard approach for equipping LLMs with company-specific knowledge — without expensive fine-tuning.
