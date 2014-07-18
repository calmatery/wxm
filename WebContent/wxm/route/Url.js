wxm.route.Url=Spine.Class.create({
	init:function(url){
		if(url&&(typeof url=="string")&&
				url.constructor===String&&
				url.indexOf(" ")<0&&
				url.indexOf("\\")<0&&
				url.indexOf("//")<0)
		{
			this.fragments=url.split("/");
			this.fragments[0]==""&&this.fragments.shift();
		}
		else{
			console.error("输入的url异常:"+url);
		}
	},
	matched:function(route){
		this.route=route;
		var url_i=0,route_i=0;
		for(;url_i<this.fragments.length&&
			route_i<route.fragments.length;url_i++,route_i++){
			if(!route.fragments[route_i].match(this.fragments[url_i])){
				break;
			}
		}
		this.matchedIndex=url_i-1;
	}
});