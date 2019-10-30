// 钢条切割
// 给定一段长度为n英寸的钢条和一个价格表，求切割钢条方案，使得销售收益rn最大
// 长度 i 1  2  3  4  5  6  8  9  10
// 价格 p 1  5  8  9  10 17 20 24 30
// rn = max(pn, r1 + rn-1, r2 + rn-2, ... , rn-1 + r1)
// rn = max(pi + rn-i)

const price = [0, 1, 5, 8, 9, 10, 17, 20, 24, 30]

function bottomUpCutRod(n) {
    let r = [];
    for (let i = 0; i <=n; i++) {
        r[i] = 0;
    }
    for (let i = 1; i <= n; i++) {
        let q = -1;
        for (let j = 1; j <= i; j++) {
            q = Math.max(q, price[j] + r[i - j])
            // console.log(q)
        }
        r[i] = q;
    }

    return r[n]
}

console.log(bottomUpCutRod(8))