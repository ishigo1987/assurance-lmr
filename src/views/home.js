exports.create = () => {
    "use strict";
    const themeColor = "#1562AD";
    const {Page,TextView,Composite,ImageView,CollectionView,ui,ScrollView,SearchAction,device} = require('tabris');
    const whatDevice = device.platform;
    let placementPriority = "normal";
    if(whatDevice === "Android"){placementPriority = "low";}
    ui.contentView.background = '#fff';
    let createnavigationView;
    let drawerNavigationTitle = "";
    const itemsOfActionSheet = [
        {title: "Responsabilité civile chef d'entreprise"},
        {title: "Tous risques informatique"},
        {title: "Maladie"},
        {title: "Multirisque habitations et bureaux"},
        {title: "Incendie et perte d'exploitation"},
        {title: "Individuelle accident"},
        {title: "Tous risques chantier"},
        {title: "Vie et capitalisation"},
        {title: "Bris de machine"},
        {title: "Vol en coffre-fort"},
        {title: "Transport des fonds"},
        {title: "Complémentaire retraite"},
        {title: "Automobile"},
        {title: "Visa Schengen : Europax"},
        {title: "Frais funéraires"}
      ];
    const executeNavigationView = require("../helpers/navigationViewAnimation.js")(createnavigationView, false);
          executeNavigationView.drawerActionVisible = true;
          executeNavigationView.font = "12px roboto,noto";
    const objectUserInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
    let createMenuActionIcon;
    require('../modules/notifications.js')(executeNavigationView);
    const actionSheetHome = require('../helpers/actionSheet.js');
    const alertDialog = require('../helpers/alertDialog.js');
    let handleActionCategorie = require("../helpers/actionIcons.js")(createMenuActionIcon, "Voir toutes les catégories d'assurances", "src/icons/add.png",  placementPriority, executeNavigationView);
        handleActionCategorie.on("select",()=>{
            let as = actionSheetHome("Choisissez un categorie d'assurance",itemsOfActionSheet);
                as.then((returnAs)=>{
                let t = homeView.find('.compositeCard');
                let i = t.length;
                while(i--){
                 if(String(t[i].title) === String(returnAs)){
                    let objectToTransport = {title:t[i].title,fullQuestions:t[i].fullQuestions,fullResponses:t[i].fullResponses};
                    localStorage.setItem('objectToTransport',JSON.stringify(objectToTransport));
                    const pageToSeeFullAssurances = require('./fullAssurance.js');
                          pageToSeeFullAssurances.create().appendTo(executeNavigationView);
                 }
                }
                
               
            });
        });
    let searchAction = new SearchAction({message:"Entrez une categorie d'assurance",image: {src:'src/icons/searchLmr.png',scale:1.5,id:'searchAction'}})
    .on({
     select:()=>{
    //   handleActionCategorie.visible = false;
     },
     accept:({text})=>{
        let t = homeView.find('.compositeCard');
        let i = t.length;
        let stopLoop;
        while(i--){
         let titleTransform = t[i].title;
         let textTransform = text;
         titleTransform = titleTransform.toUpperCase();
         textTransform = textTransform.toUpperCase();
         if(String(titleTransform)=== String(textTransform)){
            let objectToTransport = {title:t[i].title,fullQuestions:t[i].fullQuestions,fullResponses:t[i].fullResponses};
            localStorage.setItem('objectToTransport',JSON.stringify(objectToTransport));
            const pageToSeeFullAssurances = require('./fullAssurance.js');
            pageToSeeFullAssurances.create().appendTo(executeNavigationView);
         }else{
            if(stopLoop === undefined){
                stopLoop = false;
                let aD = alertDialog("Aucun résultat","Si vous ne trouvez pas résultat deux options s'offrent a vous.Entrez juste la catégorie d'assurances(par exemple Automobile) ou bien posez votre question directement a un agent","Poser la question a un agent","Fermer");
                    aD.then((response)=>{
                     if(response === "button ok"){
                       require('./speakToAnAgent.js')(executeNavigationView).appendTo(executeNavigationView); 
                     }
                   });
            }
         }
        }
    //   handleActionCategorie.visible = true;
     }
    }).appendTo(executeNavigationView);
    let drawer = ui.drawer;
    drawer.enabled = true;
    drawer.background = "#fff";
    // const PROPOSALS = ['RESPONSABILITE CIVILE CHEF D’ENTREPRISE', 'ASSURANCE TOUS RISQUES INFORMATIQUE', 'ASSURANCE MALADIE', 'ASSURANCE HABITATION', 'ASSURANCE  INCENDIE  ET  PERTE  D’EXPLOITATION', 'ASSURANCE  INDIVIDUELLE  ACCIDENT','TOUS  RISQUES  CHANTIER',' ASSURANCE  VIE  ET  CAPITALISATION ','ASSURANCE  BRIS  DE  MACHINE','VOL EN COFFRE FORT','TRANSPORT DES FONDS','VOYAGE OU MALADIE INTERNATIONALE','ASSURANCE AUTOMOBILE','ASSURANCE PREVOYANCE RETRAITE','CONTRAT INDEMNITES DE FIN DE CARRIERE (IFC)','VISA ETUDE PLUS','ASSURANCE ASSISTANCE FRAIS FUNERAILLES','BANCASSURANCE'];
    let homeView = new Page({title: `M. ASSURANCES`,background: `#fafafa`
    }).on({
        appear: () => {
         searchAction.visible = true;
         handleActionCategorie.visible = true;
         drawer.enabled = true;
        },
        disappear: () => {
         searchAction.visible = false;
         handleActionCategorie.visible = false;
         drawer.enabled = false;
        }
    }).appendTo(executeNavigationView);
    const scrollView = new ScrollView({ left: 0,right: 0,top: 40,bottom:0}).appendTo(homeView);
    const typeOfAssuranceComposite = new Composite({top:0,left:0,right:0,height:40,background:"#2c71b5"}).appendTo(homeView);
    const textTypeOfAssurance = new TextView({centerX:0,centerY:0,maxLines:1,textColor:"#0e4479",text:"TOUTES LES ASSURANCES",font:"bold 16px roboto, noto"}).appendTo(typeOfAssuranceComposite);
    require('../modules/cardHome.js')(scrollView,executeNavigationView);

    // Creation du composite du drawer
   const compositeDrawer = new Composite({left: 0,top: 0,height:100,right: 0,background: "#104e8a"}).appendTo(drawer);
   const textViewCompositeIdentifiant = new TextView({left: 15,centerY:0,font: "bold 16px roboto, noto",text: objectUserInformations.Identifiant,textColor: "#fff"}).appendTo(compositeDrawer);
   const textViewCompositeEmail = new TextView({left: 15,top: ["prev()", 1],font: "14px roboto, noto",text: objectUserInformations.Adresse_mail,textColor: "#fff"}).appendTo(compositeDrawer);
    // Creation de la collectionView du drawer 
    const itemConfig = [
        {
            title: "Demander un devis automobile",
            image: "src/icons/new-insurance.png"
     },
        {
            title: "Poser une question à un agent",
            image: "src/icons/insurance-agent.png"
     },
        {
            title: "Mes paramètres",
            image: "src/icons/settings.png"
     },
        {
            title: "A propos de nous",
            image: "src/icons/about-us.png"
        },
        {
            title: "Foire aux questions",
            image: "src/icons/faq.png"
        },
        // {
        //     title: "Déconnexion",
        //     image: "src/icons/logout.png"
        // }
    ];
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
            highlightOnTouch:true
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
        drawer.close();
        let itemIndex = itemConfig[index];
        drawerNavigationTitle = itemIndex.title;
        
    }).appendTo(drawer);

    // Fin creation collectionView du drawer
    // Je lance d'abord l'ouverture du drawer pour regler un bug sur ios
    // Qui ne declenche pas l'evenement de fermeture(close) si celui d'ouverture n'a pas été lancé d'abord
    drawer.on('open',()=>{});
    drawer.on("close",()=>{
     if(drawerNavigationTitle === "Demander un devis automobile"){
        require("./createDevis.js").create().appendTo(executeNavigationView);
     }else if(drawerNavigationTitle === "Poser une question à un agent"){
        require('./speakToAnAgent.js')(executeNavigationView).appendTo(executeNavigationView);
     }else if(drawerNavigationTitle === "Mes paramètres"){
        require('./settings.js')(executeNavigationView).appendTo(executeNavigationView);
     }else if(drawerNavigationTitle === "A propos de nous"){
        require('./aboutUs.js').create().appendTo(executeNavigationView);
     }else if(drawerNavigationTitle === "Foire aux questions"){
        require('./faq.js').create().appendTo(executeNavigationView);
     }
    //  else if(drawerNavigationTitle === "Déconnexion") {
    //     executeNavigationView.visible = false;
    //     executeNavigationView.dispose();
    //     localStorage.clear();
    //     let connexionPage = require("./connexion.js");
    //         connexionPage.create();
    //  }
    drawerNavigationTitle = "";
    });
   

    return executeNavigationView;
};
