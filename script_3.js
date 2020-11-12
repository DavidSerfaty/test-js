stage = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?")

for(var count = 1; count <= stage; count++){
  console.log(" ".repeat(stage-count)+"#".repeat(count));
}
