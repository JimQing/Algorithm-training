/**
 * Count the number of times that a number appears in the sorted array
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    return helper(nums, target) - helper(nums, target - 1);
};
var helper = function(nums, target) {
    let i = 0; let j = nums.length - 1;

    while(i <= j) {
        let m = ~~((i + j) / 2);

        if (nums[m] <= target) i = m + 1;
        else j = m - 1;
    }

    return i;
}