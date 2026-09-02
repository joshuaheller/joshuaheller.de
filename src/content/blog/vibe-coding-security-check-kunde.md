---
title: 'Mein Kunde hat sein halbes Unternehmen ohne Entwickler gebaut – dann holte er mich für den Security-Check'
description: 'Ein Geschäftsführer ohne Tech-Team baut mit Claude ein komplettes Intranet. Bevor 30 Leute Zugriff bekommen, stoppt er sich selbst. Was mir dieses Projekt über die Grenze zwischen Selberbauen und Profi-holen beigebracht hat.'
pubDate: 2026-09-02
category: 'Build in Public'
readingTime: '8 Min.'
heroImage: 'vibe-coding-security-check.png'
draft: false
---

> **TL;DR**
> - Ein neuer Kunde hat ohne Entwickler-Team ein Intranet, Dashboards und Verwaltungstools mit Claude, Supabase und Vercel gebaut – und das erstaunlich gut.
> - Kurz vor dem Rollout an 30 Mitarbeitende hat er sich selbst gestoppt und einen Security-Check bestellt. Genau das ist die richtige Entscheidung.
> - Die spannende Kompetenz im KI-Zeitalter ist nicht „alles selbst bauen können", sondern zu wissen, wo die eigene Grenze verläuft.

## Der Moment, der mich beeindruckt hat

Mein neuer Kunde ist kein Entwickler. Er ist Geschäftsführer in der Ferienimmobilien-Branche, kein Tech-Team im Haus. Was er sich trotzdem mit Claude gebaut hat, hat mich ehrlich beeindruckt: ein Intranet mit Schichtplanung, Urlaubsverwaltung und internem Wiki, dazu mehrere Dashboards, die Daten aus über 20 Quellen zusammenziehen. Alles selbst, mit Claude, Supabase und Vercel.

Ich habe schon Projekte von echten Teams gesehen, die weniger durchdacht waren. Und ich sage das nicht, um nett zu sein – sondern weil es der ehrliche Eindruck war, als ich das erste Mal reingeschaut habe.

Dann kam der Punkt, der mich noch mehr beeindruckt hat. Bevor knapp 30 Mitarbeitende Zugriff bekommen, wollte er es prüfen lassen. Von jemandem, der das jeden Tag macht. Nicht live schalten, hoffen, und erst anrufen, wenn es brennt – sondern vorher fragen: Ist das eigentlich sicher?

## Warum das die eigentlich schwierige Entscheidung ist

Sich selbst zu stoppen, wenn gerade alles läuft, ist schwer. Die App funktioniert, sie sieht gut aus, die ersten Kolleg:innen sind begeistert. Genau in diesem Moment „nochmal jemanden draufschauen lassen" zu sagen, kostet Überwindung – und ist trotzdem die reifste Entscheidung, die man treffen kann.

Denn der Übergang, an dem es kippt, ist unsichtbar. Eine App, die „bei mir läuft", ist etwas anderes als ein System, mit dem 30 Leute arbeiten und in dem personenbezogene Daten liegen. Der Code sieht in beiden Fällen gleich fertig aus. Der Unterschied liegt unter der Oberfläche: bei Rollen und Rechten, bei der Datenbank, bei der Frage, ob wirklich jeder nur seine eigenen Daten sieht.

Und das ist keine Kleinigkeit, die nur mich als vorsichtigen Entwickler umtreibt. Untersuchungen aus der Application-Security-Branche zeigen, dass rund 45 % des von KI generierten Codes eine gängige Sicherheitslücke enthält, und ein prominenter Vorfall aus 2025 hat Daten aus über 170 mit einem No-Code-Tool gebauten Apps offengelegt – schlicht, weil die Zugriffsregeln der Datenbank nie eingeschaltet wurden. Die technischen Details und Zahlen dazu habe ich [im TAISC-Blog ausführlich aufgeschrieben](https://www.theaisoftwarecompany.com/blog/vibe-coding-sicherheit-produktion-devops/). Hier will ich über etwas anderes schreiben: über die Grenze selbst.

## Wo ich die Grenze ziehe

Wenn mich Leute fragen, ab wann sie aufhören sollten, selbst zu bauen, und jemanden holen sollten, dann gebe ich keine Technologie-Antwort. Ich stelle drei Fragen:

- **Greifen mehr als du selbst darauf zu?** Solange es dein persönliches Tool ist, ist fast alles okay. Sobald ein Team dranhängt, ändern sich die Spielregeln.
- **Liegen echte Daten drin – von Kund:innen, Mitarbeitenden, Dritten?** Ab dann ist ein Datenleck kein Ärgernis mehr, sondern im DACH-Raum schnell ein DSGVO-Thema mit Meldepflicht.
- **Würde es wehtun, wenn das System morgen für einen Tag ausfällt oder Daten verloren gehen?** Wenn ja, brauchst du Back-ups, getrennte Umgebungen und ein sauberes Deployment – also das, was in der Softwarewelt DevOps heißt.

Dreimal Ja heißt nicht „du hättest es nicht selbst bauen dürfen". Es heißt: Jetzt ist der Punkt, an dem sich ein zweites Paar Augen lohnt. Nicht um dein Werk zu ersetzen, sondern um es tragfähig zu machen.

## Was das mit meiner Arbeit zu tun hat

Genau an dieser Grenze arbeite ich am liebsten. Ich baue Software für Kund:innen – aber immer öfter besteht der Wert nicht darin, etwas komplett neu zu bauen, sondern etwas Selbstgebautes über die Ziellinie zu bringen: Security, Rollen und Rechte, Deployment, der Schritt in den stabilen Betrieb. Das ist der Kern dessen, was ich als [Forward Deployed Engineering](/blog/forward-deployed-engineering-dach/) beschreibe – direkt im Kontext des Kunden, statt aus der Distanz Anforderungen zu verwalten.

Ich finde diese Entwicklung großartig. Je mehr Menschen selbst bauen, desto besser verstehen sie, was Software eigentlich ist – und desto klarer wird, wo der Punkt kommt, an dem sich Erfahrung auszahlt. Ähnlich habe ich das schon beim [WMK-Projekt erlebt](/blog/wmk-kundenprojekt-lehren/): klein anfangen, Vertrauen aufbauen, dann gemeinsam größer werden.

Für viele ist der ehrlichste erste Schritt nicht „bau mir das", sondern „schau mal drauf, bevor ich live gehe". Genau dafür ist mein [KI-Sparring](/ki-sparring/) gedacht: kein monatelanges Projekt, sondern ein fokussierter Blick von jemandem, der beide Welten kennt – selbst mit KI baut und weiß, was in Produktion schiefgeht.

## Wie es weitergeht

Ich stecke gerade mitten im Check: Datenbank, Login, Rollen und Rechte, dazu die kritischen Schnittstellen. Wie das Ergebnis aussieht, erzähle ich, wenn ich durch bin – Build in Public heißt für mich auch, die unfertigen Teile zu zeigen.

Was für mich jetzt schon feststeht: Der spannendste Teil des KI-Zeitalters ist nicht, dass plötzlich alle alles bauen können. Es ist, dass die wichtigste Fähigkeit eine sehr menschliche bleibt – zu wissen, wo die eigene Kompetenz endet und wann man jemanden dazuholt.

Wenn du selbst gerade an dem Punkt bist, wo aus deinem Bastel-Tool ein echtes System wird: [lass uns unverbindlich reden](/kontakt/), am liebsten bevor die ersten 30 Leute Zugriff bekommen.
