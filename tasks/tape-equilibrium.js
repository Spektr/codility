function main() {
    function solution(A) {
        var len   = A.length,
            first = second = i = 0,
            min = Infinity,
            elem, diff;

        for (; i < len; i++) {
            second += A[i];
        }

        for (i = 0, len -= 1; i < len; i++) {
            elem = A[i];
            first += elem;
            second -= elem;
            diff = Math.abs(first - second);
            min  = (min > diff ? diff : min);
            if (!min)break;
        }

        return min;
    }

    function optimizedSolution(A) {
        var len   = A.length,
            first = second = i = 0,
            min = 1e9,
            elem, diff;

        for (; i < len; i++) {
            second += A[i];
        }

        for (i = 0, len -= 1; i < len; i++) {
            elem = A[i];
            first += elem;
            second -= elem;
            diff = first - second;
            // maybe faster then Math.abs
            diff = (diff < 0) ? -diff : diff;
            // small faster then Math.min ( >> - detect sign)
            min  = min + ((diff - min) & ((diff - min) >> 31));
            if (!min)break;
        }

        return min;
    }

    var testNumbers = helper.getTestValue([3, 1, 2, 4, 3]);


    helper(function () {
        return solution(testNumbers);
    }, 'tape equilibrium');

    helper(function () {
        return optimizedSolution(testNumbers);
    }, 'tape equilibrium small change');
}
