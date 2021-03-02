/**
 * Find the first and last position of an element in a sorted array
 * input: nums = [5,7,7,8,8,10], target = 8
 * output: [3,4]
 * input: nums = [5,7,7,8,8,10], target = 6
 * output: [-1,-1]
 * input: nums = [], target = 0
 * output: [-1,-1]
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    if (nums.length <= 0) return [-1, -1];

    let left = nums.findIndex(item=>item === target);

    if (left === -1) return [-1, -1];
    else {
        let right = left;
        while(right < nums.length && nums[right] === target) {
            right++
        }
        return [left, right - 1];
    }
};

// 二分法（dichotomy）
var searchRange2 = function(nums, target) {
    let pos = [-1, -1];

    if (nums.length === 0) return pos;

    let temp1 = searchFirstPosition(nums, target);
    if (temp1 >= nums.length || nums[temp1] !== target) {
        return pos;
    }
    let temp2 = pos[1] = searchFirstPosition(nums, target + 1);
    pos[0] = temp1;
    pos[1] = temp2 - 1;
    return pos;
}

var searchFirstPosition = function(nums, target) {
    let left = 0, right = nums.length;

    while(left < right) {
        let mid = (left + right) >> 1;

        if (nums[mid] >= target) right = mid;
        else left = mid + 1;
    }

    return right;
}