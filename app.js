const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Simulated user credentials (replace with your database logic)
const validUserNumber = "1234567890";
const validPasswordHash = "$2b$10$A5YFQfKLAYJ4eReSctokIeqwL3iStQZ7ohN0Zk1Hb8XPyFQeMDeBO"; // Hashed password: "password"

// Login endpoint
app.post('/login', (req, res) => {
    // const { userNumber, password } = req.body;
console.log("I am here")
    // Validate credentials
    if (userNumber === validUserNumber && password === validPassword) {
        res.json({ success: true });
    } else {
        res.status(401).json({ success: false, message: "Invalid username or password" });
    }
});


// Serve index.html (replace with your frontend file)
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// Serve dashboard.html (replace with actual dashboard page)
app.get('/dashboard', (req, res) => {
    res.send("Dashboard page");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
