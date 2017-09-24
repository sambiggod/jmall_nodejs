
module.exports = {
    // 获取购物车里的商品列表， 需要先登录
    async getProductListInCart(){

    },
    // 购物车里添加商品,控制购物车里某个商品的数量
    async addProductToCart(productId, count){

    },
    // 更新购物车里某个商品的数量
    async updateProductCountInCart(productId, count){

    },
    // 移除购物车里的某商品
    async removeProductFromCart(productIds){

    },
    // 选中购物车里的某商品
    async selectProductInCart(productId){

    },
    // 取消选中购物车里的某商品
    async unselectProductInCart(productId){

    },
    // 查询在购物车里的产品数量
    async getProductCountInCart(){

    },
    // 购物车全选
    async selectAllInCart(){

    },
    // 取消购物车全选
    async unselectAllInCart(){

    }
}