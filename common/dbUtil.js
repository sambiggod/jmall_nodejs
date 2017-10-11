const Common = require('./common');
const mysql = require('mysql');

const dbConfig = Common.getJsonFile('config.json', 'db');
const pool = mysql.createPool({
  host: '127.0.0.1',
  user: 'root',
  password: 'dfyb',
  port: '3306',
  database: 'mmall_learning'
});

/**
 * 该函数只返回一条json数据，而不是一个数组
 */
function findOneById(tableName, idJson){
  return new Promise((resolve, reject) => {
    pool.getConnection(（err, conn) => {
      if(err)
        reject(err)
      conn.query('SELECT * FROM ' + tableName + ' where ?', idJson, function(qerror, result, feilds){
        // release connection
        conn.release();
        if(qerror){
          console.log('GetData Error: ' + qerror.message);
          reject({
            data: []
          });
        }else{
          if(result){
            resolve({
              data: result.pop()
            })
          }else{
            resolve({
              data: []
            })
          }
        }
      })
    })
  })
}
/**
 * MySQL模块自带了将？替换为json数据的key=value形式，同时还提供了获取查询数据的key值方法。
 */
function insert(tableName, rowInfo){
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if(err)
        reject(err)
      conn.query('INSERT INTO ' + tableName + ' SET ?', rowInfo, function(qerr, result){
        conn.release();
        if(qerr){
          console.log('ClientReady Error: ' + qerr.message);
          reject({
            data: []
          })
        }else {
          resolve({
            data: result.insertId
          })
        }
      })
    })
  })
}
/**
 * 修改数据库的一条数据
 */
function modify(tableName, idJson, rowInfo){
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if(err)
        reject(err);
      conn.query('UPDATE ' + tableName + ' SET ? where ?', [rowInfo, idJson], function(qerr, result){
        conn.release();
        if(qerr){
          console.log('ClientReady Error: ' + qerr.message);
          reject({
            data:[]
          });
        }else{
          resolve({
            data: result
          });
        }
      })
    })
  })
}
/**
 * 删除数据库的一条数据
 */
function remove(tableName, idJson, callback){
  return new Promise((resolve, reject) => {
    pool.getConnection((err, conn) => {
      if(err)
        reject(err);
      conn.query('delete from ' + tableName + ' where ?', idJson, function(qerr, result){
        conn.release();
        if(qerr){
          console.log('ClientReady Error: ' + qerr.message);
          reject({
            data: []
          })
        }else{
          resolve({
            data: result;
          })
        }
      })
    })
  })
}
/**
 * 数据条件查询
 */
function find(tableName, whereJson, orderByJson, limitArr, fieldsArr, callback){

}

module.exports = {
  findOneById,
  insert,
  modify,
  remove，
  find
}
