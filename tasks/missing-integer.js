function main() {

    function solution(A) {
        var len = A.length,
            storage = [1, ],
            i=0;

        for(;i<len;i++){
            storage[A[i]]=true;
        }

        i=1;
        len = storage.length;

        for(;i<len;i++){
            if(storage[i]=== undefined){
                return i;
            }
        }

        return i;
    }

    var testNumbers = helper.getTestValue([1, 3, 6, 4, 1, 2]);


    helper(function () {
        return solution(testNumbers);
    }, 'missing integer');

}


