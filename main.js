var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');
var roleRepairer = require('role.repairer');
var roleTester = require('role.tester');
var Respawner = require('respawner');
var roleHarvester2 = require('role.harvester2');
var roleTester2 = require('role.tester2');
var roleTower = require('role.tower');
var roleRepairerWall = require('role.repairerwall');
//var roleTransporter = require('role.transporter');

module.exports.loop = function () {
    //////

    
    Respawner.run();

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'repairer') {
            roleRepairer.run(creep);
        }
        if(creep.memory.role == 'tester') {
            roleTester.run(creep);
        }
        if(creep.memory.role == 'harvester2') {
            roleHarvester2.run(creep);
        }
        if(creep.memory.role == 'tester2') {
            roleTester2.run(creep);
        }
        if(creep.memory.role == 'repairerwall') {
            roleRepairerWall.run(creep);
        }
        
        
        
        var towers = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {filter: {structureType: STRUCTURE_TOWER}});
    if (towers.length!=0){
            roleTower.run(towers);
    }
    
       // if(creep.memory.role == 'transporter'){
        //    roleTransporter.run(creep);
       // }
    } 
}