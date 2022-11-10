const hash_service = require("./hash_service");
const user_service = require("./user_service");

const auth_service = {

  authenticate: async function (username, password) {
    const user = await user_service.get_by_username(username);
    if(user){
      return await hash_service.compare(password, user.password);
    } else {
      return false;
    }
    
  },
};

module.exports = auth_service;
