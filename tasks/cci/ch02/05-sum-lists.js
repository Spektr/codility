function main() {
    function solution([firstList, secondList]) {
        const list = new LinkedList([]);
        let firstNode = firstList.head;
        let secondNode = secondList.head;
        let tempSum = 0;

        while (firstNode || secondNode) {
            if (firstNode) {
                tempSum += firstNode.value;
                firstNode = firstNode.next;
            }

            if (secondNode) {
                tempSum += secondNode.value;
                secondNode = secondNode.next;
            }

            if (tempSum < 10) {
                list.add(tempSum);
                tempSum = 0;
            } else {
                list.add(tempSum - 10);
                tempSum = 1;
            }
        }

        return list;
    }

    function solutionReverse([firstList, secondList]) {
        const firstNum = parseInt(firstList.toArray().join(''));
        const secondNum = parseInt(secondList.toArray().join(''))
        return new LinkedList((firstNum + secondNum).toString().split(''));
    }

    const [first, second] = helper.getTestValue([[7, 1, 6], [5, 9, 2]]);
    let firstList = new LinkedList(first);
    let secondList = new LinkedList(second);

    helper(function () {
        return JSON.stringify(solution([firstList, secondList]));
    });

    helper(function () {
        return JSON.stringify(solutionReverse([
            new LinkedList([6, 1, 7]),
            new LinkedList([2, 9, 5]),
        ]));
    });
}
