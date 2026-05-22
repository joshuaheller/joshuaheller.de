---
term: "Vektordatenbank"
tldr: "Datenbank, die für die schnelle Suche nach ähnlichen Inhalten optimiert ist."
letter: "V"
category: "Infrastruktur"
related: ['embeddings', 'rag', 'chunking']
---## Was bedeutet das?

Eine Vektordatenbank speichert Embeddings und ermöglicht extrem schnelle Ähnlichkeitssuchen. Sie ist das zentrale Speichersystem für RAG-Anwendungen und semantische Suche.

## So funktioniert es

Texte werden als Embedding-Vektoren gespeichert. Bei einer Suchanfrage berechnet die Datenbank, welche gespeicherten Vektoren der Anfrage am ähnlichsten sind – in Millisekunden.

## Beispiel

Pinecone, Weaviate oder Qdrant als Vektordatenbank für einen Unternehmens-Chatbot, der tausende interne Dokumente durchsuchen kann.

## Warum es wichtig ist

Ohne Vektordatenbank wäre RAG nicht möglich. Sie sind die Infrastruktur hinter jeder KI, die mit eigenen Daten arbeitet.
