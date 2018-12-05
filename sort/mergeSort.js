function merge(left, right) {
    let result = [];

    while (left.length > 0 && right.length > 0) {
        if (left[0] <= right [0]) {
            result.push(left.shift())
        } else {
            result.push(right.shift())
        }
    }

    while (left.length) result.push(left.shift())
    while (right.length) result.push(right.shift())

    return result;
}

function mergeSort(nums) {
    let len = nums.length;
    let middle = ~~(len / 2)
    if (len < 2) {
        return nums
    }
    let left = nums.slice(0, middle);
    let right = nums.slice(middle)
    return merge(mergeSort(left), mergeSort(right))
}

console.log(mergeSort([23, 423, 123, 5234, 25, 232, 635, 723, 412, 745]))