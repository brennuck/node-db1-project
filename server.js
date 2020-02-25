const express = require('express');

const Router = require('./router.js');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/accounts', Router)

server.get('/', (req, res) => {
    res.send('<h3>NODE</h3>');
})

module.exports = server;