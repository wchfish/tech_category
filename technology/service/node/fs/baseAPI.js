var fs = require("fs");
/****************************************
 * 获取文件信息
 ****************************************/
// console.log("准备打开文件！");
// fs.stat('input.txt', function (err, stats) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log(stats);
//     console.log("读取文件信息成功！");
//
//     // 检测文件类型
//     console.log("是否为文件(isFile) ? " + stats.isFile());
//     console.log("是否为目录(isDirectory) ? " + stats.isDirectory());
// });

/****************************************
 * 写入文件
 ****************************************/
// console.log("准备写入文件");
// fs.writeFile('input.txt', '我是通过写入的文件内容！',  function(err) {
//     if (err) {
//         return console.error(err);
//     }
//     console.log("数据写入成功！");
//     console.log("--------我是分割线-------------")
//     console.log("读取写入的数据！");
//     fs.readFile('input.txt', function (err, data) {
//         if (err) {
//             return console.error(err);
//         }
//         console.log(data);
//         console.log("异步读取文件数据: " + data.toString());
//     });
// });

/****************************************
 * 查看目录
 ****************************************/
// console.log("查看 /fs 目录");
// fs.readdir("../fs/",function(err, files){
//     if (err) {
//         return console.error(err);
//     }
//     files.forEach( function (file){
//         console.log( file );
//     });
// });

/****************************************
 * 重命名文件
 ****************************************/
function renameFile(filename, path) {
    fs.rename('./files/button.styl', './files/button.ejs', function(err) {
        console.log(err);
    });
}

renameFile();