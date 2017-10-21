exports.create = () =>{ 
 "use strict";
 const {Page,ScrollView,TextInput,Button,Composite,TextView} = require('tabris');
 let labelAnim = require('../helpers/animateLabel.js');
 let messageInfo = require('../custom_widgets/snackbar.js');
 const themeColor = "#1562AD";
 const font14px ="14px roboto, noto";
 const inscriptionView = new Page({title: `S'inscrire`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
 const scrollView = new ScrollView({left:0,right:0,top:0,bottom:0,background: "#fafafa",}).appendTo(inscriptionView);
 const preInscriptionArea = new Composite({left:0,right:0,height:75,background:themeColor,elevation:3}).appendTo(scrollView);
 const firstText = new TextView({layoutData:{centerX:0,top:5},font: "20px roboto, noto",text:"Pas encore inscrit?",textColor:"#fff",opacity:0,transform:{scaleX:0,scaleY:0}}).appendTo(preInscriptionArea);
 const secondText = new TextView({layoutData:{top:["prev()", 5],centerX:0},font: "14px roboto, noto",text:"Créez votre compte en une minute",textColor:"#fff",opacity:0,transform:{scaleX:0,scaleY:0}}).appendTo(preInscriptionArea);
 const labelIdentifiant = new TextView({top:["prev()", 20],left:"10%",text:"IDENTIFIANT",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
 const identifiant = new TextInput({layoutData:{top:["prev()",0],left:"10%",right:"10%"},font: font14px,message: "Entrez votre identifiant",borderColor:"#e0e0e0",id:'identifiant'}).appendTo(scrollView);  
 const labelEmail = new TextView({top:["prev()", 20],left:"10%",text:"EMAIL",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);  
 const email = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%",},font: font14px,message: "Entrez votre adresse mail",keyboard:"email",borderColor:"#e0e0e0",id:'email'}).appendTo(scrollView);
 const labelTelephone = new TextView({top:["prev()", 20],left:"10%",text:"TELEPHONE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);   
 const phoneNumber = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%",},font: font14px,message: "Entrez votre numero de telephone",keyboard:"phone",borderColor:"#e0e0e0",id:'phone'}).appendTo(scrollView);
 const labelPassword = new TextView({top:["prev()", 20],left:"10%",text:"MOT DE PASSE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);   
 const password = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%",},font: font14px,message: "Entrez votre mot de passe",type:"password",borderColor:"#e0e0e0",id:'password'}).appendTo(scrollView);
 const button = new Button({layoutData:{top:["prev()", 30],left:"10%",right:"10%"},font: font14px,textColor:"#fff",text:"S'inscrire",background:themeColor
  }).on("select", () =>{
      //On teste que les champs ne sont pas vides
      const identifiantValue = identifiant.text;
      const emailValue = email.text;
      const phoneNumberValue = phoneNumber.text;
      const passwordValue = password.text;
      const regexMail =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      const regexNumber = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
      const verifFirstDigit = phoneNumberValue.charAt(0);
      if(identifiantValue === "" || emailValue === "" || phoneNumberValue === "" || passwordValue === ""){
          messageInfo(inscriptionView,40,"Veuillez remplir tout les champs");
       }else if(!regexMail.test(emailValue)){
          messageInfo(inscriptionView,40,"Veuillez entrer une adresse mail valide");
       }else if(!regexNumber.test(phoneNumberValue) || verifFirstDigit !== "6" || phoneNumberValue.length !== 9){
          messageInfo(inscriptionView,40,"Veuillez entrer un numéro de telephone valide");
       }else{
         const dataToSend = {identifiant:identifiantValue,email:emailValue,phoneNumber:phoneNumberValue,password:passwordValue};
           localStorage.setItem("userInfos", JSON.stringify(dataToSend));
           // je crée ce localStorage pour signifier a la vue de verification d'email que je veux etre redirigé 
           //vers la vue entrer un nouveau mot de passe ou la vue connexion
           localStorage.setItem('temporaryDataTypeOfViewToAskRedirection','InscriprionView');
           let responseVerificationCode = require("../modules/sendVerificationCode.js")(emailValue);
               responseVerificationCode.then((response)=>{
                if(response.Message === "Code envoye"){
                    let goToEnterVerificationCode = require("./checkCodeAndRedirect.js");
                        goToEnterVerificationCode.create();
                  }
                }).catch(()=>{
                  messageInfo(inscriptionView,40,"Pas de connexion internet");
                });
        }
   }).appendTo(scrollView);    
   
   firstText.animate({
      opacity:1,
      transform:{scaleX:1,scaleY:1}
    },{
      delay:150,
      duration:400,
      repeat:0,
      reverse:false,
      easing: "ease-in"
    }).then(
   secondText.animate({
      opacity:1,
      transform:{scaleX:1,scaleY:1}
      },{
      delay:750,
      duration:400,
      repeat:0,
      reverse:false,
      easing: "ease-in"
    }));
  
  const input = inscriptionView.find('TextInput');
        input.on({
          focus: function(){
                const id = this.id;
                if(id === 'identifiant'){
                  labelAnim(labelIdentifiant,'focus');
                }else if(id === 'email'){
                  labelAnim(labelEmail,'focus');
                }else if(id === 'phone'){
                  labelAnim(labelTelephone,'focus');
                }else if(id === 'password'){
                  labelAnim(labelPassword,'focus');
                }
              },
              blur: function(){
                const id = this.id;
                if(id === 'identifiant'){
                  labelAnim(labelIdentifiant,'blur');
                }else if(id === 'email'){
                  labelAnim(labelEmail,'blur');
                }else if(id === 'phone'){
                  labelAnim(labelTelephone,'blur');
                }else if(id === 'password'){
                  labelAnim(labelPassword,'blur'); 
                }
              }
        });
 return inscriptionView;
};