//创建mysql连接池
const mysql = require('mysql');
var pool = mysql.createPool({
  host: '106.13.30.111',
  user: 'fangcuidong',
  password: 'fcd19990523',
  database: 'hdl',
  connectionLimit: 15
});
//把创建好的连接池导出
module.exports = pool;