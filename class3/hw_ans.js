const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', function (request, response) {
    response.send('NodeJS-DoiT_hw_ans');
});

let num1;
let num2;

app.post('/nums', function(request, response) {
    num1 = request.body.num1;
    num2 = request.body.num2;
    response.send("post success!");
});

app.get('/add', function(request, response) {
    let add = num1 + num2;
    response.send({add : add});
});

app.get('/sub', function(request, response) {
    let sub = num1 - num2;
    response.send({sub : sub});
});

app.get('/div', function(request, response) {
    let div = num1 / num2;
    response.send({div : div});
});

app.get('/mul', function(request, response) {
    let mul = num1 * num2;
    response.send({mul : mul});
});

app.listen(8000, function() {
    console.log("listening...")
})