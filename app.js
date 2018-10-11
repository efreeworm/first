const express = require('express');
const mongoose = require('mongoose');
const path = require("path");
const bodyParser = require("body-parser");

const uri = 'mongodb://test:123456@127.0.0.1:27017/first';
global.db = mongoose.createConnection(uri,{useNewUrlParser: true});

const app = express();
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: false
}));

const routes = require('./routes');
routes(app);

let port = 4200
app.listen(port, function () {
    console.log('listening on http://localhost:%s',port);
});


