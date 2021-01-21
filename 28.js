/**
 * Get the smallest k-th number in the array
 * @param {*} arr 
 * @param {*} k 
 */
var getLeastNumbers = function(arr, k) {
    if (!arr || arr.length === 0 || k === 0) return [];
    quikySort(arr, 0, arr.length, k);

    return arr.splice(0, k);
};
function quikySort(arr, start, end, k) {
    if (start >= end || start > k) return;
    const pivotIndex = partition(arr, start, end);

    quikySort(arr, start, pivotIndex - 1, k);
    quikySort(arr, pivotIndex + 1, end, k);
}

function partition(arr, start, end) {
    let pivot = start,
    index = pivot + 1;

    for (let i = index; i <= end; i++) {
        if (arr[i] < arr[pivot]) {
            let temp = arr[i];
            arr[i] = arr[index];
            arr[index] = temp;
            index++;
        }
    }

    const temp = arr[index - 1];

    arr[index - 1] = arr[pivot];
    arr[pivot] = temp;

    return index - 1;
}

// other version
// Unduplicated arrays (不重复的数组)
function findKMinArr(arr, k) {
    if (!arr || arr.length === 0 || k === 0) return [];
    let left = 0, right = arr.length - 1;
    let key = partition2(arr, left, right);

    while(key !== k-1) {
        if (key > k-1) {
            key = partition2(arr, left, key - 1);
        } else {
            key = partition2(arr, key + 1, right);
        }
    }

    const res = arr.splice(0, k + 1);
    res.sort((a ,b)=> a - b);

    return res;
}
function partition2(arr, left, right) {
    let key = arr[left];

    while(left<right) {
        while(key <= arr[right] && left < right) {
            right --;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];

        while(key >= arr[left] && left < right) {
            left ++;
        }
        [arr[left], arr[right]] = [arr[right], arr[left]];
    }
    return left;
}

// const arr= [1, 11,2,14,5,26,7];

// console.log(findKMinArr(arr, 2));