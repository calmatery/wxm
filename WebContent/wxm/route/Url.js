wxm.route.Url=Spine.Class.create({
	init:function(url){
		if(url&&(typeof url=="string")&&
				url.constructor===String&&
				url.indexOf(" ")<0&&
				url.indexOf("\\")<0&&
				url.indexOf("//")<0)
		{
			this.urlFragments=url.split("/");
			this.urlFragments[0]==""&&this.urlFragments.shift();
		}
		else{
			throw("输入的url异常:"+url);
		}
	}
});