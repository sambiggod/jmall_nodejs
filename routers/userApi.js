/**
 * Created by Thinkpad on 2017/9/10.
 */
const router = require('koa-router')();
const userController = require("../controllers/userController");

router.get('/getAllUser', userController.getAllUser)
    .post('/login', userController.login)
    .post('/register', userController.register)
    .get('/forgetPassword', userController.forgetPassword)
    .get('/checkAnswer', userController.checkAnswer)
    .put('/resetForgetPassword', userController.resetForgetPassword)
    .put('/resetPassword', userController.resetPassword)
    .put('/updateUser', userController.updateUserInfo)
    .get('getInformation', userController.getInformation)


module.exports = router;
