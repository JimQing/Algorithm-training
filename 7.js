/**
 * 输入一个整数，输出该数二进制表示中1的个数。其中负数用补码表示。
 * 解析：将1一次次左移去跟原数进行与运算
 * 解析：把一个整数减去1，再和原整数做与运算，会把该整数最右边一个1变成0
 * 重复上述运算,直到全部全部为0
 */

function numberOf1(n) {
    if (n === 1) return 1;
    let flag = 1, count;

    // most to 32, zero if exceeded
    while (flag) {
        if (n & flag) {
            flag = flag << 1;
        } else {
            count++;
        }
    }
}


// another
function countNum(n) {
    let count = 0;

    while (n !== 0) {
        let temp = n;

        n--;
        n = n & temp;
        count++;
    }
    return count;
}
