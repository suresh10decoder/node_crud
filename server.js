// import packages
const express = require("express");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");

// create express app
const app = express();

// setup server port
const port = process.env.PORT || 4000

// parse requests of content-type - applicaton/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// configuring database 
const dbConfig = require("./config/config.js");
const mongoose = require("mongoose");

// configuring swagger
const swaggerUi = require("swagger-ui-express"),
swaggerDocument = require("./swagger.json");

// connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch( err => {
    console.log("Could not connect to the database.", err);
    process.exit();
});


// define a root/default route
app.get("/", (req, res) => {
    res.json({"message":"Welcome to Employee CRUD"})
});

// Require Employee routes
const EmployeeRoutes = require('./routes/Employee.js');
// using as middleware
app.use('/api', EmployeeRoutes);

// using swaggerDocument
app.use('/employee', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// listen for requests
app.listen(port, () => {
    console.log("Employee application server listening on port :", port)
});