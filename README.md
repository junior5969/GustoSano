# GustoSano - Applicazione Angular

**GustoSano** è un'app Angular che permette di esplorare i frutti e visualizzarne i valori nutrizionali in modo semplice e intuitivo.


## Descrizione del progetto

**GustoSano** permette di:

- Visualizzare un elenco completo di frutti con immagini.
- Cercare un frutto specifico tramite la barra di ricerca.
- Visualizzare la tassonomia di ciascun frutto (famiglia, genere, ordine).
- Visualizzare i valori nutrizionali medi per 100g di ciascun frutto (calorie, proteine, carboidrati, grassi, zuccheri).
- Navigare tra le diverse sezioni con un’esperienza utente fluida e accessibile.


## Struttura del progetto

- **Componenti standalone**:
  - `Homepage`: pagina principale con call-to-action.
  - `Header`: usata nella homepage.
  - `Fruits`: lista frutti e ricerca.
  - `FruitCard`: scheda singolo frutto con pulsanti azione.
  - `FruitNutritions`: tabella nutrizionale dettagliata.
  - `Loader`:componente globale che mostra uno spinner durante il caricamento dei dati dalle API, integrato in tutte le sezioni con chiamate HTTP asincrone.
  - `Button`: componente riutilizzabile per gestire la navigazione tramite `routerLink`.
  - `ButtonAction`: componente riutilizzabile per gestire sia navigazione tramite `routerLink` sia azioni tramite `EventEmitter`.
- **Servizi**:
  - `HttpService`: gestione chiamate API, basata su `environment.apiUrl` per supportare sviluppo e produzione.
  Le chiamate HTTP sono intercettate dal `LoaderInterceptor`, che comunica con `LoaderService` per mostrare/nascondere automaticamente lo spinner durante le richieste.
- **Models**:
  - `Fruit` e `Nutrition` per la tipizzazione TypeScript.
- **Routing**:
  - Implementato tramite `RouterModule` con gestione 404.
- **Environments**:
  - `environment.ts` per sviluppo.
  - `environment.prod.ts` per produzione.
- **Server Backend**:
  - `server/index.js` server Express hostato su Render, che funge da proxy verso l’API esterna Fruityvice.


## Principali librerie esterne utilizzate

- `@angular/material` → componenti UI (Card, Button, Icon).  
- `@angular/cdk` → supporto Material e funzionalità aggiuntive.  
- `rxjs` → gestione delle chiamate asincrone.  
- `zone.js` → change detection Angular.
- `express`(server Render) → backend per proxy API.
- `node-fetch` → fetch verso API esterne.
- `cors` → gestione delle richieste cross-origin
 

## Istruzioni per configurare il progetto in locale

### Prerequisiti

- Node.js v18+  
- npm v9+  
- Angular CLI v20+  


## Configurazione e avvio in locale

Per avviare il progetto in locale, segui questi passaggi:

1. **Clona il repository:**

```bash
git clone https://github.com/junior5969/GustoSano.git
cd GustoSano
```

2. **Installa le dipendenze:**

```bash
npm install
```

3. **Avvia il server di sviluppo:**

```bash
ng serve
```

4. **Apri l’app nel browser:**

Vai all’indirizzo: http://localhost:4200


5. **Build di sviluppo:**

```bash
ng build
```

6. **Build di produzione:**

```bash
ng build --configuration production
```

## Backend Express (server locale) 

7. **Vai nella cartella `server`**

```bash
cd server
```

8. **Installa le dipendenze:**

```bash
npm install
```

9. **Avvia il server:**

```bash
node index.js
```

## Deploy su Render

10. **Commit e push della cartella `server` su GitHub**

11. **Crea un nuovo Web Service su Render:**

Build command:
```bash
npm install
```
Start command:
```bash
node index.js
```

Fai **Manual Deploy** del commit più recente.

12. **Deploy su Firebase:**

```bash
firebase login
firebase init
firebase deploy
```


## Demo Online

L'app è stata deployata su Firebase e può essere provata qui:  
[https://gusto-sano-app.web.app](https://gusto-sano-app.web.app)


## Backend Render
[https://gustosano.onrender.com/](https://gustosano.onrender.com/)


## Repository GitHub

Visita il codice sorgente su [GitHub](https://github.com/junior5969/GustoSano)


## Documentazione 

[Presentazione del progetto (PDF)](./Presentazione.pdf)


## Autrice

Barletta Chiara 