/**
 * Created by wangc on 2017/6/1.
 */

$(function() {

  /***********************************************
   * 元素同一事件绑定多个处理函数，处理函数按照绑定的顺序执行
   ***********************************************/
  $('.elem2').on('click', function(e) {
    console.log('handler1');
  });

  $('.elem2').on('click', function(e) {
    console.log('handler2');
  });

  $('.elem2').off('click');

  /**************************************************
  * 通过off解绑某个事件命名空间（namespace1），该命名空间下的所有事件处理函数都会被解绑
  **************************************************/
  $('.elem1').on('click.namespace1', function(e) {
    console.log('handler1');
  });
  $('.elem1').on('mouseover.namespace1', function(e) {
    console.log('handler2');
  });
  $('.elem1').off('.namespace1');

  /***********************************************
  * 通过命名空间，元素同一事件的不同处理函数可以独立的绑定和解绑
  ***********************************************/
  $('.elem2').on('click.namespace1', function(e) {
    console.log('handler1');
  });

  $('.elem2').on('click.namespace2', function(e) {
    console.log('handler2');
  });

  $('.elem2').off('click.namespace1');
  $('.elem2').off('click.namespace2');

});