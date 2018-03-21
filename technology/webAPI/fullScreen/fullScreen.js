/**
 * Created by wangc on 2017/5/16.
 */

/**************************************************************
 由于浏览器安全策略的限制，requestFullscreen API不能在脚本中直接执行，
 必须在用户触发的事件中调用。
 ****************************************************************/
// 获取顶层页面
function getTopWindow() {
  var top;
  if (window.top) {
    top = window.top;
  }
  return top;
}

// 页面全屏显示
function fullscreen(doc) {
  if (!doc) {
    doc = document;
  }
  var docElm = doc.documentElement;
  if (docElm.requestFullscreen) {
    docElm.requestFullscreen();
  } else if (docElm.mozRequestFullScreen) {
    docElm.mozRequestFullScreen();
  } else if (docElm.webkitRequestFullScreen) {
    docElm.webkitRequestFullScreen();
  } else if (docElm.msRequestFullscreen) {
    docElm.msRequestFullscreen();
  }
}

iframeFullScreen();
// 退出全屏
function exitFullscreen(doc) {
  if (!doc) {
    doc = document;
  }
  if (doc.exitFullscreen) {
    doc.exitFullscreen();
  } else if (doc.mozCancelFullScreen) {
    doc.mozCancelFullScreen();
  } else if (doc.webkitCancelFullScreen) {
    doc.webkitCancelFullScreen();
  } else if (doc.msExitFullscreen) {
    doc.msExitFullscreen();
  }
}

// 监听是否全屏
window.onload = function() {
  var elem = document.getElementById('screenState');
  document.addEventListener('fullscreenchange',
      function() {
        elem.innerText = document.fullscreen ? 'yes': 'no';
      },
      false);
  document.addEventListener('mozfullscreenchange',
      function() {
        elem.innerText = document.mozFullScreen ? 'yes': 'no';
      },
      false);
  document.addEventListener('webkitfullscreenchange',
      function() {
        elem.innerText = document.webkitIsFullScreen ? 'yes': 'no';
      },
      false);
  document.addEventListener('msfullscreenchange',
      function() {
        elem.innerText = document.msFullscreenElement ? 'yes': 'no';
      },
      false);
};

// iframe页面的全屏
function iframeFullScreen() {
  var top, doc;
  top = getTopWindow();
  doc = top.document;
  fullscreen(doc);
}

// iframe页面退出全屏
function iframeExitFullScreen() {
  var top, doc;
  top = getTopWindow();
  doc = top.document;
  exitFullscreen(doc);
}

// 按钮点击方法绑定
// $('.btn-fullScreen').on('click', function() {
//   iframeFullScreen();
// });
//
// $('.btn-exitFullScreen').on('click', function() {
//   iframeExitFullScreen();
// });
