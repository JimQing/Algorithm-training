/**
 * Determine whether an array is a subsequent traversal of a binary search tree
 * 判断一个数组是否是二叉搜索树的后续遍历
 * 1. 得到根节点，将temp置为根节点
 * 2. 判断根节点左侧子树的值是否都比根节点小
 * 3. 判断根节点右侧子树的值是否都比根节点大
 * 4. 如果都正常，走到5，否则返回false
 * 5. 将temp置为左右子树的根节点，回到1，继续执行
 */

var verifyPostorder = function(postorder) {
    if (!postorder.length) return true;

    return varifyFn(postorder, 0, postorder.length-1) 
};

function varifyFn(a, l, r) {
    if (l >= r) return true; // search end
    let i = r;
    // Get Index of the right child-tree;
    while (a[i-1] > a[r] && i > l) i--;
    for (let j = i-1; j >= l; j--) {
        if (a[j] > a[r]) return false; 
    }
    return varifyFn(a, l, i - 1) && varifyFn(a, i, r - 1);
}