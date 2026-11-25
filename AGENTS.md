# Istruzioni per gli assistenti AI

Sito del negozio di bici Wild Bicycle (Fiano Romano), in produzione su https://wildbicycle.it.

**Prima di iniziare leggi `docs/piano-sviluppo.md`.** Contiene contesto, principi di design, fasi con lo stato di avanzamento, decisioni prese e registro lavori. A fine lavoro aggiornalo: spunta le attività, aggiungi una riga al registro e, se serve, alle decisioni.

## Regole

- Lingua: interfaccia, testi del sito, commit e documentazione in italiano.
- Non lavorare su `main`: crea un branch e apri una pull request. Netlify pubblica `main` in produzione.
- Le bici stanno in `src/content/bici/*.json` e si gestiscono da Pages CMS. Non creare di nuovo un JSON unico.
- Lo schema delle bici è definito in `.pages.yml`: se cambi un campo, aggiorna anche `src/data/products.js` e i componenti che lo usano.
- Immagini dei prodotti sempre tramite `imageUrl()` (`src/utils/imageUrl.js`), prezzi sempre tramite `formatPrice()` (`src/utils/formatPrice.js`).
- Design: rispetta la sezione "Principi di design" del piano. Niente cliché da template o da sito generato con l'AI.

## Comandi

- `npm run dev`: sviluppo locale
- `npm run build`: build di produzione (deve passare prima di ogni pull request)
