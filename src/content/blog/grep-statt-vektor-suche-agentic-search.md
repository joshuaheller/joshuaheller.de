---
title: 'KI-Agenten: grep statt Vektordatenbank'
description: 'Ein neues Paper zeigt: Wenn Agenten direkt mit grep im rohen Korpus suchen statt über Embeddings, steigt die Genauigkeit und die Kosten sinken. Was das für deine RAG-Architektur bedeutet.'
pubDate: 2026-06-03
category: 'AI Engineering'
readingTime: '12 Min.'
heroImage: 'blog-dci-grep-search.png'
draft: false
---

> **TL;DR**
> - Ein neues Paper („Beyond Semantic Similarity“) zeigt: Lässt man einen Agenten mit `grep` und `find` direkt im rohen Korpus suchen — ohne Embeddings, ohne Vektor-Index —, schlägt das starke RAG-Baselines.
> - Gleicher Claude Sonnet 4.6, nur das Retrieval getauscht: Genauigkeit auf BrowseComp-Plus von 69 % auf 80 %, Kosten −29 %.
> - Die eigentliche Erkenntnis: Nicht der Retriever ist der Flaschenhals, sondern das Interface, durch das der Agent den Korpus sieht.

## Das Problem mit klassischem RAG

Fast jede KI-Anwendung im Unternehmen läuft heute nach demselben Muster: Dokumente werden in Chunks zerschnitten, in Embeddings übersetzt, in eine Vektordatenbank gelegt — und zur Laufzeit holt sich das Modell die Top-k ähnlichsten Treffer. Das ist effizient und für große, statische Korpora völlig in Ordnung.

Der Haken: Dieses Interface komprimiert den gesamten Zugriff auf den Korpus in **einen einzigen Ähnlichkeits-Schritt**, bevor das eigentliche Reasoning überhaupt beginnt. Was die Vektorsuche früh aussortiert, kann auch das stärkste Modell danach nicht mehr zurückholen. Exakte Treffer („genau diese Vertragsklausel“), die Kombination schwacher Hinweise oder das Prüfen des lokalen Kontexts um eine Fundstelle — all das lässt sich mit einem reinen Top-k-Retriever nur schwer abbilden.

## Was das Paper vorschlägt: Direct Corpus Interaction

Die Idee von **Direct Corpus Interaction (DCI)** ist fast trotzig simpel: Lass den Agenten den rohen Korpus direkt durchsuchen — mit den Werkzeugen, die jede Shell ohnehin hat. `grep` und `rg` für exakte und Regex-Treffer, `find` und `glob` für Navigation, gezielte File-Reads und kleine Skripte für den lokalen Kontext.

Kein Embedding-Modell. Kein Vektor-Index. Keine Retrieval-API. Die semantische Interpretation übernimmt nicht mehr ein vorgeschalteter Index, sondern der Agent selbst. Und weil sich diese Operationen verketten lassen, entsteht echte Ausdrucksstärke:

- Exakte Bedingungen erzwingen: `grep 'foo' file | grep 'bar'`
- Schwache Hinweise kombinieren: `find . | grep 'report' | grep '2024'`
- Hypothesen am lokalen Kontext prüfen: `grep -n 'keyword' file | head`

Der ganze Korpus bleibt jederzeit verfügbar — statt nur die schmale Scheibe, die der Retriever durchlässt.

## Die Zahlen

Getestet wurde das gegen starke Sparse-, Dense- und Reranking-Baselines. Die für die Praxis interessantesten Ergebnisse:

| Setup | Ergebnis | Delta |
| --- | --- | --- |
| BrowseComp-Plus (gleicher Sonnet 4.6, Retriever → DCI) | 69,0 % → 80,0 % Genauigkeit | +11 Punkte |
| Selbe Aufgabe, Kosten | 1.440 $ → 1.016 $ | −29,4 % |
| Multi-Hop QA (DCI + Claude Code) | 83,0 Ø-Genauigkeit | +30,7 ggü. bester Retrieval-Baseline |
| IR-Ranking | 68,5 Ø NDCG@10 | +21,5 ggü. bester Baseline |

Bemerkenswert ist die Kombination: **mehr Genauigkeit bei weniger Kosten**. Das ist selten — meistens erkauft man Qualität mit teureren Modellen oder mehr Tokens.

## Warum das funktioniert: „Interface Resolution“

Die naheliegende Erklärung wäre: DCI findet einfach mehr der richtigen Dokumente. Stimmt aber nicht. Die Autoren zeigen, dass DCI oft auch dann gewinnt, wenn der Retriever die relevanten Dokumente bereits gefunden hatte.

Der eigentliche Hebel ist das, was sie **„retrieval interface resolution“** nennen: die Fähigkeit, auf Einheiten *kleiner* als ganze Dokumente zu arbeiten. Ein Retriever liefert ein Dokument oder einen Chunk. Ein Agent mit `grep` kann auf die exakte Zeile, den umgebenden Kontext, die genaue Zahl zoomen — und seine Suche danach verfeinern. Der größte Gewinn entsteht beim Umwandeln gefundener Belege in feinere lokale Such- und Verifikationsschritte.

Anders gesagt: Je stärker die Modelle werden, desto mehr verschiebt sich der Flaschenhals vom *Retriever* zum *Interface*. Ein komprimierter Ähnlichkeits-Index wird zur Bremse, sobald das Modell wie ein menschlicher Rechercheur suchen kann — Hypothesen bilden, exakte Muster testen, lokalen Kontext lesen, nachschärfen.

## Was das für deine Architektur heißt

Kein Grund, jetzt jede Vektordatenbank wegzuwerfen. Für große, statische Korpora bleiben Dense- und Sparse-Retrieval skalierbar und stark. Aber sie sind eben nur *ein* Punkt im Design-Raum — nicht die einzige Antwort.

Drei Situationen, in denen DCI besonders spannend ist:

- **Lokale, heterogene Korpora**, die sich ständig ändern. Kein Re-Indexing, keine Embedding-Pipeline — der Agent arbeitet direkt auf den Files.
- **Aufgaben mit exakten Constraints**: konkrete IDs, Klauseln, Datumsangaben, Code-Stellen. Genau das, woran semantische Ähnlichkeit oft scheitert.
- **Agentische, mehrstufige Recherche**, bei der zwischendurch nachgeschärft wird, statt einmal Top-k zu ziehen.

Spannend ist auch: Das funktioniert mit Standard-Werkzeugen, die ein Coding-Agent wie Claude Code ohnehin schon hat. Das Retrieval-System ist hier kein separates Stück Infrastruktur mehr — es ist die Shell.

## Was du jetzt tun kannst

1. Schau dir deine aktuelle RAG-Pipeline an: Wie oft scheitert sie an *exakten* Anforderungen statt an Themen-Ähnlichkeit?
2. Prüfe, ob dein Korpus eher groß-und-statisch (Vektor-DB bleibt sinnvoll) oder lokal-und-lebendig (DCI lohnt einen Test) ist.
3. Bevor du die nächste Embedding-Pipeline baust: teste, wie weit ein Agent mit `grep` und File-Reads auf deinen echten Daten kommt.

Genau solche Architektur-Entscheidungen — und ihre Umsetzung direkt in deiner Codebase — sind der Kern des [Forward-Deployed-Engineer-Modells](/forward-deployed-engineer/): nah am echten Use Case bauen, statt von außen zu beraten.
