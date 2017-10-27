exports.create = () =>{
    "use strict";
    const {Page,TextView,ScrollView} = require('tabris');
    const themeColor = "#1562AD";
    const aboutUsView = new Page({title: `A propos de M. Assurances`,background:`#fafafa`}).on("disappear", function(){this.dispose();});
    return aboutUsView;
}