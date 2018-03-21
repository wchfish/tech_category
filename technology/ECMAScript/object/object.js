/**
* js对象私有变量实现及访问方法
*/ 
var CreateObj = function() {
	this.name = 'obj';
	// 私有变量
	var _explain = 'private property';

	// 访问私有变量的方法
	/**
	 * @return {String} _explain 说明文字
	 */
	this.getExplain = function() {
		return _explain;
	};
	/**
	 * @param {String} explainStatement
	 */
	this.setExplain = function(explainStatement) {
		_explain = explainStatement;
	};
};
CreateObj.prototype = {
	constructor: CreateObj,
	className: 'createObj'
};

var obj1 = new CreateObj(); 

/**
* 不存在this的情况，生成的对象不会指向构造函数的原型链
*/
var CreateObj_nothis = function() {
	var _explain = 'nothis constructor';
	// 返回一个新对象，原型是Object，生成的对象不再指向构造函数的原型。
	return {
		name: 'obj',
		// 访问私有变量的方法
		getExplain: function() {
			return _explain;
		},
		setExplain: function(explainStatement) {
			_explain = explainStatement;
		}
	};
};
CreateObj_nothis.prototype = {
	constructor: CreateObj_nothis,
	className: 'createObj_onthis'
};

var obj2 = new CreateObj_nothis();


/**
* 同时存在this和return,return返回的对象覆盖了this对象
*/
var CreateObj_tr = function() {
	var _explain = 'nothis constructor';
	this.name = 'obj';
	// 返回一个新对象，原型是Object，生成的对象不再指向构造函数的原型。
	return {
		// 访问私有变量的方法
		getExplain: function() {
			return _explain;
		},
		setExplain: function(explainStatement) {
			_explain = explainStatement;
		}
	};
};
CreateObj_tr.prototype = {
	constructor: CreateObj_tr,
	className: 'createObj_tr'
};

var obj3 = new CreateObj_tr();