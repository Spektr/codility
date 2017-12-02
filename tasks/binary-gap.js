function main() {
    function solution(N) {
        return N.toString(2)
            .split('1')
            .reduce(function (accumulator, current, index, array) {
                if (!index || (index === array.length - 1)) return accumulator;

                return (accumulator > current.length) ? accumulator : current.length;
            }, 0);
    }

    function popShiftSolution(N) {
        var arr = N.toString(2)
            .split('1');

        arr.pop();
        arr.shift();

        return arr.reduce(function (accumulator, current) {
            return (accumulator > current.length) ? accumulator : current.length;
        }, 0);

    }

    function optimizedSolution(N) {
        var str           = N.toString(2),
            strLen        = str.length,
            i             = 0,
            currentStreak = 0,
            maxLength     = 0;

        for (; i < strLen; i++) {

            if (str[i] !== '0') {
                if (maxLength < currentStreak) {
                    maxLength = currentStreak;
                }
                currentStreak = 0;
            } else {
                currentStreak++;
            }
        }

        return maxLength;
    }

    var testNumber = +helper.getTestValue();

    helper(function () {
        return solution(testNumber);
    }, 'binary gap');

    helper(function () {
        return popShiftSolution(testNumber);
    }, 'binary gap with pop/shift');

    helper(function () {
        return optimizedSolution(testNumber);
    }, 'binary gap optimized');
}
