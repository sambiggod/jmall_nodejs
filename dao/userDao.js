/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserModel = require("../models/user");
const DBUtil = require("../common/connect");
// 操作数据库

module.exports = {
    async getAllUser(){
        let sql = 'SELECT * from mmall_user';
        let result = await DBUtil.query(sql);
        if(Array.isArray(result) && result.length>0){
            result = result;
        }else{
            result = null;
        }
        return result;
    },
    async checkUserByNameAndPassword(userModel){
        let sql = "";
        sql = `SELECT * from mmall_user where password="${userModel.password}" and username="${userModel.username}" limit 1`;
        let result = await DBUtil.query(sql);
        if(Array.isArray(result) && result.length>0){
            result = result[0];
        }else{
            result = null;
        }
        return result;
    },

    async createUser(userModel){
        let sql = "";
        //sql = `INSERT INTO mmall_user SET username="${userModel.username}" , password="${userModel.password}" , role="1" `;
        sql = `INSERT INTO mmall_user SET ? `;
        let ret = await DBUtil.query(sql, userModel);
        return ret.insertId;
    },

    async getExistOneByUsername(username){
        let sql = "";
        sql = `SELECT * from mmall_user where ? `;
        let ret = await DBUtil.query(sql, {"username":username});
        return ret.length;
    },

    async getExistOneByEmail(email){
        let sql = "";
        sql = `SELECT * from mmall_user where ? `;
        let ret = await DBUtil.query(sql, {"email":email});
        return ret.length;
    },

    async getQuestionByUsername(userModel){
        let sql = "";
        sql = "SELECT question from mmall_user where username=? LIMIT 1";
        let ret = await DBUtil.query(sql, userModel.username);
        return ret;
    },

    async getUserByAnswer(userModel){
        let sql = "";
        sql = "SELECT * from mmall_user where username=? and question=? and answer=?";
        let ret = await DBUtil.query(sql, [{"username":userModel.username},{"question":userModel.question},{"answer":userModel.answer}]);
        return ret.length;
    },

    async updateUserPassword(userModel){
        let sql = "";
        sql = "UPDATE mmall_user set ? where username=?";
        let ret = await DBUtil.query(sql, [{"password":userModel.password},{"username":userModel.username}]);
        return ret;
    },

    async updateUserInfoById(userModel){
        let sql = "";
        sql = "update mmall_user set ? where id=?";
        let ret = await DBUtil.query(sql, userModel, userModel.id);
        return ret;
    }




};
