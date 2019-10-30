const rand = Object.create(null);

// 仅支持正整数
function int(start, end) {
    return ~~(Math.random() * (end - start) + start);
}

function havaSameNum(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) return true
    }
    return false;
}

// 生成一个[0, n) 的左开右闭区间的随机整数
rand.intn = function (n) {
    return int(0, n);
};

// 生成一个[start, end) 的左开右闭区间的随机整数
rand.int = int

// 生成一个长度为 n 的可能重复正整数数组
rand.intArray = function(n, start, end) {
    let arr = [];
    for (let i = 0; i < n; i++) {
        arr.push(int(start, end))
    }
    return arr;
}

module.exports = rand;
module.exports.default = module.exports;