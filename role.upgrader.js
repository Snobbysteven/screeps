/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.upgrader');
 * mod.thing == 'a thing'; // true
 */

var roleUpgrader = {

    /** @param {Creep} creep **/
    run: function(creep) {
        if(Game.spawns.Spawn1.room.energyAvailable >= 10){
        if(0 != creep.carry.energy) {
            var toupgrade = creep.room.find(FIND_MY_STRUCTURES);
            if(creep.upgradeController(toupgrade[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(toupgrade[0]);
            }
        } else {
            var loc = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                    return (structure.structureType == STRUCTURE_STORAGE && structure.store[RESOURCE_ENERGY] <= 1000000)
        }});
            if(loc[0].transfer(creep, RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(loc[0]);
            }


        }
        }
    }
};

module.exports = roleUpgrader;