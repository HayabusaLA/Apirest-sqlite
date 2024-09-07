const express = require("express");
const app = express();
require('dotenv').config({path: __dirname + '/.env'});
const db = require("./database.js");
const { getUsers, getUser, createUser, updateUser, deleteUser } = require('./controllers/userController');
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const port = process.env.PORT || 8080;

const products = require('./routes/product.js');

// products endpoints
app.use('/api/product', products);

// user endpoints
app.get("/api/users", (req, res, next) => {
   getUsers(req, res);
});

app.get("/api/user/:id", (req, res, next) => {
   getUser(req, res);
});

app.post("/api/user/", (req, res, next) => {
    createUser(req, res);
});

app.patch("/api/user/:id", (req, res, next) => {
   updateUser(req, res);
});

app.delete("/api/user/:id", (req, res, next) => {
   deleteUser(req, res);
});

// Start server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


// Start server
app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});
