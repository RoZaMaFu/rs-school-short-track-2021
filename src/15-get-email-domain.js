function getEmailDomain(email) {
  return email.split('@')[email.split('@').length - 1];
}

module.exports = getEmailDomain;
