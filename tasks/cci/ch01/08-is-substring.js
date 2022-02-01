function main() {

    function isSubstring(str, substr) {
        return str.includes(substr);
    }

    function solution([first, second]) {
        if(first.length !== second.length){
            return 'is not shift';
        }

        let started = false;
        let matchBeforeStarts = '';
        let index = 0;

        for (let i = 0; i < first.length; i++) {
            for (let j = index; j < second.length; j++) {
                if (first[i] === second[j]) {
                    if (!started) {
                        started = true;
                    }

                    index = j + 1;
                    break;
                }

                matchBeforeStarts += second[j];

                // if it was already started then this code can't be reached
                if (started) {
                    return 'is not shift';
                }
            }
        }

        return isSubstring(first, matchBeforeStarts) ? 'is shift' : 'is not shift';
    }

    const testValue = helper.getTestValue(["waterbottle", "erbottlewat"]);

    helper(function () {
        return solution(testValue);
    });
}
