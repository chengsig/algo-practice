/**
 * Generate Permutations
 * Python book p237 recursion
 * Write a program that takes an array of distinct integers 
 * and generate all permutations of that array
 * 
 */

 //[1,2,3]
function permutation2(arr) {
    let result = [];
    
    function directed_permutation(i) {
        if (i === arr.length - 1) {
            result.push(arr.slice());
            return;
        }
        for (let j = i; j < arr.length; j++) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            directed_permutation(i + 1);
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    } 

    directed_permutation(0);
    return result;
}

module.exports = permutation2

/**
 * i = 0, result = [], arr = [1,2,3]
 * j = 0, arr = [1,2,3]
 *      
 * j = 1, arr = [2,1,3]
 * 
 * j = 2, arr = [3,2,1]
 * 
 * i = 1, 
 * 
 * 
 */