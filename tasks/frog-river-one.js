function main() {

    // 80%
    function solution(X, A) {
        var len = A.length,
            stack = [],
            i = 0,
            item;

        for(;i<len;i++){
            item = A[i];

            if(!~stack.indexOf(item)){
                stack.push(item);
            }

            if(stack.length === X){
                return i;
            }
        }

        return -1;
    }


    function solutionSecond(X, A) {
        var len = A.length,
            stack = [], i = 0,
            item;

        for(;i<len;i++){
            item = A[i];

            if(stack[item]){
               continue;
            }

            stack[item]= true;
            X -= 1;

            if(!X){
                return i;
            }
        }

        return -1;
    }

    var testNumbers = helper.getTestValue([5, [1, 3, 1, 4, 2, 3, 5, 4]]),
        X = testNumbers[0],
        A = testNumbers[1];


    helper(function () {
        return solution(X,A);
    }, 'frog river one');

    helper(function () {
        return solutionSecond(X,A);
    }, 'frog river one second');
}


