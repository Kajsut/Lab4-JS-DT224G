/* Uppgift 2, av Kajsa Widén
Lagrar pris och antal produkter, räknar pris med och utan moms, och skriver ut detta på skärmen */
"use strict";

let price = 100;
let howMany = 3;

//Uträkning, hur mycket är totalpriset
let allTogether = price * howMany;

//Uträkning, med moms
let withMoms = allTogether * 1.25;


console.log(`Pris: ` + price + ` kr`);
console.log(`Antal: ` + howMany);
console.log(`Totalt: ` + allTogether + ` kr`);
console.log(`Totalt inklusive moms: ` + withMoms + ` kr`);


