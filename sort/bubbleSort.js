function bubbleSort(nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - 1 - i; j++) {
            if (nums[j] > nums[j + 1]) {
                let temp = nums[j + 1];
                nums[j + 1] = nums[j];
                nums[j] = temp;
            }
        }
    }

    return nums
}

console.log(bubbleSort([23,423,123,5234,25,232,635,723,412,745]))