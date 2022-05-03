const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    // docker-compose.yml 서비스 이름인 mysql
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_ROOT_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    port: process.env.MYSQL_PORT,
});

exports.pool = pool;

// 22-05-docker-multi-react_backend 22-05-docker-multi-react_mysql 22-05-docker-multi-react_frontend 22-05-docker-multi-react_nginx