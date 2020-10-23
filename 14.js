/**
      8
     /  \
     6   10
    / \  / \
    5  7 9 11
=>
      8
     /  \
    10   6
    / \  / \
    11 9 7  5
 */
/* function TreeNode(x) {
    this.val = x;
    this.left = null;
    this.right = null;
 } */
function Mirror(root) {
    if (!root) return null;
    let temp;

    temp = root.left;
    root.left = root.right;
    root.right = temp;
    Mirror(root.left)
    Mirror(root.right)
}

function Mirror2(root) {
    if (!root) return null;
    
    return {
        val: root.val,
        left: Mirror(root.right),
        right: Mirror(root.left)
    }
}
