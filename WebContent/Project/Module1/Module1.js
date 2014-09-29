Project.Module1=wxm.layout.cascade.AtomContainer.create({
	events:{
		"click input": "clickHandler"
	},
	className:"module1",
	init:function(options){
		var label=$("<label>");
		label.html("module1");
		this.el.append(label);
		
		var input=$("<input>").attr("type","button");
		this.el.append(input);
		
		this.constructor.__super__.init.apply(this,arguments);
	},
	clickHandler:function(){
		X.evtMgr.trigger("testEvent",'123123');
	}
});