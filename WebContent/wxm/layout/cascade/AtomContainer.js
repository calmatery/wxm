wxm.layout.cascade.AtomContainer=Spine.Controller.create({
	init:function(options){
		this.parent=options.parent;
		this.parent&&(this.parent.child=this);
	}
});