---
title: 'OpenAI Daybreak, PHP2Shell, LiteLLM: How I Re-Secured My Company'
description: 'One week with AI-discovered PHP flaws, a supply chain attack on LiteLLM and a secrets rotation at Railway. What I changed at TAISC afterwards, what OpenAI Daybreak Blue gives us and the questions you should ask yourself now.'
pubDate: 2026-10-28
category: 'Build in Public'
readingTime: '8 min.'
heroImage: 'openai-daybreak-firma-absichern.png'
draft: false
---

> **TL;DR**
> - On 21 October 2026, a single day brought emergency patches for two AI-discovered PHP flaws, a supply chain attack on LiteLLM and Railway asking customers to rotate all their secrets. We weren't affected. I still sat down for a whole Saturday.
> - The result was eight measures, from hardware keys and least privilege to an AI security check before every go-live.
> - As of today, we've been approved for OpenAI Daybreak Blue. What it gives us, what it doesn't, and why fundamentals matter more than ever right now.

## The week my clients started messaging me

On LinkedIn I called it “Black October”. That's not an official term, but it's how it felt.

On 21 October, the PHP project shipped emergency updates for two critical flaws that became known as PHP2Shell: unauthenticated remote code execution, CVSS 9.2, with the affected code going back to PHP 5.4 from 2012 ([php.net](https://www.php.net/archive/2026.php)). They were found with the help of AI models. The same day, a tampered version of LiteLLM, an LLM gateway used in lots of AI projects, was live on PyPI and Docker Hub for almost two hours. It stole credentials, including AI provider keys ([LiteLLM](https://docs.litellm.ai/blog/security-incident-oct-21-2026)). And after a breach of its own build infrastructure, Railway asked all customers to rotate their environment variables ([Railway](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)).

One correction to my LinkedIn post, because I found it while researching this: PHP2Shell was not widely exploited before the patch. According to Tenable there were only attempts beforehand, and successful attacks were reported from 24 October, after the patch ([Tenable](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote)). It barely changes the picture, since anyone who hasn't updated is now the target. But it deserves to be set straight.

We don't use PHP, LiteLLM or Railway. Still, clients got in touch: are we affected? And honestly, I asked myself the same question about us. Not “are we affected”, but: how would we have been affected if it had hit us?

## What I changed on a Saturday

I went through our accounts, servers, keys and processes one by one. These are the eight points that came out of it:

1. **2FA everywhere, hardware keys for what matters most.** I ordered two YubiKeys through the offer OpenAI put together with Yubico for its users ([Yubico](https://www.yubico.com/press-releases/openai-and-yubico-partner-to-bring-custom-phishing-resistant-yubikeys-to-openai-users/)). They go on GitHub, the cloud accounts, domain and DNS, email and the password manager. SMS codes can be intercepted, a hardware key not so easily.
2. **Dependabot on, updates automatic.** Dependabot doesn't just flag known vulnerabilities, since this year it also detects malware in npm and PyPI packages. And it now waits three days by default before regular version updates, while security updates still arrive immediately ([GitHub](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/)). Those three days would have been enough for LiteLLM.
3. **Big providers instead of DIY.** Cloudflare, Vercel, Supabase, Microsoft and Apple spend amounts on security that no mid-sized company can match. Self-hosting open-source alternatives is, in my view, a bad security call for most companies. Sorry to all the sovereignty nerds, more on that below.
4. **Flag secrets as “sensitive” and plan for rotation.** The big ones get hacked too. At Vercel in April, attackers got at environment variables that weren't flagged as sensitive ([Vercel](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)). Our rule now: flag everything, and for every key I know where it lives and how to replace it.
5. **Own servers only behind a tight firewall.** Where we need our own server, for example at Hetzner, it's only reachable via SSH key over Tailscale, with every other port closed. Ironically, Tailscale has already published 17 security bulletins this year ([Tailscale](https://tailscale.com/security-bulletins)). So: keep the tool itself up to date too.
6. **Least privilege for every integration.** When an AI agent or an n8n workflow connects to an external system, it only gets the permissions it needs. Usually that means read, not write. And every workflow has its own credential, no shared admin key.
7. **AI security check before every go-live.** Every application I build for clients goes through a review with several current frontier models and [deepsec by Vercel Labs](https://github.com/vercel-labs/deepsec), an open-source tool that has agents systematically check code for vulnerabilities. By my rough estimate it costs around €200 in tokens per project. But it finds holes that are anything but obvious.
8. **Applying for the AI providers' cyber programmes.** So that for these checks I can use the strongest models without running into a filter with every security question.

And then there are the basics that tend to get lost in vibe coding: row level security, XSS, SQL injection, CSRF, open ports, DNS, TLS certificates. What I checked in practice for one client is in my post about the [security check of a self-built intranet](/en/blog/vibe-coding-security-check-kunde/).

## As of today: OpenAI Daybreak Blue

Point 8 worked out faster than expected. As of today, we've been approved for OpenAI Daybreak. One week after that security week, the timing could hardly have been better.

Daybreak is OpenAI's programme for cyber defenders. It has two tiers that you apply for separately ([OpenAI](https://learn.chatgpt.com/docs/cyber-safety)):

| | Daybreak Blue | Daybreak Red |
|---|---|---|
| For whom | Verified defenders, developers, security teams | A few organisations critical to the cyber ecosystem |
| What it gives you | Cyber capabilities of OpenAI's regular models with far fewer refusals in security analysis | Purpose-trained cyber models for authorised vulnerability research and pentests |
| Requirements | Identity verification, hardware-backed passkey | Separate approval, Blue isn't enough |
| Us | Approved since 28 Oct 2026 | Not approved |

What that means in practice: during a security review I ask a model how a specific piece of code could be exploited. Without approval you get refused more often for questions like that, because the model can't tell whether I'm defending or attacking. With Daybreak Blue I can go deeper. Anthropic has something comparable with its Cyber Verification Program ([Help Net Security](https://www.helpnetsecurity.com/2026/10/07/anthropic-expands-cyber-verification-program/)).

So I don't make it bigger than it is: Blue is the first tier. It doesn't make me a pentester and it doesn't replace a professional penetration test when a client needs one. It's one more building block, alongside 2FA, hardware keys and least privilege.

## Where I contradict myself

Two things I want to say openly.

**First, self-hosting.** I say “use big providers” and still run my own server. The difference for me is whether you know what you're doing. A Hetzner server with an open SSH port and a default password is more dangerous than any managed service. The same server behind Tailscale, with an SSH key, a firewall and automatic updates, is defensible. If you can't set that up yourself, don't, or get help.

**Second, vibe coding.** I've made fun of it a lot on LinkedIn. It has its place for prototypes, and I see clients get surprisingly far with it. But this week shows how big the gap is between people who understand software and people who build production applications with AI without knowing what happens underneath. Attackers use the same models we do. If you don't understand your application, you can't secure it either.

I'm glad I started programming many years ago, without any AI: a bachelor's in business informatics, several years as a developer and DevOps engineer at Daimler. Back then I found some of it dry. Today those are exactly the fundamentals that count.

## Five questions for your company

You don't need a security team to ask yourself these:

- **Which five accounts would bring your company to a halt if someone took them over?** Do they all have a hardware key or passkey?
- **If your hosting provider says “please rotate all secrets” today: do you know where they all are?**
- **What permissions do your AI agents and automations really have?** And do they need all of them?
- **Who applies security updates, and how fast?**
- **When was your most important application last checked for security by someone other than its developer?**

I've written up the full checklist with all seven building blocks, tables, an interactive self-check and the reporting duties under GDPR, NIS2 and the Cyber Resilience Act [on the TAISC blog about AI security for businesses](https://www.theaisoftwarecompany.com/en/blog/ki-sicherheit-unternehmen/).

When did you last run a real security check on your applications? If the honest answer is “never”, or you're about to go live: [let's talk](/en/contact/).
