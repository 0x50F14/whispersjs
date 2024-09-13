ItemEvents.rightClicked("kubejs:the_star", event => {
    let player = event.player

    event.player.tell(Text.white("Uma carta normal de tarot: A Estrela"))
    player.addItemCooldown('kubejs:the_star', 700)
    
})