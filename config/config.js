const { connection } = require("mongoose")
require('dotenv').config()
const url = process.env.MONGO_DB_URL

// set mongodb connection
module.exports = {
    url : url
};