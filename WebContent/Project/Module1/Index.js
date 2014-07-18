Project.Module1.Index=wxm.layout.cascade.AtomContainer.create({
	className:"module1_Index",
	init:function(){
		var label=$("<label>");
		label.html("index");
		this.el.append(label);
		this.constructor.__super__.init.apply(this,arguments);
		console.log("construct");
	}
});