const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.assert(actual === expected, fail); 
  }
} 

const countLetters = function (sentence) {
  let output = {};  
  for (letter of sentence) {
    if (output[letter]) {
      output[letter]++;
    } 
    if (!output[letter] && letter !== ' ') {
      output[letter] = 1;
    }
  }
  return output;
} 

console.log(countLetters('lighthouse in the house'));