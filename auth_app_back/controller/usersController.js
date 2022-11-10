const UsersService = require('../services/user_service')


exports.create = async function (req, res) {
  try { 
    const data = req.body
    let userDocument = await UsersService.create_update(data)
    res.json({ data: userDocument });
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: e.message });
  }
};

exports.getOne = async function (req, res) {
  try {
    const id = req.params["id"]
    let userDocument = await UsersService.get_one(id)
    res.json({ data: userDocument });
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: e.message });
  } 
};


exports.getAll = async function (req, res) {
  try {
    let userDocuments = await UsersService.get_all()
    res.json({ data: userDocuments });
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: e.message });
  } 
};

exports.delete = async function (req, res) {
  try {
    const id = req.params["id"]
    let userDocument = await UsersService.delete_one(id)
    res.json({ data: userDocument });
  } catch (e) {
    console.error(e)
    res.status(500).send({ error: e.message });
  }   
};