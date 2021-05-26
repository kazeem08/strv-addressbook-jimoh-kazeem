const route = require('../config/express');
const UserController = require('../controllers/user');

route.get('/:id', (req, res) => res.send(`User has id ${req.params.id}`));


route.post('/', (req, res) => UserController.registerUser(req, res));

module.exports = route;