/*
 * @lc app=leetcode id=24 lang=golang
 *
 * [24] Swap Nodes in Pairs
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func swapPairs(head *ListNode) *ListNode {
	fakeHead := &ListNode{Next: head}
	pre := fakeHead
	for pre.Next != nil && pre.Next.Next != nil {
		a := pre.Next
		b := a.Next
		pre.Next, b.Next, a.Next = b, a, b.Next
		pre = a
	}
	return fakeHead.Next
}

// @lc code=end

