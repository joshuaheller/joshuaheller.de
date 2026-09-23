---
title: 'Build or Buy: What I Actually Tell Clients, After a Dozen-Plus Projects'
description: "Almost every inquiry now starts with \"can't we just build this ourselves?\". My honest staged model for the build-or-buy question, illustrated with a real client project."
pubDate: 2026-09-23
category: 'AI Strategy'
readingTime: '7 min.'
heroImage: 'build-or-buy-stufenmodell.png'
draft: false
---

> **TL;DR**
> - "Can't we just build this ourselves?" comes up in almost every intro call now, since tools like Lovable or Claude Code made that technically possible.
> - Buildability was never the right question. I think in three stages: extend an existing solution, build one part yourself, build the whole thing yourself. Most projects never need stage three.
> - Using a real heat-pump installer project as the example, I show what this decision actually looks like in practice, including the point where I myself used to build too much, too early.

## The question that changed

Two or three years ago, clients asked me: "can you build this for us?" Today the question is almost always different: "we already built a prototype with Claude or Lovable, do we even still need you?" That's a good sign, it means people are seriously experimenting with AI tools. But it also shifts what I actually talk about in intro calls: no longer "whether" something can be built, but "whether" and "how much" should be built at all.

My honest answer has condensed, over a good dozen projects, into a staged model I now use in almost every discovery conversation. For the numbers and studies behind it, Gartner data on software purchase regret, the EU Data Act, current data-sovereignty surveys in the German Mittelstand, I'll point you to the [more detailed post on theaisoftwarecompany.com](https://www.theaisoftwarecompany.com/en/blog/build-or-buy-softwareentscheidung/). Here, I'd rather tell you what this decision actually feels like in real projects, including the point where I used to think too big, too fast, myself.

## Three stages I recommend in almost this order, every time

1. **Extend an existing solution.** Take a standard tool that covers 80% of the need, and close the gaps with automation, often n8n plus a bit of AI is enough to remove the manual grunt work.
2. **Build one part yourself.** A dashboard or tool that plugs into existing systems (CRM, ERP, invoicing) and delivers a better solution for exactly the one process that's genuinely unique.
3. **Build the whole thing yourself.** Your own database, frontend, backend as the system of record. This is the one I recommend least often, and never as a first step.

The mistake I see most, in clients and in my earlier self, is jumping straight to stage three because it feels like the "real," the ambitious solution. Buildability was never the problem. The problem is what happens in month seven, once the process changes and nobody has the capacity left to maintain the in-house system.

## What that looked like on a real project

The best example is a heat-pump installer I've [written about at length](/en/blog/wmk-kundenprojekt-lehren/). The original request was a small n8n automation, essentially stage one. In conversation it quickly became clear that the real bottleneck was assigning jobs to subcontractors, a process specific enough to the company's actual workflow that no off-the-shelf tool really fit. In under two months we ended up with a custom order-management tool that more than a dozen employees now use every day, effectively stage three, but with a clean justification: the process really was unique enough, and the client knew exactly what he wanted from day one.

The contrast is the projects I've talked down or scaled back: the request was "we want our own CRM," but the underlying data structure was completely standard. No differentiation, no specifics, just a wish to have something "of our own." In those cases I recommended stage one, even though that meant less project volume for me as the person doing the work. Honestly, that's the part of my job I'm proudest of: talking clients out of a project that's too big, not into one.

## What I had to correct in myself

When I started out a few years ago, my first reaction to almost every inquiry was: build it. That wasn't bad advice from anyone else, it's simply the part of the work I enjoy most. The expensive lesson was that a technically elegant tool a client can't or won't maintain afterward ends up just as unused as a wrongly rolled-out SaaS license. I saw this from the other direction when I helped a client run a [security review on a self-built intranet](/en/blog/vibe-coding-security-check-kunde/) that had been built with no-code tools and no developer team: technically impressive, but missing the hardening that production use actually requires.

Since then, I actively push back against my own instinct to build, in every intro call: wouldn't an existing solution plus some automation genuinely be enough? Only when the honest answer is no do we move a stage further.

## My rule of thumb for stage two vs. stage three

The line that helps me most: how standardized is the data? In a CRM, contact records, deal stages and activities look nearly identical across industries, a full custom build rarely pays off there. In an order-management system for a niche industry with its own workflows, roles, and complaint-handling paths, that's different, there the data model itself becomes a competitive advantage.

If you're currently weighing whether your next tool should be an existing solution, a partial build, or a full custom build: [let's talk, no obligation, for 30 minutes](/en/contact/). I'll tell you honestly if I think stage one is enough for you, even if that means less work for me.
