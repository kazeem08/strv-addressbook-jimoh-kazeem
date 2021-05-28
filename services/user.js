const UserModel = require("../models/user");
const { generateToken } = require("../lib/generateToken");

module.exports = {
  async addUser(payload) {
    const user = await UserModel.create(payload);

    return user;
  },

  async login(id) {
    const token = await generateToken(id);

    return token;
  },
};
