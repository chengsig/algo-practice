/** Cracking the coding interview 101/708 solution 204/708
 *  write a method to replace all spaces in a string
 * with '%20'. You may assume that the string 
 * has sufficient space at the end to hold the 
 * additional characters, and that you are given
 * the 'true' length of the string.
 * 'Mr John Smith    ', 13 => 'Mr%20John%20Smith"
 */

function URLify(str, len) {
    let out = '';
    for (let i = 0; i < len; i++) {
        if (str[i] === ' ') {
            out += '%20';
        } else {
            out += str[i];
        }
    }
    return out;
}

module.exports = URLify

/**
 * problem:
 * function joinWords(arrWords){
 *  let sentence = "";
 *  for (let w of arrWords) {
 *      sentence += w;
 *  }
 *  return sentence;
 * }
 * 
 * on each concatenation, a new copy of the string is created
 * and the two strings are copied over,
 * characters by characters. The third iteration requires 3x and so on.
 * the totla time is therefore O(x + 2x + ... + nx) this reduces to O(xn^2)
 * ?????? just Java?????
 */