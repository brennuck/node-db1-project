const express = require('express');

const Router = require('./router.js');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.send('<h3>NODE</h3>');
})

server.use('/accounts', Router);

module.exports = server;