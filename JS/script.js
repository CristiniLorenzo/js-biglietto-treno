// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul
// prezzo). Questo richiederà un minimo di ricerca.



// chiedere km da fare
const userKm = prompt('quanti Km devi fare?')
console.log(userKm)
// chiedere età
const userAge = parseInt(prompt('quanti anni hai?'))
console.log(userAge)
// prezzo base biglietto 0.21€*km
const basePrice = userKm * 0.21
console.log(basePrice)


// calcolo sconti
let calcDiscount;
console.log(calcDiscount)
// se < 18 anni 20% di sconto
if (userAge <= 18) {
    calcDiscount = basePrice * 20 / 100;
}
// se > 65 anni 40% di sconto
else if (userAge >= 65) {
    calcDiscount = basePrice * 40 / 100;
}

// prezzo finale= prezzo base - sconto (in base all'età) con massimo 2 decimali
let finalPrice = basePrice - calcDiscount  ;
console.log(finalPrice)

// fix a 2 decimali
let fixedPrice = finalPrice.toFixed(2)
console.log(fixedPrice)

const userMessage = alert (`Il prezzo del tuo biglietto è: ${fixedPrice}€`)