---
title: 'AI Readiness: What 15+ Projects Taught Me Before I Write a Single Line of Code'
description: 'From agencies to billion-dollar corporations: what over a dozen AI rollouts taught me about data, tools and mindset — and why current MIT and Gartner numbers back up what I kept seeing.'
pubDate: 2026-08-05
category: 'AI Strategy'
readingTime: '11 min.'
heroImage: 'ki-readiness-lektionen-whiteboard.png'
draft: false
---

> **TL;DR**
> - Over the past twelve months I've helped more than 15 companies adopt AI, from agencies to billion-dollar corporations. Almost the same pattern every time.
> - It's not the model that decides whether AI changes anything, it's three things that get settled before that: data, tools, mindset.
> - For a long time I thought this was just my gut feeling. The current MIT report says: 95% of GenAI pilots show no measurable effect. Turns out I wasn't imagining it.

## Two weeks, one pattern

A little while ago, I got one request after another within two weeks. An agency, a private equity portfolio company, a billion-dollar corporation, all wanting the same thing: to finally get serious about AI. And I kept catching myself asking the same quiet question every time: are you actually ready for this yet?

Because after more than a dozen projects, one thing has become clear to me: buying everyone on the team a Claude or ChatGPT license simply isn't enough. That's the starting point, not the outcome.

## What I've actually seen over the last 12 months

I've been consulting on and building AI solutions for companies of every size for over a year now, from small agencies to corporations with thousands of employees. Along the way I've trained teams, built automations and developed AI agents. If I had to boil it down to one thing: the companies where something genuinely changed afterward weren't distinguished by which model they used or how big their budget was. They differed on three things that were already decided before the first prompt was ever written.

I've started calling them the three pillars: data, tools, people & mindset.

## Pillar 1: Data — the lesson that surprised me most

At first I assumed the biggest lesson would be technical, a clever prompt, a smarter architecture. It turned out to be much more mundane: almost every company I've worked with hadn't even captured its most valuable data in the first place.

General internet knowledge is fine for research. But the moment AI is supposed to work inside your actual processes, it needs your data, and at most companies that data is scattered everywhere: in people's heads, in emails, across systems that don't talk to each other.

The most concrete example I now run into in almost every kickoff: transcripts. Tools like Granola, Fireflies or Fathom cost next to nothing these days, can be set up GDPR-compliant, and automatically capture conversations. Yet almost none of the companies I start working with use them. And that's a shame, because what gets said in client calls and internal meetings is worth real money to any company, the moment it exists in structured form.

## Pillar 2: Tools — the second thing I underestimated

If you're already on Microsoft 365 or Google Workspace, you're in a good spot, the Graph API and native connectors make a lot accessible. Notion has become close to my gold standard as an AI knowledge base: clear structure, markdown format, solid support for the Model Context Protocol (MCP), the open standard Anthropic introduced in late 2024 and which is now running in production across more than 10,000 public servers and, according to current figures, at roughly 28% of Fortune 500 companies.

What reliably works badly, on the other hand, I see almost every week: storing documents as Word files scattered across SharePoint. Technically accessible, practically token-inefficient, slow and error-prone for AI systems. When I start with a new company now, one of my first questions isn't "which model do you want to use?", it's "where does your knowledge actually live, and how would an AI even get to it?"

## Pillar 3: People & mindset — the genuinely hard part

Honestly, this is the part I learn the most from myself, every single time. It's not about tooling, it's about no longer doing things on autopilot. Not reflexively opening Excel, but asking: could an agent handle this if I gave it the right outcome to aim for?

That requires a different mindset toward work, new processes, sometimes different tools too. And it can't simply be mandated. In the projects that genuinely changed something in the end, there was almost always at least one person on the team actively driving that shift, not as a side project, but as a clearly assigned responsibility.

## I thought it was just my own perception

Honestly, for a long time I suspected I was being too pessimistic here, after all, I mostly see the projects where I get called in because something isn't working smoothly. So I went and checked what current, independent research actually says.

The **MIT NANDA report "State of AI in Business 2025"**, which analyzed more than 300 publicly documented initiatives, 52 organizational interviews and 153 executive surveys, arrives at a pretty unambiguous conclusion: 95% of generative AI pilots show no measurable effect on revenue or cost. Not because the models are bad, the problem is almost always missing embedding into real workflows.

**Gartner** backs this up: by the end of 2026, 60% of AI projects lacking AI-ready data are expected to be abandoned, which lines up almost exactly with my pillar 1. And from a Gartner survey of 782 IT leaders in April 2026: 73% of failed projects never had a clear definition of what success would even have looked like.

For the DACH region, this fits the picture. The **DIHK Digitalization Survey 2026**, with almost 5,000 companies surveyed, shows: German companies rate their own digitalization maturity at just 2.8 out of 6 on average, and among SMEs only around 20% use AI actively in daily operations, compared to 41% across all company sizes. The gap I keep seeing in projects, in other words, isn't an outlier. It's the norm.

## What I actually do differently now

Three things that have changed for me this year whenever a new inquiry comes in:

1. **I ask about data before I talk about models.** The first question in an intro call is almost never "GPT or Claude?" anymore, it's "where does your knowledge live, and how structured is it?"
2. **I propose small, honest first steps** instead of big roadmaps. Rolling out a transcription tool or connecting Notion as a knowledge base often delivers more than a six-month strategy document.
3. **I name the mindset question explicitly**, even when it's uncomfortable. If nobody on the team owns that shift, I say so openly, ideally before the project starts rather than after.

## Frequently asked questions

**Does that mean small companies without a big IT department don't stand a chance?**
Quite the opposite, often. The fastest, cleanest results I've seen have come from small teams that can decide quickly and don't carry much legacy baggage. Large corporations have more resources, but also more scattered systems and slower decision paths.

**Do all three pillars need to be perfect before you start with AI at all?**
No, that would be the wrong takeaway. I'd rather recommend starting small and focused, but being honest about which pillar is currently the bottleneck, instead of ignoring it and being surprised later when the bigger rollout stalls.

**How does this connect to your work as a Forward Deployed Engineer?**
Very directly. As a [Forward Deployed Engineer](/en/forward-deployed-engineer/), I sit in the same repo, the same chat as the team, which is exactly why I see these three pillars this directly, not from a slide deck, but while actually building.

## Conclusion

I've stopped treating AI readiness as a soft concept and started treating it as what it actually is: the thing that decides success or failure before a single line of code gets written. The current numbers from MIT and Gartner mostly confirmed one thing for me: what I'd seen across more than a dozen projects wasn't a one-off.

How does it look at your company: do you have a solid data foundation, or did you mostly buy tools and hope someone would use them? More on how I approach this on the [AI consulting](/en/services/) page, or let's talk directly in an [introductory call](/en/contact/) about where you stand.
