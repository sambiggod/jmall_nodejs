/**
 * Created by Thinkpad on 2017/9/9.
 */

//require node lib function
const path = require("path");
const fs = require("fs");

// require koa libs
const koa = require("koa");
const router = require("koa-router")();
const bodyParser = require("koa-bodyparser");
const static = require("koa-static");
const apiRouter = require("./routers/index");

// push lib function to koa instance
const app = new koa();

//配置ctx.body解析中间件
app.use(bodyParser());

//common static resource
const staticPath = "./static";
app.use(static(
    path.join(__dirname, staticPath)
));

// common routers
// const appRouter = new router({
//     prefix: "jmall"
// });
// router.use('/api', api.routes(), api.allowedMethods());
router.use("/jmall", apiRouter.routes(), apiRouter.allowedMethods());
app.use(router.routes(), router.allowedMethods());
// app.use( ctx => {
//     ctx.body = 'Welcome to Jmall';
// });

app.listen(3000);
console.log("starting at port 3000");