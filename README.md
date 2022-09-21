ORGANIZZAZIONE PAGINE HTML: seguiamo quella utilizzata sul sito originale (modo più facile e indolore di organizzarle)
<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

IMPORTANTE! Perché tutto funzioni, queste sono le cartelle 'off limits': quelle da non modificare nella loro organizzazione interna:
  -> \html
  -> \css
  -> \scss\main-files
  -> \scss\atomic-design\6-pages
  -> \scss\atomic-design\responsivity
  -> \js\6-pages

Bisogno di aggiungere/modificare un file di una di queste cartelle? Chiedere a Dario, provvederà subito...

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

UTILIZZO ATOMIC DESIGN APPROACH: l'utilizzo è rimasto lo stesso (i moduli sono collocati in: \scss\atomic-design\)
  -> abstracts: tutto ciò utile all'utilizzo di sass ma che NON si traduce in css
  -> base: tutto il codice utile a dare una stilizzazione di base al file css
  -> components: le così dette 'molecules' dell'atomic design
  -> layouts: i così detti 'organisms' dell'atomic design
  -> templates: esattamente i così detti 'templates' dell'atomic design
  -> pages: esattamente le così dette 'pages' dell'atomic design

Per un veloce ripasso dell'atomic design approach -> https://www.youtube.com/watch?v=Yi-A20x2dcA&t=170s

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

IMPORTANTISSIMO: tentate di lavorare (anche nei singoli branch personali), mantendendo sempre la STESSA ESATTA IDENTICA organizzazione delle cartelle di dev2.
    Facendo ciò evitiamo sconvolgimenti in dev2 in fase di 'merging' (perché git NON lo sa che abbiamo un'organizzazione da mantere...)

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->

ALTRA COSA IMPORTANTISSIMA: CAMBIA IL COMANDO PER ACCENDERE SASS!
D'ora in poi il comando da utilizzare sarà: 'sass -w --no-source-map \scss\main-files\...\file-name.scss \css\...\same-file-name.css'

Importante tentare di evitare errori di digitazione -> soluzione: farsi guidare dall'auto-compilazione del terminale usando 'TAB'

<!-- -------------------------------------------------------------------------------------------------------------------------------------------- -->