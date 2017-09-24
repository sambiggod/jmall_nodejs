/**
 * MD5（单向散列算法）：输入任意长度的信息，经过处理，输出为128位的信息（数字指纹）。
 * 不同的输入得到不同的结果（唯一性），根据128位的输出结果不可能反推出输入的信息（不可逆）
 **/
//引用nodejs的crypto加密模块
const crypto = require('crypto');

//加密
function getEncryptedStringByMD5(encryptingString) {
    //创建md5哈希加密对象
    let md5 = crypto.createHash('md5');
    let ret = "";
    if(!encryptingString)
        return ret;
    //将需被加密的数据更新到md5哈希对象里
    md5.update(encryptingString);
    //计算哈希中所有数据的摘要
    ret = md5.digest('hex');
    return ret;
}

//解密
function getDecryptedUtf8StringByMD5(decryptingString) {
    //创建md5哈希加密对象
    let md5 = crypto.createHash('md5');
    let ret = "";
    if(!decryptingString)
        return ret;
    md5.update(decryptingString, "utf8");
    ret = md5.digest('hex');
    return ret;
}

module.exports = {
    getEncryptedStringByMD5,
    getDecryptedUtf8StringByMD5
}


