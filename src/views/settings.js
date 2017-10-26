module.exports = (navigationViewToImport)=>{
    "use strict";
    const {Page,CollectionView,Composite,ImageView,TextView} = require('tabris');
    const themeColor = "#1562AD";
    const font14px ="14px roboto, noto";
    const settingsView = new Page({title: `Paramètres`,background:`#fafafa`}).on("disappear", function(){});
    const itemConfig = [{title: "Notifications",image: "src/icons/notifications.png"},{title: "Mon compte",image: "src/icons/my-account.png"}];
    const collectionSettings = new CollectionView({right: 0,bottom: 0,top:0,left: 0,
           itemCount: itemConfig.length,
           cellHeight: 64,
           createCell: () => {
             const cell = new Composite({right: 0,bottom: 0,top:0,background: "#fff",highlightOnTouch:true});
            // Bordures
             new Composite({left: 0,bottom: 0,right: 0,height:0.6,background: "#eeeeee"}).appendTo(cell);
             const imageViewCell = new ImageView({left: 15,centerY: 0,id: "imageViewCell",width:26,height:26}).appendTo(cell);
             const textViewCell = new TextView({left: 60,centerY: 0,font: "15px roboto, noto",textColor: "#616161",id: "textViewCell"}).appendTo(cell);
             return cell;
           },
           updateCell: (view, index) => {
            let page = itemConfig[index];
            view.find("#imageViewCell").set("image", page.image);
            view.find("#textViewCell").set("text", page.title);
           }
    }).on("select", ({index }) => {
        let itemIndex = itemConfig[index];
        if(itemIndex.title === "Notifications"){
          require('./notifications.js').create().appendTo(navigationViewToImport);
        }else if(itemIndex.title === "Mon compte"){
         require('./myAccount.js')(navigationViewToImport).appendTo(navigationViewToImport);
        }
    }).appendTo(settingsView);
    return settingsView;
};