function selectionSort(nums) {
    let minIndex, temp;
    for (let i = 0; i < nums.length - 1; i++) {
        minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }

        temp = nums[i];
        nums[i] = nums[minIndex];
        nums[minIndex] = temp;
    }

    return nums;
}

console.log(selectionSort([23, 423, 123, 5234, 25, 232, 635, 723, 412, 745]))