module.exports = (devisData)=>{
  "use strict";
  return new Promise((resolve,reject)=>{
      const category = devisData.category;
      const zone = devisData.zone;
      const dureeJour = devisData.dureeJour;
      const dureeMois = devisData.dureeMois;
      let rca;
      if(category === "Catégorie 1"){
         const energy = devisData.energy;
         const puissance = devisData.puissance;
         const remorque = devisData.remorque;
        // Test de le Zone
         if(zone === "Zone A"){
           // On teste la valeur de la puissance et on verifie si il y'a une remorque ou pas
           if(puissance <= 2 && remorque === "Non" && (energy === "Essence" || energy === "Diesel")){rca = 52499;}
           if(puissance <= 2 && remorque === "Oui" && (energy === "Essence" || energy === "Diesel")){rca = 57718;}
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
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 6 )) && remorque === "Non" ){rca = 67924;}
           if(((energy === "Essence" && puissance > 6 && puissance < 11)||(energy === "Diesel" && puissance > 4 && puissance < 6 )) && remorque === "Oui" ){rca = 74716;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Non" ){rca = 83643;}
           if(((energy === "Essence" && puissance > 10 && puissance < 15)||(energy === "Diesel" && puissance > 7 && puissance < 11 )) && remorque === "Oui" ){rca = 97507;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Non" ){rca = 112858;}
           if(((energy === "Essence" && puissance > 14 && puissance < 24)||(energy === "Diesel" && puissance > 10 && puissance < 17 )) && remorque === "Oui" ){rca = 124144;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 17)) && remorque === "Non" ){rca = 133077;}
           if(((energy === "Essence" && puissance > 23)||(energy === "Diesel" && puissance > 17)) && remorque === "Oui" ){rca = 148388;}
         }else if(zone === "Zone C"){

         }
      }else if(category === "Catégorie 2"){
          // Test de le Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else if(category === "Catégorie 3"){
        // Test de le Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else if(category === "Catégorie 4"){
        // Test de le Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else if(category === "Catégorie 5"){
         // Test de le Zone
        if(zone === "Zone A"){
            
        }else if(zone === "Zone B"){
            
        }else if(zone === "Zone C"){
            
        }
      }else{
          return false;
      }

     
     
      if(dureeJour !== undefined){
      // Calcul avec la fonction de calcul du devis en fonction du nombre de jours
      outputDevisPrice();
     }else{
      // Calcul avec la fonction de calcul du devis en fonction du nombre de mois
     }
    // Fonction de calcul du devis en fonction des jours
    function outputDevisPrice(){
      let primeAccount;
      if(dureeJour >= 1 && dureeJour < 60){
       primeAccount = Math.round(Number((rca * 20) / 100));
      }else if(dureeJour > 60 && dureeJour < 120){
        primeAccount = Math.round(Number((rca * 40) / 100));
      }else if(dureeJour > 121 && dureeJour < 180){
        primeAccount = Math.round(Number((rca * 60) / 100));
      }else if(dureeJour > 181 && dureeJour < 240){
        primeAccount = Math.round(Number((rca * 80) / 100));
      }else if(dureeJour > 241 && dureeJour < 365){
        primeAccount = Math.round(Number((rca * 100) / 100));
      }else if(dureeJour > 365){
        primeAccount = Math.round(Number((rca * 100) / 100));
      }

      resolve(primeAccount);
    }

  });
}