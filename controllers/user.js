const UserModel = require('../models/user');
const UserService = require('../services/user')
module.exports = {
  /**
   * 
   * @param { email, password } req 
   * @param {*} res 
   * @returns 
   */
  async registerUser(req, res) {
    console.log('request body', req.body);

    const { email } = req.body;
    //Check If User Exists
    const foundUser = await UserModel.findOne({ email });
    if (foundUser) {
      return res.status(403).json({ error: 'Email is already in use' });
    }

    const user = await UserService.addUser(req.body);

    return res.json(user);
  },

  async login(req, res) {
    console.log('request body', req.body);

    const user = await UserModel.create(req.body);

    return res.json(user);
  }
}