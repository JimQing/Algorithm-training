/**
 * 丑数（UglyNumber）
 * 我们把只包含质因子 2、3 和 5 的数称作丑数（Ugly Number）。求按从小到大的顺序的第 n 个丑数。
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    if (n <= 1) return 1;
    let i = 1, count = 1;

    while(count < n) {
        i++;
        if (isUgly(i)) count++;
    }

    return i;
};

var isUgly = function(n) {
    while(n % 2 === 0) n = n / 2;
    while(n % 3 === 0) n = n / 3;
    while(n % 5 === 0) n = n / 5;

    return n === 1;
}



var nthUglyNumber = function(n) {
    if (n < 7) return n;

    const res = [];

    res[0] = 1; 

}