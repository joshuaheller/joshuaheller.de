---
title: 'Build or Buy: Was ich Kund:innen wirklich rate, nach über einem Dutzend Projekten'
description: 'Fast jede Anfrage beginnt inzwischen mit "können wir das nicht einfach selbst bauen?". Mein ehrliches Stufenmodell für die Build-or-Buy-Frage, illustriert an einem echten Kundenprojekt.'
pubDate: 2026-09-23
category: 'KI-Strategie'
readingTime: '8 Min.'
heroImage: 'build-or-buy-stufenmodell.png'
draft: false
---

> **TL;DR**
> - "Können wir das nicht einfach selbst bauen?" höre ich inzwischen in fast jedem Erstgespräch, seit Tools wie Lovable oder Claude Code das technisch möglich machen.
> - Baubarkeit ist aber nie die richtige Frage. Ich denke in drei Stufen: bestehende Lösung erweitern, Teilbereich selbst bauen, komplett selbst bauen. Die meisten Projekte brauchen nie Stufe 3.
> - Am Beispiel eines Wärmepumpen-Betriebs zeige ich, wie diese Entscheidung in der Praxis aussieht, und wo ich selbst am Anfang zu schnell zu viel bauen wollte.

## Die Frage, die sich verändert hat

Vor zwei, drei Jahren fragten mich Kund:innen: "Können Sie uns das bauen?" Heute lautet die Frage fast immer anders: "Wir haben mit Claude oder Lovable schon einen Prototyp gebaut, brauchen wir jetzt noch Sie?" Das ist ein gutes Zeichen, es bedeutet, dass Leute mit KI-Tools ernsthaft experimentieren. Aber es verschiebt auch, worüber ich in Erstgesprächen wirklich rede: nicht mehr "ob" gebaut werden kann, sondern "ob" und "wie viel" gebaut werden sollte.

Meine ehrliche Antwort hat sich über gut ein Dutzend Projekte in ein Stufenmodell verdichtet, das ich seitdem in fast jedem Discovery-Gespräch benutze. Für die Zahlen und Studien dahinter, Gartner-Daten zu Softwarekauf-Reue, den EU Data Act, aktuelle Datenhoheit-Umfragen im deutschen Mittelstand, verweise ich gerne auf den ausführlicheren [Beitrag dazu auf theaisoftwarecompany.com](https://www.theaisoftwarecompany.com/blog/build-or-buy-softwareentscheidung/). Hier will ich stattdessen erzählen, wie sich diese Entscheidung in echten Projekten tatsächlich anfühlt, inklusive der Stelle, an der ich selbst früher zu schnell zu groß gedacht habe.

## Drei Stufen, die ich fast immer in dieser Reihenfolge empfehle

1. **Bestehende Lösung erweitern.** Ein Standardtool nehmen, das 80 Prozent abdeckt, und die Lücken mit Automatisierung schließen, oft reicht n8n plus ein bisschen KI, um manuelle Handarbeit rauszunehmen.
2. **Einen Teilbereich selbst bauen.** Ein Dashboard oder Tool, das an bestehende Systeme andockt (CRM, ERP, Rechnungstool) und für genau den einen Prozess eine bessere Lösung liefert, der wirklich individuell ist.
3. **Komplett selbst bauen.** Eigene Datenbank, eigenes Frontend, eigenes Backend als führendes System. Das empfehle ich am seltensten, und nie als ersten Schritt.

Der Denkfehler, den ich am häufigsten sehe, bei Kund:innen und früher bei mir selbst, ist, direkt bei Stufe 3 einzusteigen, weil sich das nach der "richtigen", nach der ambitionierten Lösung anfühlt. Baubarkeit war noch nie das Problem. Das Problem ist, was in Monat sieben passiert, wenn sich der Prozess ändert und niemand mehr Kapazität hat, das eigene System zu pflegen.

## Wie das bei einem echten Projekt aussah

Das beste Beispiel dafür ist ein Wärmepumpen-Betrieb, über den ich [ausführlich geschrieben habe](/blog/wmk-kundenprojekt-lehren/). Angefragt wurde ursprünglich eine kleine n8n-Automatisierung, im Grunde Stufe 1. Im Gespräch wurde schnell klar: Der eigentliche Engpass war die Auftragsverteilung an Subunternehmer, ein Prozess, der so spezifisch auf die Betriebsabläufe zugeschnitten war, dass kein Standardtool wirklich passte. Am Ende sind wir in weniger als zwei Monaten direkt bei einem eigenen Auftragsverwaltungstool gelandet, das heute über zwölf Mitarbeitende täglich nutzen, faktisch Stufe 3, aber mit einer sauberen Begründung: Der Prozess war tatsächlich einzigartig genug, und der Kunde wusste von Anfang an genau, was er wollte.

Der Unterschied zu Projekten, die ich abgelehnt oder zurückgestuft habe: Dort war die Anfrage "wir wollen ein eigenes CRM", aber die Datenstruktur dahinter war komplett Standard. Kein Alleinstellungsmerkmal, keine Besonderheit, nur der Wunsch, etwas "Eigenes" zu haben. In diesen Fällen habe ich zu Stufe 1 geraten, auch wenn das für mich als Auftragnehmer wirtschaftlich weniger Auftragsvolumen bedeutet hat. Ehrlich gesagt ist genau das der Teil meiner Arbeit, auf den ich am meisten stolz bin: Kund:innen von einem zu großen Projekt runterzuholen, nicht sie in eins hineinzureden.

## Was ich an mir selbst korrigieren musste

Als ich vor einigen Jahren angefangen habe, war meine erste Reaktion auf fast jede Anfrage: bauen. Das lag nicht an schlechter Beratung, sondern daran, dass Bauen der Teil ist, der mir am meisten Spaß macht. Die teure Lektion war, dass ein technisch elegant gebautes Tool, das ein Kunde danach nicht pflegen kann oder will, am Ende genauso ungenutzt herumliegt wie eine falsch eingeführte SaaS-Lizenz. Ich habe das aus der anderen Richtung beleuchtet, als ich einem Kunden nach dem Kauf half, eine [Sicherheitsprüfung für ein selbst gebautes Intranet](/blog/vibe-coding-security-check-kunde/) durchzuführen, das mit Klick-Tools ohne Entwicklerteam entstanden war: technisch beeindruckend, aber ohne die Absicherung, die produktiver Betrieb braucht.

Seitdem frage ich in jedem Erstgespräch aktiv gegen meinen eigenen Bauinstinkt: Würde eine bestehende Lösung plus etwas Automatisierung nicht auch reichen? Nur wenn die Antwort ehrlich Nein ist, gehen wir eine Stufe weiter.

## Meine Faustregel für Stufe 2 vs. Stufe 3

Die Grenze, die mir am meisten hilft: Wie standardisiert sind die Daten? Bei einem CRM sind Kontaktdaten, Deal-Stages und Aktivitäten branchenübergreifend fast identisch, hier lohnt sich selten der volle Eigenbau. Bei einem Auftragsverwaltungssystem für eine Nischenbranche mit eigenen Abläufen, eigenen Rollen, eigenen Reklamationswegen sieht das anders aus, dort wird aus dem Datenmodell selbst ein Wettbewerbsvorteil.

Wenn du gerade selbst überlegst, ob dein nächstes Tool eine bestehende Lösung, ein Teilbau oder ein kompletter Eigenbau werden sollte: [Lass uns unverbindlich 30 Minuten darüber sprechen](/kontakt/). Ich sage dir ehrlich, wenn ich glaube, dass Stufe 1 für dich reicht, auch wenn das für mich weniger Projekt bedeutet.
