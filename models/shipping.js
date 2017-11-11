class Shipping {
  constructor() {
    this.id = 0;
    this.userId = 0;
    this.receiverName = "";
    this.receiverPhone = "";
    this.receiverMobile = "";
    this.receiverProvince = "";
    this.receiverCity = "";
    this.receiverDistrict = "";
    this.receiverAddress = "";
    this.receiverZip = "";
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
  get receiverName() {
    return this._receiverName;
  }
  set receiverName(receiverName) {
   this._receiverName = receiverName;
  }
  get receiverPhone() {
    return this._receiverPhone;
  }
  set receiverPhone(receiverPhone) {
   this._receiverPhone = receiverPhone;
  }
  get receiverMobile() {
    return this._receiverMobile;
  }
  set receiverMobile(receiverMobile) {
   this._receiverMobile = receiverMobile;
  }
  get receiverProvince() {
    return this._receiverProvince;
  }
  set receiverProvince(receiverProvince) {
   this._receiverProvince = receiverProvince;
  }
  get receiverCity() {
    return this._receiverCity;
  }
  set receiverCity(receiverCity) {
   this._receiverCity = receiverCity;
  }
  get receiverDistrict() {
    return this._receiverDistrict;
  }
  set receiverDistrict(receiverDistrict) {
   this._receiverDistrict = receiverDistrict;
  }
  get receiverAddress() {
    return this._receiverAddress;
  }
  set receiverAddress(receiverAddress) {
   this._receiverAddress = receiverAddress;
  }
  get receiverZip() {
    return this._receiverZip;
  }
  set receiverZip(receiverZip) {
   this._receiverZip = receiverZip;
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
