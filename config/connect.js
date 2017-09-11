/**
 * Created by Thinkpad on 2017/9/9.
 */

const mysql = require("mysql");
// 配置数据库的连接信息
// const connection = mysql.createConnection({
//     // 数据库地址
//     host: "127.0.0.1",
//     // 数据库用户
//     user: "root",
//     // 数据库密码
//     password: "dfyb",
//     // 端口
//     port: "3306",
//     // 数据库名称
//     database: "mmall_learning"
// });

// connection.query('SELECT * FROM my_table', (error, results, feilds) => {
//     if(error)
//         throw error;
//     // connected
//
//     // 结束会话
//     connection.release();
// });

// 创建数据池
const pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: 'dfyb',
    port: '3306',
    database: 'mmall_learning'
});

// 在数据池中进行会话操作


let query = function (sql, values) {
    return new Promise((resolve, reject) => {
        pool.getConnection((err, connection) => {
            if(err){
                resolve(err);
            }else{
                connection.query(sql, values, (error, results, field) => {
                    if(error){
                        reject(error);
                    }else{
                        resolve(results);
                    }
                    // 结束会话
                    connection.release();
                })
            }

        })
    })
}

module.exports = {
    query
}
