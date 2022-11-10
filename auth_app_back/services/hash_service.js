const bcrypt = require("bcrypt");

const hash_service = {

  hash: function (password, salt) {
    return bcrypt.hash(password, salt);
  },

  compare: function (text, hash) {
    return bcrypt.compare( text, hash);
  },
};

module.exports =  hash_service;