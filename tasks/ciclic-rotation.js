function main() {
    function solution(A, K) {
        var len = A.length,
            result;

        // extremly importannt correct K before it match
        if(K > len){
            K %= len;
        }

        if(K <= 0 || K === len){
            return A;
        }

        result = A.slice(-K).concat(A);
        result.length = len; // hack (if -K === 0 then result = A + A) for forgot array length

        return result;
    }


    var testValue = helper.getTestValue([[1, 2, 3, 4, 5, 6, 7], 3]),
        testArray = testValue[0],
        testShift = testValue[1];

    helper(function () {
        return solution(testArray, testShift);
    }, 'Ciclic rotation');
}
