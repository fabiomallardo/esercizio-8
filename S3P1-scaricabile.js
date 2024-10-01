/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

function crazySum(num1, num2) {
    let somma = num1 + num2
    console.log(somma)
    if (num1 === num2) {
        console.log(somma * 3)
    } else {
        console.log(somma)
    }
}
crazySum(10, 10);


/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.

function boundary(num) {
    if ((num >= 20 && num <= 100) || num===400) {
        return true;
    }else {
        return false;
    }
    } 

console.log(boundary(401));*/

let boundary = (num) => {
    return (num >= 20 && num <= 100) || num===400 
}
console.log(boundary(400))


/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/
function reverseString(str) {
    let reversed="";
for (let i = str.length -1; i>=0; i-- ) {
    reversed += str[i];
}
return reversed;
}
console.log(reverseString("EPICODE"));

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

function upperFirst (stringa) { 
let stringaSplit = stringa.split(' ');
for (let i=0; i<stringaSplit.length; i++){
stringaSplit[i]= stringaSplit[i][0].toUpperCase() + stringaSplit[i].substring(1);
}
return stringaSplit.join(' ')
}
console.log(upperFirst("questa è una prova"));



/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/
 
function giveMeRandom (n) {
let array = []
for (let i = 0; i<n; i++){
   let numerorandom= Math.round(Math.random()*11)
    array.push(numerorandom);
}
return array;

}
console.log(giveMeRandom(10))

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

function area (l1,l2) {
    console.log (l1*l2)
}
area (10,5)

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

function crazyDiff (num) {
let differenza = num-19;
if (differenza>19) {
    console.log(differenza*3)
} else {
    console.log(differenza)
}
return differenza;
}

crazyDiff(39)


/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

function codify(str) {
    if (str.substring(0, 4) === "code") {
        return str; 
    } else {
        return "code" + str
    }
}

console.log(codify("epi"));
console.log(codify("code"));


/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

function check3and7 (num) {
if (num % 3===0 || num % 7 === 0) {
    console.log(true)
} else {
    console.log(false)
}
}
check3and7(10)


/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/
function cutString (str) {
    return str.substring (1, str.length -1)
}

console.log(cutString("ciao"));