const express = require('express');
const jwt = require('jsonwebtoken');
var http = require('http');
var path = require('path');
const user = require('./routes/user');

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'dist/JWTAuth')));
app.use('/login', express.static(path.join(__dirname, 'dist/JWTAuth')));
app.use('/home', express.static(path.join(__dirname, 'dist/JWTAuth')));
app.use('/api', user);


var port = process.env.PORT || 4000;
app.set('port', port);
var server = http.createServer(app);


server.listen(port, () => {
  console.log('server running on port 4000')});

module.exports = app;

