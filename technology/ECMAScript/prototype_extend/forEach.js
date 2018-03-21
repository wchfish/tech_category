// 数组的forEach方法
var _ArrayPrototype = Array.prototype;
_ArrayPrototype.forEach = function(callback) {
    var _arrObj = this;
    for (var i = 0, len = _arrObj.length; i < len; i++) {
        if (callback(_arrObj[i], i, _arrObj) === false) {
            break;
        }
    }
};

// forEach方法使用

var arr = [1, 2, 3];
var arr1 = [];
arr.forEach(function(item, index, _arr) {
    console.log(item);
    arr1.push(item);
    if (item === 2) {
        return false;
    }
});
console.log(arr1);