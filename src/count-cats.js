const CustomError = require("../extensions/custom-error");

module.exports = function countCats(backyard) {
 let x=0;
 backyard.forEach(element1 => {
   element1.forEach(element2 => {
    if (element2 === '^^') {
      x+=1;
   }
   })
 })
 return x;
};
