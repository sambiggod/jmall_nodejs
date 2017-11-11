const router = require('koa-router')();
const CartService = require('../services/cartService');

router.post('/addCart', CartService.addCart)
      .put('/updateCart', CartService.updateCart)
      .put("/deleteCart", CartService.deleteCart)
      .get("/getCartByUserId", CartService.getCartByUserId)
      .get("/getAllCart", CartService.getAllCart)

module.exports = router;
