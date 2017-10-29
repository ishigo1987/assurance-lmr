exports.create =()=>{
 const {Page,ScrollView,TextInput,Button,Composite,TextView,Picker,Slider,Switch,RadioButton} = require('tabris');
 const calculDevis = require('../modules/calculDevis.js');
 let labelAnim = require('../helpers/animateLabel.js');
 let messageInfo = require('../custom_widgets/snackbar.js');
 const alertDialog = require('../helpers/alertDialog.js');
 const pDialog = require("../plugins/pDialog.js");
 const themeColor = "#1562AD";
 const categoryList = ['Catégorie 1','Catégorie 2','Catégorie 3','Catégorie 4','Catégorie 5'];
 const zoneList = ['Zone A','Zone B','Zone C'];
 const energieList = ['Essence', 'Diesel'];
 const font14px ="14px roboto, noto";
 const createDevisView = new Page({title: `Créer mon devis`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
 const scrollView = new ScrollView({left:0,right:0,top:0,bottom:0,background: "#fafafa",}).appendTo(createDevisView);
 const preCreateDevisArea = new Composite({left:0,right:0,height:75,background:themeColor,elevation:3}).appendTo(scrollView);
 const firstText = new TextView({layoutData:{centerX:0,centerY:0},font: "15px roboto, noto",text:"Effectuez votre devis maintenant ",textColor:"#fff",opacity:0,transform:{scaleX:0,scaleY:0}}).appendTo(preCreateDevisArea);
       firstText.animate({
         opacity:1,
         transform:{scaleX:1,scaleY:1}
        },{
         delay:150,
         duration:400,
         repeat:0,
         reverse:false,
         easing: "ease-in"
       }).then();
 const labelCategorie = new TextView({top:["prev()", 20],left:"10%",text:"CATEGORIE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
 const pickerCategorie = new Picker({top:["prev()", 0],left:"10%",right:"10%",font:font14px,borderColor:"#e0e0e0",itemCount:categoryList.length,itemText:(index) => categoryList[index],selectionIndex:0,class:'animLabel',id:'pickerCategorie'})
 .on({
  select: ({index})=>{
     const categoryListIndex = categoryList[index];
     if(categoryListIndex === "Catégorie 1"){
       labelRemorque.visible = true;
       labelRemorque.text = "AVEC REMORQUE";
       labelRemorque.top = ["#sliderPuissance",20];
       switchRemorque.top = ["#sliderPuissance",15];
       labelDuree.top = ["#labelRemorque", 20];
       switchRemorque.visible = true;
       sansRemorque.visible = false;
       avecRemorque.visible = false;
       inflammableRemorque.visible = false;
       labelPlaceNumber.visible = false;
       placeNumber.visible = false;
       labelScooter.visible = false;
       switchScooter.visible = false;
       labelChassis.visible = false;
       labelEnergie.visible = true;
       labelEnergie.top = ["#pickerZone",20];
       pickerEnergie.visible = true;
       pickerEnergie.top = ["prev()",0];
       labelPuissance.visible = true;
       sliderPuissance.visible = true;
       textSliderPuissance.visible = true;
       chassis.visible = false;
       duree.message = "Durée en jours";
     }else if(categoryListIndex === "Catégorie 2" || categoryListIndex === "Catégorie 3"){
      duree.message = "Durée en jours";
      labelRemorque.text = "REMORQUE";
      labelRemorque.visible = true;
      switchRemorque.visible = false;
      labelPlaceNumber.visible = false;
      placeNumber.visible = false;
      labelDuree.top = ["prev()", 20];
      sansRemorque.visible = true;
      avecRemorque.visible = true;
      inflammableRemorque.visible = true;
      labelScooter.visible = false;
      switchScooter.visible = false;
      labelChassis.visible = false;
      chassis.visible = false;
      labelEnergie.visible = true;
      labelEnergie.top = ["#pickerZone",20];
      pickerEnergie.visible = true;
      pickerEnergie.top = ["prev()",0];
      labelPuissance.visible = true;
      sliderPuissance.visible = true;
      textSliderPuissance.visible = true;
      labelRemorque.top = ["#sliderPuissance",20];
    }else if(categoryListIndex === "Catégorie 4"){
      sansRemorque.visible = false;
      avecRemorque.visible = false;
      inflammableRemorque.visible = false;
      labelPlaceNumber.visible = true;
      placeNumber.visible = true;
      labelRemorque.visible = false;
      switchRemorque.visible = false;
      labelDuree.top = ["#placeNumber",20];
      duree.message = "Durée en mois";
      labelScooter.visible = false;
      switchScooter.visible = false;
      labelChassis.visible = false;
      chassis.visible = false;
      labelEnergie.visible = true;
      labelEnergie.top = ["#pickerZone",20];
      pickerEnergie.visible = true;
      pickerEnergie.top = ["prev()",0];
      labelPuissance.visible = true;
      sliderPuissance.visible = true;
      textSliderPuissance.visible = true;
    }else if(categoryListIndex === "Catégorie 5"){
      duree.message = "Durée en jours";
      labelEnergie.top = ["prev()", 20];
      labelEnergie.visible = false;
      pickerEnergie.visible = false;
      labelPuissance.visible = false;
      sliderPuissance.visible = false;
      textSliderPuissance.visible = false;
      labelPlaceNumber.visible = false;
      placeNumber.visible = false;
      sansRemorque.visible = false;
      avecRemorque.visible = false;
      inflammableRemorque.visible = false;
      labelScooter.visible = true;
      switchScooter.visible = true;
      labelChassis.visible = true;
      chassis.visible = true;
      labelRemorque.visible = true;
      switchRemorque.visible = true;
      labelRemorque.top = ["#chassis",20];
      switchRemorque.top = ["#chassis",15];
      labelDuree.top = ["#labelRemorque",20];
    }
  },
  focus: ()=>{

  },
  blur: ()=>{

  }
}).appendTo(scrollView);
 const labelZone = new TextView({top:["prev()", 20],left:"10%",text:"ZONE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
 const pickerZone = new Picker({top:["prev()", 0],left:"10%",right:"10%",font:font14px,borderColor:"#e0e0e0",itemCount: zoneList.length,itemText:(index) =>  zoneList[index],selectionIndex:0,class:'animLabel',id:'pickerZone'})
 .on("select",()=>{

 }).appendTo(scrollView);
 const labelScooter = new TextView({top:["prev()", 20],left:"10%",text:"SCOOTER?",textColor:"#212121",font:"16px roboto, noto",id:'labelScooter',visible:false}).appendTo(scrollView);
 const switchScooter = new Switch({top:["#pickerZone",20],left:["#labelScooter",30],checked:false,thumbOnColor:themeColor,trackOnColor:"#a1c0de",visible:false}).appendTo(scrollView);
 const labelChassis = new TextView({top:["prev()", 20],left:"10%",text:"CHASSIS",textColor:"#212121",font:"16px roboto, noto",id:'labelChassis',visible:false}).appendTo(scrollView);
 const chassis = new TextInput({layoutData:{top:["prev()",0],left:"10%",right:"10%"},font: font14px,message: "Chassis",borderColor:"#e0e0e0",class:'animLabel',id:'chassis',keyboard:'number',visible:false}).appendTo(scrollView);
 const labelEnergie = new TextView({top:["#pickerZone", 20],left:"10%",text:"ENERGIE",textColor:"#212121",font:"16px roboto, noto"}).appendTo(scrollView);
 const pickerEnergie = new Picker({top:["prev()", 0],left:"10%",right:"10%",font:font14px,borderColor:"#e0e0e0",itemCount: energieList.length,itemText:(index) =>  energieList[index],selectionIndex:0,class:'animLabel',id:'pickerZone'})
 .on("select",()=>{

 }).appendTo(scrollView);
 const labelPuissance = new TextView({top:["prev()", 20],left:"10%",text:"PUISSANCE",textColor:"#212121",font:"16px roboto, noto",id:'labelPuissance'}).appendTo(scrollView);
 const textSliderPuissance = new TextView({top:["#labelPuissance",5],right:"8%",textColor:"#212121",text:"0"}).appendTo(scrollView);
 const sliderPuissance = new Slider({top:["#labelPuissance",0],left:"7%",right:"12%",tintColor:themeColor,minimum:'0',maximum:'500',selection:0,class:'animLabel',id:'sliderPuissance'})
 .on("selectionChanged",({value})=>{
    textSliderPuissance.text = value;
 }).appendTo(scrollView);
 const labelPlaceNumber = new TextView({top:["prev()", 20],left:"10%",text:"NOMBRE DE PLACES",textColor:"#212121",font:"16px roboto, noto",id:'labelplaceNumber',visible:false}).appendTo(scrollView);
 const placeNumber = new TextInput({layoutData:{top:["prev()",0],left:"10%",right:"10%"},font: font14px,message: "Nombre de places",borderColor:"#e0e0e0",class:'animLabel',id:'placeNumber',keyboard:'number',visible:false}).appendTo(scrollView);
 const labelRemorque = new TextView({top:["#sliderPuissance", 20],left:"10%",text:"AVEC REMORQUE",textColor:"#212121",font:"16px roboto, noto",id:'labelRemorque'}).appendTo(scrollView);
 const switchRemorque = new Switch({top:["#sliderPuissance",15],left:["#labelRemorque",30],checked:false,thumbOnColor:themeColor,trackOnColor:"#a1c0de"}).appendTo(scrollView);
 const sansRemorque = new RadioButton({top:["#labelRemorque", 5],left:"10%",text:"Sans",font:'14px roboto,noto',checkedTintColor:themeColor,visible:false}).appendTo(scrollView);
 const avecRemorque = new RadioButton({top:["#labelRemorque", 5],left:["prev()",5],text:"Avec",font:'14px roboto,noto',checkedTintColor:themeColor,visible:false}).appendTo(scrollView);
 const inflammableRemorque = new RadioButton({top:["#labelRemorque", 5],left:["prev()",5],text:"Matière inflammable",font:'14px roboto,noto',checkedTintColor:themeColor,visible:false}).appendTo(scrollView);
 const labelDuree = new TextView({top:["#labelRemorque", 20],left:"10%",text:"DURÉE",textColor:"#212121",font:"16px roboto, noto",id:'LabelDuree'}).appendTo(scrollView);
 const duree = new TextInput({layoutData:{top:["prev()",0],left:"10%",right:"10%"},font: font14px,message: "Durée en jours",borderColor:"#e0e0e0",class:'animLabel',id:'duree',keyboard:'number'}).appendTo(scrollView);
 const button = new Button({layoutData:{top:["prev()", 30],left:"10%",right:"10%"},font: font14px,textColor:"#fff",text:"Calculer",background:themeColor})
 .on('select',()=>{
  let objectOfValueToSend = {};
  const categoryValue = categoryList[pickerCategorie.selectionIndex];
  const zoneValue = zoneList[ pickerZone.selectionIndex];
  const dureeValue = duree.text;
  const chassisValue = chassis.text;
  const placeNumberValue = placeNumber.text;
  if(duree.visible === true && dureeValue === ""){
    messageInfo(createDevisView,40,"Veuillez entrer une durée en jours ou en mois");
  }else if(chassis.visible === true && chassisValue === ""){
    messageInfo(createDevisView,40,"Veuillez entrer un chassis");
  }else if(placeNumber.visible === true && placeNumberValue === ""){
    messageInfo(createDevisView,40,"Veuillez entrer un nombre de places");
  }else{
    objectOfValueToSend.category = categoryValue;
    objectOfValueToSend.zone = zoneValue;
    // On verifie si c'est la catégorie 1 dans ce cas on prend la valeur de remorque(oui ou non)
    if(categoryValue === "Catégorie 1"){
      let remorqueValue = switchRemorque.checked;
      if(remorqueValue === false){
        remorqueValue = "Non";
      }else{
        remorqueValue = "Oui";
      }
     objectOfValueToSend.remorque = remorqueValue;
    }
   // On verifie si c'est la catégorie 2 ou 3 dans ce cas on prend la valeur de la remorque(avec,sans ou matiére inflammable)
   if(categoryValue === "Catégorie 2" || categoryValue === "Catégorie 3"){
     const sansRemorqueValue = sansRemorque.checked;
     const avecRemorqueValue = avecRemorque.checked;
     const inflammableRemorqueValue = inflammableRemorque.checked;
     sansRemorqueValue === false ? objectOfValueToSend.remorque = "Non" : objectOfValueToSend.remorque = "Oui";
     inflammableRemorqueValue === false ? objectOfValueToSend.remorque = "Non" : objectOfValueToSend.remorque = "Oui";
     avecRemorqueValue === false ? objectOfValueToSend.remorque = "Non" : objectOfValueToSend.remorque = "Oui";
   }
   // on verifie si on est sur une categorie autre que la 5 et on récupere la valeur de l'energie et la puissance
   if(categoryValue !== "Catégorie 5"){
      const energyValue = energieList[pickerEnergie.selectionIndex];
      const puissanceValue = sliderPuissance.selection;
      const dureeValue = duree.text;
      if(categoryValue !== "Catégorie 4"){
        objectOfValueToSend.dureeJour = dureeValue;
      }else{
        // La on gere la catégorie 4
        objectOfValueToSend.placeNumber = placeNumberValue;
        objectOfValueToSend.dureeMois = dureeValue;
      }
      objectOfValueToSend.energy = energyValue;
      objectOfValueToSend.puissance = puissanceValue;
    }else{
      // on est dans la categorie 5
      const dureeValue = duree.text;
      let scooterValue = switchScooter.checked;
      let remorqueValue = switchRemorque.checked;
      if(scooterValue === false){
        scooterValue = "Non";
      }else{
        scooterValue = "Oui";
      }
      if(remorqueValue === false){
        remorqueValue = "Non";
      }else{
        remorqueValue = "Oui";
      }
      objectOfValueToSend.scooter = scooterValue;
      objectOfValueToSend.chassis = chassisValue;
      objectOfValueToSend.remorque = remorqueValue;
      objectOfValueToSend.dureeJour = dureeValue;
    }
    const returnCalculDevis = calculDevis(objectOfValueToSend);
          returnCalculDevis.then((result)=>{
           let aD = alertDialog("Résultat",`Votre prime nette s'élève à ${result} Fcfa`,"","Fermer");
          }).catch((e)=>{
           console.log(e);
          }); 
  }
 }).appendTo(scrollView);
 return createDevisView;
};