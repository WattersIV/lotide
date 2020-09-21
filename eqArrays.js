const assertEqual = require('./assertEqual'); 

const eqArrays = function (arr1, arr2) {
  let equalLen = false;
  if (arr1.length == arr2.length) {
    equalLen = true; 
  } 
  if (equalLen) { 
    let equal = false;
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] == arr2[i]) {  
        equal = true;
      } else {
        equal = false; 
        return equal;
      }  
    } 
    return equal;
  } 
  return false;
}

module.exports = eqArrays;