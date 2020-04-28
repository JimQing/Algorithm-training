/**
 * 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。 输入一个非递减排序的数组的一个旋转，输出旋转数组的最小元素。 例如数组{3,4,5,1,2}为{1,2,3,4,5}的一个旋转，该数组的最小值为1。 NOTE：给出的所有元素都大于0，若数组大小为0，请返回0。
 */

function findMinFormReverseArray(arr) {
    if (arr.length === 0) return 0;
    let min = 0;

    for (let index = 1; index < arr.length; index++) {
        let pre = index - 1;
        
        if (arr[pre] > arr[index]) {
            min = index;
            break;
        }
    }
    return arr[min];
}
console.log(findMinFormReverseArray([1,2,3,4,5]));

function findMinFormReverseArray(arr) {
    let left = 0,
    right = arr.length - 1;

    // O(logn)
    while(right - left > 1) {
        let mid = left + (right - left) >> 1;
        left = left + (right - left >> 1);
        
        if (arr[mid] > arr[right]) {
            left = mid;
        } else {
            right = mid;
        }
    }
    return Math.min(arr[left], arr[right]);
}