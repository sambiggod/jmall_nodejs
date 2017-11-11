class Order {
  constructor() {
    this.orderId = 0;
    this.orderNo = 0;
    this.userId = 0;
    this.shippingId = 0;
    this.payment = 0.0;
    this.paymentType = 1;
    this.postage = 0.0;
    this.status = 0;
    this.paymentTime = new Date();
    this.sendTime = new Date();
    this.endTime = new Date();
    this.closeTime = new Date();
    this.createTime = new Date();
    this.updateTime = new Date();
  }
  get orderId() {
    return this._orderId;
  }
  set orderId(orderId) {
   this._orderId = orderId;
  }
  get orderNo() {
    return this._orderNo;
  }
  set orderNo(orderNo) {
   this._orderNo = orderNo;
  }
  get userId() {
    return this._userId;
  }
  set userId(userId) {
   this._userId = userId;
  }
  get shippingId() {
    return this._shippingId;
  }
  set shippingId(shippingId) {
   this._shippingId = shippingId;
  }
  get payment() {
    return this._payment;
  }
  set payment(payment) {
   this._payment = payment;
  }
  get paymentType() {
    return this._paymentType;
  }
  set paymentType(paymentType) {
   this._paymentType = paymentType;
  }
  get postage() {
    return this._postage;
  }
  set postage(postage) {
   this._postage = postage;
  }
  get status() {
    return this._status;
  }
  set status(status) {
   this._status = status;
  }
  get paymentTime() {
    return this._paymentTime;
  }
  set paymentTime(paymentTime) {
   this._paymentTime = paymentTime;
  }
  get sendTime() {
    return this._sendTime;
  }
  set sendTime(sendTime) {
   this._sendTime = sendTime;
  }
  get endTime() {
    return this._endTime;
  }
  set endTime(endTime) {
   this._endTime = endTime;
  }
  get closeTime() {
    return this._closeTime;
  }
  set closeTime(closeTime) {
   this._closeTime = closeTime;
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

class OrderItem {
  constructor() {
    this.id = 0;
    this.userId = 0;
    this.orderNo = 0;
    this.productId = 0;
    this.productName = "";
    this.productImage = "";
    this.currentUnitPrice = 0.0;
    this.quantity = 0;
    this.totalPrice = 0.0;
    this.createTime = new Date();
    this.updateTime = new Date();
  }
  get id() {
    return this._id;
  }
  set id(id) {
   this._id = id;
  }
  get userId() {
    return this._userId;
  }
  set userId(userId) {
   this._userId = userId;
  }
  get orderNo() {
    return this._orderNo;
  }
  set orderNo(orderNo) {
   this._orderNo = orderNo;
  }
  get productId() {
    return this._productId;
  }
  set productId(productId) {
   this._productId = productId;
  }
  get productName() {
    return this._productName;
  }
  set productName(productName) {
   this._productName = productName;
  }
  get productImage() {
    return this._productImage;
  }
  set productImage(productImage) {
   this._productImage = productImage;
  }
  get currentUnitPrice() {
    return this._currentUnitPrice;
  }
  set currentUnitPrice(currentUnitPrice) {
   this._currentUnitPrice = currentUnitPrice;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
   this._quantity = quantity;
  }
  get totalPrice() {
    return this._totalPrice;
  }
  set totalPrice(totalPrice) {
   this._totalPrice = totalPrice;
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
