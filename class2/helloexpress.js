const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', function (request, response) {
    response.send('Hello express!');
});

let name;
let age;

app.post('/postapi', function(request, response) {
    name = request.body.name;
    age = request.body.age;
    response.send("post");
});

app.get('/getapi', function(request, response) {
    response.send({name : name, age : age});
});

app.listen(8000, function() {
    console.log("listening...")
})