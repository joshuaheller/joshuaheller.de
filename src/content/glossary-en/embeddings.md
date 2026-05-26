---
term: "Embeddings"
tldr: "Numerical representations of text that capture semantic meaning."
letter: "E"
category: "Infrastructure"
related: ['vektordatenbank', 'rag', 'chunking']
---

## What does this mean?

Embeddings convert text into numeric vectors that capture semantic meaning. Similar concepts are close together in vector space, regardless of exact wording.

## How it works

A specialized model reads a text and outputs a vector (e.g., 1,536 numbers). "Dog" and "puppy" have similar vectors; "dog" and "car" do not.

## Example

In a RAG pipeline, all documents are stored as embeddings. When a user submits a query, the embedding of the question is compared against the document embeddings.

## Why it matters

Embeddings enable semantic search — the system finds relevant information even when different words are used.
