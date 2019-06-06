// the function rearranges numbers into the lexicographically
// next greater permutation of numbers
// if not possible, must rearrange it as the lowest possible
// must be in-place and only allows O(1) extra memory

function nextPermutation(nums) {
    //finding the first decreasing number from right
    let i = nums.length - 2;
    while (i >= 0 && nums[i] >= nums[i + 1]) {
        i--;
    }
    //if not found meaning the biggest #
    //otherwise, find the next bigger number from right
    if (i >= 0) {
        let j = nums.length - 1;
        while (j >= 0 && nums[i] > nums[j]) {
            j--;
        }
        //swap to get ready to increment
        [nums[i], nums[j]] = [nums[j], nums[i]];
    }
    //reverse the right of the mutation part to increasing
    reverse(nums, i + 1)
    return nums;
}

function reverse(nums, start) {
    let end = nums.length - 1;
    while (start < end) {
        [nums[start], nums[end]] = [nums[end], nums[start]];
        start++;
        end--;
    }
    return nums;
}

module.exports = nextPermutation;