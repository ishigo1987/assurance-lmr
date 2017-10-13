exports.create = ()=>{
  "use strict";
  const {Page,TabFolder,Tab,ScrollView,ImageView,TextView,Composite,Button} = require('tabris');
  const themeColor = "#1562AD";
  require('../modules/tabrisUi.js')(`dark`, themeColor , themeColor);
  const font16px = "16px roboto, noto";
  let createnavigationView;
  const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
        executeNavigationView.toolbarVisible = false;
  const lmrPresentationView = new Page({background:themeColor}).appendTo(executeNavigationView);
  const scrollView = new ScrollView({left: 0,right: 0,top: 0,bottom:0}).appendTo(lmrPresentationView);
  let tabFolder = new TabFolder({left: 0, top: 0, right: 0, bottom:50,paging: true,elevation:2,tabBarLocation:'hidden',id:'tabFolder'}).appendTo(scrollView);
  createAndPopulateTab('src/img/logomsrassurances.png',"Les origines des mutuelles reunies","Il y a 21 ans naissait <strong>Les mutuelles reunies</strong>. L’idée maitresse qui habitait le promoteur, M. Jean-Bosco TCHACHUANG, cadre supérieur de la défunte AMACAM, entouré de certains de ses anciens collaborateurs, était de promouvoir l’entraide et l’esprit de solidarité : fondement de la prévention des risques, crédo de l’activité d’assurance.");
  createAndPopulateTab('src/img/lmrvaleurs.png',"Les valeurs des mutuelles reunies","Nous développons notre savoir-faire dans le respect des valeurs mutualistes qui nous ont toujours guidé et également permis de nous adapter à l’environnement dynamique dans lequel nous évoluons.");
  createAndPopulateTab('src/img/notreequipe.png',"Notre equipe a votre disposition","Chez les mutuelles reunies vous disposez d'une equipe d'experts qui saura vous guider et vous proposer le service le plus adapté pour l'assurance que vous voulez prendre");
  // function de creation et de remplissage des elements des tab du tabfolder
  function createAndPopulateTab(imageInsideEachTab,titleInsideEachTab,textInsideEachTab){
    let tab = new Tab({}).appendTo(tabFolder);
    const scrollViewInsideTabFolder = new ScrollView({left: 0,right: 0,top: 0,bottom:50}).appendTo(tab);
    const imgTab = new ImageView({centerX:0,scaleMode:'fit',width:160,height:160,top:"7%",image:imageInsideEachTab}).appendTo(scrollViewInsideTabFolder);
    const titleTab = new TextView({left:25,right:25,top:["prev()", 30],text:titleInsideEachTab,font:"24px roboto,noto",textColor:"#fff"}).appendTo(scrollViewInsideTabFolder);
    const textTab = new TextView({left:25,right:25,top:["prev()", 15],text:textInsideEachTab,font:font16px,textColor:"#fff",markupEnabled:true}).appendTo(scrollViewInsideTabFolder);
  }
  // gestion du slider
  const separator = new Composite({left:0,right:0,bottom:50,background:'#2c71b5',height:0.5}).appendTo(scrollView);
  const sliderControl = new Composite({top:['prev()',0],left:0,right:0,bottom:0,background:themeColor}).appendTo(scrollView);
  const goToHomeView = new TextView({left:25,centerY:0,text:"IGNORER",textColor:'#fff',font:"14px roboto, noto",highlightOnTouch:true})
  .on("tap", ()=>{
      // connexion.js
   executeNavigationView.dispose();
   let connexionView = require('./connexion.js');
       connexionView.create();
  }).appendTo(sliderControl);
  const nextSlide = new Button({right:25,centerY:0,text:"SUIVANT",textColor:'#757575',font:"14px roboto, noto",width:100,height:45,background:'#fff',elevation:0})
  .on("tap", ()=>{

  }).appendTo(sliderControl);
  return executeNavigationView;

};