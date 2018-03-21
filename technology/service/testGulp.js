//引入gulp和gulp插件，引入bundle的文件名（注意，bundle要和gulpVersion同级）
var gulp = require('gulp'),
    conf = require('./conf.json'),
    path = require('path'),
    runSequence = require('run-sequence'),
    rev = require('gulp-rev'),
    revCollector = require('gulp-rev-collector'),
    glob = require('glob'),
    gulp_uglify = require('gulp-uglify'),
    gulp_sourceMaps = require('gulp-sourcemaps'),
    gulp_clean_css = require('gulp-clean-css'),
    clean = require('gulp-clean');
//根据conf.bundleArray维护一个任务列表
var devList = [];
//针对bundleArray数组的每一项进行任务的定义
conf.bundleArray.forEach(function (val, index) {
    var i = index;
    //判断当前项目是否配置关闭
    if (conf.bundleArray[i]['switch'] === 'off') {
        return false;
    }
    //获取当前项目的配置数据
    var bundle = conf.bundleArray[i],
        bundleRoot = bundle['bundleUrl'],
        developmentRoot = bundle['developmentRoot'],
        cssEntry = developmentRoot + '/**/*.css',
        jsEntry = developmentRoot + '/**/*.js',
        //imgEntry = developmentRoot + '/**/*.png',
        versionFiles = developmentRoot + '/**/*.html';
    //设置glob
    var pathOptions = {
        cwd: bundleRoot, // 在lib目录里找
        matchBase: true,
        sync: true // 这里不能异步，只能同步
    };
    (function (callback) {
        //清空build目录的任务
        gulp.task('clean_build', function () {
            return gulp.src([bundleRoot + 'dist/**/*.*', bundleRoot + 'dist/**/*'])
                .pipe(clean());
        });
        //构建css压缩合并任务
        gulp.task('disposeCss' + '_' + i, ['clean_build'], function () {
            console.log(bundleRoot + '/' + cssEntry);
            return gulp.src(bundleRoot + '/' + cssEntry)
                .pipe(gulp_clean_css())
                .pipe(gulp.dest(bundleRoot + '/dist'));
        });
        //构建js压缩合并任务
        gulp.task('disposeJs' + '_' + i, ['disposeCss' + '_' + i], function () {
            return gulp.src(bundleRoot + '/' + jsEntry)
                .pipe(gulp_sourceMaps.init())
                .pipe(gulp_uglify({preserveComments: 'license'}))
                .pipe(gulp_sourceMaps.write('maps'))
                .pipe(gulp.dest(bundleRoot + '/dist'));
        });
        //图片img的压缩处理
        //现在还不想弄。。。
        //执行回调（回调函数就是下边那个function）
        callback();
    })(function () {
        //CSS生成文件hash编码并生成 rev-manifest.json文件名对照映射
        gulp.task('revCss' + i, ['disposeJs' + '_' + i], function () {
            return gulp.src(bundleRoot + '/dist/**/*.css')
                .pipe(rev())
                .pipe(rev.manifest())
                .pipe(gulp.dest(path.resolve(bundleRoot + '/dist/rev/css/')));
        });
        //js生成文件hash编码并生成 rev-manifest.json文件名对照映射
        gulp.task('revJs' + i, ['revCss' + i], function () {
            return gulp.src(bundleRoot + '/dist/**/*.js')
                .pipe(rev())
                .pipe(rev.manifest())
                .pipe(gulp.dest(path.resolve(bundleRoot + '/dist/rev/js/')));
        });
        //Html或者其他需要替换版本号的文件更换css、js文件版本
        gulp.task('addVersion' + '_' + i, ['revJs' + i], function () {
            versionFiles = versionFiles.indexOf('/') === 0 ? versionFiles : '/' + versionFiles;
            console.log('任务' + i + "结束！");
            return gulp.src([bundleRoot + '/dist/rev/**/*.json', bundleRoot + versionFiles])
                .pipe(revCollector({replaceReved: true}))
                .pipe(gulp.dest(bundleRoot + '/dist/'));
        });
    });
    //构建dev任务，整合（ [css合并压缩任务，js合并压缩任务，img处理任务] > 【css添加版本号任务，js添加版本号任务] > [更新版本号任务] ）
    devList.push(['addVersion' + '_' + i]);
});
//将dev列表中的任务绑定给default
gulp.task('default', function () {
    console.log(devList);
    runSequence.apply(this, devList);
});