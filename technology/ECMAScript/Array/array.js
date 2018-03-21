/**
 * Created by wangc on 2017/6/4.
 */

/****************************************
 * 数组归并方法reduce
 ****************************************/
var nums = [1, 2, 3], sum1, sum2;

// 省略初始值，归并从第二项开始，total一开始是第一项的值
sum1 = nums.reduce(function(total, num, index, arr) {
  total += num;
  return total;
});

// 传递初始值,归并从第一项开始
sum2 = nums.reduce(function(total, num, index, arr) {
    total += num;
    return total;
}, 0);