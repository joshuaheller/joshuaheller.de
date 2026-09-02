---
title: 'My Client Built Half His Company Without a Developer – Then He Called Me for the Security Check'
description: 'A managing director with no tech team builds a full intranet with Claude. Before 30 people get access, he stops himself. What this project taught me about the line between building it yourself and bringing in a pro.'
pubDate: 2026-09-02
category: 'Build in Public'
readingTime: '8 min.'
heroImage: 'vibe-coding-security-check.png'
draft: false
---

> **TL;DR**
> - A new client built an intranet, dashboards and admin tools with Claude, Supabase and Vercel – with no developer team, and surprisingly well.
> - Just before rolling out to 30 employees, he stopped himself and ordered a security check. That is exactly the right call.
> - The interesting skill in the AI era isn't "being able to build everything yourself," it's knowing where your own limit runs.

## The moment that impressed me

My new client is not a developer. He's a managing director in the holiday-rental industry, no tech team in-house. What he built with Claude anyway genuinely impressed me: an intranet with shift planning, leave management and an internal wiki, plus several dashboards pulling data from more than 20 sources. All himself, with Claude, Supabase and Vercel.

I've seen projects from actual teams that were less well thought out. And I'm not saying that to be nice – it was my honest impression the first time I looked inside.

Then came the moment that impressed me even more. Before roughly 30 employees got access, he wanted it checked. By someone who does this every day. Not go live, hope, and only call when it's on fire – but ask first: is this actually secure?

## Why that's the genuinely hard decision

Stopping yourself when everything is running is hard. The app works, it looks good, the first colleagues are excited. Saying "let someone look at it again" in exactly that moment takes willpower – and is still the most mature decision you can make.

Because the transition where it breaks is invisible. An app that "works on my machine" is a different thing from a system 30 people rely on that holds personal data. In both cases the code looks equally finished. The difference sits below the surface: in roles and permissions, in the database, in the question of whether everyone really only sees their own data.

And this isn't a niche worry that only troubles me as a cautious engineer. Research from the application-security field shows that around 45% of AI-generated code contains a common vulnerability, and a prominent 2025 incident exposed data from over 170 apps built with a no-code tool – simply because the database access rules were never switched on. I wrote up the technical details and numbers [in depth on the TAISC blog](https://www.theaisoftwarecompany.com/en/blog/vibe-coding-sicherheit-produktion-devops/). Here I want to write about something else: the line itself.

## Where I draw the line

When people ask me when they should stop building themselves and bring someone in, I don't give a technology answer. I ask three questions:

- **Does anyone besides you access it?** As long as it's your personal tool, almost anything is fine. The moment a team depends on it, the rules change.
- **Is there real data in it – from customers, employees, third parties?** From then on, a data leak is no longer an annoyance but, in the DACH region, quickly a GDPR matter with mandatory reporting.
- **Would it hurt if the system went down for a day tomorrow, or lost data?** If yes, you need back-ups, separate environments and clean deployments – what the software world calls DevOps.

Three times yes doesn't mean "you shouldn't have built it yourself." It means: now is the point where a second pair of eyes pays off. Not to replace your work, but to make it hold up.

## What this has to do with my work

This line is exactly where I like working most. I build software for clients – but increasingly the value isn't in building something entirely new, it's in getting something self-built across the finish line: security, roles and permissions, deployment, the step into stable operation. That's the core of what I describe as [forward deployed engineering](/en/blog/forward-deployed-engineering-dach/) – right in the client's context, instead of managing requirements from a distance.

I think this development is fantastic. The more people build themselves, the better they understand what software actually is – and the clearer it becomes where experience starts to pay off. I saw something similar with the [WMK project](/en/blog/wmk-kundenprojekt-lehren/): start small, build trust, then grow together.

For many, the most honest first step isn't "build this for me" but "take a look before I go live." That's exactly what my [AI sparring](/en/ai-sparring/) is for: not a months-long project, but a focused look from someone who knows both worlds – builds with AI himself and knows what goes wrong in production.

## What happens next

I'm right in the middle of the check: database, login, roles and permissions, plus the critical interfaces. I'll share how it turns out once I'm through – building in public, for me, also means showing the unfinished parts.

What's already clear to me: the most exciting part of the AI era isn't that suddenly everyone can build everything. It's that the most important skill stays a very human one – knowing where your own competence ends and when to bring someone in.

If you're at the point where your tinkering tool is becoming a real system: [let's talk, no strings attached](/en/contact/) – ideally before the first 30 people get access.
