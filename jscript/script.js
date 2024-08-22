// FUNCTIONS
// funzione che inverte una parola, ovvero la scrive al contrario
function mirrorWord (word) {
  let mirroredWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    mirroredWord += word[i];
    console.log(mirroredWord);
  }
  
  return mirroredWord;
}

/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

// FASE DI PREPARAZIONE
// -preparo una variabile che di tipo booleano che risponde alla domanda
// -"la parola è palindroma?"
let isPalindrome = false

// FASE DI IMPORTAZIONE DATI
// -chiedo all'utente di inserire una parola per verificare se
// è palindroma
const userWord = prompt('Inserisci la parola per verificare se è palindroma').trim();
console.log(userWord);

// FASE DI ELABORAZIONE
// -inverto la parola con la funzione mirrorWord e verifico se sia uguale a
//  quella inserita, poiché questa proprietà definisce una parola
//  palindroma
const mirroredUserWord = mirrorWord (userWord);
console.log(mirroredUserWord)
if (mirroredUserWord == userWord) isPalindrome = true;

//FASE DI PRESENTAZIONE DATI
// -stampo il risultato in console
console.log(isPalindrome);



/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
 */