/**
 * Print a binary tree from top to bottom
 * 自上而下打印一棵二叉树
 */

function printBinaryTree(root) {
    if (root === null) return []
    let queue = [], res = [];
    queue.push(root);
    while(queue.length) {
        if (root.left) queue.push(root.left);
        if (root.right) queue.push(root.right);
        res.push(queue.shift().val);
        root = queue[0];
    }
    return res;
}