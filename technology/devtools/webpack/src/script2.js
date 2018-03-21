/**
 * Created by wangc on 2017/5/23.
 */
var script3name = require('./script3.js');
script3name.name = 'filename hasChange!';

var filename = 'script12.js';
console.log('scope:script2; filename:' + script3name.name);
module.exports = filename;

