module.exports = (widgetToAppend,navigationViewToImport)=>{
  "use strict";
  const {Composite,TextView,ImageView,ActivityIndicator} = require('tabris');
  const messageInfo = require('../custom_widgets/snackbar.js');
  const pageToSeeFullAssurances = require('../views/fullAssurance.js');
  const font14px = '14px roboto,noto';
  const themeColor = "#1562AD";
  const arrayOfColor = [themeColor,"#9c27b0","#e91e63","#d32f2f","#3949ab","#311b92","#00796b","#ef6c00","#424242","#455a64","#ff8f00","#388e3c","#0097a7","#5e35b1","#ef5350","#1565c0","#9e9d24"];
  let activityIndicator = new ActivityIndicator({centerX:0,centerY:0,tintColor:themeColor,width:32,height:32}).appendTo(widgetToAppend);
  const ajax = require('./ajax.js')(null,"https://www.afrikhealth.com/apiAssuranceLmr/assurances.json");
        ajax.then((response)=>{
         activityIndicator.dispose();
         let i = response.length;
         while(i--){
          let randomColor = Math.floor(Math.random() * 16) + 0;
          const title = response[i].Rubrique;
          const compositeCard = new Composite({top:['prev()',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:"compositeCard"}).appendTo(widgetToAppend);
                compositeCard.title = title;
                compositeCard.fullQuestions = response[i].Questions;
                compositeCard.fullResponses = response[i].Reponses;
          const border = new Composite({left:0,top:0,bottom:0,width:3,background:arrayOfColor[randomColor],id:'border'}).appendTo(compositeCard);
          const titreRubrique =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:title.toUpperCase(),textColor:'#212121'}).appendTo(compositeCard);
          const apercuTextRubrique = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:response[i].Reponses[0],markupEnabled:true}).appendTo(compositeCard);
          const share = new TextView({bottom:12,left:15,text:'PARTAGER',font:font14px,textColor:'#757575'}).appendTo(compositeCard);
                share.rubrique = response[i].Rubrique,
                share.firstQuestion = response[i].Questions[0];
                share.firstAnswer = response[i].Reponses[0];
                share.on('tap',function(){
                  let messageToShare = this.rubrique + "\n" + this.firstQuestion + "\n" + this.firstAnswer + "\n"+ "Retrouvez la suite sur notre site internet";
                  window.plugins.socialsharing.share(messageToShare);
                });
          const readMore = new TextView({bottom:12,right:15,text:"LIRE PLUS",font:font14px,textColor:themeColor}).appendTo(compositeCard);
                readMore.fullQuestions = response[i].Questions;
                readMore.fullResponses = response[i].Reponses;
                readMore.title = response[i].Rubrique;
                readMore.on("tap",function(){
                  pageToSeeFullAssurances(this.title,this.fullQuestions,this.fullResponses).appendTo(navigationViewToImport);
                });
        }
        }).catch(()=>{
          activityIndicator.dispose();
          messageInfo(widgetToAppend,40,"Impossible de traiter la demande veuillez réssayer");
        });
}