# Piano di sviluppo — Wild Bicycle

Documento di riferimento per il refactoring e il restyling di [wildbicycle.it](https://wildbicycle.it).
Va aggiornato a ogni passo: spunta le attività fatte, aggiungi una riga al registro, annota le decisioni.

Ultimo aggiornamento: 25/11/2026

---

## 1. Contesto

- **Cliente:** Wild Bicycle S.r.l., negozio di bici a Fiano Romano (Roma Nord), dal 2013. Titolare: Daniele Vastano.
- **Attività:** vendita bici nuove e usate, abbigliamento e protezioni, officina e centro assistenza (motori Bosch, Shimano, Polini), Wild Race Team (strada, XC, enduro, gravel), corsi di enduro dai 12 anni, manutenzione dei sentieri.
- **Sviluppatore:** Gabriele (primo sito realizzato).

### Stack

| Parte | Tecnologia |
|---|---|
| Frontend | React 18, Vite 6, React Router 7 |
| Stile | Tailwind CSS 4 (tema in `src/index.css`, blocco `@theme`) |
| Hosting | Netlify, deploy automatico da `main`, anteprime per ogni pull request |
| Contenuti bici | Pages CMS ([app.pagescms.org](https://app.pagescms.org)), configurato da `.pages.yml` |
| Form contatti | Formspree |
| Immagini | Netlify Image CDN in produzione (`src/utils/imageUrl.js`) |

### Come funzionano le bici

- Ogni bici è un file JSON in `src/content/bici/`. **Il nome del file è l'id** e l'indirizzo della pagina (`/prodotti/<id>`).
- `src/data/products.js` carica tutti i file ed espone `products`, `featuredProducts` e `getProductById`.
- Le bici si inseriscono e modificano **solo da Pages CMS**. Ogni salvataggio è un commit su `main` e Netlify ripubblica.
- Se si aggiunge o rinomina un campo bisogna aggiornare insieme `.pages.yml`, `src/data/products.js` e i componenti che lo usano.

### Flusso di lavoro

1. Un branch per ogni blocco di lavoro, mai lavoro diretto su `main`.
2. Pull request verso `main`, con verifica sull'anteprima di Netlify.
3. Merge solo quando l'anteprima è approvata.
4. Mentre un branch è aperto, Daniele può continuare a modificare le bici dal CMS: prima del merge va fatto `git merge origin/main` sul branch.

---

## 2. Principi di design

Obiettivo: un sito moderno e ordinato che **non sembri generato da un'AI né un template**.

**Da evitare**
- Caroselli in apertura, autoplay, slider ovunque.
- Griglie di card tutte uguali con icona, titolo e paragrafo (il blocco "i nostri punti di forza").
- `rounded-lg` + `shadow-md` + ingrandimento al passaggio del mouse su ogni elemento.
- Gradienti viola o blu, glassmorfismo, bagliori, "bento grid".
- Testi lunghi centrati e paragrafi in corpo enorme.
- Comparsa graduale di ogni sezione allo scroll.
- Frasi generiche da marketing ("Eleva la tua esperienza", "Passione e qualità").
- Font abusati: Inter, Poppins, Space Grotesk, Montserrat.

**Da fare**
- Partire dai contenuti veri: luoghi, discipline, marchi, servizi, foto reali del negozio e della squadra.
- Palette di partenza: verde bosco `#2e5422` e crema `#eeebdc`, con il giallo `#facc15` usato con parsimonia.
- Gerarchia netta: pochi elementi forti per pagina, molto spazio, allineamento a sinistra.
- Dati (prezzi, specifiche, indirizzi) trattati come informazione tecnica, leggibili e precisi.
- Ogni pagina con un `h1` e titoli in ordine.

### Direzioni in valutazione

- **A. Scheda tecnica d'officina:** cartellini, schede tecniche, linee di griglia, sezioni numerate, font monospazio per i dati.
- **B. Numero di gara / poster:** tabella numerata da gara di enduro, titoli grandi e stretti, foto a tutta larghezza, tono crudo.
- Direzione consigliata: **A come struttura, con elementi di B** per Race Team e corsi.

---

## 3. Fasi

### Fase 0 — Gestione contenuti ✅

- [x] `Bici.json` diviso in un file per bici (`src/content/bici/`)
- [x] Prezzi numerici, foto in un unico elenco `images`, specifiche come coppie voce/valore
- [x] Campi `published` (visibile nel negozio) e `featured` (in evidenza in home)
- [x] Configurazione Pages CMS (`.pages.yml`) con moduli in italiano
- [x] Prezzi formattati (`src/utils/formatPrice.js`)
- [x] Immagini via Netlify Image CDN (`src/utils/imageUrl.js`)
- [x] Rimossi vecchio pannello `/admin`, `/remoteadmin`, server Express e dipendenze
- [x] Fix: link "Esplora" (404), `useState` dopo `return` in `ProductPage`
- [x] Pages CMS installato e testato
- [ ] Invitare Daniele come collaboratore in Pages CMS

### Fase 1 — Bozze della direzione visiva (in corso)

- [x] Bozza A, scheda tecnica d'officina: `/bozza-a` (`src/pages/bozze/BozzaA.jsx`)
- [x] Bozza B, numero di gara: `/bozza-b` (`src/pages/bozze/BozzaB.jsx`)
- [ ] Scelta della direzione con Daniele
- [ ] Rimuovere le bozze dal codice dopo la scelta

Note sulle bozze:
- Sono solo la home, con header e footer propri (in `App.jsx` il componente `SiteChrome` nasconde quelli attuali sulle rotte `/bozza*`).
- Usano i dati veri: bici in evidenza dal CMS, foto del negozio e del team.
- Font caricati solo nelle bozze. A: Archivo (versione condensata) e IBM Plex Mono, da Google Fonts. B: Tanker e Switzer, da Fontshare.
- Manca il menu mobile: è previsto nella Fase 2.
- I testi riusano contenuti già presenti sul sito; i servizi d'officina vanno confermati con Daniele.

### Fase 2 — Fondamenta del nuovo design

- [ ] Token definitivi in `@theme` (colori, font, spaziature, linee)
- [ ] Caricamento font ottimizzato (niente `@import` in cascata; rimuovere Material Symbols)
- [ ] Componenti condivisi: pulsante, link, titolo di sezione, cartellino prodotto, blocco contatti
- [ ] Unica `ProductCard` (oggi duplicata in `ProductCarousel.jsx`)
- [ ] Rimuovere `react-slick` e `slick-carousel`
- [ ] Sostituire `window.location.href` con `Link` di React Router
- [ ] Eliminare `tailwind.config.js` (duplicato del tema in `index.css`)
- [ ] Header e menu mobile nuovi
- [ ] Footer nuovo

### Fase 3 — Restyling delle pagine

- [ ] Home
- [ ] Negozio (filtri, ordinamento, stato vuoto)
- [ ] Pagina prodotto (galleria, scheda tecnica, contatto WhatsApp con nome della bici precompilato)
- [ ] Officina (servizi concreti al posto delle 6 card con icone)
- [ ] Wild Race Team e corsi di enduro
- [ ] Contatti (fix link telefono: oggi `tel:+0765422652`, manca `+39`)
- [ ] 404 e pagina di ringraziamento
- [ ] Pagina Notizie: decidere se collegarla o eliminarla (oggi esiste ma non ha una rotta)

### Fase 4 — Contenuti da chiedere a Daniele

- [ ] Orari di apertura (oggi assenti dal sito)
- [ ] Elenco o listino dei servizi d'officina
- [ ] Foto nuove: negozio, officina al lavoro, uscite del team
- [ ] Breve storia del negozio e del team
- [ ] Email su dominio (es. `info@wildbicycle.it`) al posto della Gmail
- [ ] Verificare `lapierre-drs80-2025`: è da corsa ma ha ruote "29"
- [ ] Ordine delle bici in negozio: alfabetico (attuale) o per data

### Fase 5 — Tecnica, SEO e prestazioni

- [ ] Meta Open Graph: `og:image` è un segnaposto, `og:url` è senza `.it`
- [ ] Titoli e descrizioni per pagina (oggi uguali ovunque)
- [ ] Dati strutturati `LocalBusiness` e `Product`
- [ ] Alleggerire le immagini statiche (alcune oltre 1 MB: `wildraceteam.webp`, `corsoenduro.webp`, `strada.webp`)
- [ ] `.env` è tracciato da git: verificarne il contenuto, rimuoverlo e, se contiene chiavi, cambiarle
- [ ] Lint: oggi fallisce per `prop-types` mancanti in tutto il progetto
- [ ] Accessibilità: contrasti, focus visibile, testi alternativi dei marchi
- [ ] Sostituire il `README.md` del template Vite con istruzioni reali

---

## 4. Decisioni

| Data | Decisione | Motivo |
|---|---|---|
| 25/11/2026 | Pages CMS per le bici | Inviti per email senza account GitHub, nessun server da mantenere, si appoggia a repository e Netlify esistenti |
| 25/11/2026 | Scartati Decap CMS + Git Gateway | Git Gateway di Netlify è deprecato |
| 25/11/2026 | Un file JSON per bici | Il CMS gestisce meglio le raccolte di file ed evita conflitti tra modifiche diverse |
| 25/11/2026 | Prima i dati, poi il restyling | Card e pagina prodotto dipendono dai campi disponibili |
| 25/11/2026 | Bozze della home in due direzioni prima di scegliere | Richiesta di Gabriele |

---

## 5. Registro lavori

| Data | Lavoro | Riferimento |
|---|---|---|
| 25/11/2026 | Prima analisi di codice e sito in produzione | — |
| 25/11/2026 | Migrazione bici a file singoli + Pages CMS, fix vari | PR #5 (branch `cms-pages`) |
| 25/11/2026 | Risolto conflitto con `main` (3 bici rimosse, prezzo Flyer, gallerie KTM) | PR #5 |
| 25/11/2026 | Creato questo piano e `AGENTS.md` | branch `restyling-bozze` |
| 25/11/2026 | Bozze della home A e B su `/bozza-a` e `/bozza-b`; `Logo` accetta classi personalizzate | branch `restyling-bozze` |
