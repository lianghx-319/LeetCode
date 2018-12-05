function shellSort(nums) {
    let len = nums.length;
    let temp;
    let gap = 1;
    while (gap < len / 3) {
        gap = gap * 3 + 1
    }
    for (gap; gap > 0; gap = ~~(gap / 3)) {
        for (let i = gap; i < len; i++) {
            temp = nums[i];
            for (var j = i - gap; j > 0 && nums[j] > temp; j -= gap) {
                nums[j + gap] = nums[j]
            }
            nums[j + gap] = temp
        }
    }

    return nums
}

console.log(shellSort([23, 423, 123, 5234, 25, 232, 635, 723, 412, 745]))