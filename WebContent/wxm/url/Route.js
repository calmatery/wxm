(function(v){
	var wxm=v.wxm=v.wxm||{};
	var url=wxm.url=wxm.url||{};
	
	url.Route=Spine.Class.create({
		init:function(fragments,view,serialNO){
			this.fragments= fragments;
			this.view=view;
			this.serialNO=serialNO;
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
})(window);