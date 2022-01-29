function main() {

    function solution(str) {
        let result = '';

        for(let i =0; i < str.length; i++){
            result += str[i]===' '? '%20': str[i];
        }

        return result;
    }

    function solutionNative(str) {
        return str.replaceAll(' ', '%20');
    }

    const testValue = helper.getTestValue('Mr John Smith');

    helper(function () {
        return solution(testValue);
    });

    helper(function () {
        return solutionNative(testValue);
    });
}
