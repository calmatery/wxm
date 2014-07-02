(function(v){
	QUnit.test( "获取排序信息", function( assert ) {
		var fragments=[];
		var fragment=new wxm.route.Fragment();
		fragment.serialNO=1;
		fragments.push(fragment);
		
		fragment=new wxm.route.Fragment();
		fragment.serialNO=2;
		fragments.push(fragment);
		
		fragment=new wxm.route.Fragment();
		fragment.serialNO=3;
		fragments.push(fragment);
		
		var route=new wxm.route.Route(fragments);
		console.log(route);
		assert.equal(route.getSerialNO(),3);
	});
})(window);