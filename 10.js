/**
 *  N-to-last node on the linked list
 */
function findKthToTail(head, k) {
    let left = head, right = head;

    if (!head && k < 0) return null;
    while(--k) {
        right = right.next;
        if (!head.next && k > 0) return false
    }
    while(!right.next) {
        left = left.next;
        right = right.next;
    }
    return left;
}