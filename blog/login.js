var mysql = require('mysql');
var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'nodejs'
});

connection.connect();

connection.query('CREATE TABLE USER (' +
 'ID CHAR(10) PRIMARY KEY, ' +
 'NAME CHAR(10) NOT NULL, ' + 
 'PASSWORD CHAR(20) NOT NULL)', function(err, rows, fields)
 {
    if(!err) {
        console.log(rows);
        
    }
    else {
        console.log("err : " + err);
    }
 })

const express = require('express');
const app = express();

app.use(express.json()); 

app.post('/register', function (req, res) {
    var sql = 'INSERT INTO USER(ID, NAME, PASSWORD) VALUES(?, ?, ?)';
    var params = [req.body.id, req.body.name, req.body.password];
    connection.query(sql, params, function(err, rows) {
        if(!err) {
            res.send(rows);
        } 
        else {
            res.send(err);
            console.log(err);
        }
    });
});

app.post('/login', function (req, res) {
    var sql = 'SELECT * FROM USER';
    connection.query(sql, function(err, rows) {
        if(!err) {
            res.send("Welcome " + rows.find(
                function(element) { 
                    if(element.ID == req.body.id && element.PASSWORD == req.body.password) 
                        return true;
                }
            ).NAME + "!");
        } 
        else {
            res.send(err);
        }
    })
});

app.listen(8000, function() {
    console.log("listening...")
})