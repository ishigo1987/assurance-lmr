module.exports = (navigationViewToInsert)=>{
  "use strict";
  localStorage.setItem('activePage','speakToAgent');
  const {Page,ScrollView,TextInput,Composite,TextView,ActivityIndicator} = require('tabris');
  let createMenuActionIcon,categoryAssuranceSelected;
  const actionSheet = require('../helpers/actionSheet.js');
  let messageInfo = require('../custom_widgets/snackbar.js');
  const alertDialog = require('../helpers/alertDialog.js');
  const handleActionCategorie = require("../helpers/actionIcons.js")(createMenuActionIcon, "Selectionnez une catégorie d'assurances", "srcImg", "low", navigationViewToInsert);
  const sendMessage = require('../helpers/actionIcons.js')(createMenuActionIcon,"","src/icons/sendMessage.png","high",navigationViewToInsert);
  const themeColor = "#1562AD";
  const font14px ="14px roboto, noto";
  const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
  let userNotifications = JSON.parse(localStorage.getItem('notifications'));
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
  const speakToAnAgentView = new Page({title: `Parler à un agent`,background:`#fafafa`})
  .on({
    appear: ()=>{
      handleActionCategorie.visible = true;
      sendMessage.visible = true;
    },
    disappear: ()=>{
      handleActionCategorie.visible = false;
      sendMessage.visible = false;
      localStorage.removeItem('activePage');
      speakToAnAgentView.dispose();
    }
  });
  
  const scrollView = new ScrollView({top:0,left:0,right:0,bottom:70}).appendTo(speakToAnAgentView);
  const compositeAreaTypeMessage = new Composite({top:['prev()',0],left:0,right:0,bottom:0,background:"#eee"}).appendTo(speakToAnAgentView);
  const scrollViewComposite = new ScrollView({top:0,left:0,right:0,bottom:0}).appendTo(compositeAreaTypeMessage);
  const inputMessage = new TextInput({left:5,right:5,centerY:0,message:"Entrez votre question",font:font14px,textColor:"#757575",autoCorrect:true,backgroundImage:null,focused:true,type:'multiline'}).appendTo(scrollViewComposite);
  handleActionCategorie.on("select",()=>{
    let as = actionSheet("Choisissez un categorie d'assurance",itemsOfActionSheet);
    as.then((returnAs)=>{
     categoryAssuranceSelected = returnAs;
    });
  });
  sendMessage.on('select',()=>{
    let dataToSend = {};
    let inputMessageValue = inputMessage.text;
    if(inputMessageValue === ""){
     messageInfo(speakToAnAgentView,40,"Veuillez remplir le champ de question");
    }else if(categoryAssuranceSelected === undefined){
     messageInfo(speakToAnAgentView,40,"Veuillez choisir une catégorie d'assurances");
    }else{
      if(userNotifications === null){
        dataToSend.NotificationMessage = String(false);
      }else{
       dataToSend.NotificationMessage = String(userNotifications.NotificationsMessage);
      }
      dataToSend.Telephone = String(userInformations.Telephone);
      dataToSend.QuestionCategory = categoryAssuranceSelected;
      dataToSend.Question = inputMessageValue;
      dataToSend.requestName = "Poser une question a un agent";
      const ajax = require('../modules/ajax.js')(JSON.stringify(dataToSend),"https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php");
            ajax.then((response)=>{
              if(response.Message === "Question envoyée"){
                const aD = alertDialog("Question envoyée","Votre question a bien été envoyée, un agent vous répondra dans un delai de 24h maximum.","Ok merci","Fermer");
                inputMessage.text = "";
                categoryAssuranceSelected = undefined;
              }else if(response.Message === "Question attendant une réponse"){
                const aD = alertDialog("Question non envoyée",`${response.Question}`,"Ok j'ai compris","");
              }
            }).catch((error)=>{
              console.log(error);
            });
     }
  });

  // Fonction qui récupére les questions posées et les réponses recues du serveur
  function retrieveMessageFromServer(){
    const activityIndicator = new ActivityIndicator({centerX:0,centerY:0,tintColor:themeColor,width:32,height:32}).appendTo(scrollView);
    const dataToSend = {Telephone:String(userInformations.Telephone),requestName:"Récuperer les questions et les réponses"};
    const ajax = require('../modules/ajax.js')(JSON.stringify(dataToSend),"https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php");
          ajax.then((response)=>{
           activityIndicator.dispose();
           if(response.Message === "Pas de resultats trouvés"){
            const infoAboutNewQuestionToSend = new TextView({centerY:0,left:"10%",right:"10%",textColor:"#616161",alignment:"center",text:"Vous n'avez pas encore posé de question a notre agent, si vous en avez une ecrivez la dans la zone située en bas de cette page"}).appendTo(scrollView);
           }else if(response.Message === "Resultats trouvés"){
            let j = response.Resultats.Questions_user.length;
            for(let i=0; i<j; i++){
                 let responseLmr = response.Resultats.Answers_user[i];
                 if(responseLmr === ""){
                   responseLmr = "En attente d'une réponse de M.Assurances";
                 }
                const questionsContainer = new tabris.Composite({top:['prev()',10],left:10,right:'25%',cornerRadius:'20',background:'#1562AD'}).appendTo(scrollView);
                const answersContainer = new tabris.Composite({top:['prev()',10],right:10,left:'25%',cornerRadius:'20',background:'#e0e0e0'}).appendTo(scrollView);
                const questions = new tabris.TextView({top:10,left:10,right:10,bottom:10,textColor:'#ffffff',text:response.Resultats.Questions_user[i]}).appendTo(questionsContainer);
                const answer = new tabris.TextView({top:10,left:10,right:10,bottom:10,textColor:'#757575',text:responseLmr}).appendTo(answersContainer);
              }
            const arrayOfStatusQuestion = response.Resultats.Status_question;
            if(arrayOfStatusQuestion.includes("Repondu") === true){
              function getIndex(element){return element === "Repondu";}
              const indexStatusAnswerRepondu = Number(arrayOfStatusQuestion.findIndex(getIndex));
              const IdQuestionAnswerRepondu = response.Resultats.Id_questions[indexStatusAnswerRepondu];
              require('../modules/markAnswerRead.js')(IdQuestionAnswerRepondu);
            }
           }
          }).catch((error)=>{
           console.log(error);
          })
  }
  // Ajax request to retrieve the questions and answers
  retrieveMessageFromServer();
  return speakToAnAgentView;
};