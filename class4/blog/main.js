const express = require('express');
const postsRouter = require("./posts");
const app = express();

app.use(express.json()); 
app.use('/posts', postsRouter);

app.get('/', function (request, response) {
    response.send('NodeJS-DoiT_blog-post');
});

app.listen(8000, function() {
    console.log("listening...")
})