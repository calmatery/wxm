wxm.route.Route=Spine.Class.create({
	init:function(options){
		this.routeFragments= options.routeFragments;
		this.containerFactory=options.containerFactory;
		this.containerInfo=options.containerInfo;
		this.initRegExpPos();
		this.initCompareInfo();
	},
	initRegExpPos:function(){
		this.firstRegexpPos=-1;
		for(var i=0;i<this.routeFragments.length;i++){
			if(this.routeFragments[i].isRegExp){
				this.firstRegexpPos=i;
				break;
			}
		}
	},
	compare:function(other){
		if(this.firstRegexpPos<other.firstRegexpPos)
			return -1;
		if(this.firstRegexpPos>other.firstRegexpPos)
			return 1;
		if(this.maxSerialNO>other.maxSerialNO)
			return -1;
		if(this.maxSerialNO<other.maxSerialNO)
			return 1;
		if(this.minSerialNO>other.minSerialNO)
			return -1;
		if(this.minSerialNO<other.minSerialNO)
			return 1;
		return 0;
	},
	initCompareInfo:function(){
		var max=null,min=null;
		for(var i=0;i<this.routeFragments.length;i++){
			(max==null||max<this.routeFragments[i].serialNO)&&(max=this.routeFragments[i].serialNO);
			(min==null||min>this.routeFragments[i].serialNO)&&(min=this.routeFragments[i].serialNO);
		}
		this.maxSerialNO=max;
		this.minSerialNO=min;
	},
	matched:function(url){
		var url_i=0,route_i=0;
		for(;url_i<url.urlFragments.length&&
			route_i<this.routeFragments.length;url_i++,route_i++){
			if(!this.routeFragments[route_i].isForMatch){
				url_i--;
				continue;
			}
			if(!this.routeFragments[route_i].match(url.urlFragments[url_i]))
				break;
		}
		this.matchedIndex=url_i-1;
		this.matchedRouteIndex=route_i-1;
	}
});