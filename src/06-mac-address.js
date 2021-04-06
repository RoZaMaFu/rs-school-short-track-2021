function isMAC48Address(mac) {
    if(mac.split('-').join('').length !== 12){
        return false
    }
    let regex = /[^A-Z0-9]/g
    return !regex.test(mac.split('-').join(''))
  }

module.exports = isMAC48Address;
