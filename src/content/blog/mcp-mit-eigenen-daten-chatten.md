---
title: 'Ich habe Google Analytics an meine IDE angeschlossen – und verstanden, wohin KI geht'
description: 'Ein Nachmittag mit dem Model Context Protocol (MCP) hat meine Sicht auf KI-Beratung verändert. Warum "sag der KI, was du willst – nicht wie" mehr ist als ein Spruch, und was das für Gründer und Berater bedeutet.'
pubDate: 2026-09-16
category: 'Tools & Stacks'
readingTime: '8 Min.'
heroImage: 'mcp-mit-eigenen-daten-chatten.png'
draft: false
---

> **TL;DR**
> - Ich habe Google Analytics per Model Context Protocol (MCP) an meine Entwicklungsumgebung angebunden und frage seitdem einfach in Klartext nach Reports – statt mich durch das GA4-UI zu klicken.
> - Der eigentliche Aha-Moment war nicht der Report, sondern der Gedanke danach: Wir sagen der KI zunehmend, *was* wir wollen. Das *Wie* wird immer unwichtiger.
> - In den Monaten seit meinem Experiment ist aus MCP ein herstellerneutraler Industrie-Standard geworden – getragen von OpenAI, Google, Microsoft und der Linux Foundation. Für Gründer und Berater verschiebt das, wo der eigentliche Wert liegt.

## Ein Nachmittag, der hängen geblieben ist

Ich mag Google Analytics. Die Datentiefe ist top. Aber mit dem UI komme ich einfach nicht klar – und Custom Reports zu bauen finde ich ehrlich gesagt einen Alptraum. Also habe ich mir an einem Nachmittag das **Model Context Protocol (MCP)** vorgenommen und einen Google-Analytics-Server an meine IDE (bei mir: Cursor) angebunden.

Danach habe ich einfach getippt:

> „Zeig mir den Traffic seit April für die DACH-Region und schau dir für jedes der drei Länder die Traffic-Quellen an."

Und der Agent hat mir den fertigen Bericht ausgespuckt. Mit echten GA4-Daten. Ohne einen einzigen Klick durch Menüs. Ich saß da und dachte: *Das ist es. Genau so will ich mit Daten arbeiten.*

Der Traum, mit den eigenen Daten zu chatten, ist ja nicht neu. Aber in der Realität war er bisher fast immer unwirtschaftlich: veraltete oder schlecht dokumentierte Schnittstellen, oder APIs, die so umfangreich sind, dass man Wochen braucht, sie zu verstehen. MCP räumt genau diese Hürde weg. Es ist so etwas wie ein USB-C-Stecker für KI: ein Standard, in den sich Datenquellen einklinken, statt für jede eine eigene Integration zu bauen.

Die technische Langfassung – wie MCP im Detail funktioniert, die aktuellen Zahlen für 2026 und worauf man bei der Sicherheit achten muss – habe ich [drüben im TAISC-Blog aufgeschrieben](https://www.theaisoftwarecompany.com/blog/model-context-protocol-mcp/). Hier will ich über den Teil schreiben, der mich als Gründer nicht mehr loslässt.

## Der eigentliche Aha-Moment kam erst danach

Der Report war cool. Aber hängen geblieben ist ein Gedanke, der mich seitdem begleitet:

**Wir sagen der KI immer mehr, *was* wir wollen. Das *Wie* wird zunehmend irrelevant.**

Früher hätte „ich will diese Auswertung" bedeutet: Doku lesen, Query bauen, Report konfigurieren, Format anpassen. Lauter Schritte, die nichts mit meiner eigentlichen Frage zu tun haben. Mit MCP schrumpft dieser Zwischenraum zusammen. Ich formuliere das Ergebnis – der Weg dorthin ist Sache des Agenten.

Das klingt harmlos, ist aber eine Verschiebung, die ich ernst nehme. Wenn das „Wie" zur Commodity wird, verschiebt sich der Wert dorthin, wo er eigentlich immer hingehörte: zur richtigen Frage. Zur sauberen Datenbasis. Zur Fähigkeit, ein Ergebnis zu beurteilen, statt es nur zu produzieren.

## Was das für Berater und Gründer bedeutet

Ich verdiene mein Geld unter anderem damit, Unternehmen bei KI zu beraten. Da könnte man meinen, ein Standard, der Integrationen trivial macht, entwertet die Arbeit. Ich sehe das Gegenteil – aber der Schwerpunkt verschiebt sich:

- **Die Datengrundlage wird wichtiger, nicht unwichtiger.** MCP liefert den Zugang. Aber wenn die Daten unsauber, unvollständig oder ohne Kontext sind, spuckt der schönste Agent Unsinn aus – nur schneller. Genau deshalb schreibe ich seit Jahren, dass [gute Retrieval- und Datenarbeit](/blog/grep-statt-vektor-suche-agentic-search/) den Unterschied macht, nicht das nächste Modell.
- **Urteilsvermögen schlägt Bedienwissen.** Wer nur weiß, wo man in Tool X klickt, wird ersetzbar. Wer beurteilen kann, ob ein Ergebnis stimmt und was es bedeutet, wird wertvoller.
- **Sicherheit wird zur Beratungsleistung.** Ein universeller Anschluss an die eigenen Systeme ist auch ein universelles Einfallstor. Tool Poisoning, zu weit gefasste Rechte, blinde Auto-Ausführung – das sind reale Risiken. Der Teil der Arbeit, der „lass uns das sicher und mit Augenmaß machen" heißt, wird eher mehr.

## Warum ich das jetzt aufschreibe

Als ich Mitte 2025 mit MCP herumgespielt habe, war es ein spannendes Anthropic-Projekt. Ich hätte nicht gedacht, wie schnell es zum Standard wird. Inzwischen haben OpenAI, Google und Microsoft es übernommen, es gibt eine offizielle Server-Registry, und seit Dezember 2025 wird MCP herstellerneutral unter der Linux Foundation weiterentwickelt – in derselben Liga wie Kubernetes oder Node.js.

Das ist für mich ein schönes Beispiel für etwas, das ich immer wieder in Projekten erlebe: Die Tools verändern sich in Rekordzeit. Was sich nicht ändert, ist der Kern der Arbeit. Ich fange auch mit MCP zuerst beim Prozess und bei den Daten an, nicht beim glänzenden neuen Werkzeug – dieselbe Haltung, die ich aus [15 Projekten mitgenommen habe](/blog/ki-readiness-15-projekte-gelernt/).

Wenn ich eine Sache aus diesem Nachmittag mitnehme, dann die: Nicht das Anbinden ist die Kunst. Sondern zu wissen, welche Frage sich lohnt – und ob man der Antwort trauen kann.

Du willst über KI, Daten und wie man das im eigenen Unternehmen sinnvoll (und sicher) einsetzt sprechen? [Lass uns unverbindlich reden.](/kontakt/)
