wxm.layout.cascade.AtomContainer=wxm.layout.AbstractContainer.create({
	serialNO:0,
	render:function(){
		this.el.append(this.nextEl);
		this.setNextElProp();
	},
	setNextElProp:function(){
		//this.nextEl&&this.nextEl.css({width:'100px'});
		//设置下一个元素的属性
	}
});