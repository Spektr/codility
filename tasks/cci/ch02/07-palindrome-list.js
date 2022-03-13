function main() {

    function solution(list) {
        const stack = [];
        let node = list.head;

        while (node) {
            stack.push(node.value);
            node = node.next;
        }

        while (stack.shift() === stack.pop()){

            if(stack.length <= 1){
                return true;
            }
        }

        return false;
    }

    const testValue = helper.getTestValue(['m', 'a', 'd', 'a', 'm']);
    const list = new LinkedList(testValue);

    helper(function () {
        return solution(list) ? 'TRUE' : 'FALSE';
    });
}
