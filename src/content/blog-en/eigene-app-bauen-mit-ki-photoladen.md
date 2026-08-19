---
title: 'Building Your Own App with AI: How I Built My Own Image Editor in One Afternoon'
description: 'Instead of paying for Photoshop, I built my own native macOS image editor with Claude in one to two hours. What Photoladen and Maxima reveal about the value of custom software in 2026.'
pubDate: 2026-08-19
category: 'Tools & Stacks'
readingTime: '10 min.'
heroImage: 'eigene-app-bauen-mit-ki-photoladen.png'
draft: false
---

> **TL;DR**
> - Photoshop's single-app plan currently costs around €26/month, not €60 as I originally assumed. I still stopped paying for it.
> - With Claude, I built my own native macOS image editor in a single afternoon: [Photoladen](https://github.com/joshuaheller/photoladen), open source, MIT-licensed.
> - The real value wasn't the money saved. Free professional-grade tools already exist in 2026. The value was building exactly what I need, nothing more, nothing less.

## The Trigger: €26 a Month for 3% of the Features

I used to think I was paying €60 a month for Photoshop. When I checked the actual number for this post, it turned out to be wrong: [Adobe's own pricing page](https://www.adobe.com/products/photoshop/plans.html) currently lists the single-app plan at roughly €26/month, and the photo bundle with Lightroom at about €24. Still money for features I almost never touch: crop, invert, compress, resize, remove background. That's essentially the whole list.

For exactly that handful of tasks, I figured there was no genuinely good, affordable tool. Canva's background remover doesn't cover everything. Photopea is solid but slow in the browser, ad-supported, and involves constant uploading and downloading. So on a relaxed Friday afternoon I thought: why not just build myself a small Photoshop clone for my Mac?

## The Market Has Shifted Underneath Us

Before I get into how I built it, an honest detour: if this were purely about money, I could have skipped the afternoon entirely. Since Canva acquired parent company Serif, **Affinity Photo 2** has become completely free, a desktop app that, according to several current comparison tests, covers roughly 95% of Photoshop's functionality. GIMP has been free for years and is highly extensible with over 1,000 plugins. Photopea remains the strongest browser-based option; removing ads there costs about $5/month.

The image-editing market in 2026 is a different one than it was a year or two ago. If you're currently looking for a free Photoshop alternative and genuinely need the full professional feature set, Affinity Photo is arguably the better answer than a self-built app. But that was never really my question.

## Why I Built My Own Anyway

This wasn't about finding the cheapest option. It was about finding out what's actually possible now when you build a native app for exactly your own problem with AI, no prior Xcode experience, no weeks of onboarding into an unfamiliar framework.

That's no longer a fringe phenomenon. Developers like [Simon Willison describe](https://simonwillison.net/2026/Mar/27/vibe-coding-swiftui/) how full SwiftUI apps can now fit in a single text file, because current models like Claude handle Apple's frameworks remarkably well. A year ago this was still painful, limited framework support, lots of manual cleanup. That's the difference today.

Part of why it went as fast as it did also connects to something I wrote about a few days earlier: the biggest bottleneck when working with AI is rarely the model, it's the keyboard. How fast you can express context matters more than any prompt-engineering trick. I've been using [Wispr Flow](https://wisprflow.ai) for sessions like this for a few months now, voice instead of typing. If local processing matters to you: Wispr Flow sends on-screen context and voice recordings to the cloud; an offline-capable, open-source alternative with local Whisper models is VoiceInk (GPL-licensed, one-time cost instead of a subscription).

## The Build: Photoladen

Photoladen came together in one to two hours, with Claude as a pair programmer and a handful of precise prompts, into a version that covers nearly everything I need:

- **Layer management** with thumbnails and opacity controls
- **Tools**: selection, magic wand, crop, brush, text, shapes
- **Import/export** across multiple formats, including WebP conversion via the bundled libwebp library
- **One-click background removal** via Apple's Vision framework, entirely on-device
- **Non-destructive adjustments**, so nothing is lost when I correct something later
- A dedicated **`.photoladen` project format** that preserves layers and editable text

Technically, it's a native Swift app built on Apple's own system frameworks, Image I/O, Core Image, and Vision, rather than external image-processing libraries. It runs on macOS 14+, ships with 31 automated tests, and is open under an MIT license on [GitHub](https://github.com/joshuaheller/photoladen), currently at alpha version 0.1. Because the app isn't notarized by Apple, Gatekeeper flags it on first launch; the repo explains how to get around that.

The name is, admittedly, not especially creative: "Photoladen," roughly "photo shop" in German, a tongue-in-cheek open-source clone of Photoshop.

## Not Just Photoladen: Maxima

Photoladen wasn't the only small tool I built that week. Anyone who works with Claude Code a lot knows the problem: right in the middle of a good flow, the weekly limit hits, that happens to me too, even on the Max plan, especially with heavy use of Fable, Anthropic's latest model.

A friend had already built a small macOS menu bar app for exactly that, [Maxima](https://github.com/aucentiq/maxima), which shows at a glance how much usage is left before the next reset. I liked the idea enough that I [forked it and extended it further](https://github.com/joshuaheller/maxima). My version adds a live 5-hour session gauge with a timer, essentially a warning light before I get cut off mid-work. Under the hood, it reuses existing Claude Code OAuth credentials from the system keychain, no separate login, and only ever reads tokens, never writes them.

Two small tools, one shared pattern: not one big product idea, but several narrow, precisely-fitted tools, each built in hours instead of weeks.

## The Honest Downsides

It would be dishonest to stop here. Photoladen is alpha software. It's missing things a professional tool takes for granted: CMYK support, a plugin ecosystem, PSD compatibility as mature as Photopea's. It isn't code-signed, so macOS warns you on first launch. And maintenance is now on me, every bug, every macOS update that breaks something, is my problem, not a vendor's support team's.

So the point isn't that AI makes professional software obsolete. The point is that the threshold has dropped for the case where you only need 5% of a large tool: instead of settling for 95% unused complexity or accepting a weak workaround, you can now build that one narrow tool yourself.

## A Simple Framework: Build It Yourself or Use an Existing Tool?

| Criterion | Build it yourself | Use an existing tool |
|---|---|---|
| Scope of the task | Narrow, clearly bounded (5-6 functions) | Broad, many edge cases |
| Time budget | A few hours to experiment | Needs to be in production today |
| Maintenance | You're willing to maintain it yourself | You need external support/updates |
| Data & control | Local, no cloud service wanted | Cloud is fine |
| Maturity required | Personal tool, low tolerance-for-error requirement | Critical business process |

## What This Means for Companies

That same principle, one person with the right tools now delivers what used to take an entire team, is also at the core of my client work. I already described this from a client's perspective in [my post on MVP pricing](/en/blog/warum-mvps-nicht-mehr-50000-euro-kosten-muessen/), and even my [old imagetocaption.ai story](/en/blog/imagetocaption-350k-solo/) shows how much distribution and focus outweigh feature depth. Photoladen and Maxima are the same principle, just tested on myself instead of a client project, not unlike the [routine that now automatically turns my LinkedIn posts into blog posts](/en/blog/ki-agenten-bloggen-automatisch-claude-code-routines/).

For companies, the practical takeaway is this: not every internal tooling problem needs a formal RFP or a SaaS subscription. Some problems are narrow enough that a working prototype can be built in a day or two, with a clear picture of what it can and can't do. That's exactly where my [MVP approach](/en/mvp/) comes in.

## Conclusion

I didn't stop paying for Photoshop because it was too expensive, there are genuinely good free alternatives in 2026, and for most people they're the better choice. I stopped because in one afternoon I could build exactly what I actually need, nothing more. That's the real shift AI-assisted development brings in 2026: not cheaper than existing tools, but closer to what you actually want.

Are you building your own small tools these days, or does that still feel too risky for day-to-day work? If you want to talk through where a narrow prototype might beat another SaaS subscription in your company: [let's talk in a no-obligation intro call](/en/contact/).
