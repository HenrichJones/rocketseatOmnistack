const express = require('express');

const routes = express.Router();

routes.get('/', (req, resp) => {
    return resp.json({ message: `Hello ${req.query.name}`});
});

routes.post('/devs', (req, resp) => {
    return resp.json(req.body);
});

module.exports = routes;