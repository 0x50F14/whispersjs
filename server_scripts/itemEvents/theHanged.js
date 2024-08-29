
ItemEvents.rightClicked("kubejs:the_hanged", event => {
    let player = event.player
    event.player.tell(Text.white("** Assim que você usa a carta leves acordes de um violão podem ser escutados a distância, você sente que rapidamente vai ser atendido... **"))
    event.server.runCommandSilent(`tell GRAaPPY ${player.username} utilizou a carta do Enforcado`)
    player.addItemCooldown('kubejs:the_hanged', 700)
})