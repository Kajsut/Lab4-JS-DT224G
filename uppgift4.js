/* Uppgift 4, av Kajsa Widén
Programet skriver ut alla hela, samt jämna tal på skärmen */
"use strict"

/* Talen 1-20 skrivs ut på skärmen
for (let i = 1; i <= 20; i++){
    console.log(i);
}
*/

//Jämna tal mellan 1-20 skrivs ut på skärmen
for (let i = 1; i <= 20; i++){
    if (i % 2 === 0){
        console.log(i);
    }
}