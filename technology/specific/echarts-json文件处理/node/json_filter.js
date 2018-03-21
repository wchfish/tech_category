// node
var fs = require('fs');
var path = require('path');

// lib
require('lodash');

var filterJson = fs.readFileSync('filterOption.json', 'utf-8');
var filterObj = JSON.parse(filterJson);


fs.readFile('../echarts-option.json', function(err, data) {
    if (err) console.log(err);
    var origin = JSON.parse(data);
    var result = JSON.stringify(origin);

    // 过滤result对象

    fs.writeFile('result.json', result, function(err) {
        if (err) throw err;
        console.log('The file has been writed!');
    });
});