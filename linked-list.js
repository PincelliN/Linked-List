"use strict";
class ListNode {
    value;
    next;
    constructor(value) {
        this.value = value;
    }
}
class LinkedList {
    root;
    tail;
    length = 0;
    add(value) {
        const node = new ListNode(value);
        if (!this.root || !this.tail) {
            this.root = node;
            this.tail = node;
        }
        else {
            this.tail.next = node;
            this.tail = node;
        }
        this.length++;
    }
    getNumberOfNode() {
        return this.length;
    }
    print() {
        let curret = this.root;
        while (curret) {
            console.log(curret.value);
            curret = curret.next;
        }
    }
}
const numberList = new LinkedList();
numberList.add(10);
numberList.add(4);
numberList.add(-3);
numberList.add(20);
console.log(numberList.getNumberOfNode());
numberList.print();
console.log(numberList);
const nameList = new LinkedList();
