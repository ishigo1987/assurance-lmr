exports.create = () =>{
  "use strict";
  const {Page,ScrollView,ImageView,TextInput,Button,TextView} = require('tabris');
  let labelAnim = require('../helpers/animateLabel.js');
  let messageInfo = require('../custom_widgets/snackbar.js');
  const pDialog = require("../plugins/pDialog.js");
  const themeColor = "#1562AD";
  require('../modules/tabrisUi.js')(`dark`, '#104e8a' , themeColor);
  const font14px = "14px roboto, noto";
  let createnavigationView;
  const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView,true);
  const connexionView = new Page({title: `Se connecter`,background:`#fafafa`}).appendTo(executeNavigationView);
  
  const scrollView = new ScrollView({left:0,right:0,top:0,background: "#fafafa",bottom:0}).appendTo(connexionView);
  const imageView = new ImageView({layoutData:{centerX: 0,width: 250,height: 150,top:20},image:"src/img/logo.png",scaleMode: "fit", id:"logo"}).appendTo(scrollView);
  const labelIdentifiant = new TextView({top:["prev()", 25],left:"10%",text:"IDENTIFIANT",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
  const login = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%"},font: font14px,message: "Votre téléphone",keyboard:"phone",borderColor:"#e0e0e0",id:'login'}).appendTo(scrollView);
  const labelPassword = new TextView({top:["prev()", 20],left:"10%",text:"MOT DE PASSE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
  const password = new TextInput({layoutData:{top:["prev()", 0],left:"10%",right:"10%"},font: font14px,message: "Votre mot de passe",type:"password",borderColor:"#e0e0e0",id:'password'}).appendTo(scrollView);
  const button = new Button({layoutData:{ top:["prev()", 15],left:"10%",right:"10%"},font: font14px,textColor:"#fff",text:"Connexion",background: themeColor,elevation:0
  }).on("select", () =>{
      // On teste que les champs ne sont pas vides si c'est le cas on lance la verification du couple login mot de passe
      const loginValue = login.text;
      const passwordValue = password.text;
      const regexNumber = /^((\+\d{1,3}(-| )?\(?\d\)?(-| )?\d{1,5})|(\(?\d{2,6}\)?))(-| )?(\d{3,4})(-| )?(\d{4})(( x| ext)\d{1,5}){0,1}$/;
      const verifFirstDigit = loginValue.charAt(0);
      if(loginValue === "" || passwordValue === ""){
         messageInfo(connexionView,40,"Veuillez remplir tout les champs");  
      }else if(!regexNumber.test(loginValue) || verifFirstDigit !== "6" || loginValue.length !== 9){
        messageInfo(connexionView,40,"Veuillez entrer un numéro de telephone valide");
      }else{
         let objectConnection = {identifiant:loginValue,password:passwordValue,requestName:'Connection'};
             objectConnection = JSON.stringify(objectConnection);
         pDialog("Connexion en cours...",false,true);
         const connectionAjax = require("../modules/ajax.js")(objectConnection,"https://www.afrikhealth.com/apiAssuranceLmr/apiConnection.php");
               connectionAjax.then((response)=>{
                 pDialog("",true,false);
                 if(response.Message === 'Connexion effectuée'){
                  let dataUserToStore = {Id:response.Id,Identifiant:response.Identifiant,Adresse_mail:response.Adresse_mail,Telephone:response.Telephone};
                      dataUserToStore = JSON.stringify(dataUserToStore);
                  localStorage.setItem('storeUserInfos', dataUserToStore);
                  executeNavigationView.visible = false;
                  executeNavigationView.dispose();
                  const homeView = require('./home.js');
                        homeView.create();
                 }else if(response.Message === 'Votre couple login, mot de passe ne correspond pas'){
                  messageInfo(connexionView,40,response.Message);
                 }
               }).catch(()=>{
                pDialog("",true,false);
                messageInfo(connexionView,80,"Impossible de traiter la demande veuillez réssayer");
               });
       }
}).appendTo(scrollView);

const input = connexionView.find('TextInput');
      input.on({
        focus: function(){
         const id = this.id;
         if(id === 'login'){
          labelAnim(labelIdentifiant,'focus');
         }else if(id === 'password'){
          labelAnim(labelPassword,'focus');
         }
        },
        blur: function(){
         const id = this.id;
         if(id === 'login'){
          labelAnim(labelIdentifiant,'blur');
         }else if(id === 'password'){
          labelAnim(labelPassword,'blur');
         }
        }
      });
const inscription = new Button({layoutData:{top:["prev()", 15],left:"10%",right:"10%"},font: font14px,text:"Créer un compte",textColor:"#212121",
   background: "#eeeeee",
   elevation:0
}).on("select", () =>{  
   const inscriptionPage = require("./inscription.js");
   inscriptionPage.create().appendTo(executeNavigationView);
}).appendTo(scrollView);     
const forgetPassword = new TextView({layoutData:{top:["prev()", 15],centerX:0},font: font14px,text:"Mot de passe oublié?",textColor:"#263238",
}).on("tap", () =>{
   const forgottenPassword = require("./forgottenPassword.js");
         forgottenPassword.create().appendTo(executeNavigationView);
}).appendTo(scrollView);

return executeNavigationView;
};