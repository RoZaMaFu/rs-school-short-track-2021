const ListNode = require('../extensions/list-node');

function removeKFromList(l, k) {
  let currentList = l;
  let currentValue = currentList.value;
  const result = [];
  while (currentList) {
    result.push(currentValue);
    currentList = currentList.next;
    if (currentList) {
      currentValue = currentList.value;
    }
  }
  return result.filter((digit) => digit !== k).reverse().reduce((acc, cur) => {
    if (acc) {
      const node = new ListNode(cur);
      node.next = acc;
      return node;
    }

    return new ListNode(cur);
  }, null);
}

module.exports = removeKFromList;
