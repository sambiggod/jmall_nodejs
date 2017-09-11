/**
 * Created by Thinkpad on 2017/9/10.
 */
const router = require("koa-router")();
const userRoute = require("./userApi");

router.use("/users", userRoute.routes(), userRoute.allowedMethods());

module.exports = router;