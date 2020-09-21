const assertArraysEqual = require('./assertArraysEqual'); 
const eqArrays = require('./eqArrays'); 

const middle = function (arr) {
  let output = [];
  if (arr.length > 2) { 
    let middle = [];
    if (arr.length % 2 === 1) {
      middle = Math.ceil(arr.length / 2); 
      output.push(middle);  
      return output;
    } 
    else {
      middle = arr.length / 2;
      output.push(middle, middle + 1); 
      return output;
    }
  }  
  else {
    return output;
  }
} 

module.exports = middle;

