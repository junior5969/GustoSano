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

L'applicazione segue le **best practice di Angular**:

- **Componenti standalone**:
  - `Homepage`: pagina principale con call-to-action.
  - `Header`: usata nella homepage.
  - `Fruits`: lista frutti e ricerca.
  - `FruitCard`: scheda singolo frutto con pulsanti azione.
  - `FruitNutritions`: tabella nutrizionale dettagliata.
   - `Loader`: visualizza un indicatore di caricamento globale mentre i dati vengono caricati dall’API.
- **Servizi**:
  - `HttpService`: gestione chiamate API, basata su `environment.apiUrl` per supportare sviluppo e produzione.
- **Models**:
  - `Fruit` e `Nutrition` per la tipizzazione TypeScript.
- **Routing**:
  - Implementato tramite `RouterModule` con gestione 404.
- **Environments**:
  - `environment.ts` per sviluppo (usa proxy per bypassare CORS).
  - `environment.prod.ts` per produzione (URL API reale).


## Principali librerie esterne utilizzate

- `@angular/material` → componenti UI (Card, Button, Icon).  
- `@angular/cdk` → supporto Material e funzionalità aggiuntive.  
- `rxjs` → gestione delle chiamate asincrone.  
- `zone.js` → change detection Angular.  


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
cd progetto-corso-angular
```

2. **Installa le dipendenze:**

```bash
npm install
```

3. **Avvia il server di sviluppo:**

```bash
ng serve --proxy-config proxy.conf.json
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

7. **Deploy su Firebase:**

```bash
firebase deploy
```


## Demo Online

L'app è stata deployata su Firebase e può essere provata qui:  
[https://gusto-sano-app.web.app](https://gusto-sano-app.web.app)


## Repository GitHub

Visita il codice sorgente su [GitHub](https://github.com/junior5969/GustoSano)


## Documentazione 

[Presentazione del progetto (PDF)](./Presentazione.pdf)


## Autrice

Barletta Chiara 