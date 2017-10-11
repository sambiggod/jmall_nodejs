const fs= require('fs'),
    sys = require('util');
// 校验用户是否已登录
function isLogined() {

}

function isAdminLogined() {

}


function getJsonFile(fileName, key){
    var configJson = {};
    try {
        var str= fs.readFileSync(fileName, 'utf8');
        configJson = JSON.parse(str);
    } catch (e) {
        sys.debug('JSON parse fails');
    }
    if(key)
      return configJson[key];
    else
      return configJson;
}

module.exports = {
    isLogined,
    isAdminLogined,
    getJsonFile
}
