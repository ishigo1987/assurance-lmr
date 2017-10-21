// exports.create = () =>{
   const themeColor = "#1562AD";
   const {Page,TextView,TextInput,Button} =  require('tabris');
   const labelAnim = require('../helpers/animateLabel.js');
   const messageInfo = require('../custom_widgets/snackbar.js');
   const layoutDataHelper = {top:["prev()", 30],left:"10%",right:"10%"};
   let createnavigationViewResetPassword;
   const font14px = "14px roboto, noto";
   const executeNavigationViewPassword = require("../helpers/navigationViewAnimation.js")(createnavigationViewResetPassword, false);
   const pageNewPasswordView = new Page({title: `Mise a jour du mot de passe`,background:`#fafafa`}).appendTo(executeNavigationViewPassword);
   const introText = new TextView({layoutData:{top:15,right:"10%",left:"10%"},font: font14px,text:"Veuillez entrer un nouveau mot de passe que vous utiliserez dorénavant pour acceder a votre compte",textColor:"#212121",}).appendTo(pageNewPasswordView);
   const labelPassword = new TextView({top:["prev()", 25],left:"10%",text:"MOT DE PASSE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(pageNewPasswordView);
   const passwordInput = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%"},font: font14px,message: "Entrez votre nouveau mot de passe",borderColor:'#e0e0e0'}).appendTo(pageNewPasswordView);  

  let button = new Button({layoutData:layoutDataHelper,font: font14px,textColor:"#fff",text:"Continuer",background:themeColor,elevation:0})
  .on("select", () =>{
    const passwordInputValue = passwordInput.text;
    if(passwordInputValue === ""){
      messageInfo(pageNewPasswordView,40,"Veuillez entrer votre nouveau mot de passe");
    }else{
      let emailUser = JSON.parse(localStorage.getItem("userInfos"));
          emailUser = emailUser.email;
      let dataToSend = {email:emailUser,password:passwordInputValue, requestName:"UpdatePassword"};
          dataToSend = JSON.stringify(dataToSend);
      pDialog("Mise a jour de votre mot de passe.",false,true);
      const updatePassword = require("../modules/ajax.js")(dataToSend, 'https://www.afrikhealth.com/apiAssuranceLmr/apiConnection.php');
            updatePassword.then((response)=>{
               pDialog("",true,false);
             if(response.Message === 'Mot de passe mis a jour'){
                window.plugins.toast.showLongBottom("Votre mot de passe a été mis a jour");
             }else if(response.Message === "Cet utilisateur n'est pas dans la Bd"){
                window.plugins.toast.showLongBottom("Cet adresse mail n'existe pas dans notre systeme, veuillez vous inscrire");
             }
             executeNavigationViewPassword.dispose();
             let connexionView = require('./connexion.js');
                 connexionView.create();
            }).catch(()=>{
               pDialog("",true,false);
              messageInfo(pageNewPasswordView,80,"Impossible de traiter la demande veuillez réssayer");
            });
    }
 }).appendTo(pageNewPasswordView);

 const input = pageNewPasswordView.find('TextInput');
       input.on({
        focus: function(){
         labelAnim(labelPassword,'focus');
       },
        blur: function(){
        labelAnim(labelPassword,'blur');
       }
      });
 return executeNavigationViewPassword;
};