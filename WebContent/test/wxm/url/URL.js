(function(v){
	QUnit.test( "普通测试1", function( assert ) {
		var url=new wxm.url.URL("test/te1/te");
		console.log(url);
		assert.equal(url.fragments.length,3);
	});
	
	QUnit.test( "普通测试2", function( assert ) {
		var url=new wxm.url.URL("/test/te1/te");
		console.log(url);
		assert.equal(url.fragments.length,3);
	});
	
	QUnit.test( "空格测试", function( assert ) {
		var url=new wxm.url.URL(" ");
		console.log(url);
		assert.equal(url.fragments,null);
	});
	
	QUnit.test( "空值测试", function( assert ) {
		var url=new wxm.url.URL(null);
		console.log(url);
		assert.equal(url.fragments,null);
	});
	
	QUnit.test( "未定义测试", function( assert ) {
		var url=new wxm.url.URL(undefined);
		console.log(url);
		assert.equal(url.fragments,null);
	});
	
	QUnit.test( "两端包含空的URL", function( assert ) {
		var url=new wxm.url.URL(" test/te1/te ");
		console.log(url);
		assert.equal(url.fragments,null);
	});
	
	QUnit.test( "斜杠测试", function( assert ) {
		var url=new wxm.url.URL("test\\te1/te");
		console.log(url);
		assert.equal(url.fragments,null);
	});
	
	QUnit.test( "双反斜杠测试", function( assert ) {
		var url=new wxm.url.URL("test//te1/te");
		console.log(url);
		assert.equal(url.fragments,null);
	});
})(window);