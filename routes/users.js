const route = require('../config/express');
const UserController = require('../controllers/user');
const passport = require('passport');

require('../config/passport')


route.post('/auth', async (req, res) => UserController.login(req, res));


route.post('/', async (req, res) => UserController.registerUser(req, res));

route.get('/', passport.authenticate('jwt', { session: false }), async (req, res) => UserController.getUsers(req, res));


module.exports = route;