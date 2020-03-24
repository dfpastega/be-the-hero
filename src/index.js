const express = require('express');
const routes = require('./routes');
const cors = require('cors');


const app = express();


app.use(cors());
app.use(express.json());
app.use(routes);

/**
 * SQL: mysql, sqLite, PostreSql, oracle, Microsoft SQL Server
 * NoSQL: MongoDB
 */

 /**
  * Driver: SELECT * FROM users
  * Query Builder: table('users').select('*').where() --- KNEX
  */


app.listen(3333);
