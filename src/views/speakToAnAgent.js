module.exports = (navigationViewToInsert)=>{
  "use strict";
  const {Page,ScrollView,TextInput,Composite,TextView} = require('tabris');
  let createMenuActionIcon,categoryAssuranceSelected;
  const actionSheet = require('../helpers/actionSheet.js');
  const handleActionCategorie = require("../helpers/actionIcons.js")(createMenuActionIcon, "Selectionnez une catégorie d'assurances", "srcImg", "low", navigationViewToInsert);
  const sendMessage = require('../helpers/actionIcons.js')(createMenuActionIcon,"","src/icons/sendMessage.png","high",navigationViewToInsert);
  const themeColor = "#1562AD";
  const font14px ="14px roboto, noto";
  const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
  const userNotifications = JSON.parse(localStorage.getItem('notifications'));
  const speakToAnAgentView = new Page({title: `Parler a un agent`,background:`#fafafa`})
  .on({
    appear: ()=>{
      handleActionCategorie.visible = true;
      sendMessage.visible = true;
    },
    disappear: ()=>{
      handleActionCategorie.visible = false;
      sendMessage.visible = false;
    }
  });
  const scrollView = new ScrollView({top:0,left:0,right:0,bottom:70}).appendTo(speakToAnAgentView);
  const compositeAreaTypeMessage = new Composite({top:['prev()',0],left:0,right:0,bottom:0,background:"#eee"}).appendTo(speakToAnAgentView);
  const scrollViewComposite = new ScrollView({top:0,left:0,right:0,bottom:0}).appendTo(compositeAreaTypeMessage);
  const inputMessage = new TextInput({left:5,right:5,centerY:0,message:"Entrez votre question",font:font14px,textColor:"#757575",autoCorrect:true,backgroundImage:null,focused:true,type:'multiline'}).appendTo(scrollViewComposite);
  handleActionCategorie.on("select",()=>{
    let as = actionSheet();
    as.then((returnAs)=>{
     categoryAssuranceSelected = returnAs;
     console.log(categoryAssuranceSelected);
    });
  });
  sendMessage.on('select',()=>{
     const inputMessagValue = inputMessag.text;
     if(inputMessageValue === ""){

     }else if(categoryAssuranceSelected === undefined){

     }else{
       let dataToSend;
      // Ici on verifie si l'utilisateur a choisi qu'on lui envoi la reponse a sa question par message
      // Dans ce cas on envoi son numéro a l'agent lors de l'envoi de son message
      if(userNotifications.Message === "On"){
        dataToSend = {Id:userInformations.Id,Telephone:userInformations.Telephone,Question:inputMessagValue}
      }else{
        dataToSend = {Id:userInformations.Id,Question:inputMessagValue}
      }
      const ajax = require('../modules/ajax.js')(JSON.stringify(dataToSend),"https://www.afrikhealth.com/apiAssuranceLmr/apiConnection.php");
            ajax.then((response)=>{

            }).catch(()=>{

            });
     }
  });
  return speakToAnAgentView;
};