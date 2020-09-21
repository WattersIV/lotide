const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.assert(actual === expected, fail); 
  }
}

// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) { 
  let output = {};
  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (output[item]) {  
        output[item]++;  
      } else {
        output[item] = 1;
      }
    }
  } 
  return output;
} 

const firstNames = [
  "Karl", //item[0]
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];
module.exports = countOnly;