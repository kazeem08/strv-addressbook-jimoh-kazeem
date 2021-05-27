const bcrypt = require('bcrypt');
const _ = require('lodash')
const UserModel = require('../models/user');
const UserService = require('../services/user');

module.exports = {
  /**
   * 
   * @param { email, password } req 
   * @param {*} res 
   * @returns 
   */
  async registerUser(req, res) {

    const data = req.body;
    const { email, password } = data;

    //Check If User Exists
    const foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ error: 'Email is already in use' });
    }

    // generate salt
    const salt = await bcrypt.genSalt();

    // hash password with generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // update user data
    data.password = hashedPassword;
    data.salt = salt;

    const user = await UserService.addUser(data);

    return res.json(_.pick(user, ['_id', 'email']));
  },

  async login(req, res) {
    console.log('request body', req.body);
    const { email, password } = req.body;

    try {
      //Check If User Exists
      let foundUser = await UserModel.findOne({ email });

      // Validate user credentials
      if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
        return res.json({ error: 'Invalid username/password' });
      }

      // generate token
      const token = await UserService.login(foundUser.id)

      return res.json(token);

    } catch (e) {
      res.json(e)
    }

  },

  async getUsers(req, res) {
    console.log('HERERRERR', req.user)
    return res.json(await UserModel.find());
  }
}