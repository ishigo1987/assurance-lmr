module.exports = (phoneToSendCode) =>{
  "use strict";
  return new Promise((resolve,reject)=>{
    let pDialog = require("../plugins/pDialog.js");
    let generateNumber = new Uint16Array(1);
    window.crypto.getRandomValues(generateNumber);
    let codeVerification = String(generateNumber[0]);
    if(codeVerification.length === 4){codeVerification = `5${codeVerification}`;}
    let dataToSend = {telephone: phoneToSendCode,code: codeVerification, requestName:'Verification Code'};
        dataToSend = JSON.stringify(dataToSend);
    localStorage.setItem("verificationCode", codeVerification);
    let xhr = new XMLHttpRequest();
    xhr.addEventListener("loadstart",()=>{
      pDialog("Envoi d'un code de vérification en cours...",false,true);
    });
    xhr.addEventListener("load", () =>{
    //  let xhrResponse = JSON.parse(xhr.responseText);
    console.log(xhr.responseText);
     pDialog("",true,false);
     resolve(xhr.responseText);
    });
    xhr.addEventListener("error", () =>{
      pDialog("",true,false);
      console.log("pb avec json");
      reject("Pas de connexion internet");
    });
    xhr.responseType = "text";
    xhr.open('POST','https://www.afrikhealth.com/apiAssuranceLmr/apiConnection.php', true);
    xhr.send(dataToSend);
  });
};
