---
title: 'You Build It, You Run It: Why My Job Doesn’t End at Go-Live'
description: 'Plenty of people build an MVP, hand it over and disappear. I don’t. What actually happened after a client project went live, the support process we put in place, and five questions to ask your provider before you start.'
pubDate: 2026-10-07
category: 'Build in Public'
readingTime: '7 min.'
heroImage: 'you-build-it-you-run-it.png'
draft: false
---

> **TL;DR**
> - "You build it, you run it" is what Amazon CTO Werner Vogels said back in 2006. For me, it is the motto of my work: a project isn't finished at launch, that's when operations begin.
> - After one client project went live, feedback came in through lots of channels. The system was built well; in the first weeks it wasn't run well enough.
> - Four simple rules fixed it. And I learned that the operating process belongs before go-live, not after.

## The sentence I could hang above my desk

In 2006, Jim Gray interviewed Werner Vogels, Amazon's CTO, for ACM Queue. In that interview, Vogels said the sentence that has been quoted in almost every DevOps talk since: "You build it, you run it." Whoever builds a system also operates it ([AWS News Blog](https://aws.amazon.com/blogs/aws/acm_queue_inter/)).

At Amazon, this was about thousands of services and dedicated teams. For me, it's about portals, automations and AI workflows for mid-sized companies and trades businesses. The core is the same. Too often I see the other model: build the MVP, hand it over, send the invoice, gone. But the thing keeps running, at least if you did your job well. New ideas come up, new integrations, bugs that no test found. And then there's a client with a system that nobody knows anymore.

I don't want that. Not out of romance, but because I think it's bad craftsmanship.

## What actually happened after a go-live

An example from this summer: for a heat pump installer, I built an order portal with an automation in the background that syncs data between systems. How the project came about and why it's one of my favourites this year, I wrote up [here](/en/blog/wmk-kundenprojekt-lehren/).

Since go-live, the team has been using it every day. And feedback came in. A lot of it. Honestly, my first reaction was joy: a system nobody says anything about usually just isn't being used. Feedback means people work with it and care about it.

The problem wasn't the amount. The problem was the route. Reports came in through different channels and from different people. There was no shared list, no prioritisation, and when the background automation stalled, we only noticed once someone complained. The system was built well. In the first weeks, it wasn't run well enough.

## Four rules that fixed it

Together with the client, we set up a fixed support process. None of it is new, but all of it had been missing:

1. **One support address, every report gets a ticket number.** No more shouting across the office, no more "but I wrote to you last week".
2. **One log.** Every report, every cause, every fix in one place. After two weeks you can see which areas are really shaky.
3. **A review every two weeks.** We go through the log and separate bugs from wishes. Without that slot, every wish becomes an urgent bug, and real bugs wait behind convenience features.
4. **A small group of people who report.** Not everyone reports directly to me. A few people who know the system well answer simple questions within the team and bundle the rest.

For me, the technical side belongs to this as well: when an automation fails, it has to report itself instead of failing silently. In n8n, that's an error workflow you assign in the workflow settings ([n8n docs](https://docs.n8n.io/flow-logic/error-handling/)). Five minutes of work that is missing in many workflows I take over.

The result: shouting and gut feeling turned into a process that knows priorities and surfaces problems early. Since then the portal has been getting better step by step instead of more confusing with every request.

## What I'm taking away

The part that's on me: I should have set up this process before go-live, not a few weeks after. I was so focused on building that operations were "later" in my head. There's even an established term for it, hypercare: the first weeks after go-live, when the team stays especially close to the system and everything comes together in one place. In large ERP projects that's standard. In small projects it often gets forgotten.

Since then, every project plan I write includes an operations plan: who reports, where to, how often we look at it together, what the system monitors itself, and when the intensive phase is over. I've written up the professional side of this, with exit criteria, tables and an interactive check, [on the TAISC blog about hypercare](https://www.theaisoftwarecompany.com/en/blog/hypercare-phase/).

A second point that matters to me: with AI I now build in days what used to take me weeks. That doesn't make operations less important, it makes them more important. Google Cloud's 2024 DORA report found that as AI adoption in development increased, delivery stability dropped by an estimated 7.2% ([Google Cloud](https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report)). Building faster without clean operations just means producing problems faster. I saw how important the step into production is during a [security check for a self-built intranet](/en/blog/vibe-coding-security-check-kunde/), too.

## Five questions to ask your provider before you start

If you're about to commission a software project or an automation, don't just ask what will be built. Ask what happens after go-live:

- **Who looks after the system in the first weeks after go-live, and how fast?** If the answer is "just get in touch", there is no plan.
- **Where do I report bugs, and how do I keep track?** One fixed channel with ticket numbers is not a luxury.
- **How do you notice something is broken before I do?** Monitoring nobody looks at doesn't count.
- **Who applies security updates, and how often?** Software ages even if nobody touches it.
- **How do new requests get in without everything else stalling?** A fixed review rhythm answers that.

A good partner has a concrete answer to each of these questions before the first line of code is written.

## My standard

If you just want software built, you'll find plenty of providers. My standard is full service from idea to running product: support, further development, bug fixing and new integrations. Especially with an [MVP](/en/mvp/) that comes together quickly, that's the difference between a prototype and a tool a team works with every day.

How was it for you: after your last go-live, was there a fixed point of contact, or did things just somehow keep running? If you're about to launch, or you have a system that runs but nobody really looks after: [let's have a no-obligation chat](/en/contact/).
