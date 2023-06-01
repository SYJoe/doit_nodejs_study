const express = require('express');
const session = require('express-session');
const postsRouter = require("./posts");
const userRouter = require("./user");
const userSessionRouter = require("./user_session");
const app = express();

app.use(session({
    secret: 'secretkey',
    resave: false,
    saveUninitialized: true
  }));
app.use(express.json()); 
app.use('/posts', postsRouter);
app.use('/user', userSessionRouter);

app.get('/', function (request, response) {
    response.send('NodeJS-DoiT_blog-post');
});

app.listen(8000, function() {
    console.log("listening...")
})