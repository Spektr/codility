function main() {

    function getTreeMap(node, stopCallback) {
        const queue = [node];
        const map = [];

        while (queue.length) {
            node = queue.shift();
            map.push(node.value);

            if (node.left) {
                queue.push(node.left);
            } else {
                map.push(null);
            }


            if (node.right) {
                queue.push(node.right);
            } else {
                map.push(null);
            }

            if(stopCallback && stopCallback(map)){
                return false;
            }
        }

        return map;
    }

    function solution(original, subtree) {
        const subtreeMap = getTreeMap(subtree.root);
        const queue = [original.root];
        let node;

        while (queue.length) {
            node = queue.shift();
            const checkMap = getTreeMap(node, (tempMap)=>{
                if(tempMap.length < subtreeMap.length){
                    return false;
                }

                if(tempMap.length > subtreeMap.length){
                    return true;
                }

                for(let i =0; i < subtreeMap.length; i++){
                    if(tempMap[i] !== subtreeMap[i]){
                        return true;
                    }
                }

                // if temp isn't finished
                return false;
            });
            if(checkMap )


            if (node.left) {
                queue.push(node.left);
            }


            if (node.right) {
                queue.push(node.right);
            }
        }

        return false;
    }

    const [originalValues, subtreeValues] = helper.getTestValue([[10, 6, 12, 4, 8, 11, 13, 2, 5, 7, 9], [4, 2, 5]]);
    const original = new BinaryTree(originalValues);
    const subtree = new BinaryTree(subtreeValues);

    helper(function () {
        return solution(original, subtree) ? 'TRUE' : 'FALSE';
    });

}
