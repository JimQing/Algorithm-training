/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * 解题原理：
 * 设链表headA长度为a，链表headB长度为b，交集长度为c
 * 则 a + c + b = b + c + a;
 * 若c为0，两者不相交，则 a + b = b + a
 * - 时间复杂度：O(M+N)。
 * - 空间复杂度：O(1)。
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pHead = headA;
    let pHead2 = headB;

    while(pHead !== pHead2) {
        pHead = pHead === null ? headB : pHead.next;
        pHead2 = pHead2 === null ? headA : pHead2.next;
    }

    return pHead;
}