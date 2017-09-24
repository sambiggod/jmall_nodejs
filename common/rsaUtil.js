/*
* RSA的加密思路如下：（假如甲有一份需保密的数据发给乙签署）
* 1.甲用乙的公钥对数据进行加密；
* 2.密文从甲发送到乙；
* 3.乙收到密文，并用自己的私钥对密文进行解密；
* 4.解密正确，经阅读，乙用自己的私钥对数据进行签署；
* 5.乙用甲的公钥对已经签署的数据进行加密；
* 6.乙将密文发给甲；
* 7.甲用自己的私钥将签署的数据解密；
* 8.解密正确，确认签署。
 */

/**
 * 首先，生成公私钥，然后将生成的公私钥上传到应用公钥
 */
//linux 用户（eg.Ubuntu）
//进入OpenSSL程序
"$ openssl"
//生成私钥
"OpenSSL> genrsa -out rsa_private_key.pem 1024"
//java开发者需要将私钥转换成PKCS8格式
"OpenSSL> pkcs8 -topk8 -inform PEM -in rsa_private_key.pem -outform PEM -nocrypt"
//生成公钥
"OpenSSL> rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem"
//退出OpenSSL程序
"OpenSSL> exit ##"

//windows用户
//进入cmd命令窗口
//进入OpenSSL安装目录
"C:\Users\Hammer>cd C:\OpenSSL-Win32\bin"
//进入OpenSSL程序
"C:\OpenSSL-Win32\bin>openssl.exe"
//生成私钥
"OpenSSL> genrsa -out rsa_private_key.pem 1024"
//java开发者需要将私钥转换成PKCS8格式
"OpenSSL> pkcs8 -topk8 -inform PEM -in rsa_private_key.pem -outform PEM -nocrypt"
//生成公钥
"OpenSSL> rsa -in rsa_private_key.pem -pubout -out rsa_public_key.pem"
//退出OpenSSL程序
"OpenSSL> exit ##"

const crypto = require('crypto'), fs = require('fs');
const privatePem = fs.readFileSync('./pem/rsa_private_key.pem');
const publicPem = fs.readFileSync('./pem/rsa_public_key.pem');
const privateKey = privatePem.toString();
const publicKey = publicPem.toString();

//加密
function getEncryptedDataByRSA(encryptingContent) {
    let ret = "";
    if(encryptingContent)
        return ret;
    let rsa = crypto.createSign('RSA-SHA256');
    rsa.update(encryptingContent);
    ret = rsa.sign(key, 'hex');
    return ret;
}

//解密
function getDecrptedDataByRSA(decryptingContent) {
    let ret = "";
    if(encryptingContent)
        return ret;
    let rsa = crypto.createSign('RSA-SHA256');
    rsa.update(encryptingContent);
    ret = rsa.verify(key, decryptingContent, 'hex');
    return ret;
}

module.exports = {
    getEncryptedDataByRSA,
    getDecrptedDataByRSA
}
