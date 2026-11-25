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

### Direzione scelta: B, "numero di gara / poster"

Titoli grandi e stretti, foto a tutta larghezza, tono crudo da manifesto di gara. Scartata la A ("scheda tecnica d'officina").

**Tema (in `src/index.css`, blocco `@theme`)**

| Token | Valore | Uso |
|---|---|---|
| `night` | `#13200f` | sfondo principale, testo su chiaro |
| `forest` | `#2e5422` | verde del marchio |
| `cream` | `#eeebdc` | testo su scuro, pulsanti chiari |
| `paper` | `#f6f4ea` | fondo delle card bici |
| `signal` | `#facc15` | accento: pulsanti principali, sconti, blocco officina |
| `font-display` | Tanker (Fontshare) | titoli, sempre maiuscoli |
| `font-sans` | Switzer (Fontshare) | testo |

**Elementi del linguaggio**
- Utility `headline` per i titoli (Tanker maiuscolo) ed `eyebrow` per le etichette piccole.
- Etichette in stile gara: "Ordine di partenza", "Griglia di partenza", "Box tecnico", "Ritrovo".
- Numerazione a due cifre (01, 02…) per elenchi e card.
- Card bici su fondo `paper`, angoli arrotondati da tabella gara, linea tratteggiata e sconto come adesivo giallo inclinato.
- Grana leggera su tutto il sito (`src/components/ui/Grain.jsx`).
- Niente tabella numerata "013" nell'apertura della home (scelta di Gabriele).

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

### Fase 1 — Bozze della direzione visiva ✅

- [x] Bozza A, scheda tecnica d'officina (eliminata dal codice; resta nella storia del branch `restyling-bozze`)
- [x] Bozza B, numero di gara: scelta, diventata la home
- [x] Bozze rimosse dal codice

### Fase 2 — Fondamenta del nuovo design ✅

Tutto il restyling sta sul branch `restyling` e va su `main` solo a fine Fase 3 (anteprima Netlify via PR).

- [x] Token del tema in `@theme` (vedi tabella in "Direzione scelta")
- [x] Rimosso Material Symbols (non era usato)
- [x] Font Tanker/Switzer caricati da `index.html` (niente `@import` CSS, niente Outfit)
- [x] Componenti condivisi: `ButtonLink` e `Grain` in `src/components/ui/`, dati di contatto e voci di menu in `src/data/contatti.js`
- [x] Unica `ProductCard` nel nuovo stile (`src/components/shop/ProductCard.jsx`)
- [x] Rimossi `react-slick`, `slick-carousel`, `react-modern-drawer`, `lucide-react`, `react-google-recaptcha-v3`
- [x] Navigazione con `Link` / `ButtonLink` (niente `window.location.href`)
- [x] Eliminato `tailwind.config.js` (tema solo in `index.css`)
- [x] Header nuovo: sopra la foto in home, fondo `night` altrove; menu mobile a tutto schermo
- [x] Footer nuovo ("Ritrovo")
- [x] CSS ripulito: solo token del tema B + utility `headline` / `eyebrow`

### Fase 3 — Restyling delle pagine ✅

- [x] Home
- [x] Negozio (filtri a chip, ordinamento prezzo, stato vuoto, CTA)
- [x] Pagina prodotto (galleria, scheda tecnica, WhatsApp con nome bici precompilato)
- [x] Officina (hero foto, servizi numerati, CTA; niente card con icone)
- [x] Wild Race Team e corsi di enduro (`#corso-enduro`)
- [x] Contatti (dati da `contatti.js`, telefono `tel:+39…`, form restyle)
- [x] 404 e pagina di ringraziamento (dopo form Contatti)
- [x] Pagina Notizie: eliminata (nessuna rotta, API locale morta)

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
| 25/11/2026 | Scelta la direzione B, "numero di gara", senza la tabella "013" nell'apertura | Preferenza di Gabriele |
| 25/11/2026 | Restyling su un unico branch `restyling`, merge a fine Fase 3 | Evitare di pubblicare un sito metà vecchio e metà nuovo |
| 25/11/2026 | Eliminata la pagina Notizie | Nessuna rotta, dipendeva da un'API `localhost` non più esistente |
| 25/11/2026 | `/thankyou` è il ringraziamento del form Contatti (non più dell'admin prodotti) | L'admin remoto è stato sostituito da Pages CMS |

---

## 5. Registro lavori

| Data | Lavoro | Riferimento |
|---|---|---|
| 25/11/2026 | Prima analisi di codice e sito in produzione | — |
| 25/11/2026 | Migrazione bici a file singoli + Pages CMS, fix vari | PR #5 (branch `cms-pages`) |
| 25/11/2026 | Risolto conflitto con `main` (3 bici rimosse, prezzo Flyer, gallerie KTM) | PR #5 |
| 25/11/2026 | Creato questo piano e `AGENTS.md` | branch `restyling-bozze` |
| 25/11/2026 | Bozze della home A e B su `/bozza-a` e `/bozza-b`; `Logo` accetta classi personalizzate | branch `restyling-bozze` |
| 25/11/2026 | Tema B nel CSS globale, header con menu mobile, footer, home definitiva, nuova `ProductCard`; rimossi caroselli e bozze | branch `restyling` |
| 25/11/2026 | Restyling negozio (filtri, sort, empty) e pagina prodotto (galleria, specs, WhatsApp); rimossa `SearchBar` | branch `restyling` |
| 25/11/2026 | Restyling Officina, Wild Race Team (con `#corso-enduro`) e Contatti; rimossi `lucide-react` e header morti | branch `restyling` |
| 25/11/2026 | 404 e ThankYou; rimossi Notizie e `tailwind.config.js`; CSS solo tema B; font da `index.html` | branch `restyling` |
