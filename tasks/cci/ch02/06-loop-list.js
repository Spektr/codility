function main() {

    function solution(node) {
        let outerCursor = node;
        let outerIndex = 0;
        let innerCursor;

        while (outerCursor) {
            innerCursor = node;
            for (let innerIndex = 0; innerIndex < outerIndex; innerIndex++) {
                if (innerCursor === outerCursor) {
                    return innerCursor;
                }
                innerCursor = innerCursor.next
            }
            outerCursor = outerCursor.next;
            outerIndex++;
        }
    }

    function solutionWithStorage(node) {
        const storedNodes = [];

        while (node) {

            if (storedNodes.includes(node)) {
                return node;
            }

            storedNodes.push(node);
            node = node.next;
        }
    }

    const [data, loopValue] = helper.getTestValue([['a', 'b', 'c', 'd', 'e'], 'c']);

    // create looped list
    const list = new LinkedList(data);
    let node = list.head;
    let loopNode;

    while (node && !loopNode) {
        if (node.value === loopValue) {
            loopNode = node;
        }
        node = node.next;
    }
    list.last.next = loopNode;

    helper(function () {
        return solution(list.head).value;
    });

    helper(function () {
        return solutionWithStorage(list.head).value;
    });
}
