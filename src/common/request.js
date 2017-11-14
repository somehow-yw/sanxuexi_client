(function () {
    let req = {};
    let send = function (obj, method, url, data, callback, header) {
        if(!obj) return;
        let reqOption = {};
        reqOption.method = method;
        reqOption.url = url+'?r='+Math.random();
        if(method == 'post' || method == 'POST'){
            reqOption.data = data;
        }else {
            reqOption.params = data;
        }
        if(header){
            reqOption.header = header;
        }
        let request = obj.$http(reqOption).then((res)=>{
            callback.call(this, res.data?res.data:res.body);
        });

        return request;
    };

    // 获取用户信息
    req.getUserInfo = function (obj, data, callback) {
        return send(obj, 'get', '/mock/login.json', data, callback);
    };

    window.req = req;
})();