var server=require('./Server-router');
var router=require('./router');

server.start(router.route);