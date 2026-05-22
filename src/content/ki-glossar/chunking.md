---
term: "Chunking"
tldr: "Große Dokumente in kleinere, sinnvolle Abschnitte unterteilen."
letter: "C"
category: "Workflows"
related: ['rag', 'embeddings', 'vektordatenbank', 'token-kontextfenster']
---## Was bedeutet das?

Chunking zerlegt lange Texte in kleinere Teile (Chunks), damit sie als Embeddings gespeichert und effektiv gefunden werden können. Die Chunk-Größe beeinflusst die Qualität der Suche.

## So funktioniert es

Ein 100-seitiges Handbuch wird z.B. in Absätze oder thematische Blöcke von 200–500 Tokens aufgeteilt. Jeder Chunk wird als eigenes Embedding gespeichert.

## Beispiel

Ein Kundenservice-Handbuch wird in einzelne FAQ-Einträge zerlegt, sodass das System bei einer Frage genau den relevanten Abschnitt findet.

## Warum es wichtig ist

Gutes Chunking entscheidet über die Qualität von RAG-Systemen. Zu große Chunks verwässern die Suche, zu kleine verlieren den Kontext.
