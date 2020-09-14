const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected){
    console.log(pass);
  } else {
    console.assert(actual === expected, fail); 
  }
}; 
//The head function should not return the first element as an array. It should simply return the element itself.

//console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg})
//console.assert(number % 2 === 0, {number, errorMsg});

function head (arr,expected) {
  return arr[0]; 
}

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");

