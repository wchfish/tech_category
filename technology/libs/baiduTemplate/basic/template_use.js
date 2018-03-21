/**
 * Created by wangc on 2017/6/7.
 */

var p = {
    hasTitleImage: true,
    showFields: ['PERSNAME', 'PHONE'],
    data: {
        PERSNAME: '小王',
        PHONE: '13623456789'
    }
};

var tplData = {
    hasTitleImage: p.hasTitleImage,
    showFields: p.showFields,
    data: p.data
};

var defaultTpl = '<dl class="magentCard-mainInfo clearfix">'
    +    '<%if(hasTitleImage) { %>'
    +    '<dt class="magentCard-titleIcon">'
    +        '<i class="titleIcon-icon icon icon-user"></i>'
    +    '</dt>'
    +    '<dt class="magentCard-titleImage"  style="display:none;"></dt>'
    +    '<%}%>'
    +'</dl>'
    +'<div  class="magentCard-detailInfo">'
    +    '<%for(var i = 0; i < showFields.length; i++) {%>'
    +    '<div class="magentCard-infoItem"><%=data[showFields[i]]%></div>'
    +    '<%}%>'
    +'</div>';
var tplHtml = baidu.template(defaultTpl, tplData);
document.getElementById('content').innerHTML = tplHtml;