// 在事件驱动模型中，会生成一个主循环来监听事件，
// 当检测到事件时触发回调函数

// //引入events模块
// var events=require('events');
// //创建eventEmitter对象
// var eventEmitter=new events.eventEmitter();

// //绑定事件及时间的处理程序
// eventEmitter.on('eventName',eventHandler);
// //触发事件
// eventEmitter.emit('eventName');

//实例
var events=require('events');
var eventEmitter=new events.EventEmitter();

var connectHandler=function connected(){
	console.log('connection OK');

	//触发data_received事件
	eventEmitter.emit('data_received');
}

//绑定事件处理的第一种方式
eventEmitter.on('connection',connectHandler);
//使用匿名函数绑定事件处理
eventEmitter.on('data_received',function(){
	console.log('数据接收成功');
});
//触发connection事件
eventEmitter.emit('connection');
console.log('wanbi');

//感想：
// 这个异步在我看来就像是Java组件的监听，触发