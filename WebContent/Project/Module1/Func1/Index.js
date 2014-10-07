Project.Module1.Func1.Index=wxm.layout.cascade.AtomContainer.create({
	xEvent:{
		"testEvent":"testEventHandler"
	},
	init:function(){
		this.el.addClass("module1_func1_Index");
		var label=$("<label>");
		label.html("module1_func1_Index");
		this.el.append(label);
	},
	testEventHandler:function(value){
		alert("testEventHandler:"+value);
	}
});