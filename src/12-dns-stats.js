function getDNSStats(domains) {
  const appearanceObj = {};
  domains.map((domain) => {
    const toDNS = [];
    domain.split('.').map((dns) => {
      toDNS.unshift(dns);
      return dns;
    });
    let strDNS = '';
    toDNS.map((dns) => {
      strDNS += `.${dns}`;
      if (appearanceObj[strDNS]) {
        appearanceObj[strDNS]++;
      } else {
        appearanceObj[strDNS] = 1;
      }
      return dns;
    });
    return domain;
  });
  return appearanceObj;
}

module.exports = getDNSStats;
