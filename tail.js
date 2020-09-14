const assertEqual = function(actual, expected) {
  const pass = `Assertion Passed: ✅✅✅ ${actual} === ${expected}\n`;
  const fail = `🔴🔴🔴 ${actual} !== ${expected}\n`;
  if (actual === expected) {
    console.log(pass);
  } else {
    console.assert(actual === expected, fail);
  }
};

const tail = function(arr) {
  let output = [];
  if (arr >= 2) {
    for (let i = 1; i < arr.length; i++) {
      output += arr[i];
    }
  } else {
    return output;
  }
  return output;
};



// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!