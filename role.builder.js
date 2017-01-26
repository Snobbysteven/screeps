/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.builder');
 * mod.thing == 'a thing'; // true
 */

var roleBuilder = {

    /** @param {Creep} creep **/
    run: function(creep) {

		if (creep.memory.building && creep.carry.energy == 0) {
			creep.memory.building = false;
		}
		if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
			creep.memory.building = true;
		}
		
        if(Game.spawns.Spawn1.room.energyAvailable > 0){
		if (creep.memory.building) {
			var targets = creep.room.find(FIND_CONSTRUCTION_SITES,{filter: (s)=>{return s.my}});
			console.log(targets);
			console.log(creep.memory.building);
			if (targets.length) {
				if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0]);
				}
			}else {
			   creep.moveTo(Game.flags.Room2);

			}

		} else {
			 /**var loc = creep.room.find(FIND_STRUCTURES, {
						filter: (structure) => {
						return (structure.structureType == STRUCTURE_EXTENSION ||
					//structure.structureType == STRUCTURE_SPAWN ||
					structure.structureType == STRUCTURE_STORAGE ||
					structure.structureType == STRUCTURE_CONTAINER ||
					structure.structureType == STRUCTURE_TOWER) && structure.energy > structure.energyCapacity / 2;
		}
		});
		**/
                var sources = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] <= 1000000)
                }
            });
                        if(creep.room.storage.store[RESOURCE_ENERGY] < 1000000){
                   if(sources[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                }

		/**
		 * if(loc.length !=0) {
			creep.moveTo(loc[0]);
			loc[0].transferEnergy(creep);
			
	//	}
			/*
			 var targets = creep.pos.findNearest(Game.CONSTRUCTION_SITES);
			 if(targets) {
			 if(!creep.pos.isNearTo(targets))
			 creep.moveTo(targets);

			 // if(creep.pos.inRangeTo(targets, 0))
			 //creep.suicide();

			 creep.build(targets);
			 return;
			 } */

		}
		//if(targets.length < 0){
		 //   creep.moveTo(Game.flags.idle);
	//	}
        } 
	}

};

module.exports = roleBuilder;