# Checklist pentru OCR

Pentru documentele în limba română.

## Lista de verificări

### Diacriticele corecte

* `/[ÃǍ]/s` → `Ă`;
* `/[ãǎ]/s` → `ă`;
* `/Ş/s` → `Ș`;
* `/ş/s` → `ș`;
* `/Ţ/s` → `Ț`;
* `/ţ/s` → `ț`;
* de obicei `Î` (majuscul) apare în tipar ca `I`, se poate căuta după `/(^I|[„….?!]\s?I)/`.

### Ghilimele și apostroafe

* `„` (ghilimelele de început) pot apărea ca `/,,/`;
* `/“/` → `”` (ghilimele de sfîrșit), pot apărea ca `/"/` sau `/''/`;
* `'` → `’` (apostrof).

### Liniuțe și elipse

* `—` liniuță em;
* `–` liniuță en;
* `―` linie de dialog;
* `…` (elipsa) poate apărea ca secvență de două sau mai multe puncte: `/.{2,5}/`.

### Caractere neașteptate

Regex-ul `/[^a-zăâîșț0-9.,;:\s!?&\-–—―…„”’()]/i` ar trebui să nu prea dea rezultate. 

> Dacă se folosește vreun limbaj de markup, mai pot fi excluse și caracterele aferente (`#_*>~[]` pentru Markdown, `</>` pentru HTML etc.).

### Punctuație

* Spațiu înainte de punctuație: `/\s[.,;:!?]/`;
* Lipsa spațiului după punctuație: `/[.,;:!?][^\s”…)]/`;
* Literă mică după punct: `/\.[\s”…)]*[a-zăâîșț]/s`
* Literă mică la începutul rîndului: `/^[a-zăâîșț]/s`