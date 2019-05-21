const combination = require("./combination")

describe("#combination", function(){
  it("returns the number of combinations given letters", function(){
    expect(combination('a')).toBe(1)
    expect(combination('')).toBe(0)
    expect(combination('ab')).toBe(2)
    expect(combination('abc')).toBe(6)
  })
})