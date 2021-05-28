const bcrypt = require('bcrypt');
const UserModel = require('../models/user');
const UserService = require('../services/user');
const { userSchema } = require('../lib/schemaValidator');

module.exports = {
  async registerUser(req, res) {

    const data = req.body;
    try {
      const { email, password } = data;

      //Check If User Exists
      const foundUser = await UserModel.findOne({ email });
      if (foundUser) {
        return res.errorResponse({
          code: 409,
          message: 'Email is already in use',
        });
      }

      // generate salt
      const salt = await bcrypt.genSalt();

      // hash password with generated salt
      const hashedPassword = await bcrypt.hash(password, salt);

      // update user data
      data.password = hashedPassword;
      data.salt = salt;

      const user = await UserService.addUser(data);

      const token = await UserService.login(user.id);
      res.cookie('userToken', { token }, {});

      return res.successResponse({
        code: 200,
        message: 'Data fetched successfully',
        response: user,
      });

    } catch (e) {
      return res.errorResponse({
        message: 'Internal server error',
      });
    }

  },

  async login(req, res) {

    try {
      const { email, password } = req.body;

      //Check If User Exists
      let foundUser = await UserModel.findOne({ email });

      // Validate user credentials
      if (!foundUser || !(await bcrypt.compare(password, foundUser.password))) {
        return res.errorResponse({
          code: 401,
          message: 'Invalid username/password',
        });
      }

      // generate token
      const token = await UserService.login(foundUser.id)

      return res.successResponse({
        code: 200,
        message: 'Data fetched successfully',
        response: { token },
      });

    } catch (e) {
      return res.errorResponse({
        message: 'Internal server error',
      });
    }
  },

}