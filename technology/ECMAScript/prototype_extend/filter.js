/*
* 解决平台低版本浏览器js兼容性问题的代码
* */
var _ArrayPrototype = Array.prototype;

// 数组的filter方法
if (!_ArrayPrototype.filter) {
    _ArrayPrototype.filter = function(callback) {
        var _arrObj = this;
        var returnValue = [];
        for (var i = 0, len = _arrObj.length; i < len; i++) {
            if (callback(_arrObj[i], i, _arrObj)) {
                returnValue.push(_arrObj[i]);
            }
        }
        return returnValue;
    };
}

// 调用filter方法
var arr = [1, 2, 3, 4];
var filterResult;

filterResult = arr.filter(function(item, index) {
    var filterFlag;
    if (item > 5) {
        filterFlag = true;
    } else {
        filterFlag = false;
    }
    return filterFlag;
});

debugger