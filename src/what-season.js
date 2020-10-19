const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  throw new CustomError('Not implemented');
  if (typeof(date) !== 'number') {
    throw new Error('');
  }
  var regexp1 = /[3-5]/gi;
  var matches1 = date.toString.match(regexp1);

  var regexp2 = /[6-8]/gi;
  var matches2 = date.toString.match(regexp2);

  var regexp3 = /[9-11]/gi;
  var matches3 = date.toString.match(regexp3);

  var regexp4 = /[12,1-2]/gi;
  var matches4 = date.toString.match(regexp4);

  if (date[1] === matches1) return 'spring';
  if (date[1] === matches2) return 'summer';
  if (date[1] === matches3) return 'autumn';
  if (date[1] === matches4) return 'winter';
};
