var express = require("express")
const { url } = require("inspector")
var app = express()
// app.use(url())
app.use(express.json())
// app.use(middleware)

// Task 1: Query Parameters
// Question: Create an Express route that accepts a query parameter name and responds with a greeting message including the name. Summary: You need to create a route /greet that extracts the name query parameter from the URL and responds with a personalized greeting.
app.get("/greet", (req, res) => {
    console.log(req.query['name'])

    res.send("Hello " + req.query['name'])
})

// Task 2: Route Parameters
// Question: Create an Express route that accepts a route parameter id and responds with a message containing the id value. Summary: You should define a route like /user/:id where id is a route parameter, and return a response that includes the id in the message.
app.get("/:id", (req, res) => {j
    console.log(req.params['id'])

    res.send("The id you have sent is " + req.params['id']);
})

// Task 3: Headers and Body Parameters
// Question: Implement a POST route that accepts JSON data with a name field in the request body, and a custom Authorization header. Respond with the received name and confirm the authorization. Summary: You need to create a POST route /submit that parses the request body and header, and then sends back a confirmation message including both the name from the body and the Authorization header value.
app.post("/", (req, res) => {
    console.log(req.body)

    res.send("Hi, " + req.body.name + " we have received this value from request - " + req.headers.mykey)
})

// Task 4: Middleware
// Question: Write a middleware function that logs the HTTP method and URL of every incoming request. Then, apply this middleware to your Express app. Summary: Your task is to implement a custom middleware that logs the HTTP method (GET, POST, etc.) and the URL for each request before passing control to the next middleware or route handler.
function middleware (req, res, next) {
    console.log(req.method)
    console.log(req.url)
    next()
}
app.put("/data/", middleware, (req, res) => {
    // console.log(req)
    res.send("Hi, you have used " + req.method + " method and this url " + req.url)
})

// Task 5: Combining Query and Route Parameters
// Question: Create an Express route that combines both route parameters and query parameters. For example, a route like /user/:id?age=:age that responds with the user's id and age from the query string. Summary: In this task, you need to handle a route that contains both a route parameter and a query parameter. You will extract both the id from the route and the age from the query parameters and return them in the response.
app.get("/info/:id", (req, res) => {
    console.log(req.params['id'])
    console.log(req.query['name'])
    res.send("Hi, the id you sent is " + req.params['id'] + " and the query details are " + req.query['name']);
})

let port = 3000
app.listen(port, () => {
    console.log("server is started")
})