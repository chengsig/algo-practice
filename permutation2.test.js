const permutation2 = require("./permutation2")

describe("#permutation2", function(){
  it("returns all permutations given array of distinct integers", function(){
    expect(permutation2([1,2,3])).toHaveLength(6)
    expect(permutation2([1,2,3])).toEqual([[1, 2, 3], [1, 3, 2], [2, 1, 3], [2, 3, 1], [3, 2, 1], [3, 1, 2]])
  })
})