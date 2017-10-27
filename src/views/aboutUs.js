exports.create = () =>{
    "use strict";
    const {Page,TextView} = require('tabris');
    const themeColor = "#1562AD";
    const aboutUsView = new Page({title: `A propos de M. Assurances`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
    const textAboutUs = new TextView({top:15,left:15,right:15,textColor:"#616161",font:"16px roboto,noto",markupEnabled:true,text:"Et si en un clic vous pouviez savoir combien vous coûtera votre assurance ? <br  />Parler à un conseiller pour avoir le maximum d'informations avant de souscrire ou bénéficiez de conseils pour mieux vivre ?<br />LMR a créé pour vous l'application parfaite qui vous permet d'améliorer votre quotidien sans bouger de chez vous.<br /> Vous avez des questions techniques ?<br /> Écrivez nous sur <a>lmr@kouaba.com</a>"}).appendTo(aboutUsView);
    return aboutUsView;
}