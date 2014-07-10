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
		console.log(route);
	}
});