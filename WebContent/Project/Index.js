Project.Index=wxm.layout.cascade.AtomContainer.create({
	className:"Index",
	route:/^asd[a-z]$/gi,
	init:function(option){
		var label=$("<label>");
		label.html("index");
		this.el.append(label);
		this.constructor.__super__.init.apply(this,arguments);
		console.log("construct");
	}
});