const CartDao = require("../dao/cartDao")
const CartModel = require("../models/cart");
const ServerResponse = require("../common/response");
const Constant = require('../common/Constant');

module.exports = {
  async addCart(ctx){
    let formData = ctx.request.body;
    let ret = await CartDao.insertCart(formData);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async updateCart(ctx){
    let formData = ctx.request.body;
    console.log(formData);
    let ret = await CartDao.updateCart(formData);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async deleteCart(ctx){
    let formData = ctx.request.body;
    let ret = await CartDao.deleteCart(formData.id);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async getCartByUserId(ctx){
    let query = ctx.query;
    let userId = query.userId;
    let ret = await CartDao.getCartByUserId(userId);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async getAllCart(ctx){
    let query = ctx.query;
    let cartId = query.id;
    let ret = await CartDao.getCartById(cartId);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  }

}
