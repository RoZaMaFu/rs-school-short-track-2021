function removeKFromList(l, k) {
    l.map((int, i) => {
        if(int  === k ){
            l.splice(i, 1)
        }
    })
    return l
  }

module.exports = removeKFromList;
