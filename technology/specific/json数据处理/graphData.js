/*
* 图表数据基类，提供图表数据的基础操作
* */

function GraphData() {
    this.originData = null;
    this.chartSeries = null;
}

GraphData.prototype = {
    constructor: GraphData,
    // 设置原始数据
    setOriginData: function(data) {
        this.originData = data;
    },
    getChartData: function(data) {
        return this.chartData;
    },
    // 把原始数据转换为图表的series数据,子类需要自己实现
    convert: function() {

    },
    // 设置图表数据的series（系列）类型
    setChartType: function (type) {
        this.chartData = _
            .chain(this.chartData)
            .map(function(o) {
                o.type = type;
                return o;
            })
            .value();
    }
};

// 图表数据初始化函数,type是数据的数据源类型,采用小写命名方式
GraphData.init = function(type) {
    var constructor;
    switch (type) {
        case 'openfalcon':
            constructor = OpenFalconData;
            break;
        case 'mysql':
            constructor = MySqlData;
            break;
        default:
            constructor = GraphData;
            break;
    }
    return new constructor();
};

function OpenFalconData() {
    GraphData.call(this);
}

// OpenFalcon的函数原型对象，继承自GraphData
OpenFalconData.prototype = _.create(GraphData.prototype, {
    constructor: OpenFalconData,
    // 原始数据转换成用于图表展示的数据
    convertToChart: function() {
        this.chartData = _
            .chain(this.originData)
            .map(function(o) {
                var data = _
                    .chain(o.data)
                    .map(function(item) {
                        // 时间戳的单位从秒转为毫秒，适应echarts时间轴的显示单位
                        if (_.has(item, 'timestamp')) {
                            item.timestamp = moment.unix(item.timestamp).valueOf();
                        }
                        return _.values(item);
                    })
                    .value();
                return {
                    name: o.endpoint + ' ' + o.name,
                    // o.data是一维数组，数组元素是对象，转换为二维数组，元素是对象映射成的数组
                    data : data
                }
            })
            .value();
    },
});