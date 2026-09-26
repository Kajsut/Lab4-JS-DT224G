/* Uppgift 8, av Kajsa Widén
Koden innehåller ett objekt som skriver ut information som den har fått till sig om böcker */
"use strict"

function book(title , author , year){
    this.title = title;
    this.author = author;
    this.year = year;

    console.log(`Titel: ${title}\n
                Författare: ${author}\n
                Utgivningsår: ${year}`);
    
}

const book1 = new book ("Heartless Hunter", "Kristen Ciccarelli", 2024)