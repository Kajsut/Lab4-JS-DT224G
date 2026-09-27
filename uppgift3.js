/* Uppgift 3, av Kajsa Widén
Använder if-sats för att dela in en ålder i olika grupper */
"use strict"

let age = 17;

//Räknar ut om det är barn, vuxen eller pensionär
if (age < 18){
    console.log("Barn");
} else if (age >= 18 && age <=64){
    console.log("Vuxen");
} else {
    console.log("Pensionär");
}