/**
 * Created by Thinkpad on 2017/9/10.
 */
const router = require('koa-router')();
const userController = require("../controllers/userController");

router.get('/getUser', userController.getAllUser);

module.exports = router;

