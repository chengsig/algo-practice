/** Cracking the coding interview 82/708
 * design an algorithm to return the number of 
 * all permutations of a string;
 * Assume all characters are unique.
 * eg: 'a' => {'a'} //1
 *     'ab' => {'ab', 'ba'} //2
 *     'abc' 
 * => {'cab', 'acb', 'abc', 'cba', 'bca', 'bac'} //6
 */

function permutation(str) {
    //base case
    if (str.length === 0) return 0;
    if (str.length === 1) return 1;
    let curr = 1 //starting the progress part
    let combo = 1;
    while (curr < str.length) {
        combo = (combo + 1) * curr;
        curr++;
    }
    return combo;
}

module.exports = permutation
