//node only server


const http = require("http");

const server = http.createServer((req, res) => {
    // Home route
    if (req.method === "GET" && req.url === "/") {
        res.writeHead(200, { "Content-Type": "text/plain" });
        return res.end("Hello from Node");
    }

    // Users route
    if (req.method === "GET" && req.url === "/users") {
        const users = [
            { id: 1, name: "Alice" },
            { id: 2, name: "Bob" }
        ];

        res.writeHead(200, { "Content-Type": "application/json" });
        return res.end(JSON.stringify(users));
    }

    // 404 fallback
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Route not found");
});

server.listen(3000, () => {
    console.log("Node server running on http://localhost:3000");
});
