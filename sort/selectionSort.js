const { swap } = require("../utils");

function selection(nums) {
    nums = nums.concat([]);
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        swap(nums, j, minIndex)
    }
    return nums;
}

module.exports = selection;
module.exports.default = module.exports;