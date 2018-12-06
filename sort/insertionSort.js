const { swap } = require("../utils");

function insertion(nums) {
    nums = nums.concat([]);
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j > 0; j--) {
            if (nums[j] < nums[j - 1]) {
                swap(nums, j, j - 1);
            } else {
                break
            }
        }
    }
    return nums
}

module.exports = insertion;
module.exports.default = module.exports;