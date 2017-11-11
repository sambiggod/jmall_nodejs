/**
 * Created by Thinkpad on 2017/9/10.
 */
 const ProductService = require("../services/productService")
module.exports = {
    async getProductDetail(productId){

    },
    // 根据分类信息和分页信息，查询产品列表
    async getProductList(ctx){
      let formData = ctx.query;
      console.log(formData);
      ctx.body = await ProductService.getProductList(formData)
    },
    // 通过分类信息和关键字查询产品列表
    async getSearchProductList(keyword, categoryId){

    },
    async getCategoryList(){
      
    }
}
