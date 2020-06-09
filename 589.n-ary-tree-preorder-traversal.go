/*
 * @lc app=leetcode id=589 lang=golang
 *
 * [589] N-ary Tree Preorder Traversal
 */

// @lc code=start
/**
 * Definition for a Node.
 * type Node struct {
 *     Val int
 *     Children []*Node
 * }
 */

func preorder(root *Node) []int {
	if root == nil {
		return nil
	}
	stack, output := []*Node{root}, []int{}
	for len(stack) > 0 {
		root = stack[0]
		output = append(output, root.Val)
		stack = stack[1:]
		if len(root.Children) > 0 {
			stack = append(root.Children, stack...)
		}
	}
	return output
}

// @lc code=end

