function getEmailDomain(email) {
  return email.split('@')[1];
}

module.exports = getEmailDomain;

