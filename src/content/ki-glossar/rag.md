---
term: "RAG (Retrieval Augmented Generation)"
tldr: "KI sucht erst relevante Dokumente, bevor sie antwortet."
letter: "R"
category: "Workflows"
related: ['embeddings', 'vektordatenbank', 'chunking', 'grounding']
---## Was bedeutet das?

RAG kombiniert Informationssuche mit Textgenerierung. Statt nur aus dem Training zu antworten, durchsucht das System erst eine Wissensbasis und nutzt die gefundenen Dokumente als Grundlage.

## So funktioniert es

1) Nutzer stellt eine Frage → 2) System sucht relevante Dokumente in einer Vektordatenbank → 3) Gefundene Texte werden als Kontext an das LLM übergeben → 4) LLM generiert eine Antwort basierend auf den Dokumenten.

## Beispiel

Ein interner KI-Assistent, der Fragen zu Unternehmensrichtlinien beantwortet, indem er die relevanten Policy-Dokumente findet und zitiert.

## Warum es wichtig ist

RAG ist der Standard-Ansatz, um LLMs mit firmenspezifischem Wissen auszustatten – ohne teures Nachtraining.
