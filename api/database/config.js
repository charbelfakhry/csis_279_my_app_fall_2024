require('dotenv').config();

const config = {
    db:{
        host: process.env.DB_HOST || "127.0.0.1",
        user: process.env.DB_USER || "root",
        port: 3307,
        password: process.env.DB_PASS || "root",
        database: process.env.DB_NAME || "csis_228_db",
        connectionLimit: 10,
    }
}

module.exports = config;