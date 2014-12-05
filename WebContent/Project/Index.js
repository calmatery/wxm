Project.Index=wxm.layout.cascade.AtomContainer.create({
	className:"Index",
	serialNO:1000,
	init:function(option){
		var label=$("<label>");
		label.html("index");
		this.el.append(label);
	}
});

Project.Index1=wxm.layout.cascade.AtomContainer.create({
	className:"module1_Index",
	serialNO:10,
	route:"Index",
	init:function(){
		
		var label=$("<label>");
		label.html("aaa[]f");
		this.el.append(label);
	}
});