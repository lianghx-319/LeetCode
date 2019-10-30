const { swap } = require("../utils");

function shell(nums) {
    let len = nums.length;
    let gap = 1;
    while (gap < len / 3) {
        gap = ~~(gap * 3 + 1)
    }
    while (gap >= 1) {
        for (let i = gap; i < len; i++) {
            for (let j = i; j >= gap && nums[j] < nums[j - gap]; j -= gap) {
                swap(nums, j, j - gap);
            }
        }
        gap = ~~(gap / 3)
    }

    return nums
}

module.exports = shell;
module.exports.default = module.exports;