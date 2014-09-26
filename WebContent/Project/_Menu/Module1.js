Project._Menu=wxm.layout.cascade.AtomContainer.create({
	className:"_Menu",
	init:function(options){
		var label=$("<label>");
		label.html("_Menu");
		this.el.append(label);
		
		this.constructor.__super__.init.apply(this,arguments);
	}
});