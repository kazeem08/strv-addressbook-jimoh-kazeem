const UserModel = require('../models/user')

module.exports = {
  async addUser(payload) {

    const user = await UserModel.create(payload);

    return user;
  },

  async login(req, res) {
    console.log('request body', req.body);

    const user = await UserModel.create(req.body);

    return res.json(user);
  }
}