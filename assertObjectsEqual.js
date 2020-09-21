const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) { 
    let equal = false;
    for (let i = 0; i < arr1.length; i++){ 
      if (arr1[i] == arr2[i]) {  
        equal = true; // 1,2,3   1,4,2
      } else { 
        equal = false;  
        return equal;
      }  
    }  
    return equal;
  } 
  else {
    return false; 
  }
}

const eqObjects = function(object1, object2) { 
  const aProps = Object.getOwnPropertyNames(object1); 
  const bProps = Object.getOwnPropertyNames(object2);  

  if (aProps.length !== bProps.length){
    console.log('length not equal');
    return false; 
  } 
  for (let i = 0; i < aProps.length; i++) {  
    const propName = aProps[i];
    if (Array.isArray(object1[propName]) && Array.isArray(object2[propName])) {
      if (!eqArrays(object1[propName], object2[propName])) {
        return false;
      }  
    } else {
      if (object1[propName] !== object2[propName]) { //Check is key/value at index i is returns false in second obj
        return false; 
      }  
    }
  }
  return true;
};  


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
  return (console.log(`Assertion Failed: 🔴🔴🔴 ${inspect(actual)} !== ${inspect(expected)}`));
  } else {
  return (console.log(`Assertion Passed: ✅✅✅  ${inspect(actual)} === ${inspect(expected)}`));
  }
};

module.exports = assertObjectsEqual;