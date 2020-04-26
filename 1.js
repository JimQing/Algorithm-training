/**
 * Chiness: 在一个二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数
 * English: In a two-dimensional array, each row is sorted in increasing order from left to right,
 * and each column is sorted in increasing order from top to bottom.
 * Please complete a function, input such a two-dimensional array and an integer, and determine whether the array contains the integer.
 */

// class twoDimensionalArray {
//     constructor(start, floor) {
//         this.arr = [];
//         const max = start + floor;
//         for (let x = start; x < max; x++) {
//             const item = [];
//             for (let y = x; y < floor + x; y++) {
//                 item.push(y);
//             }
//             this.arr.push(item);
//         }
//     }
//     getArray() {
//         return this.arr;
//     }
// }
// const secondArray = new twoDimensionalArray(0, 8);
// const testArr = secondArray.getArray();

//  mine code (error)
function Find(target, array, lastCenterIndex = 0, flag = '') {
    let center;
    if (!flag) {
        // special
        if (array.length === 0) return false;
        if (array.length === 1) {
            return array[0][0] === target;
        }
        if (array[array.length - 1][array.length - 1] < target) return false;
        if (array[0][0] > target) return false;
        // start
        center = Math.floor((array.length - 1) / 2);
    } else if (flag === '<') {
        center = Math.floor(lastCenterIndex + (array.length - 1) / 2);
    } else if (flag === '>') {
        center = Math.floor(lastCenterIndex / 2);
    }
    if (array[center].length === 0 || !array[center][center]) return false;
    if (array[center][center] > target) {
        if (flag === '<') {
            const min = lastCenterIndex,
                max = center;

            for (let x = min; x < max; x++) {
                for (let y = min; y < max; y++) {
                    if (array[x][y] === target) return true;
                }
            }
            return false;
        }
        return Find(target, array, center, '>');
    } else if (array[center][center] < target) {
        if (flag === '>') {
            const min = center,
                max = lastCenterIndex;

            for (let x = min; x < max; x++) {
                for (let y = min; y < max; y++) {
                    if (array[x][y] === target) return true;
                }
            }
            return false;
        }
        return Find(target, array, center, '<')
    } else {
        return true;
    }
};

Find(1, [
    [-5]
])

// example from https://www.cnblogs.com/wuguanglin/p/2dArrayFind.html
function Find(target, array) {
    // write code here
    const n = array.length,
        m = array[0].length;
    let row = n - 1,
        col = 0;
    if (m === 0 && n === 0) {
        return false;
    }
    while (row >= 0 && col <= m - 1) {
        if (array[row][col] > target) {
            row--;
        } else if (array[row][col] < target) {
            col++;
        } else return true;
    }
    return false;
}