function getSumOfDigits(n) {
  let sum = 0;
  n.toString().split('').map((digit) => {
    sum += Number(digit);
    return digit;
  });
  return sum.toString().length === 1 ? sum : getSumOfDigits(sum);
}

module.exports = getSumOfDigits;

