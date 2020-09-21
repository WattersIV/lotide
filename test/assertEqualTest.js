const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true for 1, 1", () => {
    assert(assertEqual(1, 1));
  }); 
    it("returns false for 'Lighthouse Labs', 'Bootcamp'", () => {
      assert.isFalse(assertEqual("Lighthouse Labs", "Bootcamp"));
  });  
});