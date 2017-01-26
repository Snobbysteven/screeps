/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.repairer');
 * mod.thing == 'a thing'; // true
 */

var roleRepairer = {
    run: function(creep) {
        /* decide working condition and source number */
	    if(creep.carry.energy ==0) {
	        creep.memory.repairing=true;
	    }
	    if(creep.carry.energy==creep.carryCapacity)
	    {
	        creep.memory.repairing=false;
	    }
	    
	    if(Game.spawns.Spawn1.room.energyAvailable > 10){
	    if(creep.memory.repairing){
            var loc = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] <= 1000000)
        }});
        if(creep.room.storage.store[RESOURCE_ENERGY] < 1000000){
                   if(loc[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(loc[0]);
        }
        }
	    }
        else {
            
//            var target = creep.pos.findClosestByRange(FIND_DROPPED_ENERGY);
 //           if(target) {
  //             if(creep.pickup(target) == ERR_NOT_IN_RANGE) {
   //            creep.moveTo(target);
   //             }
  //          }
            var targets=creep.room.find(FIND_STRUCTURES,{
                filter: (structure) => {
                            return ((structure.structureType == STRUCTURE_WALL) &&
                                structure.hits<=100000) || ((structure.structureType == STRUCTURE_ROAD) && structure.hits<=4000)
                                || ((structure.structureType == STRUCTURE_TOWER) && (structure.energy< 1000));
                        }
                
            });
            if(targets.length) {
                if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
			
        }


	    }
	
    }
};

module.exports = roleRepairer;