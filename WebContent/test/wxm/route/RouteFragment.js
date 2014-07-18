(function(v){
	QUnit.test( "获取排序信息", function( assert ) {
		var routeFragment=new wxm.route.RouteFragment({fragment:"Index"});
		assert.equal(routeFragment.match,wxm.route.RouteFragment.prototype.stringMatch);
		
		var regexp=new RegExp();
		routeFragment=new wxm.route.RouteFragment({fragment:regexp});
		assert.equal(routeFragment.match,wxm.route.RouteFragment.prototype.regexpMatch);
	});
})(window);