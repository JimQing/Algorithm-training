/**
 * Maximum sum of consecutive subarrays
 * 连续子数组和的最大值
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (!nums || !nums.length)  return;
    let res = ~~nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] += Math.max(~~nums[i-1], 0);
        res = Math.max(nums[i], res);
    }
    return res;
};