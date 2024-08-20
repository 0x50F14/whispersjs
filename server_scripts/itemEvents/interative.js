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