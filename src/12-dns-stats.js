/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
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
