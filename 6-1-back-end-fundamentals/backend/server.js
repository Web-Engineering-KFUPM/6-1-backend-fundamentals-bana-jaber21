// TODO 1: Import Express
import express from "express";



// TODO 2: Create the Express app and store it in a variable named app
const app = express();
const port = 3000;



// TODO 3: Allow React to access the server
app.use((_req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:5173");
    next();
});




// TODO 5: Create the home route "/"
app.get("/", (req, res) => {    
    res.send("Welcome to the home page!");
});



// TODO 6: Create the "/about" route
app.get("/about", (req, res) => {
    res.send("This is the about page.");
});



// TODO 7: Create the "/student" route
app.get("/student", (req, res) => {
    const student = {
        name: "John Doe",
        age: 20,
        major: "Computer Science"
    };
    res.json(student);
}); 




// TODO 4: Start the server on port 3000
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
