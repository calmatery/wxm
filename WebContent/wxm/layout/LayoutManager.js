wxm.layout.LayoutManager=Spine.Class.create({
	init:function(options){
		this.el=options&&options.el;
		this.el||this.createEl();
	},
	createEl:function(){
		this.el=$("<div>");
		$("body").append(this.el);
	},
	render:function(){
		
	}
});