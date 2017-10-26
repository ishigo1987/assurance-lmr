module.exports = (widgetToAppend)=>{
  "use strict";
  const {Composite,TextView,ImageView,ActivityIndicator} = require('tabris');
  const messageInfo = require('../custom_widgets/snackbar.js');
  const font14px = '14px roboto,noto';
  const themeColor = "#1562AD";
  let activityIndicator = new ActivityIndicator({centerX:0,centerY:0,tintColor:themeColor,width:32,height:32}).appendTo(widgetToAppend);
  const ajax = require('./ajax.js')(null,"https://www.afrikhealth.com/apiAssuranceLmr/assurances.json");
        ajax.then((response)=>{
         activityIndicator.dispose();
         let i = response.length;
         while(i--){
          const title = response[i].Rubriques;
          const compositeCard = new Composite({top:['prev()',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff'}).appendTo(widgetToAppend);
          const border = new Composite({left:0,top:0,bottom:0,width:3,background:'#1562AD',id:'border'}).appendTo(compositeCard);
          const titreRubrique =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:title.toUpperCase(),textColor:'#212121'}).appendTo(compositeCard);
          const apercuTextRubrique = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:response[i].Reponse1,id:"apercuTextRubrique"}).appendTo(compositeCard);
          const share = new TextView({top:['#apercuTextRubrique',12],left:15,text:'PARTAGER',font:font14px,textColor:'#757575'})
          .on('tap',()=>{
            let messageToShare = titreRubrique.text + "\n" + apercuTextRubrique.text;
            window.plugins.socialsharing.share(messageToShare);
          }).appendTo(compositeCard);
          const readMore = new TextView({top:['#apercuTextRubrique',12],right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard);
         }
        }).catch(()=>{
          activityIndicator.dispose();
          messageInfo(widgetToAppend,80,"Impossible de traiter la demande veuillez réssayer");
        });
}