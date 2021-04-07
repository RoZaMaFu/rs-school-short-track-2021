function isMAC48Address(mac) {
  if (mac.split('-').join('').length !== 12) {
    return false;
  }
  const regex = /[^A-F0-9]/g;
  return !regex.test(mac.split('-').join(''));
}

module.exports = isMAC48Address;
