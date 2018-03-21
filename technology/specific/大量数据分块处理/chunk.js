function chunk(array, process, context) {
    var _self = this;
    setTimeout(function() {
        var item = array.shift();
        process.call(context, item);
        if (array.length > 0) {
            setTimeout(function() {
                _self.chunk(array, process, context);
            }, 30);
        }
    }, 30);
}

var nums = ['1', '2', '3', '4', '5'];

function printNum(num) {
    console.log(num);
}

chunk(nums, printNum);