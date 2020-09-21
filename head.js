const assertEqual = require('./assertEqual');
//The head function should not return the first element as an array. It should simply return the element itself.

//console.assert(number % 2 === 0, {number: number, errorMsg: errorMsg})
//console.assert(number % 2 === 0, {number, errorMsg});

function head (arr,expected) {
  return arr[0]; 
}

module.exports = head;
