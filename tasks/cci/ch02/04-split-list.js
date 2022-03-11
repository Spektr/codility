function main() {
    function solution(list, divider) {
        let node = list.head;
        let last = list.last;
        let prevNode;

        for (let i = 0; i < list.length; i++) {

            // skip normal conditions
            if (node.value < divider) {
                prevNode = node;
                node = node.next;
                continue;
            }

            // move to end of list
            last.next = node;
            last = last.next;


            // if it is first element
            if (!prevNode) {
                list.head = node.next;
            } else {
                prevNode.next = node.next;
            }

            node = node.next;
            last.next = null;
        }

    }

    const [testValues, divider] = helper.getTestValue([[11, 5, 8, 15, 3, 9, 55, 9], 9]);
    let linkedList = new LinkedList(testValues);

    helper(function () {
        solution(linkedList, divider);
        return JSON.stringify(linkedList);
    });
}
