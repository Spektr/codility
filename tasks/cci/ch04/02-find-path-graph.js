function main() {
    function solution(graph, from, to, path = []) {
        return graph.edges(from)
            .map((vertex) => {
                // if we step to previous vertex
                if (path.includes(vertex)) {
                    return [null];
                }

                // if we find needed vertex
                if (vertex === to) {
                    return [[...path, from, to]];
                }

                // continue searching
                return solution(graph, vertex, to, [...path, from]);
            })
            .flat()
            .filter((item) => item !== null);
    }

    const [graphValues, from, to] = helper.getTestValue([{
        1: [2],
        2: [3, 4],
        3: [4],
        4: [1],
    }, 1, 4]);

    helper(function () {
        const graph = new Graph(graphValues);
        return JSON.stringify(solution(graph, from, to));
    });
}
