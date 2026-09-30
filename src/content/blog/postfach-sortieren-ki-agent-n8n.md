---
title: 'E-Mails automatisch sortieren mit KI: Mein n8n-Agent für ein paar Cent am Tag'
description: 'Drei Jahre KI-Arbeit, und mein Postfach habe ich trotzdem von Hand sortiert. Wie ich mir mit n8n, Outlook und Azure OpenAI einen Sortier-Agenten gebaut habe, und was ich in meinem LinkedIn-Post dazu nicht ganz richtig hatte.'
pubDate: 2026-09-30
category: 'Tools & Stacks'
readingTime: '7 Min.'
heroImage: 'postfach-sortieren-ki-agent-n8n.png'
draft: false
---

> **TL;DR**
> - Ich habe mir mit n8n einen kleinen KI-Agenten gebaut, der zweimal am Tag mein Outlook-Postfach aufräumt. Kundenanfragen, Rechnungen und Newsletter landen jeweils in einem eigenen Ordner.
> - Das Modell kostet rund 3 Cent am Tag. Der ehrliche Gesamtpreis liegt aber beim Server, nicht beim Modell.
> - In meinem LinkedIn-Post stand, die KI laufe „auf deutschen Servern“. Beim Nachprüfen hat sich gezeigt: Das stimmt so nicht ganz. Warum, erkläre ich unten.

## Der Schuster und seine Schuhe

Ich arbeite seit über drei Jahren mit KI, baue für Kund:innen Agenten und Automationen, und habe meine E-Mails trotzdem jeden Tag von Hand sortiert. Newsletter, Kundenanfragen, Rechnungen, Tool-Benachrichtigungen, alles in einem Eingang. Irgendwann war der so voll, dass ich wichtige Mails erst am Abend gesehen habe.

Das Absurde: Technisch war das nie das Problem. n8n ist für mich Alltag, eine solche Automation ist ein Nachmittag. Ich habe einfach nicht angefangen. Das ist übrigens das Muster, das ich auch bei vielen Unternehmen sehe. Es scheitert selten an der Technologie, sondern daran, dass niemand den ersten Workflow baut.

## Was der Agent macht

Das Setup ist bewusst klein:

- **Zweimal am Tag, mittags und abends**, startet ein n8n-Workflow per Zeitplan.
- Er holt alle neuen Mails über die **Microsoft-Graph-API** aus meinem Microsoft-365-Postfach.
- Ein **KI-Agent mit GPT-5.4 mini über Azure OpenAI** liest jede Mail und ordnet sie genau einer Kategorie zu.
- n8n **verschiebt** die Mail dann in den passenden Ordner.

Wichtig war mir: Ich sehe weiterhin live, was reinkommt. Der Agent sortiert nicht bei jeder einzelnen Mail sofort, sondern räumt zu festen Zeiten auf. So wird das Aufräumen nicht selbst zur Ablenkung. Wenn ich an einem vollen Tag nicht hinterherkomme, arbeite ich zuerst den Ordner mit Kundenanfragen ab. Die KI-Newsletter lese ich abends.

## Drei Dinge, die ich bewusst so gebaut habe

**Die KI entscheidet nur die Kategorie.** Das Modell gibt einen Wert aus einer festen Liste zurück, nichts sonst. Das Verschieben, die Fehlerbehandlung und die Sonderregeln sind normale n8n-Logik. Das ist günstiger, und ich kann jederzeit nachvollziehen, warum eine Mail wo gelandet ist.

**Im Zweifel bleibt die Mail liegen.** Eine falsch einsortierte Kundenanfrage ist schlimmer als eine unsortierte. Unklare Fälle bleiben deshalb einfach im Eingang.

**Korrekturen machen ihn besser.** Wenn der Agent danebenliegt, schiebe ich die Mail zurück. Solche Fälle nehme ich als Beispiele in die Anweisung an das Modell auf. Kein Training, kein Aufwand, aber die Trefferquote wird mit jeder Woche besser.

## Was das wirklich kostet

In meinem LinkedIn-Post stand: 3 Cent pro Tag, also unter 1 € im Monat. Das stimmt für das Modell. Ich habe es für diesen Beitrag mit den aktuellen Azure-Listenpreisen nachgerechnet. Bei rund 40 Mails am Tag und etwa 1.000 Tokens pro Mail landet man bei etwa 4 US-Cent am Tag. Das passt.

