// node
var fs = require('fs');
var path = require('path');

fs.readFile('example.json', function(err, data) {
    if (err) console.log(err);
    var origin = JSON.parse(data);
    debugger
    var result = JSON.stringify(origin);

    fs.writeFileSync('result.json', result);
});