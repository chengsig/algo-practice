/** Elements of prgramming interviews p45
 * given an array of 0s and 1s, sort it so that 0s appear first
 * and 1s appear after
 * O(n) run time and O(1) space complexity
 * [0, 1, 1, 0] => [0, 0, 1, 1]
 */

function sortZeroOne(arr) {
    if (arr.length === 0) return [];
    //declare zero spot
    let zero = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            [arr[zero], arr[i]] = [arr[i], arr[zero]];
            zero++;
        }
    }
    return arr;
}

/**
 * the function takes an unsorted array of positive integers and an index,
 * rearrange the elements such that all elements less than arr[idx] appear first
 * followed by elements equal to the pivot followed by elements greater than pivot
 * 
 */

function dutchFlagPartition(arr, idx) {
    let pivot = arr[idx];
    //first group smaller elements to the front
    let smaller = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < pivot) {
            [arr[smaller], arr[i]] = [arr[i], arr[smaller]];
            smaller++;
        }
    }
    //then pass larger elements to the end
    let larger = arr.length - 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (arr[i] > pivot) {
            [arr[i], arr[larger]] = [arr[larger], arr[i]];
            larger--;
        }
    } 
    return arr;
}



module.exports = { sortZeroOne, dutchFlagPartition }
