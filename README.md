# Presentazione progetto Disney_Clone

![Alt text](./public/screenshot-homepage.png)

## Intro

Il nostro obiettivo iniziale era creare una copia pressoché identica di Disney+. Inizialmente pensavamo di completare tutto senza grosse difficoltà, ma subito dopo le prime milestones abbiamo capito la complessità di creare ogni singolo componente e far sì che fosse quasi perfetto.

Inizialmente, pensavamo che ottimizzare il progetto di BoolFlix sarebbe stato sufficiente per realizzare un ottimo lavoro, ma abbiamo deciso di puntare in alto.

## Giorno 1:

**Milestone 0:**
Scaffolding iniziale

**Milestone 1 (Stefano e Francesco):**
Scaffolding store.js, aggiunte prime chiamate axios

**Milestone 2 (Mekki):**
Creazione Navbar responsive, creazione del carosello HeroSlider

## Giorno 2:

Abbiamo preso confidenza con il progetto e la collaborazione di gruppo, iniziando a creare il layout dei componenti principali della homepage.

**Milestone 3 (Francesco):**
Implementazione carosello HorizontalCard

**Milestone 4 (Mekki):**
Creazione layout del componente LogosCard

## Giorno 3:

Abbiamo implementato i caroselli e axios, fatto le media-query e ci siamo ispirati allo scaffolding di Laravel, usando una struttura di V-IF al posto delle Routes.

**Milestone 5 (Francesco):**
Implementazione del filtro di ricerca per nome

**Milestone 6 (Mekki e Francesco):**
Creazione componente ShowCard e passaggio dell’id della card alla nuova pagina tramite funzioni e axios

Il primo passo per realizzare ciò è stato creare dei componenti Show, il primo è stato lo ShowCard, in cui cliccando su una slide all'interno del carosello siamo riusciti a passare l’id e a generare una nuova chiamata axios con i dettagli specifici dei film e delle serie tv.

Abbiamo capito come passare qualsiasi valore da un componente all’altro, risolvendo tutti i problemi che sarebbero derivati dalle props, v-if, ecc.

## Giorno 4 (Sabato):

**Milestone 7 (Francesco e Mekki):**
Ottimizzazione dei componenti già creati e ragionamenti sui prossimi componenti da sviluppare.

**STORE:**
Da qui in poi, lo State Management (STORE.JS) è stato fondamentale, permettendo una struttura simile a un database, con cui ogni dato memorizzato era raggiungibile da qualunque componente.

[**DOCUMENTAZIONE:**](https://docs.google.com/document/d/1NC_kTJiKoZur4IcdnLENnM-M2kftItQ-U-lre97Shm4/edit?usp=sharing)
Iniziate le feste di Capodanno, è stato importante avere una documentazione dettagliata su una cartella condivisa, assegnando milestone giornaliere.

## Giorno 5:

**Milestone 8 (Mekki):**
Creazione layout del componente ShowCard, con una seconda funzione per ottenere più dati possibili.

**PRENDERE PIÙ DATI POSSIBILI:**
Durante la realizzazione del componente ShowCard, ci siamo resi conto che avevamo bisogno di prendere e passare più dati possibili, creando una funzione che passa l’intero oggetto e permette di ottenere molti dati da diversi array generati in modo diverso.

## Giorno 6:

**Milestone 9 (Mekki):**
Implementazione del componente ShowLogosCard

**PER OGNI CARD LOGOS VISUALIZZARE CONTENUTI INERENTI:**
Abbiamo creato collegamenti per ogni componente, ad esempio cliccando su un titolo si aprirà il componente ShowCard, permettendo di scorrere il carosello e cliccare su un titolo per generare le relative informazioni.

## Giorno 7:

**Milestone 10 (Stefano):**
Creazione del componente ShowSearch

**Milestone 11 (Mekki):**
Ottimizzazione della milestone 10 con gli altri componenti da mostrare tramite v-if

## Giorno 8:

**Milestone 11 (Stefano):**
Creazione layout del Footer e ottimizzazione di alcuni componenti

**Milestone 12 (Mekki e Francesco):**
Passaggio del logo del network ai componenti nell’index (HomePage)

**VISUALIZZARE LOGO NETWORK DEI TITOLI NELLA HOMEPAGE:**
Abbiamo creato query per mostrare il logo del network all'interno delle componenti dell'Heroslider, gestito con un ciclo for che controlla l’id del film e recupera il path dell’immagine.

**Milestone 13 (Francesco):**
Ottimizzazione e completamento della milestone 12, fix vari (flag, generi, ecc.) e ottimizzazione di alcuni componenti

## Giorno 9:

**MILESTONE FINALE (Mekki, Francesco, Stefano):**
Scrittura della presentazione e ottimizzazione delle ultime cose rimaste, completando i compiti di ottimizzazione rimanenti.
