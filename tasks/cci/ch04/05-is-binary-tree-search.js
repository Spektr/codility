function main() {
    function solution(tree) {
        const queue = [tree.root];
        const duplicates = [];

        while (queue.length) {
            let node = queue.shift();

            if (duplicates.includes(node.value)) {
                return false;
            }
            duplicates.push(node.value);

            if (node.left) {
                if (node.value < node.left.value) {
                    return false;
                }
                queue.push(node.left);
            }

            if (node.right) {
                if (node.value > node.right.value) {
                    return false;
                }
                queue.push(node.right);
            }
        }

        return true;
    }

    const testValues = helper.getTestValue([10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9]);
    const binaryTreeSearch = new BinaryTree(testValues);
    helper(function () {
        return JSON.stringify(solution(binaryTreeSearch));
    });
}
