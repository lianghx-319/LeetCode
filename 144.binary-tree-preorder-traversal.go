/*
 * @lc app=leetcode id=144 lang=golang
 *
 * [144] Binary Tree Preorder Traversal
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
func preorderTraversal(root *TreeNode) []int {
	if root == nil {
		return nil
	}
	output, stack := []int{}, []*TreeNode{root}
	for len(stack) > 0 {
		first := stack[0]
		output = append(output, first.Val)
		stack = stack[1:]
		if first.Right != nil {
			stack = append([]*TreeNode{first.Right}, stack...)
		}
		if first.Left != nil {
			stack = append([]*TreeNode{first.Left}, stack...)
		}
	}
	return output
}

// @lc code=end

