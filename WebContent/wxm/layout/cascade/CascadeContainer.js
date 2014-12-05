wxm.layout.cascade.CascadeContainer=wxm.layout.AbstractContainer.create({
	init:function(options){
		this.render();
	},
	getNextMedium:function(){
		return this.atomContainers;
	},
	checkForCommon:function(){
		this.difIdx=0;
		var atomContainers=this.atomContainers=[];
		if(this.lastContainer instanceof wxm.layout.cascade.CascadeContainer){
			for(;this.difIdx<this.lastContainer.atomContainers.length&&
				this.difIdx<this.atomContainerFactories.length;this.difIdx++){
				var atomContainer=this.lastContainer.atomContainers[this.difIdx];
				if(atomContainer instanceof this.atomContainerFactories[this.difIdx]){
					atomContainers[this.difIdx]=atomContainer;
					if(atomContainer.routeFragment.urlFragment!=this.lastContainer.atomContainers[this.difIdx].urlFragment){
						atomContainer.urlFragment=atomContainer.routeFragment.urlFragment;
						X.evtMgr.triggerEvtMedium(atomContainer,"urlChange",this.routeFragments[this.difIdx].urlFragment);
					}
				}
				else
					break;
			}
		}
	},
	initDifAtomContainer:function(){
		var atomElTag=this.atomContainerFactories[this.difIdx].prototype.tag;
		this.atomEl=$('<'+atomElTag+'>');
		if(this.lastContainer){
			this.lastDifAtom=this.lastContainer.atomContainers[this.difIdx];
			this.lastDifAtom.el.after(this.atomEl);
		}
		this.difIdx==0?(this.nextEl=this.atomEl,this.el.append(this.nextEl)):
			(this.atomContainers[this.difIdx-1].nextEl=this.atomEl,
					this.atomContainers[this.difIdx-1].setNextElProp());
		var atomNextElTag=this.atomContainerFactories[this.difIdx+1]&&
			this.atomContainerFactories[this.difIdx+1].prototype.tag;
		var atomNextEl=atomNextElTag&&$('<'+atomNextElTag+'>');
		var ctorOptions={
				routeFragment:this.routeFragments[this.difIdx],
				urlFragment:this.routeFragments[this.difIdx].urlFragment,
				previous:this.atomContainers[this.difIdx-1],
				el:this.atomEl,
				nextEl:atomNextEl
			};
		var atomContainerFactory=this.atomContainerFactories[this.difIdx];
		atomContainer=new atomContainerFactory(ctorOptions);
		atomContainer.render();
		this.atomContainers[this.difIdx]=atomContainer;
		this.difIdx++;
	},
	createAtomContainer:function(){
		var difIdx=this.difIdx;
		for(;this.difIdx<this.atomContainerFactories.length;this.difIdx++){
			var atomNextElTag=this.atomContainerFactories[this.difIdx+1]&&
				this.atomContainerFactories[this.difIdx+1].prototype.tag;
			var atomNextEl=atomNextElTag&&$('<'+atomNextElTag+'>');
			var ctorOptions={
					routeFragment:this.routeFragments[this.difIdx],
					urlFragment:this.routeFragments[this.difIdx].urlFragment,
					previous:this.atomContainers[this.difIdx-1],
					el:this.atomContainers[this.difIdx-1].nextEl,
					nextEl:atomNextEl
				};
			var atomContainerFactory=this.atomContainerFactories[this.difIdx];
			atomContainer=new atomContainerFactory(ctorOptions);
			atomContainer.render();
			this.atomContainers[this.difIdx]=atomContainer;
		}
		for(var i=difIdx||1;i<this.atomContainers.length;i++){
			this.atomContainers[i-1].next=this.atomContainers[i];
		}
	},
	render:function(){
		this.checkForCommon();
		if(this.difIdx==this.atomContainerFactories.length)
			return;
		this.initDifAtomContainer();
		this.createAtomContainer();
		this.lastDifAtom&&this.lastDifAtom.remove&&this.lastDifAtom.remove();
	}
});