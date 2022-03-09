function main() {
    function solution([list, index]) {
        if(index >= list.length){
            return -1;
        }

        let i = list.length - index;
        let node = list.head;

        while (i){
            node = node.next;
            i--;
        }

        return node;
    }

    const [testValues, index] = helper.getTestValue([['a', 'b', 'c', 'a', 'd', 'n', 'c'], 5]);
    let linkedList = new LinkedList(testValues);

    helper(function () {
        return JSON.stringify(solution([linkedList, index]));
    });
}
