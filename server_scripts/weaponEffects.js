//! ZHEUS SWORD LIGHHTNING BOLT
ItemEvents.rightClicked(event => {
let x = event.player.x
let y = event.player.y + 7
let z = event.player.z
if (event.item.id != "kubejs:zheus_sword") return
event.server.runCommandSilent(`summon minecraft:lightning_bolt ${x} ${y} ${z}`);
})