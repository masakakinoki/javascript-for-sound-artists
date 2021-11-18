"use strict";


var drumMachines = ["MPC", "Maschine", "TR 808"];
var keyboards = ["Juno", "ARP", "Jupiter"];
var percussion = ["vibraphone", "bongos"];
var stringed = ["guitar", "bass", "harp"]
var instruments = drumMachines.concat(keyboards, percussion, stringed);

console.log(instruments); /* [ 'MPC','Maschine','TR 808','Juno','ARP','Jupiter','vibraphone', 'bongos','guitar','bass','harp' ]  */