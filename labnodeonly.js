/*******************************************************
 * NODE.JS HTTP SERVER LAB (NO EXPRESS)
 *
 * What you will build:
 * 1. Middleware system (like Express)
 * 2. Logger middleware
 * 3. JSON body parser middleware
 * 4. Basic routing
 * 5. Centralized error handling
 *
 * Start server:
 *   node server.js
 *******************************************************/

const http = require("http");

/*******************************************************
 * TODO 1: LOGGER MIDDLEWARE
 *
 * Goal:
 * - Log every incoming request
 * - Format: METHOD URL
 * - Example: GET /users
 *
 * Rules:
 * - Must call next() to continue
 * - Must NOT end the response
 *******************************************************/
function logger(req, res, next) {
    // TODO:
    // 1. console.log(req.method, req.url)
    // 2. call next()
}

/*******************************************************
 * TODO 2: JSON BODY PARSER MIDDLEWARE
 *
 * Goal:
 * - Parse JSON bodies for POST requests
 * - Attach parsed data to req.body
 *
 * Rules:
 * - If req.method !== "POST", immediately call next()
 * - Collect body data using req.on("data")
 * - Parse JSON on "end"
 * - If JSON parsing fails → call next(error)
 *******************************************************/
function jsonBodyParser(req, res, next) {
    // TODO:
    // 1. If request method is NOT POST → next()
    // 2. Initialize an empty string to collect body
    // 3. Listen for "data" event and append chunks
    // 4. Listen for "end" event
    //    - JSON.parse body
    //    - assign result to req.body
    //    - call next()
    // 5. Catch JSON.parse error and pass it to next(error)
}

/*******************************************************
 * MIDDLEWARE REGISTRATION (DO NOT CHANGE)
 *******************************************************/
const middlewares = [
    logger,
    jsonBodyParser
];

/*******************************************************
 * TODO 3: MIDDLEWARE RUNNER
 *
 * Goal:
 * - Run middlewares sequentially
 * - Support error propagation
 *
 * Rules:
 * - next(error) should skip remaining middleware
 * - On error:
 *   - respond with status 500
 *   - send "Internal Server Error"
 *******************************************************/
function runMiddlewares(req, res, done) {
    // TODO:
    // 1. Create an index to track middleware position
    // 2. Create a next(error) function
    //    - If error exists → handle error response
    //    - If no more middleware → call done()
    //    - Otherwise → execute current middleware
}

/*******************************************************
 * TODO 4: ROUTE HANDLER
 *
 * Routes to implement:
 *
 * GET  /        → respond "Home"
 * POST /echo   → respond with req.body as JSON
 * GET  /error  → throw an error (for testing)
 *
 * Rules:
 * - Set correct Content-Type
 * - Always end the response
 * - Unknown routes → 404 Not Found
 *******************************************************/
function handleRoutes(req, res) {
    // TODO:
    // 1. Handle GET /
    // 2. Handle POST /echo
    // 3. Handle GET /error (throw new Error)
    // 4. Handle 404
}

/*******************************************************
 * TODO 5: CREATE SERVER
 *
 * Goal:
 * - Run middleware first
 * - Then route handling
 * - Catch sync errors from routes
 *******************************************************/
const server = http.createServer((req, res) => {
    // TODO:
    // 1. Call runMiddlewares(req, res, callback)
    // 2. Inside callback, call handleRoutes
    // 3. Wrap route handling in try/catch
});

/*******************************************************
 * SERVER STARTUP (DO NOT CHANGE)
 *******************************************************/
server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});

/*******************************************************
 * TESTING CHECKLIST
 *
 * GET  /            → Home
 * POST /echo        → echoes JSON body
 * GET  /error       → Internal Server Error
 * Invalid JSON POST → Internal Server Error
 * Unknown route     → 404 Not Found
 *******************************************************/
