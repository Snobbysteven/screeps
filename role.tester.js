var roleTester = {
    run: function(creep) {
        if(creep.carry.energy == 0){
            creep.memory.tester = true;
        }
        if(creep.carry.energy == creep.carryCapacity){
            creep.memory.tester = false;
        }

        if (creep.memory.tester) {
            var sources = creep.room.find(FIND_SOURCES);
            var loc = [];

            for(i = 0; i <= sources.length-1; i++){
                if(sources[i].energy >= (sources[i].energyCapacity / 2)){
                   loc.push(sources[i]);
                }
            }

            var target = creep.room.find(FIND_DROPPED_ENERGY);
            if(target.length > 0)  {
               if(creep.pickup(target[1]) == ERR_NOT_IN_RANGE){
               creep.moveTo(target[1]);
               }
            }


        } else {
                    var sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
		
		}
            });
        }
        
        if(creep.carry.energy > 0){
                                var sources = creep.room.find(FIND_STRUCTURES, {
                        filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION ||
                    structure.structureType == STRUCTURE_SPAWN ||
                    structure.structureType == STRUCTURE_TOWER) && structure.energy < structure.energyCapacity;
		
		}
            });
        
            
                if(sources.length > 0){
                    if(creep.transfer(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
            }
            }else {
                var sources = creep.room.find(FIND_STRUCTURES, {
                            filter: (structure) => {
                            return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] <= 1000000)
                }
            });
            
            if(creep.room.storage.store[RESOURCE_ENERGY] < 1000000){
                   if(creep.transfer(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                        creep.moveTo(sources[0]);
                    }
                }
                }
        }
                


    }
};

module.exports = roleTester;