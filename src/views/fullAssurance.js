module.exports = (titleRubrique,arrayOfQuestions,ArrayOfAnswer)=>{
    "use strict";
    const {Page,TextView,ScrollView} = require('tabris');
    const themeColor = "#1562AD";
    const fullAssurancesView = new Page({title: `${titleRubrique}`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
    const scrollView = new ScrollView({top:0,left:0,right:0,bottom:0}).appendTo(fullAssurancesView);
    let j = arrayOfQuestions.length;
    for(let i=0; i<j; i++){
       let textQuestions = arrayOfQuestions[i];
       const questions = new TextView({top:['prev()',10],left:10,right:10,font:"16px roboto,noto",textColor:"#212121",text:textQuestions.toUpperCase()}).appendTo(scrollView);
       const responses = new TextView({top:['prev()',10],left:10,right:10,textColor:"#616161",font:"15px roboto, noto",text:ArrayOfAnswer[i],markupEnabled:true}).appendTo(scrollView);
    }
    return fullAssurancesView;
}