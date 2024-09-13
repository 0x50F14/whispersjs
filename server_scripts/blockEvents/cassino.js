BlockEvents.rightClicked('kubejs:rdf_stairs', event => {
    let blockResult = event.player.rayTrace().block
    if (blockResult?.id == 'kubejs:rdf_stairs') {
        event.player.tell("[CASSINO RODA DA FORTUNA]");
        if (event.player.mainHandItem?.id == "minecraft:emerald") {
            event.player.tell("Você está apostando " + event.player.mainHandItem.count + " esmeraldas." )
            race(event.player.mainHandItem.count, event)
        } else {
            event.player.tell("Você precisa apostar esmeraldas!")
            event.cancel();
        }
    }
})
BlockEvents.rightClicked('kubejs:rdf_roullete', event => {
    let blockResult = event.player.rayTrace().block
    if (blockResult?.id == 'kubejs:rdf_roulette') {
        event.player.tell("[CASSINO RODA DA FORTUNA]");
        if (event.player.mainHandItem?.id == "minecraft:emerald") {
            event.player.tell("Você está apostando " + event.player.mainHandItem.count + " esmeraldas." )
            race2(event.player.mainHandItem.count, event)
            return
        } else {
            event.player.tell("Você precisa apostar esmeraldas!")
            event.cancel();
        }
    }
})
function race(bet, event) {
    let resultBet = false
    let is_lucky = Math.floor(Math.random() * 1000);
    let winPool = bet * 2
    if (is_lucky % bet === 0) { 
        if ((Math.floor(Math.random() * 13) + 1) % 2 === 0){
            resultBet = true
        }else{
            if((Math.floor(Math.random() * 8) + 1) % 2 === 0){
                resultBet = true
            } else {
                if((Math.floor(Math.random() * 17) + 1) % 2 === 0){
                    resultBet = true
                } else resultBet = false
            }
        }
    } else {
        resultBet = false
    }
    if(resultBet){
        event.server.runCommandSilent(`give ${event.player.username} minecraft:emerald ${winPool}`)
        event.server.runCommandSilent(`give ${event.player.username} minecraft:emerald ${winPool}`)
        event.player.tell("Você ganhou a aposta.")
        event.cancel();
    }else{
        event.server.runCommandSilent(`clear ${event.player.username} minecraft:emerald ${bet}`)
        event.player.tell("Você perdeu a aposta.")
        event.cancel();
    }
}
function race2(bet, event) {
    let resultBet = false
    let is_lucky = Math.floor(Math.random() * 50);
    let winPool = bet + 1
    if (is_lucky % bet === 0) { 
        resultBet = true
    } else {
        if ((Math.floor(Math.random() * 13) + 1) % 2 === 0){
            resultBet = true
        }else{
            if((Math.floor(Math.random() * 8) + 1) % 2 === 0){
                resultBet = true
            } else {
                if((Math.floor(Math.random() * 17) + 1) % 2 === 0){
                    resultBet = true
                } else resultBet = false
            }
        }
    }
    if(resultBet){
        event.server.runCommandSilent(`give ${event.player.username} minecraft:emerald ${winPool}`)
        event.player.tell("Você ganhou a aposta.")
    }else{
        event.server.runCommandSilent(`clear ${event.player.username} minecraft:emerald ${bet}`)
        event.player.tell("Você perdeu a aposta.")
    }
}