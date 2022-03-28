function main() {

    function findNode(parent, node){
        if(parent === null){
            return false;
        }

        if(parent === node){
            return true;
        }

        return findNode(parent.left, node) || findNode(parent.right, node);
    }

    function solution(first, second) {
        let node = first;
        while (node){
            if(findNode(node, second)){
                return node;
            }
            node = node.parent;
        }

        return false;
    }

    const testValues = helper.getTestValue([10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9]);
    const binaryTreeSearch = new BinaryTree(testValues);
    const firstNode = binaryTreeSearch.root.left.left.left;
    const secondNode = binaryTreeSearch.root.left.right.left;
    helper(function () {
        return solution(firstNode, secondNode).value;
    });

}
