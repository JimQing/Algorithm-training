/**
 * Copy of complex linked list
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var getNewNode = function(val) {
    this.val = val;
    this.next = null;
    this.random = null;
}
var copyRandomList = function(head) {
    if (head === null) {
        return null;
    }
    const map = new Map();

    let p = head;
    let p2 = new getNewNode(head.val);
    const pHead = p2;

    map.set(p, p2);
    while(p.next) {
        if (p.next) {
            p2.next = new getNewNode(p.next.val);
        } else {
            p2.next = null;
        }
        p = p.next;
        p2 = p2.next;
        // connect nodes
        map.set(p, p2);
    }
    p = head;
    p2 = pHead;
    // figure out random node
    while(p) {
        p2.random = map.get(p.random);
        p = p.next;
        p2 = p2.next;
    }

    return pHead;
};

// other version
var copyRandomList2 = function(head) {
    if (head === null) {
        return null;
    }

    cloneNodes(head);
    connectRandom(head);
    return reconnectNode(head);
};

var cloneNodes = function(head) {
    let pNode = head;

    while(pNode) {
        const newNode = new getNewNode(pNode.val);

        newNode.next = pNode.next;
        pNode.next = newNode;
        pNode = newNode.next;
    }
}

var connectRandom = function(head) {
    let pNode = head;

    while(pNode) {
        if (pNode.random) {
            // clonePNode => pNode.next
            // pNode.random(clone) => pNode.random.next
            // set random for cloneNode
            pNode.next.random = pNode.random.next;
        }
        pNode = pNode.next.next;
    }
}

var reconnectNode = function(head) {
    let pNode = head;
    let newHead = null, newNode = null;

    if (pNode !== null) {
        newHead = newNode = pNode.next;
        pNode = pNode.next.next;
    }
    while(pNode) {
        newNode.next = pNode.next;
        newNode = newNode.next;
        pNode = pNode.next.next;
    }
    return newHead;
}