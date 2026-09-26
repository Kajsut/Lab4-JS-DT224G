/* Uppgift 3, av Kajsa Widén
Använder if-sats för att dela in en ålder i olika grupper */
"use strict"

let age = 65;
console.log(age);

if (age < 18){
    console.log("Barn");
} else if (age >= 18 && age <=64){
    console.log("Vuxen");
}