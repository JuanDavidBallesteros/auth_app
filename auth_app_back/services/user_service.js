"use strict";
const { User } = require("../models");
const hash_service = require("./hash_service");

const user_service = {
  // Create and update a user
  create_update: async function (data) {
    let { _id, passwordUpdated, passwordUserUpdated, ...user } = data;

    let _document = await User.findOne({
      $or: [{ _id: _id }, { username: user.username }],
    });

    if(passwordUserUpdated || passwordUpdated){
        const { username, isAdmin, lastIngress } = _document
        if (_document){
            const password = await hash_service.hash(user.password, user.username.length)
            const _id = _document._id.toString()
            //console.log(_id)
            _document = await User.updateOne({ _id: _id }, { _id, username, isAdmin, lastIngress, password });
            _document = await User.findOne({ _id: _id});
        }
        return _document;
    }

    if (!_document) {
      const size = (await User.find()).length
      
      _document = new User();
      _document._id = _id;
      user["password"] = await hash_service.hash(
        user.password,
        user.username.length
      );
      if(size == 0){
        user["isAdmin"] = true;
      }
      for (const property in user) {
        //console.log(user[property])
        _document[property] = user[property];
      }

      _document = await _document.save();
    } else {
        _document = await User.updateOne({ _id: _id }, { ...user });
        _document = await User.findOne({ _id: _id });
    }
    return _document;
  },

  // Get one user by their id
  get_one: async function (_id) {
    const _document = await User.findOne({ _id: _id });
    return _document;
  },

  // Get all users
  get_all: async function () {
    const _documents = await User.find();
    return _documents;
  },

  // Delete one user by their id
  delete_one: async function (_id) {
    const _document = await User.findOne({ _id: _id });
    await _document.remove();
    return _document;
  },

  // Get one user by their username
  get_by_username: async function (username) {
    const _document = await User.findOne({ username: username });
    return _document;
  },
};

module.exports = user_service;
