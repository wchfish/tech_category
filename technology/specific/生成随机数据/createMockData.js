/*
* 创建cpu占用率监控数据的模拟程序
* */
var moment = require('moment');

function cpuData() {
    var num = 20;
    var counterValue = [];
    var obj;

    for(var i = 0; i < 20; i++) {
        obj = {};
        obj.time = moment().add(10 * i, 's').valueOf();
        obj.value = Math.floor(Math.random() * 100);
        counterValue.push(obj);
    }

    return counterValue;
}

var data = cpuData();