//! STAR WAND PARTICLE
ItemEvents.rightClicked('kubejs:star_wand', event => {
let x = event.player.x
let y = event.player.y + 0.8
let z = event.player.z
WandParticleEvent(event, "minecraft:firework", x, y, z)
})
//! STRAWBERRY WAND PARTICLE
ItemEvents.rightClicked('kubejs:strawberry_wand', event => {
if (event.item.id != "kubejs:strawberry_wand"){
let x = event.player.x
let y = event.player.y + 0.7
let z = event.player.z
WandParticleEvent(event, "minecraft:heart", x, y, z)}
})
//! NETUNO OCARINA WEATHER CHANGE
ItemEvents.rightClicked('kubejs:ocarina', e => {{
    if (e.entity.offHandItem == "kubejs:clean_manuscript")
        e.server.runCommandSilent(`weather clear`)
    if (e.entity.offHandItem == "kubejs:rain_manuscript")
        e.server.runCommandSilent(`weather rain`)
    if (e.entity.offHandItem == "kubejs:thunder_manuscript")
        e.server.runCommandSilent(`weather thunder`)
e.player.addItemCooldown('kubejs:ocarina', 5)}
})
//? EXTRA FUNCTION WAND PART
function WandParticleEvent(event, eventParticle, eX, eY, eZ) {
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX+1} ${eY} ${eZ}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX-1} ${eY} ${eZ}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX} ${eY} ${eZ+1}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX} ${eY} ${eZ-1}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX} ${eY+1} ${eZ}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX+1} ${eY+1} ${eZ}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX-1} ${eY+1} ${eZ}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX} ${eY+1} ${eZ+1}`);
event.server.runCommandSilent(`particle ` + eventParticle + ` ${eX} ${eY+1} ${eZ-1}`);
}