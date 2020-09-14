const assertEqual = function(actual, expected) {
  const pass = `✅✅✅Assertion Passed: ${actual} === ${expected}\n`; 
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  return console.assert(actual === expected, fail, pass);

};

assertEqual(1, 1);
assertEqual("Lighthouse Labs", "Bootcamp");
