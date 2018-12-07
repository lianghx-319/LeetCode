// 走楼梯
// 有N级台阶，每次只能走1步或者2步，有多少种走法
// 设答案为F(n)，F(n)的走法取决于最后一步是走两步或者走一步的走法 ===> F(n) = F(n - 1) + F (n - 2) n >= 3;
// 其实这个案例的答案是一个 斐波那契数列

function getClimbingWays(n) {
    if (n < 1) return 0;
    if (n === 1) return 1;
    if (n === 2) return 2;
    //保存前两个结果
    let a = 1;
    let b = 2;
    let result;
    for (let i = 3; i <= n; i++) {
        result = a + b;
        a = b;
        b = result;
    }
    return result
}