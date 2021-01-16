/**
 * Find the number that occurs more than half the time in the array
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    if (!nums || nums.length === 0) return 0;
    const mid = nums.length >> 1;

    qulikSort(nums, 0, nums.length - 1, mid);

    return nums[mid];
};

var qulikSort = function (nums, start, end, mid) {
    if (start >= end) return;
    let centerPovit = partition(nums, start, end);

    if (centerPovit > mid) {
        qulikSort(nums, start, centerPovit - 1, mid);
    } else if (centerPovit < mid) {
        qulikSort(nums, centerPovit + 1, end, mid);
    } else {
        return;
    }
}

var partition = function(arr, start, end) {
    let pivot = start;
    index = start + 1;

    for(let i = index; i <= end; i++) {
        if (arr[i] < arr[pivot]) {
            const temp = arr[index];
            arr[index] = arr[i];
            arr[i] = temp;
            index++;
        }
    }
    const temp = arr[index - 1];
    arr[index - 1] = arr[pivot];
    arr[pivot] = temp;

    return index - 1;
}