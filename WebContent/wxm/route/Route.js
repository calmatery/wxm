wxm.route.Route=Spine.Class.create({
	init:function(options){
		this.fragments= options.fragments;
		this.containerFactory=options.containerFactory;
		this.containerInfo=options.containerInfo;
		this.serialNO=options.serialNO;
	},
	getSerialNO:function(){
		return this.serialNO?this.serialNO:this.serialNO=this.getMaxFragmentsSerialNO();
	},
	getMaxFragmentsSerialNO:function(){
		var max=null;
		for(var i=0;i<this.fragments.length;i++){
			(max==null||max<this.fragments[i].serialNO)&&(max=this.fragments[i].serialNO);
		}
		return max;
	}
});