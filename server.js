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
const cors = require('koa2-cors')

// push lib function to koa instance
const app = new koa();

//配置ctx.body解析中间件
app.use(bodyParser());

//config static resource
const staticPath = "./static";
app.use(static(
    path.join(__dirname, staticPath)
));

//支持跨域
app.use(cors());
router.use("/jmall", apiRouter.routes(), apiRouter.allowedMethods());
app.use(router.routes(), router.allowedMethods());
// app.use( ctx => {
//     ctx.body = 'Welcome to Jmall';
// });

app.listen(3000);
console.log("starting at port 3000");
