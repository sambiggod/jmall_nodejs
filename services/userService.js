/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserDao = require("../dao/userDao.js");
const User = require("../models/user.js");
const MD5Utils = require("../common/md5Util");
const ServerResponse = require("../common/response");

// 负责调用dao接口，以及组织从数据库读取数据的逻辑,转换数据的格式
module.exports = {
    async getAllUser(){
        let userData = await UserDao.getAllUser();
        let ret = [];
        let len = userData.length;
        for(let i=0;i<len;i++){
            let user = new User();
            let item = userData[i];
            user.id = item.id;
            user.password = MD5Utils.getDecryptedUtf8StringByMD5(item.password);
            user.email = item.email;
            user.phone = item.phone;
            user.question = item.question;
            user.answer = item.answer;
            user.role = item.role;
            user.create_time = item.create_time;
            user.update_time = item.update_time;
            ret.push(user);
        }
        return ret;
    },
    //先验证用户名是否存在，然后验证用户名及密码
    async signIn(user){
        let ret = "";
        ret = await UserDao.getExistOneByUsername(user.username);
        if(!ret)
            return ServerResponse.createResponse(0, "该用户名不存在");

        let resultData = await UserDao.checkUserByNameAndPassword({
            "username": user.username,
            "password": MD5Utils.getEncryptedStringByMD5(user.password)
        });
        return ServerResponse.createResponse(1, "success", resultData);
    },
    async signUp(user){
        let retData = await UserDao.createUser({
            "username": user.username,
            "password": MD5Utils.getEncryptedStringByMD5(user.password),
            "role":"1"
        });
        return retData;
    },

    async signOut(){

    },

    async resetPassword(){

    }


};