/*
 * @lc app=leetcode id=11 lang=golang
 *
 * [11] Container With Most Water
 * 双指针遍历
 * 面积 = min(左指针值, 右指针值) * (右指针 - 左指针)
 * 比较两个指针的值，保留值较大的指针，值较小的指针右移或者左移
 * 直到右指针小于等于左指针
 */

package leetcode

// @lc code=start
func maxArea(height []int) int {
	temp, max, left, right := 0, 0, 0, len(height)-1
	for left < right {
		if heightL, heightR, dist := height[left], height[right], right-left; heightL > heightR {
			temp = dist * heightR
			right--
		} else {
			temp = dist * heightL
			left++
		}

		if temp > max {
			max = temp
		}
	}
	return max
}

// @lc code=end
