/* Uppgift 9, av Kajsa Widén
I denna koden finns det en array med olika personer, de kan redovisas fint på skärmen samt räkna ut om de är myndiga eller ej. */
"use strict"

const people = [
    {
        name: "Glenn",
        age: 78,
        city: "Göteborg"
    },
    {
        name: "Oskar",
        age: 8,
        city: "Malmö"
    },
    {
        name: "Sonja",
        age: 18,
        city: "Umeå"
    }
];

//Loopar igenom hela arrayen
for ( let i = 0; i < people.length; i++ ){

    //Räknar ut om personen är myndig eller ej, och skriver ut detta
    if (people[i].age < 18){
        console.log(`${people[i].name} bor i ${people[i].city} och är inte myndig.`);
    } else {
        console.log(`${people[i].name} bor i ${people[i].city} och är myndig.`);
    }

}

