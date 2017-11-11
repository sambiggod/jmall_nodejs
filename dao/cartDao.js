const DBUtil = require("../common/connect");

module.exports = {
  async insertCart(formData){
    let sql = "INSERT into mmall_cart set ?";
    let ret = await DBUtil.query(sql, {
      "user_id": formData.userId,
      "product_id": formData.productId,
      "quantity": formData.quantity,
      "checked": 1,
      "create_time": new Date(),
      "update_time": new Date()
    });
    return ret;
  },
  async updateCart(formData){
    let sql = 'UPDATE mmall_cart set ? where id = ?'
    let ret = await DBUtil.query(sql, [{
      "quantity": formData.quantity,
      "checked": 0,
      "update_time": new Date()
    }, formData.id]);
    return ret;
  },
  async deleteCart(cartId){
    let sql = "DELETE from mmall_cart where id = ?"
    let ret = await DBUtil.query(sql, cartId)
    return ret;
  },
  async getCartByUserId(userId){
    let sql = "SELECT * from mmall_cart where user_id = ?";
    let ret = await DBUtil.query(sql, userId)
    return ret;
  },
  async getCartById(cartId){
    let sql = "SELECT * from mmall_cart where id = ?";
    let ret = await DBUtil.query(sql, cartId)
    return ret;
  }
}
