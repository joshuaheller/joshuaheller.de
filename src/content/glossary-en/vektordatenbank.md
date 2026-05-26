---
term: "Vector Database"
tldr: "A database optimized for fast similarity search."
letter: "V"
category: "Infrastructure"
related: ['embeddings', 'rag', 'chunking']
---

## What does this mean?

A vector database stores embeddings and enables extremely fast similarity searches. It is the central storage system for RAG applications and semantic search.

## How it works

Texts are stored as embedding vectors. For a search query, the database calculates which stored vectors are most similar to the query — in milliseconds.

## Example

Pinecone, Weaviate, or Qdrant as the vector database for an enterprise chatbot that can search thousands of internal documents.

## Why it matters

Without a vector database, RAG wouldn't be possible. They're the infrastructure behind every AI that works with proprietary data.
