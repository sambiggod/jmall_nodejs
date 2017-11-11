/**
 * Created by Thinkpad on 2017/9/10.
 */
class Product {
  constructor() {
    this.productId = 0;
    this.categoryId = 0;
    this.productName = "";
    this.subTitle = "";
    this.mainImage = "";
    this.subImage = [];
    this.detail = [];
    this.price = 0.0;
    this.stock = 0;
    this.status = 0;
    this.createTime = new Date();
    this.updateTime = new Date();
  }
  get productId() {
    return this._productId;
  }
  set productId(productId) {
   this._productId = productId;
  }
  get categoryId() {
    return this._categoryId;
  }
  set categoryId(categoryId) {
   this._categoryId = categoryId;
  }
  get productName() {
    return this._productName;
  }
  set productName(productName) {
   this._productName = productName;
  }
  get subTitle() {
    return this._subTitle;
  }
  set subTitle(subTitle) {
   this._subTitle = subTitle;
  }
  get mainImage() {
    return this._mainImage;
  }
  set mainImage(mainImage) {
   this._mainImage = mainImage;
  }
  get subImage() {
    return this._subImage;
  }
  set subImage(subImage) {
   this._subImage = subImage;
  }
  get detail() {
    return this._detail;
  }
  set detail(detail) {
   this._detail = detail;
  }
  get price() {
    return this._price;
  }
  set price(price) {
   this._price = price;
  }
  get stock() {
    return this._stock;
  }
  set stock(stock) {
   this._stock = stock;
  }
  get status() {
    return this._status;
  }
  set status(status) {
   this._status = status;
  }
  get createTime() {
    return this._createTime;
  }
  set createTime(createTime) {
   this._createTime = createTime;
  }
  get updateTime() {
    return this._updateTime;
  }
  set updateTime(updateTime) {
   this._updateTime = updateTime;
  }

}

module.exports = Product;
