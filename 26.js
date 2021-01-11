
/**
 * All arrangements of strings
 * input: "abc"
 * output: ["abc","acb","bac","bca","cab","cba"]
 * @param {string} str
 * @return {string[]}
 */
var permutation = function(str) {
    let res = [];

    if (str.length <= 0) return res;
    let arr = [...str];

    res = permutate(arr, 0, res);
    res = [...new Set(res)];
    res.sort();
    return res;
};
var permutate = function(arr, index, res) {
    if (arr.length === index) {
        return res.push(arr.join(''));
    }
    for (let i = index; i < arr.length; i++) {
        [arr[index], arr[i]] = [arr[i], arr[index]];
        permutate(arr, index + 1, res);
        [arr[index], arr[i]] = [arr[i], arr[index]];
    }
    return res;
}

// other version 
// 回溯法
var permutation2 = function(str) {
    let res = [];

    const pStr = '';

    if (str.length <= 0) return res;

    arr = [...str];
    res = permutate2(arr, pStr, res);
    return res;
}
var permutate2= function(arr, pStr, res) {
    if (arr.length === 0) return res.push(pStr);
    const isRepeated = new Set();

    for(let i = 0; i < arr.length; i++) {
        if (!isRepeated.has(arr[i])) {
            const char = arr.splice(i, 1)[0];

            pStr += char;
            permutate2(arr, pStr, res);
            arr.splice(i, 0, char); // reback
            pStr = pStr.slice(0, pStr.length - 1);
            isRepeated.add(char);
        }
    }

    return res;
}