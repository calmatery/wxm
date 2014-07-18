wxm.route.RouteFragment=Spine.Class.create({
	init:function(option){
		this.serialNO=0;
		this.fragment=option.fragment;
		if(this.fragment&&(typeof this.fragment=="string")&&
				this.fragment.constructor===String){
			this.match=this.stringMatch;
		}
		else if(this.fragment&&this.fragment.constructor===RegExp){
			this.match=this.regexpMatch;
		}
		else
			throw "fragment的类型异常！";
	},
	stringMatch:function(urlFragment){
		return this.fragment==urlFragment;
	},
	regexpMatch:function(urlFragment){
		return this.test(urlFragment);
	}
});