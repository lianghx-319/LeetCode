/*
 * @lc app=leetcode id=98 lang=golang
 *
 * [98] Validate Binary Search Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * type TreeNode struct {
 *     Val int
 *     Left *TreeNode
 *     Right *TreeNode
 * }
 */
func isValidBST(root *TreeNode) bool {
	min := -1
	prev := Inf
	return helper(root, prev)
}

func helper(root *TreeNode, prev *int) bool {
	if root == nil {
		return true
	}

	if !helper(root.Left, prev) {
		return false
	}

	if root.Val <= *prev {
		return false
	}

	*prev = root.Val

	return helper(root.Right, prev)
}

// @lc code=end

