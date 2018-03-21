/**
 * Created by wangc on 2017/6/2.
 */

/************************************
* 在页面中插入大量dom节点，并创建由1,000,000个x组成的字符串计入数组
*************************************/
var x = [];

function grow() {
  for (var i = 0; i < 10000; i++) {
    document.body.appendChild(document.createElement('div'));
  }
  x.push(new Array(1000000).join('x'));
}

document.getElementById('grow').addEventListener('click', grow);

/****************************************
 * 创建大量detachedNodes
 * 当应用中存在
 ****************************************/
var detachedTree = [], detachedTree1 = [];

// 内存占用无明显变化
function create() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10000; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
  }
  detachedTree.push(ul);
}

// 内存占用明显增加
var ulRef = [];
function create1() {
  var ul = document.createElement('ul');
  for (var i = 0; i < 10000; i++) {
    var li = document.createElement('li');
    ul.appendChild(li);
    detachedTree1.push(li);
  }
  ulRef.push(ul);
}

function clear() {
  detachedTree1 = [];
  detachedTree = [];
  ulRef = [];
}

document.getElementById('create').addEventListener('click', create1);
document.getElementById('clear').addEventListener('click', clear);

/****************************************
 * 向数组添加一个由 100 万个字符组成的字符串
 ****************************************/
var x = [];

function arrGrow() {
  x.push(new Array(1000000).join('x'));
}

document.getElementById('arrGrow').addEventListener('click', arrGrow);

/****************************************
 * 子节点包含祖先节点的引用
 ****************************************/
// var select = document.querySelector;
// var treeRef = document.querySelector("#tree");
// var leafRef = document.querySelector("#leaf");
// var ct = document.querySelector("#divTree");
//
// ct.removeChild(treeRef);
//
// //#tree can't be GC yet due to treeRef
// treeRef = null;
//
// //#tree can't be GC yet due to indirect
// //reference from leafRef
//
// // leafRef = null;
// //#NOW can be #tree GC

var pNodes = [], cNodes = [];
var ct = document.querySelector("#divTree");
function createNestNodes() {
  for (var i = 0; i < 10000; i++) {
    var div = document.createElement('div');
    var a = document.createElement('a');
    div.appendChild(a);
    ct.appendChild(div);
    pNodes.push(div);
    cNodes.push(a);
  }
}
// 清除dom结构
function clearDom() {
  ct.innerHTML = '';
}
// 清除js引用
function clearRef() {

  cNodes = [];
  pNodes = [];
}

document.getElementById('nestGrow').addEventListener('click', createNestNodes);
document.getElementById('clearDom').addEventListener('click', clearDom);
document.getElementById('clearRef').addEventListener('click', clearRef);