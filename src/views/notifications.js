exports.create = ()=>{
  "use strict";
  const {Page,Switch,TextView,Composite} = require('tabris');
  const alertDialog = require('../helpers/alertDialog.js');
  const themeColor = "#1562AD";
  const font14px ="14px roboto, noto";
  let valueCheckOrNotPushNotification, valueCheckOrNotMessage;
  if(localStorage.getItem('notifications') === null){
    valueCheckOrNotPushNotification = true;
    valueCheckOrNotMessage = false;
  }else{
    let valueLocalStorageNotifications = localStorage.getItem('notifications');
        valueLocalStorageNotifications = JSON.parse(valueLocalStorageNotifications);
    valueCheckOrNotPushNotification = valueLocalStorageNotifications.NotificationsPush;
    valueCheckOrNotMessage = valueLocalStorageNotifications.NotificationsMessage;
  }
  const notificationView = new Page({title: `Notifications`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
  const compositeNotificationsPush = new Composite({top:0,left:0,right:0,background:"#fff",elevation:1,height:64,id:"compositeNotificationsPush"}).appendTo(notificationView);
  const textNotificationPush = new TextView({left:10,right:40,font:font14px,centerY:0,textColor:"#757575",text:"Désactiver les notifications push"}).appendTo(compositeNotificationsPush);
  const switchNotificationsPush = new Switch({centerY:0,right:10,checked:valueCheckOrNotPushNotification,thumbOnColor:themeColor,trackOnColor:"#a1c0de"}).appendTo(compositeNotificationsPush);
  const compositeNotificationsMessage = new Composite({top:["#compositeNotificationsPush",1],left:0,right:0,background:"#fff",elevation:1,height:64}).appendTo(notificationView);
  const textNotificationsMessage = new TextView({left:10,right:40,font:font14px,centerY:0,textColor:"#757575",text:"Recevoir les réponses par messages"}).appendTo(compositeNotificationsMessage);
  const switchNotificationsMessage = new Switch({centerY:0,right:10,checked:valueCheckOrNotMessage,thumbOnColor:themeColor,trackOnColor:"#a1c0de"}).appendTo(compositeNotificationsMessage);
  switchNotificationsPush.on('checkedChanged', ({value: checked})=>{
        if(checked === true){
         if(localStorage.getItem('showAlertDialogPushNotifications') === null){
            let aD = alertDialog("Notifications Push","En désactivant les notifications push vous ne serez plus en mesure de recevoir des réponses a vos questions via notre application,vous les recevrez par messages si vous activez cette option","Ok j'ai compris","Fermer");
                aD.then((response)=>{
                  if(response === "button ok"){
                    localStorage.setItem('showAlertDialogPushNotifications',"Plus d'affichage de l'alerte");
                  }
                });
               }
         valueCheckOrNotPushNotification = true;  
        }else{
         valueCheckOrNotPushNotification = false;
        }
      const valuesNotifications = {NotificationsPush:valueCheckOrNotPushNotification,NotificationsMessage:valueCheckOrNotMessage};
      localStorage.setItem('notifications',JSON.stringify(valuesNotifications));
     });
  switchNotificationsMessage.on('checkedChanged',({value: checked})=>{
    if(checked === true){
        if(localStorage.getItem('showAlertDialogNotificationsMessage') === null){
           let aD = alertDialog("Alerte SMS","En activant cette option vous recevrez des réponses a vos questions par messages(ce moyen est tres utile lorsque l'on n'est pas connecté sur internet pendant un moment donné)","Ok j'ai compris","Fermer");
               aD.then((response)=>{
                 if(response === "button ok"){
                   localStorage.setItem('showAlertDialogNotificationsMessage',"Plus d'affichage de l'alerte");
                 }
               });
              }
        valueCheckOrNotMessage = true;  
       }else{
        valueCheckOrNotMessage = false;
       }
     const valuesNotifications = {NotificationsPush:valueCheckOrNotPushNotification,NotificationsMessage:valueCheckOrNotMessage};
     localStorage.setItem('notifications',JSON.stringify(valuesNotifications));
  });
  return notificationView;
};