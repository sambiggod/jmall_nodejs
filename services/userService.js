/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserDao = require("../dao/userDao.js");
const User = require("../models/user.js");
const MD5Utils = require("../common/md5Util");
const ServerResponse = require("../common/response");
const Constant = require('../common/Constant');

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
    async signIn(user){
        let ret = "";
        ret = await UserDao.getExistOneByUsername(user.username);
        if(!ret)
            return ServerResponse.createResponse(Constant.FAIL_CODE, Constant.FAIL_USER_NO_EXIST);

        let resultData = await UserDao.checkUserByNameAndPassword({
            "username": user.username,
            "password": MD5Utils.getEncryptedStringByMD5(user.password)
        });
        return ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, resultData);
    },
    async signUp(user){
        // check username is existed
        let userRet = await UserDao.getExistOneByUsername(user.username);
        if(userRet)
          return ServerResponse.createResponse(Constant.FAIL_CODE, Constant.FAIL_USER_NAME_IS_EXIST);
        // check email is existed
        let emailRet = await UserDao.getExistOneByEmail(user.email);
        if(emailRet)
          return ServerResponse.createResponse(Constant.FAIL_CODE, Constant.FAIL_EMAIL_IS_EXIST);

        let retData = await UserDao.createUser({
            "username": user.username,
            "password": MD5Utils.getEncryptedStringByMD5(user.password),
            "email": user.email,
            "role": Constant.IS_ADMIN_USER
        });
        if(retData)
          return ServerResponse.createResponse(Constant.SUCCESS_CODE, "success", Constant.SUCCESS_REGISTER_USER);
    },

    async signOut(){

    },
    async getUserQuestion(user){
      let ret = UserDao.getQuestionByUsername(user);
      if(ret)
        return ServerResponse.createResponse(Constant.SUCCESS_CODE,{"question":ret.question})
    },

    async checkAnswer(user){
      let ret = UserDao.getUserByAnswer(user)
    },

    async resetPassword(){

    }


};
