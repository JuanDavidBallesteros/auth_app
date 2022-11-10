require('dotenv').config();
const mongoose = require("mongoose");

async function main(callback) {
	let URI = process.env.MONGO_DATABASE_URI; 
    let dbConfiguration = { useNewUrlParser: true, useUnifiedTopology: true }
    try { 
        const connection = await mongoose.connect(
            process.env.MONGODB_URI, 
            dbConfiguration
        );
        await callback(connection);
    } catch (e) {
        console.error(e);
        throw new Error('Unable to Connect to Database')
    }
}

module.exports = main;