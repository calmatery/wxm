Project.App=Spine.Class.create({
	init:function(){
		var projectEl=$("<div>").addClass("project");
		$("body").append(projectEl);
		this.layoutManager=new wxm.layout.LayoutManager({el:projectEl});
		this.routeManager=new wxm.route.RouteManager({layoutManager:this.layoutManager});
		this.routeManager.addRootContainer(Project);
		X.evtMgr.registerEventMedium(this.layoutManager);
		this.routeManager.startListener();
		location.hash==''?location.hash='Module1/Func1':this.routeManager._hashChangeHandler();
	}
});
$(document).ready(function(){
	window.app=new Project.App();
});
