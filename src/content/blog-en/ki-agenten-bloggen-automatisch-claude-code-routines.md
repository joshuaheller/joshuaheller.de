---
title: "I Let AI Agents Write My Blog Posts Now"
description: "An honest build-in-public story: how I built a weekly automation with Claude Code Routines that scans my LinkedIn posts and proposes blog articles for my sites on its own, including the parts that didn't work on the first try."
pubDate: 2026-07-29
category: 'Build in Public'
readingTime: '7 min.'
heroImage: 'ki-agenten-bloggen-automatisch-claude-code-routines.png'
draft: false
---

> **TL;DR**
> - I built a scheduled cloud routine that scans my LinkedIn content database once a week and figures out which topic fits which of my landing pages.
> - It researches current sources, checks for overlap with existing blog posts, writes a full article with an image, and opens a pull request. I read it, fix what's needed, and merge.
> - The real value wasn't the scheduling mechanism. It was giving the routine real access to my tools and letting it work with that access on its own.

## The point where I was skeptical

I've been posting regularly on LinkedIn for months, but turning those posts into proper blog articles kept slipping. Not because it wasn't worth the time, but because it's exactly the kind of task you keep pushing to next week: pick a topic, check it against existing posts, research, write, find an image, wire it in, open a pull request, merge. Five or six steps, none of them hard on its own, but together enough friction that it didn't happen for weeks.

When I first heard about Claude Code Routines, Anthropic's feature for scheduled cloud agents, my first reaction was: sounds like a cron job with a marketing name. Cron jobs that kick off a script somewhere in the cloud have existed for decades. Nothing worth writing a blog post about.

Then I started experimenting with it, and the actual insight turned out to be different. The value isn't in the schedule. It's that the routine gets the same tools, repositories, and connectors I'd have in an interactive session, and then decides on its own how to approach a task described in plain words.

## What I actually built

The routine that runs now does roughly this, fresh every week:

1. It searches my Notion database of LinkedIn content, filtered by status "posted," my name as owner, and the date range of the last seven days.
2. It checks which of my landing pages (my own site, our company site, two product sites for AI agent solutions) fit the topic content-wise.
3. For each candidate site, it looks at the existing blog posts already there, titles, slugs, sometimes the content, so no topic gets covered twice.
4. It actively researches the web to check claims from the original LinkedIn post against current sources, numbers and details often shift between a LinkedIn post and the blog article.
5. It writes the finished post, matched to that site's tone, with an image, sometimes with interactive elements, and opens a pull request.

What I do at this point: nothing, other than keep posting on LinkedIn. I read the pull requests, fix what needs fixing, and merge.

## What worked well

What surprised me most was the quality of the research steps. For this exact post, the routine looked up Anthropic's official documentation on Claude Code Routines on its own, to make sure details like trigger types, limits, and the security model were correct and current, instead of relying on its own possibly outdated memory. That's exactly the difference between a cron job filling in a template and an agent that understands a task.

The second thing that won me over: the logic for checking against existing content. Before writing a topic, the routine actively checks whether that site already covers it, and would rather skip a post than publish something redundant. That mattered more to me than any single automation feature, because bad, redundant content hurts a content strategy more than simply having fewer new posts.

## What I deliberately kept in check

Autonomy doesn't mean "everything runs without me" here. The routine never merges anything itself, it only opens pull requests. Every change lands on its own branch first, visible, reviewable, and only reaches the main branch after I approve it. That's not caution I invented myself either, the security model behind Claude Code Routines is built exactly for this: pushes to someone else's or a protected branch get rejected automatically.

Just as important: I only give the routine access to the repositories and connectors it needs for this one task, not blanket access to everything connected to my account. Not much can go wrong on a landing page, but that's exactly why it's the right first use case to build trust in the pattern, before letting it near more production-critical software projects, automated bug-fixing or routine dependency updates, for instance.

## What this means for build in public and personal branding

The reason I'm sharing this isn't the technology by itself. It's the shift behind it: in client projects and in my own [MVP pricing](/blog/warum-mvps-nicht-mehr-50000-euro-kosten-muessen/), I've spent months arguing that one person with the right tools can now deliver what used to require several roles. Content production is a domain where the same principle applies, I just happened to observe it on myself this time instead of on a client project.

That doesn't mean I hand off my own voice. I still write the LinkedIn posts the routine draws from myself. What the routine takes over is translating an idea I've already had into a researched, fact-checked, bilingual blog post, the grunt work that kept getting deprioritized, not the thinking that comes before it.

If you want to read more about the technical and governance side of scheduled AI agent workflows over on theaisoftwarecompany.com, the actual trigger for this experiment: [Scheduled Autonomous AI Agents: What Claude Code Routines Means for Business Automation](https://www.theaisoftwarecompany.com/en/blog/claude-code-routines-autonome-ki-agenten/).

## What I'm testing next

Two things are next on the list: automated bug-fixing on smaller, well-tested repositories, and regular dependency and Node version updates, both repetitive enough to hand to a routine, but important enough to keep running through pull requests rather than automatic merges.

If you're weighing how much of your own content or development work could reasonably be delegated to a scheduled agent without losing control over it: [let's talk for 30 minutes, no strings attached](/en/contact/).
