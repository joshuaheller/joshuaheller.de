---
title: 'OpenAI Daybreak, PHP2Shell, LiteLLM: Wie ich meine Firma neu abgesichert habe'
description: 'Eine Woche mit KI-gefundenen PHP-Lücken, einem Supply-Chain-Angriff auf LiteLLM und Secrets-Rotation bei Railway. Was ich danach bei TAISC geändert habe, was OpenAI Daybreak Blue bringt und welche Fragen du dir jetzt stellen solltest.'
pubDate: 2026-10-28
category: 'Build in Public'
readingTime: '8 Min.'
heroImage: 'openai-daybreak-firma-absichern.png'
draft: false
---

> **TL;DR**
> - Am 21. Oktober 2026 kamen innerhalb eines Tages Notfall-Patches für zwei mit KI gefundene PHP-Lücken, ein Supply-Chain-Angriff auf LiteLLM und die Bitte von Railway, alle Secrets zu erneuern. Wir waren nicht betroffen. Ich habe mich trotzdem einen Samstag lang hingesetzt.
> - Herausgekommen sind acht Maßnahmen, von Hardware-Schlüsseln über minimale Rechte bis zum KI-Security-Check vor jedem Go-live.
> - Seit heute sind wir für OpenAI Daybreak Blue freigeschaltet. Was das bringt, was nicht, und warum Grundlagenwissen gerade wichtiger wird als je zuvor.

## Die Woche, in der meine Kunden mir geschrieben haben

Auf LinkedIn habe ich sie „Black October“ genannt. Ein offizieller Begriff ist das nicht, aber es hat sich so angefühlt.

