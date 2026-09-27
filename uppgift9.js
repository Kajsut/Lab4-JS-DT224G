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


for ( let i = 0; i < people.length; i++ ){
    console.log(people[i]);
}
