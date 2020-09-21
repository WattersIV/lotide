const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `Assertion Failed: 🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.log(fail); 
  }
};  

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) { 
    let equal = false;
    for (let i = 0; i < arr1.length; i++){ 
      console.log(arr1[i],arr2[i]);
      if (arr1[i] == arr2[i]) {  
        equal = true; // 1,2,3   1,4,2
      } else { 
        console.log(arr1[i],arr2[i], 'else statment line 19');
        equal = false;  
        console.log('False 1');
        return equal;
      }  
    }  
    console.log('Maybe false?', equal);
    return equal;
  } 
  else {
    console.log(arr1.length, arr2.length);
    console.log('false 2');
    return false; 
  }
}

// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
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
        console.log('not equal arrays');
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

module.exports = eqObjects;

