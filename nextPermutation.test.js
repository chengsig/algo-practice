const nextPermutation = require("./nextPermutation")

describe("#nextPermutation", function(){
  it("return the next increment number", function(){
    expect(nextPermutation([1,2,3])).toEqual([1,3,2])
    expect(nextPermutation([3,2,1])).toEqual([1,2,3])
    expect(nextPermutation([1,5,8,4,7,6,5,3,1])).toEqual([1,5,8,5,1,3,4,6,7])
    expect(nextPermutation([1,1,5])).toEqual([1,5,1])
  })
})