---
term: "Embeddings"
tldr: "Numerische Darstellungen von Text, die Bedeutung erfassen."
letter: "E"
category: "Infrastruktur"
related: ['vektordatenbank', 'rag', 'chunking']
---## Was bedeutet das?

Embeddings wandeln Text in Zahlenvektoren um, die die semantische Bedeutung erfassen. Ähnliche Konzepte liegen im Vektorraum nah beieinander, unabhängig von der exakten Formulierung.

## So funktioniert es

Ein spezialisiertes Modell liest einen Text und gibt einen Vektor (z.B. 1536 Zahlen) aus. „Hund" und „Welpe" haben ähnliche Vektoren, „Hund" und „Auto" nicht.

## Beispiel

In einer RAG-Pipeline werden alle Dokumente als Embeddings gespeichert. Bei einer Nutzeranfrage wird das Embedding der Frage mit den Dokument-Embeddings verglichen.

## Warum es wichtig ist

Embeddings ermöglichen semantische Suche – das System findet relevante Informationen, auch wenn andere Wörter verwendet werden.
