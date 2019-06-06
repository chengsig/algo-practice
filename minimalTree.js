//Given a sorted (increading order) array with unique integer elements
//write an algorithm to create a binary search tree with minimal height

class Node {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function minimalTree(arr, start = 0, end = arr.length - 1) {
    if (end < start) {
        return null;
    }
    let mid = Math.floor((start + end)/2);
    let n = new Node(arr[mid]);
    n.left = minimalTree(arr, start, mid - 1);
    n.right = minimalTree(arr, mid + 1, end);
    console.log(n)
    return n; 
}

function maxDepth(node, max = 0) {
    if (node === null) return max;
    
    if (node.left === null && node.right === null) return 1;
    if (node.left === null) return maxDepth(node.right) + 1;
    if (node.right === null) return maxDepth(node.left) + 1;

    return Math.max(maxDepth(node.left), maxDepth(node.right)) + 1;
}

module.exports = { minimalTree, maxDepth };