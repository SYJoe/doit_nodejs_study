var mysql = require('mysql');

var connection = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '1234',
    database : 'nodejs'
});

connection.connect();

connection.query('CREATE TABLE POST (' +
'ID INT(10) AUTO_INCREMENT PRIMARY KEY, ' +
'TITLE CHAR(20) NOT NULL, ' + 
'BODY CHAR(100) NOT NULL, ' +
'AUTHORID CHAR(10) NOT NULL)', function(err, rows) {
    if(!err) {
        console.log(err);
    }
    else {
        console.log(err);
    }
});

const express = require('express');
const router = express.Router();

router.get('/', function (request, response) {
    var sql = 'SELECT * FROM POST';
    connection.query(sql, function(err, rows) {
        if(!err) {
            response.send(rows);
        }
        else {
            response.send(err);
        }
    })
});

router.get('/:id', function (request, response) {
    var sql = 'SELECT * FROM POST';
    connection.query(sql, function(err, rows) {
        if(!err) {
            response.send(rows.find({
                function(element) {
                    if(element.ID == request.params.id) {
                        return true;
                    }
                }
            }))
        }
        else {
            response.send(err);
        }
    });
});

router.post('/upload', function(request, response) {
    var sql = 'INSERT INTO POST(TITLE, BODY, AUTHORID) VALUES(?, ?, ?)';
    var params = [request.body.title, request.body.body, request.body.authorid];

    connection.query(sql, params, function(err, rows) {
        if(!err) {
            response.send("Add post!");
        }
        else {
            response.send(err);
        }
    })
});

router.post('/update/:id', function(request, response) {
    var sql = 'UPDATE POST SET TITLE=?, BODY=?, AUTHORID=? WHERE ID=?';
    var params = [request.body.title, request.body.body, request.body.authorid, request.params.id];

    connection.query(sql, params, function(err, rows) {
        if(!err) {
            response.send("Upadte post!");
        }
        else {
            response.send(err);
        }
    })
});

router.get('/delete/:id', function (request, response) {
    var sql = 'DELETE FROM POST WHERE ID=?';
    var params = [request.params.id];

    connection.query(sql, params, function(err, rows) {
        if(!err) {
            response.send("Delete post!");
        }
        else {
            response.send(err);
        }
    });
});

module.exports = router;