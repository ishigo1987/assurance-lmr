module.exports = (widgetToAppend)=>{
  const {Composite,TextView,ImageView} = require('tabris');
  // const getText = require('../assurances.json');
  //       getText = JSON.parse(getText);
  //       console.log(getText);
  const compositeCard = new Composite({top:['prev()',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer'}).appendTo(widgetToAppend);
  const border = new Composite({left:0,top:0,bottom:0,width:3,background:'#1562AD',id:'border'}).appendTo(compositeCard);
  const titreRubrique =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'RESPONSABILITE CIVILE CHEF D’ENTREPRISE',textColor:'#212121'}).appendTo(compositeCard);
  const apercuTextRubrique = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"L’assurance Responsabilité Civile Chef d’Entreprise vous couvre contre les dommages corporels, matériels et immatériels consécutifs causés aux tiers du fait de l’exercice de votre activité professionnelle. Elle concerne les entreprises industrielles, commerciales et de tourisme"}).appendTo(compositeCard);
  const share = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'14px roboto,noto',textColor:'#212121'})
  .on('tap',()=>{
    let messageToShare = titreRubrique.text + "\n" + apercuTextRubrique.text;
    window.plugins.socialsharing.share(messageToShare);
  }).appendTo(compositeCard);


  const compositeCard2 = new Composite({top:['#aRetirer',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer2'}).appendTo(widgetToAppend);
  const border2 = new Composite({left:0,top:0,bottom:0,width:3,background:'#00897b',id:'border'}).appendTo(compositeCard2);
  const titreRubrique2 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'L’ASSURANCE TOUS RISQUES INFORMATIQUE',textColor:'#212121'}).appendTo(compositeCard2);
  const apercuTextRubrique2 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"C’est l’assurance qui garantit le matériel et les données informatiques stockées en cas de sinistre, en le prenant en charge qu’il soit en repos, en activité, en entretien ou en déplacement dans l’enceinte des bureaux.L’assureur couvre également les frais de reconstitution des médias. Il s’agit des frais exposés pour remplacer les supports d’information assurés et pour y reconstituer les informations qui s’y trouvaient stockées au moment du sinistre"}).appendTo(compositeCard2);
  const share2 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard2);


  const compositeCard3 = new Composite({top:['#aRetirer2',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer3'}).appendTo(widgetToAppend);
  const border3 = new Composite({left:0,top:0,bottom:0,width:3,background:'#e53935',id:'border'}).appendTo(compositeCard3);
  const titreRubrique3 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'ASSURANCE MALADIE',textColor:'#212121'}).appendTo(compositeCard3);
  const apercuTextRubrique3 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"L’assurance maladie couvre généralement le remboursement des frais occasionnés par la maladie, la maternité, l’invalidité et le décès des assurés.Il s’agit notamment des frais suivants "}).appendTo(compositeCard3);
  const share3 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard3);


  const compositeCard4 = new Composite({top:['#aRetirer3',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer4'}).appendTo(widgetToAppend);
  const border4 = new Composite({left:0,top:0,bottom:0,width:3,background:'#3e2723',id:'border'}).appendTo(compositeCard4);
  const titreRubrique4 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'ASSURANCE  MULTIRISQUE  HABITATIONS  ET / OU BUREAUX',textColor:'#212121'}).appendTo(compositeCard4);
  const apercuTextRubrique4 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"Pour  maximiser  la  couverture  ou  la  protection  aux  assurés,  une  possibilité de regrouper  plusieurs assurances ou garanties, couvrant plusieurs risques dans un seul contrat leur est donnée."}).appendTo(compositeCard4);
  const share4 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard4);


  const compositeCard5 = new Composite({top:['#aRetirer4',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer5'}).appendTo(widgetToAppend);
  const border5 = new Composite({left:0,top:0,bottom:0,width:3,background:'#f57f17',id:'border'}).appendTo(compositeCard5);
  const titreRubrique5 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'ASSURANCE HABITATION',textColor:'#212121'}).appendTo(compositeCard5);
  const apercuTextRubrique5 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"La première chose à faire est d’aller porter plainte au commissariat de police ou à la gendarmerie. Vous avez ensuite 2 jours ouvrés pour transmettre votre dépôt de plainte à votre assureur. Une lettre avec accusée de réception est indispensable."}).appendTo(compositeCard5);
  const share5 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard5);


  const compositeCard6 = new Composite({top:['#aRetirer5',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff',id:'aRetirer6'}).appendTo(widgetToAppend);
  const border6 = new Composite({left:0,top:0,bottom:0,width:3,background:'#ffd600',id:'border'}).appendTo(compositeCard6);
  const titreRubrique6 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'ASSURANCE  INCENDIE  ET  PERTE  D’EXPLOITATION',textColor:'#212121'}).appendTo(compositeCard6);
  const apercuTextRubrique6 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"Elle  vous  permet la  réparation  des  dommages causés à autrui, et dans le cas où votre  responsabilité  serait  engagée  vis  à  vis  des  voisins  ou  des  tiers, à  l’occasion  d’un incendie ayant pris naissance dans les locaux.Elle couvre également les dommages subis par  vos biens meubles ou  immeubles, ainsi que "}).appendTo(compositeCard6);
  const share6 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard6);


  const compositeCard7 = new Composite({top:['#aRetirer6',5],left:5,right:5,height:150,elevation:2,cornerRadius:2,background:'#fff'}).appendTo(widgetToAppend);
  const border7 = new Composite({left:0,top:0,bottom:0,width:3,background:'#212121',id:'border'}).appendTo(compositeCard7);
  const titreRubrique7 =  new TextView({top:10,left:10,right:10,font:'15px roboto,noto',maxLines:1,text:'ASSURANCE  INDIVIDUELLE  ACCIDENT',textColor:'#212121'}).appendTo(compositeCard7);
  const apercuTextRubrique7 = new TextView({top:['prev()',3],left:10,right:10,maxLines:4,textColor:'#757575',font:'14px roboto,noto',text:"Elle couvre  le  risque  accidents  qui  constitue  une  menace  quotidienne  pour les hommes  d’affaires,  commerçants, particuliers  chefs de familles et travailleurs tant dans leur vie privée que professionnelle. On  entend  par accident, toute atteinte corporelle non intentionnelle de la part de la victime à la suite d’une action soudaine et brutale, provenant d’une cause extérieure."}).appendTo(compositeCard7);
  const share7 = new TextView({top:['prev()',12],left:15,text:'PARTAGER',font:'15px roboto,noto',textColor:'#212121'}).appendTo(compositeCard7);

  
}