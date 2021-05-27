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
    // console.log('request body', req.body);

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
    const { email, password } = req.body;

    //Check If User Exists
    let foundUser = await UserModel.findOne({ email });
    if (!foundUser) {
      return res.status(403).json({ error: 'Invalid username/password' });
    }



    const token = await UserService.login(foundUser.id)


    return res.json(token);
  },

  async getUsers(req, res) {
    console.log('HERERRERR', req.user)
    return res.json(await UserModel.find());
  }
}