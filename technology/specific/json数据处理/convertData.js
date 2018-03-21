var data = of_data.body.msg[0].data;
data = JSON.parse(data);

var openfalconData = GraphData.init('openfalcon');
openfalconData.setOriginData(data);
openfalconData.convertToChart();
openfalconData.setChartType('line');

var chartData = openfalconData.getChartData();
debugger