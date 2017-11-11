class Category {
  constructor() {
    this.categoryId = 0;
    this.parentId = 0;
    this.parentName = "";
    this.status = 1;
    this.sortOrder = 0;
    this.createTime = new Date();
    this.updateTime = new Date();
  }
  static parseFromService(dataset){
    let parentList = {};
    dataset.forEach(function(item, index){
      let parentId = item.parent_id;
      let id = item.id;
      let name = item.name;
      if(!parentList[parentId] && parentId != 0){
        parentList[parentId] = {
          parent: {},
          items: []
        }
      }else if(!parentList[parentId] && parentId == 0){
        parentList[id] = {
          parent: {},
          items: []
        }
      }
      if(parentId == 0){
        parentList[id].parent = {
          id: id,
          name: name
        }
      }else{
        // item
        parentList[parentId].items.push({
          id: id,
          name: name
        })
      }
    })
    return parentList;
  }
  get categoryId() {
    return this._categoryId;
  }
  set categoryId(categoryId) {
   this._categoryId = categoryId;
  }
  get parentId() {
    return this._parentId;
  }
  set parentId(parentId) {
   this._parentId = parentId;
  }
  get parentName() {
    return this._parentName;
  }
  set parentName(parentName) {
   this._parentName = parentName;
  }
  get status() {
    return this._status;
  }
  set status(status) {
   this._status = status;
  }
  get sortOrder() {
    return this._sortOrder;
  }
  set sortOrder(sortOrder) {
   this._sortOrder = sortOrder;
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

module.exports = Category;
