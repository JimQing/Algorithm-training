/**
 * Palindrome linked list
 * 回文链表
 */

const isPalindrome = function(head) {
    let slow = head, fast = head;

    if (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (!fast) {
        // odd links
        slow = slow.next;
    }
    slow = reverse(slow);
    fast = head;

    while(slow.next) {
        if(fast.val !== slow.val) return false;
        fast = fast.next;
        slow = slow.next;
    }
    return true;
}
const  reverse = function(head) {
    let prev = null;

    while(head) {
        let next = head.next;

        head.next = prev;
        prev = head;
        head = next;
    }

    return prev;
}
