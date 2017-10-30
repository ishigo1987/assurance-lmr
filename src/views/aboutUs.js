exports.create = () =>{
    "use strict";
    const {Page,TextView} = require('tabris');
    const themeColor = "#1562AD";
    const aboutUsView = new Page({title: `A propos de M. Assurances`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
    const textAboutUs = new TextView({top:15,left:15,right:15,textColor:"#616161",font:"16px roboto,noto",markupEnabled:true,text:"Nous développons notre savoir-faire dans le respect des valeurs mutualistes qui nous guide et nous permet de nous adapter à l’environnement dynamique dans lequel nous évoluons.<br /> L’information et la sensibilisation des assurés et non assurés sont notre raison d’être.<br />Vous permettre de vivre avec assurance est notre motivation.<br />Vous avez des suggestions ou toute autre préoccupation ? <br />Ecrivez-nous sur <a href='mailto:infos_lmr@lmr-assur.com'>infos_lmr@lmr-assur.com</a>"}).appendTo(aboutUsView);
    return aboutUsView;
}