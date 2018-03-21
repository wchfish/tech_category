/**
 * Created by wangc on 2017/6/2.
 */

/**************************
* 删除元素
***************************/

// remove:元素从文档流中删除，返回dom对象。元素绑定的事件和附加的数据都被移除
var $delElem = $('.delElem'), delElem = $delElem[0];

$.data(delElem, 'text', 'haha');
$delElem.data('name', 'delete');

$delElem.on('click', function() {
  console.log('clicked!');
});

$delElem.remove();

// $delElem = null;
delElem = null;

// empty:元素的所有子元素被删除
var emptyElem = $('.emptyElem').empty();