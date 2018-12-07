// 有一个 n 位十进制整数 i, 将其划分为 k 个整数，这 k 个整数的乘积称为 i 的一个 k 乘积。 对于给定的 和 k, 求 i 的最大 k 乘积
// Kn = max()

o = XMLHttpRequest.prototype.open;
XMLHttpRequest.prototype.open = function () {
    this
}

var xhr = new XMLHttpRequest();
console.log('UNSENT', xhr.readyState); // readyState 为 0

xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log(xhr.responseText)
    }
}

xhr.open('GET', '/api', true);
console.log('OPENED', xhr.readyState); // readyState 为 1

xhr.onprogress = function () {
    console.log('LOADING', xhr.readyState); // readyState 为 3
};

xhr.onload = function () {
    console.log('DONE', xhr.readyState); // readyState 为 4
};


xhr.send(null);