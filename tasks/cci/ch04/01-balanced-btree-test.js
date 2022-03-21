function main() {
    const stop = 'STOP';

    function solution(node, depth = 0) {

        if(node === null){
            return depth;
        }

        const left = solution(node.left, depth +1);
        const right = solution(node.right, depth +1);

        if(
            left === stop
            || right === stop
            || Math.abs(left-right) > 1
        ){
            return stop;
        }

        return left > right ? left : right;
    }

    const testValue = helper.getTestValue([10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9]);

    helper(function () {
        const tree = new BinaryTree(testValue);
        // additional node
        tree.root.left.left.left.left = new BinaryTreeNode(111);
        return solution(tree.root);
    });
}
