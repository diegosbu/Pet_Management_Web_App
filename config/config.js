require("dotenv").config();

const config = {
    pgHost: process.env.PGHOST,
    pgUser: process.env.PGUSER,
    pgDb: process.env.PGDATABASE,
    pgPass: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT
};

module.exports = config;