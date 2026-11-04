---
title: 'AI Allowed, Understanding Required: What Teaching at DHBW Taught Me About AI Literacy'
description: 'I barely write code by hand anymore, yet I teach web fundamentals at DHBW Karlsruhe. Why, how I check whether students understand what the AI built, and what companies can take from it for AI literacy training.'
pubDate: 2026-11-04
category: 'Build in Public'
readingTime: '7 min.'
heroImage: 'dhbw-dozent-ki-kompetenz.png'
draft: false
---

> **TL;DR**
> - Since this autumn I have been teaching web engineering at DHBW Karlsruhe, a cooperative state university in Germany. The basics: HTML, CSS, JavaScript. Meanwhile I barely write a line of code by hand myself.
> - That is exactly why I teach fundamentals. They are the reason I can judge whether what an AI agent proposes is any good.
> - My approach: don't ban AI, make understanding mandatory. The exam is a presentation with targeted follow-up questions. I recommend the same principle to companies for AI literacy, especially since the EU AI Act has not required certificates since July 2026, only sensible measures.

## Why I of all people teach fundamentals

Today my work runs almost entirely through Claude Code. I describe, review, decide. I rarely type code myself. When I was asked to teach an introduction to web engineering at the Baden-Württemberg Cooperative State University (DHBW) in Karlsruhe, I still said yes right away.

I learned to program at around ten, without any AI, with vanilla HTML, CSS and JavaScript. That is not nostalgia. It is the reason working with agents works for me: I can see when an architecture will hurt in six months. I notice when a suggestion runs but fixes the wrong thing. And I can step in before something breaks, instead of typing "fix it" for the fourth time.

That only works with a foundation. And that foundation is exactly what many people starting their careers with AI are missing.

## The real topic came from the programme director

The programme director handed me the real challenge up front: students use AI heavily and often don't understand the fundamentals. Code appears in seconds, but there is no answer to the question of why it looks the way it does.

Banning AI would be silly. These students will work in companies where AI tools are a given. A ban would only push them to use it secretly, and I would learn nothing about how they use it. So I make understanding mandatory instead.

## How I put this into practice in the lecture hall

Three rules I set for the course:

1. **Set tasks and walk through the solutions live together.** The path matters, not just the result. Where did someone ask the AI, where did they think for themselves, where did it go wrong?
2. **Understanding before speed.** Handing in a finished page in ten minutes is worthless if you can't explain why the layout breaks on mobile.
3. **Exams as presentations with targeted follow-up questions.** If you can explain why your code looks the way it does, you understood it. If you handed in AI slop, it shows by the third question.

The third point matters most to me. A written exam is hard to design fairly when AI is allowed in everyday work. A conversation about your own code cannot be outsourced. It tests exactly the skill that counts on the job later: judging AI output instead of trusting it blindly.

## I see the same problem with my clients

What strikes me most about this teaching job: it is exactly the problem I see in companies. It just has a different name there.

| At DHBW | In a company |
|---|---|
| Students hand in AI code they can't explain | Employees pass on AI texts, analyses or workflows without checking them |
| Presentation with follow-up questions instead of multiple choice | A hands-on task from their own job, then explaining it |
| Walking through solutions live together | Reviewing results as a team before they go out |
| Understanding before speed | Two automations someone understands beat ten nobody can maintain |

It becomes especially clear now that non-developers build their own software with AI. In a [security check of a self-built intranet](/en/blog/vibe-coding-security-check-kunde/), the system was impressive, but nobody in-house could say for sure who was allowed to see which data. That is not a criticism. It is the same gap as in the lecture hall: AI delivers faster than understanding grows.

## What the EU AI Act has to do with it

Since February 2025, Article 4 of the EU AI Act has required companies that use AI to do something for their people's AI literacy. Many booked training with a certificate and ticked the box. With the so-called Digital Omnibus, Article 4 was softened as of 27 July 2026: companies must now take measures to support AI literacy. They don't have to guarantee any specific level, and nobody requires certificates.

Honestly, I think that's good. It takes away the pressure to collect attendance and puts the focus on what actually matters: can people tell when the AI is wrong? A multiple-choice quiz doesn't answer that. A follow-up question does.

I wrote up the detailed breakdown of what Article 4 requires today, who enforces it in Germany and how to structure sensible AI literacy training [on the TAISC blog](https://www.theaisoftwarecompany.com/en/blog/ki-fuehrerschein/), with tables, sources and a self-check.

## Three things I recommend to teams with juniors

The question I asked under my LinkedIn post comes up in every team that takes AI seriously: how do you make sure juniors still understand what the agent is actually building? My answers so far:

- **Have them explain, don't just sign off.** In a code review or when handing over an automation, ask briefly: why like this? What happens if the input is empty? Two minutes that reveal a lot.
- **Small tasks deliberately without AI.** Not as punishment, but as practice. Anyone who has validated a form by hand once will spot it later when the AI gets it wrong.
- **Let the agent ask before it builds.** I work a lot with an explicit question mode. It forces you to understand the requirement yourself before code gets written, and it shows where someone is still unsure.

## What I hope to get out of this semester

The course has been running since the end of September, and I'm learning at least as much as the students. Above all about how to teach fundamentals when a tool seems to make them unnecessary. I want people starting their careers to question AI critically instead of trusting it blindly. For that, they need to know what happens under the hood.

How do you handle this in your teams? And if you're thinking about how to get your team ready for AI without ending up with just a certificate on the wall: in my [AI workshop](/en/ai-workshop/) we work on your real tasks. [Let's talk, no strings attached](/en/contact/).
