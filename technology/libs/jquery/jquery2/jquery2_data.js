/**
 * Created by lenovo on 2017/7/17.
 */
/**
 * data接口测试
 * */
$(function() {
    var $div = $('#elem'),
        div = $div[0];
    $.data(div, 'f1Bdgrid', {target: 'test'});

    var data1 = $div.data();
    debugger
});