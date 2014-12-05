Project.asdff=wxm.layout.cascade.AtomContainer.create({
	className:"Index",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("asdff");
		this.el.append(label);
	}
});

Project.URL1=wxm.layout.cascade.AtomContainer.create({
	className:"URL1",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL1");
		this.el.append(label);
	}
});

Project.URL1.URL2=wxm.layout.cascade.AtomContainer.create({
	className:"URL2",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL2");
		this.el.append(label);
	}
});

Project.URL1.URL2.URL3=wxm.layout.cascade.AtomContainer.create({
	className:"URL3",
	serialNO:50,
	init:function(option){
		var label=$("<label>");
		label.html("URL3");
		this.el.append(label);
	}
});

Project.URL1.URL4=wxm.layout.cascade.AtomContainer.create({
	className:"URL4",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL4");
		this.el.append(label);
	}
});

Project.URL1.URL4.URL3=wxm.layout.cascade.AtomContainer.create({
	className:"URL3",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL3");
		this.el.append(label);
	}
});

Project.URL1.URL4.RegExp2=wxm.layout.cascade.AtomContainer.create({
	className:"RegExp2",
	serialNO:30,
	route:/^[a-z]$/gi,
	xEvent:{
		"urlChange":"urlChangeHandler"
	},
	init:function(option){
		var label=this.label=$("<label>");
		label.html("RegExp2"+this.routeFragment.urlFragment);
		this.el.append(label);
		console.log("RegExp2");
	},
	urlChangeHandler:function(url){
		this.label.html("RegExp2"+this.routeFragment.urlFragment);
	}
});

Project.URL1.URL4.RegExp2.URL5=wxm.layout.cascade.AtomContainer.create({
	className:"URL5",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL5");
		this.el.append(label);
	}
});

Project.URL1.URL4.RegExp2.URL6=wxm.layout.cascade.AtomContainer.create({
	className:"URL6",
	serialNO:10,
	init:function(option){
		var label=$("<label>");
		label.html("URL6");
		this.el.append(label);
	}
});

Project.URL1.RegExp2=wxm.layout.cascade.AtomContainer.create({
	className:"RegExp2",
	serialNO:10,
	route:/^[a-z]$/gi,
	init:function(option){
		var label=$("<label>");
		label.html("RegExp2");
		this.el.append(label);
	}
});