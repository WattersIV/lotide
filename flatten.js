
const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.assert(actual === expected, fail); 
  }
};  

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

const assertArraysEqual = function (arr1, arr2) {
  let equalLen = false; 
  const notSame = 'These are not equal'; 
  const same = 'These are equal';
  if (arr1.length == arr2.length) {
    equalLen = true; 
  } 
  if (equalLen) {  
    for (let i = 0; i < arr1.length; i++){
      if (arr1[i] !== arr2[i]) {  
        console.log(notSame); 
        return 0;
      } 
    } 
    console.log(same); 
    return 1;
  } 
  console.log(notSame); 
  return 0;
}

const flatten = function (originalArray) {
  let output = []; 
  for (let i = 0; i < originalArray.length; i++) {
    if (Number.isInteger(originalArray[i])) {
      output.push(originalArray[i]);
    } else {
      for (let j = 0; j < originalArray[i].length; j++) {
        output.push(originalArray[i][j]);
      }
    }
  } 
  return output;
}
module.exports = flatten;