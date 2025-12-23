/*******************************************************
 * EXPRESS SERVER LAB
 *
 * What you will build:
 * 1. Middleware chain
 * 2. Logger middleware
 * 3. JSON body parsing
 * 4. Routing
 * 5. Error handling (sync + async)
 *
 * Start server:
 *   node server.js
 *******************************************************/

const express = require("express");
const app = express();

/*******************************************************
 * TODO 1: LOGGER MIDDLEWARE
 *
 * Goal:
 * - Log METHOD URL
 * - Must call next()
 *******************************************************/
function logger(req, res, next) {
    // TODO:
    // console.log request method and url
    // call next()
}

/*******************************************************
 * TODO 2: REGISTER BODY PARSER
 *
 * Goal:
 * - Parse incoming JSON
 * - Make data available as req.body
 *
 * Hint:
 * - This is Express middleware
 *******************************************************/
// TODO: register JSON body parser here

/*******************************************************
 * TODO 3: REGISTER LOGGER
 *
 * Goal:
 * - Apply logger to all routes
 *******************************************************/
// TODO: app.use(logger)

/*******************************************************
 * TODO 4: ROUTES
 *
 * Implement:
 * GET  /        → "Home"
 * POST /echo   → return req.body
 * GET  /async  → throw async error
 *******************************************************/
app.get("/", (req, res) => {
    // TODO:
    // send "Home"
});

app.post("/echo", (req, res) => {
    // TODO:
    // return req.body as JSON
});

app.get("/async", async (req, res, next) => {
    // TODO:
    // throw or reject an error
});

/*******************************************************
 * TODO 5: ERROR-HANDLING MIDDLEWARE
 *
 * Goal:
 * - Catch sync & async errors
 * - Respond with status 500
 * - Return JSON error message
 *
 * IMPORTANT:
 * - Must have 4 parameters
 *******************************************************/
app.use((err, req, res, next) => {
    // TODO:
    // res.status(500).json({ error: err.message })
});

/*******************************************************
 * SERVER STARTUP (DO NOT CHANGE)
 *******************************************************/
app.listen(3000, () => {
    console.log("Express server running at http://localhost:3000");
});

/*******************************************************
 * TESTING CHECKLIST
 *
 * GET  /         → Home
 * POST /echo     → echoes JSON body
 * GET  /async    → error handled
 * Invalid JSON   → error middleware triggered
 *******************************************************/
