const { minimalTree, maxDepth } = require("./minimalTree")

describe("#minimalTree", function(){
  it("creates a tree with minimal height give sorted array of nodes value", function(){
    expect(maxDepth(minimalTree([1,2,3]))).toBe(2)
    expect(maxDepth(minimalTree([1,2,3,4,5]))).toBe(3)
    expect(maxDepth(minimalTree([1,2,3,4,5,6,7]))).toBe(3)
    expect(maxDepth(minimalTree([1,2,3,4,5,6,7,8,9,10,11]))).toBe(4)
  })
})