Project.Module1.Func2=wxm.layout.cascade.AtomContainer.create({
	className:"module1_func2 module1_func2_test",
	init:function(options){
		
		var label=$("<label>");
		label.html("module1_func2");
		this.el.append(label);
		
		this.constructor.__super__.init.apply(this,arguments);
	}
});