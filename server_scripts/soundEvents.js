//! CLOWN HORN SOUND
ItemEvents.rightClicked(event => {
let x = event.player.x
let y = event.player.y
let z = event.player.z
const player = event.player
if (event.item.id != "kubejs:clown_horn") return
event.server.runCommandSilent(`playsound kubejs:clown_horn player @p ${x} ${y} ${z} 2 1`);
player.addItemCooldown('kubejs:clown_horn', 5)
})
//! SHELL WHISTLE SOUND
ItemEvents.rightClicked(event => {
let x = event.player.x
let y = event.player.y
let z = event.player.z
const player = event.player
if (event.item.id != "kubejs:shell_whistle") return
event.server.runCommandSilent(`playsound kubejs:shell_whistle player @p ${x} ${y} ${z} 2 1`);
player.addItemCooldown('kubejs:shell_whistle', 90)
})
//! DUCK SOUND
ItemEvents.rightClicked(event => {
let x = event.player.x
let y = event.player.y
let z = event.player.z
const player = event.player
if (event.item.id != "kubejs:duck") return
  event.server.runCommandSilent(`playsound kubejs:rubber_duck player @p ${x} ${y} ${z} 2 1`);
  player.addItemCooldown('kubejs:duck', 6)
})
//! POLAROID CAMERA SOUND
ItemEvents.rightClicked(event => {
let x = event.player.x
let y = event.player.y
let z = event.player.z
const player = event.player
if (event.item.id != "kubejs:polaroid_camera") return
  event.server.runCommandSilent(`playsound kubejs:polaroid_camera player @p ${x} ${y} ${z} 2 1`);
  player.addItemCooldown('kubejs:polaroid_camera', 8)
})