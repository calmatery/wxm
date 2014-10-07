Project.Module1=wxm.layout.cascade.AtomContainer.create({
	events:{
		"click input": "clickHandler"
	},
	tag:'nav',
	className:"module1",
	init:function(options){
		var label=$("<label>");
		label.html("module1");
		this.el.append(label);
		
		var input=$("<input>").attr("type","button");
		this.el.append(input);
	},
	clickHandler:function(){
		console.log("asdf");
		X.evtMgr.trigger("testEvent",'123123');
	}
});