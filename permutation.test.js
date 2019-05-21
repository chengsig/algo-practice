const permutation = require("./permutation")

describe("#permutation", function(){
  it("returns the number of permutations given letters", function(){
    expect(permutation('a')).toBe(1)
    expect(permutation('')).toBe(0)
    expect(permutation('ab')).toBe(2)
    expect(permutation('abc')).toBe(6)
  })
})