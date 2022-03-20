class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    get length() {
        let result = 0;
        let node = this.head;
        while (node) {
            result++;
            node = node.next;
        }
        return result;
    }

    get last() {
        let node = this.head;
        while (node.next) {
            node = node.next;
        }
        return node;
    }

    constructor(arr) {
        this.head = null;

        if (arr && arr.length) {
            arr.forEach((item) => {
                this.add(item);
            })
        }
    }

    add(value) {
        const node = new LinkedListNode(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
    }

    toArray() {
        let node = this.head;
        const result = [];

        while (node) {
            result.push(node.value);
            node = node.next;
        }
        return result;
    }
}
