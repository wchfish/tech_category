/**
 * Created by lenovo on 2017/7/1.
 */
(function(window) {
    // 格式化一个字符串日期
    function dateFormate() {
        console.log('转换后的时间：');
        var v = '2017-06-05 13:50:00';
        var format = ['yyyy', 'yyyy-MM', 'yyyy-MM-dd', 'yyyy-MM-dd hh', 'yyyy-MM-dd hh:mm', 'yyyy-MM-dd hh:mm:ss'];
        switch (format[4]) {
            case 'yyyy':
                v = year;
                break;
            case 'yyyy-MM':
                v = moment(v).format('YYYY-MM');
                break;
            case 'yyyy-MM-dd':
                v = moment(v).format('YYYY-MM-DD');
                break;
            case 'yyyy-MM-dd hh':
                v = moment(v).format('YYYY-MM-DD hh');
                break;
            case 'yyyy-MM-dd hh:mm':
                v = moment(v).format('YYYY-MM-DD hh:mm');
                break;
            case 'yyyy-MM-dd hh:mm:ss':
                v = moment(v).format('YYYY-MM-DD hh:mm:ss');
                break;
            default:
                break;
        }
        console.log(v);
        console.log(typeof v);
    }

    // 根据当前日期获取相关日期
    function jumpToDate() {
        var curDate = new Date();
        var momentObj = moment(curDate);
        var weekStart = momentObj.startOf('week').format('YYYY-MM-DD');
        console.log(weekStart);
        console.log(typeof weekStart);
    }
    jumpToDate();
})(window);