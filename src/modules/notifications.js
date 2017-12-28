module.exports = (navigationViewToInsert)=>{
 const ajaxGetNewResponse = require('./ajax.js');
 const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
 let dataToSend = {requestName:'Recuperer la réponse de LMR',userNumber:userInformations.Telephone};
     dataToSend = JSON.stringify(dataToSend);
 setInterval(()=>{
    const returnResponse = ajaxGetNewResponse(dataToSend,'https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php');
          returnResponse.then((response)=>{
           // Notification pour avertir l'utilisateur d'une réponse a sa question
           if(response.Statut === "Réponse envoyée"){
            if(localStorage.getItem('activePage') === null){
                cordova.plugins.notification.local.hasPermission(function (granted) {
                    cordova.plugins.notification.local.schedule({
                        title: 'Réponse de Msr Assurance',
                        text: response.ReponseLmr,
                        foreground: true,
                        badge:true,
                        smallIcon:'res://android/ldpi.png'
                    });
                    function openSpeakToAnAgentPage(notification,state){if (debugSetUpLocalNotificationHandlers)
                        ConsoleLog("SetUpLocalNotificationHandlers: 'click' " + notification.id + "state = " + JSON.stringify(state));}
                    cordova.plugins.notification.local.on('click', openSpeakToAnAgentPage,navigationViewToInsert);
                });
               }
           }
         }).catch((error)=>{
           console.log(error);
         });
 },60000);
}