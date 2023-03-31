const http = require("http");
const port = 8000;

const server = http.createServer(function (request, response) {
    response.send('Hello nodeJS!\n');
});
server.listen(port, () => {
    console.log("listening...");
});

console.log(server.address());
console.log('Server ', server.address().address,":",server.address().port);