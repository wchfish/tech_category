/*
* 定义可变动数据对象，并分析实现层和使用层的接口
* */
function ChartType() {
    this.types = ['bar', 'pie', 'line'];
    this.selected = this.types[0];
    this.enableType = this.types;
    this.disableType = [];
    this.getType = function() {
        return this.selected;
    };
    this.setType = function(type) {
        this.selected = type;
    };
}

var chartType = new ChartType();
var selectedType = chartType.getType();
console.log(selectedType);
chartType.setType('pie');
selectedType = chartType.getType();
console.log(selectedType);