/**
 * split odd and even numbers and keep the relative position
 */
function reOrderArray(arr) {
    let leftRes = [], rightRes = [];

    for (let index = 0; index < arr.length; index++) {
        
        if (arr[index] & 1) {
            // odd
            leftRes.push(arr[index]);
        } else {
            // even
            rightRes.push(arr[index]);
        }
    }
    return [...leftRes, ...rightRes];
}