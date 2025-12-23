const http = require("http");

const server = http.createServer((req, res) => {
    res.end("Hello from server!");
}
).listen(3000);