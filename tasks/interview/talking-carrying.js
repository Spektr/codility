function main() {

    function sum(num){
        if(sum.stack.length === 0){
            sum.stack.push(num);
            return sum;
        }

        const last = sum.stack.pop();
        const next = last + num;
        sum.stack.push(last, next);
        return sum;
    }

    Object.setPrototypeOf(sum, {
        stack: [],
        valueOf: ()=>{
            return sum.stack.join(' ');
        }
    });

    function solution(nums) {
        return nums.reduce((acc, item)=> acc(item), sum)+"";
    }

    const testValue = helper.getTestValue([1,5,10]);

    helper(() => solution(testValue));
}
