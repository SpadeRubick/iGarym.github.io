//发布到指定目录
fis.match('(*.{png,gif,jpg})', {release: '/images/$1$2$3'});
fis.match('/scripts/(*.{js,jsx})', { release: '/js/$1$2' });
fis.match('/styles/(*.{css,less})', { release: '/css/$1$2'});
fis.match('/views/**.html',{release: '$0'});
fis.match('index.html',{release: '$0'});
/*fis.match('/test/*.json', {release: '$0'});
fis.match('/test/*.conf', {release: '/config/server.conf'});*/
//加MD5
fis.match('*.{js,css,png,jpg,gif,jpeg}', {
    useHash: false
});

//编译LESS
/*fis.match('*.less', {
    parser: fis.plugin('less'),
    // .less 文件后缀构建后被改成 .css 文件
    rExt: '.css'
})*/

//压缩资源
fis.match('*.png', {
    optimizer: fis.plugin('png-compressor')
});
fis.match('*.js', {
    optimizer: fis.plugin('uglify-js')
});
fis.match('*.css', {
    optimizer: fis.plugin('clean-css')
})

//图片合并
fis.match('::package', {
    spriter: fis.plugin('csssprites')
})
fis.match('(*.{css,less})', {
    //给匹配到的文件分配属性 `useSprite`
    useSprite: true
});
fis.config.set('settings.spriter.csssprites', {
    //图之间的边距
    margin: 20,
    //使用矩阵排列方式，默认为线性`linear`,matrix
    layout: 'linear'
});


//文件合并
/*fis.match('::package', {
  postpackager: fis.plugin('loader')
});
fis.match('*.less', {
  parser: fis.plugin('less'),
  rExt: '.css'
});

fis.match('*.{less,css}', {
  packTo: '/static/aio.css'
});*/

//debug
/*fis.media('debug').match('*.{js,css,png,}', {
    useHash: false,
    useSprite: false,
    optimizer: null
})*/

//后台假数据处理
/*fis.match('/test/**', {
  release: '$0'
});
fis.match('/test/server.conf', {
  release: '/config/server.conf'
});
*/
