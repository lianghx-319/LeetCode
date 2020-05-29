/*
 * @lc app=leetcode id=25 lang=golang
 *
 * [25] Reverse Nodes in k-Group
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * type ListNode struct {
 *     Val int
 *     Next *ListNode
 * }
 */
func reverseKGroup(head *ListNode, k int) *ListNode {
	pHead := &ListNode{Next: head}
	pre := pHead
	for shouldReverse(pre.Next, k) {
		pre2, pHead2, cur := reverseLinkedList(pre.Next, k)
		pHead2.Next, pre.Next = cur, pre2
		pre = pHead2
	}
	return pHead.Next
}

func shouldReverse(head *ListNode, k int) bool {
	for i := 0; i < k; i++ {
		if head == nil {
			return false
		}
		head = head.Next
	}
	return true
}

func reverseLinkedList(head *ListNode, k int) (*ListNode, *ListNode, *ListNode) {
	var pre *ListNode
	pHead, cur := head, head
	for i := 0; i < k; i++ {
		cur.Next, pre, cur = pre, cur, cur.Next
	}
	return pre, pHead, cur
}

// @lc code=end