Am 21. Oktober hat das PHP-Projekt Notfall-Updates für zwei kritische Lücken veröffentlicht, die unter dem Namen PHP2Shell bekannt wurden: Remote Code Execution ohne Login, CVSS 9,2, der betroffene Code reicht bis PHP 5.4 aus dem Jahr 2012 zurück ([php.net](https://www.php.net/archive/2026.php)). Gefunden wurden sie mit Hilfe von KI-Modellen. Am selben Tag war auf PyPI und Docker Hub knapp zwei Stunden lang eine manipulierte Version von LiteLLM online, einem LLM-Gateway, das in vielen KI-Projekten steckt. Sie hat Zugangsdaten gestohlen, darunter die Schlüssel für die KI-Anbieter ([LiteLLM](https://docs.litellm.ai/blog/security-incident-oct-21-2026)). Und Railway hat nach einem Einbruch in die eigene Build-Infrastruktur alle Kunden gebeten, ihre Umgebungsvariablen zu erneuern ([Railway](https://blog.railway.com/p/security-disclosure-wednesday-october-21st)).

Eine Korrektur zu meinem LinkedIn-Post, weil ich sie beim Nachrecherchieren gefunden habe: PHP2Shell wurde nicht schon vor dem Patch breit ausgenutzt. Laut Tenable gab es vorher nur Angriffsversuche, erfolgreiche Angriffe wurden ab dem 24. Oktober gemeldet, also nach dem Patch ([Tenable](https://www.tenable.com/blog/php2shell-cve-2026-109618-cve-2026-109619-frequently-asked-questions-about-critical-php-remote)). Das ändert an der Lage wenig, wer nicht aktualisiert, ist jetzt das Ziel. Aber es gehört richtiggestellt.

Wir setzen kein PHP ein, nutzen weder LiteLLM noch Railway. Trotzdem kamen Nachrichten von Kunden: Sind wir betroffen? Und ehrlich gesagt habe ich mir dieselbe Frage auch für uns gestellt. Nicht „sind wir betroffen“, sondern: Wie wären wir betroffen gewesen, wenn es uns getroffen hätte?

## Was ich an einem Samstag geändert habe

Ich habe mir unsere Konten, Server, Schlüssel und Abläufe der Reihe nach angeschaut. Das sind die acht Punkte, die dabei rausgekommen sind:

1. **2FA überall, Hardware-Schlüssel für das Wichtigste.** Ich habe mir zwei YubiKeys bestellt, über das Angebot, das OpenAI zusammen mit Yubico für seine Nutzer gemacht hat ([Yubico](https://www.yubico.com/press-releases/openai-and-yubico-partner-to-bring-custom-phishing-resistant-yubikeys-to-openai-users/)). Sie kommen an GitHub, die Cloud-Konten, Domain und DNS, E-Mail und den Passwort-Manager. SMS-Codes lassen sich abfangen, ein Hardware-Schlüssel nicht so einfach.
2. **Dependabot an, Updates automatisch.** Dependabot meldet nicht nur bekannte Lücken, sondern erkennt seit diesem Jahr auch Schadcode in npm- und PyPI-Paketen. Und es wartet bei normalen Versions-Updates jetzt standardmäßig drei Tage, Sicherheitsupdates kommen trotzdem sofort ([GitHub](https://github.blog/security/supply-chain-security/the-case-for-a-cooldown-why-dependabot-now-waits-before-issuing-version-updates/)). Genau diese drei Tage hätten bei LiteLLM gereicht.
3. **Große Anbieter statt Eigenbau.** Cloudflare, Vercel, Supabase, Microsoft, Apple stecken Summen in Sicherheit, an die kein Mittelständler herankommt. Open-Source-Alternativen selbst zu hosten, halte ich sicherheitstechnisch für die meisten Firmen für keine gute Idee. Sorry an alle Sovereignty-Nerds, dazu unten mehr.
4. **Secrets als „sensitiv“ markieren und Rotation einplanen.** Auch die Großen werden gehackt. Bei Vercel kamen Angreifer im April an Umgebungsvariablen, die nicht als sensitiv markiert waren ([Vercel](https://vercel.com/kb/bulletin/vercel-april-2026-security-incident)). Seitdem gilt bei uns: alles markieren, und ich weiß für jeden Schlüssel, wo er steckt und wie ich ihn erneuere.
5. **Eigene Server nur hinter dichter Firewall.** Wo wir einen eigenen Server brauchen, etwa bei Hetzner, ist er nur per SSH-Key über Tailscale erreichbar, alle anderen Ports sind zu. Ironischerweise hatte auch Tailscale dieses Jahr schon 17 Sicherheitsmeldungen ([Tailscale](https://tailscale.com/security-bulletins)). Also: auch das Werkzeug aktuell halten.
6. **Minimale Rechte für jede Schnittstelle.** Wenn ein KI-Agent oder ein n8n-Workflow ein externes System anbindet, bekommt er nur die Rechte, die er braucht. Meistens heißt das: lesen, nicht schreiben. Und jeder Workflow hat einen eigenen Zugang, keinen geteilten Admin-Key.
7. **KI-Security-Check vor jedem Go-live.** Jede Anwendung, die ich für Kunden baue, geht vorher durch ein Review mit mehreren aktuellen Frontier-Modellen und [deepsec von Vercel Labs](https://github.com/vercel-labs/deepsec), einem Open-Source-Werkzeug, das Agenten gezielt Code auf Schwachstellen prüfen lässt. Das kostet pro Projekt grob geschätzt um die 200 € an Tokens. Es findet aber Lücken, die alles andere als offensichtlich sind.
8. **Bewerbung für die Cyber-Programme der KI-Anbieter.** Damit ich für diese Checks an die stärksten Modelle komme, ohne bei jeder Sicherheitsfrage gegen einen Filter zu laufen.

Und dann gibt es die Basics, die beim Vibe Coding gern untergehen: Row Level Security, XSS, SQL-Injection, CSRF, offene Ports, DNS, TLS-Zertifikate. Was ich bei einem Kunden dazu konkret geprüft habe, steht in meinem Beitrag über den [Security-Check eines selbst gebauten Intranets](/blog/vibe-coding-security-check-kunde/).

## Seit heute: OpenAI Daybreak Blue

Punkt 8 hat schneller geklappt als gedacht. Seit heute sind wir für OpenAI Daybreak freigeschaltet. Eine Woche nach dieser Sicherheitswoche hätte das Timing kaum besser sein können.

Daybreak ist das Programm von OpenAI für Cyber-Verteidiger. Es gibt zwei Stufen, die man getrennt beantragen muss ([OpenAI](https://learn.chatgpt.com/docs/cyber-safety)):

| | Daybreak Blue | Daybreak Red |
|---|---|---|
| Für wen | Verifizierte Verteidiger, Entwickler, Sicherheitsteams | Wenige Organisationen, die für das Cyber-Ökosystem kritisch sind |
| Was es bringt | Cyber-Fähigkeiten der regulären OpenAI-Modelle mit deutlich weniger Ablehnungen bei Sicherheitsanalysen | Speziell trainierte Cyber-Modelle für autorisierte Schwachstellenforschung und Pentests |
| Voraussetzung | Identitätsprüfung, hardware-gestützter Passkey | Separate Freigabe, Blue reicht nicht |
| Wir | Freigeschaltet seit 28.10.2026 | Nicht freigeschaltet |

Was das praktisch heißt: Bei einem Security-Review frage ich ein Modell, wie sich eine bestimmte Stelle im Code ausnutzen ließe. Ohne Freigabe bekommt man bei solchen Fragen öfter eine Ablehnung, weil das Modell nicht weiß, ob ich verteidige oder angreife. Mit Daybreak Blue kann ich tiefer gehen. Anthropic hat mit seinem Cyber Verification Program etwas Vergleichbares ([Help Net Security](https://www.helpnetsecurity.com/2026/10/07/anthropic-expands-cyber-verification-program/)).

Damit ich das nicht größer mache, als es ist: Blue ist die erste Stufe. Es macht mich nicht zum Pentester und ersetzt keinen professionellen Penetrationstest, wenn ein Kunde den braucht. Es ist ein weiterer Baustein, zusammen mit 2FA, Hardware-Schlüsseln und minimalen Rechten.

## Wo ich mir selbst widerspreche

Zwei Dinge, die ich offen sagen will.

**Erstens Self-Hosting.** Ich sage „große Anbieter nutzen“ und betreibe trotzdem einen eigenen Server. Der Unterschied ist für mich, ob man weiß, was man tut. Ein Hetzner-Server mit offenem SSH-Port und Standard-Passwort ist gefährlicher als jeder Managed-Dienst. Derselbe Server hinter Tailscale, mit SSH-Key, Firewall und automatischen Updates ist vertretbar. Wer das nicht selbst einrichten kann, sollte es lassen oder sich Hilfe holen.

**Zweitens Vibe Coding.** Ich habe mich auf LinkedIn oft darüber lustig gemacht. Für Prototypen hat es seine Berechtigung, und ich sehe Kunden, die damit erstaunlich weit kommen. Aber diese Woche zeigt, wie groß die Lücke ist zwischen Leuten, die Software verstehen, und Leuten, die mit KI produktive Anwendungen bauen, ohne zu wissen, was darunter passiert. Die Angreifer nutzen dieselben Modelle wie wir. Wer seine Anwendung nicht versteht, kann sie auch nicht absichern.

Ich bin froh, dass ich vor vielen Jahren angefangen habe zu programmieren, ganz ohne KI: Bachelor in Wirtschaftsinformatik, mehrere Jahre als Entwickler und DevOps-Engineer bei Daimler. Damals fand ich manches davon trocken. Heute sind das genau die Grundlagen, die zählen.

## Fünf Fragen für deine Firma

Du musst kein Security-Team haben, um dir diese Fragen zu stellen:

- **Welche fünf Konten würden deine Firma lahmlegen, wenn jemand sie übernimmt?** Haben die alle einen Hardware-Schlüssel oder Passkey?
- **Wenn dein Hosting-Anbieter heute sagt „bitte alle Secrets erneuern“: Weißt du, wo sie alle stecken?**
- **Welche Rechte haben deine KI-Agenten und Automatisierungen wirklich?** Und brauchen sie die alle?
- **Wer spielt Sicherheitsupdates ein, und wie schnell?**
- **Wann wurde deine wichtigste Anwendung das letzte Mal von jemand anderem als ihrem Entwickler auf Sicherheit geprüft?**

Die ausführliche Checkliste mit allen sieben Bausteinen, Tabellen, einem interaktiven Selbst-Check und den Meldepflichten nach DSGVO, NIS2 und Cyber Resilience Act habe ich [im TAISC-Blog zur KI-Sicherheit im Unternehmen](https://www.theaisoftwarecompany.com/blog/ki-sicherheit-unternehmen/) aufgeschrieben.

Wann hast du das letzte Mal einen echten Security-Check deiner Anwendungen gemacht? Wenn die ehrliche Antwort „noch nie“ ist oder du gerade vor einem Go-live stehst: [Lass uns sprechen](/kontakt/).
