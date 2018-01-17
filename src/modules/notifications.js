module.exports = (navigationViewToInsert)=>{
 const ajaxGetNewResponse = require('./ajax.js');
 const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
 let dataToSend = {requestName:'Recuperer la réponse de LMR',userNumber:userInformations.Telephone};
     dataToSend = JSON.stringify(dataToSend);
 setInterval(()=>{
    let notificationAlert = localStorage.getItem('notifications');
        notificationAlert = JSON.parse(notificationAlert);
        notificationAlert = notificationAlert.NotificationsPush;
    if(notificationAlert === "true"){
        const returnResponse = ajaxGetNewResponse(dataToSend,'https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php');
        returnResponse.then((response)=>{
         // Notification pour avertir l'utilisateur d'une réponse a sa question
         if(response.Statut === "Réponse envoyée"){
          if(localStorage.getItem('activePage') === null){
              cordova.plugins.notification.local.hasPermission((granted)=>{
                  cordova.plugins.notification.local.schedule({
                      title: 'Réponse de Msr Assurance',
                      text: response.ReponseLmr,
                      foreground: true,
                      badge:false,
                      smallIcon:'res://android/ldpi.png'
                  });
                  function openSpeakToAnAgentPage(){
                   console.log('you le brave');
                  }
                  cordova.plugins.notification.local.on('click', openSpeakToAnAgentPage);
              });
             }
         }
       }).catch((error)=>{
         console.log(error);
       });
    }else{
        return false;
    }
    
 },60000);
}