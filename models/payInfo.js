class PayInfo {
  constructor() {
    this.id = 0;
    this.userId = 0;
    this.payPlatform = 0;
    this.platformNumber = "";
    this.platformStatus = "";
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
  get payPlatform() {
    return this._payPlatform;
  }
  set payPlatform(payPlatform) {
   this._payPlatform = payPlatform;
  }
  get platformNumber() {
    return this._platformNumber;
  }
  set platformNumber(platformNumber) {
   this._platformNumber = platformNumber;
  }
  get platformStatus() {
    return this._platformStatus;
  }
  set platformStatus(platformStatus) {
   this._platformStatus = platformStatus;
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
