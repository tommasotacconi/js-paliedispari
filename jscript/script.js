// FUNCTIONS
// inverte una parola, ovvero la scrive al contrario
function mirrorWord (word) {
  let mirroredWord = '';

  for (let i = word.length - 1; i >= 0; i--) {
    mirroredWord += word[i];
    console.log(mirroredWord);
  }
  
  return mirroredWord;
}

// genera un numero tra min a max, con max incluso o escluso a seconda
// che il terzo parametro sia rispettivamente true o false
function getRandomNum (min, max, isMaxIncluded) {
  if (isMaxIncluded) max++;
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * verifica se un numero è pari o dispari
 * @param {number} num 
 * @returns {'pari'|'dispari'|undefined}
 */
function isEvenOrOdd (num) {
  const numType = num % 2 == 0 ? 'pari' : 'dispari';
  return numType;
}


/* Palindroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma
 */

// FASE DI PREPARAZIONE
// recupero dal dom il paragrafo per il risultato e lo span in cui
// inserirlo
const par = document.getElementById('result-par');
const result = document.getElementById('palindrome-result');
// recupero il bottone
const button = document.querySelector('button');
// recupero il campo presdisposto per la parola
const wordField = document.querySelector('input');

// FASE DI IMPORTAZIONE DATI
/* // -chiedo all'utente di inserire una parola per verificare se
// è palindroma
const userWord = prompt('Inserisci la parola per verificare se è palindroma').trim();
console.log(userWord);
*/
// importo il valore di parola inserito dall'utente al click sul
// botton verifica
let userWord;
button.addEventListener('click', function () {
  userWord = wordField.value.toLowerCase();
  
  // FASE DI ELABORAZIONE
  // -preparo una variabile di tipo booleano che risponde alla domanda
  // -"la parola è palindroma?"
  let isPalindrome = false
  // -inverto la parola con la funzione mirrorWord e verifico se sia uguale a
  // quella inserita, poiché questa proprietà definisce una parola
  // palindroma
  const mirroredUserWord = mirrorWord (userWord);
  console.log(mirroredUserWord)
  if (mirroredUserWord == userWord) isPalindrome = true;
  // -preparo una variabile che consenta di stampare e di tradurre in pagina il
  // risultato ottenuto in isPalindrome
  const not = isPalindrome ? '' : 'non';
  
  //FASE DI PRESENTAZIONE DATI
  /* // -stampo il risultato in console
  console.log(isPalindrome);
   */
  // -rendo visibile il paragrafo e stampo il risultato al punto scelto in pagina
  par.style.display = 'block';
  result.innerText = not;
});




/* Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random(sempre da 1 a 5) per il computer(usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari(usando una funzione)
Dichiariamo chi ha vinto.
 */

// FASE DI PREPARAZIONE
// -preparo la giocata del computer, sfruttando la funzione precedentemente
// costruita, e la somma per determinare il risultato della partita
cpuNum = getRandomNum(1, 5, true);
console.log(cpuNum);
let sum = 0;

// FASE DI RECUPERO DATI
// -chiedo all'utente su quale risultato scommette per vincere ed il numero con
// cui gioca
const userChoice = prompt('Scegli pari o dispari?', 'pari').trim();
let userNum;
do {
  userNum = parseInt(prompt('Scegli il numero da 1 a 5 con cui vuoi giocare?').trim());
} while (userNum < 1 || userNum > 5);
console.log(userNum);

// FASE DI ELABORAZIONE
// -sommo i due numeri della partita in sum
sum = cpuNum + userNum;
console.log(sum);

// -determino se la somma ha la proprietà pari o dispari con la funzione
// costruita
sumType = isEvenOrOdd(sum);
// -determino se vince l'utente verificando se la somma possiede
// la proprietà stabilita dall'utente
const winner = userChoice == sumType ? 'utente' : 'CPU';

// FASE DI PRESENTAZIONE DATI
// -mostro il vincitore in console
console.log(winner);






