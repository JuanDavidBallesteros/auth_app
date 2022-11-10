'use strict';
require('dotenv').config({ path: `${process.env.NODE_ENV}.env` });
const express = require('express');
const routes = require('./routes.js');
const db = require('./db.js');
const bodyParser = require('body-parser');
const cors = require('cors');

/** Initializing our express app */
const app = express();

/** Middlewares */
app.use(bodyParser.urlencoded({ extended: "false" }));
app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

/** Database connection Sending a function as a parameter */
db(async client => {
	console.log("Base de datos conectada.")
	routes(app, client)
	app.use((_, res) => { res.status(404).type('text').send('Not Found'); });
}).catch(e => {
	console.error("Error conectando a la base de datos:")
	console.error(e)
	app.route('/').get((_, res) => { res.status(404).type('text').send("Database doesn't available") });
});

/** Stating our express Service in specific Enviroment Port */
app.listen(process.env.SERVICE_PORT, () =>
	console.log(`api-core listening on port ${process.env.SERVICE_PORT}!`),
);
