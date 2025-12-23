const express = require("express");
const app = express();

// Home route
app.get("/", (req, res) => {
    res.send("Hello from Express");
});

// Users route
app.get("/users", (req, res) => {
    res.json([
        { id: 1, name: "Alice" },
        { id: 2, name: "Bob" }
    ]);
});

// Start server
app.listen(3000, () => {
    console.log("Express server running on http://localhost:3000");
});
