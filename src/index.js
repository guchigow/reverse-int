module.exports = function reverse (n) {
    let str = Math.abs(n).toString();
    let rev_arr =  str.split('').reverse();
    return Number(rev_arr.join(''));
}
