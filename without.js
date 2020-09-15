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
  if (arr1.length === arr2.length) {
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
 

const without = function (source, removal) { 
  let output = [];  
  for (let i = 0; i < source.length; i++) { 
    let toKeep = true;
    for (let j = 0; j < removal.length; j++) {
      if (source[i] === removal[j]) { 
        toKeep = false; 
        if (i === source.length - 1) {
          return output;
        }
      } 
      if (toKeep && removal.length - 1 === j) {
        output.push(source[i]);
      }
    } 
  } 
  return output;
} 

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); 
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])) ;// => 