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
