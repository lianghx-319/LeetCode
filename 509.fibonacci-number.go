/*
 * @lc app=leetcode id=509 lang=golang
 *
 * [509] Fibonacci Number
 */

// @lc code=start
func fib(N int) int {
	if N <= 1 {
		return N
	}
	n, m := 0, 1
	for i := 2; i <= N; i++ {
		n, m = m, n+m
	}
	return m
}

// @lc code=end

