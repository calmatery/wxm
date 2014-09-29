wxm.route.RouteFragment=Spine.Class.create({
	init:function(option){
		this.serialNO=0;
		this.fragment=option.fragment;
		this.urlFragment=null;
		this.isForMatch=!0;
		if(this.fragment&&(typeof this.fragment=="string")&&
				this.fragment.constructor===String){
			this.match=this.stringMatch;
		}
		else if(this.fragment&&this.fragment.constructor===RegExp){
			var source=this.fragment.source;
			source.substr(0,1)!='^'&&(source='^'+source);
			source.substr(source.length-1,1)!='$'&&(source=source+'$');
			var gi=this.fragment.ignoreCase?'i':''+this.fragment.global?'g':'';
			source!=this.fragment.source&&(this.fragment=new RegExp(source,gi),
					console.error('正则表达式必须是以^开头，以$结尾！！'));
			this.match=this.regexpMatch;
		}
		else
			throw "fragment的类型异常！";
	},
	stringMatch:function(urlFragment){
		this.urlFragment=urlFragment;
		return this.fragment==urlFragment;
	},
	regexpMatch:function(urlFragment){
		this.urlFragment=urlFragment;
		
		return this.fragment.test(urlFragment);
	}
});