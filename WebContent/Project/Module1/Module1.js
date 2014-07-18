Project.Module1=wxm.layout.cascade.AtomContainer.create({
	className:"module1",
	init:function(options){
		var label=$("<label>");
		label.html("module1");
		this.el.append(label);
		
		this.constructor.__super__.init.apply(this,arguments);
	}
});