/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('role.tower');
 * mod.thing == 'a thing'; // true
 */

var roleTower = {
    run: function(towers) {
        var target = towers[0].pos.findClosestByRange(FIND_HOSTILE_CREEPS);
        if(target != undefined){
            towers[0].attack(target);
        };

    }
};

module.exports = roleTower;