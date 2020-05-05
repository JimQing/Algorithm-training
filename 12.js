/**
 * 1->2->3->6->9->11
 * 4->5->7->8->10
 * compose=> 1->2->3->4->5->6->7->8->9->10->11
 */
function Merge(phead1, phead2) {
    let newHead;
    if (!phead1) return phead2;
    if (!phead2) return phead1;
    if (phead1.val > phead2.val) {
        newHead = phead2;
        newHead.next = Merge(phead1, phead2.next)
    } else {
        newHead = phead1;
        newHead.next = Merge(phead1.next, phead2)
    }
    return newHead;
}