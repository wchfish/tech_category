// 字符串的trim方法
var _StringPrototype = String.prototype;

_StringPrototype.trim = function() {
    var _strObj = this;
    var startIndex = -1,
        endIndex = -1;
    var returnStr;
    if (_strObj === '') {
        return '';
    }

    for (var i = 0, len = _strObj.length; i < len; i++) {
        if (startIndex === -1 && _strObj[i] !== ' ') {
            startIndex = i;
        }
        if (_strObj[i] !== ' ') {
            endIndex = i;
        }
    }
    returnStr = _strObj.substring(startIndex, endIndex + 1);
    return returnStr;
};

// 调用trim方法
var str = '';
var str1 = str.trim();
console.log(str1);