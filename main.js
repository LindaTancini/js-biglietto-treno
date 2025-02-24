// km da percorrere

const km = parseInt(prompt("Quanti kilometri devi percorrere?"));
console.log(km);

// Età dell'utente

const userAge = parseInt(prompt("Inserisci la tua età"));
console.log(userAge);

// Dati delle variabili

const kmPrice = 0.21;
const sum = kmPrice * km;
let percentage = 0;
let finalPrice = 0;
let discountPrice = 0;

// Sconto 20% per minorenni < 18
if (userAge < 18) {
  percentage = 20;
  discountPrice = (sum / 100) * percentage;
  console.log(discountPrice);
}
