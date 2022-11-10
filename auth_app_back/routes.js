const statusController = require('./controller/statusController');
const usersController = require('./controller/usersController')
const authController = require('./controller/authController');

module.exports = function (app) {

	/*
	*  	Test and health Routes
	*/
	app.get('/ping', (req, res) => statusController.ping(req, res));

	/*
	*  	CRUD Routes
	*/
	app.post('/users', (req, res) => usersController.create(req, res));

	app.get('/users/:id', (req, res) => usersController.getOne(req, res));

	app.get('/users', (req, res) => usersController.getAll(req, res));

	app.delete('/users/:id', (req, res) => usersController.delete(req, res));

	/*
	*  	Auth Routes
	*/
	app.post('/users/auth', (req, res) => authController.auth(req, res));
}