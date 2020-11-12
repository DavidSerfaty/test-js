console.log("coucou depuis la console");

let statusDeTHP = ["Moussaillon", "Corsaire", "Renégat"]; // créer un array

console.log(statusDeTHP[0]);

console.log(statusDeTHP.length); // la taille de l'array

statusDeTHP[0] = "La moussaille" // modifier la valeur d'une entrée

console.log(statusDeTHP);

statusDeTHP.push("Flibustier") // ajoute une entrée à la fin d'une array
statusDeTHP.unshift("Pirate") // ajoute une entrée au début d'une array

console.log(statusDeTHP);

console.log(statusDeTHP.slice(2,4));


let THPSessionNum2 = {
  numOfMouss: 80,
  cities: ["Paris", "Lyon", "Montpellier"],
  successRate: 0.80,
  sessionMoto: "keep pushing to the top"
};

console.log(THPSessionNum2.numOfMouss);
console.log(THPSessionNum2.sessionMoto);

THPSessionNum2.numOfMouss = 79; // je modifie un attribut existant
console.log(THPSessionNum2.numOfMouss);
THPSessionNum2.favoriteLesson = "Présentation de Sinatra" //je rajoute un attribut
console.log(THPSessionNum2); //j'im



let weeksOfTHPArray = ["Semaine 1 - Introduction au Code", "Semaine 2 - Découverte de Ruby", "Semaine 3 - Programmation Orientée Objet", "Semaine 4 - Initiation à Rails"];

console.log("**********Parcourons le array en forEach :")
weeksOfTHPArray.forEach(weekContent => {
  console.log(weekContent)
});
