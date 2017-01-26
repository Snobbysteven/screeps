/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.harvester2');
 * mod.thing == 'a thing'; // true
 */

var roleHarvester2 = {
    run: function(creep){
        
        
            var sources = creep.room.find(FIND_SOURCES);
            var loc = [];

            for(i = 0; i <= sources.length-1; i++){
                if(sources[i].energy >= (sources[i].energyCapacity / 100)){
                    loc.push(sources[i]);
                }
            }

            if (creep.harvest(loc[1], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(loc[1]);
            }
            
        /** else {
            var sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_STORAGE ||
                    structure.structureType == STRUCTURE_CONTAINER ||
                    structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
        }
        } */ 
        
        
/**
            if(creep.transfer(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
            **/

       }
    }


module.exports = roleHarvester2;