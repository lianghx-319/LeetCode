/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.65%)
 * Total Accepted:    535.4K
 * Total Submissions: 2.2M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 * 
 * Example 1:
 * 
 * 
 * Input: 123
 * Output: 321
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: -123
 * Output: -321
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: 120
 * Output: 21
 * 
 * 
 * Note:
 * Assume we are dealing with an environment which could only store integers
 * within the 32-bit signed integer range: [−231,  231 − 1]. For the purpose of
 * this problem, assume that your function returns 0 when the reversed integer
 * overflows.
 * 
 */
/**
 * @param {number} x
 * @return {number}
 */
const MAX = 2 ** 31 - 1;
const MIN = -MAX;
var reverse = function(x) {
    let rev = 0;
    while(x != 0) {
        let pop = x % 10;
        x = ~~(x / 10);
        if (rev > MAX / 10 || (rev == MAX / 10 && pop > 7)) return 0;
        if (rev < MIN / 10 || (rev == MIN / 10 && pop < -8)) return 0;
        rev = rev * 10 + pop
    }
    return rev
};
