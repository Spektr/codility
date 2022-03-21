class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinaryTree {
    constructor(arr) {
        this.root = new BinaryTreeNode(arr.shift());
        this.fillNode(this.root, arr);
    }

    fillNode(node, arr) {
        const queue = [node];
        let tempNode = null;
        let tempValue;
        while (arr.length && queue.length) {
            tempNode = queue.shift();

            tempValue = arr.shift();
            if (tempValue !== undefined) {
                tempNode.left = new BinaryTreeNode(tempValue);
                queue.push(tempNode.left);
            }

            tempValue = arr.shift();
            if (tempValue !== undefined) {
                tempNode.right = new BinaryTreeNode(tempValue);
                queue.push(tempNode.right);
            }
        }
    }
}
