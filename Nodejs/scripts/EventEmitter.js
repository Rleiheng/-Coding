// // 引入 events 模块
// var events = require('events');
// // 创建 eventEmitter 对象
// var eventEmitter = new events.EventEmitter();

//或者用这种方式
// var EventEmitter = require('events').EventEmitter
// var event = new EventEmitter();
// event.on('some_event', function() {
// 	console.log('some_event 事件触发');
// });
// setTimeout(function() {
// 	event.emit('some_event');
// }, 1000);
// EventEmitter 的每个事件由一个事件名和若干个参数组成，
// 事件名是一个字符串，通常表达一定的语义。对于每个事件，
// EventEmitter 支持 若干个事件监听器。
// var events = require('events');
// var emitter = new events.EventEmitter();
// emitter.on('someevent', function(a1, a2) {
// 	console.log('listener1', a1, a2);
// });
// emitter.on('someevent', function(a3) {
// 	console.log('listener2', a3);
// });
// emitter.emit('someevent', "a1", 'a2');

// 大多数时候我们不会直接使用 EventEmitter，而是在对象中继承它。
// 包括 fs、net、 http 在内的，只要是支持事件响应的核心模块都是 EventEmitter 的子类。
// 为什么要这样做呢？原因有两点：
// 首先，具有某个实体功能的对象实现事件符合语义, 
// 事件的监听和发射应该是一个对象的方法。
// 其次 JavaScript 的对象机制是基于原型的，
// 支持 部分多重继承，继承 EventEmitter 不会打乱对象原有的继承关系。

var events = require('events');
var eventEmitter = new events.EventEmitter();

// 监听器 #1
var listener1 = function listener1() {
	console.log('监听器 listener1 执行。');
}

// 监听器 #2
var listener2 = function listener2() {
	console.log('监听器 listener2 执行。');
}

// 绑定 connection 事件，处理函数为 listener1 
eventEmitter.addListener('connection', listener1);

// 绑定 connection 事件，处理函数为 listener2
eventEmitter.on('connection', listener2);

var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

// 处理 connection 事件 
eventEmitter.emit('connection');

// 移除监绑定的 listener1 函数
eventEmitter.removeListener('connection', listener1);
console.log("listener1 不再受监听。");

// 触发连接事件
eventEmitter.emit('connection');

eventListeners = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " 个监听器监听连接事件。");

console.log("程序执行完毕。");