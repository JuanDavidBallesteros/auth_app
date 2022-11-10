const auth_service = require("../services/auth_service");
const user_service = require("../services/user_service");

exports.auth = async function (req, res) {
  try {
    const { password, username } = req.body;
    const validation = await auth_service.authenticate(username, password);
    const user = validation ? await user_service.get_by_username(username) : null;
    res.json({ data: user });
  } catch (e) {
    console.error(e);
    res.status(500).send({ error: e.message });
  }
};
