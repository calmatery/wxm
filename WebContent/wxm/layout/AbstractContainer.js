wxm.layout.AbstractContainer=wxm.event.AbstractEventMedium.create({
	renderTo:function(el){
		throw "";
	},
	getNextMedium:function(){
		return null;
	},
	remove:function(){
		this.el.slideUp('slow',function(){
			this.remove();
		});
	}
});