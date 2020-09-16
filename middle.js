
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

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]