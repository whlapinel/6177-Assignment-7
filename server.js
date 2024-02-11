import express from 'express';
import mariadb from 'mariadb';

const app = express();
const port = 3000;

const pool = mariadb.createPool({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'sample',
    port: 3306,
    connectionLimit: 5
});

app.get('/', (req, res) => {
    console.log('data requested');
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});

