//读数据
var fs = require('fs');
var data = '';
//创建可读流
var readStream = fs.createReadStream('input.txt');
//设置编码方式
readStream.setEncoding('UTF8');
//处理流事件
readStream.on('data', function(chunk) {
	data += chunk;
});
readStream.on('end', function() {
	console.log(data);
});
readStream.on('error', function(err) {
	console.log(err.stack);
});
console.log('wanbi0');


//写数据
var fs1 = require('fs');
var data1 = 'www.zhihu.com';
//创建一个可以写入的流，写入到output.txt中
var writeStream = fs1.createWriteStream('output.txt');
writeStream.write(data1, "UTF8");
writeStream.end();
writeStream.on('finish', function() {
	console.log("写入完成");
});
writeStream.on('error', function(err) {
	console.log(err.stack);
});

console.log('程序完毕1');

//管道流，通常我们用于从一个流中获取数据并将数据传递到另外一个流中。
var fs2 = require("fs");

// 创建一个可读流
var readerStream = fs2.createReadStream('input.txt');

// 创建一个可写流
var writerStream = fs2.createWriteStream('output.txt');

// 管道读写操作
// 读取 input.txt 文件内容，并将内容写入到 output.txt 文件中
readerStream.pipe(writerStream);
console.log("程序2完毕");
//链式是通过连接输出流到另外一个流并创建多个对个流操作链的机制。链式流一般用于管道操作。
// 接下来我们就是用管道和链式来压缩和解压文件。
var fs3 = require('fs');
var zlib = require('zlib');

fs3.createReadStream('input.txt')
	.pipe(zlib.createGzip())
	.pipe(fs3.createWriteStream('input.txt.gz'));

console.log('文件压缩完成');

var fs4 = require('fs');
var zlib1 = require('zlib');

fs4.createReadStream('input.txt.gz')
	.pipe(zlib1.crateGunzip())
	.pipe(fs4.createWriteStream('input.txt'));
console.log('文件解压完成');