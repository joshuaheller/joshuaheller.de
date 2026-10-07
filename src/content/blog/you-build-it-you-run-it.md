---
title: 'You build it, you run it: Warum mein Job mit dem Go-live nicht endet'
description: 'Viele bauen ein MVP, übergeben es und sind weg. Ich nicht. Was nach dem Go-live eines Kundenprojekts wirklich passiert ist, welchen Support-Prozess wir nachgezogen haben und welche fünf Fragen du deinem Dienstleister vor dem Start stellen solltest.'
pubDate: 2026-10-07
category: 'Build in Public'
readingTime: '7 Min.'
heroImage: 'you-build-it-you-run-it.png'
draft: false
---

> **TL;DR**
> - „You build it, you run it“ hat Amazon-CTO Werner Vogels schon 2006 gesagt. Für mich ist der Satz das Motto meiner Arbeit: Ein Projekt ist mit dem Launch nicht fertig, dann beginnt der Betrieb.
> - Bei einem Kundenprojekt kamen nach dem Go-live viele Rückmeldungen über viele Kanäle. Gebaut war das System gut, betrieben war es anfangs nicht gut genug.
> - Vier einfache Regeln haben das gelöst. Und ich habe gelernt, dass der Betriebsprozess vor den Go-live gehört, nicht danach.

## Der Satz, den ich mir über den Schreibtisch hängen könnte

