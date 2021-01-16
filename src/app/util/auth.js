const bcrypt = require('bcrypt');

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
}

exports.comparePassword = async (password, hash) => {
  return bcrypt.compare(password, hash);
}