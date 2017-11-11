/**
 * Created by Thinkpad on 2017/9/10.
 */
const router = require("koa-router")();
const userRoute = require("./userApi");
const productRoute = require("./productApi");
const cartRoute = require("./cartApi");

router.use("/users", userRoute.routes(), userRoute.allowedMethods());
router.use("/product", productRoute.routes(), productRoute.allowedMethods());
router.use("/cart", cartRoute.routes(), cartRoute.allowedMethods());

module.exports = router;
