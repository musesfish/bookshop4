/*
创建数据库连接池的模块
 */
const mysql = require('mysql');

let pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: '',
  port: 3306,
  database: 'bs',
  connectionLimit: 10
});
console.log('连接池创建完成');

module.exports = pool;