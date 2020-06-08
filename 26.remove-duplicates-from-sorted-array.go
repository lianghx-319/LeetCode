/*
 * @lc app=leetcode id=26 lang=golang
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
func removeDuplicates(nums []int) int {
	n := len(nums)
	if n < 2 {
		return n
	}

	left, right := 0, 1
	for right < n {
		if nums[left] != nums[right] {
			nums[left+1] = nums[right]
			left++
		}
		right++
	}
	return left + 1
}

// @lc code=end

