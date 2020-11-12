number = prompt("De quel nombre veux-tu calculer la factorielle ?")
let factoriel = 1
for(var count = 1; count <= number; count++){
  factoriel *= count;
}
console.log(factoriel);
