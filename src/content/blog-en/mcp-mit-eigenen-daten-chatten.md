---
title: 'I Connected Google Analytics to My IDE – and Saw Where AI Is Heading'
description: 'One afternoon with the Model Context Protocol (MCP) changed how I think about AI consulting. Why "tell the AI what you want – not how" is more than a slogan, and what it means for founders and advisors.'
pubDate: 2026-09-16
category: 'Tools & Stacks'
readingTime: '8 min.'
heroImage: 'mcp-mit-eigenen-daten-chatten.png'
draft: false
---

> **TL;DR**
> - I connected Google Analytics to my development environment via the Model Context Protocol (MCP) and now just ask for reports in plain language – instead of clicking through the GA4 UI.
> - The real aha moment wasn't the report, but the thought right after: we increasingly tell AI *what* we want. The *how* matters less and less.
> - In the months since my experiment, MCP has become a vendor-neutral industry standard – carried by OpenAI, Google, Microsoft and the Linux Foundation. For founders and advisors, that shifts where the real value sits.

## An afternoon that stuck

I like Google Analytics. The depth of data is great. But I just can't get on with the UI – and building custom reports is honestly a nightmare. So one afternoon I sat down with the **Model Context Protocol (MCP)** and connected a Google Analytics server to my IDE (in my case: Cursor).

After that I simply typed:

> "Show me traffic since April for the DACH region and look into the traffic sources for each of the three countries."

And the agent handed me a finished report. With real GA4 data. Without a single click through menus. I sat there thinking: *This is it. This is how I want to work with data.*

The dream of chatting with your own data isn't new. But in reality it was almost always uneconomical: outdated or poorly documented interfaces, or APIs so extensive it takes weeks to understand them. MCP removes exactly that hurdle. It's a bit like a USB-C connector for AI: one standard that data sources plug into, instead of building a bespoke integration for each.

The technical long-form – how MCP works in detail, the current 2026 numbers, and what to watch out for on security – I wrote up [over on the TAISC blog](https://www.theaisoftwarecompany.com/en/blog/model-context-protocol-mcp/). Here I want to write about the part that, as a founder, I can't shake.

## The real aha moment came afterwards

The report was cool. But what stuck was a thought that has stayed with me since:

**We increasingly tell AI *what* we want. The *how* is becoming irrelevant.**

In the past, "I want this analysis" meant: read the docs, build the query, configure the report, adjust the format. A pile of steps that have nothing to do with my actual question. With MCP, that in-between shrinks. I state the outcome – the path there is the agent's job.

That sounds harmless, but it's a shift I take seriously. When the "how" becomes a commodity, value moves to where it always belonged: to the right question. To a clean data foundation. To the ability to judge a result, not just produce it.

## What this means for advisors and founders

Part of how I make my living is advising companies on AI. You might think a standard that makes integrations trivial devalues that work. I see the opposite – but the emphasis moves:

- **The data foundation matters more, not less.** MCP provides access. But if the data is messy, incomplete or lacks context, the nicest agent produces nonsense – just faster. That's why I've argued for years that [solid retrieval and data work](/en/blog/grep-statt-vektor-suche-agentic-search/) makes the difference, not the next model.
- **Judgment beats knowing which button to click.** If all you know is where to click in tool X, you're replaceable. If you can judge whether a result is right and what it means, you become more valuable.
- **Security becomes a consulting service.** A universal connector to your own systems is also a universal entry point. Tool poisoning, over-broad permissions, blind auto-execution – these are real risks. The part of the work that means "let's do this safely and with judgment" only grows.

## Why I'm writing this now

When I played with MCP in mid-2025, it was an interesting Anthropic project. I didn't expect how fast it would become a standard. Since then OpenAI, Google and Microsoft have adopted it, there's an official server registry, and since December 2025 MCP is developed vendor-neutrally under the Linux Foundation – in the same league as Kubernetes or Node.js.

To me that's a nice example of something I keep seeing in projects: the tools change at record speed. What doesn't change is the core of the work. Even with MCP, I start with the process and the data first, not the shiny new tool – the same stance I took away from [15 projects](/en/blog/ki-readiness-15-projekte-gelernt/).

If there's one thing I take from that afternoon, it's this: the art isn't the connecting. It's knowing which question is worth asking – and whether you can trust the answer.

Want to talk about AI, data, and how to use it sensibly (and safely) in your own company? [Let's have an informal chat.](/en/contact/)
