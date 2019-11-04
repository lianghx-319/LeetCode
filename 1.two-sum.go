/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 */

// @lc code=start
func twoSum(nums []int, target int) []int {
	targetMap := make(map[int]int, len(nums))

	for i, value := range nums {
		if j, ok := targetMap[target-value]; ok {
			return []int{j, i}
		}

		targetMap[value] = i
	}

	return nil
}

// @lc code=end

