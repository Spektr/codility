class Graph {
    constructor(vertexes = {}) {
        this.vertexes = vertexes;
    }

    edges(vertex){
        return this.vertexes[vertex];
    }


    addVertex(value) {
        if (!this.vertexes[value]) {
            this.vertexes[value] = [];
        }
    }

    addEdge(vertex1, vertex2, isBidirectional = false) {
        if (!this.vertexes[vertex1] || !this.vertexes[vertex2]) {
            throw new Error('There is no such vertexes');
        }

        if (!this.vertexes[vertex1].includes(vertex2)) {
            this.vertexes[value].push(vertex2);
        }

        if (isBidirectional && !this.vertexes[vertex2].includes(vertex1)) {
            this.vertexes[value].push(vertex1);
        }
    }
}
