function main() {
    function solution(A) {
        var len = A.length,
            xor = i = 0;

        for(;i<len;i++){
            xor ^= (A[i] ^ i);
        }

        return +!(xor ^ len);
    }

    var testNumbers = helper.getTestValue([4,1,3,2]);


    helper(function () {
        return solution(testNumbers);
    }, 'perm check');
}
