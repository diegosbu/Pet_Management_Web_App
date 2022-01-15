const pool = require("./db");
const bcrypt = require("bcrypt");

// insertUser - inserts newly created user w/ hashed password into DB
async function insertUser(name, password) {
    var query = "INSERT INTO users (username, passwrd) VALUES ($1, $2)"
    var hashedPass = await bcrypt.hash(password, 10)
    
    var values = [name, hashedPass]

    pool.query(query, values, (err, res) => {
        if (err.code == "23505") {
            console.log("username already exists")
        } else if (err) {
            console.log("there has been an error!")
        } else {
            console.log("User registered!")
        }
    })
}

// getUser - finds and returns user info if already registered
function getUser(name, password) {
    var query = "SELECT * FROM users WHERE username = $1"

    var values = [name]

    pool.query(query, values, async (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            if (res.rows[0]) {
                realPasswrd = res.rows[0].passwrd
                
                if (await bcrypt.compare(password, realPasswrd)) {
                    console.log("user signed in!")
                } else {
                    console.log("wrong input!")
                }
            } else {
                console.log("user does not exist")
            }
        }
    })
}

// getAllUsers - gets all registered users from db
function getAllUsers() {
    var query = "SELECT * FROM users"
    
    pool.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows)
        }
    })
}

module.exports = {insertUser, getUser, getAllUsers}

