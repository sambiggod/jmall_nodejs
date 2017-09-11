/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserModel = require("../models/user");
const DBUtil = require("../config/connect");
// 操作数据库

module.exports = {
    async getAllUser(){
        console.log("dao")
        let sql = 'SELECT * from mmall_user';
        let result = await DBUtil.query(sql);
        if(Array.isArray(result) && result.length>0){
            // result = result[0];
            console.log(result);
        }else{
            result = null;
        }
        return result;
    },
    async checkUserByNameAndPassword(userModel){
        let sql = "";
        sql = 'SELECT * from mmall_user where name = "${userModel.name}" and password = "${userModel.password}"';
        let result = await DBUtil.query(sql);
        if(Array.isArray(result) && result.length>0){
            console.log("signin: "+result);
        }else{
            result = null;
        }
        return result;
    }
};