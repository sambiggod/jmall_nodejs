/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserService = require("../services/userService");

// 控制服务接口调用，以及页面跳转，以及返回页面数据
module.exports = {
    async getAllUser(ctx){
        ctx.body = await UserService.getAllUser();
    },
    // 登录验证信息
    async login(ctx){
        let formData = ctx.request.body;
        console.log("formdata: ")
        console.log(ctx)
        ctx.body = await UserService.signIn(formData)
    },
    // 注册新用户
    async register(ctx){
        let formData = ctx.request.body;
        ctx.body = await UserService.signUp(formData);
    },
    // 忘记密码，获取问题
    async forgetPassword(){

    },
    // 忘记密码，核对问题答案
    async checkAnswer(){

    },
    //忘记密码，重置密码
    async resetForgetPassword(){

    },
    //当前登录用户重置密码
    async resetPassword(){

    },
    // 更新用户的详细信息
    async updateUserInfo(){

    },
    // 获取当前登录用户的详细信息，并强制登录
    async getInformation(){

    }


};

