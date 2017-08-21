// 使用Node创建Web服务器
//使用8081端口
var http=require('http');
var fs=require('fs');
var url=require('url');

//创建服务器
http.createServer(function (request,response) {
	// 解析请求，包括文件名
	var pathName=url.parse(request.url).pathname;

	//输出请求的文件名
	console.log("Requset for"+pathName+"received");

	//从文件系统中读取请求的文件内容
	fs.readFile(pathName.substr(1),function(err,data){
		if (err) {
			console.log(err);
	        // HTTP 状态码: 404 : NOT FOUND
	        // Content Type: text/plain
			response.writeHead(404,{'Content-Type':'text/html'});
		} else {
			response.writeHead(200,{'Content-Type':'text/html'});
			response.write('<h1>从服务器传会去的数据</h1>');
			response.write(data.toString());
		}
		//  发送响应数据
		response.end();
	});
}).listen(8081);

console.log("Server running at http://127.0.0.1:8081/");