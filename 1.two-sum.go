/*
 * @lc app=leetcode id=1 lang=golang
 *
 * [1] Two Sum
 * 思路：
 * 利用一个 hashmap
 * key: array value
 * value: array index
 * 遍历数组
 * 如果 hashmap[target - value] 存在
 * 返回当前 索引 和 hashmap[target - value]
 */

package leetcode

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
