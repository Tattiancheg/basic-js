const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
if (!Array.isArray(members)) return false;

if (members.length === 0) return false;

var nameOfTeam = members.map(item => {
  if (typeof(item) === 'string') {
  return item.toUpperCase().trim().slice(0,1).split('');
  };
});
return nameOfTeam.sort().join('');
};