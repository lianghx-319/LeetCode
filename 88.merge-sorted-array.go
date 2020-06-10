/*
 * @lc app=leetcode id=88 lang=golang
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
func merge(nums1 []int, m int, nums2 []int, n int) {
	i1, i2 := m-1, n-1
	for end := len(nums1) - 1; end >= 0 && i2 >= 0; end-- {
		if i1 >= 0 && nums1[i1] > nums2[i2] {
			nums1[end] = nums1[i1]
			i1--
		} else {
			nums1[end] = nums2[i2]
			i2--
		}
	}
}

// @lc code=end

