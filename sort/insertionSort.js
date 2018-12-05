function insertionSort(nums) {
    let pre, cur;
    for (let i = 1; i < nums.length; i++) {
        pre = i - 1;
        cur = nums[i];
        while(pre > 0 && nums[pre] > cur) {
            nums[pre + 1] = nums[pre];
            pre--;
        }
        nums[pre + 1] = cur;
    }
    return nums
}

console.log(insertionSort([23, 423, 123, 5234, 25, 232, 635, 723, 412, 745]))