/**
 * Created by Thinkpad on 2017/9/10.
 */
const UserService = require("../services/userService");

// 控制服务接口调用，以及页面跳转，以及返回页面数据
module.exports = {
    async getAllUser(ctx){
        console.log("constroller")
        ctx.body = await UserService.getAllUser();
    },
    async login(ctx){
        let user = {
            name: "yqw",
            password: "dfyb"
        };
        ctx.body = await UserService.signIn(user)
    }
};

// //获取用户
// exports.getUser = async (ctx, next) => {
//     ctx.body = {
//         username: 'yqw',
//         age: 30
//     }
// }
//
// //用户注册
// exports.registerUser = async (ctx, next) => {
//     console.log('registerUser', ctx.request.body);
// }