module.exports = (actionCallVariable, titleSubMenu, image, placementPriority, navigationViewInsertion) =>{
 actionCallVariable = new tabris.Action({
   title:titleSubMenu,
   placementPriority: placementPriority,
   image: {src: image,scaleMode:"auto"}
 }).appendTo(navigationViewInsertion);
   return actionCallVariable;
};