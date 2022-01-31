function main() {

    function solution(str) {
        let count = 1;
        let last = str[0];
        let result = '';

        for(let i =1; i < str.length; i++){
            if(str[i] === last){
                count++;
                continue;
            }

            result += last + count;
            last = str[i];
            count = 1;
        }

        result += last + count;

        return result.length >= str.length ? str : result;
    }

    const testValue = helper.getTestValue('aaaabbccccddef');

    helper(function () {
        return solution(testValue);
    });
}
