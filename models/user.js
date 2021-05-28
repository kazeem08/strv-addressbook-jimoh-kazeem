const mongoose = require('mongoose');
const { userSchema } = require('../lib/schemaValidator');

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true
  }
})

UserSchema.methods = {
  toJSON() {
    const { _id, email } = this;
    return {
      _id, email
    }
  }
}
module.exports = mongoose.model('User', UserSchema)