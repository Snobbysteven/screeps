/*
 * Module code goes here. Use 'module.exports' to export things:
 * module.exports.thing = 'a thing';
 *
 * You can import it from another modules like this:
 * var mod = require('respawner');
 * mod.thing == 'a thing'; // true
 */

var Respawner = {
    run: function(moneyAvai) {
        moneyAvai = Game.spawns.Spawn1.room.energyAvailable;
        console.log(moneyAvai);

        var harvester = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester'
        )
        ;
        var harvester2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester2'
        )
        ;
        var upgrader = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader'
        )
        ;
        var builder = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder'
        )
        ;
        var repairer = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer'
        )
        ;
        var tester = _.filter(Game.creeps, (creep) => creep.memory.role == 'tester'
        )
        ;
        var tester2 = _.filter(Game.creeps, (creep) => creep.memory.role == 'tester2'
        )
        ;
        var repairerwall = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairerwall'
        )
        ;
        if (harvester.length < 1) {
            if (moneyAvai >= 550) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], undefined, {role: 'harvester'});
            } else if (moneyAvai >= 450) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, MOVE], undefined, {role: 'harvester'});
            } else if (moneyAvai >= 350) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, MOVE], undefined, {role: 'harvester'});
            } else if (moneyAvai >= 250) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, MOVE], undefined, {role: 'harvester'});
            } else {

            }
        } else if (harvester2.length < 1) {
            if (moneyAvai >= 550) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, MOVE], undefined, {role: 'harvester2'});
            } else if (moneyAvai >= 450) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, MOVE], undefined, {role: 'harvester2'});
            } else if (moneyAvai >= 350) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, MOVE], undefined, {role: 'harvester2'});
            } else if (moneyAvai >= 250) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, MOVE], undefined, {role: 'harvester2'});
            } else {

            }
        } else if (upgrader.length < 1) {
            if (moneyAvai >= 950) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, WORK, WORK, WORK, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'upgrader'});
            } else if (moneyAvai >= 300) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
            } else {

            }
        } else if (builder.length < 0) {
            if (moneyAvai >= 600) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, WORK, WORK, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE], undefined, {role: 'builder'});
            } else if (moneyAvai >= 300) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            } else if (moneyAvai >= 250) {
                var newName = Game.spawns.Spawn1.createCreep([WORK, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
            } else {

            }
        } else if (tester.length < 3) {
            if (moneyAvai >= 400) {
                var newName = Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'tester'});
            } else if (moneyAvai >= 300) {
                var newName = Game.spawns.Spawn1.createCreep([CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'tester'});
            } else if (moneyAvai >= 250) {
                var newName = Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'tester'});
            } else if (moneyAvai >= 200) {
                var newName = Game.spawns.Spawn1.createCreep([CARRY, CARRY, MOVE, MOVE], undefined, {role: 'tester'});
            } else{
                
            }
        } else if (tester2.length < 2) {
            if (moneyAvai >= 400) {
                var newName = Game.spawns.Spawn1.createCreep([CARRY, CARRY, CARRY, CARRY, CARRY, CARRY, MOVE, MOVE, MOVE, MOVE], undefined, {role: 'tester2'});
            } else {
   
            }
        } else if(repairer.length < 1){
            if(moneyAvai >=600){
                var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'repairer'}); 
            }else if(moneyAvai>=400){
                var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairer'});
            }else if(moneyAvai>=250){
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'repairer'});
             }else{
     
             }
         } else if(repairerwall.length < 0){
            if(moneyAvai >=600){
                var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,WORK,CARRY,CARRY,MOVE,MOVE,MOVE], undefined, {role: 'repairerwall'}); 
            }else if(moneyAvai>=400){
                var newName = Game.spawns.Spawn1.createCreep([WORK,WORK,CARRY,CARRY,MOVE,MOVE], undefined, {role: 'repairerwall'});
            }else if(moneyAvai>=250){
                var newName = Game.spawns.Spawn1.createCreep([WORK,CARRY,CARRY,MOVE], undefined, {role: 'repairerwall'});
             }else{
     
             }
         } 
            }
};

module.exports = Respawner;

