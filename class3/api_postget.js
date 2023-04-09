const express = require('express');
const app = express();

app.use(express.json()); 

app.get('/', function (request, response) {
    response.send('NodeJS-DoiT_3');
});

// POST로 받아오는 데이터를 저장할 변수, 데이터베이스 역할
let birth_year;
let birth_month;
let birth_date;

// POST API 정의
app.post('/postapi', function(request, response) {
    birth_year = request.body.birth_year;
    birth_month = request.body.birth_month;
    birth_date = request.body.birth_date;

    console.log("[POST] DATA CHANGE : " + birth_year + "." + birth_month + "." + birth_date);
    response.send("post success!");
});

// GET API 정의
app.get('/getapi', function(request, response) {
    let birthday = birth_year + "." + birth_month + "." + birth_date;
    console.log("[GET] DATA : " + birthday);
    response.send({birthday : birthday});
});

// 8000번 포트에서 API 요청을 기다리는중(listening)
app.listen(8000, function() {
    console.log("listening...")
})