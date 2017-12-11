function main() {
    function solution(A) {
        var len = A.length,
            mustBe = (len+2)*(len+1)/2,
            sum = i = 0;

        for(;i<len;i++){
            sum += A[i];
        }

        return mustBe - sum;
    }

    function optimizedSolution(A) {
        var len = A.length,
            xor = 0,
            i = 1;

        for(;i<=len;i++){
            xor ^= (A[i-1] ^ i);
        }

        return xor ^ i;
    }

    var testNumbers = helper.getTestValue([2, 3, 1, 5]);


    helper(function () {
        return solution(testNumbers);
    }, 'perm missing elem');

    helper(function () {
        return optimizedSolution(testNumbers);
    }, 'perm missing elem optimized');
}
