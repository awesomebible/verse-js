# verse-js
Verse-js ist eine Bibliothek die es einfach macht [awesomeBible Verse](https://docs.awesomebible.de/verse) Bilder in eigene Websites und Apps einzufügen.

Um die Javascript Bibliothek zu nutzen, füge folgenden Skript-Tag in dein Dokument ein

```javascript
<script src="https://cdn.jsdelivr.net/npm/@awesomebible/verse-js@1.0.0/index.js"></script>
```

oder installiere das NPM-Paket:

```bash
    npm install @awesomebible/verse-js
```

Jetzt musst du die Funktion nur noch importieren:
```javascript
import { VerseReplace } from '@awesomebible/verse-js';

```

Füge da wo das Versbild erscheinen soll, ein Image-Tag mit der Klasse „awb-verse“ ein.

```html
<img class="awb-verse"></img>
```

Ganz unten im Dokument muss die ``verseReplace()`` Funktion aufgerufen werden:

```html
<script defer>
    verseReplace();
</script>

```

### -> Dokumentation: https://docs.awesomebible.de/verse/verse-js/