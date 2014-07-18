Project.App=Spine.Class.create({
	init:function(){
		var projectEl=$("<div>").addClass("project");
		$("body").append(projectEl);
		this.layoutManager=new wxm.layout.LayoutManager({el:projectEl});
		this.routeManager=new wxm.route.RouteManager({layoutManager:this.layoutManager});
		this.routeManager.addRootContainer(Project);
		this.routeManager.startListener();
		location.hash='Module1/Func1'
	}
});
$(document).ready(function(){
	window.app=new Project.App();
});
