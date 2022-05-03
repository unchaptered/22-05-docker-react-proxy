const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'mysql', // docker-compose.yml 서비스 이름인 mysql
    user: 'root',
    password: 'reactpw',
    database: 'reactapp'
});

exports.pool = pool;

// 22-05-docker-multi-react_backend 22-05-docker-multi-react_mysql 22-05-docker-multi-react_frontend 22-05-docker-multi-react_nginx