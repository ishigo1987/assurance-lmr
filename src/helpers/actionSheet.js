module.exports = ()=>{
  return new Promise((resolve,reject)=>{
    let as = new tabris.ActionSheet({
        title: "Choisissez un categorie d'assurance",
        actions: [
          {title: "Responsabilité civile chef d'entreprise"},
          {title:"Tous risques informatique"},
          {title: "Maladie"},
          {title: "Multirisque habitations et/ou bureaux"},
          {title: "Habitation"},
          {title: "Incendie et perte d'exploitation"},
          {title: "Individuelle accident"},
          {title: "Tous risques chantier"},
          {title: "Vie et capitalisation"},
          {title: "Bris de machine"},
          {title: "Vol en coffre-fort"},
          {title: "Transport des fonds"},
          {title: "Voyage ou maladie internationale"},
          {title: "Automobile"},
          {title: "Contrat indemnités de fin de carriere(IFC)"},
          {title: "Visa études plus"},
          {title: "Assistance frais funérailles"},
          {title: "Bancassurance"}
        ]
      }).on("select", ({target: actionSheet, index}) =>{
          resolve(actionSheet.actions[index].title);
      }).open();
 });
}