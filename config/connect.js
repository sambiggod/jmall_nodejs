/**
 * Created by Thinkpad on 2017/9/9.
 */

const mysql = require("mysql");
// 配置数据库的连接信息
const connection = mysql.createConnection({
    // 数据库地址
    host: "127.0.0.1",
    // 数据库用户
    user: "root",
    // 数据库密码
    password: "",
    // 端口
    port: "3306",
    // 数据库名称
    database: ""
})