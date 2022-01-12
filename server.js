// Modules
const express = require("express");
const config = require("./config/config")
const cors = require("cors");
const { insertUser, getUser, getAllUsers } = require("./queries");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Routes
app.post("/register" , (req, res) => {
    var uname =req.body.username;
    var passwrd = req.body.password;

    insertUser(uname, passwrd);
})

app.post("/login" , (req, res) => {
    var uname =req.body.username;
    var passwrd = req.body.password;

    getUser(uname, passwrd);
})

// Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));