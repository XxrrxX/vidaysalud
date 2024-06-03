require('dotenv').config();
const hbs = require('hbs');
const Server = require('./models/server');
const server = new Server();
hbs.registerPartials(__dirname + '/views/partials', function (err) {});
server.listen();