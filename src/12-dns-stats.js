function getDNSStats(domains) {
    let appearanceObj = {}
    domains.map(domain => {
        let toDNS = []
        domain.split('.').map(dns => {
            toDNS.unshift(dns)
        })
        let strDNS = ''
        toDNS.map(dns => {
            strDNS += `.${dns}`
            appearanceObj.hasOwnProperty(strDNS) ? appearanceObj[strDNS]++ : appearanceObj[strDNS] = 1
        })
    })
    return appearanceObj
}

module.exports = getDNSStats;
