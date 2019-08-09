const express =  require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

mongoose.connect('mongodb+srv://jonesrich:@Cedebb6e32@omnistack1-xsbyf.mongodb.net/omnistack8?retryWrites=true&w=majority', {
    useNewUrlParser: true
});

const server = express();

server.use(express.json());
server.use(routes);

server.listen(3333);

