// 创建长度为 10 字节的 Buffer 实例：
var buf1 = new Buffer(10);
// 通过给定的数组创建 Buffer 实例：
var buf2 = new Buffer([10, 20, 30, 40, 50]);
// 通过一个字符串来创建 Buffer 实例：
var buf3 = new Buffer("www.runoob.com", "utf-8");
// string - 写入缓冲区的字符串。
// offset - 缓冲区开始写入的索引值，默认为 0 。
// length - 写入的字节数，默认为 buffer.length
// encoding - 使用的编码。默认为 'utf8' 。
// 返回实际写入的大小
buf1.write(string[, offset[, length]][, encoding]);
// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。
buf1.toString([encoding[,start[,end]]]);
// 转化成JSON对象
var buf4 = new Buffer('www.runoob.com');
var json = buf.toJSON(buf4);
console.log(json);
// 缓冲区合并
var buffer1 = new Buffer('菜鸟教程 ');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("buffer3 内容: " + buffer3.toString());
//比较
var buffer1 = new Buffer('ABC');
var buffer2 = new Buffer('ABCD');
var result = buffer1.compare(buffer2);

if(result < 0) {
   console.log(buffer1 + " 在 " + buffer2 + "之前");
}else if(result == 0){
   console.log(buffer1 + " 与 " + buffer2 + "相同");
}else {
   console.log(buffer1 + " 在 " + buffer2 + "之后");
}

//感想：
// 类似于java的BufferBuild