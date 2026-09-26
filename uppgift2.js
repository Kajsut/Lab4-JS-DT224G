/* Uppgift 2, av Kajsa Widén
Lagrar pris och antal produkter */
"use strict";

let price = 100;
let howMany = 3;

//Uträkning, hur mycket är totalpriset
let allTogether = price * howMany;

//Uträkning, med moms
let withMoms = allTogether * 1.25;


console.log(withMoms);