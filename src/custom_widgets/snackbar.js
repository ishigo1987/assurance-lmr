module.exports = (widgetToAttach,heightValue,firstTextSnackbar,secondTextSnackbar,themeColorTabris,callback) =>{
   // Single line height = 48dp = 36px but i choose 40px
   //Multi lines height = 80dp = 60px
   "use strict";
   const {Composite,TextView} = require('tabris');
   const snackbar = new Composite({ bottom:0,left:0,right:0,height:heightValue,background:"#323232",transform:{translationY:heightValue}}).appendTo(widgetToAttach);
   const textSnackbar = new TextView({font:"normal 14px roboto, noto",left:15,centerY:0,text:firstTextSnackbar,textColor:"#fff"}).appendTo(snackbar);
   if(secondTextSnackbar !== undefined){
    animSnackbar(false);
    const actionSnackbar = new TextView({right:15,centerY:0,text:secondTextSnackbar.toUpperCase(),textColor:themeColorTabris})
    .on("tap", () =>{
        animSnackbar(true);
        if(callback !== undefined){callback();}
    }).appendTo(snackbar);
   }

 function animSnackbar(disposeWidgetBoolean){
      snackbar.animate({
         transform:{translationY:0}
       }, {
         delay:0,
         duration:150,
         repeat:0,
         reverse:false,
         easing: "ease-out"
       } 
      ).then(()=>{
        if(disposeWidgetBoolean === true){
            snackbar.animate({
                transform:{translationY:heightValue}
              }, {
                delay:2500,
                duration:150,
                repeat:0,
                reverse:false,
                easing: "ease-out"
              } ).then(()=>{snackbar.dispose();});
        }
      });
    }
   animSnackbar(true);
};