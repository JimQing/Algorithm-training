/**
 * Enter two binary trees A and B to determine whether B is a substructure of A
 * 输入两棵二叉树A，B，判断B是不是A的子结构
 */

var isSubStructure = HasSubtree;
function HasSubtree(rootA, rootB) {
    if(!rootA || !rootB) {
        return false
    }
    return isSameTree(rootA, rootB) || HasSubtree(rootA.left, rootB) || HasSubtree(rootA.right, rootB);
}
function isSameTree(tree1, tree2) {
    if (!tree2) return true;
    if (!tree1) return false;
    if (tree1.val === tree2.val) {
        return isSameTree(tree1.left, tree2.left) && isSameTree(tree1.right, tree2.right)
    } else {
        return false;
    }
}