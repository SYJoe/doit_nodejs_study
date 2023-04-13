const express = require('express');
const router = express.Router();

let data = [];

router.get('/', function (request, response) {
    // response.send(data);
    response.render('index', { data });
});

router.get('/:id', function (request, response) {
    // response.send(data[request.params.id]);
    let post = data[request.params.id]
    response.render('post', { post });
});

router.post('/upload', function(request, response) {
    data[request.body.id] = request.body;
    response.send("Add post!");
});

module.exports = router;