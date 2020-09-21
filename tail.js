const assertEqual = require('./assertEqual');
const tail = function(arr) {
  let output = [];
  if (arr >= 2) {
    for (let i = 1; i < arr.length; i++) {
      output += arr[i];
    }
  } else {
    return output;
  }
  return output;
};

module.exports = tail;

