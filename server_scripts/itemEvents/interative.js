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

//! SOPHIE LETTERS
ItemEvents.rightClicked("kubejs:sophies_letter", event => {
    let player = event.player
    if (player.username == "luhgplays"){
    event.player.tell(Text.red("-------------------------------------------------"))
        event.player.tell(Text.red("Para: Sabine."))
        event.player.tell(Text.red(""))
        event.player.tell(Text.red("Meu bem, eu preciso ser breve."))
        event.player.tell(Text.red("Tem algo para voce no meu closet."))
        event.player.tell(Text.red("No armario da direita, na terceira gaveta, em baixo da blusa branca"))
        event.player.tell(Text.red("Eu espero que voce goste"))
        event.player.tell(Text.red("Com amor, Sophie"))
        event.player.tell(Text.red("-------------------------------------------------"))
        player.addItemCooldown('kubejs:sophies_letter', 300)}
    if (player.username == "Kray342"){
        event.player.tell(Text.redx("-------------------------------------------------"))
        event.player.tell(Text.red("Para: Rem."))
        event.player.tell(Text.red(""))
        event.player.tell(Text.red("Filho, a mmamae precisa ser rapida.."))
        event.player.tell(Text.red("A estrela me prometeu que iria te entregar isso"))
        event.player.tell(Text.red("Fiquei sabendo que voce queria ter uma.."))
        event.player.tell(Text.red("Da sua querida mae, Sophie"))
        event.player.tell(Text.red("-------------------------------------------------"))
        event.server.runCommandSilent(`give ${event.player.username} minecraft:spawn_egg_centipede`);
        player.addItemCooldown('kubejs:sophies_letter2', 300)}
})