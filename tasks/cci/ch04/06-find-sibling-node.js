function main() {
    function solution(tree, node) {
        const lists = [new LinkedList()];
        const queue = [[tree.root, 0]];

        while (queue.length) {
            let [node, depth] = queue.shift();

            if (!lists[depth]) {
                lists[depth] = new LinkedList();
            }
            lists[depth].add(node);

            if (node.left) {
                queue.push([node.left, depth + 1]);
            }

            if (node.right) {
                queue.push([node.right, depth + 1]);
            }
        }

        const bindedLists = lists.reduce((acc, list) => {
            acc.last.next = list.head;
            return acc;
        }, lists.shift());

        let cursor = bindedLists.head;
        while (cursor) {

            if (cursor.value === node) {
                return cursor.next.value;
            }
            cursor = cursor.next;
        }
    }

    function solutionUseParent(tree, startNode) {
        function circle(node, prev = null, depth = 0, reverse = false) {
            console.log(node.value);
            if (depth === 0) {
                if (prev !== null) {
                    return node;
                }
                return circle(node.parent, node, depth - 1);
            }

            if (reverse) {
                if (prev === node.left || !node.left) {
                    return circle(node.right, node, depth + 1, true);
                }

                return circle(node.left, node, depth + 1, true);

            }

            if (prev === node.right || !node.right) {
                if (node.parent === null) {
                    return circle(node.left, node, depth, !reverse);
                }

                return circle(node.parent, node, depth - 1);
            }

            return circle(node.right, node, depth + 1, true);
        }

        return circle(startNode);
    }

    const bookSolution = function(node) {
        var successor = null;
        if (node.right !== null) {
            successor = node.right;
            while (successor.left !== null) {
                successor = successor.left;
            }
        } else if (node.parent !== null) {
            var currNode = node;
            while (currNode.parent !== null && successor === null) {
                if (currNode.parent.left === currNode) {
                    successor = currNode.parent;
                }
                currNode = currNode.parent;
            }
        }
        return successor;
    };

    const testValues = helper.getTestValue([10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9]);
    const binaryTreeSearch = new BinaryTree(testValues);
    binaryTreeSearch.root.left.left.left = null;
    const findedNode = binaryTreeSearch.root.right.right;
    helper(function () {
        return solution(binaryTreeSearch, findedNode).value;
    });

    helper(function () {
        return solutionUseParent(binaryTreeSearch, findedNode).value;
    });

    helper(function () {
        return bookSolution(findedNode).value;
    });
}
