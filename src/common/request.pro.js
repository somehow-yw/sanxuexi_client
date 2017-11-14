/**
 * Created by YYM on 2017.05.10.
 */
(function () {
    let req = {};
    let send = function (obj, method, url, data, callback, header) {
        if(!obj) return;

        let reqOption = {};
        reqOption.method = method;
        reqOption.url = url+'?r='+Math.random();
        if(method == 'post' || method == 'POST'){
            reqOption.data = data; //axios为data和params
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

    // 用户登录
    req.getUserInfo = function (obj, data, callback) {
        return send(obj, 'post', '/users/login', data, callback);
    };

    window.req = req;
})();