class Cart {
  constructor() {
    this.id = 0;
    this.userId = 0;
    this.prodcutId = 0;
    this.quantity = 0;
    this.checked = 0;
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
  get prodcutId() {
    return this._prodcutId;
  }
  set prodcutId(prodcutId) {
   this._prodcutId = prodcutId;
  }
  get quantity() {
    return this._quantity;
  }
  set quantity(quantity) {
   this._quantity = quantity;
  }
  get checked() {
    return this._checked;
  }
  set checked(checked) {
   this._checked = checked;
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
