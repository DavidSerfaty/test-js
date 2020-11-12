acne_bot = prompt("Hello, je suis acné bot !")

if ( acne_bot[acne_bot.length - 1] === "?") {
  console.log("Ouais Ouais...");
} else if ((acne_bot == acne_bot.toUpperCase()) && acne_bot != "" ) {
  console.log("Pwa, calme-toi...");
} else if (acne_bot.includes("Fortnite")){
  console.log("on s'fait une partie soum-soum ?");
} else if (acne_bot == ""){
  console.log("t'es en PLS ?");
} else {
  console.log("balek");
}
