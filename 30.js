/**
 * Number of occurrences of 1 in an integer from 1 to n
 * 求1-n中出现1的次数
 * @param {number} n
 * @return {number}
 */
var countDigitOne = function(n) {
    let count = 0;

    for(let i = 1; i <= n; i++) {
        let num = i;
        while(num) {
            if (num % 10 === 1) {
                count++;
            }
            num = ~~(num / 10);
        }
    }

    return count;
};

var countDigitOne2 = function(n) {
    let digit = 1, high = ~~(n /10), cur = n % 10, low = 0;
    let res = 0;

    while(high !== 0 || low !== 0) {
        if (cur === 0) {
            // The res is high * digit when the current digit is 0
            res += high * digit;
        } else if (cur === 1) {
            // The res is high * digit + low + 1 when the current digit is 1
            res += high * digit + low + 1;
        } else {
            // The res is (high + 1) * digit when the current digit is other
            res += (high + 1) * digit;
        }

        low += cur * digit;
        cur = high % 10;
        high = ~~(high / 10);
        digit *= 10;
    }

    return res;
};
