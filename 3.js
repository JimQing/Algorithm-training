/**
 * 输入某二叉树的前序遍历和中序遍历的结果，请重建出该二叉树。假设输入的前序遍历和中序遍历的结果中都不含重复的数字。例如输入前序遍历序列{1,2,4,7,3,5,6,8}和中序遍历序列{4,7,2,1,5,3,8,6}，则重建二叉树并返回
 * 前序遍历（VLR）： 
        1.访问根节点 (node)
        2.前序遍历左子树 (leftChild)
        3.前序遍历右子树 (rightChild)
    中序遍历（LVR）： 
        1.中序遍历左子树 (leftChild)
        2.访问根节点  (node)
        3.中序遍历右子树 (rightChild)
    后序遍历（LRV）： 
        1.后序遍历左子树 (leftChild)
        2.后序遍历右子树 (rightChild)
        3.访问根节点 (node)
 */
/* 
function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
}
 */
let res = [];
const tree = {
    val: 1,
    left: {
        val: 2,
        left: null,
        right: null
    },
    right: {
        val: 3,
        left: {
            val: 4,
            left: null,
            right: null
        },
        right: {
            val: 5,
            left: null,
            right: null
        },
    }
}

// VLR
function VLR(tree) {
    res.push(tree.val);
    if (tree.left) VLR(tree.left);
    if (tree.right) VLR(tree.right);
}

// LVR
function LVR(tree) {
    if (tree.left) LVR(tree.left);
    res.push(tree.val);
    if (tree.right) LVR(tree.right);
}

// LRV
function LRV(tree) {
    if (tree.left) LRV(tree.left);
    if (tree.right) LRV(tree.right);
    res.push(tree.val);
}

function reConstructBinaryTree(pre, vin) {
    if (pre.length === 0 || vin.length === 0) {
        return null;
    }
    const index = vin.indexOf(pre[0]);
    const left = vin.slice(0, index);
    const right = vin.slice(index + 1);
    // Get area of left tree
    const leftArr = pre.slice(1, index + 1);
    // Get area of right tree
    const rightArr = pre.slice(index + 1);

    return {
        val: pre[0],
        left: reConstructBinaryTree(leftArr, left),
        right: reConstructBinaryTree(rightArr, right),
    }
}