const firebase = require('firebase');

const userDb = firebase.database();

module.exports = {
  async addContact(params) {

    const { userId } = params;

    return userDb.ref(userId).push(params);

  }
}