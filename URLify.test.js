const URLify = require("./URLify")

describe("#URLify", function(){
  it("returns the string with space replaced with '%20'", function(){
    expect(URLify('a', 1)).toBe('a')
    expect(URLify('Mr John Smith   ', 13)).toBe('Mr%20John%20Smith')
    expect(URLify('', 0)).toBe('')
    expect(URLify('I am', 4)).toBe('I%20am')
  })
})