/*
REGOLE
- Le risposte vanno scritte in JavaScript sotto ogni commento.
- Puoi testare aprendo index.html nel browser e guardando la console (DevTools).
- In alternativa: nel terminale, `node script.js`.
- Cerca solo cose non viste a lezione. Tutto il necessario è già stato spiegato stamattina.
*/

/* ESERCIZIO 1 — Oggetto persona
   Crea un oggetto 'persona' con: nome, cognome, eta, citta.
   Stampa: 'Mario Rossi, 25 anni, vive a Roma.'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const persona = {
   nome: 'Mario',
   cognome: 'Rossi',
   eta: 25,
   citta: 'Roma'
}
console.log(`${persona.nome} ${persona.cognome}, ${persona.eta} anni, viva a ${persona.citta}`);

/* ESERCIZIO 2 — Aggiungi e rimuovi
   Sull'oggetto 'persona': aggiungi 'email', poi rimuovi 'eta'.
   Stampa l'oggetto risultante.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
persona.email = 'mariorossi@gmail.com';
delete persona.eta;
console.log(persona);

/* ESERCIZIO 3 — Oggetto annidato
   Oggetto 'utente' con una proprietà 'indirizzo' (oggetto con via, citta, cap).
   Stampa solo il CAP con dot notation.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utente = {
   via: 'Via Volta',
   citta: 'Milano',
   cap: '20017',
}
console.log(utente.cap);

/* ESERCIZIO 4 — Bracket dinamica
   Sull'oggetto 'persona', variabile chiave = 'nome'.
   Stampa il valore con bracket notation usando la variabile chiave.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const chiave = 'nome';
console.log(persona[chiave]);

/* ESERCIZIO 5 — Numero più grande
   Tre numeri a, b, c.
   Con if/else if, stampa il più grande. Se pareggio al massimo, stampa 'Pareggio'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let a;
let b;
let c;
a = 10;
b = 15;
c = 5;
if (a > b && a > c) {
   console.log(`Il numero maggiore è a: ` + a);
} else if (b > a && b > c) {
   console.log(`Il numero maggiore è b: ` + b);
} else if (a === b || b === c || c === a) {
   console.log(`Pareggio`);
} else {
   console.log(`Il numero maggiore è c: ` + c);
}

/* ESERCIZIO 6 — E-commerce: spedizione
   Variabile 'totale'.
   Se totale >= 50 spedizione gratuita, altrimenti 9.90.
   Stampa: 'Totale carrello: 35€ — Spedizione: 9.90€ — Totale finale: 44.90€'
   Risolvi una volta con if/else e una volta con ternario.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let totale;
let spedizione;
totale = 30;
if (totale >= 50) {
   spedizione = 0;
} else {
   spedizione = 9.90;
}
console.log(`Totale carrello: ` + totale + `€ - Spedizione: ` + spedizione + `€ - Totale finale: ` + (totale + spedizione) + `€`);

spedizione = totale >= 50
   ? 0
   : 9.90
console.log(`Totale carrello: ` + totale + `€ - Spedizione: ` + spedizione + `€ (gratuita) - Totale finale: ` + (totale + spedizione) + `€`);

/* ESERCIZIO 7 — typeof check
   Crea un array con 3 valori diversi (es. [42, 'ciao', true]).
   Con un for + if, per ogni elemento stampa 'x è un numero' o 'x non è un numero'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array = [42, 'ciao', true];
for (let i = 0; i < array.length; i++) {
   if (typeof array[i] === "number") {
      console.log(`La posizione ` + i + ` è un numero`);
   } else {
      console.log(`La posizione ` + i + ` non è un numero`);
   }
}

/* ESERCIZIO 8 — Array dei numeri
   Array vuoto. Aggiungi 1..5 con push. Aggiungi 0 all'inizio con unshift.
   Stampa array e length.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array2 = [];
array2.push(1, 2, 3, 4, 5);
array2.unshift(0);
console.log(array2 + ` - la lunghezza dell'array è: ` + array2.length);

/* ESERCIZIO 9 — Carrello con splice
   Array ['Penna', 'Quaderno', 'Zaino', 'Astuccio'].
   Con splice: rimuovi 'Quaderno', poi inserisci 'Diario' al suo posto.
   Stampa dopo ogni operazione.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const array3 = ['Penna', 'Quaderno', 'Zaino', 'Astuccio'];
array3.splice(1, 1);
console.log(array3);
array3.splice(1, 0, 'Diario');
console.log(array3);

/* ESERCIZIO 10 — Cerca un articolo
   Array prodotti = ['Penna', 'Quaderno', 'Zaino'].
   cercato = 'Zaino'.
   Con includes: stampa 'Zaino è in carrello: true'.
   Con indexOf: stampa la posizione, o 'Non in carrello'.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const prodotti = ['Penna', 'Quaderno', 'Zaino'];
if (prodotti.includes('Zaino') === true) {
   console.log(`Zaino è in carrello: true`);
   console.log(`La posizione di Zaino nell'array è: ` + prodotti.indexOf('Zaino'));
} else {
   console.log(`Non in carrello`);
}

/* ESERCIZIO 11 — Lista utenti
   Array utenti di 3 oggetti { nome, eta }.
   Con un for, stampa ogni utente: 'Mario (25 anni)'.
   Aggiungi console.table(utenti) alla fine.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const utenti = [
   {
      nome: 'Mario',
      eta: 25,
   },
   {
      nome: 'Aldo',
      eta: 38,
   },
   {
      nome: 'Giovanna',
      eta: 19,
   }
]
for (let i = 0; i < utenti.length; i++) {
   console.log(`Utente: ${utenti[i].nome} (${utenti[i].eta} anni)`);
}
console.table(utenti);

/* ESERCIZIO 12 — Inventario disponibili
   Array prodotti di 4 oggetti { nome, prezzo, disponibile }.
   Con for, per ogni prodotto:
   - disponibile && prezzo < 10 → 'OFFERTA: nome (prezzo€)'
   - disponibile && prezzo >= 10 → 'nome — prezzo€'
   - !disponibile → 'nome — esaurito'
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const products = [
   {
      nome: 'Computer',
      prezzo: 50,
      disponibile: true,
   },
   {
      nome: 'Mouse',
      prezzo: 5,
      disponibile: true,
   },
   {
      nome: 'Tastiera',
      prezzo: 10,
      disponibile: true,
   },
   {
      nome: 'Schermo',
      prezzo: 30,
      disponibile: false,
   }
]
for (let i = 0; i < products.length; i++) {
   if (products[i].disponibile === true && products[i].prezzo < 10) {
      console.log(`OFFERTA : ${products[i].nome} (${products[i].prezzo}€)`);
   } else if (products[i].disponibile === true && products[i].prezzo >= 10) {
      console.log(`${products[i].nome} - ${products[i].prezzo}€`);
   } else {
      console.log(`${products[i].nome} - esaurito`);
   }
}

/* --EXTRA-- ESERCIZIO 13 — Reverse manuale
   Array [1, 2, 3, 4, 5].
   Nuovo array 'inverso', riempilo con un for (dall'ultimo al primo) usando push.
   Stampa 'inverso'.
   Vincolo: niente metodo .reverse() di JavaScript.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const numeri = [1, 2, 3, 4, 5];
console.log(numeri);
const inverso = [];
for (let i = numeri.length - 1; i >= 0; i--) {
   inverso.push(numeri[i]);
}
console.log(inverso);