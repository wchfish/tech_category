/**
 * 对象原型方法中的this指针相关问题
 * */

function List(items) {
    this.items = [];
    this.items = items;
}

List.prototype.insert = function(item, index) {
    var length = this.items.length;
    if (index < 0 || index === undefined) {
        index = 0;
    } else if (index > length) {
        index = length;
    }
    if (length === 0) {
        this.items[0] = item;
    } else {
        for(var i = length - 1; i >=0; i--) {
            if (i < index) {
                this.items[index] = item;
                break;
            } else {
                this.items[i + 1] = this.items[i];
            }
        }
    }

};

let list = new List([1,2]);
list.insert(3, 2);