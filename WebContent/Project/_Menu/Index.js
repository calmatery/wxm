Project._Menu.Index=wxm.layout.cascade.AtomContainer.create({
	className:"_Menu_Index",
	init:function(){
		var label=$("<label>");
		label.html("index");
		this.el.append(label);
		console.log("construct");
	}
});