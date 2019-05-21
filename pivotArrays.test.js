const { sortZeroOne, dutchFlagPartition } = require("./pivotArrays")

describe("#sortZeroOne", function () {
    it("returns the sorted array given unsorted 0s and 1s", function () {
        expect(sortZeroOne([0, 1, 1, 0])).toEqual([0, 0, 1, 1])
        expect(sortZeroOne([1, 1, 0])).toEqual([0, 1, 1])
        expect(sortZeroOne([0, 0, 1, 1])).toEqual([0, 0, 1, 1])
    })
})

describe("#dutchFlagPartition", function () {
    it("returns the sorted array given the pivot index", function () {
        expect(dutchFlagPartition([2, 7, 6, 5, 9, 3, 4], 3)).toEqual([2, 3, 4, 5, 9, 7, 6])
        expect(dutchFlagPartition([1, 2, 3], 1)).toEqual([1, 2, 3])
        expect(dutchFlagPartition([3, 2, 1], 1)).toEqual([1, 2, 3])
    })
})