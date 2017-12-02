function main() {
    function solution(A) {
        var storage = {},
            len     = A.length,
            i       = 0,
            item;

        for (; i < len; i++) {
            item = A[i];
            if (item in storage) {
                delete storage[item];
            } else {
                storage[item] = true;
            }
        }


        return +Object.keys(storage)[0];
    }

    function optimizedSolution(A) {
        var len    = A.length,
            i      = 0,
            result = 0;

        for (; i < len; i++) {
            result ^= A[i];
        }

        return result;
    }

    var testValue = helper.getTestValue([9, 3, 9, 3, 9, 7, 9]);

    helper(function () {
        return solution(testValue);
    }, 'Odd occurences in array');

    helper(function () {
        return optimizedSolution(testValue);
    }, 'Odd occurences in array optimized');
}