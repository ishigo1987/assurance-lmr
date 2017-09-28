exports.create = () =>{
  "use strict";
  const themeColor = "#1562AD";
  const font16px = "16px roboto, noto";
  let createnavigationView;
  let executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
  let connexionView = new tabris.Page({
     title: `Se connecter`,
     background:`#fafafa`
   }).appendTo(executeNavigationView);
  
  let scrollView = new tabris.ScrollView({left:0,right:0,top:0,background: "#fafafa",bottom:30}).appendTo(connexionView);
  let imageView = new tabris.ImageView({layoutData:{centerX: 0,width: 250,height: 150,top:20},image:{src: "src/img/logo.png"},scaleMode: "fit"}).appendTo(scrollView);
  let login = new tabris.TextInput({layoutData:{top:["prev()", 15],left:"10%",right:"10%"},font: font16px,message: "Entrez votre identifiant ou adresse mail",borderColor:themeColor}).appendTo(scrollView);
  let password = new tabris.TextInput({layoutData:{top:["prev()", 15],left:"10%",right:"10%"},font: font16px,message: "Entrez votre mot de passe",type:"password",borderColor:themeColor}).appendTo(scrollView);
  let button = new tabris.Button({layoutData:{ top:["prev()", 15],left:"10%",right:"10%"},font: font16px,textColor:"#fff",text:"Connexion",background: themeColor,elevation:0
  }).on("select", () =>{
      // On teste que les champs ne sont pas vides si c'est le cas on lance la verification du couple login mot de passe
      const loginValue = login.text;
      const passwordValue = password.text;
      const regexMail =  /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
      let isEmailOrLogin;
      if(loginValue === "" || passwordValue === ""){
         window.plugins.toast.showShortBottom("Veuillez remplir tout les champs");  
       }else{
         if(!regexMail.test(loginValue)){
            isEmailOrLogin = "login";
          }else{
              isEmailOrLogin = "email";
          }
        let objectConnection = { identifiant:loginValue,password:passwordValue,emailOrLogin:isEmailOrLogin};
        let connectionAjax = require("../modules/ajax.js")(objectConnection,"verification login password","connexionView",executeNavigationView);
       }
}).appendTo(scrollView);
let inscription = new tabris.Button({layoutData:{top:["prev()", 15],left:"10%",right:"10%"},font: font16px,text:"Créer un compte",textColor:"#212121",
   background: "#eeeeee",
   elevation:0
}).on("select", () =>{  
//    let inscriptionPage = require("./inscription.js");
//    inscriptionPage.create().appendTo(executeNavigationView);
}).appendTo(scrollView);     
let forgetPassword = new tabris.TextView({layoutData:{top:["prev()", 15],centerX:0},font: font16px,text:"Mot de passe oublié?",textColor:"#263238",
}).on("tap", () =>{
//    let enterEmailAdress = require("./enterEmailAdress.js");
//    enterEmailAdress.create().appendTo(executeNavigationView);
}).appendTo(scrollView);

return executeNavigationView;
};