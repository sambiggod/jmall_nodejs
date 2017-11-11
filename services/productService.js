/**
 * Created by Thinkpad on 2017/9/10.
 */
const ProductDao = require("../dao/productDao.js");
const Product = require("../models/product.js");
const Category = require("../models/category.js");
const MD5Utils = require("../common/md5Util");
const ServerResponse = require("../common/response");
const Constant = require('../common/Constant');

module.exports = {
  async getCategoryList(ctx){
    let dataset =await ProductDao.getAllCategory();
    let ret = Category.parseFromService(dataset)
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async getProductDetail(ctx){
    let query = ctx.query
    let ret = await ProductDao.getProductListById(query.productId);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async getProductListByCategoryId(ctx){
    let query = ctx.query;
    let ret = await ProductDao.getProductListByCategoryId(query.categoryId);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  },
  async getProductListByKeyword(ctx){
    let query = ctx.query;
    let ret = await ProductDao.getProductListByKeyword(query.keyword);
    ctx.body = ServerResponse.createResponse(Constant.SUCCESS_CODE, Constant.SUCCESS_STATUS, ret);
  }

}
