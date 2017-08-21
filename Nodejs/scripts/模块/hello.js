function Hello() {
	// body...
	var name;
	this.sayHello=function(){
		console.log('Hello '+name);
	};
	this.setName=function(theName){
		name=theName;
	};
};
module.exports=Hello;