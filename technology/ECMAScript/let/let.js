// function doSome(flag) {
//     var i = 0;
//     let m = {};
//     if (flag) {
//         let j = {};
//         m.name = 'i am j.';
//         debugger
//     } else {
//         let k = {};
//         k.name = 'i am k.';
//         debugger
//     }
// }
// doSome(true);

function ShowNum(num) {
    this.num = num || undefined;
}

ShowNum.prototype.displayNum = function() {
    console.log(this.num);
};

ShowNum.prototype.setNum = function(num) {
    this.num = num;
};

ShowNum.prototype.getNum = function() {
    return this.num;
};

var arr = [1, 2, 3, 4];
arr.forEach(function(item, index) {
    let sn = new ShowNum();
    if (item) {
        sn.setNum(item);
        sn.displayNum();
    } else {
        sn.setNum(0);
        sn.displayNum();
    }
});

