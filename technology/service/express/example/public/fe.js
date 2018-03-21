/**
 * Created by wangc on 2017/6/11.
 */

function createXHR(method, url, data, async, callback) {
    var xhr = new XMLHttpRequest();


    xhr.open(method, url, async);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4) {
            if (xhr.status >= 200 && xhr.status < 300) {
                callback(xhr.responseText);
            }
        }
    };
    xhr.send(null);
}

createXHR('get', '/service.do', null, true, function(responseText) {
    console.log(responseText);
});