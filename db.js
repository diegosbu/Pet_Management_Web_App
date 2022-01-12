const { Pool } = require("pg");
const config = require("./config/config");

const pool = new Pool({
    user: config.pgUser,
    host: config.pgHost,
    database: config.pgDb,
    password: config.pgPass,
    port: config.pgPort
})


module.exports = pool;