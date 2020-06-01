/*
 * @lc app=leetcode id=20 lang=golang
 *
 * [20] Valid Parentheses
 */

// @lc code=start
type Stack []string

func (s *Stack) Pop() string {
	ns := *s
	v := ns[len(ns)-1]
	*s = ns[:len(ns)-1]
	return v
}

func isValid(s string) bool {
	var stack Stack
	bracketMap := map[string]string{
		")": "(",
		"]": "[",
		"}": "{",
	}

	for _, b := range s {
		if _, ok := bracketMap[string(b)]; !ok {
			stack = append(stack, string(b))
		} else if len(stack) == 0 || stack.Pop() != bracketMap[string(b)] {
			return false
		}
	}

	return len(stack) == 0
}

// @lc code=end

