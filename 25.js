/**
 * Convert the binary search tree into a sorted circular doubly linked list
 * // Definition for a Node.
 * function Node(val,left,right) {
 *    this.val = val;
 *    this.left = left;
 *    this.right = right;
 * };
 */
/**
 * @param {Node} root
 * @return {Node}
 */
var treeToDoublyList = function(root) {
    var prev, head;
    var getList = function(root) {
        if (!root) return null;
        dfs(root)
        head.left = prev;
        prev.right = head;

        return head;
    };

    var dfs = function(pNode) {
        if (!pNode) return;

        dfs(pNode.left)
        if (prev) {
            prev.right = pNode;
        } else {
            head = pNode;
        }
        pNode.left = prev;
        prev = pNode;
        dfs(pNode.right)
    }

    return getList(root);
}


// other version
var treeToDoublyList2 = function(root) {
    if (!root) return null;

    let pLast = null;

    pLast = ConverNode(root, pLast);
    let pHead = pLast;

    while(pHead && pHead.left) {
        pHead = pHead.left;
    }

    return pHead;
};

var ConverNode = function(pNode, pLast) {
    if (!pNode) return;
    // left childTree
    if (pNode.left) {
        pLast = ConverNode(pNode.left, pLast);
    }
    pNode.left = pLast;
    if (pLast) {
        pLast.right = pNode;
    }
    // connect right
    pLast = pNode;
    // right childTree
    if (pNode.right) {
        pLast = ConverNode(pNode.right, pLast);
    }

    return pLast;
}