Project.Module2=wxm.layout.cascade.AtomContainer.create({
	className:"module2",
	init:function(){
		
		var label=$("<label>");
		label.html("module2");
		this.el.append(label);
		
		this.constructor.__super__.init.apply(this,arguments);
	}
});