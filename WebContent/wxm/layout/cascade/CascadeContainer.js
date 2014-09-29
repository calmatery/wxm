wxm.layout.cascade.CascadeContainer=wxm.layout.AbstractContainer.create({
	init:function(options){
		this.atomContainerFactories=options.atomContainerFactories;
		this.fragments=options.fragments;
		this.lastContainer=options.lastContainer;
		this.renderTo(this.el);
	},
	getNextMedium:function(){
		return this.atomContainers;
	},
	renderTo:function(el){
		var atomContainers=this.atomContainers=[],i=0,last=null;
		if(this.lastContainer instanceof wxm.layout.cascade.CascadeContainer){
			for(;i<this.lastContainer.atomContainers.length&&i<this.atomContainerFactories.length;i++){
				var atomContainer=this.lastContainer.atomContainers[i];
				if(atomContainer instanceof this.atomContainerFactories[i])
					atomContainers[i]=atomContainer;
				else
					break;
			}
			i>0&&(last=atomContainers[i-1]);
		}
		if(i==this.atomContainerFactories.length)
			return;
		var lastClassName=this.lastContainer&&this.lastContainer.atomContainerFactories[i].prototype.className;
		last?(last.nextEl&&last.nextEl.empty().removeClass(lastClassName)):el.empty().removeClass(lastClassName);

		for(;i<this.atomContainerFactories.length;i++){
			var atomContainerFactory=this.atomContainerFactories[i];
			var atomContainer;
			last?atomContainer=new atomContainerFactory({el:last.nextEl,previous:last,fragment:this.fragments[i]}):
				atomContainer=new atomContainerFactory({el:this.el,fragment:this.fragments[i]});
			atomContainer.render();
			atomContainers[i]=atomContainer;
			last=atomContainer;
		}
	}
});