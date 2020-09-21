const eqArrays = require('../eqArrays') 
const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#eqArrays", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert(eqArrays([1, 2, 3], [1, 2, 3]));
  }); 
    it("returns false for [1, 2, 4], [1, 2, 3]", () => {
      assert.isFalse(eqArrays([1, 2, 4], [1, 2, 3]));
  });  
});