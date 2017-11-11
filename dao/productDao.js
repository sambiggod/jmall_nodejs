/**
 * Created by Thinkpad on 2017/9/10.
 */
 const UserModel = require("../models/product");
 const DBUtil = require("../common/connect");

 module.exports = {
   async getProductListById(productId){
     let sql = `SELECT * from mmall_product where id=${productId} `;
     let result = await DBUtil.query(sql);
     return result;
   },
   async getProductListByCategoryId(categoryId){
     let sql = `SELECT * FROM mmall_product where category_id=${categoryId}`;
     let result = await DBUtil.query(sql);
     return result;
   },
   async getProductListByKeyword(keyword){
     let sql = `SELECT * FROM mmall_product where category_id=${keyword}`;
     let result = await DBUtil.query(sql);
     return result;
   },
   async getAllCategory(){
     let sql = "SELECT * from mmall_category where status = 1";
     let ret = await DBUtil.query(sql);
     return ret;
   }


 }
