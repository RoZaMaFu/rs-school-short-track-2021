function deleteDigit(n) {
  let maxNum = 0;
  const numArr = n.toString().split('');
  numArr.map((num, i) => {
    const tempArr = Array.from(numArr);
    tempArr.splice(i, 1);
    const currentNumber = Number(tempArr.join(''));
    if (currentNumber > maxNum) {
      maxNum = currentNumber;
    }
    return num;
  });
  return maxNum;
}

module.exports = deleteDigit;

