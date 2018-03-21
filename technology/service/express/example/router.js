/**
 * Created by wangc on 2017/6/11.
 */
// 对网站首页的访问返回 "Hello World!" 字样
var express = require('express');
var app = express();

app.get('/', function (req, res) {
    res.send('Hello World!');
});

// 网站首页接受 POST 请求
app.post('/', function (req, res) {
    res.send('Got a POST request');
});

// /user 节点接受 PUT 请求
app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user');
});

// /user 节点接受 DELETE 请求
app.delete('/user', function (req, res) {
    res.send('Got a DELETE request at /user');
});

// 模拟服务路由
app.get(/do$/, function (req, res) {
    var obj = {name: 'responseObj'};
    res.send(obj);
});

var server = app.listen(3000, function () {
    var host = server.address().address;
    var port = server.address().port;

    console.log(server.address());
    console.log('Example app listening at http://%s:%s', host, port);
    console.log(host);
    console.log(port);
});

app.use('/fe', express.static('public'));

