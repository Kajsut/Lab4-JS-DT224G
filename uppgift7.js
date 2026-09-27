/* Uppgift 7, av Kajsa Widén
Koden innehåller en funktion som räknar ut summan av alla tal i en array */
"use strict"

let numbers = [52,13,78,24,56,26];

function numbersSum(numbers){
    let newSum = 0;

    //Räknar ut summan av alla tal i arrayen
    for (let i = 0; i < numbers.length; i++){
         newSum = newSum + numbers[i];
    }
    return newSum; 
}

//Skriver ut på skärmen
console.log("Summan är "+ (numbersSum(numbers)));