const swap = require("./swap.js");
const rand = require("./random.js")

function shuffle (arr) {
    for (let i = 0; i < arr.length; i++) {
        let r = rand.intn(i + 1);
        swap(arr, i, r);    
    }
    return arr
}

module.exports = shuffle;
module.exports.default = module.exports;