/**
 * reverse ouput a link pNode
 * @param {pNode} head 
 */
function printListFromTailToHead(head) {
    const result = [];

    while(head !== null) {
        result.unshift(head.val);
        head = head.next;
    }
    return result;
}