/**
 * Push a list from an array by clockwise
 *  1  2  3  4
 *  5  6  7  8
 *  9 10 11 12
 * 13 14 15 16
 * 
 * => 1 2 3 4 8 12 16 15 14 13 9 5 6 7 11 10
 */
// const matrix = [[1,2,3,4,5], [6,7,8,9,10], [10,11,12.13,14,15], [16,17,18,19,20],[21,22,23,24,25]];
const matrix = [[1,2,3,4], [5,6,7,8], [9,10,11,12], [13,14,15,16]];
function printMatrix2(matrix) {
    if (!matrix) return;
    let res = [];
    const firstRow = matrix.shift();
    res = res.concat(firstRow);
    while (matrix.length) {
      // 判断数组是否为空一定要用matrix.length来判断
      matrix = rotateMatrix(matrix);
      res = res.concat(matrix.shift());
    }
    return res;
  }
  function rotateMatrix(matrix) {
    if (matrix[0].length === undefined) return matrix; // 数组为一维数组时，直接返回原数组
    const rows = matrix.length,
      cols = matrix[0].length,
      newMatrix = [];
    for (let j = cols - 1; j >= 0; j--) {
      const tempMatrix = [];
      for (let i = 0; i < rows; i++) {
        tempMatrix.push(matrix[i][j]);
      }
      newMatrix.push(tempMatrix);
    }
    return newMatrix;
  }