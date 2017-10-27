module.exports = (navigationViewToInsert)=>{
  "use strict";
  const {Page,Composite,TextView,ImageView} = require('tabris');
  const alertDialog = require('../helpers/alertDialog.js');
  const ajax = require('../modules/ajax.js');
  const messageInfo = require('../custom_widgets/snackbar.js');
  const pDialog = require("../plugins/pDialog.js");
  const themeColor = "#1562AD";
  const font14px ="14px roboto, noto";
  const userInfos = JSON.parse(localStorage.getItem("storeUserInfos"));
  const myAccountView = new Page({title: `Mon compte`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
  const compositeRemoveMyAccount = new Composite({top:0,left:0,right:0,background:"#fff",elevation:1,height:64})
  .on('tap',()=>{
    let aD = alertDialog("Suppresion de compte","La suppréssion de votre compte entrainera l'effacement de vos données personnelles dans notre base de donnée vous ne pourrez plus recevoir de reponses a vos questions(Vous recevrez juste la derniére réponse si vous avez selectionné recevoir ma réponse par SMS et si vous aviez au préalable posé une question),vous ne pourrez plus voir nos rubriques d'assurances et consulter notre moteur de recherche.","Oui je supprime mon compte","Annuler");
        aD.then((response)=>{
          if(response === "button ok"){
            let dataToSend = {idUser:userInfos.Id,requestName:"Suppression de compte"};
                dataToSend = JSON.stringify(dataToSend);
            pDialog("Suppression de votre compte cours...",false,true);
            let resultAjax = ajax(dataToSend,"https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php");
                resultAjax.then((response)=>{
                  pDialog("",true,false);
                 if(response.Message === "Compte supprime"){
                      navigationViewToInsert.visible = false;
                      navigationViewToInsert.dispose();
                      localStorage.clear();
                      require("./connexion.js").create();
                 }
                }).catch(()=>{
                //   pDialog("",true,false);
                  messageInfo(myAccountView,80,"Impossible de traiter la demande veuillez réssayer");
                });
          }
        });
  }).appendTo(myAccountView);
  const imagecompositeRemoveMyAccount = new ImageView({left:10,centerY:0,width:24,height:24,image:{src:"src/icons/destroy_account.png"}}).appendTo(compositeRemoveMyAccount);
  const textcompositeRemoveMyAccount = new TextView({left:['prev()',10],right:30,font:font14px,centerY:0,textColor:"#757575",text:"Supprimer mon compte"}).appendTo(compositeRemoveMyAccount);
  return myAccountView;
};