---
title: 'Ich lasse KI-Agenten jetzt automatisch für mich bloggen'
description: 'Eine ehrliche Build-in-Public-Story: Wie ich mit Claude Code Routines eine wöchentliche Automatisierung gebaut habe, die meine LinkedIn-Posts durchsucht und selbstständig Blogbeiträge für meine Seiten vorschlägt, inklusive dem, was nicht auf Anhieb funktioniert hat.'
pubDate: 2026-07-29
category: 'Build in Public'
readingTime: '8 Min.'
heroImage: 'ki-agenten-bloggen-automatisch-claude-code-routines.png'
draft: false
---

> **TL;DR**
> - Ich habe eine geplante Cloud-Routine gebaut, die einmal pro Woche meine LinkedIn-Content-Datenbank durchsucht und prüft, welches Thema zu welcher meiner Landing Pages passt.
> - Sie recherchiert aktuelle Quellen, prüft auf Dopplungen mit bestehenden Blogposts, schreibt einen vollständigen Beitrag inklusive Bild und öffnet einen Pull Request. Ich lese, korrigiere bei Bedarf und merge.
> - Der eigentliche Wert war nicht der Zeitplan-Mechanismus. Er war, der Routine echten Zugriff auf meine Werkzeuge zu geben und ihr zu erlauben, damit selbstständig zu arbeiten.

## Der Punkt, an dem ich skeptisch war

Ich poste seit Monaten regelmäßig auf LinkedIn, aber die Beiträge daraus zu vollwertigen Blogartikeln zu machen, blieb liegen. Nicht, weil es keine Zeit wert gewesen wäre, sondern weil es die Art von Aufgabe ist, die man immer auf nächste Woche schiebt: Thema aussuchen, gegen bestehende Beiträge abgleichen, recherchieren, schreiben, Bild finden, einbauen, Pull Request, mergen. Fünf, sechs Schritte, jeder für sich nicht schwer, in Summe aber genug Reibung, um es wochenlang nicht zu tun.

Als ich zum ersten Mal von Claude Code Routines gehört habe, Anthropics Function für geplante Cloud-Agenten, war meine erste Reaktion: klingt nach einem Cronjob mit Marketing-Namen. Cronjobs, die irgendwo in der Cloud ein Skript anstoßen, gibt es seit Jahrzehnten. Nichts, worüber man einen Blogpost schreiben müsste.

Dann habe ich angefangen, damit zu experimentieren, und die eigentliche Erkenntnis war eine andere: Der Wert liegt nicht im Zeitplan. Er liegt darin, dass die Routine dieselben Werkzeuge, Repositories und Konnektoren bekommt wie ich selbst in einer interaktiven Session, und dann selbstständig entscheidet, wie sie eine in Worten beschriebene Aufgabe angeht.

## Was ich tatsächlich gebaut habe

Die Routine, die jetzt läuft, macht in etwa das hier, jede Woche neu:

1. Sie durchsucht meine Notion-Datenbank mit LinkedIn-Content, gefiltert nach Status "Gepostet", meinem Namen als Owner und dem Datum der letzten sieben Tage.
2. Sie prüft, welche meiner Landing Pages (meine eigene Seite, unsere Firmenseite, zwei Produktseiten für KI-Agenten-Lösungen) inhaltlich zum jeweiligen Thema passen.
3. Für jede infrage kommende Seite schaut sie sich die bereits vorhandenen Blogposts an, Titel, Slugs, teils den Inhalt, damit kein Thema doppelt behandelt wird, das schon abgedeckt ist.
4. Sie recherchiert aktiv im Netz, um Behauptungen aus dem ursprünglichen LinkedIn-Post gegen aktuelle Quellen zu prüfen, nicht selten ändert sich zwischen einem LinkedIn-Post und dem Blogartikel etwas an Zahlen oder Details.
5. Sie schreibt den fertigen Beitrag, passend im Ton der jeweiligen Seite, mit Bild, teils mit interaktiven Elementen, und öffnet einen Pull Request.

Ich selbst tue an dieser Stelle: nichts, außer weiterhin auf LinkedIn zu posten. Ich lese die Pull Requests, korrigiere, wo nötig, und merge.

## Was gut funktioniert hat

