const pool = require("./db");

function insertUser(name, password) {
    var query = "INSERT INTO users (username, passwrd) VALUES ($1, $2)"
    var values = [name, password]
    
    pool.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log("user registered!")
        }
    })
}

function getUser(name, password) {
    var query = "SELECT * FROM users WHERE username = $1 AND passwrd = $2"

    var values = [name, password]

    pool.query(query, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows[0])
        }
    })
}

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
// insertUser("karenasamyou", "12345");
// getAllUsers();

