Project.Module1.Func1=wxm.layout.cascade.AtomContainer.create({
	xEvent:{
		"testEvent":"testEventHandler"
	},
	tag:'nav',
	serialNO:10,
	className:"module1_func1 module1_func1_test",
	init:function(options){
		var label=$("<label>");
		label.html("module1_func1");
		this.el.append(label);
	},
	testEventHandler:function(value){
		alert("123sstestEventHandler:"+value);
	},
	remove:function(){
		this.constructor.__super__.remove.apply(this,arguments);
		console.log('rewriteRemove');
	}
});