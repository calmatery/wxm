wxm.route.Route=Spine.Class.create({
	init:function(options){
		this.fragments= options.fragments;
		this.containerFactory=options.containerFactory;
		this.containerInfo=options.containerInfo;
		this.serialNO=options.serialNO;
	},
	getSerialNO:function(){
		return this.serialNO?this.serialNO:this.serialNO=this.getMaxFragmentsSerialNO();
	},
	getMaxFragmentsSerialNO:function(){
		var max=null;
		for(var i=0;i<this.fragments.length;i++){
			(max==null||max<this.fragments[i].serialNO)&&(max=this.fragments[i].serialNO);
		}
		return max;
	},
	matched:function(url){
		var url_i=0,route_i=0;
		for(;url_i<url.fragments.length&&
			route_i<this.fragments.length;url_i++,route_i++){
			if(!this.fragments[route_i].isForMatch){
				url_i--;
				continue;
			}
			if(!this.fragments[route_i].match(url.fragments[url_i]))
				break;
		}
		this.matchedIndex=url_i-1;
	}
});