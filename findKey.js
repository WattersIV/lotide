const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.assert(actual === expected, fail); 
  }
}; 

const findKey = (object, callback) => {
  let output = '';
  const keys = Object.keys(object); 
for (let i = 0; i < keys.length; i++) { 
    if (callback(object[keys[i]])){
      output+= keys[i];  
      console.log(output);
      return output;
    }
  }  
}
module.exports = findKey;