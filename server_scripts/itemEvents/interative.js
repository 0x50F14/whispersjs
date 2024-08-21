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
ItemEvents.rightClicked("kubejs:strenght_magatama", event => {
    let player = event.player
    if (player.username != "Zanee_7") {
        event.server.runCommandSilent(`gamemode survival ${event.player.username}`);
    }
})
ItemEvents.rightClicked("kubejs:speed_magatama", event => {
    let player = event.player
    if (player.username == "Zanee_7") {
    event.server.runCommandSilent(`gamemode survival ${event.player.username}`);
}
})

//! SOPHIE LETTERS
ItemEvents.rightClicked("kubejs:the_star", event => {
    let player = event.player
    if (player.username == "luhgplays"){
    event.player.tell(Text.white("-------------------------------------------------"))
        event.player.tell(Text.white("Para: Sabine."))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("Meu bem, eu preciso ser breve.. "))
        event.player.tell(Text.white("Estrela me falou que posso escrever apenas poucas palavras."))
        event.player.tell(Text.white("Obrigada por me salvar, Sabine, eu te amo."))
        event.player.tell(Text.white("Não precisa se preocupar comigo, eu estou vendo cenas lindas aqui do outro lado.."))
        event.player.tell(Text.white("Mas confesso que estou com muita saudade da minha família: você e Rem, explique sobre essas cartas pra ele, por favor.."))
        event.player.tell(Text.white("Com muito amor, Sophie"))
        event.player.tell(Text.white("-------------------------------------------------"))}
    if (player.username == "Kray342"){
        event.player.tell(Text.white("-------------------------------------------------"))
        event.player.tell(Text.white("Para: Rem."))
        event.player.tell(Text.white(""))
        event.player.tell(Text.white("Filho, a mamãe precisa ser rápida.."))
        event.player.tell(Text.white("A Estrela me prometeu que iria te entregar isso"))
        event.player.tell(Text.white("Fiquei sabendo que você queria ter uma dessas.."))
        event.player.tell(Text.white("Eu te amo, Rem"))
        event.player.tell(Text.white("Da sua querida mãe, Sophie"))
        event.player.tell(Text.white("-------------------------------------------------"))
        event.server.runCommandSilent(`give ${event.player.username} minecraft:spawn_egg_centipede`);}
    player.addItemCooldown('kubejs:sophies_letter', 300)
})