function main() {

    function solution(first, second) {
        if (first.length !== second.length) {
            return 'false';
        }

        first = Array.from(first).sort();
        second = Array.from(second).sort();

        for (let i = 0; i < first.length; i++) {
            if (first[i] !== second[i]) {
                return 'false';
            }
        }

        return 'true';
    }

    function solutionHeap(first, second) {
        if (first.length !== second.length) {
            return 'false';
        }

        first = Array.from(first);

        for (let i = 0; i < second.length; i++) {
            const index = first.indexOf(second[i]);
            if (index >= 0) {
               first.splice(index, 1);
            }
        }

        return first.length ? 'false': 'true';
    }

    // strange for values ["od","ee"] because it is [111100, 101101]
    function xorSolution(first, second) {
        if (first.length !== second.length) {
            return 'false';
        }

        let xor = i = 0;

        for(; i < first.length; i++){
            xor ^= first[i].charCodeAt(0) ^ second[i].charCodeAt(0);
        }

        return xor ? 'false' : 'true';
    }

    const [first, second] = helper.getTestValue(['abcdef', 'acdbef']);

    helper(function () {
        return solution(first, second);
    });

    helper(function () {
        return solutionHeap(first, second);
    });

    helper(function () {
        return xorSolution(first, second);
    });
}
