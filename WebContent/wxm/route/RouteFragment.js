wxm.route.RouteFragment=Spine.Class.create({
	init:function(option){
		this.serialNO=option.serialNO;
		this.routeFragment=option.routeFragment;
		this.urlFragment=null;
		this.isForMatch=!0;
		this.isRegExp=!1;
		if(this.routeFragment&&(typeof this.routeFragment=="string")&&
				this.routeFragment.constructor===String){
			this.match=this.stringMatch;
		}
		else if(this.routeFragment&&this.routeFragment.constructor===RegExp){
			var source=this.routeFragment.source;
			source.substr(0,1)!='^'&&(source='^'+source);
			source.substr(source.length-1,1)!='$'&&(source=source+'$');
			var gi=this.routeFragment.ignoreCase?'i':''+this.routeFragment.global?'g':'';
			source!=this.routeFragment.source&&(this.routeFragment=new RegExp(source,gi),
					console.error('正则表达式必须是以^开头，以$结尾！！'));
			this.match=this.regexpMatch;
			this.isRegExp=!0;
		}
		else
			throw "fragment的类型异常！";
	},
	stringMatch:function(urlFragment){
		this.urlFragment=urlFragment;
		return this.routeFragment==urlFragment;
	},
	regexpMatch:function(urlFragment){
		this.urlFragment=urlFragment;
		this.routeFragment.lastIndex=0;
		return this.routeFragment.test(urlFragment);
	}
});