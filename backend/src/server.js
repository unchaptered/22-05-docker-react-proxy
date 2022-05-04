// 필요한 모듈들 가져오기
const express = require('express');
const bodyParser = require('body-parser');

const db = require('./db');

const app = express();
const PORT = 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

db.pool.query(`CREATE TABLE lists (

    id INTEGER AUTO_INCREMENT,
   
    value TEXT, 
   
    PRIMARY KEY (id)
   
   )`, (err, results, fileds) => {
   
   console.log('results', results)
   
   });
   

// DB List 테이블에 있는 모든 데이터를 프론트 앤드로 보내주기

app.get('/api/values', (req, res) => {
    
    console.log('GET /api/values');

    // DB 에서 모든 정보 가져오기
    db.pool.query('SELECT * FROM lists;',
        (err, results, fields) => {
            console.log(err, results,  fields);
            if (err) return res.status(500).send(err);
            else return res.json(results);
        }
    );

});

// 클라이언트에서 입력한 값을 DB List 테이블에 넣어주기

app.post('/api/value', (req, res, next) => {
    console.log('POST /api/value');

    db.pool.query(`INSERT INTO lists (value) VALUES("${req.body.value}")`,
        (err, results, fields) => {
            console.log(err, results,  fields);
            
            if (err) return res.status(500).send(err);
            else return res.json({ success:true, value: req.body.value });
        }
    )

});

app.listen(PORT, () => {
    console.log(`Backend Application is running on ${PORT}`)
});