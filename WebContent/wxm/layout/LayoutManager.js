wxm.layout.LayoutManager=Spine.Class.create({
	init:function(options){
		this.el=options&&options.el;
		this.el||this.createEl();
		this.lastContainer=null;
	},
	createEl:function(){
		this.el=$("<div>");
		$("body").append(this.el);
	},
	render:function(containerFactory,containerInfo){
		var container=new containerFactory({atomContainerFactories:containerInfo.atomContainerFactories,
			fragments:containerInfo.fragments,
			lastContainer:this.lastContainer,
			el:this.el,lastContainer:this.lastContainer});
		this.lastContainer=container;
	}
});