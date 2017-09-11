/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserDao = require("../dao/userDao.js");

// 负责调用dao接口，以及组织从数据库读取数据的逻辑和格式
module.exports = {
    async getAllUser(){
        let resultData = UserDao.getAllUser();
        console.log("service: "+ resultData);
        return resultData;
    },
    async signIn(user){
        let resultData = UserDao.checkUserByNameAndPassword({
            "name": user.name,
            "password": user.password
        })
        return resultData;
    }
};