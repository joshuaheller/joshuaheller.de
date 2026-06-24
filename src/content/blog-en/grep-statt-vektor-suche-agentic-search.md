---
title: 'AI Agents: grep Instead of a Vector Database'
description: 'A new paper shows: when agents search the raw corpus directly with grep instead of embeddings, accuracy goes up and cost goes down. What that means for your RAG architecture.'
pubDate: 2026-06-03
category: 'AI Engineering'
readingTime: '12 min.'
heroImage: 'blog-dci-grep-search.png'
draft: false
---

> **TL;DR**
> - A new paper ("Beyond Semantic Similarity") shows: let an agent search the raw corpus directly with `grep` and `find` — no embeddings, no vector index — and it beats strong RAG baselines.
> - Same Claude Sonnet 4.6, only the retrieval swapped: accuracy on BrowseComp-Plus from 69% to 80%, cost down 29%.
> - The real insight: the bottleneck isn't the retriever, it's the interface through which the agent sees the corpus.

## The Problem with Classic RAG

Almost every enterprise AI application today follows the same pattern: documents get chunked, turned into embeddings, dropped into a vector database — and at runtime the model pulls the top-k most similar hits. That's efficient and perfectly fine for large, static corpora.

The catch: this interface compresses all corpus access into **a single similarity step** before any real reasoning begins. Whatever the vector search filters out early can't be recovered by even the strongest downstream model. Exact matches ("this specific contract clause"), combining weak clues, or checking the local context around a hit — all of that is hard to express with a pure top-k retriever.

## What the Paper Proposes: Direct Corpus Interaction

The idea behind **Direct Corpus Interaction (DCI)** is almost defiantly simple: let the agent search the raw corpus directly — with the tools every shell already has. `grep` and `rg` for exact and regex matches, `find` and `glob` for navigation, targeted file reads and small scripts for local context.

No embedding model. No vector index. No retrieval API. Semantic interpretation is no longer done by an upstream index but by the agent itself. And because these operations compose, real expressive power emerges:

- Enforce exact constraints: `grep 'foo' file | grep 'bar'`
- Combine weak clues: `find . | grep 'report' | grep '2024'`
- Verify hypotheses against local context: `grep -n 'keyword' file | head`

The entire corpus stays available at all times — instead of just the thin slice the retriever lets through.

## The Numbers

It was tested against strong sparse, dense, and reranking baselines. The most practically relevant results:

| Setup | Result | Delta |
| --- | --- | --- |
| BrowseComp-Plus (same Sonnet 4.6, retriever → DCI) | 69.0% → 80.0% accuracy | +11 points |
| Same task, cost | $1,440 → $1,016 | −29.4% |
| Multi-hop QA (DCI + Claude Code) | 83.0 avg accuracy | +30.7 vs. best retrieval baseline |
| IR ranking | 68.5 avg NDCG@10 | +21.5 vs. best baseline |

What stands out is the combination: **higher accuracy at lower cost**. That's rare — usually you buy quality with more expensive models or more tokens.

## Why It Works: "Interface Resolution"

The obvious explanation would be that DCI simply finds more of the right documents. But that's not it. The authors show that DCI often wins even when the retriever had already surfaced the relevant documents.

The actual lever is what they call **"retrieval interface resolution"**: the ability to operate on units *smaller* than whole documents. A retriever returns a document or a chunk. An agent with `grep` can zoom in on the exact line, the surrounding context, the precise number — and refine its search from there. The biggest gains come from turning surfaced evidence into finer-grained local search and verification steps.

Put differently: the stronger the models get, the more the bottleneck shifts from the *retriever* to the *interface*. A compressed similarity index becomes a brake the moment the model can search like a human researcher — forming hypotheses, testing exact patterns, reading local context, refining.

## What This Means for Your Architecture

No reason to throw out every vector database now. For large, static corpora, dense and sparse retrieval remain scalable and strong. But they're just *one* point in the design space — not the only answer.

Three situations where DCI is particularly interesting:

- **Local, heterogeneous corpora** that change constantly. No re-indexing, no embedding pipeline — the agent works directly on the files.
- **Tasks with exact constraints**: specific IDs, clauses, dates, code locations. Exactly where semantic similarity often fails.
- **Agentic, multi-step research** where you refine mid-flight instead of pulling top-k once.

Also worth noting: this works with standard tools a coding agent like Claude Code already has. The retrieval system here is no longer a separate piece of infrastructure — it's the shell.

## What You Can Do Now

1. Look at your current RAG pipeline: how often does it fail on *exact* requirements rather than topical similarity?
2. Check whether your corpus is large-and-static (vector DB still makes sense) or local-and-living (DCI is worth a test).
3. Before you build the next embedding pipeline: test how far an agent with `grep` and file reads gets on your real data.

Exactly these architecture decisions — and shipping them straight into your codebase — are the core of the [Forward Deployed Engineer model](/en/forward-deployed-engineer): build close to the real use case instead of advising from the outside.
