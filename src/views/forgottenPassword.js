exports.create = () =>{
   'use strict';
   let labelAnim = require('../helpers/animateLabel.js');
   let messageInfo = require('../custom_widgets/snackbar.js');
   const {Page,TextView,TextInput,Button} =  require('tabris');
   const themeColor = '#1562AD';
   const font14px = '14px roboto, noto';
   let enterPhoneNumberView = new Page({title: 'Mot de passe oublié',background:'#fafafa'});
   const labelPhone = new TextView({top:["prev()", 25],left:"10%",text:"TÉLÉPHONE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(enterPhoneNumberView);
   const phoneInput = new TextInput({top:['prev()', 0],left:'10%',right:'10%',font: font14px,message: 'Entrez votre téléphone',keyboard:'phone',borderColor:'#e0e0e0'}).appendTo(enterPhoneNumberView);  
   const button = new Button({top:['prev()', 20],left:'10%',right:'10%',font: font14px,textColor:'#fff',text:'Continuer',background:themeColor,elevation:0
    }).on('select', () =>{
       const phoneInputValue = phoneInput.text;
       const regexNumber = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
       const verifFirstDigit = phoneInputValue.charAt(0);
       if(phoneInputValue === ''){
            messageInfo(enterPhoneNumberView,40,"Veuillez entrer votre numéro de téléphone");
        }else if(!regexNumber.test(phoneInputValue) || verifFirstDigit !== "6" || phoneInputValue.length !== 9){
            messageInfo(enterPhoneNumberView,40,"Veuillez entrer un numéro de téléphone valide");
        }else{
           const dataToSend = {phoneNumber: phoneInputValue};
           localStorage.setItem('userInfos', JSON.stringify(dataToSend));
           let callModuleSendCode = require('../modules/sendVerificationCode.js')(phoneInputValue);
               callModuleSendCode.then((response)=>{
                   console.log(response);
                if(response.Message === "Code envoye"){
                  // je crée ce localStorage pour signifier a la vue de verification du numéro de téléphone que je veux etre redirigé 
                  //vers la vue entrer un nouveau mot de passe
                  localStorage.setItem('temporaryDataTypeOfViewToAskRedirection','UpdatePassword');
                  let goToEnterVerificationCode = require("./checkCodeAndRedirect.js");
                        goToEnterVerificationCode.create();
                  }
               }).catch(()=>{
                messageInfo(viewToDisplayInformationMessage,40,"Pas de connexion internet");
               });
        }
     }).appendTo(enterPhoneNumberView);   
   
     const input = enterPhoneNumberView.find('TextInput');
           input.on({
             focus: function(){
              labelAnim(labelPhone,'focus');
             },
             blur: function(){
              labelAnim(labelPhone,'blur');
             }
            });
   return enterPhoneNumberView;
};