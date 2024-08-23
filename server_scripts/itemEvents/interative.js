//! SYRINGE
ItemEvents.rightClicked('kubejs:syringe', event => {
if(event.target.type != "minecraft:player" && event.item.id != "kubejs:syringe") return
if(event.entity.offHandItem != "kubejs:vaccine_vial") {
event.player.tell(Text.red("Você precisa estar segurando um frasco de vacina."))
return
}
let t = event.target.entity
event.server.runCommandSilent(`effect clear ${t}`);
event.server.runCommandSilent(`effect give ${t} minecraft:regeneration 10 255 1`);
event.player.tell(Text.green("------------------------------"))
event.player.tell(Text.green('Vacina aplicada em: '+ event.target.entity.name.string))
event.player.tell(Text.green(new Date().toLocaleDateString()))
event.player.tell(Text.green("------------------------------"))
event.server.runCommandSilent(`clear ${event.player.username} kubejs:vaccine_vial 1`);
event.player.addItemCooldown('kubejs:syringe', 5)

event.target.entity.tell(Text.green("------------------------------"))
event.target.entity.tell(Text.green('Vacina aplicada em: '+ event.target.entity.name.string))
event.target.entity.tell(Text.green(new Date().toLocaleDateString()))
event.target.entity.tell(Text.green("------------------------------"))
})
//! ZANEE
ItemEvents.rightClicked('kubejs:clown_stick', e => {
    if (e.entity.offHandItem == "minecraft:dirt")
        e.server.runCommandSilent(`gamemode survival ${e.player.username}`)
    if (e.entity.offHandItem == "minecraft:cobblestone")
        e.server.runCommandSilent(`gamemode creative ${e.player.username}`)
    e.player.addItemCooldown('kubejs:clown_stick', 5)
})

ItemEvents.rightClicked("kubejs:wheel_of_fortune", event => {
    let player = event.player
    event.player.tell(Text.white("Uma carta normal de tarot: A Roda da Fortuna"))
    player.addItemCooldown('kubejs:wheel_of_fortune', 700)
})
ItemEvents.rightClicked("kubejs:the_magician", event => {
    let player = event.player
    event.player.tell(Text.white("Uma carta normal de tarot: O Mago"))
    player.addItemCooldown('kubejs:the_magician', 700)
})
ItemEvents.rightClicked("kubejs:the_hanged", event => {
    let player = event.player
    event.player.tell(Text.white("Uma carta normal de tarot: O Enforcado"))
    player.addItemCooldown('kubejs:the_hanged', 700)
})