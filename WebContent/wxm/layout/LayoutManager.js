wxm.layout.LayoutManager=wxm.event.AbstractEventMedium.create({
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
			routeFragments:containerInfo.routeFragments,
			lastContainer:this.lastContainer,
			el:this.el,lastContainer:this.lastContainer});
		this.lastContainer=container;
	},
	getNextMedium:function(){
		return this.lastContainer;
	}
});