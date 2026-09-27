/* Uppgift 8, av Kajsa Widén
Koden innehåller ett objekt som skriver ut information som den har fått till sig om böcker */
"use strict"

//Ett objekt om en bok
const book1 = new book ("Heartless Hunter", "Kristen Ciccarelli", 2024);

//Funktion tar emot en bok och skriver ut det snyggt på skärmen
function book(title , author , year){
    this.title = title;
    this.author = author;
    this.year = year;
    
    this.presentation = function (){
    console.log(`Titel: ${title}`);
    console.log(`Författare: ${author}`);
    console.log(`Utgivningsår: ${year}`);
    }
}

//Ber funktionen att skriva ut bok 1 på skärmen
book1.presentation();