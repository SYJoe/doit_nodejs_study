const express = require('express');
const app = express();

app.use(express.json()); 
app.set('view engine', 'ejs'); 

app.get('/', function (request, response) {
    response.send('NodeJS-DoiT_res_method');
});

app.get('/getapi', function(request, response) {
    let data = "data";
    let login = false;
    
    response.send(data);

    response.download("./datafile");

    response.json(data);

    response.redirect("/redirect");

    response.render('index');

    if(login) {
        response.sendStatus(200);
    }
    else {
        response.sendStatus(500);
    }
});

app.get('/redirect', function(request, response) {
    let data = "redirect";
    response.send(data);

});

app.listen(8000, function() {
    console.log("listening...")
})