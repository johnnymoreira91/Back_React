const express = require('express');
const routes = express.Router();
const bodyParser = require('body-parser');
const posts = require('../models/posts');
const cors = require('cors');
const wallet = require('../models/wallet.json');

var whiteList = ['http://localhost:3000', 'http://localhost:3001',
    'http://192.168.0.20:3000', 'http://localhost:3001/task/',
    'http://192.168.0.20:3001/task/http://192.168.0.20:3001/api/all', 'http://localhost:3001/api/all']

const options = {
    origin: whiteList,
};

routes.use(cors(options));

routes.get('/teste', (req, res) => {
    res.json(wallet)
})

routes.get('/all', (req, res) => {
    res.json(JSON.stringify(posts.getAll()))
    //res.json(posts);
});

routes.post('/new', bodyParser.json(), (req, res) => {
    //let id = generateID();
    let title = req.body.title;
    let description = req.body.description;

    //posts.push({id, title, description});
    posts.newPost(title, description);

    res.send("Post Adicionado")

});

module.exports = routes;