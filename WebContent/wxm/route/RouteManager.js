wxm.route.RouteManager=Spine.Class.create({
	init:function(options){
		this.routes=[];
		this.layoutManager=(options&&options.layoutManager)||new wxm.layout.LayoutManager();
		this.container=null;
	},
	hashChangeHandler:function(event){
		var hash=location.hash.substr(1);
		var container=this.getContainerInfo(hash);
		
	},
	getContainerInfo:function(url){
		
	},
	addRoute:function(route){
		this.routes.push(route);
	},
	//maybe there is a better name of this function
	addRootContainer:function(rootView){
		var stack=[];
		var nodeInfo={node:rootView,ancestors:[],fragments:[]};
		stack.push(nodeInfo);
		while(stack.length>0){
			var parentNodeInfo=stack.pop();
			var hasChild=false;
			for(var nodeProp in parentNodeInfo.node){
				var childNode=parentNodeInfo.node[nodeProp];
				if(childNode.prototype&&
						childNode.prototype instanceof wxm.layout.AbstractContainer){
					hasChild=true;
					var fragments=parentNodeInfo.fragments.slice(0);
					fragments.push(nodeProp);
					var ancestors=parentNodeInfo.ancestors.slice(0);
					if($.inArray(childNode,ancestors)>=0){
						throw "the childNode has been in ancestors";
					}
					parentNodeInfo.node!=rootView&&ancestors.push(parentNodeInfo.node);
					childNodeInfo={node:childNode,ancestors:ancestors,fragments:fragments};
					stack.push(childNodeInfo);
				}
			}
			if(!hasChild){
				var containerFactories=parentNodeInfo.ancestors.concat(parentNodeInfo.node);
				var containerInfos={containerFactories:containerFactories,fragments:parentNodeInfo.fragments};
				
				var containerInfo={
							fragments:parentNodeInfo.fragments,
							containerFactory:wxm.layout.CascadeContainer,
							containerInfo:containerInfos
						};
				var route=new wxm.route.Route(containerInfo);
				this.addRoute(route);
			}
		}
	},
	startListener:function(){
		$(window).bind("hashchange",this.hashChangeHandler);
	}
});