---
term: "Token & Kontextfenster"
tldr: "Die Maßeinheit für Text in KI-Modellen und deren Verarbeitungsgrenze."
letter: "T"
category: "Modelle"
related: ['llm', 'prompt', 'chunking']
---## Was bedeutet das?

Tokens sind die kleinsten Texteinheiten, die ein LLM verarbeitet – ungefähr ¾ eines Wortes. Das Kontextfenster definiert, wie viele Tokens das Modell gleichzeitig „sehen" kann.

## So funktioniert es

Jeder Text wird in Tokens zerlegt. Ein Modell mit 128K Kontextfenster kann ca. 100.000 Wörter gleichzeitig verarbeiten – das entspricht etwa einem ganzen Buch.

## Beispiel

Wenn du ein 50-seitiges Dokument analysieren lässt, muss es in das Kontextfenster passen. Ist es zu groß, muss es aufgeteilt werden (→ Chunking).

## Warum es wichtig ist

Das Kontextfenster bestimmt, wie viel Information ein Modell gleichzeitig berücksichtigen kann – und beeinflusst Kosten und Qualität.
