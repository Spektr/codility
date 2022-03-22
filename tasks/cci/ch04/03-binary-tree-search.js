function main() {
    function solution(arr, node = new BinaryTreeNode()) {
        if (arr.length > 2) {
            const center = Math.floor(arr.length / 2);
            node.value = arr[center];
            node.left = solution(arr.slice(0, center));
            node.right = solution(arr.slice(center + 1));
            return node;
        }

        node.value = arr[0];

        if (arr[1]) {
            node.right = new BinaryTreeNode(arr[1]);
        }

        return node;
    }

    const testValues = helper.getTestValue([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

    helper(function () {
        const result = solution(testValues);
        console.log(result);
        return JSON.stringify(result);
    });
}
