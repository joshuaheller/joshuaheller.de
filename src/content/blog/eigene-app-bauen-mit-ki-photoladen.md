---
title: 'Eigene App bauen mit KI: Wie ich mir an einem Nachmittag meinen eigenen Bildeditor gebaut habe'
description: 'Statt weiter für Photoshop zu zahlen, hab ich mir mit Claude in 1-2 Stunden einen eigenen macOS-Bildeditor gebaut. Was Photoladen und Maxima über den Wert von Individualsoftware in 2026 verraten.'
pubDate: 2026-08-19
category: 'Tools & Stacks'
readingTime: '10 Min.'
heroImage: 'eigene-app-bauen-mit-ki-photoladen.png'
draft: false
---

> **TL;DR**
> - Photoshop kostet aktuell rund 26 €/Monat im Einzelplan, nicht 60 €, wie ich selbst erst dachte. Trotzdem hab ich aufgehört, dafür zu zahlen.
> - Mit Claude hab ich mir an einem Nachmittag einen eigenen, nativen macOS-Bildeditor gebaut: [Photoladen](https://github.com/joshuaheller/photoladen), Open Source, MIT-lizenziert.
> - Der eigentliche Wert lag nicht im Geld-Sparen. 2026 gibt's dafür längst kostenlose Profi-Tools. Der Wert lag darin, genau das zu bauen, was ich brauche, nicht mehr und nicht weniger.

## Der Auslöser: 26 Euro für 3 % der Funktionen

Ich hab lange gedacht, ich zahle 60 € im Monat für Photoshop. Als ich es für diesen Beitrag nachgeprüft habe, stimmte das gar nicht mehr: Der aktuelle Photoshop-Einzelplan kostet auf [Adobes eigener Preisseite](https://www.adobe.com/de/products/photoshop/plans.html) rund 26 € im Monat, das Foto-Abo mit Lightroom dazu liegt bei etwa 24 €. Auch das ist immer noch Geld für Funktionen, die ich fast nie nutze: zuschneiden, invertieren, komprimieren, verkleinern, Hintergrund entfernen. Das war's im Grunde.

Für genau diese Handvoll Aufgaben gibt es kein wirklich gutes, günstiges Tool, dachte ich. Canvas Background Remover deckt nicht alles ab. Photopea ist solide, aber langsam im Browser, mit Werbung, und man lädt ständig hoch und runter. Also hab ich mir an einem entspannten Freitagnachmittag gedacht: Warum baue ich mir nicht einfach selbst einen kleinen Photoshop-Klon für meinen Mac?

## Der Markt hat sich unter uns verändert

Bevor ich weiter erzähle, wie ich gebaut habe, ein ehrlicher Zwischenstopp: Wäre es 2026 wirklich nur ums Geld gegangen, hätte ich mir den Nachmittag sparen können. Seit Canva den Mutterkonzern Serif übernommen hat, ist **Affinity Photo 2** komplett kostenlos, ein Desktop-Programm, das laut mehreren aktuellen Vergleichstests rund 95 % der Photoshop-Funktionalität abdeckt. GIMP ist seit Jahren kostenlos und mit über 1.000 Plugins hochgradig erweiterbar. Photopea bleibt die stärkste Browser-Option, wer Werbung loswerden will, zahlt dort etwa 5 $ im Monat.

Der Bildbearbeitungsmarkt 2026 ist also ein anderer als noch vor ein, zwei Jahren. Wenn du gerade nach einer kostenlosen Photoshop-Alternative suchst und wirklich alle Profi-Funktionen brauchst: Affinity Photo ist im Zweifel die bessere Antwort als eine selbst gebaute App. Aber genau das war für mich gar nicht die Frage.

## Warum ich trotzdem selbst gebaut hab

Mir ging's nicht darum, die günstigste Lösung zu finden. Mir ging's darum, herauszufinden, was inzwischen tatsächlich möglich ist, wenn man mit KI eine native App für genau das eigene Problem baut, ohne Xcode-Vorwissen, ohne wochenlanges Onboarding in ein fremdes Framework.

Das ist kein Nischenphänomen mehr. Entwickler wie [Simon Willison beschreiben](https://simonwillison.net/2026/Mar/27/vibe-coding-swiftui/), wie sich SwiftUI-Apps inzwischen komplett in einer einzigen Textdatei bauen lassen, weil aktuelle Modelle wie Claude mit Apples Frameworks erstaunlich gut umgehen können. Vor einem Jahr war das noch mühsam, wenig Support für Apples Frameworks, viele manuelle Nacharbeiten. Heute ist genau das der Unterschied.

Ein Teil davon, warum es bei mir am Ende so schnell ging, hängt auch mit etwas zusammen, worüber ich ein paar Tage vorher schon geschrieben habe: Der größte Bottleneck bei der Arbeit mit KI ist selten das Modell, sondern die Tastatur. Wie schnell du Kontext ausdrücken kannst, entscheidet mehr als jeder Prompt-Engineering-Trick. Ich nutze seit ein paar Monaten [Wispr Flow](https://wisprflow.ai) für genau solche Sessions, Sprache statt Tippen. Wer dabei Wert auf lokale Verarbeitung legt: Wispr Flow schickt Bildschirmkontext und Sprachaufnahmen an die Cloud, eine offline-fähige, quelloffene Alternative mit lokalen Whisper-Modellen ist zum Beispiel VoiceInk (GPL-lizenziert, einmalig statt im Abo).

## Der Build: Photoladen

Photoladen lief am Ende innerhalb von ein bis zwei Stunden, mit Claude als Pair-Programmer und ein paar präzisen Prompts, zu einer Version zusammen, die fast alles abdeckt, was ich brauche:

- **Ebenen-Verwaltung** mit Thumbnails und Deckkraft-Reglern
- **Werkzeuge**: Auswahl, Zauberstab, Zuschneiden, Pinsel, Text, Formen
- **Import/Export** in mehreren Formaten, inklusive WebP-Konvertierung über die eingebundene libwebp-Bibliothek
- **Ein-Klick-Hintergrundentfernung** via Apples Vision-Framework, direkt auf dem Gerät
- **Nicht-destruktive Anpassungen**, damit nichts verlorengeht, wenn ich nachträglich korrigiere
- Ein eigenes **`.photoladen`-Projektformat**, das Ebenen und editierbaren Text erhält

Technisch ist es eine native Swift-App, die auf Apples eigenen Bordmitteln aufbaut, Image I/O, Core Image und Vision, statt auf externe Bildverarbeitungs-Bibliotheken. Läuft ab macOS 14, bringt 31 automatisierte Tests mit und steht unter MIT-Lizenz offen auf [GitHub](https://github.com/joshuaheller/photoladen), aktuell in Alpha-Version 0.1. Weil die App nicht notariell von Apple beglaubigt ist, meldet sich beim ersten Start Gatekeeper, das Repo erklärt, wie man das umgeht.

Der Name ist, zugegeben, nicht besonders kreativ: Photoladen, quasi der deutsche Open-Source-Klon von Photoshop.

## Nicht nur Photoladen: Maxima

Photoladen war nicht das einzige kleine Tool, das ich mir in der gleichen Woche gebaut habe. Wer viel mit Claude Code arbeitet, kennt das Problem: Mitten im Flow ist plötzlich das wöchentliche Limit erreicht, mir passiert das ehrlich gesagt auch mit Max-Plan gelegentlich, vor allem bei intensiver Nutzung von Fable, Anthropics aktuellstem Modell.

Ein Freund hatte dafür bereits eine kleine macOS-Statusleisten-App gebaut, [Maxima](https://github.com/aucentiq/maxima), die auf einen Blick zeigt, wie viel Nutzung noch übrig ist, bis zum nächsten Reset. Ich fand die Idee so gut, dass ich das Projekt kurzerhand [geforkt und weiterentwickelt](https://github.com/joshuaheller/maxima) habe. Meine Version zeigt zusätzlich eine 5-Stunden-Session-Anzeige mit Timer, quasi eine Ampel, die mich warnt, bevor ich mitten im Arbeiten ausgebremst werde. Technisch nutzt die App die bereits vorhandenen Claude-Code-OAuth-Zugangsdaten aus der System-Keychain, ohne separaten Login, und liest dabei nur, schreibt aber nie Tokens.

Zwei kleine Tools, ein gemeinsames Muster: nicht die eine große Produktidee, sondern mehrere schmale, exakt zugeschnittene Werkzeuge, gebaut in Stunden statt Wochen.

## Die Kehrseite, die man dazusagen muss

Es wäre unehrlich, hier aufzuhören. Photoladen ist Alpha-Software. Es fehlen Dinge, die ein professionelles Tool selbstverständlich mitbringt: CMYK-Unterstützung, ein Plugin-Ökosystem, so ausgereifte PSD-Kompatibilität wie bei Photopea. Es ist nicht code-signiert, macOS warnt beim ersten Start. Und die Wartung liegt jetzt bei mir, jeder Bug, jedes macOS-Update, das etwas bricht, ist meine Baustelle, nicht die eines Herstellers mit Support-Team.

Der Punkt ist also nicht, dass KI professionelle Software überflüssig macht. Der Punkt ist, dass die Schwelle für den Fall gesunken ist, in dem du nur 5 % eines großen Tools brauchst: Statt dich mit 95 % ungenutzter Komplexität abzufinden oder eine schwache Notlösung zu akzeptieren, kannst du dir dieses eine, schmale Werkzeug heute selbst bauen.

## Ein einfacher Rahmen: selber bauen oder bestehendes Tool nutzen?

| Kriterium | Selber bauen | Bestehendes Tool nutzen |
|---|---|---|
| Umfang der Aufgabe | Schmal, klar abgegrenzt (5-6 Funktionen) | Breit, viele Edge Cases |
| Zeitbudget | Ein paar Stunden zum Experimentieren | Muss heute in Produktion laufen |
| Wartung | Du bist bereit, es selbst zu pflegen | Du brauchst Support/Updates von außen |
| Daten & Kontrolle | Lokal, kein Cloud-Dienst gewünscht | Egal, Cloud ist okay |
| Reifegrad nötig | Persönliches Tool, geringe Fehlertoleranz-Anforderung | Kritischer Business-Prozess |

## Was das für Unternehmen bedeutet

Genau dieses Prinzip, eine Person mit den richtigen Werkzeugen leistet heute, wofür früher ein ganzes Team nötig war, ist auch der Kern meiner Arbeit mit Kunden. Ich hab das in [meinem Beitrag zur MVP-Preisfrage](/blog/warum-mvps-nicht-mehr-50000-euro-kosten-muessen/) schon aus Kundenperspektive beschrieben, und selbst meine [alte imagetocaption.ai-Story](/blog/imagetocaption-350k-solo/) zeigt, wie viel Distribution und Fokus gegenüber Feature-Tiefe wiegen. Photoladen und Maxima sind dasselbe Prinzip, nur an mir selbst getestet statt an einem Kundenprojekt, ganz ähnlich wie die [Routine, die mittlerweile automatisch Blogposts aus meinen LinkedIn-Beiträgen baut](/blog/ki-agenten-bloggen-automatisch-claude-code-routines/).

Für Unternehmen heißt das konkret: Nicht jedes interne Tooling-Problem braucht eine Ausschreibung oder ein SaaS-Abo. Manche Probleme sind schmal genug, dass sich ein Prototyp in ein bis zwei Tagen bauen lässt, mit klarer Erwartung, was er kann und was nicht. Genau da setzt auch mein [MVP-Ansatz](/mvp/) an.

## Fazit

Ich hab nicht aufgehört, für Photoshop zu zahlen, weil es zu teuer war, es gibt 2026 längst kostenlose Alternativen, die für die meisten Leute die bessere Wahl sind. Ich hab aufgehört, weil ich an einem Nachmittag genau das bauen konnte, was ich tatsächlich brauche, nicht mehr. Das ist der eigentliche Unterschied, den KI-gestützte Entwicklung 2026 macht: nicht billiger als bestehende Tools, sondern näher an dem, was du wirklich willst.

Baust du dir inzwischen auch eigene kleine Tools, oder ist dir das noch zu unsicher fürs Tagesgeschäft? Wenn du überlegen willst, wo in deinem Unternehmen ein schmaler Prototyp mehr bringt als ein weiteres SaaS-Abo: [Lass uns in einem unverbindlichen Erstgespräch darüber sprechen](/kontakt/).
