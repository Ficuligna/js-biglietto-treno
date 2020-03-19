// DESCRIZIONE:
// ll programma dovrà chiedere all’utente il numero di chilometri che vuole percorrere e l’età del passeggero.

// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio.

// Il prezzo del biglietto è definito in base ai km (0.21 € al km),

// ma va applicato uno sconto del 20% per i minorenni

// e del 40% per gli over 65.

// BONUS: (ma solo se il resto è fatto)

// Quanti minuti mancano alla fine dell’ora?  (quindi script che quando aggiorno la pagina mi dice quanti minuti mancano);

// Inserisci con due prompt l’età di due persone (persona1, persona2) e stampa a schermo il numero più grande.

//



//VARIABILI NON BONUS
var age = parseInt(prompt("quanti anni hai?"));
var km = parseInt(prompt("quanti chilometri vuoi percorrere?"));
var priceTic = (0.21 * km);
if (age > 65) {
  priceTic = (priceTic - (priceTic* 40 / 100));
}else if (age < 18) {
  priceTic = (priceTic - (priceTic* 20 / 100));
}else {
  document.getElementById("ciao").innerHTML = "Tu paghi a prezzo pieno perchè mi stai antipatico";
}

 document.getElementById("ciao2").innerHTML = "il prezzo del tuo biglietto è " + priceTic + "€";



//EX BONUS 1
var d = new Date()
document.getElementById('ciao3').innerHTML = "mancano" + " " + (60 - parseInt(d.getMinutes())) + " minuti alla fine dell'ora";

//EX BONUS 2
var age1 = parseInt(prompt("Persona 1 inserisci la tua età"));
var age2 = parseInt(prompt("Persona 2 inserisci la tua età"));
var printAge;
if (age1 > age2) {
  printAge ="Persona 1 è più grande: " + age1 + " anni";
}else if (age1 < age2) {
  printAge ="Persona 2 è più grande: " + age2 + " anni";
}else {
  printAge = "Siete coetanei, 'gnurant."
}

document.getElementById('ciao4').innerHTML = printAge;
