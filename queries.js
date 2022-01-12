const pool = require("./db");

function insertUser(name, password) {
    var query = "INSERT INTO users (username, passwrd) VALUES ($1, $2)"
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
    
    db.query(query, (err, res) => {
        if (err) {
            console.log(err.stack)
        } else {
            console.log(res.rows)
        }
    })
}

// insertUser("karenasamyou", "12345");
// getAllUsers();

