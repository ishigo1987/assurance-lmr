module.exports = (navigationViewToInsert,searchActionToInsert)=>{
 const ajaxGetNewResponse = require('./ajax.js');
 let userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
 let dataToSend = {requestName:'Recuperer la réponse de LMR',userNumber:userInformations.Telephone};
     dataToSend = JSON.stringify(dataToSend);
    // false voulant dire ici que l'utilisateur n'a pas desactivé les notifications push
    setInterval(()=>{
     let copyUserInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
     if(copyUserInformations !== null){
        let notificationAlert = localStorage.getItem('notifications');
        if(notificationAlert !== null){
            notificationAlert = JSON.parse(notificationAlert);
            notificationAlert = notificationAlert.NotificationsPush;
        }else{
            notificationAlert = false;
        }
        if(notificationAlert === false){
            const returnResponse = ajaxGetNewResponse(dataToSend,'https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php');
            returnResponse.then((response)=>{
                console.log(localStorage.getItem('activePage'));
             // Notification pour avertir l'utilisateur d'une réponse a sa question
             if(response.Statut === "Réponse envoyée"){
              if(localStorage.getItem('activePage') === null){
                  cordova.plugins.notification.local.hasPermission((granted)=>{
                      cordova.plugins.notification.local.schedule({
                          title: 'Réponse de Msr Assurance',
                          text: response.ReponseLmr,
                          foreground:true,
                          vibrate:true,
                          launch:true,
                          smallIcon:'res://android/ldpi.png'
                      });
                      function markAnswerRead(){
                        require('./markAnswerRead.js')(response.IdQuestion);
                      }
                      cordova.plugins.notification.local.on('click', markAnswerRead);
                  });
                 }
             }
           }).catch((error)=>{
             console.log(error);
           });
        }else{
            return false;
        }
      }else{
          return false;
      } 
     },60000);
 
}