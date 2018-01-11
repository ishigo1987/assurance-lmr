exports.create =()=>{
    const {Page,ScrollView,Composite,TextView,CollectionView,ActivityIndicator} = require('tabris');
    const themeColor = "#1562AD";
    const faqPage = new Page({title: `Foire aux questions`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
    const scrollView = new ScrollView({left:0,right:0,top:0,bottom:0,background:"#fafafa",}).appendTo(faqPage);
    const activityIndicator = new ActivityIndicator({centerX:0,centerY:0,tintColor:themeColor,width:32,height:32}).appendTo(scrollView);
    const ajax = require('../modules/ajax.js')(null,"https://www.afrikhealth.com/apiAssuranceLmr/faq.json");
          ajax.then((response)=>{
            activityIndicator.dispose();
             let faqCollectionView = new CollectionView({right: 0,bottom: 0,top: 0,left: 0,itemCount: response.length,
                createCell: () => {
                    const cell = new Composite({right: 0,bottom: 0,background: "#fff",});
                    // Bordures
                    new Composite({left: 0,bottom: 0,right: 0,height: 1,background: "#eeeeee"}).appendTo(cell);
                    const textViewQuestion = new TextView({left: 15,right:15,top: 7,font: "22px roboto, noto",textColor: "#424242",id: "textViewQuestion"}).appendTo(cell);
                    const textViewReponse = new TextView({left: 15,right:15,top: ["prev()",0],bottom: 5,font: "14px roboto, noto",textColor:"#757575",id: "textViewReponse"}).appendTo(cell);
                    return cell;
                },
                updateCell: (view, index) => {
                    let page = response[index];
                    view.find("#textViewQuestion").set("text", page.Question);
                    view.find("#textViewReponse").set("text", page.Reponse);
                }
            }).appendTo(scrollView);
          }).catch((error)=>{

          });
  return faqPage
}