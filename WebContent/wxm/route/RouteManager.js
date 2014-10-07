wxm.route.RouteManager=Spine.Class.create({
	init:function(options){
		this.routes=[];
		this.layoutManager=(options&&options.layoutManager)||new wxm.layout.LayoutManager();
		this.container=null;
	},
	hashChangeHandler:function(){
		if(!this._hashChangeHandler){
			var me=this;
			this._hashChangeHandler=function(event){
				var hash=location.hash.substr(1);
				var route=me.matchedRoute(hash);
				for(var i=route.matchedRouteIndex+1;i<route.routeFragments.length;i++){
					route.routeFragments[i].urlFragment=null;
				}
				me.layoutManager.render(route.containerFactory,route.containerInfo);
			};
		}
		return this._hashChangeHandler;
	},
	matchedRoute:function(urlPath){
		if(!urlPath)
			return this.routes[0];
		var url=new wxm.route.Url(urlPath);
		var matchedRoutes=[];
		for(var i=0;i<this.routes.length;i++){
			var route=this.routes[i];
			route.matched(url);
			if(url.urlFragments.length==route.matchedIndex+1)
				return route;
			else{
				var maxPos=route.firstRegexpPos==-1?route.matchedIndex:route.firstRegexpPos-1;
				maxPos>=matchedRoutes.length&&(matchedRoutes[route.matchedIndex]=route);
			}
		}
		return (matchedRoutes.length>0&&matchedRoutes[matchedRoutes.length-1])||(this.routes.length>0&&this.routes[0]);
	},
	addRoute:function(route){
		this.routes.push(route);
	},
	//maybe there is a better name of this function
	addRootContainer:function(rootView){
		var stack=[];
		var nodeInfo={node:rootView,ancestors:[],routeFragments:[]};
		stack.push(nodeInfo);
		while(stack.length>0){
			var parentNodeInfo=stack.pop();
			var hasChild=false;
			for(var nodeProp in parentNodeInfo.node){
				var childNode=parentNodeInfo.node[nodeProp];
				if(childNode.prototype&&
						childNode.prototype instanceof wxm.layout.cascade.AtomContainer){
					hasChild=true;
					var routeFragments=parentNodeInfo.routeFragments.slice(0);
					var routeExpression=childNode.prototype.route||nodeProp;
					var routeFragment=new wxm.route.RouteFragment({
							routeFragment:routeExpression,
							serialNO:childNode.prototype.serialNO
						});
					nodeProp.slice(0,1)=="_"&&(routeFragment.isForMatch=!1);
					routeFragments.push(routeFragment);
					var ancestors=parentNodeInfo.ancestors.slice(0);
					if($.inArray(childNode,ancestors)>=0){
						throw "the childNode has been in ancestors";
					}
					parentNodeInfo.node!=rootView&&ancestors.push(parentNodeInfo.node);
					childNodeInfo={node:childNode,ancestors:ancestors,routeFragments:routeFragments};
					stack.push(childNodeInfo);
				}
			}
			if(!hasChild&&parentNodeInfo.node!=rootView){
				var atomContainerFactories=parentNodeInfo.ancestors.concat(parentNodeInfo.node);
				var containerInfos={atomContainerFactories:atomContainerFactories,routeFragments:parentNodeInfo.routeFragments};
				var containerInfo={
							routeFragments:parentNodeInfo.routeFragments,
							containerFactory:wxm.layout.cascade.CascadeContainer,
							containerInfo:containerInfos
						};
				var route=new wxm.route.Route(containerInfo);
				this.addRoute(route);
			}
		}
	},
	startListener:function(){
		this.routes.sort(function(o1,o2){
			return o1.compare(o2);
		});
		$(window).bind("hashchange",this.hashChangeHandler());
	}
});