wxm.event.XEventManager=Spine.Controller.create({
	init:function(){
		this.evtMediums=[];
	},
	registerEventMedium:function(evtMedium){
		this.evtMediums.push(evtMedium);
	},
	trigger:function(eventName){
		var evtMediums=[];
		for(var i=0;i<this.evtMediums.length;i++){
			var evtMedium=this.evtMediums[i];
			evtMediums.push(evtMedium);
		}
		for(i=0;i<evtMediums.length;i++){
			evtMedium=evtMediums[i];
			var tmpEvtMedium=evtMedium.getNextMedium();
			if(tmpEvtMedium!=null){
				if(tmpEvtMedium instanceof Array)
					for(var j=0;j<tmpEvtMedium.length;j++){
						evtMediums.push(tmpEvtMedium[j]);
					}
				else
					evtMediums.push(tmpEvtMedium);
			}
		}
		
		var args=[];
		for(i=1;i<arguments.length;i++)
			args.push(arguments[i]);
		
		for(i=0;i<evtMediums.length;i++)
			this._execute(evtMediums[i],eventName,args);
	},
	_execute:function(evtMediums,eventName,args){
		var xEvent=evtMediums.constructor.prototype.xEvent;
		if(xEvent){
			for(var prop in xEvent){
				if(prop==eventName){
					var handler=evtMediums.constructor.prototype[xEvent[prop]];
					handler&&(handler.apply(evtMediums,args));
				}
			}
		}
	}
});