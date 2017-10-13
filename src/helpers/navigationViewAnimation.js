module.exports = (navigationViewAnimation,boolAnimation) =>{
  navigationViewAnimation = new tabris.NavigationView({
   left: 0, top: 0, right: 0, bottom: 0, toolbarColor:"#1562AD", titleTextColor:"#fff"
    }).appendTo(tabris.ui.contentView);
  if(boolAnimation === true){
      navigationViewAnimation.set({
        opacity:0,
        transform:{scale:0},
       });
      navigationViewAnimation.animate({
         transform: {scale:1},
         opacity:1
       }, {
         delay: 0,
         duration:100,
         repeat:0,
         reverse:false,
         easing: "linear"
       } 
    ).then(function(){});
   }
 
return navigationViewAnimation;
};