2006 hat Jim Gray für ACM Queue ein Interview mit Werner Vogels geführt, dem CTO von Amazon. Darin fällt der Satz, der seitdem in fast jedem DevOps-Vortrag zitiert wird: „You build it, you run it.“ Wer ein System baut, betreibt es auch ([AWS News Blog](https://aws.amazon.com/blogs/aws/acm_queue_inter/)).

Bei Amazon ging es um tausende Services und eigene Betriebsteams. Bei mir geht es um Portale, Automatisierungen und KI-Workflows für Mittelständler und Handwerksbetriebe. Der Kern ist trotzdem derselbe. Ich sehe zu oft das andere Modell: MVP bauen, übergeben, Rechnung schreiben, weg. Das Ding läuft danach ja weiter, zumindest wenn man seine Arbeit gut gemacht hat. Es kommen neue Ideen, neue Schnittstellen, Fehler, die kein Test gefunden hat. Und dann sitzt da ein Kunde mit einem System, das niemand mehr kennt.

Das will ich nicht. Nicht aus Romantik, sondern weil ich es für schlechtes Handwerk halte.

## Was nach einem Go-live wirklich passiert ist

Ein Beispiel aus diesem Sommer: Für einen Wärmepumpen-Betrieb habe ich ein Auftragsportal gebaut, mit einer Automatisierung im Hintergrund, die Daten zwischen den Systemen abgleicht. Wie es zu dem Projekt kam und warum es eines meiner liebsten dieses Jahr ist, habe ich [hier aufgeschrieben](/blog/wmk-kundenprojekt-lehren/).

Seit dem Go-live arbeitet das Team täglich damit. Und es kamen Rückmeldungen. Viele. Ehrlich gesagt hat mich das zuerst gefreut: Ein System, zu dem niemand etwas sagt, wird meistens einfach nicht benutzt. Rückmeldungen heißen, dass Leute damit arbeiten und dass es ihnen wichtig ist.

Das Problem war nicht die Menge. Das Problem war der Weg. Meldungen kamen über verschiedene Kanäle und von verschiedenen Personen. Es gab keine gemeinsame Liste, keine Priorisierung, und wenn die Automatisierung im Hintergrund hakte, fiel das erst auf, wenn sich jemand beschwert hat. Das System war gut gebaut. Betrieben war es in den ersten Wochen nicht gut genug.

## Vier Regeln, die das gelöst haben

Gemeinsam mit dem Kunden haben wir einen festen Support-Prozess aufgesetzt. Nichts davon ist neu, aber alles davon hatte vorher gefehlt:

1. **Eine Support-Adresse, jede Meldung bekommt eine Ticketnummer.** Kein Zuruf mehr, kein „ich hatte dir doch letzte Woche geschrieben“.
2. **Ein festes Log.** Jede Meldung, jede Ursache, jede Lösung an einer Stelle. Damit sieht man nach zwei Wochen, welche Bereiche wirklich wackeln.
3. **Ein Review-Termin alle zwei Wochen.** Wir gehen das Log durch und trennen Fehler von Wünschen. Ohne diesen Termin wird jeder Wunsch zum dringenden Fehler, und echte Fehler warten hinter Komfortfunktionen.
4. **Ein kleiner Kreis an Meldeberechtigten.** Nicht jede Person meldet direkt an mich. Ein paar Leute, die das System gut kennen, beantworten einfache Fragen im Team und bündeln den Rest.

Dazu gehört für mich die technische Seite: Abbrüche einer Automatisierung müssen sich selbst melden, statt still zu scheitern. In n8n ist das ein Fehler-Workflow, den man in den Workflow-Einstellungen hinterlegt ([n8n-Doku](https://docs.n8n.io/flow-logic/error-handling/)). Fünf Minuten Arbeit, die in vielen Workflows fehlen, die ich übernehme.

Das Ergebnis: Aus Zuruf und Bauchgefühl ist ein Ablauf geworden, der Prioritäten kennt und Störungen früh sichtbar macht. Das Portal wird seitdem Schritt für Schritt besser, statt mit jeder Anfrage unübersichtlicher.

## Was ich daraus mitnehme

Der Teil, der mich selbst betrifft: Ich hätte diesen Prozess vor dem Go-live aufsetzen sollen, nicht ein paar Wochen danach. Ich war so auf das Bauen fokussiert, dass der Betrieb in meinem Kopf „später“ war. Dabei gibt es dafür sogar einen etablierten Begriff, die Hypercare-Phase: die ersten Wochen nach dem Go-live, in denen das Team besonders eng am System bleibt und alles an einer Stelle zusammenläuft. In großen ERP-Projekten ist das Standard. In kleinen Projekten wird sie gern vergessen.

Seitdem gehört bei mir ein Betriebsplan in jeden Projektplan: Wer meldet, wohin, wie oft schauen wir gemeinsam drauf, was überwacht das System selbst, und wann ist die intensive Phase vorbei? Die fachliche Seite dazu, mit Exit-Kriterien, Tabellen und einem interaktiven Check, habe ich [im TAISC-Blog zur Hypercare-Phase](https://www.theaisoftwarecompany.com/blog/hypercare-phase/) ausführlich aufgeschrieben.

Ein zweiter Punkt, der mir wichtig ist: Mit KI baue ich heute in Tagen, wofür ich früher Wochen gebraucht hätte. Das macht den Betrieb nicht weniger wichtig, sondern wichtiger. Der DORA-Report 2024 von Google Cloud hat gezeigt, dass mit steigendem KI-Einsatz in der Entwicklung die Stabilität der Auslieferung um geschätzt 7,2 % gesunken ist ([Google Cloud](https://cloud.google.com/blog/products/devops-sre/announcing-the-2024-dora-report)). Schneller bauen ohne sauberen Betrieb heißt nur: schneller Probleme produzieren. Wie wichtig der Schritt in die Produktion ist, habe ich auch bei einem [Security-Check für ein selbst gebautes Intranet](/blog/vibe-coding-security-check-kunde/) gesehen.

## Fünf Fragen, die du deinem Dienstleister vor dem Start stellen solltest

Wenn du gerade ein Softwareprojekt oder eine Automatisierung vergibst, frag nicht nur, was gebaut wird. Frag, was nach dem Go-live passiert:

- **Wer betreut das System in den ersten Wochen nach dem Go-live, und wie schnell?** Wenn die Antwort „melden Sie sich einfach“ ist, gibt es keinen Plan.
- **Wohin melde ich Fehler, und wie behalte ich den Überblick?** Ein fester Kanal mit Ticketnummer ist kein Luxus.
- **Woran merkt ihr, dass etwas kaputt ist, bevor ich es merke?** Monitoring, das niemand anschaut, zählt nicht.
- **Wer spielt Sicherheitsupdates ein, und wie oft?** Software altert, auch wenn man sie nicht anfasst.
- **Wie kommen neue Wünsche ins System, ohne dass alles andere liegen bleibt?** Ein fester Review-Rhythmus beantwortet das.

Ein guter Partner hat auf jede dieser Fragen eine konkrete Antwort, bevor der erste Code geschrieben ist.

## Mein Anspruch

Wer Software nur gebaut haben will, findet viele Anbieter. Mein Anspruch ist Full-Service von der Idee bis zum laufenden Produkt: Betreuung, Weiterentwicklung, Support, Fehlerbehebung und neue Schnittstellen. Gerade bei einem [MVP](/mvp/), das schnell entsteht, ist das der Unterschied zwischen einem Prototyp und einem Werkzeug, mit dem ein Team jeden Tag arbeitet.

Wie war das bei dir: Gab es nach dem letzten Go-live einen festen Ansprechpartner, oder lief es einfach irgendwie weiter? Wenn du gerade vor einem Launch stehst oder ein System hast, das läuft, aber niemand so richtig betreut: [Lass uns unverbindlich sprechen](/kontakt/).
