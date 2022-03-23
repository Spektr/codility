function main() {
    function solution(tree) {
        const lists = [new LinkedList()];
        const queue = [[tree.root, 0]];

        while (queue.length) {
            let [node, depth] = queue.shift();

            if (!lists[depth]) {
                lists[depth] = new LinkedList();
            }
            lists[depth].add(node.value);

            if (node.left) {
                queue.push([node.left, depth + 1]);
            }

            if (node.right) {
                queue.push([node.right, depth + 1]);
            }
        }


        return lists;
    }

    const testValues = helper.getTestValue([10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9]);
    const binaryTreeSearch = new BinaryTree(testValues);
    helper(function () {
        return JSON.stringify(solution(binaryTreeSearch));
    });
}
