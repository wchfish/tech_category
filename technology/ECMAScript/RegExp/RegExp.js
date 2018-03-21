/**
 * Created by wangc on 2017/6/2.
 */
/****************************************
* 模拟移除dom元素中以btn开头的类名
 ****************************************/
// var regClassName = /^btn/; // 匹配以"btn"开头的字符串
// var str = 'myBtn myBtn-active btn btn-active btn-primary';
// var arrClassNames = str.split(' ');
// var newClassNames = [];
//
// newClassNames = arrClassNames.reduce(function(result, className, index, arr) {
//     if(className.search(regClassName) === -1) {
//       result.push(className);
//     }
//     return result;
// }, []);
//
// var newClassNameStr =  newClassNames.join(' ').trim();

/****************************************
* 严格匹配主题目录下的样式文件
 ****************************************/
// 基础正则
var reg1 = new RegExp('blue', 'i'); // 存在给定的字符串，忽略大小写
var reg2 = new RegExp('\^\[\^/\]\*\$'); // 正则: /^[^/]*$/ , 不包含“/”的任意长度字符串
var reg3 = new RegExp('\\.css\$'); // 正则: /\.css$/ , 以“.css”结尾的字符串
var theme = 'blue';

// 目标正则
var reg = new RegExp('/' +　theme + '/' + '\(\[\^/\]\*\)' + '\\.css\$', 'i');

