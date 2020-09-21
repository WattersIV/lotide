const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;
describe("#assertArraysEqual", () => {
  it("returns true for [1, 2, 3], [1, 2, 3]", () => {
    assert(assertArraysEqual([1, 2, 3], [1, 2, 3]));
  }); 
    it("returns false for ['hello', 'world', 'lighthouse'], ['hello', 'world']", () => {
      assert.isFalse(assertArraysEqual(["hello", "world", "lighthouse"], ["hello", "world"]));
  });  
});