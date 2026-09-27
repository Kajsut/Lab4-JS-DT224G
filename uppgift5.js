/* Uppgift 5, av Kajsa Widén
Skriver ut, tar bort och lägger till olika delar av en array var för sig */
"use strict"

let food = ["Tacos","Sushi","Carbonara","Halv special","Pumpapaj"];

//Skriv ut hela arrayen
for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}

//Skriver ut det första elementet
console.log(food[0]);

//Skriver ut det sista elementet
console.log(food[4]);

//Lägger till en ny maträtt sist i arrayen
food.push("Lax i citronsås");

//Ta bort första maträtten i arrayen
food.shift();

//Skriver ut hela den nya arrayen
for (let i = 0; i < food.length; i++){
    console.log(food[i]);
}