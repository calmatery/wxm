Project.Module1.Func1=wxm.layout.cascade.AtomContainer.create({
	className:"module1_func1 module1_func1_test",
	init:function(options){
		var label=$("<label>");
		label.html("module1_func1");
		this.el.append(label);
		this.constructor.__super__.init.apply(this,arguments);
	}
});