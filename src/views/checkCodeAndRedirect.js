exports.create = () =>{
   "use strict";
   const themeColor = "#1562AD";
   let createnavigationView;
   let executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
   const {Page,TextInput,Button,TextView} = require('tabris');
   const labelAnim = require('../helpers/animateLabel.js');
   const messageInfo = require('../custom_widgets/snackbar.js');
   const pDialog = require("../plugins/pDialog.js");
   const font14px = "14px roboto, noto";
   let userInfos = JSON.parse(localStorage.getItem("userInfos"));
       userInfos.requestName = 'Inscription';
   const phoneUser = userInfos.phoneNumber;
   userInfos = JSON.stringify(userInfos);
   const layoutDataHelper = {top:["prev()", 30],left:"10%",right:"10%"};
   const pageVerifNumberView = new Page({title: `Verification de votre numéro de téléphone`, background:`#fafafa`}).appendTo(executeNavigationView);
   
    const introText = new TextView({layoutData:{top:15,right:"10%",left:"10%"},font: font14px,text:`Nous vous avons envoyé un code de verification a numéro suivant ${phoneUser}`,textColor:"#212121",}).appendTo(pageVerifNumberView);
    const labelVerifCode = new TextView({layoutData:layoutDataHelper,text:"VERIFICATION DU CODE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(pageVerifNumberView);
    const codeInput = new TextInput({layoutData:{top:["prev()",0],left:"10%",right:"10%"},font: font14px,message: "Entrez le code",keyboard:"number",borderColor:"#e0e0e0"}).appendTo(pageVerifNumberView);  

    const button = new Button({layoutData:layoutDataHelper,font: font14px,textColor:"#fff",text:"Continuer",background:themeColor,elevation:0
    }).on("select", () =>{
       const codeInputValue = codeInput.text;
       const lsVerificationCode = localStorage.getItem("verificationCode");
       if(codeInputValue === ""){
          messageInfo( pageVerifNumberView,40,"Veuillez entrer le code de vérification");
        }else if(codeInputValue.length < 5){
           messageInfo( pageVerifNumberView,40,"Le code doit avoir 5 chiffres");
        }else if(String(codeInputValue) !== lsVerificationCode){
           messageInfo( pageVerifNumberView,40,"Le code que vous avez entré ne correspond pas");
        }else if(String(codeInputValue) === lsVerificationCode){
           localStorage.removeItem("verificationCode");
           const temporaryTypeOfView = localStorage.getItem("temporaryDataTypeOfViewToAskRedirection");
           if(temporaryTypeOfView === 'UpdatePassword'){
              // Alors on redirige l'utilisateur vers la vue ou il doit entrer son nouveau password
              executeNavigationView.dispose();
              let goToEnterNewPassword = require("./enterNewPassword.js");
                  goToEnterNewPassword.create();
              localStorage.removeItem('temporaryDataTypeOfViewToAskRedirection');
            }else{
              pDialog("Finalisation de l'inscription.",false,true);
              let finishInscriptionUser = require("../modules/ajax.js")(userInfos, 'https://www.afrikhealth.com/apiAssuranceLmr/apiConnection.php');
                  finishInscriptionUser.then((response)=>{
                    pDialog("",true,false);
                    if(response.Message === "Inscription ok"){
                      window.plugins.toast.showLongBottom("Inscription effectuée");
                    }else if(response.Message === "Ce numéro de téléphone existe deja veuillez vous connecter"){
                      window.plugins.toast.showLongBottom("Ce numéro de téléphone existe deja veuillez vous connecter");
                    }
                    executeNavigationView.dispose();
                    let connexionView = require('./connexion.js');
                    connexionView.create();
                    localStorage.removeItem('temporaryDataTypeOfViewToAskRedirection');
                  }).catch(()=>{
                    messageInfo(pageVerifNumberView,80,"Impossible de traiter la demande veuillez réssayer");
                  });
            }
        }
     
     }).appendTo(pageVerifNumberView); 
    
     const input = pageVerifNumberView.find('TextInput');
     input.on({
       focus: function(){
         labelAnim(labelVerifCode,'focus');
       },
       blur: function(){
         labelAnim(labelVerifCode,'blur');
       }
     });
   
 let resendCode = new TextView({layoutData:{top:["prev()", 20],centerX:0},font: font14px,textColor:themeColor,text:"renvoyer le code"
    }).on("tap", () =>{
      let resendCode = require("../modules/sendVerificationCode.js")(phoneUser);
    }).appendTo(pageVerifNumberView);
   
 return executeNavigationView;
};