Am meisten überrascht hat mich die Qualität der Recherche-Schritte. Die Routine hat bei diesem konkreten Beitrag zum Beispiel selbstständig die offizielle Anthropic-Dokumentation zu Claude Code Routines nachgeschlagen, um sicherzustellen, dass Details wie Trigger-Typen, Limits und das Sicherheitsmodell korrekt und aktuell wiedergegeben werden, statt sich auf die eigene, möglicherweise veraltete Erinnerung zu verlassen. Das ist genau der Unterschied zwischen einem Cronjob, der ein Template ausfüllt, und einem Agenten, der eine Aufgabe versteht.

Der zweite Punkt, der mich überzeugt hat: die Abgleich-Logik gegen bestehende Inhalte. Bevor ein Thema geschrieben wird, schaut die Routine aktiv nach, ob es das auf der jeweiligen Seite schon gibt, und verzichtet lieber auf einen Beitrag, als etwas doppelt zu veröffentlichen. Das war mir wichtiger als jede einzelne Automatisierungs-Funktion, weil schlechte, redundante Inhalte einer Content-Strategie mehr schaden als gar keine neuen Beiträge.

## Was ich bewusst eingeschränkt habe

Autonomie heißt bei mir nicht "alles läuft ohne mich". Die Routine merged nichts selbst, sie öffnet ausschließlich Pull Requests. Jede Änderung landet zuerst auf einem eigenen Branch, sichtbar, überprüfbar, und erst nach meiner Freigabe im Hauptzweig. Das ist auch keine Vorsicht, die ich mir ausgedacht habe, das Sicherheitsmodell von Claude Code Routines ist genau darauf ausgelegt: Pushes auf fremde oder geschützte Branches werden ohnehin automatisch abgelehnt.

Genauso wichtig: Ich gebe der Routine nur Zugriff auf die Repositories und Konnektoren, die sie für diese eine Aufgabe braucht, nicht pauschal auf alles, was mit meinem Account verbunden ist. Bei einer Landing Page kann wenig kaputtgehen, aber genau deshalb ist es der richtige erste Anwendungsfall, um Vertrauen in das Muster aufzubauen, bevor ich es an produktionskritischere Software-Projekte heranlasse, automatisches Bugfixing oder regelmäßige Dependency-Updates zum Beispiel.

## Was das für Build in Public und Personal Branding bedeutet

Der Grund, warum ich das hier teile, ist nicht die Technik allein. Es ist die Verschiebung, die dahintersteckt: Ich beschäftige mich in Kundenprojekten und im eigenen [MVP-Pricing](/blog/warum-mvps-nicht-mehr-50000-euro-kosten-muessen/) seit Monaten damit, dass eine Person mit den richtigen Werkzeugen leisten kann, wofür früher mehrere Rollen nötig waren. Content-Produktion ist ein Bereich, in dem dieses Prinzip genauso gilt, nur dass ich es hier zum ersten Mal an mir selbst statt an einem Kundenprojekt beobachtet habe.

Das heißt nicht, dass ich meine eigene Stimme abgebe. Die LinkedIn-Posts, aus denen die Routine schöpft, schreibe ich weiterhin selbst. Was die Routine übernimmt, ist die Übersetzung eines bereits vorhandenen Gedankens in einen recherchierten, geprüften, mehrsprachigen Blogbeitrag, die Fleißarbeit, die bisher liegen geblieben ist, nicht das Denken davor.

Wer über theaisoftwarecompany.com mehr zur technischen und Governance-Seite von geplanten KI-Agenten-Workflows lesen will, dem eigentlichen Auslöser dieses Experiments: [Autonome KI-Agenten im Zeitplan: Was Claude Code Routines für Automatisierung im Unternehmen bedeutet](https://www.theaisoftwarecompany.com/blog/claude-code-routines-autonome-ki-agenten/).

## Was ich als Nächstes teste

Zwei Dinge stehen als Nächstes an: automatisches Bugfixing bei kleineren, gut abgetesteten Repositories, und regelmäßige Dependency- und Node-Updates, beides Aufgaben, die repetitiv genug sind, um sie an eine Routine zu geben, aber wichtig genug, um sie weiterhin über Pull Requests statt automatische Merges laufen zu lassen.

Wenn du selbst überlegst, wie viel von deiner Content- oder Entwicklungsarbeit sich sinnvoll an einen geplanten Agenten delegieren lässt, ohne die Kontrolle darüber zu verlieren: [Lass uns 30 Minuten unverbindlich darüber sprechen](/kontakt/).
