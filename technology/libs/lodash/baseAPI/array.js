// node
var _ = require('lodash');

var arr = [1, 2, 3, 4],
    newArr;

newArr = _.chunk(arr, 2);

newArr = _.drop(arr, 3);

arr = [1, [2, [3, 4], 5]];
newArr = _.flatten([1, [2, [3, 4], 5]]);

newArr = _.flattenDeep([1, [2, [3, 4], 5]]);

newArr = _.flattenDepth([1, [2, [3, [4]], 5]], 2);

newArr = _.indexOf([1, 2, 1, 2], 2);
newArr = _.indexOf([1, 2, 1, 2], 2, 1);

newArr = _.nth(['a', 'b', 'c', 'd'], 1);
newArr = _.nth(['a', 'b', 'c', 'd'], -2);
debugger
