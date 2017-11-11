const  statusCode = {
    ERROR_USER_NAME: '用户名格式为6-16位的小写字母，包括-、_',
    ERROR_EMAIL: '请输入正确的邮箱地址',
    ERROR_PASSWORD: '密码长度应该为6-16',
    ERROR_PASSWORD_CONFORM: '两次密码不一致',
    ERROR_SYS: '系统错误',
    FAIL_EMAIL_IS_EXIST: '邮箱已被注册',
    FAIL_USER_NAME_IS_EXIST: '用户名已被注册',
    FAIL_USER_NAME_OR_PASSWORD_ERROR: '用户名或登录密码错误',
    FAIL_USER_NO_LOGIN: '用户未登录',
    FAIL_USER_NO_EXIST: '用户不存在',
    SUCCESS_REGISTER_USER: '用户注册成功',

    // 管理员用户
    IS_ADMIN_USER: 1,
    // 普通用户
    IS_ORDINARY_USER: 0,

    FAIL_CODE: 0,
    SUCCESS_CODE: 1,
    FAIL_STATUE: 'fail',
    SUCCESS_STATUS: 'success',

    PRODUCT_IS_SALE: 1,
    PRODUCT_IS_BAN: 2,
    PRODCUT_IS_DELETE: 3,

    //'订单状态:0-已取消-10-未付款，20-已付款，40-已发货，50-交易成功，60-交易关闭'

};

module.exports = statusCode;
