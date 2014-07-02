(function(v){
	var wxm=v.wxm=v.wxm||{};
	var url=wxm.url=wxm.url||{};
	
	url.RouteManager=Spine.Class.create({
		init:function(){
			this.routes=[];
		},
		getView:function(url){
			
		},
		addRoute:function(route){
			this.routes.push(route);
		},
		startTheListener:function(){
			
		}
	});
	
})(window);