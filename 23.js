/**
 * Search the path which the sum of node values in a binary tree
 * 二叉树中节点值的和为输入整数的所有路径
 * 
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    const list = [], listAll = [];

    return findPath(root, sum, list, listAll);
};

function findPath(root, sum, list, listAll) {
    if (root === null) return listAll;

    list.push(root.val);
    const diff = sum - root.val;

    if (root.left === null && root.right === null && diff === 0) {
        listAll.push(Array.of(...list));
    }
    findPath(root.left, diff, list, listAll);
    findPath(root.right, diff, list, listAll);
    // pop 是为了推出当前值，给另一侧子树让空间
    list.pop();

    return listAll;
}