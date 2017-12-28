module.exports = ()=>{
 const ajaxGetNewResponse = require('./ajax.js');
 const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
 let dataToSend = {requestName:'Recuperer la réponse de LMR',userNumber:userInformations.Telephone};
     dataToSend = JSON.stringify(dataToSend);
 setInterval(()=>{
    const returnResponse = ajaxGetNewResponse(dataToSend,'https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php');
          returnResponse.then((response)=>{
           // Notification pour avertir l'utilisateur d'une réponse a sa question
           if(localStorage.getItem('activePage') === null){
            cordova.plugins.notification.local.hasPermission(function (granted) {
                cordova.plugins.notification.local.schedule({
                    title: 'Réponse de Msr Assurance',
                    text: 'Vous avez une réponse a votre question',
                    foreground: true,
                    badge:true,
                    smallIcon:'res://android/ldpi.png'
                });
                function openSpeakToAnAgentPage(){require('./speakToAnAgent.js')(executeNavigationView).appendTo(executeNavigationView);}
                cordova.plugins.notification.local.on('click', openSpeakToAnAgentPage, scope);
            });
           }
         }).catch((error)=>{
           console.log(error);
         });
 },60000);
}