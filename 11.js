/**
 * Reverse a the linked list
 */
class Link {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}
const test = {
    val: 1,
    next: {
        val: 2,
        next: {
            val: 3,
            next: {
                val: 4,
                next: null
            }
        }
    }
};
/**
 * 1. get pPre pNext
 * 2. change: pHead.next = pPre;
 * 3. jumpToNext: pPre = pHead, pHead = pNext
 * 4. if pHead !== null jump step 2;
 * @param {*} pHead 
 */
function reverseList(pHead) {
    let pNext, pPre;
    while (pHead) {
        pNext = pHead.next;
        pHead.next = pPre;
        pPre = pHead;
        pHead = pNext;
    }

    return pPre;
}