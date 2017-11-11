/**
 * Created by Thinkpad on 2017/9/10.
 */
const router = require('koa-router')();
const ProductService = require("../services/productService");

router.get("/category", ProductService.getCategoryList)
      .get("/getProductDetail", ProductService.getProductDetail)
      .get("/getProductByCategory", ProductService.getProductListByCategoryId)
      .get("/getProductByKeyword", ProductService.getProductListByKeyword)

module.exports = router;
