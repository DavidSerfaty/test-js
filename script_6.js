function arn_to_portein(arn) {
  arn_cut = arn.match(/.{1,3}/g);
  proteins = []

  for(let index in arn_cut) {
    protein = arn_cut[index];
    switch (arn_cut[index]) {
      case "UCU" : case "UCC" : case "UCA" : case "UCG" : case "AGU" : case "AGC" :
        proteins.push("Sérine");
        break;
      case "CCU" : case "CCC" : case "CCA" : case "CCG" :
        proteins.push("Proline");
        break;
      case "UUA" : case "UUG" :
        proteins.push("Leucine");
        break;
      case "UUU" : case "UUC" :
        proteins.push("Phénylalanine");
        break;
      case "CGU" : case "CGC" : case "CGA" : case "CGG" : case "AGA" : case "AGG" :
        proteins.push("Arginine");
        break;
      case "UAU" : case "UAC" :
        proteins.push("Tyrosine");
        break;
    default:
        proteins.push("Errors");
        break;
    }
  }
   return proteins.join("-")
}


console.log(arn_to_portein("UUACGCAGUAGA"));

console.log(arn_to_portein("CCGUCGUUGCGCUACAGC"));

console.log(arn_to_portein("CCUCGCCGGUACUUCUCG"));
