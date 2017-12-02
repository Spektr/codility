function main(){
    var yourself = {
            fibonacci : function(n) {
                if (n === 0) {
                    return 0;
                } else if (n === 1) {
                    return 1;
                } else {
                    return this.fibonacci(n - 1) +
                        this.fibonacci(n - 2);
                }
            }
        },
        yourselfNew  = {
            store:[0,1],
            fibonacci : function(n) {
                if (n in this.store) {
                    return this.store[n];
                }

                this.store[n] = this.fibonacci(n - 1) + this.fibonacci(n - 2);

                return this.store[n];
            }
        },
        testNumber = +helper.getTestValue();


    helper.log('fibonacci old');
    helper.time();
    yourself.fibonacci(testNumber);
    helper.log(helper.timeEnd());

    helper.log('fibonacci new');
    helper.time();
    yourselfNew.fibonacci(testNumber);
    helper.log(helper.timeEnd());
}
