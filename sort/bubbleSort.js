const {swap} = require("../utils");

function _bubble(nums) {
    nums = nums.concat([]);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length - i - 1; j++) {
            if (nums[j] > nums[j + 1]) {
                swap(nums, j, j + 1);
            }
        }
    }
    return nums
}

function bubble(nums) {
    nums = nums.concat([]);
    let k = nums.length;
    let flag = k;
    while (flag > 0) {
        k = flag;
        flag = 0;
        for (let j = 1; j < k; j++) {
            if (nums[j] < nums[j - 1]) {
                swap(nums, j, j - 1);
                flag = j;
            }
        }
    }
    return nums;
}

module.exports = bubble;
module.exports.default = module.exports;