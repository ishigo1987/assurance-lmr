module.exports = (devisData)=>{
  "use strict";
  console.log(devisData);
  return new Promise((resolve,reject)=>{
      const category = devisData.category;
      const zone = devisData.zone;
      const dureeJour = devisData.dureeJour;
      const dureeMois = devisData.dureeMois;
      const energy = devisData.energy;
      let puissance = devisData.puissance;
      const remorque = devisData.remorque;
      let rca;
      if(category === "Catégorie 1"){
        // Test de Zone
         if(zone === "Zone A"){
           // On teste la valeur de la puissance et on verifie si il y'a une remorque ou pas
           if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 52499;}
           if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 57748;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 63784;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 70162;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 70877;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 77964;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 92497;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 101747;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 117764;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 129541;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 138863;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 152749;}
         }else if(zone === "Zone B"){
           // On teste la valeur de la puissance et on verifie si il y'a une remorque ou pas
           if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 50311;}
           if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 55341;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 61120;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 67238;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 67924;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 74716;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 83643;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 97507;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 112858;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 124144;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 133077;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 146385;}
         }else if(zone === "Zone C"){
            // On teste la valeur de la puissance et on verifie si il y'a une remorque ou pas
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 48124;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 52935;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 58468;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 64315;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 64970;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 71467;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 84789;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 93268;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 107951;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 118746;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 127291;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 140020;}      
         }
      }else if(category === "Catégorie 2"){
          // Test de Zone
        if(zone === "Zone A"){
           // On teste la valeur de la puissance et on verifie si il y'a une remorque ou pas
           if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 58759;}
           if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 13131;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 71183;}
           if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 13213;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 80818;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 13213;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 121212;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 21144;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 150086;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 21144;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 173591;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 21144;} 
        }else if(zone === "Zone B"){
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 56311;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 67566;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 68217;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 81860;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 77547;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 93056;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 116162;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 139394;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 143833;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 172599;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 56311;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 67566;}
        }else if(zone === "Zone C"){
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 53863;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 64628;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 65251;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 78301;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 74175;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 89010;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 111111;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 133333;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 137579;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 165095;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 159125;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 190950;}  
        } 
      }else if(category === "Catégorie 3"){
        // Test de Zone
        if(zone === "Zone A"){
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 94044;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 122257;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 116045;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 150858;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 132900;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 172771;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 196282;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 255167;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 250210;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 325272;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 290326;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 377426;}  
        }else if(zone === "Zone B"){
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 90126;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 117163;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 111210;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 144572;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 127363;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 165572;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 188103;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 244535;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 239784;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 311719;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 278229;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 361700;}  
        }else if(zone === "Zone C"){
            if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 86207;}
            if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 112069;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Non" ){rca = 106374;}
            if(((energy === "Essence" && puissance > 2 && puissance < 7)||(energy === "Diesel" && puissance > 1 && puissance < 5 )) && remorque === "Oui" ){rca = 138287;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Non" ){rca = 121825;}
            if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 8 )) && remorque === "Oui" ){rca = 158374;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 179925;}
            if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 233903;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 229359;}
            if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 298166;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Non" ){rca = 266132;}
            if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 16)) && remorque === "Oui" ){rca = 345974;} 
        }
      }else if(category === "Catégorie 4"){
        // Test de Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else if(category === "Catégorie 5"){
         // Test de Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else{
          return false;
      }

     
     
      if(dureeJour !== undefined){
      // Calcul avec la fonction de calcul du devis en fonction du nombre de jours
      let netPrime;
      let defenseRecours = 0;
      let avanceRecours = 0;
      let resultRc = outputDevisPrice();
      if(devisData.arrayOfCheckBox.includes("Defense Recours") === true){
        defenseRecours = Math.round(Number((resultRc * 25) / 1000));
      }
      if(devisData.arrayOfCheckBox.includes("Avance sur Recours") === true){
        avanceRecours = 30000;
      }
      netPrime = resultRc + defenseRecours + avanceRecours;
      resolve(netPrime);
     }else{
      // Calcul avec la fonction de calcul du devis en fonction du nombre de mois
     }
    // Fonction de calcul du devis en fonction des jours
    function outputDevisPrice(){
      // rc = Responsabilité Civile
      let rc;
      if(dureeJour >= 1 && dureeJour < 61){
       rc = Math.round(Number((rca * 20) / 100));
      }else if(dureeJour > 60 && dureeJour < 121){
        rc = Math.round(Number((rca * 40) / 100));
      }else if(dureeJour > 120 && dureeJour < 181){
        rc = Math.round(Number((rca * 60) / 100));
      }else if(dureeJour > 180 && dureeJour < 241){
        rc = Math.round(Number((rca * 80) / 100));
      }else if(dureeJour > 240 && dureeJour < 366){
        rc = Math.round(Number((rca * 100) / 100));
      }else if(dureeJour > 365){
        rc = Math.round(Number((rca * 100) / 100));
      }

      // resolve(rc);
      return rc;
    }

  });
}