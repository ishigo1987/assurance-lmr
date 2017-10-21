exports.create = () =>{
   'use strict';
   let labelAnim = require('../helpers/animateLabel.js');
   let messageInfo = require('../custom_widgets/snackbar.js');
   const {Page,TextView,TextInput,Button} =  require('tabris');
   const themeColor = '#1562AD';
   const font14px = '14px roboto, noto';
   let enterEmailAdressView = new Page({title: 'Mot de passe oublié',background:'#fafafa'});
   const labelEmail = new TextView({top:["prev()", 25],left:"10%",text:"ADRESSE MAIL",textColor:"#212121",font:"16px roboto, noto"}).appendTo(enterEmailAdressView);
   const adresseMailInput = new TextInput({top:['prev()', 0],left:'10%',right:'10%',font: font14px,message: 'Entrez votre adresse mail',keyboard:'email',borderColor:'#e0e0e0'}).appendTo(enterEmailAdressView);  
   const button = new Button({top:['prev()', 20],left:'10%',right:'10%',font: font14px,textColor:'#fff',text:'Continuer',background:themeColor,elevation:0
    }).on('select', () =>{
       const regexMail =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
       const adresseMailInputValue = adresseMailInput.text;
       if(adresseMailInputValue === ''){
            messageInfo(enterEmailAdressView,40,"Veuillez entrer votre adresse mail");
        }else if(!regexMail.test(adresseMailInputValue)){
            messageInfo(enterEmailAdressView,40,"Veuillez entrer une adresse mail valide");
        }else{
           const dataToSend = {email: adresseMailInputValue};
           localStorage.setItem('userInfos', JSON.stringify(dataToSend));
           let callModuleSendCode = require('../modules/sendVerificationCode.js')(adresseMailInputValue);
               callModuleSendCode.then((response)=>{
                if(response.Message === "Code envoye"){
                  // je crée ce localStorage pour signifier a la vue de verification d'email que je veux etre redirigé 
                  //vers la vue entrer un nouveau mot de passe
                  localStorage.setItem('temporaryDataTypeOfViewToAskRedirection','UpdatePassword');
                  let goToEnterVerificationCode = require("./checkCodeAndRedirect.js");
                        goToEnterVerificationCode.create();
                  }
               }).catch(()=>{
                messageInfo(viewToDisplayInformationMessage,40,"Pas de connexion internet");
               });
        }
     }).appendTo(enterEmailAdressView);   
   
     const input = enterEmailAdressView.find('TextInput');
           input.on({
             focus: function(){
              labelAnim(labelEmail,'focus');
             },
             blur: function(){
              labelAnim(labelEmail,'blur');
             }
            });
   return enterEmailAdressView;
};