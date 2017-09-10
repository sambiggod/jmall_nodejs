/**
 * Created by Thinkpad on 2017/9/9.
 */

//require node lib function
const path = require("path");
const fs = require("fs");

// require koa libs
const koa = require("koa");
const router = require("koa-router");
const bodyparser = require("koa-bodyparser");
const static = require("koa-static");
const routers = require("./routers.js");

// push lib function to koa instance
const app = new koa();

//config bodyparser
app.use(bodyparser);

//config static resource
const staticPath = "./static";
app.use(static(
    path.join(__dirname, staticPath)
))

app.use( ctx => {
    ctx.body = 'Welcome to Jmall';
});

app.listen(3000);
console.log("starting at port 3000");