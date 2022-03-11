function main() {
    function solution(node) {
        let prevNode = node;
        while (node.next) {
            node.value = node.next.value;
            prevNode = node;
            node = node.next;
        }
        prevNode.next = null;
    }

    const testValues = helper.getTestValue(['a', 'b', 'c', 'd', 'e']);
    let linkedList = new LinkedList(testValues);
    // get middle node
    let node = linkedList.head;
    for (let i = 1; i < linkedList.length / 2; i++) {
        node = node.next;
    }

    helper(function () {
        solution(node);
        return JSON.stringify(linkedList);
    });
}
