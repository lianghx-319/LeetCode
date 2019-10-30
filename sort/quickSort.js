function quickSort(nums, left, right) {
    let len = nums.length;
    left = typeof left != 'number' ? 0 : left,
    right = typeof right != 'number' ? len - 1 : right;
    if (left < right) {
        let partitionIndex = partition(nums, left, right);
        quickSort(nums, left, partitionIndex - 1);
        quickSort(nums, partitionIndex + 1, right);
    }
    return nums
}

function swap(arr, i, j) {
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

function partition(arr, left, right) {
    let pivot = left;
    let index = pivot + 1;
    for (let i = index; i <= right; i++) {
        if (arr[i] < arr[pivot]) {
            swap(arr, i, index);
            index++
        }
    }
    swap(arr, pivot, index - 1);
    return index - 1;
}

console.log(quickSort([23, 423, 123, 5234, 25, 232, 635, 723, 412, 745]))