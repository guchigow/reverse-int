module.exports = function reverse(n) {
  const str = Math.abs(n).toString();
  const revArr = str.split('').reverse();
  return Number(revArr.join(''));
};
