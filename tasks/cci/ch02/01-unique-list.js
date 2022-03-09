class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor(arr) {
        this.head = null
        this.length = 0;

        if (arr && arr.length) {
            arr.forEach((item) => {
                this.add(item);
            })
        }
    }

    add(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            let current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }

        this.length++;
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

function main() {
    function solution(list) {
        let node = list.head;
        let prevNode = null;
        const uniques = new Set([node.value]);

        while (node.next) {
            prevNode = node;
            node = node.next;

            if (uniques.has(node.value)) {
                prevNode.next = node.next;
            } else {
                uniques.add(node.value);
            }
        }

        return list;
    }

    const testValues = helper.getTestValue(['a', 'b', 'c', 'a', 'd', 'n', 'c']);
    let linkedList = new LinkedList(testValues);

    helper(function () {
        solution(linkedList);
        return JSON.stringify(linkedList.toArray());
    });
}
