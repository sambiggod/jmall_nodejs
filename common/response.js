
/*
* 处理返回页面响应的数据格式
**/
class ServerResponse{
    constructor(){
        this.code = 0;
        this.message = "";
        this.data = {};
    }
    static createResponse(code, message, data){
        let response = new ServerResponse();
        if(!code)
            code = 0;
        if(!message)
            message = "";
        if(!data)
            data = {};
        return {
          code: code,
          message: message,
          result: data
        };
    }

    get code() {
        return this._code;
    }
    set code(code) {
        this._code = code;
    }
    get message() {
        return this._message;
    }
    set message(message) {
        this._message = message;
    }
    get data() {
        return this._data;
    }
    set data(data) {
        this._data = data;
    }
}

module.exports = ServerResponse;
