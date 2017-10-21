exports.create = () => {
    "use strict";
    const themeColor = "#1562AD";
    const {Page,TextView,Composite,ImageView,CollectionView,ui,ScrollView,SearchAction} = require('tabris');
    ui.contentView.background = '#fff';
    let createnavigationView;
    let executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
        executeNavigationView.drawerActionVisible = true;
    let objectUserInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
    let createMenuActionIcon;
    let handleActionCategorie = require("../helpers/actionIcons.js")(createMenuActionIcon, "Voir tous les types d'assurances", "srcImg", "low", executeNavigationView);
        handleActionCategorie.on("select",()=>{
          console.log("you");
        });
    let drawer = ui.drawer;
    drawer.enabled = true;
    drawer.background = "#fff";
    // const PROPOSALS = ['RESPONSABILITE CIVILE CHEF D’ENTREPRISE', 'ASSURANCE TOUS RISQUES INFORMATIQUE', 'ASSURANCE MALADIE', 'ASSURANCE HABITATION', 'ASSURANCE  INCENDIE  ET  PERTE  D’EXPLOITATION', 'ASSURANCE  INDIVIDUELLE  ACCIDENT','TOUS  RISQUES  CHANTIER',' ASSURANCE  VIE  ET  CAPITALISATION ','ASSURANCE  BRIS  DE  MACHINE','VOL EN COFFRE FORT','TRANSPORT DES FONDS','VOYAGE OU MALADIE INTERNATIONALE','ASSURANCE AUTOMOBILE','ASSURANCE PREVOYANCE RETRAITE','CONTRAT INDEMNITES DE FIN DE CARRIERE (IFC)','VISA ETUDE PLUS','ASSURANCE ASSISTANCE FRAIS FUNERAILLES','BANCASSURANCE'];
    let homeView = new Page({title: `LMR ASSURANCES`,background: `#fafafa`,
    }).on({
        appear: () => {
         handleActionCategorie.visible = true;
         drawer.enabled = true;
        },
        disappear: () => {
         handleActionCategorie.visible = false;
         drawer.enabled = false;
        }
    }).appendTo(executeNavigationView);
    let searchAction = new SearchAction({message: 'Rechercher une assurance',image: {src:'src/icons/search.png',scale:1.5}})
    .on({
       select:()=>{
        handleActionCategorie.visible = false;
       },
       input: ()=>{

       },
       accept:()=>{
        handleActionCategorie.visible = true;
       }
    }).appendTo(executeNavigationView);
    const scrollView = new ScrollView({ left: 0,right: 0,top: 0,bottom: 0}).appendTo(homeView);
    require('../modules/cardHome.js')(scrollView);

    // Creation du composite du drawer
   const compositeDrawer = new Composite({left: 0,top: 0,height:100,right: 0,background: "#104e8a"}).appendTo(drawer);
   const textViewCompositeIdentifiant = new TextView({left: 15,centerY:0,font: "bold 16px roboto, noto",text: objectUserInformations.Identifiant,textColor: "#fff"}).appendTo(compositeDrawer);
   const textViewCompositeEmail = new TextView({left: 15,top: ["prev()", 1],font: "14px roboto, noto",text: objectUserInformations.Adresse_mail,textColor: "#fff"}).appendTo(compositeDrawer);
    // Creation de la collectionView du drawer 
    const itemConfig = [
        {
            title: "Créer mon assurance",
            image: "src/icons/new-insurance.png"
     },
        {
            title: "Poser une question a un agent",
            image: "src/icons/insurance-agent.png"
     },
        {
            title: "Mes paramétres",
            image: "src/icons/settings.png"
     },
        {
            title: "A propos de nous",
            image: "src/icons/about-us.png"
        },
        {
            title: "Déconnexion",
            image: "src/icons/logout.png"
     }];

    const drawerCollectionView = new CollectionView({
        right: 0,
        bottom: 0,
        top:100,
        left: 0,
        itemCount: itemConfig.length,
        cellHeight: 64,
        createCell: () => {
          const cell = new Composite({
            right: 0,
            bottom: 0,
            top: 100,
            background: "#fff",
         });
            // Bordures
          new Composite({
             left: 0,
             bottom: 0,
             right: 0,
             height:0.6,
             background: "#eeeeee"
         }).appendTo(cell);
         const imageViewCell = new ImageView({left: 15,centerY: 0,id: "imageViewCell",width:26,height:26}).appendTo(cell);
         const textViewCell = new TextView({left: 60,centerY: 0,font: "15px roboto, noto",textColor: "#616161",id: "textViewCell"}).appendTo(cell);
         return cell;
        },
        updateCell: (view, index) => {
            let page = itemConfig[index];
            view.find("#imageViewCell").set("image", page.image);
            view.find("#textViewCell").set("text", page.title);
        }
    }).on("select", ({
        index
    }) => {
        let itemIndex = itemConfig[index];
        drawer.close();
        if (itemIndex.title === "Déconnexion") {
            executeNavigationView.dispose();
            localStorage.removeItem("storeUserInfos");
            let connexionPage = require("./connexion.js");
                connexionPage.create();
        } else if (itemIndex.title === "Offres d'emploi") {
            // let jobsView = require("./jobs.js")(executeNavigationView);
            // jobsView.appendTo(executeNavigationView);
        } else if (itemIndex.title === "Planning de cours") {
            // require("../modules/downloadPlanning.js")();
        } else if (itemIndex.title === "Examens et concours") {
            // let examAndConcoursView = require("./examsAndConcours.js")(executeNavigationView);
            // examAndConcoursView.appendTo(executeNavigationView);
        } else if (itemIndex.title === "A propos de nous") {
            // let aboutUsView = require("./aboutUsView.js")();
            // aboutUsView.appendTo(executeNavigationView);
        }
    }).appendTo(drawer);

    // Fin creation collectionView du drawer

   

    return executeNavigationView;
};
