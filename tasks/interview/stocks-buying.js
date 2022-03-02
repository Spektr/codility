function main() {

    const account = {
        cash: 0,
        stocks: 0,
        buy(price, amount = 1) {
            this.cash -= price * amount;
            this.stocks += amount;
        },
        sell(price, amount = this.stocks) {
            if (amount > this.stocks) {
                amount = this.stocks;
            }

            this.cash += price * amount;
            this.stocks -= amount;
        },
        reset() {
            this.cash = 0;
            this.stocks = 0;
        }
    };

    const manager = {
        buyItUseCash(currentPrice, next, future) {
            if (!next && !future) {
                return false;
            }

            if (currentPrice > next) {
                return false;
            }

            return true
        },

        buyItUseChance(from, quotes) {
            let max = quotes[from];
            for (let i = from; i < quotes.length; i++) {
                max = Math.max(max, quotes[i]);
            }

            return quotes[from] !== max;
        },
    }

    function solutionByChance(quotes) {
        for (let i = 0; i < quotes.length; i++) {
            if (manager.buyItUseChance(i, quotes)) {
                account.buy(quotes[i]);
            } else {
                account.sell(quotes[i]);
            }
        }

        return account.cash;
    }

    function solutionByCash(quotes) {
        for (let i = 0; i < quotes.length; i++) {
            if (manager.buyItUseCash(quotes[i], quotes[i + 1], quotes[i + 2])) {
                account.buy(quotes[i], Math.floor(account.cash / quotes[i]));
            } else {
                account.sell(quotes[i]);
            }
        }

        return account.cash;
    }

    const testValue = helper.getTestValue([1, 6, 5, 10, 8, 7]);

    helper(function () {
        return solutionByChance(testValue);
    });

    account.reset();
    account.cash = 10;

    helper(function () {
        return solutionByCash(testValue);
    });


    // Not my solutions
    function solutionComment1(arr) {
        return arr.reduce((revenue, currentValue, index) => {
            const maxValue = Math.max(...arr.slice(index))

            return currentValue < maxValue
                ? revenue + maxValue - currentValue
                : revenue
        }, 0)
    }

    function solutionComment2(arr){
        if (arr.length < 2) {
            return 0;
        }

        const maxNumber = Math.max(...arr);
        const maxNumberIdx = arr.indexOf(maxNumber);
        const left = arr.slice(0, maxNumberIdx);
        const right = arr.slice(maxNumberIdx + 1);
        const sum = left.reduce(
            (acc, current) => acc + maxNumber - current,
            0
        );

        return sum + solutionComment2(right);
    };

    helper(function () {
        return solutionComment1(testValue);
    });

    helper(function () {
        return solutionComment2(testValue);
    });
}
