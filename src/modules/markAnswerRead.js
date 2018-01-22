module.exports = (idQuestionToMarkAsRead)=>{
 const ajaxGetNewResponse = require('./ajax.js');
 const userInformations = JSON.parse(localStorage.getItem("storeUserInfos"));
 let dataToSend = {requestName:'Aller marquer une reponse comme lue',userNumber:userInformations.Telephone,idQuestion:idQuestionToMarkAsRead};
     dataToSend = JSON.stringify(dataToSend);
 const returnResponse = ajaxGetNewResponse(dataToSend,'https://www.afrikhealth.com/apiAssuranceLmr/apiHome.php');
       returnResponse.then((response)=>{
         console.log(response);
       }).catch((error)=>{
         console.log(response);
       });
};