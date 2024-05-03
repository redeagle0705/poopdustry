
var utils = require("utils");
var atlas = require("atlas");

Events.on(EventType.ClientLoadEvent, 
cons(e => {
	Log.info("Client load")

	utils.eachType(ContentType.item, item=>{
		atlas.setupIcon("item",item.name,item.fullIcon);
	});
	
	utils.eachType(ContentType.unit, unit=>{
		atlas.setupIcon("unit",unit.name + "-outline", utils.Load("unit-"+unit.name + "-outline"));
		unit.loadIcon();
		atlas.setupIcon("unit",unit.name,unit.fullIcon);
	});
})
);
