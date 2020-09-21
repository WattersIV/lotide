const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass); 
    return true;
  } else {
    console.assert(actual === expected, fail);  
    return false;
  }
}; 

 module.exports = assertEqual;