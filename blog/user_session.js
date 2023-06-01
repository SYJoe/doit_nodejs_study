var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'nodejs'
});

connection.connect();

connection.query('CREATE TABLE USER (' +
  'ID CHAR(10) NOT NULL, ' +
  'NAME CHAR(10) NOT NULL, ' +
  'PASSWORD CHAR(20) NOT NULL)', function (err, rows) {
    if (!err) {
      console.log(err);
    }
    else {
      console.log(err);
    }
  });

const express = require('express');
const router = express.Router();

router.post('/register', function (req, res) {
  var sql = 'INSERT INTO USER(ID, NAME, PASSWORD) VALUES(?, ?, ?)';
  var params = [req.body.id, req.body.name, req.body.password];

  connection.query(sql, params, function (err, rows) {
    if (!err) {
      res.send(rows);
    }
    else {
      res.send(err);
      console.log(err);
    }
  })
})

router.post('/login', function (req, res) {
  var sql = 'SELECT * FROM USER';
  connection.query(sql, function (err, rows) {
    console.log(rows);
    if (!err) {
      var row = rows.find(
        function (element) {
          if (element.ID == req.body.id && element.PASSWORD == req.body.password) {
            return true;
          }
        }
      );
      if(!row) {
        res.send("존재하지 않는 아이디입니다.");
      }
      else {
        req.session.authenticated = {
          authorized: true,
          name: row.NAME,
          id: row.ID
        };
        res.send("Welcome " + row.NAME + "!");
      }
    }
    else {
      res.send(err);
    }
  })
});

router.post('/update', function (req, res) {
  var sql = 'UPDATE USER SET PASSWORD=? WHERE ID=?'
  var params = [req.body.password, req.body.id];
  connection.query(sql, params, function (err, rows) {
    if (!err) {
      res.send("Update password!")
    }
    else {
      res.send(err);
    }
  })
});

router.get('/logout', function (req, res) {
  req.session.destroy();
  res.send("로그아웃!")
});

router.get('/info', function (req, res) {
  if(!req.session.authenticated) {
    res.send("로그인이 필요합니다!");
  }
  else {
    res.send("이름 : " + req.session.authenticated.name + ", ID : " + req.session.authenticated.id);
  }
});

module.exports = router;