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
				for(var i=route.matchedIndex+1;i<route.fragments.length;i++){
					route.fragments[i].urlFragment=null;
				}
				me.layoutManager.render(route.containerFactory,route.containerInfo);
			};
		}
		return this._hashChangeHandler;
	},
	matchedRoute:function(urlPath){
		var url=new wxm.route.Url(urlPath);
		var matchedRoutes=[];
		for(var i=0;i<this.routes.length;i++){
			var route=this.routes[i];
			route.matched(url);
			if(url.fragments.length==route.matchedIndex+1)
				return route;
			else if(route.matchedIndex>=0){
				matchedRoutes[route.matchedIndex]=route;
			}
		}
		return (matchedRoutes.length>0&&matchedRoutes[matchedRoutes.length-1])||(this.routes.length>0&&this.routes[0])||null;
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
						childNode.prototype instanceof wxm.layout.cascade.AtomContainer){
					hasChild=true;
					var fragments=parentNodeInfo.fragments.slice(0);
					var routeExpression=childNode.prototype.route||nodeProp;
					var fragment=new wxm.route.RouteFragment({fragment:routeExpression});
					nodeProp.slice(0,1)=="_"&&(fragment.isForMatch=!1);
					fragments.push(fragment);
					var ancestors=parentNodeInfo.ancestors.slice(0);
					if($.inArray(childNode,ancestors)>=0){
						throw "the childNode has been in ancestors";
					}
					parentNodeInfo.node!=rootView&&ancestors.push(parentNodeInfo.node);
					childNodeInfo={node:childNode,ancestors:ancestors,fragments:fragments};
					stack.push(childNodeInfo);
				}
			}
			if(!hasChild&&parentNodeInfo.node!=rootView){
				var atomContainerFactories=parentNodeInfo.ancestors.concat(parentNodeInfo.node);
				var containerInfos={atomContainerFactories:atomContainerFactories,fragments:parentNodeInfo.fragments};
				var containerInfo={
							fragments:parentNodeInfo.fragments,
							containerFactory:wxm.layout.cascade.CascadeContainer,
							containerInfo:containerInfos
						};
				var route=new wxm.route.Route(containerInfo);
				this.addRoute(route);
			}
		}
	},
	startListener:function(){
		$(window).bind("hashchange",this.hashChangeHandler());
	}
});