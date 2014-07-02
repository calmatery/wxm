(function(v){
	var wxm=v.wxm=v.wxm||{};
	var view=wxm.view=wxm.view||{};
	view.AbstractView = Spine.Class.create({
		init:function(){
			throw ("NotOverrideException");
		}
	});
})(window);