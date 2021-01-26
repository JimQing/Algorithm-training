/**
 * Arrange the array into the smallest number
 * 把数组排成最小的数
 * @param {number[]} numbers
 * @return {string}
 */
var minNumber = function(numbers) {
    numbers.sort(function(a, b) {
        const c1 = `${a}${b}`;
        const c2 = `${b}${a}`;

        return c1 - c2;
    });
    let min = '';

    numbers.forEach(item=> min += item);

    return min;
};