Unterschlagen habe ich aber den Server, und der ist gerade teurer geworden. Der kleinste passende Server bei Hetzner (CX23) kostet seit dem 15. Juni [5,49 € netto im Monat](https://docs.hetzner.com/general/infrastructure-and-availability/price-adjustment/), vorher waren es 3,99 €.

| Posten | Kosten pro Monat | Anmerkung |
|---|---|---|
| Sprachmodell (GPT-5.4 mini, Azure) | ca. 1 € | gemessen, ca. 3 Cent am Tag |
| Server (Hetzner CX23) | 5,49 € netto | Preis seit 15.06.2026 |
| n8n (Community Edition) | 0 € | selbst gehostet, interne Nutzung |
| Meine Zeit für Updates | nicht null | n8n hatte 2026 mehrere kritische Sicherheitslücken |

Ehrlicher Gesamtpreis also: eher 7 € im Monat als 1 €. Der Server läuft allerdings ohnehin für weitere Workflows. Und gemessen an der Zeit, die ich jeden Tag nicht mehr mit Sortieren verbringe, ist das immer noch ein Witz.

Der letzte Punkt in der Tabelle ist mir wichtig. Wer n8n selbst hostet, muss Updates ernst nehmen. Die Lücke „Ni8mare“ (CVE-2026-21858) hatte im Januar 2026 die Höchstwertung CVSS 10.0. Updates gehören deshalb fest in den Kalender, und der Editor gehört nicht offen ins Internet.

## Wo ich mich im LinkedIn-Post geirrt habe

Ich hatte geschrieben, OpenAI laufe über Azure „auf deutschen Servern“. Mein Azure-Projekt liegt in der Region Germany West Central, deshalb war ich davon ausgegangen. Beim Recherchieren für diesen Beitrag habe ich nachgeschaut. GPT-5.4 mini gibt es in dieser Region laut [Microsoft](https://learn.microsoft.com/en-us/azure/foundry/foundry-models/concepts/models-sold-directly-by-azure-region-availability) nur als „Data Zone Standard“-Deployment. Die Daten bleiben damit in der EU-Datengrenze von Microsoft, können aber auch in einem anderen EU-Rechenzentrum verarbeitet werden, nicht zwingend in Deutschland.

Für mein Postfach ist das völlig in Ordnung, die Verarbeitung bleibt in der EU, und genau das war mir wichtig. Aber es ist ein gutes Beispiel für etwas, das ich auch bei Kund:innen immer wieder sehe: Die Region im Azure-Portal sagt nicht automatisch, wo das Modell rechnet. Wer wirklich „nur Deutschland“ braucht, muss das pro Modell prüfen oder auf ein [lokales Modell](/ki-glossar/on-premise-hosting/) ausweichen. Mehr zum Thema [Datenschutz bei KI](/ki-glossar/dsgvo-datenschutz/) steht in meinem Glossar.

## Was ich daraus mitnehme

1. **Der erste Workflow ist der schwerste, nicht technisch, sondern mental.** Die Hürde war nie n8n, sondern der Entschluss, sich einen Nachmittag dafür zu nehmen.
2. **Ein [Agent](/ki-glossar/agent/) braucht keine große Aufgabe.** Eine einzige, eng umrissene Entscheidung („welcher Ordner?“) reicht, damit KI im Alltag spürbar hilft.
3. **Behauptungen nachprüfen lohnt sich, auch die eigenen.** Zwei Zahlen aus meinem eigenen Post haben sich beim Nachprüfen verschoben. Genau deshalb schreibe ich solche Beiträge.

Wenn du wissen willst, was n8n im Unternehmen kostet, wie man es DSGVO-konform betreibt und ab wann eigener Code die bessere Wahl ist, haben wir das bei TAISC ausführlich aufgeschrieben: [n8n im Unternehmen: Workflows, Kosten, DSGVO und Grenzen](https://www.theaisoftwarecompany.com/blog/n8n-workflow-unternehmen/).

Und wenn du selbst einen Prozess hast, bei dem du denkst „das müsste doch automatisch gehen“: Genau darüber spreche ich gerne im [KI-Sparring](/ki-sparring/). Oder schreib mir direkt über die [Kontaktseite](/kontakt/).
